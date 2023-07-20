import React, { useState } from "react";
import { SvgIcon } from "@/components/SvgIcon/SvgIcon";
import { MenuBtn } from "@/components/MenuBtn/MenuBtn";
import { useHref } from "react-router";

export const SlideNav: React.FC = () => {
    console.log("路径", useHref());
    const currentHref = useHref();
    const [menus] = useState([
        { href: "/123", iconName: "yingyong", btnTitle: "Dashboard" },
        { href: "/", iconName: "message", btnTitle: "Message" },
        { href: "/123", iconName: "file", btnTitle: "Files" },
        { href: "/123", iconName: "cloud", btnTitle: "Cloud" },
        { href: "/123", iconName: "group", btnTitle: "Group" },
        { href: "/123", iconName: "setting", btnTitle: "Setting" }
    ]);


    return (
        <nav className="w-[20%] h-full">
            <div className="w-full h-full flex flex-col items-center px-[1.5rem]">
                <SvgIcon className="w-16 h-16" name="logo"/>
                <div className="flex-1 flex flex-col justify-between pb-6">
                    <div className="w-full flex flex-col">
                        <div className="flex justify-between">
                            <SvgIcon className="w-[1.3rem] h-[1.3rem]" name="user"/>
                            <SvgIcon className="w-[1.3rem] h-[1.3rem]" name="more"/>
                        </div>
                        <div className="py-[1rem]">
                            <img className="w-20 mb-6 rounded-[100%] mx-auto"
                                 src="https://avatars.githubusercontent.com/u/58922004?v=4" alt="avatar"/>
                            <div>
                                <h1 className="font-bold pb-4">Hello PKC</h1>
                                <h2 className="text-[0.5rem] text-[#adb8cc] font-bold">2489964425@qq.com</h2>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-[0.6rem] flex flex-wrap border-[2px] border-solid border-[#edeff2]">
                        {
                            menus.map(( item, index ) => {
                                return (
                                    <MenuBtn key={ index } iconName={ item.iconName } btnTitle={ item.btnTitle }
                                             href={ item.href } activated={ currentHref === item.href }/>
                                );
                            })
                        }
                    </div>
                    <div>
                        <div className="w-full px-4 flex items-center justify-between py-2 cursor-pointer">
                            <div className="flex items-center">
                                <SvgIcon className="w-5 h-5" color="#c3cad9" name="question"/>
                                <div className="h-full flex items-center px-2 text-[#c3cad9]">question</div>
                            </div>
                            <SvgIcon className="w-4 h-4" color="#c3cad9" name="right"/>
                        </div>
                        <div className="w-full px-4 flex items-center justify-between">
                            <div className="flex items-center">
                                <SvgIcon className="w-5 h-5" color="#c3cad9" name="question"/>
                                <div className="h-full flex items-center px-2 text-[#c3cad9] cursor-pointer">question</div>
                            </div>
                            <SvgIcon className="w-4 h-4" color="#c3cad9" name="right"/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
