import React from "react";
import Image from "next/image";
import FoldedImage from "@/public/folded-map.svg";
import {PEOPLE_URL} from "@/constants";

type campType = {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
};

const CampSide = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: campType) => {
  return (
    <div
      className={`text-white min-w-[1100px] rounded-lg lg:rounded-r-5xl 2xl:rounded-5xl  w-full h-full ${backgroundImage}  py-10  bg-no-repeat`}
    >
      <div
        className={`h-full flex flex-col items-start justify-between px-6 lg:px-20 lg:py-10`}
      >
        <div className={`flex justify-center items-center  gap-4`}>
          <div className="rounded-full bg-green-50  p-4">
            <Image src={FoldedImage} alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-semibold text-white">{title}</h4>
            <p className="font-normal text-white">{subtitle}</p>
          </div>
        </div>

        <div className={`flex justify-center items-center  gap-4`}>

            <span className={`flex justify-center items-center -space-x-2.5`}>

            {PEOPLE_URL?.map((url: string, idx: number) => (

                <Image alt={url} src={url} key={++idx} width={30} height={30}/>))}
            </span>

          <p className="font-semibold  ">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

export default CampSide;
