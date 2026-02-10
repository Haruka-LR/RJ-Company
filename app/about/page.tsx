import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Sobre mí | R.J Company",
  description: "Conoce más sobre mi experiencia como desarrollador web.",
}

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6">

        {/* Card principal */}
        <div className="bg-white rounded-2xl shadow-md p-10 grid md:grid-cols-3 gap-10 items-center">

          {/* FOTO (placeholder) */}
          <div className="flex justify-center">
            <div className="w-48 h-48 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
              <Image src="/1.jpg"alt="Dayron Oswaldo"width={192}height={192}className="rounded-full object-cover"
/>
            </div>
          </div>

          {/* Descripción Personal */}
          <div className="md:col-span-2">

            <h1 className="text-4xl font-bold mb-6">
              ¿Quién soy?
            </h1>

            <p className="text-gray-700 mb-6">
              ¡Hola!, me llamo Dayron Oswaldo Romero Jiménez.
              Soy Desarrollador Full Stack Jr., graduado como T.S.U. en Ingeniería en Desarrollo de Software Multiplataforma, con enfoque en la creación de soluciones digitales modernas, funcionales y escalables.
              Cuento con experiencia en el desarrollo de aplicaciones web y móviles utilizando tecnologías como JavaScript, Node.js, Python, React, Next.js, Tailwind CSS y Flutter,
              así como en el manejo de bases de datos relacionales y NoSQL como MySQL, MongoDB y Firebase.
              He trabajado en proyectos reales para empresas y equipos de trabajo, desarrollando desde aplicaciones CRUD internas hasta plataformas e-commerce y dashboards de análisis de datos,
              lo que me ha permitido comprender de primera mano los retos que enfrentan los negocios y emprendedores al buscar crecer y optimizar sus procesos.
              Me considero una persona proactiva, de aprendizaje rápido, con facilidad para el trabajo en equipo y con un enfoque claro en aportar soluciones creativas y prácticas que generen valor
              tanto al equipo como al negocio.
              Tengo experiencia en el desarrollo de APIs REST, control de versiones con Git y GitHub, uso de Docker para entornos de desarrollo
              y despliegue de aplicaciones en plataformas como Netlify, siempre siguiendo buenas prácticas y con interés constante en el aprendizaje continuo.
            </p>

            <p className="text-gray-700 mb-6">
              Estoy emocionado por la oportunidad de contribuir con mis habilidades y conocimientos a proyectos desafiantes
              y de seguir creciendo profesionalmente en el campo del desarrollo de software.
              Si buscas un desarrollador comprometido, apasionado por la tecnología y con ganas de aprender y aportar valor, no dudes en contactarme.
            </p>
            {/* BOTON */}
            <Link href=" /contact " className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300">
            Contactame
            </Link>
        </div>
            {/* Tecnologías */}
            <h2 className="text-2xl font-semibold mb-4">
              Tecnologías
            </h2>
            <div className="flex flex-wrap gap-4 mb-10">
                {[   
                "JavaScript",
                "Node.js",
                "Python",
                "React",
                "Next.js",
                "Tailwind CSS",
                "Flutter",
                "MySQL",
                "MongoDB",
                "Firebase",
                "Java",
                "Git",
                "GitHub",
                "Docker",
                "Netlify",
            ].map((tech) => (
                <span key={tech} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-green-100 transition">
                {tech}
                </span>
            ))}
            </div>

          </div>
          {/* ¿Por que Trabajar conmigo? */}
          <section>
            <h2 className="text-3xl font-bold mb-10 text-center mt-10">
            ¿Por qué trabajar conmigo
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 
hover:shadow-xl hover:-translate-y-1  transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3">
                Enfoque en soluciones reales
                </h3>
                <p className="text-gray-600">
                No solo desarrollo código, creo soluciones pensadas para personas y negocios reales,
                enfocadas en resolver problemas concretos y generar impacto.
                </p>
                </div>

                {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1  transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3">
                Comprensión del negocio
                </h3>
                <p className="text-gray-600">
                Me involucro desde el inicio entendiendo objetivos, necesidades y retos del cliente,
                para construir soluciones alineadas al crecimiento del negocio.
                </p>
            </div>

                {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1  transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3">
                Trabajo en equipo y adaptabilidad
                </h3>
                 <p className="text-gray-600">
                 Soy una persona proactiva, con aprendizaje rápido y facilidad para colaborar con
                desarrolladores, diseñadores y áreas del negocio.
                </p>
            </div>

                {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1  transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3">
                Experiencia profesional
                </h3>
                <p className="text-gray-600">
                He trabajado con empresas y líderes de proyecto, entendiendo la importancia de la
                comunicación clara, los tiempos de entrega y la calidad del producto final.
                </p>
                </div>

                {/* Card 5 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1  transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3">
                 Compromiso y mejora continua
                </h3>
                <p className="text-gray-600">
                Cuido el diseño, la funcionalidad y el rendimiento, acompañando cada proyecto con
                compromiso, responsabilidad y mentalidad de mejora continua.
                </p>
                </div>
                </div>
            </section>
        </div>
    </main>
     )
}