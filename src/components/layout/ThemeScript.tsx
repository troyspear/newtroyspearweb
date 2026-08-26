'use client'

import { useRef } from 'react'
import { useServerInsertedHTML } from 'next/navigation'

// Runs before first paint: picks the stored/system theme so there is no
// light-then-dark flash, and (home route, desktop, motion allowed) preloads the
// Spline scene bytes before the runtime chunk even exists so the 46KB
// .splinecode download overlaps hydration. No crossOrigin: the runtime fetches
// the scene with a plain same-origin `fetch()`, and a CORS-mode preload would
// not match it - Chrome would drop the preload and download the scene twice.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches);document.documentElement.classList.toggle('dark',d);document.documentElement.style.colorScheme=d?'dark':'light';if(location.pathname!=='/')return;var w=window.matchMedia('(min-width:768px)').matches;var rm=window.matchMedia('(prefers-reduced-motion:reduce)').matches;var sd=navigator.connection&&navigator.connection.saveData;if(w&&!rm&&!sd){var l=document.createElement('link');l.rel='preload';l.as='fetch';l.fetchPriority='high';l.href=d?'/models/dark-scene.splinecode':'/models/light-scene.splinecode';document.head.appendChild(l)}}catch(e){}})()`

// The callback only ever runs during the server flush, so the <script> element
// never exists in a client render pass - that is what React warns about
// ("Encountered a script tag while rendering React component"). The emitted tag
// still lands in <head> of the streamed HTML and executes synchronously.
export default function ThemeScript() {
  // Next calls the insert callback once per streamed chunk; without this guard
  // the same script is re-emitted for every flush (20x on the home route).
  // The ref is per component instance, so it resets on the next request.
  const emitted = useRef(false)
  useServerInsertedHTML(() => {
    if (emitted.current) return null
    emitted.current = true
    return <script dangerouslySetInnerHTML={{ __html: themeScript }} />
  })
  return null
}
