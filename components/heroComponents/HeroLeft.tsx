"use client"

import React from 'react';
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import HeroImage from "@/public/camp.svg";
import StarImage from "@/public/star.svg";
import Button from "@/components/Button";
import PlayImage from "@/public/play.svg";

// Animation variants type-safe declaration
const leftVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: (custom: number) => ({
        opacity: 1,
        x: 0,
        transition: { delay: custom * 0.2 },
    }),
};

const HeroLeft: React.FC = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="w-full relative z-30 flex flex-col flex-1 xl:w-1/2"
        >
            <Image
                src={HeroImage}
                alt="hero_image"
                className="absolute left-0 -top-8 w-12 lg:w-[50px] -z-50"
            />
            <motion.h1
                variants={leftVariants}
                custom={0}
                className="text-6xl lg:text-7xl font-bold text-black mt-10"
            >
                Putuk Truno Camp Area
            </motion.h1>
            <motion.p
                variants={leftVariants}
                custom={1}
                className="text-base mt-6 text-gray-30 xl:max-w-[520px]"
            >
                We want to be on each of your journeys seeking the satisfaction of
                seeing the incorruptible beauty of nature. We can help you on an
                adventure around the world in just one app.
            </motion.p>

            <motion.div
                variants={leftVariants}
                custom={2}
                className="my-11 flex justify-start items-center gap-5"
            >
                <div className="flex items-center gap-2">
                    {Array(5)
                        .fill(1)
                        .map((_, index) => (
                            <Image
                                src={StarImage}
                                key={index}
                                alt="star"
                                width={24}
                                height={24}
                            />
                        ))}
                </div>
                <p className="font-bold text-blue-70">
                    198k
                    <span className="font-medium ml-1">Excellent Reviews</span>
                </p>
            </motion.div>

            <motion.div
                variants={leftVariants}
                custom={3}
                className="z-50 flex flex-col lg:flex-row justify-center items-start gap-5 lg:items-center lg:justify-start"
            >
                <Button
                    type="button"
                    title="Download App"
                    variant="bg-green-50 px-8 py-5 text-white rounded-full w-auto"
                />
                <Button
                    type="button"
                    title="How we work?"
                    icon={PlayImage.src}
                    variant="bg-white px-8 py-3 text-gray-90 w-auto"
                />
            </motion.div>
        </motion.div>
    );
};

export default HeroLeft;
