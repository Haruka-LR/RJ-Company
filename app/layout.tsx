import type { ReactNode } from "react"
import "./globals.css"; 
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer"; 
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "R-J COMPANY | Desarrollo Web y Aplicaciones ",
  description: "Desarrollo de paginas Web modernas, aplicaciones y sistemas a medida para negocios y emprendedores.",
}

export default function RootLayout({
  children, }: {
    children: ReactNode
  }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-brand-bg">
        {/* Agregamos 'flex flex-col min-h-screen' al contenedor principal.
            Esto garantiza que el Footer siempre esté al fondo y 
            no deje huecos blancos.
        */}
        <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden">
          <Navbar />
          
          {/* flex-grow hace que este div ocupe todo el espacio disponible,
              empujando al footer hacia abajo incluso si hay poco contenido.
          */}
          <main className="flex-grow">
            {children}
          </main>
          
          <Footer />
        </div>
      </body>
    </html>
  )
}