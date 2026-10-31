import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow?: ReactNode
  title: ReactNode
  aside?: ReactNode
  bordered?: boolean
  className?: string
}

export function SectionHeading({ eyebrow, title, aside, bordered, className }: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end',
        bordered && 'border-b border-border pb-4',
        className
      )}
    >
      <div>
        {eyebrow && (
          <div className="type-tactical flex items-center gap-2 uppercase">{eyebrow}</div>
        )}
        <h2 className="type-headline-xl mt-1 text-white uppercase">{title}</h2>
      </div>
      {aside}
    </div>
  )
}
