import type { Metadata } from 'next'
import { Mail, MapPin, Camera, Video, Globe } from 'lucide-react'

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
                    { icon: Camera, label: 'Instagram', href: '#' },
                    { icon: Video, label: 'YouTube', href: '#' },
                    { icon: Globe, label: 'Website', href: '#' },
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
