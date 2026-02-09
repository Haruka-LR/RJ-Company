import Link from "next/link";
export default function Navbar(){
    return(
        <nav className="w-full px-6 py-4 flex justify-between items-center bg-slate-900 text-white">
            {/*Logo / Nombre*/}
            <div className="text-xl font-bold">R.J Company</div>
            {/*Links de Navegacion*/}
            <div className=" flex gap-6 items-center">
                <Link href="/about" className=" hover:text-sky-400">
                Sobre Mi
                </Link>
                <Link href="/services" className="hover:-text-sky-400">
                 Servicios
                 </Link>
                <Link href="/contact" className="bg-sky-500 px-4 py-2 rounded-lg hover:bg-sky-600">
                    Contactame
                </Link>
            </div>
        </nav>
    )
}