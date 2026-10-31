import { Network } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { events, type EventStatus } from '@/data/content'
import { cn } from '@/lib/utils'
import { SectionHeading } from './section-heading'

const statusStyles: Record<
  EventStatus,
  { border: string; date: string; label: string; badge: 'outline' | 'gold' }
> = {
  closed: { border: 'border-primary', date: 'text-gold', label: 'Reg Closed', badge: 'outline' },
  live: { border: 'border-gold', date: 'text-white', label: 'Live Stage', badge: 'gold' },
  upcoming: {
    border: 'border-muted-foreground',
    date: 'text-muted-foreground',
    label: 'Upcoming',
    badge: 'outline',
  },
}

export function EventWall() {
  return (
    <section id="community" className="relative px-6 py-16 md:px-14">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Event Wall"
        />

        <div className="clip-chamfer relative overflow-hidden border border-border bg-card p-6">
          <div className="pointer-events-none absolute top-0 right-0 size-32 bg-primary/10 blur-2xl" />
          <div className="mb-4 flex items-center justify-between gap-4 border-b border-border pb-3">
            <span className="type-tactical text-primary uppercase">
              event schedule
            </span>
            <span className="type-tactical text-muted-foreground uppercase">
              Oct 2025
            </span>
          </div>
          <h3 className="type-headline-md mb-4 text-white uppercase">
            Community Clashes
          </h3>

          <ul className="space-y-3">
            {events.map((event) => {
              const s = statusStyles[event.status]
              return (
                <li
                  key={event.title}
                  className={cn(
                    'flex items-center justify-between gap-4 border-l-4 bg-muted p-3',
                    s.border
                  )}
                >
                  <div className="min-w-0">
                    <div className="font-heading text-base tracking-[0.03em] text-white uppercase">
                      {event.title}
                    </div>
                    <div className="text-xs text-muted-foreground">{event.description}</div>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-1 text-right">
                    <div className={cn('type-headline-md uppercase', s.date)}>{event.date}</div>
                    <Badge
                      variant={s.badge}
                      className={cn(event.status === 'closed' && 'text-white')}
                    >
                      {s.label}
                    </Badge>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
