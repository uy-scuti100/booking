export default function BecomeHost() {
   return (
      <section className="bg-host_bg bg-cover bg-center bg-no-repeat flex justify-center px-5 items-center py-32 rounded-br-[60px] md:rounded-br-[150px] ">
         <div className="md:p-20 px-5 pt-[60px] pb-10 bg-white opacity-90 rounded-tl-[60px] rounded-tr rounded-bl rounded-br-[60px] shadow flex-col justify-center items-center gap-10 inline-flex">
            <div className="flex-col justify-center items-center flex">
               <div className="text-gray-600 text-sm md:ext-base font-bold font-['Raleway'] uppercase md:leading-normal leading-tight tracking-widest">
                  Become a host
               </div>
               <div className="text-gray-900 text-4xl md:text-[52px] font-bold font-['Rufina'] md:leading-[64px] leading-[44px] tracking-wide">
                  Become a host
               </div>
            </div>
            <div className="text-center text-gray-900 text-base font-medium font-['Raleway'] leading-normal">
               Join the elite league of hosts <br className="md:hidden" />{" "}
               specializing in luxury villas <br className="hidden md:block" />{" "}
               and unlock a world of exclusive opportunities.
            </div>
            <div className="hover:bg-gray-400 transition-colors duration-200 self-stretch h-12 px-5 py-3 bg-gray-600 rounded-tr-[10px] rounded-bl-[10px] rounded-br-[10px] flex-col justify-center items-center gap-2 flex">
               <div className="text-white text-base font-semibold font-['Raleway'] uppercase leading-normal">
                  join today
               </div>
            </div>
         </div>
      </section>
   );
}
