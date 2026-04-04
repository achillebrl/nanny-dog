import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-white relative overflow-hidden">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2D7D46] to-transparent" />

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#2D7D46] translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#C4956A] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-14 h-14 bg-white rounded-full p-1">
                <Image
                  src="/assets/logo.png"
                  alt="Nanny Dog"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <h3
                  className="text-white font-bold text-xl"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Nanny Dog
                </h3>
                <p
                  className="text-[#C4956A] text-sm italic"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  La nounou préférée des animaux
                </p>
              </div>
            </div>
            <p
              className="text-white/60 text-sm leading-relaxed mt-4"
              style={{ fontFamily: "var(--font-lora)" }}
            >
              Garde d'animaux à domicile dans les Yvelines Sud et communes de l'Essonne limitrophes. Certifiée ACACED depuis 2015.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-[#2D7D46] font-semibold text-sm uppercase tracking-widest mb-5"
              style={{ fontFamily: "var(--font-lora)" }}
            >
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="tel:0782113589"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                style={{ fontFamily: "var(--font-lora)" }}
              >
                <span className="w-8 h-8 rounded-full bg-[#2D7D46]/20 flex items-center justify-center text-[#2D7D46] group-hover:bg-[#2D7D46] group-hover:text-white transition-all text-xs">
                  📞
                </span>
                07 82 11 35 89
              </a>
              <a
                href="mailto:nannydogs78@yahoo.com"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                style={{ fontFamily: "var(--font-lora)" }}
              >
                <span className="w-8 h-8 rounded-full bg-[#2D7D46]/20 flex items-center justify-center text-[#2D7D46] group-hover:bg-[#2D7D46] group-hover:text-white transition-all text-xs">
                  ✉
                </span>
                nannydogs78@yahoo.com
              </a>
            </div>
          </div>

          {/* Zone */}
          <div>
            <h4
              className="text-[#2D7D46] font-semibold text-sm uppercase tracking-widest mb-5"
              style={{ fontFamily: "var(--font-lora)" }}
            >
              Zone d'intervention
            </h4>
            <p
              className="text-white/70 text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-lora)" }}
            >
              Yvelines Sud (78) &amp; Essonne (91)
            </p>
            <p
              className="text-white/50 text-xs leading-relaxed mt-2"
              style={{ fontFamily: "var(--font-lora)" }}
            >
              Ponthévrard · Longvilliers · Rochefort-en-Yvelines · Bullion · Bonnelles · Clairefontaine-en-Yvelines · Sonchamp · Dourdan · Pecqueuse
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-white/40 text-xs"
            style={{ fontFamily: "var(--font-lora)" }}
          >
            © {new Date().getFullYear()} Nanny Dog — Tous droits réservés
          </p>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-[#2D7D46]/20 border border-[#2D7D46]/30 text-[#4a9e62] text-xs px-3 py-1.5 rounded-full">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Certifiée ACACED depuis 2015
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}