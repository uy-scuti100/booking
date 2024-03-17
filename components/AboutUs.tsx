import VideoComponent from "@/providers/VideoComponent";
import Image from "next/image";

export default function AboutUs() {
   return (
      <section className="py-32 md:flex  gap-2 flex">
         <div className="col-span-1">
            <h1 className="text-gray-900 text-6xl font-bold font-['Rufina'] capitalize leading-[72px] hidden md:block">
               About us
            </h1>
            <p>
               <span className="text-gray-900 text-lg font-medium font-['Raleway'] leading-loose">
                  Curabitur efficitur ante vel mi bibendum, et maximus nisl
                  ultricies. Morbi nec tempus dui, sit amet facilisis nisl.{" "}
                  <br />
                  Ut vel urna quis urna tristique tempus. Etiam lobortis est at
                  mauris eleifend, id tempor purus ultricies.
                  <br />
                  Curabitur efficitur luctus enim nec sollicitudin. Fusce
                  venenatis venenatis lorem eu accumsan. Nunc sit amet mi vitae
                  odio porttitor feugiat. Sed quis sem elementum, viverra ligula
                  at, lobortis magna. Praesent congue nibh in dolor rutrum, et
                  euismod quam elementum.
                  <br />
               </span>
               <span className="text-gray-900 text-lg font-bold font-['Raleway'] leading-loose">
                  Mauris justo felis, iaculis quis sagittis
               </span>
               <span className="text-gray-900 text-lg font-medium font-['Raleway'] leading-loose">
                  {" "}
                  sit amet, feugiat vitae est. Aliquam porta ex elit, sit amet
                  rutrum turpis egestas viverra. Quisque at libero purus.
               </span>
            </p>
         </div>
         <div className="col-span-1">
            <div className="relative  w-[588px] h-[667px]  ">
               <Image
                  src="/about-us-big.png"
                  fill
                  className="rounded-tl-md rounded-tr-[60px] rounded-bl-md rounded-br-md border border-white"
                  alt="about-image"
               />
            </div>
            <VideoComponent />
         </div>
      </section>
   );
}

// <div className=" md:hidden text-center text-gray-900 text-[44px] font-bold font-['Rufina'] leading-[52px] tracking-wide">
//    About us
// </div>;
