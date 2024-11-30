"use client";
import Image from "next/image";
import quoteImage from "@/public/quote.svg";
import { motion, useAnimation, AnimationControls } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const CampQuote: React.FC = () => {
    const controls: AnimationControls = useAnimation(); // Controls for the animation
    const ref = useRef<HTMLDivElement | null>(null); // Reference to the component
    const inView = useInView(ref, { once: true }); // Ensures it animates only once

    useEffect(() => {
        if (inView) {
            controls.start({
                scale: 1,
                x: 0,
                y: [0, -100, 0],
                transition: { duration: 0.5, damping: 10, stiffness: 100 },
            });
        }
    }, [inView, controls]);

    return (
        <motion.div
            ref={ref}
            initial={{ scale: 0, x: 100, y: -100 }}
            animate={controls}
            className="text-white flex justify-center z-20 mt-10 lg:-mt-44 lg:mr-40"
        >
            <div className="bg-green-50 p-5 lg:max-w-[450px] xl:max-w-[554px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
                <h2 className="text-3xl lg:text-5xl leading-tight capitalize text-white">
                    <strong>Feeling Lost</strong> And Not Knowing The Way?
                </h2>
                <p className="regular-14 xl:regular-16 mt-5 text-white">
                    Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting
                    lost is very large. That's why we are here for those of you who want to start an adventure.
                </p>
                <Image
                    src={quoteImage}
                    alt="camp-2"
                    width={186}
                    height={219}
                    className="absolute -right-6 bottom-4 w-[140px] lg:bottom-10 xl:-right-8 xl:w-[186px] 3xl:right-0"
                />
            </div>
        </motion.div>
    );
};

export default CampQuote;
