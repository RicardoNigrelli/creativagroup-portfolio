"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../assets/creativagroup.png";
import iconLogo from "../../assets/cg-icon.png";
import Services from "../Services";
import { FaWhatsapp, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

function Globe() {
  const generateWhatsAppLink = (message: string) => {
    const phoneNumber = "5492964543839";
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };
  const [currentGroup, setCurrentGroup] = useState("group1");
  const [direction, setDirection] = useState(0);

  const showGroup1 = () => {
    setDirection(-1);
    setCurrentGroup("group1");
  };
  const showGroup2 = () => {
    setDirection(currentGroup === "group1" ? 1 : -1);
    setCurrentGroup("group2");
  };
  const showGroup3 = () => {
    setDirection(1);
    setCurrentGroup("group3");
  };

  const groupVariants = {
    hidden: (direction: number) => ({
      y: direction === 1 ? 1000 : -1000,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    }),
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        duration: 0.3,
      },
    },
    exit: (direction: number) => ({
      y: direction === 1 ? -1000 : 1000,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    }),
  };

  return (
    <div className="absolute bg-white bg-opacity-60 rounded-3xl flex flex-col items-center justify-center w-3/4 z-10 h-[80%]">
      <div className="relative flex flex-col justify-center items-center w-48 h-48 sm:w-80 sm:h-80 md:h-96 md:w-96 rounded-full bg-gradient-to-r from-[#fff2ea9f] to-[#d0f4fa75]">
        <div className="relative w-full h-full flex flex-col justify-center items-center">
          <Image src={iconLogo} alt="" className="w-2/4 pb-8" />
          <Image src={logo} alt="" className="absolute bottom-10 w-3/4" />
        </div>

        <div className="hidden h-fit md:flex absolute z-10 top-16 -left-32">
          <Services
            message={"Comercialize e Distribua!"}
            bgl="bg-[#8EB6ED]"
            href="/esp-home/commerce"
            bgr="bg-none"
          />
        </div>
        <div className="hidden h-fit md:flex absolute z-10 -right-32">
          <Services
            message={"Faça Crescer Sua Marca Conosco"}
            bgl="bg-none"
            href="/"
            bgr="bg-[#DAC848]"
          />
        </div>
        <div className="hidden h-fit md:flex absolute z-10 bottom-16 -left-32">
          <Services
            message={"Colabore com Nossa Fundação"}
            bgl="bg-[#00873E]"
            href="/"
            bgr="bg-none"
          />
        </div>
        <div className="hidden h-fit md:flex absolute z-10 top-0 -right-16">
          <Services
            message={"Transforme Sua Presença Online"}
            bgl="bg-none"
            href="/"
            bgr="bg-[#CE9AD3]"
          />
        </div>
        <div className="hidden h-fit md:flex absolute z-10 bottom-0 -right-8">
          <Services
            message={"Receba Consultoria Profissional"}
            bgl="bg-none"
            href="/"
            bgr="bg-[#FEC28E]"
          />
        </div>
      </div>
      <div className="flex flex-col items-center relative">
        <AnimatePresence mode="wait" custom={direction}>
          {currentGroup === "group1" && (
            <motion.div
              key="group1"
              custom={direction}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={groupVariants}
              className="flex flex-col gap-2 items-center"
            >
              <div className=" flex items-center flex-col h-64 md:hidden">
                <Services
                  message={"Sobre Nós"}
                  bgl="bg-[#DAC848]"
                  href="/"
                  bgr="bg-[#DAC848]"
                />
                <Services
                  message={"Comercialize e Distribua!"}
                  bgl="bg-[#8EB6ED]"
                  href="/esp-home/commerce"
                  bgr="bg-[#8EB6ED]"
                />
                <Services
                  message={"Faça Crescer Sua Marca Conosco"}
                  bgl="bg-[#00873E]"
                  href="/"
                  bgr="bg-[#00873E]"
                />
                <Services
                  message={"Colabore com Nossa Fundação"}
                  bgl="bg-[#00873E]"
                  href="/"
                  bgr="bg-[#00873E]"
                />
                <Services
                  message={"Transforme Sua Presença Online"}
                  bgl="bg-[#CE9AD3]"
                  href="/"
                  bgr="bg-[#CE9AD3]"
                />
                <Services
                  message={"Receba Consultoria Profissional"}
                  bgl="bg-[#FEC28E]"
                  href="/"
                  bgr="bg-[#FEC28E]"
                />
              </div>

              <button className="mt-4" onClick={showGroup2}>
                <FaChevronDown
                  className="text-3xl animate-bounce"
                  color="white"
                />
              </button>
            </motion.div>
          )}
          {currentGroup === "group2" && (
            <motion.div
              key="group2"
              custom={direction}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={groupVariants}
              className="flex flex-col gap-2 items-center"
            >
              <button className="mt-4" onClick={showGroup1}>
                <FaChevronUp
                  className="text-3xl animate-bounce"
                  color="white"
                />
              </button>
              <div className=" flex items-center flex-col h-52 gap-2">
                <div className="h-20 w-20 border border-gray-200 bg-opacity-80 hover:scale-110 transition-transform duration-300 bg-[#FFFEFE] rounded-full flex justify-center items-center text-center">
                  <p className="text-xs">Lucas A. Contreras</p>
                </div>
                <div className="flex gap-2">
                  <div className="h-20 w-20 border border-gray-200 bg-opacity-80 hover:scale-110 transition-transform duration-300 bg-[#FFFEFE] rounded-full flex justify-center items-center text-center">
                    <p className="text-xs">Grupo Cardón</p>
                  </div>
                  <div className="h-20 w-20 border border-gray-200 bg-opacity-80 hover:scale-110 transition-transform duration-300 bg-[#FFFEFE] rounded-full flex justify-center items-center text-center">
                    <p className="text-xs">Fundación Creativa</p>
                  </div>
                </div>
              </div>
              <button className="mt-4" onClick={showGroup3}>
                <FaChevronDown
                  className="text-3xl animate-bounce"
                  color="white"
                />
              </button>
            </motion.div>
          )}
          {currentGroup === "group3" && (
            <motion.div
              key="group3"
              custom={direction}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={groupVariants}
              className="flex flex-col gap-2 items-center"
            >
              <button className="mt-4" onClick={showGroup2}>
                <FaChevronUp
                  className="text-3xl animate-bounce"
                  color="white"
                />
              </button>
              <div className=" flex items-center flex-col h-52">
                <Services
                  message={"Projetos"}
                  bgl="bg-[#8EB6ED]"
                  href="/"
                  bgr="bg-[#8EB6ED]"
                />
                <Services
                  message={"Impacto Social"}
                  bgl="bg-[#00873E]"
                  href="/"
                  bgr="bg-[#00873E]"
                />
                <Services
                  message={"Crowdfunding"}
                  bgl="bg-[#00873E]"
                  href="/"
                  bgr="bg-[#00873E]"
                />
                <Services
                  message={"Trabalhe Conosco"}
                  bgl="bg-[#CE9AD3]"
                  href="/"
                  bgr="bg-[#CE9AD3]"
                />
                <Services
                  message={"Perguntas Frequentes"}
                  bgl="bg-[#FEC28E]"
                  href="/"
                  bgr="bg-[#FEC28E]"
                />
              </div>

              <button className="mt-4" onClick={showGroup1}>
                <FaChevronDown
                  className="text-3xl animate-bounce"
                  color="white"
                />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="flex flex-row gap-1 w-full justify-end">
        <a
          href={generateWhatsAppLink("Hola!")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="text-2xl w-3 h-3 md:w-7 md:h-7" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-2xl w-3 h-3 md:w-7 md:h-7" />
        </a>
        <a
          href="mailto:info@creativagroup.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineMail className="text-2xl w-3 h-3 md:w-7 md:h-7" />
        </a>
      </div>
    </div>
  );
}

export default Globe;
