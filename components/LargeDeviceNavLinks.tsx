import React from 'react';
import {NAV_LINKS} from "@/constants";
import Navlinks from "@/components/Navlinks";

const LargeDeviceNavLinks = () => {
    return (
        <ul className="hidden lg:flex gap-12 items-center text-lg">
            {NAV_LINKS?.map((link, idx) => (
                <Navlinks link={link} key={link.key} idx={idx}/>
            ))}
        </ul>
    );
};

export default LargeDeviceNavLinks;
