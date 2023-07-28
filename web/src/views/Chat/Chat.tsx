import React, { useState } from "react";
import data from "@emoji-mart/data/sets/14/apple.json";
import Picker from "@emoji-mart/react";
import { motion } from "framer-motion";
import { Input } from "@/components/Input/Input";
import { SvgIcon } from "@/components/SvgIcon/SvgIcon";
import { UserRecord } from "@/components/UserRecord/UserRecord";
import { BaseEmoji } from "emoji-mart/dist-es";

export const Chat: React.FC = () => {
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
        navigator.mediaDevices.getUserMedia({audio: true, video: true}).then((stream) => {
            navigator.mediaDevices.enumerateDevices().then((list) => {
                console.log("list:", list);
            }).catch((err) => {
                console.log("enum error");
            })
        }).catch((err) => {

        })

    };

    return (
        <div className="Chat h-full flex flex-col pb-6">
            <header className="h-16 flex items-center">
                <nav>
                    <a href="">About us</a>
                </nav>
            </header>
            <div className="flex-1 shadow-md rounded-[0.5rem] overflow-hidden">
                <main className="h-full flex">
                    <div className="flex flex-col w-[28%] bg-white">
                        <div className="mx-3 border-b-[1px]">
                            <Input className="h-16 focus:border-none focus:outline-none"
                                   placeholder="Search in Messages">
                                <SvgIcon className="w-16 h-16" name="search"/>
                            </Input>
                        </div>
                        <div data-simplebar="true" className="flex-1 px-2 overflow-y-scroll"
                             style={ { scrollbarWidth: "none" } }
                        >
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9].map(( val ) => {
                                    return <UserRecord key={ val }/>;
                                })
                            }
                        </div>
                    </div>
                    <div className="w-full h-full px-2 bg-[#fafbfc] flex flex-col">
                        <div className="border-b-[1px]">
                            <header className="h-16 flex justify-between">
                                <div className="flex-1"></div>
                                <h2 className="leading-[4rem]">宝贝</h2>
                                <div className="flex-1 flex justify-end">
                                    <div className="h-full px-2 cursor-pointer flex items-center ">
                                        <SvgIcon className="w-6 h-6" name="more"/>
                                    </div>
                                </div>
                            </header>
                        </div>
                        <div className="bg-white flex-1 flex flex-col">
                            <div className="w-full flex-1 relative">
                                聊天区
                                {
                                    showEmoji ? (
                                        <motion.div
                                            className="absolute bottom-3"
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
                            </div>
                            <div className="w-full border-[#eee] border-t-2 border-solid pt-2">
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
                </main>
            </div>
        </div>
    );
};