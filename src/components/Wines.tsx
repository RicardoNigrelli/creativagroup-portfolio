"use client";
import React, { useState } from "react";
import Services from "./Services";
import Image from "next/image";
import logo from "../assets/creativagroup.png";
import iconLogo from "../assets/cg-icon.png";
import Link from "next/link";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { MdOutlineWineBar } from "react-icons/md";
import { GiWineBottle, GiWineGlass, GiGrapes } from "react-icons/gi";
import { FaWineBottle, FaWineGlassAlt } from "react-icons/fa";

const Wines = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselItems = [
    <div
      key="1"
      className="cursor-pointer border border-gray-200 rounded-lg w-10 sm:w-20 sm:h-20 h-10 bg-opacity-80 bg-[#FFFEFE] flex justify-center items-center hover:scale-110 transition-transform duration-300"
    >
      <GiWineBottle />
    </div>,
    <div
      key="2"
      className="cursor-pointer border border-gray-200 rounded-lg w-10 sm:w-20 sm:h-20 h-10 bg-opacity-80 bg-[#FFFEFE] flex justify-center items-center hover:scale-110 transition-transform duration-300"
    >
      <MdOutlineWineBar />
    </div>,
    <div
      key="3"
      className="cursor-pointer border border-gray-200 rounded-lg w-10 sm:w-20 sm:h-20 h-10 bg-opacity-80 bg-[#FFFEFE] flex justify-center items-center hover:scale-110 transition-transform duration-300"
    >
      <GiGrapes />
    </div>,
    <div
      key="4"
      className="cursor-pointer border border-gray-200 rounded-lg w-10 sm:w-20 sm:h-20 h-10 bg-opacity-80 bg-[#FFFEFE] flex justify-center items-center hover:scale-110 transition-transform duration-300"
    >
      <FaWineBottle />
    </div>,
    <div
      key="5"
      className="cursor-pointer border border-gray-200 rounded-lg w-10 sm:w-20 sm:h-20 h-10 bg-opacity-80 bg-[#FFFEFE] flex justify-center items-center hover:scale-110 transition-transform duration-300"
    >
      <FaWineGlassAlt />
    </div>,
  ];

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselItems.length) % carouselItems.length
    );
  };

  const visibleItems = [
    carouselItems[currentIndex],
    carouselItems[(currentIndex + 1) % carouselItems.length],
    carouselItems[(currentIndex + 2) % carouselItems.length],
  ];

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col text-center items-center gap-3">
        <div className="flex flex-col justify-center items-center w-48 h-48 sm:w-80 sm:h-80 md:h-96 md:w-96 rounded-full bg-gradient-to-r from-[#fff2ea9f] to-[#d0f4fa75]">
          <div className="relative w-full h-full flex flex-col justify-center items-center">
            <Image src={iconLogo} alt="" className="w-2/3 pb-8" />
            <Image src={logo} alt="" className="absolute bottom-0" />
            <h2 className="text-[8px] w-32">Wines</h2>
          </div>
        </div>
        <Services
          message={"Cafayate"}
          bg="bg-[#8EB6ED]"
          href="/esp-home/commerce/wines"
        />
        <Services message={"Bodega Trassoles"} bg="bg-[#00873E]" href="/" />

        <div className="carousel-container flex gap-4">{visibleItems}</div>
        <div className="navigation">
          <button onClick={prev} className="prev-button">
            <FiChevronLeft />
          </button>
          <button onClick={next} className="next-button">
            <FiChevronRight />
          </button>
        </div>

        <Link
          href="/esp-home/commerce"
          className="flex items-center gap-2 text-white hover:text-blue-700 pr-4 text-xs"
        >
          <FiChevronLeft className="text-2xl w-4 h-4" /> Volver
        </Link>
      </div>
    </div>
  );
};

export default Wines;
