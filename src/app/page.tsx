import SplineBackgroundLoader from '@/components/home/SplineBackgroundLoader'
import HeroSection from '@/components/home/HeroSection'
import QuickLinks from '@/components/home/QuickLinks'
import HighlightsCarousel from '@/components/home/HighlightsCarousel'

export default function Home() {
  return (
    <>
      <div className="relative">
        <SplineBackgroundLoader />
        <HeroSection />
      </div>
      <QuickLinks />
      <HighlightsCarousel />
    </>
  )
}
