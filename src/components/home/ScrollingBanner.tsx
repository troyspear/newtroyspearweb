'use client'

import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { updates } from '@/lib/data/updates'

function UpdateSet({ setRef, hidden }: { setRef?: React.Ref<HTMLDivElement>; hidden?: boolean }) {
  return (
    <div ref={setRef} className="flex shrink-0" aria-hidden={hidden}>
      {updates.map((update) => (
        <Link
          key={update.id}
          href={`/documentation/${update.slug}`}
          className="shrink-0 flex items-center gap-2 px-6 py-1.5 text-xs text-fg hover:text-accent transition-colors whitespace-nowrap"
          tabIndex={hidden ? -1 : undefined}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
          <span className="font-medium">{update.title}</span>
          <span className="text-fg-muted">
            {new Date(update.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default function ScrollingBanner() {
  const viewportRef = useRef<HTMLDivElement>(null)
  const setRef = useRef<HTMLDivElement>(null)
  // Only loop (and therefore duplicate the posts) when a single set is wider
  // than the bar - otherwise the posts would visibly appear twice.
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const check = () => {
      const vp = viewportRef.current
      const set = setRef.current
      if (!vp || !set) return
      setScroll(set.scrollWidth > vp.clientWidth)
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <div
      role="marquee"
      aria-label="Recent updates"
      ref={viewportRef}
      className="fixed top-14 left-0 right-0 z-40 bg-page border-b border-accent/20 overflow-hidden"
    >
      <div className={`flex w-max ${scroll ? 'animate-scroll' : ''}`}>
        <UpdateSet setRef={setRef} />
        {scroll && <UpdateSet hidden />}
      </div>
    </div>
  )
}
