'use client'

import { useState } from 'react'
import { Mail, MapPin, Send, Camera, Video, Globe } from 'lucide-react'
import Card from '@/components/ui/Card'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="pt-20 pb-16">
      <section className="px-5 sm:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-display text-2xl sm:text-3xl font-light text-fg tracking-tight">
            Contact
          </h1>
          <p className="mt-3 text-sm text-fg-muted max-w-lg">
            Questions, sponsorship inquiries, or interested in joining the team.
          </p>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              {!submitted ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSubmitted(true)
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs text-fg-muted mb-1.5">Name</label>
                      <input
                        id="name"
                        type="text"
                        required
                        className="w-full px-3 py-2.5 bg-elevated border border-border-subtle rounded-lg text-fg text-sm placeholder:text-fg-muted outline-none focus:border-accent transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs text-fg-muted mb-1.5">Email</label>
                      <input
                        id="email"
                        type="email"
                        required
                        className="w-full px-3 py-2.5 bg-elevated border border-border-subtle rounded-lg text-fg text-sm placeholder:text-fg-muted outline-none focus:border-accent transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-xs text-fg-muted mb-1.5">Subject</label>
                    <select
                      id="subject"
                      className="w-full px-3 py-2.5 bg-elevated border border-border-subtle rounded-lg text-fg text-sm outline-none focus:border-accent transition-colors"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="sponsorship">Sponsorship</option>
                      <option value="join">Join the Team</option>
                      <option value="media">Media / Press</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs text-fg-muted mb-1.5">Message</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      className="w-full px-3 py-2.5 bg-elevated border border-border-subtle rounded-lg text-fg text-sm placeholder:text-fg-muted outline-none focus:border-accent transition-colors resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-4 py-2.5 bg-accent text-page rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Send
                  </button>
                </form>
              ) : (
                <div className="py-12">
                  <p className="text-sm font-medium text-fg">Message sent.</p>
                  <p className="text-xs text-fg-muted mt-1">We&apos;ll get back to you soon.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs text-accent hover:opacity-70 transition-opacity"
                  >
                    Send another
                  </button>
                </div>
              )}
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Mail className="w-3.5 h-3.5 text-fg-muted" />
                  <span className="text-xs text-fg-muted">Email</span>
                </div>
                <a href="mailto:contact@troyspear.com" className="text-sm text-fg hover:text-accent transition-colors">
                  contact@troyspear.com
                </a>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-fg-muted" />
                  <span className="text-xs text-fg-muted">Location</span>
                </div>
                <p className="text-sm text-fg">
                  Troy High School<br />
                  2200 E Dorothy Ln<br />
                  Fullerton, CA 92831
                </p>
              </div>

              <div>
                <p className="text-xs text-fg-muted mb-2">Social</p>
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
