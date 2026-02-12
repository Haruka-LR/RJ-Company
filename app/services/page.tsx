import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Servicios | R-J Company",
  description: "Soluciones tecnológicas a medida: Desarrollo Web, Apps Móviles y Sistemas Empresariales.",
};

const services = [
  {
    title: "Desarrollo Web Moderno",
    description: "Sitios web de alto rendimiento usando Next.js y React. Optimizados para SEO, velocidad de carga y experiencia de usuario premium.",
    features: ["Páginas SPA/PWA", "SEO Avanzado", "Diseño Responsive"]
  },
  {
    title: "Aplicaciones Móviles",
    description: "Desarrollo de apps nativas y multiplataforma con Flutter. Una sola base de código para llegar a usuarios de iOS y Android.",
    features: ["Interfaz Nativa", "Notificaciones Push", "Publicación en Stores"]
  },
  {
    title: "Sistemas a Medida",
    description: "Automatización de procesos críticos. Creación de Dashboards, CRMs y ERPs diseñados específicamente para las reglas de tu negocio.",
    features: ["Bases de Datos", "Seguridad de Datos", "Paneles de Control"]
  },
  {
    title: "E-Commerce",
    description: "Tiendas en línea preparadas para escalar. Integración de pasarelas de pago, gestión de inventario y experiencia de compra fluida.",
    features: ["Pasarelas de Pago", "Gestión de Stock", "Análisis de Ventas"]
  },
  {
    title: "Arquitectura de Datos",
    description: "Diseño y estructuración de bases de datos relacionales (SQL) y NoSQL. Garantizo integridad, seguridad y rapidez en el acceso a la información.",
    features: ["Modelado Entidad-Relación", "Optimización de Queries", "Seguridad y Backups"]
  },
  {
    title: "Análisis y Visualización",
    description: "Transformo datos crudos en conocimiento. Creación de reportes dinámicos y dashboards que permiten visualizar el rendimiento de tu negocio.",
    features: ["Dashboards Interactivos", "Limpieza de Datos (ETL)", "Reportes Automatizados"]
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-brand-bg py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ENCABEZADO RESPONSIVO */}
        <div className="text-center mb-12 md:mb-20">
          <ScrollReveal direction="up">
            <span className="text-brand-accent font-bold tracking-[0.2em] uppercase text-[10px] md:text-sm mb-4 block">
              ¿Qué puedo hacer por ti?
            </span>
            <h1 className="text-3xl md:text-6xl font-black text-brand-dark mb-6 leading-[1.1]">
              Soluciones Digitales <br className="hidden md:block" />
              <span className="text-brand-accent text-2xl md:text-6xl">de Alto Impacto.</span>
            </h1>
            <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg">
              Transformo ideas complejas en productos digitales simples, elegantes y potentes.
            </p>
          </ScrollReveal>
        </div>

        {/* GRID DE SERVICIOS ADAPTABLE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} direction="up">
              <div className="group bg-white p-8 md:p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-brand-accent/20 transition-all duration-500 h-full relative overflow-hidden flex flex-col">
                
                {/* Decoración de fondo */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>

                <h3 className="text-xl md:text-2xl font-black text-brand-dark mb-4 group-hover:text-brand-accent transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                <ul className="space-y-3 mt-auto">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-xs md:text-sm font-bold text-slate-500">
                      <span className="w-2 h-2 bg-brand-accent rounded-full shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA INFERIOR RESPONSIVO */}
        <div className="mt-16 md:mt-24 text-center">
          <ScrollReveal direction="up">
            <p className="text-slate-500 mb-4 text-sm md:text-base font-medium">
              ¿Necesitas algo más específico?
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-3 text-brand-dark font-black text-lg md:text-2xl hover:text-brand-accent transition-colors group"
            >
              Consultar solución personalizada
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </a>
          </ScrollReveal>
        </div>

      </div>
    </main>
  );
}