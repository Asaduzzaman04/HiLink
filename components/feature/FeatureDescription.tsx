"use client";
import React, { useRef } from 'react';
import Image from "next/image";
import {motion, useInView} from "framer-motion";

interface Item {
    icon: string;
    title: string;
    description: string;
}

const FeatureDescription = ({ items, time }: { items: Item; time: number }) => {
    const ref = useRef(null);
    const view : boolean  = useInView(ref, { once: true });

    return (
        <motion.li
            ref={ref}
            initial={{ opacity: 0 ,x: 400,}}
            animate={view ? {opacity : 1, x : 0} : {}}
            transition={{
                delay : time / 20,
                duration: 0.4,
                type: "spring",
                stiffness: 100,
                damping: 15,}}
            className="flex w-full flex-1 flex-col items-start  px-3  py-3.5 bg-white rounded-2xl  ">
            <div className="rounded-full p-3 lg:p-4 bg-green-50">
                <Image src={items.icon} alt={items.title} width={28} height={28} />
            </div>
            <h2 className="font-semibold text-xl mt-5 capitalize">{items.title}</h2>
            <p className="regular-16 mt-5 bg-white/80 text-gray-600 lg:mt-[30px] lg:bg-none">
                {items.description}
            </p>
        </motion.li>
    );
};

export default FeatureDescription;
