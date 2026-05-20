'use client'

import dynamic from 'next/dynamic'

const SplineBackground = dynamic(() => import('./SplineBackground'), {
  ssr: false,
})

export default function SplineBackgroundLoader() {
  return <SplineBackground />
}
