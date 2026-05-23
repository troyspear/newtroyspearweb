'use client'

import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { Search, X, FileText, Users, Wrench, Image as ImageIcon, BookOpen, Heart } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { blogPosts } from '@/lib/data/blog-posts'
import { teamMembers, subTeams } from '@/lib/data/team-members'
import { vehicleSpecs, subsystems } from '@/lib/data/vehicle-specs'
import { sponsors } from '@/lib/data/sponsors'

interface SearchItem {
  title: string
  description: string
  href: string
  category: string
}

function buildSearchData(): SearchItem[] {
  const items: SearchItem[] = [
    { title: 'Home', description: 'Welcome to Troy SPEAR underwater robotics', href: '/', category: 'Pages' },
    { title: 'Team', description: 'Meet our team members and sub-teams', href: '/about', category: 'Pages' },
    { title: 'Vehicle', description: 'Poseidon Mk. II autonomous underwater vehicle', href: '/vehicle', category: 'Pages' },
    { title: 'Documentation', description: 'Build logs, test results, and design decisions', href: '/documentation', category: 'Pages' },
    { title: 'Sponsors', description: 'Our sponsors and supporters', href: '/sponsors', category: 'Pages' },
    { title: 'Gallery', description: 'Photos from competitions, pool tests, and build sessions', href: '/gallery', category: 'Pages' },
    { title: 'Contact', description: 'Get in touch with Troy SPEAR', href: '/contact', category: 'Pages' },
    { title: 'Technical Design Reports', description: 'TDRs from past competition years', href: '/vehicle/tdrs', category: 'Pages' },
    { title: 'Past Vehicles', description: 'Krabby Patty, Aura, Sea++', href: '/vehicle/past/krabby-patty', category: 'Pages' },
  ]

  for (const post of blogPosts) {
    items.push({
      title: post.title,
      description: post.summary,
      href: `/documentation/${post.slug}`,
      category: 'Docs',
    })
  }

  for (const member of teamMembers) {
    items.push({
      title: member.name,
      description: `${member.role} — ${member.subTeam} sub-team`,
      href: '/about',
      category: 'Team',
    })
  }

  for (const team of subTeams) {
    items.push({
      title: `${team.name} Sub-Team`,
      description: team.description,
      href: '/about',
      category: 'Team',
    })
  }

  for (const sub of subsystems) {
    items.push({
      title: sub.name,
      description: sub.description,
      href: '/vehicle',
      category: 'Vehicle',
    })
  }

  for (const spec of vehicleSpecs) {
    items.push({
      title: spec.label,
      description: spec.value,
      href: '/vehicle#specs',
      category: 'Vehicle',
    })
  }

  for (const sponsor of sponsors) {
    items.push({
      title: sponsor.name,
      description: `${sponsor.tier.charAt(0).toUpperCase() + sponsor.tier.slice(1)} sponsor`,
      href: '/sponsors',
      category: 'Sponsors',
    })
  }

  return items
}

const searchData = buildSearchData()

const categoryIcons: Record<string, typeof Search> = {
  Pages: FileText,
  Docs: BookOpen,
  Team: Users,
  Vehicle: Wrench,
  Gallery: ImageIcon,
  Sponsors: Heart,
}

export default function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('')
  const [fuseInstance, setFuseInstance] = useState<import('fuse.js').default<SearchItem> | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen && !fuseInstance) {
      import('fuse.js').then((mod) => {
        const Fuse = mod.default
        setFuseInstance(new Fuse(searchData, {
          keys: [
            { name: 'title', weight: 2 },
            { name: 'description', weight: 1.5 },
            { name: 'category', weight: 0.5 },
          ],
          threshold: 0.4,
          ignoreLocation: true,
          minMatchCharLength: 2,
        }))
      })
    }
  }, [isOpen, fuseInstance])

  const results = useMemo(() => {
    if (query.length === 0) return searchData.slice(0, 6)
    if (!fuseInstance) return []
    return fuseInstance.search(query).slice(0, 10).map((r) => r.item)
  }, [query, fuseInstance])

  const grouped = useMemo(() => {
    return results.reduce<Record<string, SearchItem[]>>((acc, item) => {
      if (!acc[item.category]) acc[item.category] = []
      acc[item.category].push(item)
      return acc
    }, {})
  }, [results])

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
            className="relative w-full max-w-md mx-4 bg-elevated border border-border rounded-xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-4 border-b border-border-subtle">
              <Search className="w-4 h-4 text-fg-secondary shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className="flex-1 py-3.5 bg-transparent text-fg text-sm placeholder:text-fg-secondary outline-none focus:outline-none focus-visible:outline-none"
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
                        <div className="min-w-0">
                          <div className="text-sm text-fg truncate">{item.title}</div>
                          <div className="text-[11px] text-fg-muted truncate">{item.description}</div>
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
