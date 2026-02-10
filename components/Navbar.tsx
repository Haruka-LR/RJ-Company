"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
export default function Navbar(){
    const[open, setOpen] = useState(false)
    return(
        <nav className="w-full bg-green-600 text-white ">
            <div className="max-w-8xl mx-auto px-10 py-4 flex justify-between items-center">
            
            {/*Logo / Nombre*/}
            <Link href="/" className="flex items-center gap-2">
            <Image src="/Logo.png" alt="Logo" width={40} height={40} />
            <span className="text-xl font-bold text-white" >R-J Company</span>
            </Link>

            {/*Links de Navegacion*/}
            <div className=" flex gap-6 items-center">
                <Link href="/about" className=" hover:text-black">
                Sobre Mi
                </Link>
                <Link href="/services" className="hover:text-black">
                 Servicios
                 </Link>
                  
                <Link href="/contact" className="hover:text-gray-400  bg-black px-4 py-2 rounded-lg text-white font-semibold"  /* hover */  >
                    Contactame
                </Link>
            </div>
                {/*Menu para moviles*/}
                <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
                  ☰  
                </button>
            </div>
                {/*Menu desplegable para moviles*/}
                {open && (
                    <div className="md:hidden bg-green-700 px-6 py-4 space-y-4 transition-all duration-300">
                    <Link href="/about" onClick={() => setOpen(false)} className="block">
                    Sobre Mi
                    </Link>
                    <Link href="/services" onClick={() => setOpen(false)} className="block">
                    Servicios
                    </Link>
                    <Link href="/contact" onClick={() => setOpen(false)}
                    className="block bg-white text-green-600 px-4 py-2 rounded-lg text-center">
                    Contáctame
                    </Link>
                </div>
                )}
        </nav>
    )
}