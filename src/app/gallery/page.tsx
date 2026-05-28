'use client'

import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { galleryItems } from '@/lib/data/gallery-items'
import { cn } from '@/lib/utils'

const categories = [
  { key: null, label: 'All' },
  { key: 'competition', label: 'Competition' },
  { key: 'practice', label: 'Practice' },
  { key: 'build', label: 'Build' },
  { key: 'team', label: 'Team' },
]

const years = [...new Set(galleryItems.map((i) => i.year))].sort((a, b) => b - a)

export default function GalleryPage() {
  const [category, setCategory] = useState<string | null>(null)
  const [year, setYear] = useState<number | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const touchStartX = useRef<number | null>(null)

  const filtered = useMemo(() => galleryItems.filter((item) => {
    if (category && item.category !== category) return false
    if (year && item.year !== year) return false
    return true
  }), [category, year])

  const lightbox = lightboxIndex !== null ? filtered[lightboxIndex] : null

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex + 1) % filtered.length)
  }, [lightboxIndex, filtered.length])

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length)
  }, [lightboxIndex, filtered.length])

  const close = useCallback(() => setLightboxIndex(null), [])

  useEffect(() => {
    if (lightboxIndex === null) return
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'ArrowRight') goNext()
      else if (e.key === 'ArrowLeft') goPrev()
      else if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightboxIndex, goNext, goPrev, close])

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return
    const diff = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(diff) > 50) {
      if (diff < 0) goNext()
      else goPrev()
    }
    touchStartX.current = null
  }

  return (
    <div className="pt-20 pb-16">
      <section className="px-5 sm:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-display text-2xl sm:text-3xl font-light text-fg tracking-tight">
            Gallery
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2">
            {categories.map((cat) => (
              <button
                key={cat.key ?? 'all'}
                onClick={() => setCategory(cat.key)}
                className={cn(
                  'text-xs transition-colors',
                  category === cat.key ? 'text-fg font-medium' : 'text-fg-muted hover:text-fg'
                )}
              >
                {cat.label}
              </button>
            ))}
            <span className="text-border">|</span>
            {years.map((y) => (
              <button
                key={y}
                onClick={() => setYear(y === year ? null : y)}
                className={cn(
                  'text-xs transition-colors',
                  year === y ? 'text-fg font-medium' : 'text-fg-muted hover:text-fg'
                )}
              >
                {y}
              </button>
            ))}
          </div>

          <div className="mt-10 columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
            {filtered.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setLightboxIndex(i)}
                className="group relative w-full rounded-lg overflow-hidden bg-surface hover:opacity-90 transition-opacity break-inside-avoid"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.orientation === 'landscape' ? 800 : 500}
                  height={item.orientation === 'landscape' ? 533 : 667}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading={i < 8 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-xs font-medium text-white leading-snug">{item.caption}</p>
                  <p className="text-[10px] text-white/70 mt-0.5">{item.date}</p>
                </div>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-xs text-fg-muted mt-10">No photos match the selected filters.</p>
          )}
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={close}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <button
              onClick={(e) => { e.stopPropagation(); goPrev() }}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white/80 hover:text-white transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goNext() }}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white/80 hover:text-white transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div
              className={cn(
                'relative w-full bg-elevated rounded-xl overflow-hidden',
                lightbox.orientation === 'portrait' ? 'max-w-md' : 'max-w-3xl'
              )}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative bg-surface flex items-center justify-center">
                <Image
                  src={lightbox.src}
                  alt={lightbox.alt}
                  width={lightbox.orientation === 'landscape' ? 1200 : 600}
                  height={lightbox.orientation === 'landscape' ? 800 : 800}
                  className="w-full h-auto max-h-[75vh] object-contain"
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority
                />
              </div>
              <div className="p-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-fg">{lightbox.caption}</p>
                  <p className="text-xs text-fg-muted mt-1">{lightbox.date}</p>
                </div>
                <span className="text-xs text-fg-muted shrink-0">
                  {lightboxIndex! + 1} / {filtered.length}
                </span>
              </div>
              <button
                onClick={close}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 text-white/70 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
