'use client'

import Spline from '@splinetool/react-spline'

const LIGHT_SCENE = 'https://prod.spline.design/5Msated5udqyzEIg/scene.splinecode'
const DARK_SCENE = 'https://prod.spline.design/k4H6sfDMY1-R5B52/scene.splinecode'

export default function SplineBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 dark:hidden">
        <Spline scene={LIGHT_SCENE} style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 hidden dark:block">
        <Spline scene={DARK_SCENE} style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  )
}
