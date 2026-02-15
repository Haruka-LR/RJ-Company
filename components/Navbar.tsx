"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-brand-dark/90 backdrop-blur-md py-3 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      {/* Contenedor alineado con Footer (max-w-7xl) */}
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <span
            className={`text-2xl font-black tracking-tighter transition-colors duration-500 ${
              scrolled ? "text-white" : "text-brand-dark"
            }`}
          >
            R - J<span className="text-brand-accent"> | Development</span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-10 items-center">
          {["Sobre Mí", "Servicios"].map((item) => (
            <Link
              key={item}
              href={`/${item === "Sobre Mí" ? "about" : "services"}`}
              className={`relative font-medium transition-colors duration-500 group ${
                scrolled ? "text-gray-200 hover:text-white" : "text-slate-700 hover:text-brand-dark"
              }`}
            >
              {item}
              {/* CORRECCIÓN: La línea ahora siempre se expande al hacer hover */}
              <span
                className="absolute -bottom-1 left-0 h-0.5 bg-brand-accent transition-all duration-300 w-0 group-hover:w-full"
              />
            </Link>
          ))}

          {/* BOTÓN CONTACTO */}
          <Link
            href="/contact"
            className={`px-6 py-3 font-bold text-white rounded-2xl transition-all duration-500 shadow-lg hover:scale-105 active:scale-95 ${
              scrolled
                ? "bg-brand-accent shadow-brand-accent/20"
                : "bg-brand-dark shadow-slate-900/20"
            }`}
          >
            Contáctame
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 rounded-xl transition-all ${
            scrolled ? "text-white bg-white/10" : "text-brand-dark bg-slate-100"
          }`}
        >
          <span className="text-2xl">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-dark/95 backdrop-blur-xl border-t border-white/5 p-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <Link href="/about" onClick={() => setOpen(false)} className="text-xl text-gray-300 hover:text-brand-accent transition-colors">
            Sobre Mí
          </Link>
          <Link href="/services" onClick={() => setOpen(false)} className="text-xl text-gray-300 hover:text-brand-accent transition-colors">
            Servicios
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="bg-brand-accent text-center py-4 rounded-2xl font-bold text-white">
            Contáctame
          </Link>
        </div>
      )}
    </nav>
  );
}