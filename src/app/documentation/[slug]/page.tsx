import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar } from 'lucide-react'
import { blogPosts, categoryLabels } from '@/lib/data/blog-posts'

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const post = blogPosts.find((p) => p.slug === slug)
    if (!post) return { title: 'Not Found' }
    return {
      title: post.title,
      description: post.summary,
    }
  })
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  const postIndex = blogPosts.findIndex((p) => p.slug === slug)
  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null
  const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null

  const paragraphs = post.content.split('\n\n')

  return (
    <div className="pt-20 pb-16">
      <article className="px-5 sm:px-8 py-16">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/documentation"
            className="inline-flex items-center gap-1.5 text-xs text-fg-muted hover:text-fg transition-colors mb-10"
          >
            <ArrowLeft className="w-3 h-3" />
            Back
          </Link>

          <div className="flex items-center gap-3 text-xs text-fg-muted mb-4">
            <span>{categoryLabels[post.category]}</span>
            <span>&middot;</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
          </div>

          <h1 className="font-display text-2xl sm:text-3xl font-light text-fg tracking-tight mb-4">
            {post.title}
          </h1>

          <p className="text-sm text-fg-secondary leading-relaxed mb-12">
            {post.summary}
          </p>

          <div className="space-y-4">
            {paragraphs.map((p, i) => {
              if (p.startsWith('## ')) {
                return (
                  <h2 key={i} className="text-base font-medium text-fg mt-8 mb-3">
                    {p.replace('## ', '')}
                  </h2>
                )
              }
              if (p.startsWith('- ')) {
                const items = p.split('\n').filter(Boolean)
                return (
                  <ul key={i} className="list-disc list-inside space-y-1 text-fg-muted text-sm">
                    {items.map((item, j) => (
                      <li key={j}>{item.replace(/^- \*\*(.+?)\*\*/, '$1').replace(/^- /, '')}</li>
                    ))}
                  </ul>
                )
              }
              if (p.startsWith('1. ')) {
                const items = p.split('\n').filter(Boolean)
                return (
                  <ol key={i} className="list-decimal list-inside space-y-1 text-fg-muted text-sm">
                    {items.map((item, j) => (
                      <li key={j}>{item.replace(/^\d+\. \*\*(.+?)\*\*/, '$1').replace(/^\d+\. /, '')}</li>
                    ))}
                  </ol>
                )
              }
              if (p.includes('|')) {
                const rows = p.split('\n').filter((r) => !r.match(/^\|[-\s|]+\|$/))
                return (
                  <div key={i} className="overflow-x-auto rounded-lg border border-border-subtle">
                    <table className="w-full text-sm">
                      <tbody>
                        {rows.map((row, j) => {
                          const cells = row.split('|').filter(Boolean).map((c) => c.trim())
                          return (
                            <tr key={j} className={j === 0 ? 'bg-surface text-fg font-medium' : 'text-fg-muted'}>
                              {cells.map((cell, k) => (
                                <td key={k} className="px-3 py-2 border-b border-border-subtle text-xs">{cell}</td>
                              ))}
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                )
              }
              return (
                <p key={i} className="text-sm text-fg-muted leading-relaxed">
                  {p}
                </p>
              )
            })}
          </div>

          <div className="mt-14 pt-6 border-t border-border-subtle flex justify-between">
            {prevPost ? (
              <Link
                href={`/documentation/${prevPost.slug}`}
                className="text-xs text-fg-muted hover:text-fg transition-colors"
              >
                &larr; {prevPost.title}
              </Link>
            ) : <span />}
            {nextPost ? (
              <Link
                href={`/documentation/${nextPost.slug}`}
                className="text-xs text-fg-muted hover:text-fg transition-colors text-right"
              >
                {nextPost.title} &rarr;
              </Link>
            ) : <span />}
          </div>
        </div>
      </article>
    </div>
  )
}
