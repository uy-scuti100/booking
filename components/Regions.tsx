import Image from "next/image";
import ImageViewer from "./ImageViewer";
import { FetchRegions } from "@/server/actions";

export default async function Regions() {
  const regions = await FetchRegions();

  return (
    <section className="pt-20 md:pt-40 px-5 md:pb-[220px] pb-20 bg-secondary-3 rounded-tr-[10px] rounded-bl-[10px] md:rounded-br-[150px] rounded-br-[80px]">
      <div className=" whitespace-nowrap text-center text-gray-900 text-[44px] md:text-6xl font-bold font-['Rufina'] capitalize md:leading-[72px] tracking-wide">
        OUR REGIONS
      </div>
      <div className="text-center text-gray-900 text-base font-normal font-['Raleway'] leading-normal">
        Fusce blandit magna eget felis dapibus, ac lacinia quam faucibus.
        Quisque feugiat felis a <br className="md:block hidden" /> quam
        volutpat, non scelerisque nibh scelerisque.
      </div>

      <div className="flex flex-col md:flex-row gap-10 items-center pt-14">
        {regions?.map((region) => {
          const { id, name, properties, images } = region;
          return (
            <ImageViewer
              key={id}
              id={id}
              name={name}
              properties={properties}
              images={images}
            />
          );
        })}
      </div>
    </section>
  );
}
