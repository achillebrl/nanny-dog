"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navigation({ activePage }: { activePage?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Accueil", key: "home" },
    { href: "/services", label: "Services", key: "services" },
    { href: "/a-propos", label: "À propos", key: "a-propos" },
    { href: "/contact", label: "Contact", key: "contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur-md border-b border-primary/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/assets/logo.png"
            alt="Nanny Dog"
            width={120}
            height={79}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase font-light">
          {links.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              className={`transition-colors hover:text-primary ${
                activePage === l.key ? "text-primary font-normal" : "text-dark/70"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <a
          href="tel:0782113589"
          className="hidden md:inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 text-sm tracking-widest uppercase font-light hover:bg-primary-dark transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
          </svg>
          07 82 11 35 89
        </a>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 text-dark"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <div className="w-6 h-0.5 bg-current mb-1.5 transition-all" />
          <div className="w-6 h-0.5 bg-current mb-1.5 transition-all" />
          <div className="w-6 h-0.5 bg-current transition-all" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-primary/10 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm tracking-widest uppercase font-light transition-colors hover:text-primary ${
                activePage === l.key ? "text-primary" : "text-dark/70"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:0782113589"
            className="mt-2 bg-primary text-white px-6 py-3 text-sm tracking-widest uppercase font-light text-center hover:bg-primary-dark transition-colors"
          >
            07 82 11 35 89
          </a>
        </div>
      )}
    </nav>
  );
}
