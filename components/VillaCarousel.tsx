"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Villa from "./Villa";
import { useQuery } from "@tanstack/react-query";
import { FetchTopvillas } from "@/server/actions";

export default function VillaCarousel({ storeId }: { storeId: string }) {
  const { data, error, isFetched, status } = useQuery({
    queryKey: ["villas", storeId],
    queryFn: () => FetchTopvillas(storeId),
  });

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
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      className="max-w-[1920px] 2xl:px-[17.313rem] px-5 productSlider"
    >
      {data?.map((villa) => {
        return (
          <SwiperSlide key={villa.id} className="mt-6 mb-10">
            <Villa {...villa} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
