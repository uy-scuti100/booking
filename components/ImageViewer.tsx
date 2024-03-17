import { Regions } from "@/server/fetchRegions";
import Image from "next/image";
import React from "react";

export default function ImageViewer(prop: Regions) {
   return (
      <div className="relative  md:w-[675px] md:h-[500px] w-[335px] h-[303px]">
         <Image
            src={prop.images.length > 0 ? prop.images[0] : ""}
            alt={`${prop.name}'s image `}
            height={500}
            width={500}
            className="object-cover w-full h-full rounded-tl-[3px] rounded-tr-[80px] rounded-bl-[80px] rounded-br-[3px] "
         />

         <div className="md:left-[42px] left-[21px] md:bottom-[86px] bottom-[38px] absolute text-white md:text-[66px] font-normal font-['Rufina'] md:leading-[84px] text-[44px] leading-[52px] tracking-wide md:tracking-normal">
            {prop.name}
         </div>
         <div className="md:left-[42px] md:bottom-[63px] left-[23px]  bottom-[19px] absolute">
            <span className="text-white md:text-xl text-base leading-normal font-bold font-['Raleway'] md:leading-[22.84px]">
               {prop.properties}{" "}
            </span>
            <span className="text-white md:text-xl text-base leading-normal font-normal font-['Raleway'] md:leading-[22.84px]">
               properties
            </span>
         </div>
      </div>
   );
}
