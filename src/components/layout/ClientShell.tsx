'use client'

import { useState, useEffect, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import Navbar from './Navbar'
import Footer from './Footer'
import SearchModal from './SearchModal'
import SplineBackgroundLoader from '@/components/home/SplineBackgroundLoader'

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false)
  const isHome = usePathname() === '/'

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault()
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
      <Navbar onSearchOpen={() => setSearchOpen(true)} />
      <main id="main-content" className="flex-1">{children}</main>
      <Footer />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
