import { Outlet } from "react-router";
import { SlideNav } from "@/components/SlideNav/SlideNav";
import React from "react";
import { StartChat } from "@/components/StartChat/StartChat";

export const Layout: React.FC = () => {
    return (
        <div className="flex w-full">
            <SlideNav/>
            <main className="flex-1">
                <Outlet></Outlet>
            </main>
            <StartChat/>
        </div>
    );
};