"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navigation({ activePage }: { activePage?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/assets/logo.png"
              alt="Nanny Dog logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="hidden sm:block">
            <p
              className="text-[#2D7D46] font-bold text-lg leading-none"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Nanny Dog
            </p>
            <p
              className="text-[#8B6F4E] text-xs italic"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              La nounou préférée des animaux
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Accueil", href: "/" },
            { label: "Services", href: "#services" },
            { label: "À propos", href: "#about" },
            { label: "Zone", href: "#zone" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-200 hover:text-[#2D7D46] relative group ${
                activePage === item.label
                  ? "text-[#2D7D46]"
                  : "text-[#2C2C2C]"
              }`}
              style={{ fontFamily: "var(--font-lora)" }}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2D7D46] transition-all duration-300 group-hover:w-full rounded-full" />
            </Link>
          ))}
          <a
            href="tel:0782113589"
            className="bg-[#2D7D46] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#1e5a32] transition-colors duration-200 shadow-lg shadow-[#2D7D46]/20"
            style={{ fontFamily: "var(--font-lora)" }}
          >
            07 82 11 35 89
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className={`w-6 h-0.5 bg-[#2D7D46] transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-[#2D7D46] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-[#2D7D46] transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#FAF7F2]/98 backdrop-blur-md px-6 py-4 flex flex-col gap-4 border-t border-[#2D7D46]/10">
          {[
            { label: "Accueil", href: "/" },
            { label: "Services", href: "#services" },
            { label: "À propos", href: "#about" },
            { label: "Zone", href: "#zone" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[#2C2C2C] hover:text-[#2D7D46] font-medium transition-colors py-1"
              style={{ fontFamily: "var(--font-lora)" }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:0782113589"
            className="bg-[#2D7D46] text-white px-5 py-3 rounded-full text-center font-semibold"
          >
            07 82 11 35 89
          </a>
        </div>
      </div>
    </nav>
  );
}