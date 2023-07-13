import { motion } from "framer-motion"
import { Outlet } from "react-router";

export const Layout = () => (
    <>
        <h1>
            <Outlet/>
        </h1>

    </>
)