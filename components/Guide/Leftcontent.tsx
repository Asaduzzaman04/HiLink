"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const LeftContent = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  // Using useInView hook to detect when the sections come into the viewport
  const inViewLeft = useInView(leftRef, {
    once: true,
  });

  const inViewRight = useInView(rightRef, { once: true });

  return (
    <div className="relative pb-10 flex flex-col lg:flex-row gap-5 lg:gap-20 w-full items-center">
      {/* Left Section: This will animate from bottom to top */}
      <motion.div
        ref={leftRef}
        className="flex flex-col justify-between py-5 lg:py-10 lg:flex-row gap-6 lg:gap-10 w-full items-center"
        initial={{ opacity: 0, y: 50, scale: 0 }} // Initial state (invisible and below)
        animate={{
          opacity: inViewLeft ? 1 : 0,
          y: inViewLeft ? 0 : 50,
          scale: inViewLeft ? 1 : 0.8,
        }} // Animates while in view
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left Content */}
        <div className="w-full flex flex-col  justify-center items-start">
          <div className="relative">
            <h2 className="text-3xl lg:text-6xl xl:max-w-[390px] font-bold">
              Guide You to Easy Path
            </h2>
          </div>
        </div>
      </motion.div>

      {/* Right Section: This will animate from right to left */}
      <motion.div
        ref={rightRef}
        className="lg:pr-10 lg:py-14  py-10   h-full flex justify-center items-start"
        initial={{ opacity: 0, x: 50, scale: 0 }} // Initial state (invisible and off-screen to the right)
        animate={{
          opacity: inViewRight ? 1 : 0,
          x: inViewRight ? 0 : 50,
          scale: inViewRight ? 1 : 0.8,
        }} // Animates while in view
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="font-medium  text-gray-700 text-justify">
          Only with the hilink application you will no longer get lost and get
          lost again, because we already support offline maps when there is no
          internet connection in the field. Invite your friends, relatives, and
          friends to have fun in the wilderness through the valley and reach the
          top of the mountain.
        </p>
      </motion.div>
    </div>
  );
};

export default LeftContent;
