"use client";
import { useEffect, useRef, ReactNode, useState } from "react";

interface Props {
    children: ReactNode;
    direction?: "up" | "down" | "left" | "right";
}

export default function ScrollReveal({ children, direction = "up" }: Props) {
    const elementRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Una vez visible, dejamos de observar para ahorrar memoria en móvil
                    if (elementRef.current) observer.unobserve(elementRef.current);
                }
            },
            { 
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px" // Se activa un poco antes de entrar
            }
        );

        if (elementRef.current) observer.observe(elementRef.current);
        return () => observer.disconnect();
    }, []);

    const directions = {
        up: "translate-y-10",
        down: "-translate-y-10",
        left: "translate-x-10",
        right: "-translate-x-10",
    };

    return (
        <div
            ref={elementRef}
            className={`transition-all duration-700 ease-out ${
                isVisible 
                ? "opacity-100 translate-x-0 translate-y-0" 
                : `opacity-0 ${directions[direction]}`
            }`}
        >
            {children}
        </div>
    );
}