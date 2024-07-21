import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Especificando los pesos de la fuente
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Creativa Group",
  description: "¡HAZ CRECER TU MARCA CON NOSOTROS!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
