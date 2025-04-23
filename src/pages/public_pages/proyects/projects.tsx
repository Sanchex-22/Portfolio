"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

// Tipo para los proyectos
interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

// Datos de ejemplo para los proyectos
const projects: Project[] = [
  {
    id: 1,
    title: "Plataforma E-learning",
    description:
      "Diseño y desarrollo de una plataforma educativa con cursos interactivos y sistema de seguimiento de progreso.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    id: 2,
    title: "App de Finanzas Personales",
    description:
      "Aplicación móvil para gestionar presupuestos, gastos e inversiones con visualizaciones de datos en tiempo real.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React Native", "Firebase", "Chart.js"],
    link: "#",
  },
  {
    id: 3,
    title: "Tienda Online",
    description:
      "E-commerce completo con catálogo de productos, carrito de compras, pasarela de pagos y panel de administración.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "Stripe", "Tailwind CSS"],
    link: "#",
  },
  {
    id: 4,
    title: "Dashboard Analítico",
    description:
      "Panel de control para visualización de métricas empresariales con gráficos interactivos y reportes personalizados.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Vue.js", "D3.js", "Express"],
    link: "#",
  },
]

export default function Proyects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Función para navegar al siguiente proyecto
  const nextProject = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  // Función para navegar al proyecto anterior
  const prevProject = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  // Gestión de eventos táctiles para deslizar
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextProject()
    }

    if (isRightSwipe) {
      prevProject()
    }

    setTouchStart(null)
    setTouchEnd(null)
  }

  // Resetear el estado de animación después de la transición
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [currentIndex])

  // Auto-avance del carrusel (opcional)
  useEffect(() => {
    const interval = setInterval(() => {
      nextProject()
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="scroll-mt-16 relative w-full overflow-hidden bg-white py-16 text-black md:py-24" id="projects">
      {/* Título de sección */}
      <div className="mx-auto mb-12 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Mis Proyectos</h2>
        <div className="mx-auto mt-3 h-1 w-20 bg-indigo-600"></div>
      </div>

      {/* Carrusel */}
      <div
        ref={carouselRef}
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project) => (
              <div key={project.id} className="min-w-full px-4">
                <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                  {/* Imagen del proyecto */}
                  <div className="relative overflow-hidden rounded-2xl border border-white/10">
                    <div className="absolute bottom-0 right-0 h-24 w-24 rounded-tl-3xl bg-indigo-600"></div>
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="h-[250px] w-full object-cover sm:h-[350px] md:h-[400px]"
                    />
                  </div>

                  {/* Información del proyecto */}
                  <div className="flex flex-col justify-center">
                    <h3 className="mb-3 text-2xl font-bold sm:text-3xl">{project.title}</h3>
                    <p className="mb-6 text-gray-300">{project.description}</p>

                    {/* Etiquetas */}
                    <div className="mb-8 flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-gray-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Botón de enlace */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-[#1A1A2E]"
                    >
                      Ver Proyecto
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controles de navegación */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={prevProject}
            disabled={isAnimating}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 bg-white/5 text-white transition-colors hover:bg-black/10 disabled:opacity-50"
            aria-label="Anterior"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="black"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          {/* Indicadores */}
          <div className="flex gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isAnimating) return
                  setIsAnimating(true)
                  setCurrentIndex(index)
                }}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index ? "w-6 bg-indigo-600" : "w-2 bg-black/30 hover:bg-white/50"
                }`}
                aria-label={`Ir al proyecto ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextProject}
            disabled={isAnimating}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 bg-white/5 text-white transition-colors hover:bg-white/10 disabled:opacity-50"
            aria-label="Siguiente"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="black"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
