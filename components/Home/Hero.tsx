import CloseImage from "@/public/close.svg";
import Image from "next/image";
import HeroLeft from "@/components/heroComponents/HeroLeft";


const Hero: React.FC = () => {
    return (
        <section className="px-6 lg:px-20 xl:px-32 mx-auto w-full h-full py-10 pb-40 flex flex-col justify-around items-center gap-16 md:gap-20 xl:flex-row lg:gap-28">
            {/* background image for hero section */}
            <div className="hero_map" />

            {/* Left side */}
            <HeroLeft/>

            {/* Right side */}
            <div
                className="relative flex flex-1 items-start hover:scale-105 transition-all duration-300 ease-in-out group "
            >
                <div className="relative z-20 flex w-[268px] flex-col gap-4 rounded-3xl bg-green-90 px-7 py-8 transition-all duration-300 ease-in-out hover:shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] animate-heroAnimation">
                    <div className="flex flex-col">
                        <div className="flex justify-between items-center">
                            <p className="font-semibold text-gray-20">Location</p>
                            <Image
                                src={CloseImage}
                                alt="close"
                                width={24}
                                height={24}
                                className="cursor-pointer"
                            />
                        </div>
                        <p className="bold-20 text-white">Aguas Calientes</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col">
                            <p className="font-semibold block text-gray-20">Distance</p>
                            <p className="font-bold text-white">173.28 mi</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="regular-16 block text-gray-20">Elevation</p>
                            <p className="font-bold text-white">2.040 km</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
