export default function AboutMe() {
  return (
    <section className="bg-[#1A1A2E] py-16 md:py-24 text-white scroll-mt-16" id="about-me">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative h-[350px] w-[350px] mx-auto md:mx-0">
              <div className="absolute -right-3 -top-3 h-full w-full rounded-2xl border border-gray-500"></div>
              <div className="absolute bottom-0 right-0 h-24 w-24 rounded-tl-3xl bg-indigo-600"></div>
              <div className="absolute inset-0 overflow-hidden rounded-2xl border-2 border-white/80">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Tu nombre"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-2">Sobre Mí</h2>
            <div className="h-1 w-20 bg-indigo-600 mb-6"></div>
            <h3 className="text-2xl font-bold mb-4">
              Desarrollador Web & Diseñador UI/UX
            </h3>
            <p className="text-gray-300 mb-6">
              Soy un desarrollador apasionado con más de X años de experiencia
              creando soluciones web modernas y atractivas. Me especializo en
              crear experiencias digitales que combinan diseño atractivo con
              funcionalidad intuitiva.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <p className="text-gray-400">Nombre:</p>
                <p>Carlos Sánchez</p>
              </div>
              <div>
                <p className="text-gray-400">Email:</p>
                <p>contacto@ejemplo.com</p>
              </div>
              <div>
                <p className="text-gray-400">Ubicación:</p>
                <p>Ciudad, País</p>
              </div>
              <div>
                <p className="text-gray-400">Disponibilidad:</p>
                <p>Freelance / Tiempo completo</p>
              </div>
            </div>
            <a
              href="#contacto"
              className="inline-flex items-center px-4 py-2 bg-indigo-600 rounded-md text-white hover:bg-indigo-700 transition-colors"
            >
              Descargar CV
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
