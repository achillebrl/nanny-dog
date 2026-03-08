import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation activePage="home" />

      {/* ── HERO ── */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/hero.jpg"
          alt="Nanny Dog garde animaux"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-dark/60" />

        {/* Pattes décoratives */}
        <div className="absolute top-8 right-8 opacity-20">
          <svg className="w-20 h-20 text-primary" fill="currentColor" viewBox="0 0 64 64">
            <ellipse cx="16" cy="12" rx="7" ry="9"/>
            <ellipse cx="32" cy="8" rx="7" ry="9"/>
            <ellipse cx="48" cy="12" rx="7" ry="9"/>
            <ellipse cx="8" cy="28" rx="6" ry="8"/>
            <path d="M32 24C18 24 10 34 10 44c0 8 6 14 22 14s22-6 22-14c0-10-8-20-22-20z"/>
          </svg>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-primary text-sm tracking-widest uppercase font-light mb-4">
            Yvelines & Essonne
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-white leading-tight mb-6">
            La nounou préférée<br />
            <em className="text-primary not-italic">des animaux</em>
          </h1>
          <p className="text-white/80 text-lg font-light max-w-2xl mx-auto mb-10">
            Garde de chiens, chats et lapins à votre domicile — pour que vos compagnons
            restent dans leur environnement, sereins et heureux.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0782113589"
              className="bg-primary text-white px-8 py-4 text-sm tracking-widest uppercase font-light hover:bg-primary-dark transition-colors"
            >
              Appeler Nathalie
            </a>
            <Link
              href="/services"
              className="border border-white/40 text-white px-8 py-4 text-sm tracking-widest uppercase font-light hover:bg-white/10 transition-colors"
            >
              Découvrir les services
            </Link>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS BAND ── */}
      <section className="bg-primary/10 border-y border-primary/20 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 text-sm text-dark/70 font-light">
          {[
            "✓ Certifiée ACACED depuis 2015",
            "✓ Plus de 10 ans d'expérience",
            "✓ Animaux gardés à votre domicile",
            "✓ Visite préalable systématique",
          ].map((item) => (
            <span key={item} className="tracking-wide">{item}</span>
          ))}
        </div>
      </section>

      {/* ── ABOUT / CONCEPT ── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary text-xs tracking-widest uppercase mb-3">À propos</p>
            <h2 className="font-serif text-4xl md:text-5xl text-dark mb-6">
              Nathalie,<br />à vos côtés
            </h2>
            {/* Séparateur décoratif */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-primary" />
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 64 64">
                <ellipse cx="20" cy="12" rx="6" ry="8"/>
                <ellipse cx="44" cy="12" rx="6" ry="8"/>
                <path d="M32 22C20 22 12 32 12 42c0 7 5 12 20 12s20-5 20-12c0-10-8-20-20-20z"/>
              </svg>
              <div className="h-px w-12 bg-primary" />
            </div>
            <p className="text-dark/70 font-light leading-relaxed mb-6">
              Professionnelle indépendante certifiée ACACED depuis 2015, je consacre plus de
              10 ans à la garde et au bien-être des animaux de compagnie dans les Yvelines et l&apos;Essonne.
            </p>
            <p className="text-dark/70 font-light leading-relaxed mb-6">
              Je me déplace <strong className="text-dark font-normal">chez vous</strong> pour que vos
              animaux restent dans leur environnement, conservent leurs habitudes et leur alimentation.
              Pas de stress du déplacement, pas de dépaysement.
            </p>
            <blockquote className="border-l-2 border-primary pl-6 my-8">
              <p className="font-serif text-xl text-dark italic leading-relaxed">
                &ldquo;Mon métier est ma passion, j&apos;exerce avec sérieux,
                dans la confiance et la sécurité.&rdquo;
              </p>
              <footer className="text-primary text-sm tracking-widest uppercase mt-3 font-light">
                — Nathalie
              </footer>
            </blockquote>
            <Link
              href="/a-propos"
              className="inline-flex items-center gap-2 text-primary text-sm tracking-widest uppercase font-light hover:gap-4 transition-all"
            >
              En savoir plus <span>→</span>
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-[500px] overflow-hidden">
              <Image
                src="/assets/hero.jpg"
                alt="Nathalie avec les animaux"
                fill
                className="object-cover"
              />
            </div>
            {/* Badge flottant */}
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 shadow-xl">
              <p className="font-serif text-3xl">10+</p>
              <p className="text-xs tracking-widest uppercase font-light mt-1">ans d&apos;expérience</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TAGLINE DIVIDER ── */}
      <section className="bg-dark py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          {[...Array(6)].map((_, i) => (
            <svg key={i} className="absolute text-primary w-32 h-32" style={{ top: `${Math.random()*80}%`, left: `${i*18}%` }} fill="currentColor" viewBox="0 0 64 64">
              <ellipse cx="16" cy="12" rx="7" ry="9"/>
              <ellipse cx="32" cy="8" rx="7" ry="9"/>
              <ellipse cx="48" cy="12" rx="7" ry="9"/>
              <path d="M32 24C18 24 10 34 10 44c0 8 6 14 22 14s22-6 22-14c0-10-8-20-22-20z"/>
            </svg>
          ))}
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-primary text-xs tracking-widest uppercase mb-6">Notre engagement</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
            Vos animaux méritent<br />
            <em className="text-primary not-italic">le meilleur soin</em>
          </h2>
          <p className="text-white/60 font-light mt-6 text-lg">
            Une visite préalable gratuite est toujours organisée avant chaque mission.
          </p>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary text-xs tracking-widest uppercase mb-3">Prestations</p>
            <h2 className="font-serif text-4xl md:text-5xl text-dark">Mes services</h2>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="h-px w-16 bg-primary/30" />
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 64 64">
                <ellipse cx="20" cy="12" rx="6" ry="8"/>
                <ellipse cx="44" cy="12" rx="6" ry="8"/>
                <path d="M32 22C20 22 12 32 12 42c0 7 5 12 20 12s20-5 20-12c0-10-8-20-20-20z"/>
              </svg>
              <div className="h-px w-16 bg-primary/30" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                animal: "🐕",
                name: "Chien",
                duration: "45 minutes",
                desc: "Promenade individuelle, vérification des gamelles et de l'état général de votre chien.",
                detail: "Idéal pour maintenir les habitudes de votre compagnon pendant vos absences.",
              },
              {
                animal: "🐈",
                name: "Chat",
                duration: "20 minutes",
                desc: "Soins, présence et vérification du bien-être de votre chat à son domicile.",
                detail: "Votre félin reste dans son territoire, serein et confortable.",
              },
              {
                animal: "🐇",
                name: "Lapin & rongeurs",
                duration: "20 minutes",
                desc: "Soins, nourriture et présence pour votre lapin ou petit rongeur domestique.",
                detail: "Un regard attentif sur votre petit compagnon au quotidien.",
              },
            ].map((s) => (
              <div
                key={s.name}
                className="bg-white border-l-2 border-primary p-8 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{s.animal}</div>
                <h3 className="font-serif text-2xl text-dark mb-2">{s.name}</h3>
                <p className="text-primary text-xs tracking-widest uppercase mb-4">{s.duration}</p>
                <p className="text-dark/60 font-light text-sm leading-relaxed mb-4">{s.desc}</p>
                <p className="text-dark/40 font-light text-xs leading-relaxed">{s.detail}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 text-sm tracking-widest uppercase font-light hover:bg-primary-dark transition-colors"
            >
              Voir tous les détails →
            </Link>
          </div>
        </div>
      </section>

      {/* ── ZONE D'INTERVENTION ── */}
      <section className="bg-sand py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-primary text-xs tracking-widest uppercase mb-3">Zone</p>
          <h2 className="font-serif text-4xl text-dark mb-8">Zone d&apos;intervention</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto text-left">
            <div>
              <h3 className="font-serif text-xl text-dark mb-4 flex items-center gap-2">
                <span className="text-primary">📍</span> Yvelines (78)
              </h3>
              <p className="text-dark/60 font-light leading-relaxed">
                Ponthévrard · Longvilliers · Rochefort-en-Yvelines · Bullion · Bonnelles ·
                Clairefontaine-en-Yvelines · Sonchamp · et communes limitrophes
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-dark mb-4 flex items-center gap-2">
                <span className="text-primary">📍</span> Essonne (91)
              </h3>
              <p className="text-dark/60 font-light leading-relaxed">
                Dourdan · Pecqueuse · et communes limitrophes de l&apos;Essonne
              </p>
            </div>
          </div>
          <p className="text-dark/40 font-light text-sm mt-8">
            Vous n&apos;êtes pas sûr(e) d&apos;être dans ma zone ? Contactez-moi, je ferai mon possible.
          </p>
        </div>
      </section>

      {/* ── CTA CONTACT ── */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <svg className="w-12 h-12 text-primary mx-auto mb-6" fill="currentColor" viewBox="0 0 64 64">
            <ellipse cx="16" cy="12" rx="7" ry="9"/>
            <ellipse cx="32" cy="8" rx="7" ry="9"/>
            <ellipse cx="48" cy="12" rx="7" ry="9"/>
            <ellipse cx="8" cy="28" rx="6" ry="8"/>
            <path d="M32 24C18 24 10 34 10 44c0 8 6 14 22 14s22-6 22-14c0-10-8-20-22-20z"/>
          </svg>
          <h2 className="font-serif text-4xl md:text-5xl text-dark mb-6">
            Confiez-moi votre animal
          </h2>
          <p className="text-dark/60 font-light mb-10 text-lg">
            Première visite de présentation gratuite. Je me déplace chez vous pour faire
            connaissance avec votre compagnon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0782113589"
              className="bg-primary text-white px-8 py-4 text-sm tracking-widest uppercase font-light hover:bg-primary-dark transition-colors"
            >
              07 82 11 35 89
            </a>
            <a
              href="mailto:nannydogs78@yahoo.com"
              className="border border-primary text-primary px-8 py-4 text-sm tracking-widest uppercase font-light hover:bg-primary hover:text-white transition-colors"
            >
              Envoyer un email
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
