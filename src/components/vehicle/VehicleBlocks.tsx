import Image from 'next/image'
import type { ReactNode } from 'react'

export interface Spec {
  label: string
  value: string
  detail?: string
}

export interface VehicleFigure {
  src: string
  alt: string
  caption: string
  width: number
  height: number
}

/** Small uppercase label that sits above a section title. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-display text-xs font-semibold text-accent uppercase tracking-wider">
      {children}
    </p>
  )
}

export function SectionTitle({
  eyebrow,
  title,
  intro,
  id,
}: {
  eyebrow: string
  title: string
  intro?: string
  id?: string
}) {
  return (
    <div id={id} className="scroll-mt-28 mb-8">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-2 font-display text-2xl sm:text-3xl font-light text-fg tracking-tight">
        {title}
      </h2>
      {intro && (
        <p className="mt-3 text-base text-fg-secondary leading-relaxed max-w-3xl">{intro}</p>
      )}
    </div>
  )
}

export function SpecGrid({ specs }: { specs: Spec[] }) {
  return (
    <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {specs.map((spec) => (
        <div
          key={spec.label}
          className="rounded-xl border border-border bg-elevated p-4 shadow-sm"
        >
          <dt className="text-xs font-semibold text-fg-muted uppercase tracking-wider">
            {spec.label}
          </dt>
          <dd className="mt-1.5 text-base font-medium text-fg">{spec.value}</dd>
          {spec.detail && (
            <dd className="mt-1 text-sm text-fg-secondary leading-snug">{spec.detail}</dd>
          )}
        </div>
      ))}
    </dl>
  )
}

/**
 * CAD renders and diagrams from the TDR are drawn on white, so the frame stays
 * white in dark mode too rather than showing a hard white box on a dark card.
 */
export function Figure({ figure, className = '' }: { figure: VehicleFigure; className?: string }) {
  return (
    <figure className={className}>
      <div className="h-60 rounded-xl border border-border bg-white p-3 flex items-center justify-center">
        <Image
          src={figure.src}
          alt={figure.alt}
          width={figure.width}
          height={figure.height}
          className="max-h-full w-auto object-contain"
          sizes="(max-width: 768px) 100vw, 480px"
        />
      </div>
      <figcaption className="mt-2 text-sm text-fg-muted">{figure.caption}</figcaption>
    </figure>
  )
}

/** Boxed content card - judges asked for text boxes to guide the eye. */
export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-border bg-elevated p-6 sm:p-7 shadow-sm ${className}`}>
      {children}
    </div>
  )
}
