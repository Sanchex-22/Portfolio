"use client"

import type React from "react"
import { useEffect } from "react"
import { Menu } from "lucide-react"
import ProfileButton from "../buttons/profile_button"
import type { UserProfile } from "../../context/userProfileContext"

interface CurrentPathname {
  name: string
}

interface NavbarProps {
  currentPathname: CurrentPathname
  isLogged: boolean
  profile: UserProfile | null
}

const Navbar: React.FC<NavbarProps> = ({ currentPathname, isLogged, profile }) => {
  const nav_links = [
    { name: "Carlos Sanchez", href: "/" },
    { name: "About me", href: "#about-me" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact me", href: "#contact" },
  ]

  useEffect(() => {
    const navbar = document.getElementById("navbar")

    function handleScroll() {
      if (window.scrollY > 0) {
        navbar?.classList.add("scrolled")
      } else {
        navbar?.classList.remove("scrolled")
      }
    }
    window.addEventListener("scroll", handleScroll)

    const body = document?.querySelector("body")
    const openButton = document?.getElementById("open-menu")
    const side = document?.getElementById("sidebar")

    if (!openButton) throw new Error("No button or nav found")
    function openMenu() {
      window.scrollTo(0, 0)
      body?.classList.add("overflow-hidden")
      side?.classList.remove("invisible", "translate-x-full", "hidden")
    }
    openButton.addEventListener("click", openMenu)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      openButton.removeEventListener("click", openMenu)
    }
  }, [])

  const isActive = (path: string) => currentPathname.name === path

  return (
    <nav
      id="navbar"
      className={`text-transition w-full fixed z-20 transition-all duration-500 bg-white/95 backdrop-blur-sm border-b border-gray-100 ${
        currentPathname.name === "/" ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">

          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-gray-900 font-bold text-xl tracking-tight hover:text-gray-700 transition-colors"
            >
              Carlos Sanchez
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {nav_links.map(
              (link, index) =>
                index !== 0 && (
                  <a
                    key={index}
                    href={link.href}
                    className={`relative py-2 text-base font-medium transition-colors
                      after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-violet-600 after:transition-all after:duration-300 hover:after:w-full
                      ${isActive(link.href) ? "text-gray-900 after:w-full" : "text-gray-600 hover:text-violet-600"}`}
                  >
                    {link.name}
                  </a>
                ),
            )}
          </div>

          <div className="flex items-center gap-4">
            {isLogged ? (
              <div className="flex items-center gap-2">
                <a
                  href="/account"
                  className="hidden md:inline-block text-gray-600 text-base font-medium hover:text-gray-900 transition-colors"
                >
                  Mi cuenta
                </a>
                <span className="hidden md:inline-block text-gray-300">|</span>
                <div className="relative">
                  <ProfileButton profile={profile} />
                </div>
              </div>
            ) : (
              <a
                href="/login"
                className="text-gray-900 font-medium px-4 py-2 rounded-md border border-gray-200 hover:bg-gray-50 transition-all"
              >
                Login
              </a>
            )}

            <button
              id="open-menu"
              aria-label="Abrir menú"
              className="md:hidden p-1.5 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
