import React from "react";
import { Input } from "@/components/Input/Input";
import { SvgIcon } from "@/components/SvgIcon/SvgIcon";
import { UserRecord } from "@/components/UserRecord/UserRecord";

export const Chat: React.FC = () => {
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
                        <div data-simplebar className="flex-1 px-2 overflow-y-scroll"
                        style={ {scrollbarWidth: "none"} }
                        >
                            {
                                [1,2,3,4,5,6,7,8,9].map((val,index) => {
                                    return <UserRecord key={val} />
                                })
                            }
                        </div>
                    </div>
                    <div className="w-full px-2 bg-[#fafbfc]">
                        <div className="border-b-[1px]">
                            <header className="h-16 flex justify-between">
                                <ul className="flex-1 flex items-center">
                                    <li className="h-full px-2 leading-[4rem] cursor-pointer flex items-center">
                                        <SvgIcon className="w-6 h-6" name="phone" />
                                    </li>
                                    <li className="h-full px-2 leading-[4rem] cursor-pointer flex items-center">
                                        <SvgIcon className="w-6 h-6" name="video" />
                                    </li>
                                </ul>
                                <h2 className="leading-[4rem]">宝贝</h2>
                                <div className="flex-1 flex justify-end">
                                    <div className="h-full px-2 cursor-pointer flex items-center ">
                                        <SvgIcon className="w-6 h-6" name="more" />
                                    </div>
                                </div>
                            </header>
                        </div>
                        <div>下</div>
                    </div>
                </main>
            </div>
        </div>
    );
};