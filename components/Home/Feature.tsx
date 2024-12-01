import React from "react";
import Image from "next/image";
import HomeImage from "@/public/camp.svg";
import MobileImage from "@/public/phone.png";
import { FEATURES } from "@/constants";
import FeatureDescription from "@/components/feature/FeatureDescription";

const Feature = () => {
  return (
    <section
      className={`flex-col px-6 lg:px-20 flex justify-center items-center  overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24`}
    >
      {/*feature-intro*/}
      <div className={`relative`}>
        <div className="absolute left-0 -top-6">
          <Image src={HomeImage} alt="home image"  />
        </div>
        <h2 className="uppercase font-semibold text-3xl lg:text-4xl mt-7 mb-3 ">
          our feature
        </h2>
      </div>

      <section
        className={`flex mt-3 gap-20  lg:mt-10 flex-col-reverse lg:flex-row justify-between items-center lg:place-items-center  w-full`}
      >
        {/*mobile-image*/}
        <div
          className={` lg:flex rotate-12 w-2/3 md:w-full items-center hidden justify-center `}
        >
          <Image src={MobileImage} alt="moblie image" />
        </div>

        {/*featuer-description*/}
        <div
          className={`grid-cols-1 md:grid-cols-2 grid  w-full gap-4 lg:gap-20 `}
        >
          {FEATURES?.map((items, idx) => (
            <FeatureDescription time={++idx} key={idx} items={items} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Feature;
