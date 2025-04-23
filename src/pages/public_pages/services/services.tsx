export default function Services() {
  return (
    <section className="bg-[#0D0D21] py-16 md:py-24 text-white scroll-mt-16" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Mis Servicios
          </h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto mt-3"></div>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            Ofrezco soluciones digitales completas para ayudarte a destacar en
            el mundo digital y alcanzar tus objetivos de negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#1A1A2E] rounded-xl p-8 border border-white/10 hover:border-indigo-500/50 transition-all group">
            <div className="w-14 h-14 rounded-lg bg-indigo-600/20 flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-indigo-500 group-hover:text-white transition-colors"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Desarrollo Web</h3>
            <p className="text-gray-300 mb-4">
              Creación de sitios web y aplicaciones modernas, responsivas y
              optimizadas para buscadores.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2 text-indigo-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Sitios web corporativos
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2 text-indigo-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                E-commerce
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2 text-indigo-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Aplicaciones web
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
