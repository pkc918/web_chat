import React from "react";
import { SvgIcon } from "@/components/SvgIcon/SvgIcon";

interface MenuBtnProps {
    iconName: string;
    color?: string;
    btnTitle: string;
}

export const MenuBtn: React.FC<MenuBtnProps> = ( props ) => {
    const { iconName = "yingyong", btnTitle = "Dashboard", color = "#c3cad9" } = props;
    return (
        <div className="w-[50%] flex flex-col items-center p-4 px-2 cursor-pointer">
            <SvgIcon className="w-8 h-8" color={ color } name={ iconName }/>
            <span className="pt-4 text-bold text-[0.5rem] text-[#c3cad9]" >{ btnTitle }</span>
        </div>
    );
};