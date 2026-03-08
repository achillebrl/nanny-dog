import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services — Nanny Dog | Garde animaux à domicile",
  description:
    "Découvrez les services de garde à domicile pour chiens (45mn), chats (20mn) et lapins (20mn) proposés par Nathalie dans les Yvelines et l'Essonne.",
};

const services = [
  {
    emoji: "🐕",
    name: "Visite chien",
    duration: "45 minutes",
    description:
      "Une visite complète comprenant la promenade individuelle de votre chien, la vérification et remplissage des gamelles d'eau et de nourriture, ainsi que l'observation de l'état général de votre animal.",
    includes: [
      "Promenade individuelle (laisse ou jardin)",
      "Vérification des gamelles eau & nourriture",
      "Observation de l'état général",
      "Compte-rendu si nécessaire",
    ],
    forWho: "Idéal pour les déplacements professionnels, horaires décalés, personnes à mobilité réduite ou personnes âgées.",
  },
  {
    emoji: "🐈",
    name: "Visite chat",
    duration: "20 minutes",
    description:
      "Votre félin reste chez lui, dans son territoire et ses habitudes. La visite comprend les soins essentiels et une présence rassurante pour maintenir son bien-être quotidien.",
    includes: [
      "Vérification eau & nourriture",
      "Nettoyage de la litière",
      "Câlins et jeu selon la personnalité du chat",
      "Observation de l'état général",
    ],
    forWho: "Parfait pour les chats qui détestent les déplacements et préfèrent leur environnement familier.",
  },
  {
    emoji: "🐇",
    name: "Visite lapin & rongeurs",
    duration: "20 minutes",
    description:
      "Soins attentifs pour vos petits compagnons : lapins, cochons d'Inde, hamsters et autres rongeurs domestiques. Chaque visite assure leur confort et leur sécurité.",
    includes: [
      "Remplissage eau & nourriture fraîche",
      "Nettoyage de la cage/enclos si nécessaire",
      "Vérification de l'état de santé général",
      "Présence et observation comportementale",
    ],
    forWho: "Pour tous les petits rongeurs domestiques qui ont besoin d'attention quotidienne.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation activePage="services" />

      {/* Header */}
      <section className="bg-dark py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="absolute top-4 right-8 w-40 h-40 text-primary" fill="currentColor" viewBox="0 0 64 64">
            <ellipse cx="16" cy="12" rx="7" ry="9"/>
            <ellipse cx="32" cy="8" rx="7" ry="9"/>
            <ellipse cx="48" cy="12" rx="7" ry="9"/>
            <path d="M32 24C18 24 10 34 10 44c0 8 6 14 22 14s22-6 22-14c0-10-8-20-22-20z"/>
          </svg>
        </div>
        <div className="relative z-10">
          <p className="text-primary text-xs tracking-widest uppercase mb-4">Prestations</p>
          <h1 className="font-serif text-5xl md:text-6xl text-white">Mes services</h1>
          <p className="text-white/60 font-light mt-4 max-w-xl mx-auto">
            Chaque visite est personnalisée selon les besoins de votre animal et réalisée
            à votre domicile.
          </p>
        </div>
      </section>

      {/* Services détail */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {services.map((s, i) => (
            <div key={s.name} className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-start`}>
              <div className="flex-shrink-0 w-full md:w-1/3">
                <div className="bg-white border-l-2 border-primary p-8 text-center">
                  <div className="text-6xl mb-4">{s.emoji}</div>
                  <h2 className="font-serif text-2xl text-dark">{s.name}</h2>
                  <p className="text-primary text-xs tracking-widest uppercase mt-2 font-light">{s.duration}</p>
                  <p className="text-dark/40 text-xs mt-3 font-light">[Prix à compléter]</p>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-dark/70 font-light leading-relaxed mb-6">{s.description}</p>
                <h3 className="text-dark text-xs tracking-widest uppercase mb-3 font-normal">Ce qui est inclus</h3>
                <ul className="space-y-2 mb-6">
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-dark/60 font-light text-sm">
                      <span className="text-primary mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="bg-primary/5 border-l-2 border-primary/30 p-4">
                  <p className="text-dark/50 font-light text-sm">{s.forWho}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pour qui */}
      <section className="bg-sand py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary text-xs tracking-widest uppercase mb-3">Pour qui ?</p>
            <h2 className="font-serif text-4xl text-dark">Mes services s&apos;adressent à</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "💼", label: "Les professionnels en déplacement" },
              { icon: "⏰", label: "Les personnes aux horaires décalés" },
              { icon: "♿", label: "Les personnes à mobilité réduite" },
              { icon: "👴", label: "Les personnes âgées" },
              { icon: "✈️", label: "Les vacanciers" },
              { icon: "🏥", label: "Les personnes temporairement empêchées" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 bg-white p-5">
                <span className="text-2xl">{item.icon}</span>
                <p className="text-dark/70 font-light text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visite préalable */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-16 bg-primary/30" />
            <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 64 64">
              <ellipse cx="20" cy="12" rx="6" ry="8"/>
              <ellipse cx="44" cy="12" rx="6" ry="8"/>
              <path d="M32 22C20 22 12 32 12 42c0 7 5 12 20 12s20-5 20-12c0-10-8-20-20-20z"/>
            </svg>
            <div className="h-px w-16 bg-primary/30" />
          </div>
          <h2 className="font-serif text-3xl text-dark mb-4">
            Visite préalable — toujours
          </h2>
          <p className="text-dark/60 font-light mb-8">
            Avant chaque nouvelle mission, j&apos;effectue systématiquement une visite préalable et
            gratuite à votre domicile pour faire connaissance avec votre animal, comprendre
            ses habitudes et vous rencontrer.
          </p>
          <a
            href="tel:0782113589"
            className="inline-block bg-primary text-white px-8 py-4 text-sm tracking-widest uppercase font-light hover:bg-primary-dark transition-colors"
          >
            Prendre contact — 07 82 11 35 89
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
