import React from 'react';
import LeftContent from "@/components/Guide/Leftcontent";
import  BoatImage from "@/public/boat.png"
import  DestinationImage  from "@/public/meter.svg"
import Image from "next/image";

const Guide = () => {

    return (
        <section className="px-6 lg:px-20 xl:px-32 flex flex-col justify-center items-center ">
            {/* Guide Section */}
            <LeftContent/>
            {/*right section*/}
            <div className={`relative  flex-1 w-full mt-0 lg:mt-10`}>

                <Image src={BoatImage}  alt="Boat"  className={`w-full object-cover aspect-square rounded-2xl lg:rounded-5xl md:aspect-auto`} />
                <div className={`shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] absolute flex text-black lg:w-[350px] w-[300px]  left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] bg-white px-6 py-10 justify-center items-center rounded-xl`}>
                        <div className={`flex w-full   gap-5 justify-center items-center `}>
                            {/*meter-image*/}
                                <div className={"h-full "}>
                                    <Image src={DestinationImage} alt={"meter image"}/>
                                </div>
                            {/*maps-details*/}
                            <div className={`flex gap-12 capitalize flex-col w-full h-full justify-around flex-1  `}>
                                {/*end destnation*/}
                                <div className={"flex-col flex gap-2 justify-start items-start"}>

                                        <h4 className={`flex justify-around gap-10  `}>
                                            <span className={`text-gray-600`}>destination</span>
                                            <span className={`text-green-500 font-semibold`}>50 min</span>
                                        </h4>
                                        <h3 className={`font-semibold text-xl lg:text-2xl`}>Aguas Calientes</h3>

                                </div>
                                {/*start-section*/}
                                <div>
                                    <div className={"flex-col w-full flex gap-2 justify-start items-start"}>
                                        <span className={`text-gray-600`}>Start track</span>
                                        <h3 className={`font-semibold text-xl lg:text-2xl`}>Wonorejo Pasuruan</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>

            </div>
        </section>
    );
};

export default Guide;
