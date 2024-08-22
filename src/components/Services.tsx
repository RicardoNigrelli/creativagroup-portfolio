"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

function Services(props: {
  message: string;
  bgl: string;
  href: string;
  bgr: string;
}) {
  const content = (
    <div className="relative border border-gray-200 rounded-lg w-40 h-fit bg-[#FFFEFE] flex justify-center items-center hover:scale-110 transition-transform duration-300">
      <div
        className={`-left-2 absolute w-3 h-3 rounded-full ${props.bgl}`}
      ></div>
      <p className="p-2 text-wrap text-[7px] sm:text-sm md:text-xs font-medium text-center">
        {props.message}
      </p>
      <div
        className={`-right-2 absolute w-3 h-3 rounded-full ${props.bgr}`}
      ></div>
    </div>
  );

  return (
    <div>
      <Link href={props.href} className="inline-block ">
        {content}
      </Link>
    </div>
  );
}

export default Services;
