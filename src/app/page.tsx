import SplineBackgroundLoader from '@/components/home/SplineBackgroundLoader'
import HeroSection from '@/components/home/HeroSection'
import QuickLinks from '@/components/home/QuickLinks'
import ScrollingBanner from '@/components/home/ScrollingBanner'
import CompetitionCountdown from '@/components/home/CompetitionCountdown'

export default function Home() {
  return (
    <>
      <ScrollingBanner />
      <div className="relative pt-22">
        <SplineBackgroundLoader />
        <HeroSection />
      </div>
      <QuickLinks />
      <CompetitionCountdown />
    </>
  )
}
