import Image from "next/image";
import React from "react";
import logo from "../assets/creativagroup.png";
import iconLogo from "../assets/cg-icon.png";
import Services from "./Services";
import { FaWhatsapp } from "react-icons/fa";

function Globe() {
  const generateWhatsAppLink = (message: string) => {
    const phoneNumber = "5492964543839";
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  return (
    <div className="bg-white bg-opacity-60 rounded-3xl flex flex-col items-center justify-center p-8 sm:p-32">
      <div className="flex flex-col justify-center items-center w-48 h-48 sm:w-80 sm:h-80 md:h-96 md:w-96 rounded-full  bg-gradient-to-r from-[#fff2ea9f] to-[#d0f4fa75] ">
        <div className="relative w-full h-full flex flex-col justify-center items-center ">
          <Image src={iconLogo} alt="" className="w-2/3 pb-8" />
          <Image src={logo} alt="" className="absolute bottom-0" />
          <div></div>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <Services
          message={"¡HAZ CRECER TU MARCA CON NOSOTROS!"}
          bg="bg-[#DAC848]"
          href={generateWhatsAppLink(
            "¡Hola! Estoy interesado en hacer crecer mi marca con ustedes."
          )}
        />
        <Services
          message={"¡COLABORA CON NUESTRA FUNDACIÓN!"}
          bg="bg-[#00873E]"
          href={generateWhatsAppLink(
            "¡Hola! Estoy interesado en colaborar con su fundación."
          )}
        />
        <Services
          message={"¡COMERCIALIZA Y DISTRIBUYE TU MARCA CON ÉXITO!"}
          bg="bg-[#8EB6ED]"
          href={generateWhatsAppLink(
            "¡Hola! Quiero comercializar y distribuir mi marca con éxito."
          )}
        />
        <Services
          message={"¡RECIBE ASESORAMIENTO PROFESIONAL PARA TU NEGOCIO!"}
          bg="bg-[#FEC28E]"
          href={generateWhatsAppLink(
            "¡Hola! Necesito asesoramiento profesional para mi negocio."
          )}
        />
        <Services
          message={
            "¡TRANSFORMA TU PRESENCIA ONLINE CON NUESTRO DESARROLLO WEB!"
          }
          bg="bg-[#CE9AD3]"
          href={generateWhatsAppLink(
            "¡Hola! Estoy interesado en transformar mi presencia online con su desarrollo web."
          )}
        />
      </div>
    </div>
  );
}

export default Globe;
