import { Fragment } from 'react'
import { Radio } from 'lucide-react'
import { tickerItems, type TickerTone } from '@/data/content'
import { cn } from '@/lib/utils'

const toneClass: Record<TickerTone, string> = {
  primary: 'text-primary',
  gold: 'text-gold',
  muted: '',
}

function TickerRun({ hidden }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-6 pr-6" aria-hidden={hidden || undefined}>
      <span className="flex items-center gap-1 font-bold text-primary">
        <Radio className="size-4" /> Live Right Now
      </span>
      {tickerItems.map((item) => (
        <Fragment key={item.text}>
          <span className="text-border">//</span>
          <span className={cn(toneClass[item.tone])}>{item.text}</span>
        </Fragment>
      ))}
      <span className="text-border">//</span>
    </div>
  )
}

export function Ticker() {
  return (
    <div className="flex items-center overflow-hidden border-y border-border bg-card py-2">
      <div className="type-tactical flex w-max animate-marquee whitespace-nowrap text-muted-foreground uppercase hover:[animation-play-state:paused]">
        <TickerRun />
        <TickerRun hidden />
      </div>
    </div>
  )
}
