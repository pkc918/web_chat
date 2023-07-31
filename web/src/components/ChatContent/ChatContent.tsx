import React, { useState } from "react";
import data from "@emoji-mart/data/sets/14/apple.json";
import Picker from "@emoji-mart/react";
import { motion } from "framer-motion";
import { Input } from "@/components/Input/Input";
import { SvgIcon } from "@/components/SvgIcon/SvgIcon";
import { UserRecord } from "@/components/UserRecord/UserRecord";
import { BaseEmoji } from "emoji-mart/dist-es";
import { Header } from "@/components/ChatContent/Header";
import { ChatItem } from "@/components/ChatContent/ChatItem";


export const ChatContent: React.FC = () => {
    const [message, setMessage] = useState<string>("");
    const [showEmoji, setShowEmoji] = useState<boolean>(false);
    // 切换表情包展示状态
    const handleShowEmoji = () => {
        setShowEmoji(!showEmoji);
    };
    // 选择表情
    const handleSelectEmoji = ( rest: BaseEmoji ) => {
        console.log("表情包", rest);
        setMessage(message + (rest.native));
        setShowEmoji(false);
    };
    // 输入框输入内容
    const handleInsertMessage = ( event: React.ChangeEvent<HTMLTextAreaElement> ) => {
        setMessage(event.target.value);
    };
    // 发送
    const handleSendMsg = () => {
        console.log("发送消息：", message);
        setMessage("");
    };

    const handleSendVideo = () => {
        navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then(( stream ) => {
            navigator.mediaDevices.enumerateDevices().then(( list ) => {
                console.log("list:", list);
            }).catch(( err ) => {
                console.log("enum error");
            });
        }).catch(( err ) => {

        });

    };

    return (
        <div className="w-full h-full px-2 bg-[#fafbfc] flex flex-col">
            <div className="border-b-[1px]">
                <Header/>
            </div>
            <div className="bg-white h-full flex flex-col justify-between">
                <div data-simplebar="true" className="w-full max-h-[24.5rem] overflow-y-scroll"
                     style={ { scrollbarWidth: "none" } }>
                    <div className="w-full">
                        <div>你们已经添加成为好友，开始聊天吧！</div>
                        <ChatItem direction="left"/>
                        <ChatItem direction="left"/>
                        <ChatItem direction="left"/>
                        <ChatItem direction="right"/>
                    </div>
                </div>

                <div className="w-full border-[#eee] border-t-2 border-solid pt-2 relative">
                    {
                        showEmoji ? (
                            <motion.div
                                className="absolute bottom-[14rem]"
                                initial={ { scale: 0 } }
                                animate={ { translateY: 0, scale: 1 } }
                                transition={ {
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20
                                } }
                            >
                                <Picker data={ data } onEmojiSelect={ handleSelectEmoji }/>
                            </motion.div>) : null
                    }
                    <div className="flex justify-between">
                        <div className="flex">
                            <SvgIcon onClick={ handleShowEmoji } className="w-10 h-10 mx-1 cursor-pointer"
                                     name="emoji"/>
                            <SvgIcon className="w-10 h-10 mx-1" name="image"/>
                        </div>
                        <div className="flex">
                            <SvgIcon className="w-10 h-10 mx-1" name="phone"/>
                            <SvgIcon onClick={ handleSendVideo } className="w-10 h-10 mx-1 cursor-pointer"
                                     name="video"/>
                        </div>
                    </div>
                    <textarea
                        className="w-full h-[7rem] p-1 py-2 text-[1.2rem] resize-none focus:outline-none"
                        value={ message }
                        onChange={ handleInsertMessage }>
                                </textarea>
                    <div className="flex justify-end items-center">
                        <div
                            onClick={ handleSendMsg }
                            className="flex items-center mb-1 px-4 py-1 bg-[#747bff] text-white rounded-[0.2rem] cursor-pointer">
                            <span>发送</span>
                            <SvgIcon className="w-8 h-8" name="send"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};