import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-white/70 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            {/* Patte SVG décorative */}
            <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 64 64">
              <ellipse cx="16" cy="12" rx="7" ry="9"/>
              <ellipse cx="32" cy="8" rx="7" ry="9"/>
              <ellipse cx="48" cy="12" rx="7" ry="9"/>
              <ellipse cx="8" cy="28" rx="6" ry="8"/>
              <path d="M32 24C18 24 10 34 10 44c0 8 6 14 22 14s22-6 22-14c0-10-8-20-22-20z"/>
            </svg>
            <span className="font-serif text-2xl text-white">
              Nanny <span className="text-primary">Dog</span>
            </span>
          </div>
          <p className="text-sm font-light leading-relaxed">
            La nounou préférée des animaux.<br />
            Garde à domicile avec amour et professionnalisme.
          </p>
          <p className="text-xs text-white/40 mt-4">Certifiée ACACED depuis 2015</p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white text-xs tracking-widest uppercase mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm font-light">
            <li><Link href="/" className="hover:text-primary transition-colors">Accueil</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
            <li><Link href="/a-propos" className="hover:text-primary transition-colors">À propos</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-xs tracking-widest uppercase mb-4">Contact</h3>
          <ul className="space-y-3 text-sm font-light">
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              <a href="tel:0782113589" className="hover:text-primary transition-colors">07 82 11 35 89</a>
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <a href="mailto:nannydogs78@yahoo.com" className="hover:text-primary transition-colors">nannydogs78@yahoo.com</a>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span>Yvelines Sud (78)<br />& Essonne (91)</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Séparateur */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/30">
          © {new Date().getFullYear()} Nanny Dog — Tous droits réservés
        </p>
        <div className="flex items-center gap-2 text-white/20 text-xs">
          <span>—</span>
          <svg className="w-4 h-4 text-primary/50" fill="currentColor" viewBox="0 0 64 64">
            <ellipse cx="16" cy="12" rx="5" ry="7"/>
            <ellipse cx="32" cy="8" rx="5" ry="7"/>
            <ellipse cx="48" cy="12" rx="5" ry="7"/>
            <path d="M32 22C20 22 12 32 12 42c0 7 5 12 20 12s20-5 20-12c0-10-8-20-20-20z"/>
          </svg>
          <span>—</span>
        </div>
        <p className="text-xs text-white/30">Site professionnel de garde animaux à domicile</p>
      </div>
    </footer>
  );
}
