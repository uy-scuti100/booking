"use client";
import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { CiLocationOn, CiCalendar } from "react-icons/ci";
import { VscPerson } from "react-icons/vsc";
export default function HeroSection() {
   const [openDate, setOpenDate] = useState(false);
   const [openOptions, setOpenOptions] = useState(false);
   const [options, setOptions] = useState({
      adult: 1,
      children: 0,
      room: 1,
   });

   const [date, setDate] = useState([
      {
         startDate: new Date(),
         endDate: new Date(),
         key: "selection",
      },
   ]);

   const handleOption = (name: keyof typeof options, operation: "i" | "d") => {
      setOptions((prev) => {
         return {
            ...prev,
            [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
         };
      });
   };

   return (
      <div className="md:bg-main bg-small_main h-screen bg-neutral-800 bg-opacity-10 md:rounded-br-[7.375rem] rounded-br-[80px] bg-center bg-cover relative">
         <div className="px-5 absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white flex flex-col gap-5 items-center justify-center text-center">
            <h1 className="main-hero">Be our Guest</h1>
            <div className="layout">
               <h4 className="body-hero">
                  LIVE like a king in our best houses
               </h4>
            </div>
            <div className=" items-center gap-2 relative flex">
               {/* desktop */}
               <>
                  <div className="md:flex items-center gap-2.5 justify-center hidden">
                     <div className="w-[350px] py-3 rounded-[10px] px-3 bg-white items-center flex ">
                        <CiLocationOn className="text-black" />
                        <input
                           type="text"
                           placeholder="Where are you going?"
                           className="bg-none outline-none pl-2 text-black text-sm placeholder:text-sm w-full"
                        />
                     </div>
                     <div className="relative">
                        <div
                           onClick={() => setOpenDate((prev) => !prev)}
                           className="text-gray-900 md:text-base text-sm font-normal font-['Raleway'] leading-normal  flex items-center w-[350px] cursor-pointer bg-white py-3 rounded-[10px] px-2 gap-2.5">
                           <CiCalendar className="text-black" />
                           <div>
                              <span className="font-bold">
                                 {" "}
                                 {`${format(
                                    date[0].startDate,
                                    "MM/dd/yyyy"
                                 )}`}{" "}
                              </span>{" "}
                              to{" "}
                              <span className="font-bold">
                                 {" "}
                                 {`${format(
                                    date[0].endDate,
                                    "MM/dd/yyyy"
                                 )}`}{" "}
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </>

               {/* mobile */}
               <div className="flex flex-col items-center gap-5 justify-center md:hidden w">
                  <div className="w-[350px] py-3 rounded-[10px] px-3 bg-white flex items-center">
                     <CiLocationOn className="text-black" />
                     <input
                        type="text"
                        placeholder="Where are you going?"
                        className="bg-none outline-none pl-2 text-black text-sm placeholder:text-sm w-full"
                     />
                  </div>
                  <div className="relative">
                     <div
                        onClick={() => setOpenDate((prev) => !prev)}
                        className="text-gray-900 md:text-base text-sm font-normal font-['Raleway'] leading-normal  flex items-center w-[350px] cursor-pointer bg-white py-3 rounded-[10px] px-2 gap-2.5">
                        <CiCalendar className="text-black" />
                        <div>
                           {`${format(date[0].startDate, "MM/dd/yyyy")}`}{" "}
                           <span className="font-bold mx-1"> to </span>{" "}
                           {`${format(date[0].endDate, "MM/dd/yyyy")}`}{" "}
                        </div>
                     </div>
                  </div>
                  <div className="w-[350px] py-3 gap-2.5 rounded-[10px] px-3 bg-white flex items-center text-black relative cursor-pointer ">
                     <VscPerson className="text-black" />
                     <div
                        onClick={() => setOpenOptions((prev) => !prev)}
                        className="cursor-pointer text-sm">
                        {" "}
                        {`${options.adult} adult · ${options.children} children · ${options.room} room `}{" "}
                     </div>
                     {openOptions && (
                        <div className="absolute top-[50px] bg-white text-black rounded-md shadow right-0">
                           <div className="w-[200px] flex justify-between m-[10px]">
                              <span>Adult</span>
                              <div className="flex items-center gap-2.5 text-[10px] text-black  ">
                                 <button
                                    disabled={options.adult <= 1}
                                    onClick={() => handleOption("adult", "d")}
                                    className="w-7 h-7 border text-primary-1 bg-white disabled:cursor-not-allowed">
                                    -
                                 </button>
                                 <span>{options.adult}</span>
                                 <button
                                    onClick={() => handleOption("adult", "i")}
                                    className="w-7 h-7 border text-primary-1 bg-white">
                                    +
                                 </button>
                              </div>
                           </div>
                           <div className="w-[200px] flex justify-between m-[10px]">
                              <span>Children</span>
                              <div className="flex items-center gap-2.5 text-[10px] text-black  ">
                                 <button
                                    disabled={options.children <= 0}
                                    onClick={() =>
                                       handleOption("children", "d")
                                    }
                                    className="w-7 h-7 border text-primary-1 bg-white disabled:cursor-not-allowed">
                                    -
                                 </button>
                                 <span>{options.children}</span>
                                 <button
                                    onClick={() =>
                                       handleOption("children", "i")
                                    }
                                    className="w-7 h-7 border text-primary-1 bg-white">
                                    +
                                 </button>
                              </div>
                           </div>
                           <div className="w-[200px] flex justify-between m-[10px]">
                              <span>Room</span>
                              <div className="flex items-center gap-2.5 text-[10px] text-black  ">
                                 <button
                                    disabled={options.room <= 1}
                                    onClick={() => handleOption("room", "d")}
                                    className="w-7 h-7 border text-primary-1 bg-white disabled:cursor-not-allowed">
                                    -
                                 </button>
                                 <span>{options.room}</span>
                                 <button
                                    onClick={() => handleOption("room", "i")}
                                    className="w-7 h-7 border text-primary-1 bg-white">
                                    +
                                 </button>
                              </div>
                           </div>
                        </div>
                     )}
                  </div>
               </div>
               {openDate && (
                  <>
                     <DateRange
                        editableDateInputs={true}
                        // @ts-ignore
                        onChange={(item) => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        // @ts-ignore
                        ranges={date}
                        className="absolute top-[100px] md:top-[50px] md:left-[27%] inset-x-0 mx-3 px-5 z-50 "
                     />

                     <div
                        onClick={() => setOpenDate((prev) => !prev)}
                        className="absolute top-[65px] right-2 text-black font-black cursor-pointer">
                        {" "}
                        X
                     </div>
                  </>
               )}
            </div>
            <div className="md:flex items-center gap-2.5 justify-center hidden">
               <div className="w-[350px] py-3 gap-2.5 rounded-[10px] px-3 bg-white flex items-center text-black relative">
                  <VscPerson className="text-black" />
                  <div
                     onClick={() => setOpenOptions((prev) => !prev)}
                     className="cursor-pointer">
                     {" "}
                     {`${options.adult} Adult · ${options.children} Children · ${options.room} Room `}{" "}
                  </div>
                  {openOptions && (
                     <div className="absolute top-[50px] bg-white text-black rounded-md shadow right-0">
                        <div className="w-[200px] flex justify-between m-[10px]">
                           <span>Adult</span>
                           <div className="flex items-center gap-2.5 text-[10px] text-black  ">
                              <button
                                 disabled={options.adult <= 1}
                                 onClick={() => handleOption("adult", "d")}
                                 className="w-7 h-7 border text-primary-1 bg-white disabled:cursor-not-allowed">
                                 -
                              </button>
                              <span>{options.adult}</span>
                              <button
                                 onClick={() => handleOption("adult", "i")}
                                 className="w-7 h-7 border text-primary-1 bg-white">
                                 +
                              </button>
                           </div>
                        </div>
                        <div className="w-[200px] flex justify-between m-[10px]">
                           <span>Children</span>
                           <div className="flex items-center gap-2.5 text-[10px] text-black  ">
                              <button
                                 disabled={options.children <= 0}
                                 onClick={() => handleOption("children", "d")}
                                 className="w-7 h-7 border text-primary-1 bg-white disabled:cursor-not-allowed">
                                 -
                              </button>
                              <span>{options.children}</span>
                              <button
                                 onClick={() => handleOption("children", "i")}
                                 className="w-7 h-7 border text-primary-1 bg-white">
                                 +
                              </button>
                           </div>
                        </div>
                        <div className="w-[200px] flex justify-between m-[10px]">
                           <span>Room</span>
                           <div className="flex items-center gap-2.5 text-[10px] text-black  ">
                              <button
                                 disabled={options.room <= 1}
                                 onClick={() => handleOption("room", "d")}
                                 className="w-7 h-7 border text-primary-1 bg-white disabled:cursor-not-allowed">
                                 -
                              </button>
                              <span>{options.room}</span>
                              <button
                                 onClick={() => handleOption("room", "i")}
                                 className="w-7 h-7 border text-primary-1 bg-white">
                                 +
                              </button>
                           </div>
                        </div>
                     </div>
                  )}
               </div>
            </div>

            <div className="md:flex items-center gap-2.5 justify-center bg-white p-2  rounded-tr-[10px] rounded-bl-[10px] rounded-br-[10px]  ">
               <button className="md:btn-lng-lg btn-lng-sm"> Search</button>
            </div>
         </div>
      </div>
   );
}
