import Image from "next/image";
import Link from "next/link";
 export default function ProjectCard({project}: any){
    return(
        <div className="gorup bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500" >
            { /* Contenedor de Imagen con Zoom */}
            <div className="relative h-60 overflow-hidden">
                <Image src={project.image} alt={project.title} fill className=" object-cover group-hover:scale-110 transition-transform duration-700" />
                { /*Overlay al hacer Hover */}
                <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                    <Link href={project.github} className="bg-white p-3 rounded-full hover:bg-bramd-accent hover:text-white transition-colors">
                    <span className="font-bold text-sm">Demo</span>
                    </Link>
                </div>
            </div>
            { /* Contenido de la CARD */ }
            <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t: string) => ( 
                    <span key={t} className="text-[10] font-bold uppercase tracking-widest bg-slate-500 px-2 py-1 rounded-md">
                        {t}
                    </span>
                    ))}
                </div>
                <h3 className="text-xl font-black text-brand-dark mb-3">{project.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{project.description}</p>
            </div>
        </div> 
    )
 }