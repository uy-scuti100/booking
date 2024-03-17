import Image from "next/image";

export default function SpecialityComp({
   image,
   name,
   snip,
}: {
   image: string;
   name: string;
   snip: string;
}) {
   return (
      <>
         <div className="flex-col gap-6 flex items-start pt-10 lg:pt-0 justify-start lg:border-r lg:pr-10 lg:pb-0 pr-0 lg:border-b-0 border-b pb-10 border-stone-400">
            <Image src={image} alt="image" height={32} width={32} />

            <div className="flex-col gap-1 flex">
               <div className="text-gray-900 md:text-[28px] text-xl font-bold font-['Rufina'] leading-normal  md:leading-9 tracking-wide">
                  {name}
               </div>
               <div className="items-center gap-2 flex">
                  <div className="flex-col justify-center items-center gap-2 flex">
                     <div className="text-gray-600 text-base font-medium font-['Raleway'] lowercase leading-normal">
                        {snip}
                     </div>
                  </div>
                  <span>
                     <Image
                        src="Arrow 1.svg"
                        width={26}
                        height={24}
                        alt="arrow-icon"
                        className="ml-2"
                     />
                  </span>
               </div>
            </div>
         </div>
      </>
   );
}
