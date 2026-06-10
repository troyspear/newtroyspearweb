import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { sponsors } from '@/lib/data/sponsors'

// Monochrome traced versions of each sponsor logo (fill="currentColor").
// Rendered as CSS masks so the color follows the theme: dark gray in light
// mode, white in dark mode. Aspect ratios come from each SVG's viewBox.
const monoLogos: Record<string, { src: string; aspect: number }> = {
  'Water Linked': { src: '/images/sponsors/svg/waterlinked.svg', aspect: 1280 / 320 },
  'SimScale': { src: '/images/sponsors/svg/simscale.svg', aspect: 1280 / 226 },
  'Onshape': { src: '/images/sponsors/svg/onshape.svg', aspect: 1280 / 286 },
  'Blue Robotics': { src: '/images/sponsors/svg/bluerobotics.svg', aspect: 1280 / 244 },
  'Blue Trail Engineering': { src: '/images/sponsors/svg/bluetrail.svg', aspect: 940 / 214 },
}

// The scroll keyframes translate by -50%, so the track must be two identical
// halves. Each half repeats the sponsor set so a half is always wider than
// the viewport and the loop has no visible gap.
const REPEATS_PER_HALF = 3

function LogoSet({ hidden }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={hidden}>
      {Array.from({ length: REPEATS_PER_HALF }).flatMap((_, rep) =>
        sponsors.map((sponsor) => {
          const mono = monoLogos[sponsor.name]
          if (!mono) return null
          const mask = `url(${mono.src})`
          return (
            <a
              key={`${rep}-${sponsor.name}`}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-8 sm:px-10 opacity-60 hover:opacity-100 transition-opacity"
              tabIndex={hidden ? -1 : undefined}
              aria-label={sponsor.name}
            >
              <span
                role="img"
                aria-label={sponsor.name}
                className="block h-7 sm:h-9 bg-zinc-700 dark:bg-white"
                style={{
                  aspectRatio: mono.aspect,
                  maskImage: mask,
                  WebkitMaskImage: mask,
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskSize: 'contain',
                  WebkitMaskSize: 'contain',
                  maskPosition: 'center',
                  WebkitMaskPosition: 'center',
                }}
              />
            </a>
          )
        }),
      )}
    </div>
  )
}

export default function SponsorMarquee() {
  return (
    <section className="px-5 sm:px-8 py-14 border-t border-border-subtle">
      <h2 className="font-display text-sm font-medium text-fg-muted uppercase tracking-wide text-center mb-10">
        Supported By
      </h2>
      <div
        role="marquee"
        aria-label="Our sponsors"
        className="overflow-hidden"
      >
        <div className="flex w-max animate-scroll-reverse">
          <LogoSet />
          <LogoSet hidden />
        </div>
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/sponsors"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:opacity-70 transition-opacity"
        >
          Become a sponsor <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  )
}
