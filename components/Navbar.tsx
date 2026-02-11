"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efecto para detectar el scroll y cambiar el estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // 1. El contenedor del Nav (ajustamos las clases condicionales)
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
          ? "bg-brand-dark/90 backdrop-blur-md py-3 shadow-2xl" // Cuando bajas: Fondo oscuro
          : "bg-transparent py-5" // Al inicio: Transparente
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* 2. Nombre de la marca: Negro al inicio, Blanco al bajar */}
        <Link href="/" className="flex items-center gap-3 group">
          <span
            className={`text-2xl font-black tracking-tighter transition-colors duration-500 ${scrolled ? "text-white" : "text-brand-dark"
              }`}
          >
            R-J <span className="text-brand-accent">Company</span>
          </span>
        </Link>

        {/* 3. Links de navegación: Gris oscuro al inicio, Gris claro al bajar */}
        <div className="hidden md:flex gap-10 items-center">
          {["Sobre Mí", "Servicios"].map((item) => (
            <Link
              key={item}
              href={`/${item === "Sobre Mí" ? "about" : "services"}`}
              className={`relative font-medium transition-colors duration-500 group ${scrolled
                  ? "text-gray-200 hover:text-white"
                  : "text-slate-700 hover:text-brand-dark"
                }`}
            >
              {item}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full ${scrolled ? "w-0" : "w-0"
                  }`}
              />
            </Link>
          ))}

          {/* 4. Botón de contacto: Lo mantenemos llamativo siempre */}
          <Link
            href="/contact"
            className={`relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-2xl transition-all duration-500 shadow-lg ${scrolled
                ? "bg-brand-accent shadow-emerald-500/20"
                : "bg-brand-dark shadow-slate-900/20"
              }`}
          >
            <span className="relative">Contáctame</span>
          </Link>
        </div>

        {/* 5. Botón Hamburguesa (Móvil): Cambia de color también */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 rounded-xl transition-colors ${scrolled ? "text-white bg-white/10" : "text-brand-dark bg-slate-100"
            }`}
        >
          <span className="text-2xl">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Menú Móvil Desplegable */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-dark/95 backdrop-blur-xl border-t border-white/5 p-8 flex flex-col gap-6 animate-fadeIn">
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="text-xl text-gray-300"
          >
            Sobre Mí
          </Link>
          <Link
            href="/services"
            onClick={() => setOpen(false)}
            className="text-xl text-gray-300"
          >
            Servicios
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="bg-brand-accent text-center py-4 rounded-2xl font-bold"
          >
            Contáctame
          </Link>
        </div>
      )}
    </nav>
  );
}
