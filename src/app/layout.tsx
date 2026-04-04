import type { Metadata } from "next";
import { Playfair_Display, Lora, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Nanny Dog — La nounou préférée des animaux",
  description:
    "Service de garde d'animaux à domicile dans les Yvelines Sud et communes de l'Essonne limitrophes. Chiens, chats et petits rongeurs. Certifiée ACACED depuis 2015.",
  keywords: "garde animaux domicile, Yvelines, Essonne, chien, chat, lapin, ACACED, Nanny Dog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${lora.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}