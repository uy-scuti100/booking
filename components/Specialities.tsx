import { speciality } from "@/constants/speciality";
import SpecialityComp from "./SpecialityComp";

export default function Specialities() {
   return (
      <section className="pt-20 md:pt-40 px-5 md:pb-[220px] pb-20">
         <div className="whitespace-nowrap text-center text-gray-900 text-4xl font-bold font-['Rufina'] leading-[44px] tracking-wide md:text-[52px] md:leading-[64px] ">
            Our properties <br className="md:hidden" />
            specialities
         </div>
         <div className="flex flex-col lg:flex-row gap-12 md:gap-32 lg:pt-20 md:flex-row md:flex-wrap items-center md:justify-center">
            {speciality.map((spec) => {
               const { image, name, snip } = spec;
               return <SpecialityComp image={image} name={name} snip={snip} />;
            })}
         </div>
      </section>
   );
}

// md:grid grid-cols-2  md:just
