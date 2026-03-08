import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "À propos — Nanny Dog | Nathalie, gardienne passionnée",
  description:
    "Découvrez Nathalie, professionnelle indépendante certifiée ACACED depuis 2015, avec plus de 10 ans d'expérience en garde d'animaux à domicile.",
};

export default function AProposPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation activePage="a-propos" />

      {/* Header */}
      <section className="bg-dark py-24 px-6 text-center relative overflow-hidden">
        <svg className="absolute top-4 left-8 w-32 h-32 text-primary opacity-5" fill="currentColor" viewBox="0 0 64 64">
          <ellipse cx="16" cy="12" rx="7" ry="9"/>
          <ellipse cx="32" cy="8" rx="7" ry="9"/>
          <ellipse cx="48" cy="12" rx="7" ry="9"/>
          <path d="M32 24C18 24 10 34 10 44c0 8 6 14 22 14s22-6 22-14c0-10-8-20-22-20z"/>
        </svg>
        <div className="relative z-10">
          <p className="text-primary text-xs tracking-widest uppercase mb-4">Mon histoire</p>
          <h1 className="font-serif text-5xl md:text-6xl text-white">À propos</h1>
          <p className="text-white/60 font-light mt-4">Nathalie — professionnelle indépendante</p>
        </div>
      </section>

      {/* Portrait */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative h-[550px] overflow-hidden">
              <Image
                src="/assets/hero.jpg"
                alt="Nathalie - Nanny Dog"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-8 shadow-xl">
              <p className="font-serif text-4xl">2015</p>
              <p className="text-xs tracking-widest uppercase font-light mt-1">Certification ACACED</p>
            </div>
          </div>

          <div>
            <p className="text-primary text-xs tracking-widest uppercase mb-3">Qui suis-je ?</p>
            <h2 className="font-serif text-4xl text-dark mb-6">Nathalie,<br />passionnée depuis toujours</h2>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-primary" />
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 64 64">
                <ellipse cx="20" cy="12" rx="6" ry="8"/>
                <ellipse cx="44" cy="12" rx="6" ry="8"/>
                <path d="M32 22C20 22 12 32 12 42c0 7 5 12 20 12s20-5 20-12c0-10-8-20-20-20z"/>
              </svg>
              <div className="h-px w-12 bg-primary" />
            </div>

            <p className="text-dark/70 font-light leading-relaxed mb-5">
              Je suis Nathalie, professionnelle indépendante spécialisée dans la garde
              d&apos;animaux à domicile. Ma certification <strong className="text-dark font-normal">ACACED</strong> (Attestation de Connaissances pour
              les Animaux de Compagnie d&apos;Espèces Domestiques), obtenue en 2015, garantit
              un niveau de connaissances solide en bien-être animal, santé et comportement.
            </p>
            <p className="text-dark/70 font-light leading-relaxed mb-5">
              Avec <strong className="text-dark font-normal">plus de 10 ans d&apos;expérience</strong> auprès des animaux, j&apos;exerce dans les
              Yvelines Sud et les communes limitrophes de l&apos;Essonne, autour de Saint-Arnoult.
            </p>
            <p className="text-dark/70 font-light leading-relaxed mb-8">
              Mon engagement : que chaque animal confié soit traité avec le même amour et
              la même attention que s&apos;il était le mien.
            </p>

            <blockquote className="border-l-2 border-primary pl-6 mb-8">
              <p className="font-serif text-xl text-dark italic leading-relaxed">
                &ldquo;Mon métier est ma passion, j&apos;exerce avec sérieux,
                dans la confiance et la sécurité.&rdquo;
              </p>
              <footer className="text-primary text-sm tracking-widest uppercase mt-3 font-light">
                — Nathalie
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="bg-sand py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary text-xs tracking-widest uppercase mb-3">Mes valeurs</p>
            <h2 className="font-serif text-4xl text-dark">Ce qui me guide</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🛡️",
                title: "Sécurité",
                desc: "La sécurité de votre animal est ma priorité absolue. Chaque geste est réfléchi, chaque situation anticipée.",
              },
              {
                icon: "🤝",
                title: "Confiance",
                desc: "La confiance se construit lors de la visite préalable. Je prends le temps de vous connaître, vous et votre animal.",
              },
              {
                icon: "❤️",
                title: "Passion",
                desc: "Ce n'est pas un métier comme les autres — c'est une vocation. Chaque animal reçoit une attention sincère et chaleureuse.",
              },
            ].map((v) => (
              <div key={v.title} className="bg-white p-8 border-l-2 border-primary hover:-translate-y-1 hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-serif text-xl text-dark mb-3">{v.title}</h3>
                <p className="text-dark/60 font-light text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 px-6 py-3 mb-8">
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
            </svg>
            <span className="text-primary text-sm tracking-widest uppercase font-light">Certification officielle</span>
          </div>
          <h2 className="font-serif text-3xl text-dark mb-4">ACACED — depuis 2015</h2>
          <p className="text-dark/60 font-light leading-relaxed">
            L&apos;ACACED (Attestation de Connaissances pour les Animaux de Compagnie d&apos;Espèces
            Domestiques) est une certification officielle française attestant des connaissances
            en matière de bien-être animal, de comportement, de besoins nutritionnels et
            de premiers soins. Elle garantit un accompagnement professionnel et responsable.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-4 text-sm tracking-widest uppercase font-light hover:bg-primary-dark transition-colors"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
