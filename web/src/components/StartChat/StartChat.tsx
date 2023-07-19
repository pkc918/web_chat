import React from "react";
import { SvgIcon } from "@/components/SvgIcon/SvgIcon";

export const StartChat: React.FC = () => {

    let messages = [1, 2, 3, 4, 5].map(( val, index ) => {
        return <img key={ index } className="w-[40%] rounded-[100%] mx-auto my-2"
                    src="https://avatars.githubusercontent.com/u/58922004?v=4" alt="avatar"/>;
    });

    return (
        <nav className="w-[10%] flex flex-col justify-between items-center pb-6">
            <div className="w-10 h-16 flex items-center">
                <SvgIcon className="w-full h-10" name="close"/>
            </div>
            <div className="h-50%">
                { messages }
            </div>
            <div className="w-10 h-10 flex justify-center">
                <SvgIcon className="bg-white rounded-[100%] p-2" color="#fff" name="right"/>
            </div>
        </nav>
    );
};