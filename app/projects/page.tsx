import ScrollReveal from "@/components/ScrollReveal";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
    title: "Proyectos | R-J Company",
    description: "Portafolio de soluciones digitales desarrolladas por Dayron Oswaldo."
};
const projects = [
  {
    title: "E-Commerce de Alto Impacto",
    description: "Plataforma de ventas completa con carrito de compras, gestión de inventario y pagos seguros. Enfocada en la conversión del usuario.",
    tech: ["Next.js", "Tailwind CSS", "Firebase"],
    link: "#",
    github: "#",
    image: "/p1.jpg", // Asegúrate de tener estas imágenes en public/
  },
  {
    title: "Sistemas ERP Internos",
    description: "Dashboard administrativo para la optimización de procesos operativos, control de empleados y reportes financieros en tiempo real.",
    tech: ["React", "Node.js", "PostgreSQL"],
    link: "#",
    github: "#",
    image: "/p2.jpg",
  },
  {
    title: "App Móvil de Delivery",
    description: "Aplicación multiplataforma para rastreo de pedidos y gestión de rutas de entrega en tiempo real utilizando geolocalización.",
    tech: ["Flutter", "Python", "Google Maps"],
    link: "#",
    github: "#",
    image: "/p3.jpg",
  },
  {
    title: "Portal de Análisis de Datos",
    description: "Herramienta visual para transformar datos crudos en gráficos interactivos que facilitan la toma de decisiones estratégicas.",
    tech: ["Python", "Flask", "Chart.js"],
    link: "#",
    github: "#",
    image: "/p4.jpg",
  },
  // Puedes añadir más proyectos siguiendo esta misma estructura
];

export default function ProjectsPage(){
    return(
        <main className="min-h-screen bg-brand-bg py-24">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* ENCABEZADO DE LA SECCIÓN */}

                <div className="text-center mb-20">
                    <ScrollReveal direction="up">
                        <span className="text-brand-accent font-bold trackin-widest uppercase text-sm mb-4 block">
                          Evidencia de Resultados  
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black text-brand-dark mb-6">
                            Portafolio de <span className="text-brand-accent"> Proyectos. </span>
                        </h1>
                        <p className="text-slate-500 max-w-2xl mx-auto text-xl">
                            Una selección de soluciones digitales diseñadas para resolver problemas complejos y escalar negocios
                        </p>
                    </ScrollReveal>
                </div>

                {/* GRID DE PROYECTOS */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index)=>(
                        <ScrollReveal key={index} direction="up">
                            <ProjectCard project={project}/>
                        </ScrollReveal>
                    ))}
                </div>

                { /*LLAMADO A LA ACCION FINAL */ }
                <div className="mt-24 text-center">
                    <ScrollReveal direction="up">
                        <div className="bg-brand-dark rounded-3xl p-12 relative overflow-hidden">
                            { /* Circulos decorativos de fondo */ }
                            <div className=" absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full -mr-32 -mt-32"></div>
                            <div className=" absolute bottom-0 left-0 w-64 h-64 bg-brand-primary/10 rounded-full -ml-32 -mb-32"></div>
                            <h2 className="text-3xl font-bold text-white mb-6 relative z-10">
                                ¿Tienes una idea que quieras materializar?
                            </h2>
                            <p className="text-slate-400 mb-8 max-w-lg mx-auto relative z-10">
                                Estoy disponible para colaborar en proyectos desafiantes y construir la proxima gran solución juntos.
                            </p>
                            <a href="/contact" className="inline-block bg-brand-accent text-white px-10 py-4 rounded-2xl font-black hover:bg-emerald-600 transition-all relative z-10">
                            Hablemos de tu proyecto
                            </a>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </main>
    );
}