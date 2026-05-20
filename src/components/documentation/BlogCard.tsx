import Link from 'next/link'
import { categoryLabels, type BlogPost } from '@/lib/data/blog-posts'

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/documentation/${post.slug}`}
      className="group flex items-baseline justify-between gap-4 py-3.5 border-b border-border-subtle hover:opacity-70 transition-opacity"
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3">
          <h3 className="text-sm font-medium text-fg truncate">
            {post.title}
          </h3>
          <span className="text-[11px] text-fg-muted shrink-0">
            {categoryLabels[post.category]}
          </span>
        </div>
        <p className="mt-0.5 text-xs text-fg-muted truncate">
          {post.summary}
        </p>
      </div>
      <span className="text-[11px] text-fg-muted shrink-0">
        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
      </span>
    </Link>
  )
}
