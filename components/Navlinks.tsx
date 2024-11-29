"use client";
import React, {MouseEventHandler} from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Define the type for the props passed to Navlinks
type NavlinksProps = {
  link: {
    href: string;
    label: string;
  };
  idx: number;
  onClick? :MouseEventHandler<HTMLAnchorElement> | undefined
};

const Navlinks = ({ link, idx,onClick }: NavlinksProps) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx / 30, duration: 0.7 ,damping: 20, stiffness: 200 }}
      whileTap={{scale:1.3}} // for small-device
      whileHover={{scale : 1.2}} //for large device
      className="cursor-pointer"
    >
      <Link href={link.href} onClick={onClick}>

        <span>{link.label}</span>
      </Link>
    </motion.li>
  );
};

export default Navlinks;
