import React from 'react';
import LeftContent from "@/components/Guide/Leftcontent";

const Guide = () => {
    return (
        <section className="px-6 lg:px-20 xl:px-32 flex flex-col justify-center items-center border-2 border-blue-950 w-full">
            {/* Guide Section */}
            <LeftContent/>
            {/*right section*/}
            <div className={`border-2 border-black flex-1 w-full`}>
                hello
            </div>
        </section>
    );
};

export default Guide;
