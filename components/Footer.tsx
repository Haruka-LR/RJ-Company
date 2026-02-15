import Link from "next/link";

export default function Footer() {
    return (
        /* CAMBIO: w-full asegura que el fondo ocupe todo el ancho siempre */
        <footer className="w-full bg-brand-dark text-white pt-20 pb-10">
            {/* max-w-7xl mantiene el contenido alineado con el resto de tu web */}
            <div className="max-w-7xl mx-auto px-6">
                
                { /* Grid Principal */ }
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    
                    { /* Columna 1: Branding */ }
                    <div className="col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <span className="text-2xl font-black tracking-tighter">
                                R-J<span className=" text-brand-accent"> | Development </span>
                            </span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed">
                            Transformando ideas en experiencias digitales de alto impacto.
                            Especialistas en desarrollo moderno y soluciones escalables.
                        </p>
                    </div>

                    { /* Columna 2: Navegación */ }
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-l-4 border-brand-accent pl-3">Navegación</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-gray-400 hover:text-brand-accent transition-colors duration-300">Inicio</Link></li>
                            <li><Link href="/about" className="text-gray-400 hover:text-brand-accent transition-colors duration-300">Sobre Mí</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-brand-accent transition-colors duration-300">Contacto</Link></li>
                        </ul>
                    </div>

                    { /* Columna 3: Servicios */ }
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-l-4 border-brand-accent pl-3">Servicios</h4>
                        <ul className="space-y-4">
                            <li className="text-gray-400">Desarrollo Web</li>
                            <li className="text-gray-400">Aplicaciones Móviles</li>
                            <li className="text-gray-400">Sistemas a Medida</li>
                            <li className="text-gray-400">Consultoría TI</li>
                        </ul>
                    </div>

                    { /* Columna 4: Contacto */ }
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-l-4 border-brand-accent pl-3">Contacto</h4>
                        <p className="text-gray-400 mb-4">¿Tienes un proyecto en mente? ¡Hablemos!</p>
                        {/* CAMBIO: El enlace de WhatsApp para consistencia con tu página de contacto */}
                        <a 
                            href="https://wa.me/525624564960" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block bg-white/10 hover:bg-brand-accent px-6 py-3 rounded-xl transition-all duration-300 font-semibold text-center w-full sm:w-auto"
                        >
                            Enviar Mensaje
                        </a>    
                    </div>
                </div>

                {/* Línea Divisora y Copyright */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p className="text-center md:text-left"> 
                        © {new Date().getFullYear()} R - J | Development. Todos los derechos reservados. 
                    </p>
                    {/*   ESTO SOLO ES HASTA QUE TENGAMOS TERMINOS Y PRIVACIDAD
                    
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Términos</Link>
                        <Link href="#" className="hover:text-white transition-colors">Privacidad</Link>
                    </div>*/ }

                </div>
            </div>
        </footer>
    );
}