"use client";

import { Circle, Download, Play, Plus } from "lucide-react";
import GlitchText from "../../../../components/color/textGlitch";

interface BannerProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function Banner({
  title = "Carlos Sanchez",
  // description = "Software Developer",
  buttonText = "My CV",
  buttonHref = "#services",
}: BannerProps) {
  return (
    <section className="scroll-mt-16 relative w-full overflow-hidden bg-white text-black" id="banner">
      {/* Decorative elements */}
      <div className="absolute left-1/2 top-10 h-px w-16 -translate-x-1/2 bg-gray-700 md:left-auto md:right-40 md:translate-x-0">
        <div className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-gray-700"></div>
      </div>
      <Circle className="absolute right-10 top-10 h-6 w-6 stroke-1 text-gray-700" />
      <Plus className="absolute right-20 top-60 h-6 w-6 stroke-1 text-gray-700" />
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 md:bottom-20 md:left-auto md:right-40 md:translate-x-0">
        <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-gray-700">
          <Play className="h-4 w-4 fill-white text-white" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Text content */}
          <div className="z-10 max-w-xl">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {title}
            </h1>
            <GlitchText/>
              <a
                href={buttonHref}
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-md font-semibold text-white shadow-md transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 w-28"
              >
                {buttonText}
                <Download className="h-4 w-4 transform transition-transform duration-200 group-hover:translate-x-1" />
              </a>
          </div>

          {/* Image with frame - Redesigned */}
          <div className="relative mx-auto md:ml-auto md:mr-0">
            <div className="relative h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px]">
              {/* Main image container - phone-like frame */}
              <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2rem] border-2 border-white/80 bg-white/5 backdrop-blur-sm">
                {/* Blue accent rectangle */}
                <div className="absolute bottom-0 right-0 h-24 w-24 rounded-tl-3xl bg-indigo-600"></div>

                {/* Person image */}
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Enthusiastic person"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Decorative outline */}
              <div className="absolute -right-3 -top-3 h-full w-full rounded-[2rem] border border-gray-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
