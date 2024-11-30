import CampSide from "@/components/Camp/CampSide";
import CampQuote from "@/components/Camp/CampQuote";


const Camp = () => {
    return (
        <section className={`px-6  lg:px-20 xl:px-32 border-black w-full 2xl:w-full relative flex justify-end  items-end flex-col py-10 lg:mb-10 lg:py-10 xl:mb-10`}>
            {/*bg images section*/}
           <div className={`hide-scrollbar overflow-x-auto h-[340px] lg:h-[440px] xl:h-[640px] w-full flex   justify-start items-start gap-8 `}>

                <CampSide
                    backgroundImage="bg-bg-img-1"
                    title="Putuk Truno Camp"
                    subtitle="Prigen, Pasuruan"
                    peopleJoined="50+ Joined"
                />
               <CampSide
                   backgroundImage="bg-bg-img-2"
                   title="Mountain View Camp"
                   subtitle="Somewhere in the Wilderness"
                   peopleJoined="50+ Joined"
               />

           </div>
                {/*quote-section*/}
           <CampQuote />
        </section>
    );
};

export default Camp;
