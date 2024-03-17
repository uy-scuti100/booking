"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function VillaImagesCarousel({ images }: { images: string[] }) {
   return (
      <Swiper
         modules={[Pagination, Navigation]}
         navigation={false}
         pagination={{
            clickable: true,
         }}
         breakpoints={{
            320: {
               slidesPerView: 1,
               spaceBetween: 30,
            },
            768: {
               slidesPerView: 1,
               spaceBetween: 30,
            },
            1024: {
               slidesPerView: 1,
               spaceBetween: 30,
            },
            1440: {
               slidesPerView: 1,
               spaceBetween: 30,
            },
         }}
         className="productSlider md:h-[200px] md:w-[416px] w-full h-[200px] ">
         {images?.map((image, i) => {
            return (
               <SwiperSlide key={i} className="">
                  <Image
                     src={image}
                     width={500}
                     height={500}
                     alt="villa images"
                     className="rounded-br-[40px] md:h-[200px] object-cover md:w-[416px] w-full h-[200px]"
                  />
               </SwiperSlide>
            );
         })}
      </Swiper>
   );
}
