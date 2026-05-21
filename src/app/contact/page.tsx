import type { Metadata } from 'next'
import { Mail, MapPin } from 'lucide-react'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  )
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Troy SPEAR — sponsorship inquiries, questions, or interest in joining the team.',
}

export default function ContactPage() {
  return (
    <div className="pt-20 pb-16">
      <section className="px-5 sm:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-display text-2xl sm:text-3xl font-light text-fg tracking-tight">
            Contact
          </h1>
          <p className="mt-3 text-sm text-fg-muted max-w-lg">
            Connect with us — whether it&apos;s a sponsorship inquiry, a question about our work, or interest in joining the team.
          </p>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="rounded-2xl overflow-hidden border border-border-subtle h-[350px] lg:h-auto">
              <iframe
                src="https://www.google.com/maps?q=Troy+High+School,+2200+E+Dorothy+Ln,+Fullerton,+CA+92831&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 350 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Troy High School location"
              />
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="w-4 h-4 text-fg-muted" />
                  <span className="text-xs font-medium text-fg-muted uppercase tracking-wide">Email</span>
                </div>
                <a href="mailto:contact@troyspear.com" className="text-sm text-fg hover:text-accent transition-colors">
                  contact@troyspear.com
                </a>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-fg-muted" />
                  <span className="text-xs font-medium text-fg-muted uppercase tracking-wide">Location</span>
                </div>
                <p className="text-sm text-fg leading-relaxed">
                  Troy High School NJROTC — Room 401<br />
                  2200 E Dorothy Ln, Fullerton, CA 92831
                </p>
              </div>

              <div>
                <p className="text-xs font-medium text-fg-muted uppercase tracking-wide mb-3">Social</p>
                <div className="flex gap-3">
                  {[
                    { icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/troyspear' },
                    { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/troyspear/' },
                    { icon: Mail, label: 'Email', href: 'mailto:contact@troyspear.com' },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-fg-muted hover:text-fg transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
