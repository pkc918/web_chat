import React, { useState } from "react";
import { ChatLists } from "@/components/ChatLists/ChatLists";
import { ChatContent } from "@/components/ChatContent/ChatContent";

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
                    <ChatLists/>
                    <ChatContent/>
                </main>
            </div>
        </div>
    );
};