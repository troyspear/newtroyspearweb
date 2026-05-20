'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { Search, X, FileText, Users, Wrench, Image as ImageIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Fuse from 'fuse.js'

interface SearchItem {
  title: string
  description: string
  href: string
  category: string
}

const searchData: SearchItem[] = [
  { title: 'Home', description: 'Welcome to Troy SPEAR', href: '/', category: 'Pages' },
  { title: 'Team', description: 'Meet our team members and sub-teams', href: '/about', category: 'Pages' },
  { title: 'Vehicle', description: 'Our autonomous underwater vehicle', href: '/vehicle', category: 'Pages' },
  { title: 'Documentation', description: 'Build logs and design decisions', href: '/documentation', category: 'Pages' },
  { title: 'Sponsors', description: 'Our sponsors and supporters', href: '/sponsors', category: 'Pages' },
  { title: 'Gallery', description: 'Photos from competitions and practices', href: '/gallery', category: 'Pages' },
  { title: 'Contact', description: 'Get in touch', href: '/contact', category: 'Pages' },
  { title: 'Mechanical Sub-Team', description: 'Hull design, thrusters, mechanical systems', href: '/about#mechanical', category: 'Team' },
  { title: 'Electrical Sub-Team', description: 'Power systems, sensors, wiring', href: '/about#electrical', category: 'Team' },
  { title: 'Software Sub-Team', description: 'Computer vision, autonomy, controls', href: '/about#software', category: 'Team' },
  { title: 'Vehicle Specs', description: 'Dimensions, weight, components', href: '/vehicle#specs', category: 'Vehicle' },
  { title: '3D Vehicle Viewer', description: 'Interactive 3D model', href: '/vehicle#viewer', category: 'Vehicle' },
  { title: 'Propulsion System', description: 'Thruster configuration', href: '/vehicle#propulsion', category: 'Vehicle' },
]

const fuse = new Fuse(searchData, {
  keys: [
    { name: 'title', weight: 2 },
    { name: 'description', weight: 1 },
    { name: 'category', weight: 1.5 },
  ],
  threshold: 0.3,
})

const categoryIcons: Record<string, typeof Search> = {
  Pages: FileText,
  Team: Users,
  Vehicle: Wrench,
  Gallery: ImageIcon,
}

export default function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const results = query.length > 0
    ? fuse.search(query).slice(0, 8).map((r) => r.item)
    : searchData.slice(0, 6)

  const grouped = results.reduce<Record<string, SearchItem[]>>((acc, item) => {
    if (!acc[item.category]) acc[item.category] = []
    acc[item.category].push(item)
    return acc
  }, {})

  useEffect(() => {
    if (isOpen) {
      setQuery('')
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault()
    }
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh]"
          onClick={onClose}
        >
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.1 }}
            className="relative w-full max-w-md mx-4 bg-glass backdrop-blur-xl border border-glass-border rounded-xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-4 border-b border-border-subtle">
              <Search className="w-4 h-4 text-fg-muted shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className="flex-1 py-3.5 bg-transparent text-fg text-sm placeholder:text-fg-muted outline-none"
              />
              <button onClick={onClose} className="text-fg-muted hover:text-fg">
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="max-h-72 overflow-y-auto p-1.5">
              {Object.entries(grouped).map(([category, items]) => (
                <div key={category} className="mb-1">
                  <div className="px-3 py-1.5 text-[11px] font-medium text-fg-muted uppercase tracking-wider">
                    {category}
                  </div>
                  {items.map((item) => {
                    const Icon = categoryIcons[item.category] || FileText
                    return (
                      <Link
                        key={item.href + item.title}
                        href={item.href}
                        onClick={onClose}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-surface/80 transition-colors"
                      >
                        <Icon className="w-3.5 h-3.5 text-fg-muted shrink-0" />
                        <div>
                          <div className="text-sm text-fg">{item.title}</div>
                          <div className="text-[11px] text-fg-muted">{item.description}</div>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              ))}
              {query.length > 0 && results.length === 0 && (
                <div className="px-3 py-6 text-center text-xs text-fg-muted">
                  No results for &quot;{query}&quot;
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
