/* eslint-disable @next/next/no-img-element */

import React from "react";
import Link from "next/link";

const notFound = () => {
  return (
    <div className="min-h-screen py-12 text-white">
      <div className="container mx-auto px-6 text-center">
        <h1 className="mb-8 text-6xl font-bold">404</h1>
        <h2 className="mb-4 text-3xl font-semibold">Página no encontrada</h2>
        <p className="mb-8 text-lg text-gray-200">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>

        <Link
          href="/"
          className="text-lg font-semibold text-blue-500 hover:underline"
        >
          Volver a la página principal
        </Link>
      </div>
    </div>
  );
};

export default notFound;
