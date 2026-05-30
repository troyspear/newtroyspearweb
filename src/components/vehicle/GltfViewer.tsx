'use client'

import { Suspense, useEffect } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, Center, Bounds, useGLTF } from '@react-three/drei'
import { Anchor } from 'lucide-react'
import { useLazyCanvas } from './useLazyCanvas'

function GltfModel({ url }: { url: string }) {
  const { scene } = useGLTF(url)
  const invalidate = useThree((s) => s.invalidate)
  useEffect(() => {
    invalidate()
  }, [scene, invalidate])
  return <primitive object={scene} />
}

function ViewerFallback({ label = 'Loading model…' }: { label?: string }) {
  return (
    <div className="w-full h-full flex items-center justify-center bg-surface">
      <div className="text-center">
        <Anchor className="w-8 h-8 text-fg-muted mx-auto mb-2 animate-pulse" />
        <p className="text-fg-muted text-xs">{label}</p>
      </div>
    </div>
  )
}

export default function GltfViewer({ url }: { url: string }) {
  const {
    containerRef,
    shouldMount,
    autoRotating,
    frameloop,
    dpr,
    handleStart,
    handleEnd,
  } = useLazyCanvas()

  useEffect(() => {
    return () => {
      try { useGLTF.clear(url) } catch {}
    }
  }, [url])

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/10] md:aspect-[16/9] rounded-xl overflow-hidden border border-border-subtle bg-surface"
    >
      {shouldMount ? (
        <Suspense fallback={<ViewerFallback />}>
          <Canvas
            camera={{ position: [2.5, 1.8, 2.5], fov: 45 }}
            dpr={dpr}
            gl={{ antialias: false, powerPreference: 'low-power' }}
            frameloop={frameloop}
            performance={{ min: 0.5 }}
          >
            <ambientLight intensity={0.6} />
            <hemisphereLight args={['#ffffff', '#1C2B4A', 0.6]} />
            <directionalLight position={[5, 6, 4]} intensity={1.0} />
            <directionalLight position={[-4, 2, -3]} intensity={0.4} color="#1C2B4A" />
            <Suspense fallback={null}>
              <Bounds fit clip observe margin={1.2}>
                <Center>
                  <GltfModel url={url} />
                </Center>
              </Bounds>
            </Suspense>
            <OrbitControls
              enablePan={false}
              autoRotate={autoRotating}
              autoRotateSpeed={0.6}
              minDistance={0.3}
              maxDistance={30}
              onStart={handleStart}
              onEnd={handleEnd}
            />
          </Canvas>
        </Suspense>
      ) : (
        <ViewerFallback label="3D model" />
      )}
      <div className="absolute bottom-3 left-3 text-[11px] text-fg-muted pointer-events-none">
        Drag to rotate &middot; Scroll to zoom
      </div>
    </div>
  )
}
