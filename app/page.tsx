import FadeIn from "@/components/FadeIn";
export default function Home(){
  return(
    <main className="min-h-screen bg-white text-black flex items-center ">
      <section className="max-w-5xl mx-auto px-6 mt-20">
        <h1 className="text-5xl font-bold mb-6">
          Desarrollo Soluciones Digitales Para Tu Negocio
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Páginas Web, Tiendas en Línea, Aplicaciones Móviles y sistemas modernos
          pensados para crecer contigo.
        </p>
        <div className="flex gap-4">
          <a href="/contact" className="hover:text-gray-400 bg-black px-6 py-3 
          rounded-lg text-white font-semibold">
          Contáctame
          </a>
        <a href="/projects" className="border border-gray-400 px-6 py-3 rounded-lg 
        hover:bg-gray-100 hover:text-slate-900 font-semibold transition-colors ">
        Ver Proyectos
        </a>
        </div>


        {/*Cards De Servicios*/}
        
        <FadeIn >
          <div className="max-w-6xl mx-auto px-6 mt-20 py-10 bg-gray-50 rounded-xl">
             <h2 className="text-3xl font-bold text-center mb-12">
              Servicios Profesionales de Desarrollo Web a tu Alcance
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Servicio 1 */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className=" text-xl font-semibold mb-4">
                 Desarrollo Web Personalizado
                </h3>
                <p className="text-gray-600">
                Páginas web modernas, rápidas y optimizadas para SEO, enfocadas en atraer clientes y generar 
                una experiencia de usuario excepcional. Desde sitios corporativos hasta tiendas en línea,
                te ayudo a destacar en el mundo digital.
                </p>
               </div>
               {/* Servicio 2 */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className=" text-xl font-semibold mb-4">
                 Aplicaciones Móviles
                </h3>
                <p className="text-gray-600">
                Desarrollo de aplicaciones móviles nativas y multiplataforma, diseñadas para brindar una experiencia fluida y atractiva.
                que conectan a tu negocio con tus clientes en cualquier lugar.
                </p>
              </div>
              {/* Servicio 3 */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className=" text-xl font-semibold mb-4">
                  Sistemas y Soporte 
                </h3>
                <p className="text-gray-600">
                Sistemas personalizados, mantenimiento y soporte 
                técnico continuo para garantizar que tu presencia digital funcione sin problemas.
                </p>
             </div>
             
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  )
}