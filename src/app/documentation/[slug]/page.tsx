import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar } from 'lucide-react'
import { blogPosts, categoryLabels, type BlogMedia } from '@/lib/data/blog-posts'

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

function BlogMediaItem({ item }: { item: BlogMedia }) {
  if (item.src) {
    return (
      <figure className="my-6">
        {item.type === 'video' ? (
          <div className="relative aspect-video rounded-xl overflow-hidden bg-surface border border-border-subtle">
            <iframe
              src={item.src}
              title={item.alt}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        ) : (
          <Image
            src={item.src}
            alt={item.alt}
            width={800}
            height={450}
            className="mx-auto h-auto w-auto max-h-96 rounded-xl border border-border-subtle"
            sizes="(max-width: 672px) 100vw, 672px"
          />
        )}
        {item.caption && (
          <figcaption className="mt-2 text-xs text-fg-muted text-center">{item.caption}</figcaption>
        )}
      </figure>
    )
  }

  return null
}

/** Renders **bold** runs inside a paragraph or list item. */
function Inline({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
        part.startsWith('**') && part.endsWith('**') ? (
          <strong key={i} className="font-semibold text-fg">{part.slice(2, -2)}</strong>
        ) : (
          part
        ),
      )}
    </>
  )
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const postIndex = blogPosts.findIndex((p) => p.slug === slug)
  if (postIndex === -1) notFound()

  const post = blogPosts[postIndex]
  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null
  const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null

  const paragraphs = post.content.split('\n\n')
  const media = post.media ?? []
  let mediaIndex = 0

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
              {new Date(post.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
          </div>

          <h1 className="font-display text-2xl sm:text-3xl font-light text-fg tracking-tight mb-4">
            {post.title}
          </h1>

          <p className="text-lg text-fg-secondary leading-relaxed mb-12">
            {post.summary}
          </p>

          <div className="space-y-4">
            {paragraphs.map((p, i) => {
              const elements: React.ReactNode[] = []

              if (p.startsWith('## ')) {
                if (mediaIndex < media.length) {
                  elements.push(<BlogMediaItem key={`media-${mediaIndex}`} item={media[mediaIndex]} />)
                  mediaIndex++
                }
                elements.push(
                  <h2 key={i} className="font-display text-xl font-medium text-fg mt-10 mb-3">
                    {p.replace('## ', '')}
                  </h2>
                )
                return elements
              }
              if (p.startsWith('- ') || p.startsWith('- [')) {
                const items = p.split('\n').filter(Boolean)
                elements.push(
                  <ul key={i} className="list-disc pl-5 space-y-1.5 text-fg-secondary text-base leading-relaxed">
                    {items.map((item, j) => (
                      <li key={j}><Inline text={item.replace(/^- \[.\] /, '').replace(/^- /, '')} /></li>
                    ))}
                  </ul>
                )
                return elements
              }
              if (p.startsWith('1. ')) {
                const items = p.split('\n').filter(Boolean)
                elements.push(
                  <ol key={i} className="list-decimal pl-5 space-y-1.5 text-fg-secondary text-base leading-relaxed">
                    {items.map((item, j) => (
                      <li key={j}><Inline text={item.replace(/^\d+\. /, '')} /></li>
                    ))}
                  </ol>
                )
                return elements
              }
              if (p.includes('|')) {
                const rows = p.split('\n').filter((r) => !r.match(/^\|[-\s|]+\|$/))
                elements.push(
                  <div key={i} className="overflow-x-auto rounded-lg border border-border-subtle">
                    <table className="w-full text-sm">
                      <tbody>
                        {rows.map((row, j) => {
                          const cells = row.split('|').filter(Boolean).map((c) => c.trim())
                          return (
                            <tr key={j} className={j === 0 ? 'bg-surface text-fg font-medium' : 'text-fg-secondary'}>
                              {cells.map((cell, k) => (
                                <td key={k} className="px-3 py-2 border-b border-border-subtle text-sm">{cell}</td>
                              ))}
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                )
                return elements
              }
              elements.push(
                <p key={i} className="text-base text-fg-secondary leading-relaxed">
                  <Inline text={p} />
                </p>
              )
              return elements
            })}

            {mediaIndex < media.length && (
              <div className="mt-8 space-y-4">
                {media.slice(mediaIndex).map((item, i) => (
                  <BlogMediaItem key={`remaining-media-${i}`} item={item} />
                ))}
              </div>
            )}
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
