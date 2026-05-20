'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface NavLink {
  href: string
  label: string
  dropdown?: { href: string; label: string }[]
}

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  links: NavLink[]
}

export default function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>(null)

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-x-0 top-14 z-40 md:hidden bg-glass backdrop-blur-xl border-b border-glass-border"
        >
          <div className="px-5 py-3 space-y-0.5">
            {links.map((link) =>
              link.dropdown ? (
                <div key={link.href}>
                  <button
                    onClick={() => setExpandedDropdown(expandedDropdown === link.label ? null : link.label)}
                    className="flex items-center justify-between w-full py-2.5 text-sm text-fg-secondary hover:text-fg transition-colors"
                  >
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${expandedDropdown === link.label ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {expandedDropdown === link.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pb-1 space-y-0.5">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={onClose}
                              className="block py-2 text-sm text-fg-muted hover:text-fg transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="block py-2.5 text-sm text-fg-secondary hover:text-fg transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
