'use client'

import { cn } from '@/lib/utils'
import { categoryLabels } from '@/lib/data/blog-posts'

interface CategoryFilterProps {
  selected: string | null
  onSelect: (category: string | null) => void
}

export default function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex gap-4">
      <button
        onClick={() => onSelect(null)}
        className={cn(
          'text-xs transition-colors',
          selected === null ? 'text-fg font-medium' : 'text-fg-muted hover:text-fg'
        )}
      >
        All
      </button>
      {Object.entries(categoryLabels).map(([key, label]) => (
        <button
          key={key}
          onClick={() => onSelect(key === selected ? null : key)}
          className={cn(
            'text-xs transition-colors',
            selected === key ? 'text-fg font-medium' : 'text-fg-muted hover:text-fg'
          )}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
