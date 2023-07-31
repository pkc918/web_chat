import React from "react";
import { Input } from "@/components/Input/Input";
import { SvgIcon } from "@/components/SvgIcon/SvgIcon";
import { UserRecord } from "@/components/UserRecord/UserRecord";

export const ChatLists: React.FC = () => {
    return (
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
    )
}