"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

function Services(props: { message: string; bg: string; href: string }) {
  const [isHovered, setIsHovered] = useState(false);

  const content = (
    <div
      className="relative border border-gray-200 rounded-lg w-32 sm:w-72 h-fit bg-opacity-80 bg-[#FFFEFE] flex justify-center items-center hover:scale-110 transition-transform duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`-left-2 absolute w-3 h-3 rounded-full ${props.bg}`}
      ></div>
      <p className="p-2 text-wrap text-[7px] sm:text-sm font-medium text-center">
        {props.message}
      </p>
    </div>
  );

  return (
    <div>
      {isHovered ? (
        <Link href={props.href} className="inline-block ">
          {content}
        </Link>
      ) : (
        content
      )}
    </div>
  );
}

export default Services;
