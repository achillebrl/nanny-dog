import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact — Nanny Dog | Garde animaux Yvelines & Essonne",
  description:
    "Contactez Nathalie pour la garde de votre animal à domicile. Tél : 07 82 11 35 89. Secteur Saint-Arnoult, Yvelines et Essonne.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation activePage="contact" />

      {/* Header */}
      <section className="bg-dark py-24 px-6 text-center relative overflow-hidden">
        <svg className="absolute bottom-0 left-8 w-32 h-32 text-primary opacity-5" fill="currentColor" viewBox="0 0 64 64">
          <ellipse cx="16" cy="12" rx="7" ry="9"/>
          <ellipse cx="32" cy="8" rx="7" ry="9"/>
          <ellipse cx="48" cy="12" rx="7" ry="9"/>
          <path d="M32 24C18 24 10 34 10 44c0 8 6 14 22 14s22-6 22-14c0-10-8-20-22-20z"/>
        </svg>
        <div className="relative z-10">
          <p className="text-primary text-xs tracking-widest uppercase mb-4">Prise de contact</p>
          <h1 className="font-serif text-5xl md:text-6xl text-white">Contact</h1>
          <p className="text-white/60 font-light mt-4">
            Je vous réponds dans les plus brefs délais
          </p>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Infos */}
          <div>
            <p className="text-primary text-xs tracking-widest uppercase mb-3">Coordonnées</p>
            <h2 className="font-serif text-4xl text-dark mb-8">Parlons de<br />vos animaux</h2>

            <div className="flex items-center gap-3 mb-10">
              <div className="h-px w-12 bg-primary" />
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 64 64">
                <ellipse cx="20" cy="12" rx="6" ry="8"/>
                <ellipse cx="44" cy="12" rx="6" ry="8"/>
                <path d="M32 22C20 22 12 32 12 42c0 7 5 12 20 12s20-5 20-12c0-10-8-20-20-20z"/>
              </svg>
              <div className="h-px w-12 bg-primary" />
            </div>

            <div className="space-y-8">
              <a
                href="tel:0782113589"
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                  <svg className="w-6 h-6 text-primary group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-dark/40 font-light mb-1">Téléphone</p>
                  <p className="font-serif text-2xl text-dark group-hover:text-primary transition-colors">07 82 11 35 89</p>
                </div>
              </a>

              <a
                href="mailto:nannydogs78@yahoo.com"
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                  <svg className="w-6 h-6 text-primary group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-dark/40 font-light mb-1">Email</p>
                  <p className="font-serif text-xl text-dark group-hover:text-primary transition-colors break-all">nannydogs78@yahoo.com</p>
                </div>
              </a>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-dark/40 font-light mb-1">Zone</p>
                  <p className="font-serif text-xl text-dark">Yvelines (78) & Essonne (91)</p>
                  <p className="text-dark/50 font-light text-sm mt-2">
                    Saint-Arnoult, Ponthévrard, Longvilliers,<br />
                    Rochefort-en-Yvelines, Bullion, Sonnchamp,<br />
                    Dourdan, Pecqueuse…
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Infos complémentaires */}
          <div className="flex flex-col gap-8">
            {/* Visite préalable */}
            <div className="bg-white border-l-2 border-primary p-8">
              <h3 className="font-serif text-2xl text-dark mb-4">Visite préalable</h3>
              <p className="text-dark/60 font-light text-sm leading-relaxed">
                Avant toute mission, j&apos;effectue systématiquement une visite
                préalable et <strong className="text-dark font-normal">gratuite</strong> chez
                vous pour faire connaissance avec votre animal et comprendre ses besoins.
              </p>
            </div>

            {/* Comment ça marche */}
            <div className="bg-primary/5 p-8">
              <h3 className="text-dark text-xs tracking-widest uppercase mb-6">Comment ça se passe ?</h3>
              <ol className="space-y-5">
                {[
                  { n: "01", text: "Vous me contactez par téléphone ou email" },
                  { n: "02", text: "Nous convenons d'une visite préalable gratuite" },
                  { n: "03", text: "Je rencontre votre animal et vous à votre domicile" },
                  { n: "04", text: "Nous définissons ensemble le planning des visites" },
                  { n: "05", text: "Je m'occupe de votre compagnon avec soin" },
                ].map((step) => (
                  <li key={step.n} className="flex items-start gap-4">
                    <span className="text-primary font-serif text-lg flex-shrink-0">{step.n}</span>
                    <p className="text-dark/60 font-light text-sm">{step.text}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* CTA final */}
            <a
              href="tel:0782113589"
              className="bg-primary text-white py-5 text-center text-sm tracking-widest uppercase font-light hover:bg-primary-dark transition-colors"
            >
              Appeler maintenant → 07 82 11 35 89
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
