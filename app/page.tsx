export default function Home(){
  return(
    <main className="min-h-screen bg-white text-black flex items-center ">
      <section className="max-w-5xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-6">
          Desarrollo Soluciones Digitales Para Tu Negocio
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Páginas Web, Tiendas en Línea, Aplicaciones Móviles y sistemas modernos
          pensados para crecer contigo.
        </p>
        <div className="flex gap-4">
          <a href="/contact" className="hover:text-gray-400 bg-black px-6 py-3 rounded-lg text-white font-semibold">
          Contáctame
          </a>
        <a href="/projects" className="border border-gray-400 px-6 py-3 rounded-lg hover:bg-gray-100 hover:text-slate-900 font-semibold transition-colors ">
        Ver Proyectos
        </a>
        </div>
      </section>
    </main>
  )
}