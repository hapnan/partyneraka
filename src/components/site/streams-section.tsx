import { useState } from 'react'
import { videoCategories, videos } from '@/data/content'
import { cn } from '@/lib/utils'
import { SectionHeading } from './section-heading'
import { VideoCard } from './video-card'

type Filter = (typeof videoCategories)[number]

export function StreamsSection() {
  const [filter, setFilter] = useState<Filter>('All')
  // const liveCount = videos.filter((v) => v.live).length

  const visible = videos.filter((video) => {
    if (filter === 'All') return true
    if (filter === 'Live') return Boolean(video.live)
    return video.category === filter
  })

  return (
    <section id="streams" className="border-y border-border bg-card px-6 py-16 md:px-14">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Live Stream & Content Hub"
          className="mb-6"
          aside={
            <div className="type-tactical flex items-center gap-2 uppercase">
              <span className="text-muted-foreground">Server: SEA-Jakarta-01</span>
              <span className="h-4 w-px bg-border" />
              <span className="text-primary">Latency: 14ms</span>
            </div>
          }
        />

        {/* Category chips */}
        <div
          role="toolbar"
          aria-label="Filter videos"
          className="-mx-6 mb-8 flex gap-3 overflow-x-auto px-6 pb-2 [scrollbar-width:none] md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden"
        >
          {videoCategories.map((category) => {
            const active = filter === category
            return (
              <button
                key={category}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(category)}
                className={cn(
                  'flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-semibold whitespace-nowrap transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring',
                  active
                    ? 'bg-white text-background'
                    : 'bg-muted text-white hover:bg-border'
                )}
              >
                {category === 'Live' && (
                  <span className={cn('size-2 rounded-full', active ? 'bg-primary' : 'bg-primary animate-pulse')} />
                )}
                {category}
              </button>
            )
          })}
        </div>

        {visible.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visible.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        ) : (
          <div className="clip-chamfer border border-dashed border-border bg-muted/40 px-6 py-16 text-center">
            <p className="type-headline-md text-white uppercase">No transmissions</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Nothing in “{filter}” right now. Check back after the next raid.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
