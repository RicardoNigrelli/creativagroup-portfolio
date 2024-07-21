"use client";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

function Services(props: { message: string; bg: string; href: string }) {
  // Estado para manejar si el mouse está sobre el componente
  const [isHovered, setIsHovered] = useState(false);

  // Contenido del componente, condicionalmente dentro de un <a> si isHovered es true
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
      <div className="bg-white h-6 w-6 absolute flex items-center justify-center rounded-full -right-3 border border-gray-200">
        <FaWhatsapp className="text-green-500 w-5 h-5" />
      </div>
    </div>
  );

  return (
    <div>
      {isHovered ? (
        <a href={props.href} className="inline-block " target="_blank">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}

export default Services;
