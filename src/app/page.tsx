import HeroSection from '@/components/home/HeroSection'
import QuickLinks from '@/components/home/QuickLinks'
import ScrollingBanner from '@/components/home/ScrollingBanner'
import CompetitionCountdown from '@/components/home/CompetitionCountdown'
import MissionSection from '@/components/home/MissionSection'
import SponsorMarquee from '@/components/home/SponsorMarquee'

export default function Home() {
  return (
    <>
      <ScrollingBanner />
      {/* Transparent hero - the persistent Spline background (rendered in
          ClientShell, fixed behind everything) shows through here. */}
      <div className="relative pt-22">
        <HeroSection />
      </div>
      {/* Opaque wrapper so the fixed background doesn't bleed through the
          lower sections as the page scrolls. */}
      <div className="relative bg-page">
        <QuickLinks />
        <MissionSection />
        <SponsorMarquee />
        <CompetitionCountdown />
      </div>
    </>
  )
}
