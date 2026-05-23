'use client'

import { ArrowDown } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-[50vh] md:min-h-[85vh] flex items-end px-5 sm:px-8 pb-12 md:pb-20 pointer-events-none">
      <div className="relative z-10 max-w-6xl mx-auto w-full pointer-events-auto">
        <p className="text-[11.5px] tracking-[0.25em] uppercase text-fg-muted font-semibold mb-8">
          Troy High School NJROTC
        </p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-fg leading-[1.1] tracking-tight max-w-2xl">
          SPEAR
        </h1>
        <p className="mt-8 text-fg-secondary dark:text-fg/90 text-base sm:text-[17px] max-w-md leading-relaxed">
          Student-built autonomous underwater vehicles for the RoboNation RoboSub competition.
        </p>
        <div className="mt-12">
          <a
            href="#explore"
            className="inline-flex items-center gap-2.5 text-sm font-semibold text-page bg-accent hover:bg-accent/85 px-5 py-2.5 rounded-lg transition-all"
          >
            Dive in
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
