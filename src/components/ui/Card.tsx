import { cn } from '@/lib/utils'
import { ReactNode, HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
  glass?: boolean
  hover?: boolean
}

export default function Card({ children, className, glass = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        glass
          ? 'bg-glass backdrop-blur-xl border border-glass-border'
          : 'bg-elevated border border-border-subtle',
        'rounded-xl p-5',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
