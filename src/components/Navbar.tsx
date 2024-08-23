"use client";
import Link from "next/link";
import React from "react";

import { usePathname } from "next/navigation";

export const Navbar = () => {
  const active = usePathname();

  return (
    <nav className="text-black mb-20">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <ul className="flex space-x-4">
          <li>
            <Link
              className={`hover:text-blue-300 ${
                active === "/esp-home" ? "text-blue-300" : ""
              }`}
              href="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link
              className={`hover:text-blue-300 ${
                active === "/about-us" ? "text-blue-300" : ""
              }`}
              href="/">
              Acerca de Nosotros
            </Link>
          </li>
          <li>
            <Link
              className={`hover:text-blue-300 ${
                active === "/services" ? "text-blue-300" : ""
              }`}
              href="/">
              Servicios
            </Link>
          </li>
          <li>
            <Link
              className={`hover:bg-blue-300 text-white bg-blue-400 rounded-md p-3 `}
              href="/">
              Contáctanos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
