'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const SplineBackground = dynamic(() => import('./SplineBackground'), {
  ssr: false,
})

const DESKTOP_BREAKPOINT = 768

export default function SplineBackgroundLoader() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= DESKTOP_BREAKPOINT)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  if (!isDesktop) {
    return (
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 animate-gradient-shift bg-[length:200%_200%] bg-gradient-to-br from-accent/15 via-page to-accent/10 dark:from-accent/20 dark:via-page dark:to-accent/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-page via-transparent to-page/80" />
      </div>
    )
  }

  return <SplineBackground />
}
