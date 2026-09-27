'use client'

import { useState } from 'react'
import BlogCard from '@/components/documentation/BlogCard'
import CategoryFilter from '@/components/documentation/CategoryFilter'
import { blogPosts } from '@/lib/data/blog-posts'

export default function BlogList() {
  const [category, setCategory] = useState<string | null>(null)

  const filtered = category
    ? blogPosts.filter((p) => p.category === category)
    : blogPosts

  return (
    <>
      <CategoryFilter selected={category} onSelect={setCategory} />
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="text-sm text-fg-muted mt-8">No posts in this category.</p>
      )}
    </>
  )
}
