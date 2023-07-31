import React from "react";
import { SvgIcon } from "@/components/SvgIcon/SvgIcon";

export const Header: React.FC = () => {
    return (
        <header className="h-16 flex justify-between">
            <div className="flex-1"></div>
            <h2 className="leading-[4rem]">宝贝</h2>
            <div className="flex-1 flex justify-end">
                <div className="h-full px-2 cursor-pointer flex items-center ">
                    <SvgIcon className="w-6 h-6" name="more"/>
                </div>
            </div>
        </header>
    )
}