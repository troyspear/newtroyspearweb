'use client'

import { useState, useEffect } from 'react'
import Spline from '@splinetool/react-spline'

const LIGHT_SCENE = '/models/light-scene.splinecode'
const DARK_SCENE = '/models/dark-scene.splinecode'

export default function SplineBackground() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false
    return document.documentElement.classList.contains('dark')
  })

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))

    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'))
    })
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })
    return () => observer.disconnect()
  }, [])

  const scene = isDark ? DARK_SCENE : LIGHT_SCENE

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <Spline key={scene} scene={scene} style={{ width: '100%', height: '100%' }} />
    </div>
  )
}
