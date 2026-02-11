import Image from "next/image";


// Aquí definimos un array con las tecnologías y sus logos
const technologies =[

    { name: "Next.js", logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
    { name: "React", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
    { name: "Tailwind CSS", logo: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },
    { name: "TypeScript", logo: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
    { name: "Node.js", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
    { name: "Firebase", logo: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg" },
    { name: "MongoDB", logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
    { name: "Framer Motion", logo: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg" },

]

export default function TechsTack() {
    //duplicamos la lista para crear un efecto de scroll infinito
    const tripleTechs = [...technologies,...technologies,...technologies];
    return(
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                <h2 className="text-sm font-bold tracking-[0.2em] text-brand-accent uppercase mb-4">
                    Stack Tecnológico
                </h2>
                <p className="text-3xl md:text-4xl font-bold text-brand-dark">
                    Herramientas de Vanguardia Resultados Excepsionales
                </p>
            </div>

            {/* Contenedor de la marquesina */}

            <div className="relative flex overflow-hidden">
                <div className="flex animate-infinite-scroll gap-16 py-8 w-max">
                    {tripleTechs.map((tech, index) =>(
                    <div key={index}
                    className="flex items-center gap-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 "
                    >
                        <img 
                        src={tech.logo}
                        alt={tech.name}
                        className="h-10 md:h-12 w-auto object-contain"
                        />
                        <span className="text-xl font-bold text-slate-400 ">
                            {tech.name}
                        </span>
                    </div>
                    ))}

                    { /* Gradiantes laterales para dar efecto de "desvanecido"*/}

                    {/* Gradiente izquierdo: Cambiamos bg-gradient-to-r por bg-linear-to-r */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white to-transparent z-10"></div>

                    {/* Gradiente derecho: Cambiamos bg-gradient-to-l por bg-linear-to-l */}
                    <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-white to-transparent z-10"></div>
                </div>
            </div>
        </section>
    )

}