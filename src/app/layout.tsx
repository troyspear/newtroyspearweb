import type { Metadata } from 'next'
import localFont from 'next/font/local'
import ThemeScript from '@/components/layout/ThemeScript'
import ClientShell from '@/components/layout/ClientShell'
import { SITE_URL } from '@/lib/site'
import './globals.css'

const nbInternational = localFont({
  src: '../../public/fonts/NBInternationalRegularWebfont.woff2',
  weight: '400',
  style: 'normal',
  display: 'swap',
  variable: '--font-nb-international',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Troy SPEAR | Underwater Robotics',
    template: '%s | Troy SPEAR',
  },
  description:
    'Troy High School\'s underwater robotics team competing in the RoboNation RoboSub competition. Designing, building, and programming autonomous underwater vehicles.',
  keywords: ['RoboSub', 'underwater robotics', 'AUV', 'Troy High School', 'SPEAR', 'RoboNation'],
  icons: {
    icon: '/images/logo/troyspear.png',
    apple: '/images/logo/troyspear.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${nbInternational.variable}`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <ThemeScript />
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:px-4 focus:py-2 focus:bg-accent focus:text-page focus:rounded-lg focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  )
}
