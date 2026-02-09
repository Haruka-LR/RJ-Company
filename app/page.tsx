export default function Home(){
  return(
    <main className="min-h-screen bg-slate-900 text-white flex items-center ">
      <section className="max-w-5xl font-bold mb-8">
        <h1>Desarrollo Soluciones Digitales Para Tu Negocio
        </h1>
        <p className="text-6x1 text-gray-300 mb-10">
          Páginas Web, Tiendas en Línea, Aplicaciones Móviles y sistemas modernos
          pensados para crecer contigo.
        </p>
        <div className="flex gap-4">
          <a href="/contact" className="bg-sky-500 px-6 py-3 rounded-lg hover:bg-sky-600">
          Contáctame
          </a>
        <a href="/projects" className="border border-gray-400 px-6 py-3 rounded-lg hover:bg-white hover:text-slate-900">
        Ver Proyectos
        </a>
        </div>
      </section>
    </main>
  )
}