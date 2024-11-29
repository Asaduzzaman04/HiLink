"use client";

import { NAV_LINKS } from "@/constants";
import Navlinks from "@/components/Navlinks";
import Image from "next/image";
import hamburger from "@/public/menu.svg";
import { useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { RiCloseLine } from "react-icons/ri"; // Import the close icon from React Icons

const SmallDeviceNavbar = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <div>
            {/* hamburger-menu */}
            <button onClick={handleClick} className="inline-block lg:hidden">
                <Image src={hamburger} width={30} alt="hamburger menu" />
            </button>

            {/* Animated Navbar */}
            <motion.ul
                initial={{ x: '100%' }} // Initially position to the right
                animate={{ x: clicked ? '0%' : '100%' }} // Slide from right to left on click
                transition={{ type: 'spring', stiffness: 300, damping: 30 }} // Smooth sliding animation
                className="flex z-[9999] flex-col lg:hidden fixed bg-white w-full h-full top-0 left-0 justify-center gap-12 items-center text-lg"
            >
                {/* Close Button */}
                <button
                    onClick={handleClick}
                    className="absolute border-2 border-zinc-700 p-1 top-6 right-6 text-2xl text-gray-600"
                >
                    <RiCloseLine />
                </button>

                {NAV_LINKS?.map((link, idx) => (
                    <Navlinks link={link} key={link.key} idx={idx} onClick={handleClick} />
                ))}
            </motion.ul>
        </div>
    );
};

export default SmallDeviceNavbar;
