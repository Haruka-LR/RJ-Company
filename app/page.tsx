import FadeIn from "@/components/FadeIn";
import ScrollReveal from "@/components/ScrollReveal";
import TechsTack from "@/components/TechsTack";
import Link from "next/link";

export const metadata = {
  title: 'RJ Development | Soluciones Digitales para tu Negocio',
  description: 'Creamos páginas web y aplicaciones móviles de alto impacto. Expertos en desarrollo digital para escalar tu éxito.',
  keywords: ['RJ Development', 'Desarrollo Web', 'R.J Company', 'Páginas Web México', 'R-J Development', 'Desarrollador Web', 'Desarrollador FullStack', 'Desarrollador Full Stack Jr', 'Desarrollador Jr'] ,
}

export default function Home() {
  return (
    <main className="relative min-h-screen bg-brand-bg overflow-hidden">
      {/* CAPA DE IMPACTO VISUAL: Blobs de color difuminados 
        Esto crea una atmósfera moderna sin saturar la vista.
      */}
      <div className="absolute top-[-5%] left-[-10%] w-150 h-150 bg-brand-primary/10 rounded-full blur-[130px] -z-10 animate-pulse" />
      <div className="absolute bottom-[20%] right-[-10%] w-125 h-125 bg-brand-accent/10 rounded-full blur-[110px] -z-10" />

      {/* Sección Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-20 md:pt-48 md:pb-32 animate-fadeIn">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-brand-dark tracking-tighter leading-tight">
            Desarrollo de <span className="text-brand-primary">Soluciones Digitales</span> para tu Negocio
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl leading-relaxed">
            Creamos páginas web, tiendas en línea y aplicaciones móviles de alto impacto,
            diseñadas para transmitir <strong>confianza</strong> y escalar tu éxito.
          </p>

          <div className="flex flex-wrap gap-5">
            <a
              href="/contact"
              className="group relative bg-brand-accent hover:bg-emerald-600 px-10 py-5 rounded-2xl text-white font-bold text-lg shadow-2xl shadow-emerald-500/30 transition-all hover:-translate-y-1.5 active:scale-95 overflow-hidden"
            >
              {/* Efecto de brillo al pasar el mouse en el botón */}
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              <span className="relative">Contáctame</span>
            </a>
            {/*<Link
              href="/projects"
              className="border-2 border-brand-dark/20 hover:border-brand-dark px-10 py-5 rounded-2xl text-brand-dark font-bold text-lg transition-all hover:bg-brand-dark/5 hover:-translate-y-1.5 active:scale-95"
            >
              Ver Proyectos
            </Link>*/}
          </div>
        </div>
      </section>

            {/* Cards De Servicios con diseño tipo Panel Profesional */}
            <FadeIn>
              <div className="max-w-7xl mx-auto px-6 mb-32">
                <div className="relative p-1 md:p-1.5 bg-linear-to-b from-slate-200 to-transparent rounded-[2.5rem]">
                  <div className="bg-white rounded-[2.4rem] px-8 py-20 shadow-2xl shadow-slate-200/60">

                    <div className="text-center mb-20">
                      <span className="text-brand-accent font-bold tracking-widest uppercase text-sm mb-4 block">Experiencia y Calidad</span>
                      <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
                        Servicios de Desarrollo a tu Alcance
                      </h2>
                      <div className="w-24 h-1.5 bg-brand-accent mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                      {/* Servicio 1 - Desarrollo Web */}
                      <div className="group relative p-10 rounded-3xl bg-brand-bg border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-brand-primary/10 hover:-translate-y-2">
                        <div className="w-16 h-16 bg-white shadow-inner rounded-2xl flex items-center justify-center mb-8 text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-500">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-brand-dark">Web Personalizada</h3>
                        <p className="text-slate-600 leading-relaxed">
                          Estrategia SEO y diseño centrado en el usuario. Creamos herramientas digitales que impulsan tus ventas.
                        </p>
                      </div>

                      {/* Servicio 2 - Apps */}
                      <div className="group relative p-10 rounded-3xl bg-brand-bg border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-brand-primary/10 hover:-translate-y-2">
                        <div className="w-16 h-16 bg-white shadow-inner rounded-2xl flex items-center justify-center mb-8 text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-500">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-brand-dark">Apps Móviles</h3>
                        <p className="text-slate-600 leading-relaxed">
                          Desarrollo fluido para iOS y Android. Llevamos tu negocio directamente al bolsillo de tus clientes.
                        </p>
                      </div>

                      {/* Servicio 3 - Sistemas */}
                      <div className="group relative p-10 rounded-3xl bg-brand-bg border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-brand-primary/10 hover:-translate-y-2">
                        <div className="w-16 h-16 bg-white shadow-inner rounded-2xl flex items-center justify-center mb-8 text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-500">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-brand-dark">Soporte y Sistemas</h3>
                        <p className="text-slate-600 leading-relaxed">
                          Arquitectura robusta y soporte técnico proactivo. Garantizamos que tu tecnología nunca se detenga.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            { /* Sección de Stack Tecnológico con efecto de marquesina */}
            <ScrollReveal direction="up">
              <TechsTack />
            </ScrollReveal>
          </main>
          );
}