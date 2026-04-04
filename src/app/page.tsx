import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";
import GalleryCarousel from "@/components/GalleryCarousel";

export default function Home() {
  return (
    <>
      <ScrollAnimator />
      <Navigation activePage="Accueil" />

      {/* ═══════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Hero image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/hero.jpg"
            alt="Nanny Dog — garde d'animaux à domicile"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Layered overlays for warmth */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e2a1e]/90 via-[#2C2C2C]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D7D46]/20 to-transparent" />
        </div>

        {/* Decorative top-right geometric */}
        <div className="absolute top-32 right-8 w-48 h-48 border border-white/10 rounded-full hidden lg:block" />
        <div className="absolute top-40 right-16 w-32 h-32 border border-[#2D7D46]/30 rounded-full hidden lg:block" />

        {/* Hero content */}
        <div className="relative w-full max-w-6xl mx-auto px-6 pb-20 pt-32">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-[#C4956A]" />
              <span
                className="text-[#C4956A] text-sm font-medium uppercase tracking-widest"
                style={{ fontFamily: "var(--font-lora)" }}
              >
                Yvelines Sud · Essonne
              </span>
            </div>

            {/* Main heading */}
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] text-white mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              La nounou
              <span className="block italic text-[#4a9e62] font-normal">
                préférée
              </span>
              <span className="block">des animaux</span>
            </h1>

            {/* Description */}
            <p
              className="text-white/75 text-lg md:text-xl leading-relaxed max-w-xl mb-10"
              style={{ fontFamily: "var(--font-lora)" }}
            >
              Garde à domicile pour chiens, chats et petits rongeurs — votre animal reste dans son environnement, serein et heureux.
            </p>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a
                href="tel:0782113589"
                className="group inline-flex items-center gap-3 bg-[#2D7D46] hover:bg-[#1e5a32] text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 shadow-xl shadow-[#2D7D46]/30 hover:shadow-[#2D7D46]/50 hover:scale-105"
                style={{ fontFamily: "var(--font-lora)" }}
              >
                <span className="w-8 h-8 bg-white/15 rounded-full flex items-center justify-center text-sm group-hover:bg-white/25 transition-colors">
                  📞
                </span>
                07 82 11 35 89
              </a>
              <a
                href="mailto:nannydogs78@yahoo.com"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm border-b border-white/30 hover:border-white pb-0.5"
                style={{ fontFamily: "var(--font-lora)" }}
              >
                Écrire à Nathalie →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom badges bar */}
        <div className="absolute bottom-0 right-0 hidden lg:flex items-center gap-6 bg-white/95 backdrop-blur-sm px-8 py-4 rounded-tl-3xl shadow-2xl">
          <div className="text-center">
            <p className="text-[#2D7D46] font-bold text-2xl" style={{ fontFamily: "var(--font-playfair)" }}>10+</p>
            <p className="text-[#8B6F4E] text-xs uppercase tracking-wide" style={{ fontFamily: "var(--font-lora)" }}>ans d'expérience</p>
          </div>
          <div className="w-px h-10 bg-[#2D7D46]/15" />
          <div className="text-center">
            <p className="text-[#2D7D46] font-bold text-2xl" style={{ fontFamily: "var(--font-playfair)" }}>ACACED</p>
            <p className="text-[#8B6F4E] text-xs uppercase tracking-wide" style={{ fontFamily: "var(--font-lora)" }}>Certifiée 2015</p>
          </div>
          <div className="w-px h-10 bg-[#2D7D46]/15" />
          <div className="text-center">
            <p className="text-[#2D7D46] font-bold text-2xl" style={{ fontFamily: "var(--font-playfair)" }}>100%</p>
            <p className="text-[#8B6F4E] text-xs uppercase tracking-wide" style={{ fontFamily: "var(--font-lora)" }}>À domicile</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MARQUEE STRIP
      ═══════════════════════════════════════ */}
      <div className="bg-[#2D7D46] py-4 overflow-hidden">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 pr-8">
              {["🐕 Promenades individuelles", "🐈 Visites à domicile", "🐰 Petits rongeurs", "✅ Certifiée ACACED", "💚 Visite préalable systématique", "🏡 L'animal reste chez lui", "🤝 Confiance & Sérieux"].map(
                (item, j) => (
                  <span
                    key={j}
                    className="text-white font-medium text-sm whitespace-nowrap px-6 flex items-center gap-2"
                    style={{ fontFamily: "var(--font-lora)" }}
                  >
                    {item}
                    <span className="text-white/40 ml-4">·</span>
                  </span>
                )
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════
          SERVICES SECTION
      ═══════════════════════════════════════ */}
      <section id="services" className="py-28 bg-[#FAF7F2] leaf-bg relative overflow-hidden">
        {/* Decorative blob */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#2D7D46]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#C4956A]/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-6">
          {/* Section header */}
          <div className="text-center mb-20" data-animate>
            <span
              className="text-[#2D7D46] text-sm font-semibold uppercase tracking-[0.3em]"
              style={{ fontFamily: "var(--font-lora)" }}
            >
              Ce que je propose
            </span>
            <h2
              className="text-4xl md:text-6xl font-bold text-[#2C2C2C] mt-3 mb-5"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Mes <em className="text-[#2D7D46] not-italic font-normal italic">services</em>
            </h2>
            <div className="paw-divider max-w-xs mx-auto">
              <span className="text-xl">🐾</span>
            </div>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 — Chien */}
            <div
              className="service-card bg-white rounded-3xl p-8 shadow-sm border border-[#2D7D46]/10 relative overflow-hidden"
              data-animate
              data-delay="100"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2D7D46] to-[#4a9e62]" />

              <div className="w-16 h-16 bg-[#2D7D46]/10 rounded-2xl flex items-center justify-center text-3xl mb-6 float-anim">
                🐕
              </div>

              <div className="inline-flex items-center gap-2 bg-[#2D7D46]/10 text-[#2D7D46] text-xs font-semibold px-3 py-1 rounded-full mb-4" style={{ fontFamily: "var(--font-lora)" }}>
                45 minutes
              </div>

              <h3
                className="text-2xl font-bold text-[#2C2C2C] mb-3"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Visite Chien
              </h3>
              <p
                className="text-[#2C2C2C]/65 leading-relaxed text-sm"
                style={{ fontFamily: "var(--font-lora)" }}
              >
                Promenade individuelle de votre chien, vérification des gamelles et de l'état général de l'animal. Chaque chien mérite une attention exclusive.
              </p>

              <div className="mt-6 pt-6 border-t border-[#2D7D46]/10">
                <div className="flex items-center gap-2 text-[#2D7D46] text-xs font-medium" style={{ fontFamily: "var(--font-lora)" }}>
                  <span className="w-4 h-4 bg-[#2D7D46] text-white rounded-full flex items-center justify-center text-xs">✓</span>
                  Promenade individuelle
                </div>
                <div className="flex items-center gap-2 text-[#2D7D46] text-xs font-medium mt-2" style={{ fontFamily: "var(--font-lora)" }}>
                  <span className="w-4 h-4 bg-[#2D7D46] text-white rounded-full flex items-center justify-center text-xs">✓</span>
                  Vérification gamelles & état
                </div>
              </div>
            </div>

            {/* Service 2 — Chat (featured) */}
            <div
              className="service-card bg-[#2D7D46] rounded-3xl p-8 shadow-xl shadow-[#2D7D46]/20 relative overflow-hidden"
              data-animate
              data-delay="200"
            >
              {/* Decorative circles */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/5 rounded-full" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/5 rounded-full" />

              <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center text-3xl mb-6 float-anim" style={{ animationDelay: "0.5s" }}>
                🐈
              </div>

              <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4" style={{ fontFamily: "var(--font-lora)" }}>
                20 minutes
              </div>

              <h3
                className="text-2xl font-bold text-white mb-3"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Visite Chat
              </h3>
              <p
                className="text-white/80 leading-relaxed text-sm"
                style={{ fontFamily: "var(--font-lora)" }}
              >
                Visite personnalisée pour s'occuper de votre chat à domicile. Votre félin reste dans son univers familier, serein et bien soigné.
              </p>

              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="flex items-center gap-2 text-white/90 text-xs font-medium" style={{ fontFamily: "var(--font-lora)" }}>
                  <span className="w-4 h-4 bg-white/20 text-white rounded-full flex items-center justify-center text-xs">✓</span>
                  Dans son environnement
                </div>
                <div className="flex items-center gap-2 text-white/90 text-xs font-medium mt-2" style={{ fontFamily: "var(--font-lora)" }}>
                  <span className="w-4 h-4 bg-white/20 text-white rounded-full flex items-center justify-center text-xs">✓</span>
                  Soins & câlins assurés
                </div>
              </div>
            </div>

            {/* Service 3 — Lapin */}
            <div
              className="service-card bg-white rounded-3xl p-8 shadow-sm border border-[#2D7D46]/10 relative overflow-hidden"
              data-animate
              data-delay="300"
            >
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(to right, #C4956A, #d4a574)" }} />

              <div className="w-16 h-16 bg-[#C4956A]/15 rounded-2xl flex items-center justify-center text-3xl mb-6 float-anim" style={{ animationDelay: "1s" }}>
                🐰
              </div>

              <div className="inline-flex items-center gap-2 bg-[#C4956A]/15 text-[#8B6F4E] text-xs font-semibold px-3 py-1 rounded-full mb-4" style={{ fontFamily: "var(--font-lora)" }}>
                20 minutes
              </div>

              <h3
                className="text-2xl font-bold text-[#2C2C2C] mb-3"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Visite Lapin
              </h3>
              <p
                className="text-[#2C2C2C]/65 leading-relaxed text-sm"
                style={{ fontFamily: "var(--font-lora)" }}
              >
                Visite dédiée à votre lapin et petits rongeurs à domicile. Vos petits compagnons sont entre de bonnes mains.
              </p>

              <div className="mt-6 pt-6 border-t border-[#C4956A]/15">
                <div className="flex items-center gap-2 text-[#8B6F4E] text-xs font-medium" style={{ fontFamily: "var(--font-lora)" }}>
                  <span className="w-4 h-4 bg-[#C4956A] text-white rounded-full flex items-center justify-center text-xs">✓</span>
                  Lapins & petits rongeurs
                </div>
                <div className="flex items-center gap-2 text-[#8B6F4E] text-xs font-medium mt-2" style={{ fontFamily: "var(--font-lora)" }}>
                  <span className="w-4 h-4 bg-[#C4956A] text-white rounded-full flex items-center justify-center text-xs">✓</span>
                  Alimentation & bien-être
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA below services */}
          <div className="text-center mt-14" data-animate data-delay="400">
            <p
              className="text-[#2C2C2C]/60 text-base mb-5"
              style={{ fontFamily: "var(--font-lora)" }}
            >
              Une question ? Contactez Nathalie directement pour discuter de vos besoins.
            </p>
            <a
              href="mailto:nannydogs78@yahoo.com"
              className="inline-flex items-center gap-3 border-2 border-[#2D7D46] text-[#2D7D46] hover:bg-[#2D7D46] hover:text-white px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300"
              style={{ fontFamily: "var(--font-lora)" }}
            >
              Contacter Nathalie
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ABOUT SECTION
      ═══════════════════════════════════════ */}
      <section id="about" className="py-28 bg-[#F5EFE4] relative overflow-hidden">
        {/* Large decorative text */}
        <div
          className="absolute top-8 right-4 text-[12rem] font-bold text-[#2D7D46]/4 leading-none select-none hidden lg:block"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Nathalie
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <div className="relative" data-animate="fade-left">
              {/* Main image */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/about.jpg"
                  alt="Nathalie, gardienne d'animaux — Nanny Dog"
                  fill
                  className="object-cover"
                />
                {/* Gradient overlay bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D7D46]/30 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-xl border border-[#2D7D46]/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#2D7D46]/10 rounded-xl flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#2D7D46">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-[#2D7D46] text-sm" style={{ fontFamily: "var(--font-playfair)" }}>ACACED</p>
                    <p className="text-[#8B6F4E] text-xs" style={{ fontFamily: "var(--font-lora)" }}>Certifiée depuis 2015</p>
                  </div>
                </div>
              </div>

              {/* Top-left accent */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-[#2D7D46]/20 rounded-2xl" />
            </div>

            {/* Text side */}
            <div data-animate="fade-right">
              <span
                className="text-[#2D7D46] text-sm font-semibold uppercase tracking-[0.3em]"
                style={{ fontFamily: "var(--font-lora)" }}
              >
                À propos
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mt-3 mb-6 leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Bonjour, je suis{" "}
                <em className="text-[#2D7D46] italic font-normal">Nathalie</em>
              </h2>

              <p
                className="text-[#2C2C2C]/75 leading-relaxed text-base mb-5"
                style={{ fontFamily: "var(--font-lora)" }}
              >
                Professionnelle indépendante certifiée ACACED depuis 2015, j'exerce avec passion depuis plus de 10 ans. Mon métier, c'est ma vocation : prendre soin de vos animaux comme s'ils étaient les miens.
              </p>
              <p
                className="text-[#2C2C2C]/75 leading-relaxed text-base mb-8"
                style={{ fontFamily: "var(--font-lora)" }}
              >
                Je rends visite à vos animaux de compagnie à <strong>votre domicile</strong>. Ainsi, ils restent dans leur environnement habituel, gardent leur nourriture, leurs repères — sans être dépaysés. J'effectue toujours une <strong>visite préalable et indispensable</strong> avant toute prise en charge.
              </p>

              {/* USPs */}
              <div className="space-y-4">
                {[
                  { icon: "🏡", text: "L'animal reste chez lui, dans ses habitudes" },
                  { icon: "🤝", text: "Visite préalable systématique et obligatoire" },
                  { icon: "🦮", text: "Promenades individuelles, jamais collectives" },
                  { icon: "♿", text: "Service adapté aux personnes à mobilité réduite et âgées" },
                ].map((usp, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 bg-white/70 rounded-2xl border border-[#2D7D46]/10"
                    data-animate
                    data-delay={`${(i + 1) * 100}`}
                  >
                    <span className="text-xl flex-shrink-0">{usp.icon}</span>
                    <p
                      className="text-[#2C2C2C]/80 text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-lora)" }}
                    >
                      {usp.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          GALLERY SECTION
      ═══════════════════════════════════════ */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14" data-animate>
            <span
              className="text-[#2D7D46] text-sm font-semibold uppercase tracking-[0.3em]"
              style={{ fontFamily: "var(--font-lora)" }}
            >
              Galerie
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mt-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Nos petits <em className="text-[#2D7D46] italic font-normal">pensionnaires</em>
            </h2>
          </div>
          <div data-animate>
            <GalleryCarousel />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHO IT'S FOR SECTION
      ═══════════════════════════════════════ */}
      <section className="py-24 bg-[#2D7D46] relative overflow-hidden noise">
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-14" data-animate>
            <span
              className="text-white/60 text-sm font-semibold uppercase tracking-[0.3em]"
              style={{ fontFamily: "var(--font-lora)" }}
            >
              Pour qui ?
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mt-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Un service pensé pour <em className="italic font-normal text-[#90d4a3]">chacun</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { emoji: "♿", title: "Mobilité réduite", desc: "Pour les personnes à mobilité réduite ne pouvant pas promener leur animal." },
              { emoji: "👴", title: "Personnes âgées", desc: "Pour les seniors ayant des difficultés à se déplacer régulièrement." },
              { emoji: "✈️", title: "Déplacements pro", desc: "Pour les professionnels souvent absents pour raisons de travail." },
              { emoji: "⏰", title: "Horaires décalés", desc: "Pour ceux qui travaillent avec des horaires atypiques ou en shift." },
              { emoji: "🚫", title: "Animal non-autorisé", desc: "Pour les situations où l'animal ne peut pas vous accompagner." },
              { emoji: "🐾", title: "Bien-être animal", desc: "Et tout simplement pour le mieux-être de votre compagnon." },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/15 hover:bg-white/15 transition-colors duration-300"
                data-animate
                data-delay={`${(i % 3) * 100}`}
              >
                <span className="text-3xl mb-4 block">{item.emoji}</span>
                <h4
                  className="text-white font-bold text-lg mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {item.title}
                </h4>
                <p
                  className="text-white/70 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-lora)" }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ZONE SECTION
      ═══════════════════════════════════════ */}
      <section id="zone" className="py-28 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div data-animate="fade-left">
              <span
                className="text-[#2D7D46] text-sm font-semibold uppercase tracking-[0.3em]"
                style={{ fontFamily: "var(--font-lora)" }}
              >
                Zone d'intervention
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mt-3 mb-6 leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Yvelines Sud &{" "}
                <em className="text-[#2D7D46] italic font-normal">Essonne</em>
              </h2>
              <p
                className="text-[#2C2C2C]/65 leading-relaxed mb-8"
                style={{ fontFamily: "var(--font-lora)" }}
              >
                J'interviens dans les Yvelines Sud (78) et les communes limitrophes de l'Essonne (91). Contactez-moi pour vérifier si votre commune est couverte.
              </p>

              {/* Communes list */}
              <div className="bg-white rounded-2xl p-6 border border-[#2D7D46]/10 shadow-sm">
                <h4
                  className="text-[#2D7D46] font-semibold text-sm uppercase tracking-wide mb-4"
                  style={{ fontFamily: "var(--font-lora)" }}
                >
                  Communes desservies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Ponthévrard",
                    "Longvilliers",
                    "Rochefort-en-Yvelines",
                    "Bullion",
                    "Bonnelles",
                    "Clairefontaine-en-Yvelines",
                    "Sonchamp",
                    "Dourdan",
                    "Pecqueuse",
                  ].map((ville) => (
                    <span
                      key={ville}
                      className="bg-[#E8F0EA] text-[#2D7D46] text-xs font-medium px-3 py-1.5 rounded-full"
                      style={{ fontFamily: "var(--font-lora)" }}
                    >
                      {ville}
                    </span>
                  ))}
                  <span
                    className="bg-[#2D7D46]/10 text-[#2D7D46] text-xs font-medium px-3 py-1.5 rounded-full border border-[#2D7D46]/20"
                    style={{ fontFamily: "var(--font-lora)" }}
                  >
                    + communes voisines
                  </span>
                </div>
              </div>
            </div>

            {/* Map-style decoration */}
            <div className="relative" data-animate="fade-right">
              <div className="bg-[#E8F0EA] rounded-3xl p-10 relative overflow-hidden min-h-80 flex items-center justify-center">
                {/* Decorative concentric circles suggesting a map */}
                <div className="absolute inset-0">
                  {[80, 60, 40, 20].map((size) => (
                    <div
                      key={size}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-[#2D7D46]/20 rounded-full"
                      style={{ width: `${size}%`, height: `${size}%` }}
                    />
                  ))}
                </div>

                {/* Center pin */}
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-[#2D7D46] rounded-full flex items-center justify-center text-2xl shadow-xl shadow-[#2D7D46]/30 mx-auto mb-4">
                    📍
                  </div>
                  <p
                    className="text-[#2D7D46] font-bold text-xl"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Yvelines (78)
                  </p>
                  <p
                    className="text-[#8B6F4E] text-sm mt-1"
                    style={{ fontFamily: "var(--font-lora)" }}
                  >
                    & Essonne (91)
                  </p>
                </div>

                {/* Floating dots suggesting villages */}
                {[
                  { top: "20%", left: "30%" },
                  { top: "35%", left: "70%" },
                  { top: "60%", left: "25%" },
                  { top: "70%", left: "60%" },
                  { top: "25%", left: "55%" },
                ].map((pos, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 bg-[#2D7D46]/40 rounded-full border-2 border-[#2D7D46]"
                    style={{ top: pos.top, left: pos.left }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONTACT / CTA SECTION
      ═══════════════════════════════════════ */}
      <section className="py-24 bg-[#F5EFE4] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D7D46]/5 via-transparent to-[#C4956A]/5" />

        <div className="relative max-w-4xl mx-auto px-6 text-center" data-animate>
          <span
            className="text-[#2D7D46] text-sm font-semibold uppercase tracking-[0.3em]"
            style={{ fontFamily: "var(--font-lora)" }}
          >
            Prêt à commencer ?
          </span>
          <h2
            className="text-4xl md:text-6xl font-bold text-[#2C2C2C] mt-4 mb-6 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Prenons soin de votre{" "}
            <em className="text-[#2D7D46] italic font-normal">compagnon</em>
          </h2>
          <p
            className="text-[#2C2C2C]/65 text-lg leading-relaxed max-w-2xl mx-auto mb-10"
            style={{ fontFamily: "var(--font-lora)" }}
          >
            Contactez Nathalie pour organiser votre visite préalable — toujours gratuite et indispensable. Ensemble, nous trouverons le service le mieux adapté à votre animal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:0782113589"
              className="group inline-flex items-center gap-3 bg-[#2D7D46] hover:bg-[#1e5a32] text-white px-10 py-4 rounded-full font-semibold text-base transition-all duration-300 shadow-xl shadow-[#2D7D46]/25 hover:scale-105"
              style={{ fontFamily: "var(--font-lora)" }}
            >
              <span className="text-lg">📞</span>
              07 82 11 35 89
            </a>
            <a
              href="mailto:nannydogs78@yahoo.com"
              className="inline-flex items-center gap-3 bg-white hover:bg-[#2D7D46] text-[#2D7D46] hover:text-white px-10 py-4 rounded-full font-semibold text-base transition-all duration-300 shadow-md border border-[#2D7D46]/20"
              style={{ fontFamily: "var(--font-lora)" }}
            >
              <span>✉</span>
              nannydogs78@yahoo.com
            </a>
          </div>

          {/* Reassurance */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {[
              "🔒 Visite préalable offerte",
              "🐾 10+ ans d'expérience",
              "📜 Certifiée ACACED",
            ].map((item) => (
              <span
                key={item}
                className="text-[#2C2C2C]/60 text-sm flex items-center gap-1"
                style={{ fontFamily: "var(--font-lora)" }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
