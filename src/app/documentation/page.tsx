'use client'

import { useState } from 'react'
import BlogCard from '@/components/documentation/BlogCard'
import CategoryFilter from '@/components/documentation/CategoryFilter'
import { blogPosts } from '@/lib/data/blog-posts'

export default function DocumentationPage() {
  const [category, setCategory] = useState<string | null>(null)

  const filtered = category
    ? blogPosts.filter((p) => p.category === category)
    : blogPosts

  return (
    <div className="pt-20 pb-16">
      <section className="px-5 sm:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-2xl sm:text-3xl font-light text-fg tracking-tight">
            Documentation
          </h1>
          <p className="mt-3 text-sm text-fg-muted">
            Build logs, test summaries, and design decisions.
          </p>

          <div className="mt-8">
            <CategoryFilter selected={category} onSelect={setCategory} />
          </div>

          <div className="mt-6">
            {filtered.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-xs text-fg-muted mt-8">No posts in this category.</p>
          )}
        </div>
      </section>
    </div>
  )
}
