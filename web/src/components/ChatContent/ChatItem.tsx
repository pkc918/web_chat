import React, { useState } from "react";
import classNames from "classnames";
import { createPortal } from "react-dom";

interface ChatItemProps {
    direction: "right" | "left";
}

export const ChatItem: React.FC<ChatItemProps> = ( props ) => {
    const { direction = "right" } = props;
    const triangleClasses = classNames("direction", [(direction === "right" ? "direction-right" : "direction-left")]);

    return (
        <>
            <div className="w-full my-[2rem] flex justify-start items-center">
                { direction === "left" ? <img className="w-[8%] rounded-[100%] mr-3"
                                              src="https://avatars.githubusercontent.com/u/58922004?v=4"
                                              alt="avatar"/> : null }
                {
                    direction === "right" ? <div className="flex-1"></div> : null
                }
                <div
                    className=" inline-block max-w-[75%] min-h-[20px] bg-[#bbeba1] rounded-[8px] text-left relative">
                    <div className="relative px-2 py-1 z-[2]">
                        我喜欢你我喜欢你我喜欢你我喜欢你我喜欢你fdsafjdsalfjdsalf我喜欢你我喜欢你我喜欢你我喜欢你我喜欢你fdsafjdsalfjdsalf
                    </div>
                    <div
                        className={ triangleClasses }></div>
                </div>
                { direction === "right" ? <img className="w-[8%] rounded-[100%] ml-3"
                                              src="https://avatars.githubusercontent.com/u/58922004?v=4"
                                              alt="avatar"/> : null }
            </div>
        </>
    );
};