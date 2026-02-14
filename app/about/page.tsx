import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Sobre Mí | R-J Company",
  description: "Conoce a Dayron Oswaldo, Desarrollador Full Stack, especializado en soluciones escalables y eficientes para impulsar tu negocio."
};
export default function About() {
  return (
    <main className="min-h-screen bg-brand-bg py-24">
      <div className="max-w-6xl mx-auto px-6">
        { /* SECCIÓN 1: PERFIL PRINCIPAL   */}
        <div className="grid grid-cols-12 gap-y-12 md:gap-12 items-center">
          { /* FOTO CON DISEÑO ASIMETRICO */}
          <div className="col-span-12 md:col-span-5 flex justify-center relative">
            <ScrollReveal direction="left">
              <div className="relative w-64 h-80 md:w-80 md:h-96">

                { /* 1. Cuadro decorativo de fondo (VA PRIMERO) */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-brand-accent rounded-2xl z-0" />

                { /* 2. Contenedor de Imagen (VA DESPUÉS Y FUERA DEL ANTERIOR) */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl z-10 bg-slate-200">
                  <Image
                    src="/3.jpg"
                    alt="Dayron Oswaldo"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

              </div>
            </ScrollReveal>
          </div>
          {/* TEXTO DE PRESENTACION */}
          <div className="col-span-12 md:col-span-7">
            <ScrollReveal direction="right">
              <span className="text-brand-accent font-bold tracking-widest uppercase text-sm mb-4 block">
                Desarrollador Full Stack Jr.
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-brand-dark mb-6 leading-tight">
                Impulsando negocios con <span className="text-brand-accent">código moderno.</span>
              </h1>
              <p className=" text-lg text-slate-600 mb-6 leading-relaxed">
                !Hola¡ Soy <span className="font-bold text-brand-dark"> Dayron Oswaldo Romero Jimenéz </span>
                Desarrollador de Software especializado en crear soluciones digitales, optimizando procesos escalables dentro de tu negocio, con un diseño de acuerdo a tus
                 <strong> necesidades </strong>
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Mi enfoque va más alla de escribir lineas de código; me apasiona entender la <strong> lógica del negocio </strong>
                para optimizar procesos y generar valor real a través de tecnologias y ecosistemas
                de bases de datos modernos.
              </p>

              {/* STATS RÁPIDOS */}

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-10">
                <div>
                  <h3 className="text-2xl font-black text-brand-dark">2+</h3>
                  <p className="text-sm text-slate-500">Años de Experiencia</p>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-brand-dark">15+</h3>
                  <p className="text-sm text-slate-500">Proyectos Listos</p>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-brand-dark">Desarrollador</h3>
                  <p className="text-sm text-slate-500">de Software Multiplatadorma</p>
                </div>
              </div>

              <Link href="/contact" className="inline-flex items-center justfy-center px-8 py-4 bg-brand-accent text-white font-bold rounded-2xl hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20">
                Empecemos Un Proyecto
              </Link>
            </ScrollReveal>
          </div>
        </div>

        { /* SECCIÓN 2: TECNOLOGÍAS (ESTILO TAGS  ) */}
        <ScrollReveal direction="up">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 mb-24">
            <h2 className="text-2xl font-black text-brand-dark mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-brand-accent rounded-full"></span>
              Mi Arsenal Técnico.
            </h2>
            <div className="flex flex-wrap gap-3">
              {["JavaScript", "Node.js", "Python", "React", "Next.js", "Tailwind CSS", "Flutter",
                "MySQL", "MongoDB", "Firebase", "Java", "Git", "Docker",].map((tech) => (
                  <span key={tech} className="px-5 py-2 bg-slate-50 text-slate-700 rounded-xl border border-slate-100 font-medium hover:border-brand-accent hover:text-brand-accent transition-all cursor-default">
                    {tech}
                  </span>
                ))}
            </div>
          </div>
        </ScrollReveal>

        {/* SECCIÓN 3: ¿POR QUÉ TRABAJAR CONMIGO? */}
        <section className="pb-20">
          <div className="text-center mb-16">
            <ScrollReveal direction="up">
              <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-4">Mi Compromiso Profesional</h2>
              <p className="text-slate-500 max-w-2xl mx-auto italic">
                "La calidad no es un acto, es un hábito." — Me enfoco en entregar excelencia en cada línea de código.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Entrega en Tiempo y Forma",
                desc: "La puntualidad es mi estándar. Gestiono los tiempos con precisión para asegurar que cada fase del proyecto se entregue según lo acordado, sin comprometer la calidad.",
                
              },
              {
                title: "Colaboración Multidisciplinaria",
                desc: "Disfruto el trabajo en equipo. Tengo facilidad para comunicarme con diseñadores y áreas de negocio, sumando esfuerzos para alcanzar un objetivo común.",
                
              },
              {
                title: "Enfoque Escalable",
                desc: "No solo resuelvo el problema de hoy; diseño pensando en el mañana. Creo software modular y limpio que permite un crecimiento ágil del negocio.",
                
              },
              {
                title: "Comprensión del Negocio",
                desc: "Me involucro en los objetivos estratégicos para asegurar que cada solución técnica impulse directamente el retorno de inversión y la eficiencia operativa.",
                icon: "📊"
              },
              {
                title: "Aprendizaje Continuo",
                desc: "En un mundo tecnológico que cambia a diario, mi mentalidad es de crecimiento constante. Domino nuevas herramientas rápidamente para mantener los proyectos a la vanguardia.",
                icon: "🧠"
              },
              {
                title: "Soluciones Centradas en el Usuario",
                desc: "Creo herramientas pensadas para personas reales. Mi enfoque garantiza que el software sea intuitivo, accesible y resuelva necesidades humanas específicas.",
                icon: "✨"
              }
            ].map((item, idx) => (
              <ScrollReveal key={idx} direction="up">
                <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-brand-accent/30 shadow-sm hover:shadow-xl transition-all h-full group">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}