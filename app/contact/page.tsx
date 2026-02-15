import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Contacto | RJ Development",
  description:
    "Ponte en contacto con Dayron Oswaldo para iniciar tu próximo proyecto digital.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-brand-bg py-8 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-8 md:mb-16">
          <ScrollReveal direction="up">
            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark mb-4 leading-tight">
              Hablemos de tu{" "}
              <span className="text-brand-accent">Próximo Paso.</span>
            </h1>
            <p className="text-slate-500 text-sm sm:text-base md:text-lg px-2 sm:px-6">
              ¿Tienes una idea? Yo tengo el código para hacerla realidad.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* COLUMNA 1: INFORMACIÓN DE CONTACTO */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-brand-dark mb-6 mt-8">
                  Datos de Contacto
                </h2>
                <p className="text-slate-600 mb-2">Estoy abierto a oportunidades freelance,</p>
                <p className="text-slate-600 mb-2">proyectos de tiempo completo</p>
                <p className="text-slate-600 mb-2">o colaboraciones estratégicas.</p>
              </div>

              {/* Tarjetas de contacto rápido */}
              <div className="space-y-8 w-90 sm:w-120 "> 
                {/* EMAIL - GMAIL STYLE */}
                <div className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group ">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#EA4335] rounded-xl flex items-center justify-center p-2.5 shadow-lg shadow-red-100 group-hover:scale-110 transition-transform">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-full h-full fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.39l-9 6.58-9-6.58V21H1.5C.65 21 0 20.35 0 19.5v-15c0-1.17 1.26-1.88 2.22-1.2 l9.78 7.15 9.78-7.15c.96-.68 2.22.03 2.22 1.2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">
                      Email
                    </p>
                    <p className="text-brand-dark font-bold group-hover:text-[#EA4335] transition-colors">
                      rjdevelopment2004@gmail.com
                    </p>
                  </div>
                </div>

                {/* UBICACIÓN - GOOGLE MAPS STYLE */}
                <div className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#4285F4] rounded-xl flex items-center justify-center p-2.5 shadow-lg shadow-blue-100 group-hover:scale-110 transition-transform">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-full h-full fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">
                      Ubicación
                    </p>
                    <p className="text-brand-dark font-bold group-hover:text-[#4285F4] transition-colors">
                      Tizayuca, Hidalgo, México
                    </p>
                  </div>
                </div>

                {/* LINKEDIN - PROFESIONAL STYLE */}
                <a
                  href="#" /* TODO: colocar enlace real */
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-[#0A66C2] rounded-xl flex items-center justify-center p-2.5 shadow-lg shadow-blue-100 group-hover:scale-110 transition-transform">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-full h-full fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">
                      LinkedIn
                    </p>
                    <p className="text-brand-dark font-bold group-hover:text-[#0A66C2] transition-colors">
                      Conectar profesionalmente
                    </p>
                  </div>
                </a>

                {/* WHATSAPP - ELEGANT STYLE */}
                <a
                  href="https://wa.me/+525624564960?text=Hola%20Dayron,%20vengo%20de%20tu%20portafolio%20y%20me%20gustaría%20cotizar%20un%20proyecto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-green-200 transition-all group"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] rounded-xl flex items-center justify-center p-2.5 shadow-lg shadow-green-200 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-full h-full fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-slate-400 uppercase font-bold tracking-widest leading-none mb-1">
                      WhatsApp Directo
                    </p>
                    <p className="font-bold text-brand-dark group-hover:text-[#25D366] transition-colors duration-300">
                      Enviar mensaje ahora
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* COLUMNA 2: FORMULARIO GLASSMORPHISM */}
          <ScrollReveal direction="right">
            <div className="w-90 sm:w-full bg-white/80 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-3xl border border-white shadow-2xl shadow-slate-200/50">
              <form
                action={`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_KEY}`}
                method="POST"
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">
                      Nombre
                    </label>
                    <input
                      name="name"
                      required
                      type="text"
                      placeholder="Tu nombre"
                      className="w-full px-4 sm:px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all text-sm sm:text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">
                      Email
                    </label>
                    <input
                      name="email"
                      required
                      type="email"
                      placeholder="tu@correo.com"
                      className="w-full px-4 sm:px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">
                    Asunto
                  </label>
                  <input
                    name="asunto"
                    required
                    type="text"
                    placeholder="¿En qué puedo ayudarte?"
                    className="w-full px-4 sm:px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all text-sm sm:text-base"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Cuéntame sobre tu proyecto..."
                    className="w-full px-4 sm:px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all resize-none text-sm sm:text-base"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 sm:py-4 bg-brand-dark text-white font-black rounded-2xl hover:bg-brand-accent transition-all duration-300 shadow-lg shadow-brand-dark/20 hover:shadow-brand-accent/30 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </main>
  );
}