'use client'

import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { Search, X, FileText, Users, Wrench, BookOpen, Heart } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface SearchItem {
  title: string
  description: string
  href: string
  category: string
}

const STATIC_PAGES: SearchItem[] = [
  { title: 'Home', description: 'Welcome to Troy SPEAR underwater robotics', href: '/', category: 'Pages' },
  { title: 'Team', description: 'Meet our team members and sub-teams', href: '/about', category: 'Pages' },
  { title: 'Vehicle', description: 'ORCA autonomous underwater vehicle', href: '/vehicle', category: 'Pages' },
  { title: 'Documentation', description: 'Build logs, test results, and design decisions', href: '/documentation', category: 'Pages' },
  { title: 'Sponsors', description: 'Our sponsors and supporters', href: '/sponsors', category: 'Pages' },
  { title: 'Gallery', description: 'Photos from competitions, pool tests, and build sessions', href: '/gallery', category: 'Pages' },
  { title: 'Join', description: 'Join Troy SPEAR, no experience needed', href: '/join', category: 'Pages' },
  { title: 'Contact', description: 'Get in touch with Troy SPEAR', href: '/contact', category: 'Pages' },
  { title: 'Technical Design Reports', description: 'TDRs from past competition years', href: '/vehicle/tdrs', category: 'Pages' },
  { title: 'Past Vehicles', description: 'Krabby Patty, Aura, Sea++', href: '/vehicle/past/krabby-patty', category: 'Pages' },
]

async function buildSearchData(): Promise<SearchItem[]> {
  const [
    { blogPosts },
    { teamMembers, subTeams },
    { sponsors },
  ] = await Promise.all([
    import('@/lib/data/blog-posts'),
    import('@/lib/data/team-members'),
    import('@/lib/data/sponsors'),
  ])

  const items: SearchItem[] = [...STATIC_PAGES]

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
      description: `${member.role}, ${member.subTeam} sub-team`,
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

const categoryIcons: Record<string, typeof Search> = {
  Pages: FileText,
  Docs: BookOpen,
  Team: Users,
  Vehicle: Wrench,
  Sponsors: Heart,
}

// ponytail: substring match scored by field + prefix, replacing fuse.js for a
// ~40-item static index. No typo tolerance; add fuse.js back if users miss it.
function scoreItem(item: SearchItem, q: string): number {
  const t = item.title.toLowerCase()
  if (t.includes(q)) return t.startsWith(q) ? 3 : 2
  if (item.description.toLowerCase().includes(q)) return 1.5
  if (item.category.toLowerCase().includes(q)) return 0.5
  return 0
}

export default function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('')
  const [searchData, setSearchData] = useState<SearchItem[]>(STATIC_PAGES)
  const [loaded, setLoaded] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!isOpen || loaded) return
    let cancelled = false
    buildSearchData().then((items) => {
      if (cancelled) return
      setSearchData(items)
      setLoaded(true)
    })
    return () => { cancelled = true }
  }, [isOpen, loaded])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (q.length === 0) return searchData.slice(0, 6)
    return searchData
      .map((item) => ({ item, score: scoreItem(item, q) }))
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 10)
      .map((r) => r.item)
  }, [query, searchData])

  const grouped = useMemo(() => {
    return results.reduce<Record<string, SearchItem[]>>((acc, item) => {
      if (!acc[item.category]) acc[item.category] = []
      acc[item.category].push(item)
      return acc
    }, {})
  }, [results])

  useEffect(() => {
    if (isOpen) {
      const id = setTimeout(() => inputRef.current?.focus(), 100)
      return () => clearTimeout(id)
    }
  }, [isOpen])

  const handleClose = useCallback(() => {
    setQuery('')
    onClose()
  }, [onClose])

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault()
    }
    if (e.key === 'Escape') handleClose()
  }, [handleClose])

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
          onClick={handleClose}
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
              <button onClick={handleClose} className="text-fg-muted hover:text-fg">
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="max-h-72 overflow-y-auto p-1.5">
              {Object.entries(grouped).map(([category, items]) => (
                <div key={category} className="mb-1">
                  <div className="px-3 py-1.5 text-[11px] font-medium text-fg-muted uppercase tracking-wider">
                    {category}
                  </div>
                  {items.map((item, i) => {
                    const Icon = categoryIcons[item.category] || FileText
                    return (
                      <Link
                        key={`${item.href}|${item.title}|${i}`}
                        href={item.href}
                        onClick={handleClose}
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
