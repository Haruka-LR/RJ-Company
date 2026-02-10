import Link from 'next/link';

export default function Footer() {
    return(
        <footer className="bg-green-600 text-white mt-20">
            <div className=" max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8"  >
                {/* Marca */ }
                <div>
                    <h3 className="text-xl font-bold mb-2">
                        R-J COMPANY
                    </h3>
                    <p className=" text-green-100"> 
                        Desarrollo de Soluciones Digitales Modernas para Negocios y Emprendedores.
                    </p>
                </div>

                {/*Navegación */}
                <div >
                    <h4 className=" font-semibold mb-3">
                        Navegación
                    </h4>
                    <ul className="space-y-2 ">
                        <li>
                            <Link href="/about" className="hover:underline">
                            Sobre Mi
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" className="hover:underline">
                            Servicios
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:underline">
                            Contactame
                            </Link>
                        </li>

                    </ul>
                </div>

                {/*Contacto */}
                <div>
                    <h4 className=" font-semibold mb-3">Contacto</h4>
                    <p className=" text-green-100">
                        WhatsApp: 56 2456 4960
                    </p>
                    <p className="text-green-100">
                        Email: r-jcompany@gmail.com
                    </p>
                </div>
            </div>
            <div className="border-t border-green-500 text-center py-4 text-sm text-green-100">
                © {new Date().getFullYear()} R-J Company. Todos los derechos reservados.
            </div>
        </footer>
    )
}