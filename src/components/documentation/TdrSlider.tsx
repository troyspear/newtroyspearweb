'use client'

import { useState, useRef, useCallback } from 'react'
import Link from 'next/link'
import { FileText, ChevronLeft, ChevronRight, FilePlus } from 'lucide-react'
import { tdrs } from '@/lib/data/tdrs'

export default function TdrSlider() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)
  }, [])

  const scroll = useCallback((direction: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.querySelector<HTMLElement>(':scope > *')?.offsetWidth ?? 320
    el.scrollBy({ left: direction === 'left' ? -cardWidth - 24 : cardWidth + 24, behavior: 'smooth' })
  }, [])

  return (
    <div className="relative group">
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-elevated border border-border-subtle shadow-md flex items-center justify-center text-fg-muted hover:text-fg transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-elevated border border-border-subtle shadow-md flex items-center justify-center text-fg-muted hover:text-fg transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      )}

      <div
        ref={scrollRef}
        onScroll={updateScrollState}
        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2 -mx-1 px-1"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {tdrs.map((tdr) => (
          <div
            key={tdr.year}
            className="snap-start shrink-0 w-[300px] sm:w-[340px] bg-glass border border-glass-border hover:border-accent/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
          >
            {tdr.upcoming ? (
              <>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-semibold text-accent bg-accent-subtle px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {tdr.year}
                    </span>
                    <Link
                      href={tdr.vehicleSlug}
                      className="text-xs text-fg-muted font-medium hover:text-accent transition-colors"
                    >
                      {tdr.vehicle}
                    </Link>
                  </div>
                  <h4 className="font-display text-base font-semibold text-fg">
                    RoboSub {tdr.year} Report
                  </h4>
                  <p className="mt-2.5 text-xs text-fg-muted leading-relaxed">
                    Technical design report for {tdr.vehicle} is currently in progress and will be published before the competition deadline.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border-subtle">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-fg-muted">
                    <FilePlus className="w-3.5 h-3.5" />
                    Coming soon
                  </span>
                </div>
              </>
            ) : (
              <>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-semibold text-accent bg-accent-subtle px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {tdr.year}
                    </span>
                    <Link
                      href={tdr.vehicleSlug}
                      className="text-xs text-fg-muted font-medium hover:text-accent transition-colors"
                    >
                      {tdr.vehicle}
                    </Link>
                  </div>
                  <h4 className="font-display text-base font-semibold text-fg">
                    RoboSub {tdr.year} Report
                  </h4>
                  <p className="mt-2.5 text-xs text-fg-muted leading-relaxed">
                    {tdr.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border-subtle">
                  <a
                    href={tdr.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:opacity-70 transition-opacity"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    Read TDR (PDF)
                  </a>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
