import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nanny Dog — Garde d'animaux à domicile | Yvelines & Essonne",
  description:
    "Nathalie, certifiée ACACED depuis 2015, garde vos chiens, chats et lapins à votre domicile dans les Yvelines (78) et l'Essonne (91). Plus de 10 ans d'expérience.",
  keywords: "garde animaux domicile, Yvelines, Essonne, chien, chat, lapin, nanny dog, Saint-Arnoult",
  openGraph: {
    title: "Nanny Dog — La nounou préférée des animaux",
    description: "Garde d'animaux à domicile dans les Yvelines et l'Essonne avec Nathalie, certifiée ACACED.",
    url: "https://nanny-dog-adomicile.fr",
    siteName: "Nanny Dog",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
