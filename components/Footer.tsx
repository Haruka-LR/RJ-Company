import Link from "next/link";
import Image from "next/image";

export default function Footer(){
    return(
        <footer className="bg-brand-dark text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                { /* Grid Principal: 1 columna en movil, 4 en pantallas grandes */ }
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    { /* Columna 1: Branding */ }
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                        <span className="text-2xl font-black tracking-tighter">
                            R-J <span className=" text-brand-accent">Company</span>
                        </span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed">
                            Transformando ideas en experiencias digitales de alto impacto.
                            Especialistas en desarrollo moderno y soluciones escalables.
                        </p>
                    </div>
                    { /* Columna 2: Navegacion */ }
                    <div>
                    <h4 className="text-lg font-bold mb-6 border-l-4 border-brand-accent pl-3">Navegacion</h4>
                    <ul className="space-y-4">
                        {["Inicio", "Sobre Mí", "Proyectos", "Contacto"].map((item)=>(
                            <li key={item}>
                                <Link href="#" className="text-gray-400 hover:text-brand-accent transition-colors duration-300">
                                {item}
                                </Link>
                            </li>))}
                        </ul>
                    </div>
                    { /* Columna 3: Servicios */ }
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-l-4 border-brand-accent pl-3">Servicios</h4>
                        <ul className="space-y-4">
                            <li className="text-gray-400">Desarrollo Web</li>
                            <li className="text-gray-400">Aplicaciones Moviles</li>
                            <li className="text-gray-400">Sistemas a Medida</li>
                            <li className="text-gray-400">Consultoria TI </li>
                        </ul>
                    </div>
                    { /* Columna 4: Contacto/Redes */ }
                    <div>
                        <h4 className=" text-lg font-bold mb-6 border-l-4 border-brand-accent pl-3">Contacto</h4>
                        <p className="text-gray-400 mb-4">¿Tienes un proyecto en mente? ¡Hablemos!</p>
                        <a href="mailto:rj-company@gmail.com" className="inline-block bg-white/10 hover:bg-brand-accent px-6 py-3 rounded-xl transition-all duration-300 font-semibold">Enviar Mensaje</a>    
                    </div>
                </div>
                {/* Línea Divisora y Copyright */ }
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                <p> © {new Date().getFullYear()} R-J Company. Todos los derechos reservados. </p>
                <div className="flex gap-6">
                <Link href="#" className="hover:text-white transition-colors">Términos</Link>
                <Link href="#" className="hover:text-white transition-colors">Privacidad</Link>
                </div>
                </div>
            </div>
        </footer>
    )
}