import React from "react";
import { SvgIcon } from "@/components/SvgIcon/SvgIcon";
import { MenuBtn } from "@/components/MenuBtn/MenuBtn";

export const SlideNav: React.FC = () => (
    <nav className="w-[20%] h-full">
        <div className="w-full h-full flex flex-col items-center px-[1.5rem]">
            <SvgIcon className="w-16 h-16" name="logo"/>
            <div className="flex-1 flex flex-col justify-between pb-6">
                <div className="w-full flex flex-col">
                    <div>
                        <SvgIcon className="w-[1.3rem] h-[1.3rem]" name="user"/>
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
                    <MenuBtn iconName="yingyong" btnTitle="Dashboard"/>
                    <MenuBtn iconName="message" btnTitle="Message"/>
                    <MenuBtn iconName="file" btnTitle="Files"/>
                    <MenuBtn iconName="cloud" btnTitle="Cloud"/>
                    <MenuBtn iconName="group" btnTitle="Group"/>
                    <MenuBtn iconName="setting" btnTitle="Setting"/>
                </div>
                <div>
                    <div className="w-full px-4 flex items-center justify-between py-2">
                        <div className="flex items-center">
                            <SvgIcon className="w-5 h-5" color="#c3cad9" name="question"/>
                            <div className="h-full flex items-center px-2">question</div>
                        </div>
                        <SvgIcon className="w-4 h-4" color="#c3cad9" name="right"/>
                    </div>
                    <div className="w-full px-4 flex items-center justify-between">
                        <div className="flex items-center">
                            <SvgIcon className="w-5 h-5" color="#c3cad9" name="question"/>
                            <div className="h-full flex items-center px-2">question</div>
                        </div>
                        <SvgIcon className="w-4 h-4" color="#c3cad9" name="right"/>
                    </div>
                </div>
            </div>
        </div>
    </nav>
);
