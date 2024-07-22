import React from "react";
import Services from "./Services";
import Image from "next/image";
import logo from "../assets/creativagroup.png";
import iconLogo from "../assets/cg-icon.png";
import Link from "next/link"; // Importa Link de Next.js
import { FiChevronLeft } from "react-icons/fi";

const Commerce = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col text-center items-center gap-3">
        <div className="flex flex-col justify-center items-center w-48 h-48 sm:w-80 sm:h-80 md:h-96 md:w-96 rounded-full bg-gradient-to-r from-[#fff2ea9f] to-[#d0f4fa75]">
          <div className="relative w-full h-full flex flex-col justify-center items-center">
            <Image src={iconLogo} alt="" className="w-2/3 pb-8" />
            <Image src={logo} alt="" className="absolute bottom-0" />
            <h2 className="text-[8px] w-32">¡Comercializa y distribuye!</h2>
          </div>
        </div>
        <Services
          message={"Wines"}
          bg="bg-[#8EB6ED]"
          href="/esp-home/commerce/wines"
        />
        <Services message={"Carnes"} bg="bg-[#00873E]" href="/" />
        <Services message={"Especias"} bg="bg-[#00873E]" href="/" />
        <Services message={"Yerbas"} bg="bg-[#CE9AD3]" href="/" />
        <Link
          href="/esp-home"
          className="flex items-center gap-2 text-white hover:text-blue-700 pr-4 text-xs"
        >
          <FiChevronLeft className="text-2xl w-4 h-4" /> Volver
        </Link>
      </div>
    </div>
  );
};

export default Commerce;
