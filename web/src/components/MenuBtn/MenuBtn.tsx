import React, { useState } from "react";
import { SvgIcon } from "@/components/SvgIcon/SvgIcon";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { useHref, useMatch } from "react-router";

interface MenuBtnProps {
    iconName: string;
    color?: string;
    btnTitle: string;
    href: string;
    activated: boolean;
}

export const MenuBtn: React.FC<MenuBtnProps> = ( props ) => {
    const { iconName = "yingyong", btnTitle = "Dashboard", color = "#c3cad9", href, activated } = props;
    return (
        <NavLink
            to={ href }
            className={ ( { isActive, isPending } ) => {
                return `w-[50%] text-[#c3cad9] ${ isPending ? "pending" : isActive ? "active" : "" }`;
            }
            }
        >
            <div className="flex flex-col items-center p-4 px-2 cursor-pointer">
                <SvgIcon className="w-8 h-8" color={ activated ? "#747bff" : color } name={ iconName }/>
                <span className="pt-4 text-bold text-[0.5rem]">{ btnTitle }</span>
            </div>
        </NavLink>
    );
};