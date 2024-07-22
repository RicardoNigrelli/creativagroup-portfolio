import React from "react";
import Services from "./Services";
import Link from "next/link";

const SelectLanguages = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="relative border border-gray-200 rounded-lg w-32 sm:w-72 h-fit bg-opacity-80 bg-[#FFFEFE] flex justify-center items-center hover:scale-110 transition-transform duration-300">
        <div className="-left-2 absolute w-3 h-3 rounded-full "></div>
        <Link
          href="/esp-home"
          className="p-2 text-wrap text-[7px] sm:text-sm font-medium text-center"
        >
          Español
        </Link>
      </div>
      <div className="relative border border-gray-200 rounded-lg w-32 sm:w-72 h-fit bg-opacity-80 bg-[#FFFEFE] flex justify-center items-center hover:scale-110 transition-transform duration-300">
        <div className="-left-2 absolute w-3 h-3 rounded-full "></div>
        <Link
          href="/eng-home"
          className="p-2 text-wrap text-[7px] sm:text-sm font-medium text-center"
        >
          English
        </Link>
      </div>
      <div className="relative border border-gray-200 rounded-lg w-32 sm:w-72 h-fit bg-opacity-80 bg-[#FFFEFE] flex justify-center items-center hover:scale-110 transition-transform duration-300">
        <div className="-left-2 absolute w-3 h-3 rounded-full "></div>
        <Link
          href="/por-home"
          className="p-2 text-wrap text-[7px] sm:text-sm font-medium text-center"
        >
          Português
        </Link>
      </div>
    </div>
  );
};

export default SelectLanguages;
