import React from "react";
import Button from "../Button";
import Image from "next/image";
import PhoneImage from "@/public/phones.png";

const GetApp : React.FC = () => {
  return (
    <section className="px-6 lg:px-20 xl:px-32 mx-auto  flex justify-center items-center w-full flex-col pb-[100px]">
      <div className=" relative flex w-full rounded-3xl  flex-col justify-between gap-32 overflow-hidden bg-green-90 bg-pattern bg-cover bg-center bg-no-repeat px-6 py-12 text-white xl:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[598px] 2xl:rounded-5xl ">

        {/* get-app-text */}
        <div className="z-20 flex w-full  flex-1 flex-col items-start justify-center gap-12">
          <h2 className="font-semibold lg:font-bold text-3xl xl:max-w-[320px]">
            Get for free now!
          </h2>
          <p className="font-medium text-gray-10">
            Available on iOS and Android
          </p>
          <div className="flex w-full lg:justify-around lg:items-center flex-col gap-3 lg:flex-row">
            <Button
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="bg-white rounded-3xl text-black py-2.5 text-xl w-full "
            />
            <Button
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="bg-zinc-800 border-2 border-zinc-500 rounded-3xl w-full  py-2.5 text-xl"
            />
          </div>
        </div>

{/* mobile-image */}
        <div className="flex items-center justify-end ">
          <Image src={PhoneImage} alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
