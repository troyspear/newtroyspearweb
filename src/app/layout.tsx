import type { Metadata } from 'next'
import localFont from 'next/font/local'
import ClientShell from '@/components/layout/ClientShell'
import './globals.css'

const nbInternational = localFont({
  src: '../../public/fonts/NBInternationalRegularWebfont.woff2',
  weight: '400',
  style: 'normal',
  display: 'swap',
  variable: '--font-nb-international',
})

export const metadata: Metadata = {
  title: {
    default: 'Troy SPEAR | Underwater Robotics',
    template: '%s | Troy SPEAR',
  },
  description:
    'Troy High School\'s underwater robotics team competing in the RoboNation RoboSub competition. Designing, building, and programming autonomous underwater vehicles.',
  keywords: ['RoboSub', 'underwater robotics', 'AUV', 'Troy High School', 'SPEAR', 'RoboNation'],
}

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${nbInternational.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  )
}
