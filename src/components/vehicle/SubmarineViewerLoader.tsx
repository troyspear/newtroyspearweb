'use client'

import dynamic from 'next/dynamic'

const SubmarineViewer = dynamic(() => import('./SubmarineViewer'), {
  ssr: false,
})

export default function SubmarineViewerLoader() {
  return <SubmarineViewer />
}
