'use client'

import { useState, useEffect, useCallback } from 'react'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import Navbar from './Navbar'
import Footer from './Footer'
import SplineBackgroundLoader from '@/components/home/SplineBackgroundLoader'

// Deferred so framer-motion and the search index stay out of the initial
// bundle - the chunk is only fetched the first time search is opened.
const SearchModal = dynamic(() => import('./SearchModal'), { ssr: false })

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchMounted, setSearchMounted] = useState(false)
  const isHome = usePathname() === '/'

  const openSearch = useCallback(() => {
    setSearchMounted(true)
    setSearchOpen(true)
  }, [])

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault()
      setSearchMounted(true)
      setSearchOpen((prev) => !prev)
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return (
    <>
      <SplineBackgroundLoader active={isHome} />
      <Navbar onSearchOpen={openSearch} />
      <main id="main-content" className="flex-1">{children}</main>
      <Footer />
      {searchMounted && (
        <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      )}
    </>
  )
}
