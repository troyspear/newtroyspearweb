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
        <div className="absolute inset-0 animate-gradient-shift bg-[length:200%_200%] bg-gradient-to-br from-accent/20 via-accent/5 to-accent/15 dark:from-accent/25 dark:via-accent/8 dark:to-accent/10" />
        <div className="absolute top-[10%] left-[15%] w-48 h-48 rounded-full bg-accent/10 dark:bg-accent/15 blur-3xl animate-gradient-shift" />
        <div className="absolute bottom-[20%] right-[10%] w-64 h-64 rounded-full bg-accent/8 dark:bg-accent/12 blur-3xl animate-gradient-shift [animation-delay:3s]" />
        <div className="absolute inset-0 bg-gradient-to-t from-page via-transparent to-page/80" />
      </div>
    )
  }

  return <SplineBackground />
}
