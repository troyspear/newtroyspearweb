import Link from 'next/link'
import { Globe, Mail, Camera, Video } from 'lucide-react'

const socialLinks = [
  { href: '#', label: 'Instagram', icon: Camera },
  { href: '#', label: 'YouTube', icon: Video },
  { href: '#', label: 'Website', icon: Globe },
  { href: 'mailto:contact@troyspear.com', label: 'Email', icon: Mail },
]

export default function Footer() {
  return (
    <footer className="border-t border-accent/20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
        <div className="flex flex-col sm:flex-row justify-between gap-8">
          <div>
            <p className="font-display text-sm font-medium text-fg">Troy SPEAR</p>
            <p className="mt-1 text-xs text-fg-muted">
              Troy High School &middot; Fullerton, CA
            </p>
          </div>

          <div className="flex flex-col sm:items-end gap-3">
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fg-muted hover:text-fg transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-xs text-fg-muted">
              &copy; 2025 Troy SPEAR
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
