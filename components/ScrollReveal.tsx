"use client";
import { useEffect, useRef, ReactNode } from "react";

interface Props {
    children: ReactNode;
    direction?: "up" | "down" | "left" | "right";
}
// Componente para revelar elementos al hacer scroll con animación
export default function ScrollReveal({ children, direction = "up" }: Props) {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    console.log("¿Es visible?", entry.isIntersecting); // Agrega esto para ver en la consola (F12) si funciona
                    if (entry.isIntersecting) {
                        entry.target.classList.add("reveal-visible");
                    }
                });
            },
            { threshold: 0.05 } // Se activa antes
        );
        if (elementRef.current) observer.observe(elementRef.current);
        return () => observer.disconnect();
    }, []);

    // Definimos de dónde viene el movimiento
    const directions = {
        up: "translate-y-12",
        down: "translate-y-12",
        left: "translate-x-12",
        right: "translate-x-12",
    };

    return (
        <div ref={elementRef} className={`opacity-0 transition-all duration-1000 ease-out ${directions[direction]} reveal-hidden`}>
            {children}
        </div>
    );
}