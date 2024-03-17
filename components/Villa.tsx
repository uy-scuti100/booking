import { TopVillas } from "@/server/fetchTopVillas";
import Image from "next/image";
import React from "react";
import VillaImagesCarousel from "./VillaImageSlider";

export default function Villa({
   bedrooms,
   id,
   name,
   images,
   price,
   address,
   location,
   guests,
   size,
   baths,
}: TopVillas) {
   return (
      <div className="gap-[30px] flex flex-col bg-white rounded-br-[40px] relative  md:w-[416px] w-full">
         <div className="w-full">
            <VillaImagesCarousel images={images} />
         </div>

         <div className="hidden top-2 left-2 absolute w-[165px] h-12 p-3 bg-orange-100 rounded-tl rounded-tr rounded-bl rounded-br-[20px] border-b-4 border-stone-500 justify-center items-center gap-2.5 md:inline-flex z-50">
            <div>
               <span className="text-gray-900 text-base font-medium font-['Raleway'] leading-normal">
                  From{" "}
               </span>
               <span className="text-gray-900 text-base font-bold font-['Raleway'] leading-normal">
                  €{price} / daily
               </span>
            </div>
         </div>
         <div className="top-2 right-2 absolute z-50">
            <Image src="FavoriteFilled.svg" alt="fave" height={15} width={15} />
         </div>
         <div className="md:hidden top-2 left-2 absolute w-[139px] h-8 p-2 bg-orange-100 rounded-tl-sm rounded-tr-sm rounded-br-2xl border-b-2 border-stone-500 justify-center items-center gap-2 inline-flex z-50">
            <div>
               <span className="text-gray-900 text-sm font-medium font-['Raleway'] leading-none">
                  From
               </span>
               <span className="text-gray-900 text-sm font-bold font-['Raleway'] leading-none">
                  €{price} / daily
               </span>
            </div>
         </div>

         <div className="py-4 px-5">
            <div className="flex items-center gap-2">
               <h3 className="text-gray-900 text-sm font-bold font-['Raleway'] leading-none">
                  {address}
               </h3>
               <div className="w-[4.16px] h-[4.16px] bg-gray-600 rounded-full"></div>
               <div className="text-gray-900 text-sm font-normal font-['Raleway'] leading-none">
                  {location}
               </div>
            </div>
            <h2 className="text-gray-900 text-[28px] font-bold font-['Rufina'] leading-9 tracking-wide">
               {name}
            </h2>
            <div className="w-60 h-[16.65px] justify-between items-center flex my-3">
               <div className="justify-start items-center gap-[8.32px] flex">
                  <div className="w-[16.65px] h-[16.65px] relative">
                     <div className="w-[16.65px] h-[15.02px] left-[-0px] top-[0.69px] absolute">
                        <Image
                           src="people.svg"
                           alt="room-info"
                           width={16.65}
                           height={15.02}
                        />
                     </div>
                  </div>
                  <div>
                     <span className="text-gray-900 text-sm font-bold font-['Raleway'] leading-none">
                        8
                     </span>
                     <span className="text-gray-900 text-sm font-medium font-['Raleway'] leading-none">
                        {" "}
                        guests
                     </span>
                  </div>
               </div>
               <div className="h-[16.65px] justify-start items-center gap-[8.32px] flex">
                  <div className="w-[16.65px] h-[16.65px] relative">
                     <Image
                        src="single-bed_952776.svg"
                        alt="room-info"
                        width={16.65}
                        height={16.65}
                     />
                  </div>
                  <div>
                     <span className="text-gray-900 text-sm font-bold font-['Raleway'] leading-none">
                        8
                     </span>
                     <span className="text-gray-900 text-sm font-medium font-['Raleway'] leading-none">
                        {" "}
                        bedrooms
                     </span>
                  </div>
               </div>
            </div>
            <div className="w-60 h-[16.65px] justify-between items-center flex my-3">
               <div className="justify-start items-center gap-[8.32px] flex">
                  <div className="w-[16.65px] h-[16.65px] relative">
                     <div className="w-[16.65px] h-[15.02px] left-[-0px] top-[0.69px] absolute">
                        <Image
                           src="blueprint (1).svg"
                           alt="room-info"
                           width={16.65}
                           height={15.02}
                        />
                     </div>
                  </div>
                  <div>
                     <span className="text-gray-900 text-sm font-bold font-['Raleway'] leading-none">
                        {size}
                     </span>
                     <span className="text-gray-900 text-sm font-medium font-['Raleway'] leading-none">
                        {" "}
                        m2
                     </span>
                  </div>
               </div>
               <div className="h-[16.65px] justify-start items-center gap-[8.32px] flex">
                  <div className="w-[16.65px] h-[16.65px] relative">
                     <Image
                        src="bath-tub_2963979.svg"
                        alt="room-info"
                        width={16.65}
                        height={16.65}
                     />
                  </div>
                  <div>
                     <span className="text-gray-900 text-sm font-bold font-['Raleway'] leading-none">
                        {baths}
                     </span>
                     <span className="text-gray-900 text-sm font-medium font-['Raleway'] leading-none">
                        {" "}
                        bathrooms
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
