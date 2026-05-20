import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({ title, subtitle, className, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={cn(align === 'center' ? 'text-center' : 'text-left', className)}>
      <h2 className="font-display text-2xl sm:text-3xl font-light text-fg tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-fg-muted text-sm max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}
