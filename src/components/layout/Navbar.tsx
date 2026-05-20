'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, Menu, X, Moon, Sun, ChevronDown } from 'lucide-react'
import MobileMenu from './MobileMenu'

const vehicleDropdownItems = [
  { href: '/vehicle', label: 'Poseidon Mk. II' },
  { href: '/vehicle/past/krabby-patty', label: 'Krabby Patty' },
  { href: '/vehicle/past/aura', label: 'Aura' },
  { href: '/vehicle/past/sea-plus-plus', label: 'Sea++' },
  { href: '/vehicle/tdrs', label: 'Technical Design Reports' },
]

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Team' },
  { href: '/vehicle', label: 'Vehicle', dropdown: vehicleDropdownItems },
  { href: '/documentation', label: 'Docs' },
  { href: '/sponsors', label: 'Sponsors' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar({ onSearchOpen }: { onSearchOpen: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dark, setDark] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'))
  }, [])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function handleMouseEnter() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setDropdownOpen(true)
  }

  function handleMouseLeave() {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 150)
  }

  function toggleDark() {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-page/70 backdrop-blur-xl border-b border-glass-border">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-14">
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <Image
                src="/images/logo/troyspear.png"
                alt="Troy SPEAR"
                width={28}
                height={28}
                className="w-7 h-7"
              />
              <span className="font-display font-semibold text-[13.5px] tracking-wide text-fg uppercase">
                Troy SPEAR
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-1.5">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div
                    key={link.href}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className="inline-flex items-center gap-1 text-[15px] text-fg-secondary font-semibold hover:text-fg px-3.5 py-1.5 transition-all"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      {link.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-page/95 backdrop-blur-xl border border-glass-border rounded-xl shadow-lg py-1.5 z-50">
                        {link.dropdown.map((item, i) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setDropdownOpen(false)}
                            className={`block px-4 py-2 text-sm text-fg-secondary hover:text-fg hover:bg-glass transition-colors ${
                              i === 0 ? 'font-semibold' : ''
                            }`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[15px] text-fg-secondary font-semibold hover:text-fg px-3.5 py-1.5 transition-all active:underline"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={toggleDark}
                className="text-fg-muted hover:text-fg transition-colors"
                aria-label="Toggle dark mode"
              >
                {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <button
                onClick={onSearchOpen}
                className="text-fg-muted hover:text-fg transition-colors"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden text-fg-muted hover:text-fg transition-colors"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
      />
    </>
  )
}
