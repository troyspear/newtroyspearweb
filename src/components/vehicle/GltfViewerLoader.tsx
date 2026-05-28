'use client'

import dynamic from 'next/dynamic'

const GltfViewer = dynamic(() => import('./GltfViewer'), { ssr: false })

export default function GltfViewerLoader({ url }: { url: string }) {
  return <GltfViewer url={url} />
}
