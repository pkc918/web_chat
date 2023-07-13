import { motion } from "framer-motion"
import { Outlet } from "react-router";

export const MyComponent = () => (
    <>
        <h1>
            <Outlet/>
        </h1>
        <motion.div
            className="w-24 h-24 bg-black"
            animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"]
            }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1
            }}
        />
    </>
)