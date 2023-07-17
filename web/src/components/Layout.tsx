import { Outlet } from "react-router";

export const Layout = () => (
    <div className="flex w-full">
        <nav>左侧边栏</nav>
        <main className="flex-1">
            <Outlet></Outlet>
        </main>
        <div>右边栏</div>
    </div>
);