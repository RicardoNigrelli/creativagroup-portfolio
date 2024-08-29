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
import { Navbar } from "../Navbar";

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
    <div className="absolute shadow-lg bg-white bg-opacity-60 rounded-3xl flex flex-col items-center justify-center w-3/4 z-10 h-[80%]">
      <Navbar />
      <div className="relative flex flex-col justify-center items-center w-48 h-48 sm:w-80 sm:h-80 md:h-96 md:w-96 rounded-full bg-gradient-to-r from-[#fff2ea9f] to-[#d0f4fa75]">
        <div className="relative w-full h-full flex flex-col justify-center items-center">
          <Image src={iconLogo} alt="" className="w-2/4 pb-8" />
          <Image src={logo} alt="" className="absolute bottom-10 w-3/4" />
        </div>

        <div className="hidden h-fit md:flex absolute z-10 top-16 -left-32">
          <Services
            message={"¡Comercializa y distribuye!"}
            bgl="bg-[#8EB6ED]"
            href="/esp-home/commerce"
            bgr="bg-none"
          />
        </div>
        <div className="hidden h-fit md:flex absolute z-10 -right-32">
          <Services
            message={"Haz crecer tu marca con nosotros"}
            bgl="bg-none"
            href="/esp-home/branding"
            bgr="bg-[#DAC848]"
          />
        </div>
        <div className="hidden h-fit md:flex absolute z-10 bottom-16 -left-32">
          <Services
            message={"Colabora con nuestra fundación"}
            bgl="bg-[#00873E]"
            href="/esp-home/fundation"
            bgr="bg-none"
          />
        </div>
        <div className="hidden h-fit md:flex absolute z-10 top-0 -right-16">
          <Services
            message={"Transforma tu presencia en línea"}
            bgl="bg-none"
            href="/esp-home/development"
            bgr="bg-[#CE9AD3]"
          />
        </div>
        <div className="hidden h-fit md:flex absolute z-10 bottom-0 -right-8">
          <Services
            message={"Recibe asesoramiento profesional"}
            bgl="bg-none"
            href="/esp-home/consulting"
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
                  message={"Sobre Nosotros"}
                  bgl="bg-[#DAC848]"
                  href="/"
                  bgr="bg-[#DAC848]"
                />
                <Services
                  message={"¡Comercializa y distribuye!"}
                  bgl="bg-[#8EB6ED]"
                  href="/esp-home/commerce"
                  bgr="bg-[#8EB6ED]"
                />
                <Services
                  message={"Haz crecer tu marca con nosotros"}
                  bgl="bg-[#00873E]"
                  href="/"
                  bgr="bg-[#00873E]"
                />
                <Services
                  message={"Colabora con nuestra fundación"}
                  bgl="bg-[#00873E]"
                  href="/"
                  bgr="bg-[#00873E]"
                />
                <Services
                  message={"Transforma tu presencia en línea"}
                  bgl="bg-[#CE9AD3]"
                  href="/"
                  bgr="bg-[#CE9AD3]"
                />
                <Services
                  message={"Recibe asesoramiento profesional"}
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
                  message={"Proyectos"}
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
                  message={"Trabaja con nosotros"}
                  bgl="bg-[#CE9AD3]"
                  href="/"
                  bgr="bg-[#CE9AD3]"
                />
                <Services
                  message={"Preguntas Frecuentes"}
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
      <div className="flex flex-row gap-1">
        <div className="social-media-buttons">
          <a href="https://www.instagram.com/">
            <button className="social-media-button" id="instagram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-instagram"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </button>
          </a>

          <a href="">
            <button className="whatsapp">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="0.4"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-whatsapp"
              >
                <path
                  d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z"
                  fill="#ffffff"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z"
                  fill="#ffffff"
                />
              </svg>
            </button>
          </a>

          <a href="">
            <button className="gmail">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-gmail"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M2.5 6.5l9.5 7.5 9.5-7.5"></path>
                <path d="M2.5 6.5v11a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-11"></path>
                <path d="M22 6.5l-10 7.5-10-7.5"></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Globe;
