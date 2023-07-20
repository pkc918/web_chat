import React from "react";

export const UserRecord:React.FC = () => {
    return(
        <div className="flex py-4 px-2 cursor-pointer rounded-[0.5rem] hover:text-white hover:bg-[rgba(51,97,255,0.6)]">
            <img className="w-[25%] rounded-[100%]"
                 src="https://avatars.githubusercontent.com/u/58922004?v=4" alt="avatar"/>
            <div className="flex-1 flex flex-col justify-between px-2">
                <div className="flex justify-between">
                    <div>女神</div>
                    <div>12:45</div>
                </div>
                <div className="text-left text-[#c5c5c5] line-clamp-1">
                    我喜欢你！
                </div>
            </div>
        </div>
    )
}