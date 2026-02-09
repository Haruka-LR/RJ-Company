import Link from "next/link";
export default function Navbar(){
    return(
        <nav className="w-full bg-green-600 text-white ">
            <div className="max-w-8xl mx-auto px-10 py-4 flex justify-between items-center">
            {/*Logo / Nombre*/}
            <Link href="/" className="text-xl font-bold">R.J Company</Link>
        
            {/*Links de Navegacion*/}
            <div className=" flex gap-6 items-center">
                <Link href="/about" className=" hover:text-black">
                Sobre Mi
                </Link>
                <Link href="/services" className="hover:text-black">
                 Servicios
                 </Link>
                <Link href="/contact" className="hover:text-gray-400 bg-black px-4 py-2 rounded-lg text-white font-semibold">
                    Contactame
                </Link>
            </div>
            </div>
        </nav>
    )
}