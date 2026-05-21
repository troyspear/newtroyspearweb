'use client'

import { useState } from 'react'
import Link from 'next/link'
import BlogCard from '@/components/documentation/BlogCard'
import CategoryFilter from '@/components/documentation/CategoryFilter'
import { blogPosts } from '@/lib/data/blog-posts'
import { FileText } from 'lucide-react'

const tdrs = [
  {
    year: '2024–2025',
    vehicle: 'Krabby Patty',
    vehicleSlug: '/vehicle/past/krabby-patty',
    description: 'Octagonal aluminum frame with custom CNC-milled components, dual ZED 2i stereo cameras, NVIDIA Jetson Orin Nano, double-jointed claw, and YOLOv8 with 3D spatial localization.',
    pdfUrl: '/documents/tdr-2025.pdf',
  },
  {
    year: '2023–2024',
    vehicle: 'Aura',
    vehicleSlug: '/vehicle/past/aura',
    description: 'Newly built AUV integrating YOLOv8 vision, DVL for underwater positioning, upgraded claw and torpedo systems, and behavior tree mission planning on a BlueROV2 frame.',
    pdfUrl: '/documents/tdr-2024.pdf',
  },
  {
    year: '2022–2023',
    vehicle: 'Sea++',
    vehicleSlug: '/vehicle/past/sea-plus-plus',
    description: 'Our inaugural AUV built by 10 students using a BlueROV2 R2 frame, YOLO v4 object detection, ROS with PID control, and an NVIDIA Jetson Nano.',
    pdfUrl: '/documents/tdr-2023.pdf',
  },
]

export default function DocumentationPage() {
  const [category, setCategory] = useState<string | null>(null)

  const filtered = category
    ? blogPosts.filter((p) => p.category === category)
    : blogPosts

  return (
    <div className="pt-20 pb-16">
      <section className="px-5 sm:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-display text-2xl sm:text-3xl font-light text-fg tracking-tight">
            Documentation
          </h1>
          <p className="mt-3 text-sm text-fg-muted max-w-lg">
            Updates, build logs, and formal technical design reports.
          </p>

          {/* Technical Design Reports */}
          <div className="mt-12">
            <h2 className="font-display text-xs font-semibold text-accent uppercase tracking-wider mb-6">
              Technical Design Reports
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tdrs.map((tdr) => (
                <div
                  key={tdr.year}
                  className="bg-glass border border-glass-border hover:border-accent/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-semibold text-accent bg-accent-subtle px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {tdr.year}
                      </span>
                      <Link
                        href={tdr.vehicleSlug}
                        className="text-xs text-fg-muted font-medium hover:text-accent transition-colors"
                      >
                        {tdr.vehicle}
                      </Link>
                    </div>
                    <h4 className="font-display text-base font-semibold text-fg">
                      RoboSub {tdr.year} Report
                    </h4>
                    <p className="mt-2.5 text-xs text-fg-muted leading-relaxed">
                      {tdr.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border-subtle">
                    <a
                      href={tdr.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:opacity-70 transition-opacity"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      Read TDR (PDF)
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Updates / Blog Posts */}
          <div className="mt-16">
            <h2 className="font-display text-xs font-semibold text-accent uppercase tracking-wider mb-6">
              Updates
            </h2>
            <div className="max-w-3xl">
              <CategoryFilter selected={category} onSelect={setCategory} />
              <div className="mt-6">
                {filtered.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
              {filtered.length === 0 && (
                <p className="text-xs text-fg-muted mt-8">No posts in this category.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
