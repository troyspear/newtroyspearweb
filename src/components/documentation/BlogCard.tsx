import Image from 'next/image'
import Link from 'next/link'
import { categoryLabels, type BlogPost } from '@/lib/data/blog-posts'

export default function BlogCard({ post }: { post: BlogPost }) {
  // CAD renders and diagrams are PNGs drawn on white: show them whole on a
  // white tile. Photos fill the frame.
  const isDiagram = post.thumbnail.endsWith('.png')

  return (
    <Link
      href={`/documentation/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-elevated shadow-sm hover:border-accent/50 hover:-translate-y-0.5 transition-all"
    >
      <div className={`relative aspect-[16/9] ${isDiagram ? 'bg-white' : 'bg-surface'}`}>
        <Image
          src={post.thumbnail}
          alt=""
          fill
          className={isDiagram ? 'object-contain p-4' : 'object-cover'}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 text-xs text-fg-muted">
          <span className="font-semibold text-accent">{categoryLabels[post.category]}</span>
          <span aria-hidden="true">&middot;</span>
          <span>
            {new Date(post.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
        </div>
        <h3 className="mt-2 font-display text-lg font-medium text-fg leading-snug group-hover:text-accent transition-colors">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-fg-secondary leading-relaxed line-clamp-3">
          {post.summary}
        </p>
      </div>
    </Link>
  )
}
