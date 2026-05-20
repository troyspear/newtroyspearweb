'use client'

import { useState } from 'react'
import { X, Camera } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { galleryItems, type GalleryItem } from '@/lib/data/gallery-items'
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
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null)

  const filtered = galleryItems.filter((item) => {
    if (category && item.category !== category) return false
    if (year && item.year !== year) return false
    return true
  })

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

          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {filtered.map((item) => (
              <button
                key={item.id}
                onClick={() => setLightbox(item)}
                className="group relative aspect-square rounded-lg overflow-hidden bg-surface hover:opacity-80 transition-opacity"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="w-6 h-6 text-fg-muted/30" />
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
            onClick={() => setLightbox(null)}
          >
            <div
              className="relative max-w-2xl w-full bg-elevated rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-surface flex items-center justify-center">
                <Camera className="w-12 h-12 text-fg-muted/20" />
              </div>
              <div className="p-5">
                <p className="text-sm font-medium text-fg">{lightbox.caption}</p>
                <p className="text-xs text-fg-muted mt-1">{lightbox.date}</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
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
