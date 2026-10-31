import { CirclePlay } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { featuredStream, highlightVod } from '@/data/content'
import { SectionHeading } from './section-heading'

export function StreamsSection() {
  return (
    <section id="streams" className="border-y border-border bg-card px-6 py-16 md:px-14">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Live Stream & Content Hub"
          eyebrow={
            <span className="flex items-center gap-2 text-gold">
              <span className="size-2 animate-pulse rounded-full bg-gold" />
              Satellite downlink // feed broadcast
            </span>
          }
          aside={
            <div className="type-tactical flex items-center gap-2 uppercase">
              <span className="text-muted-foreground">Server: SEA-Jakarta-01</span>
              <span className="h-4 w-px bg-border" />
              <span className="text-primary">Latency: 14ms</span>
            </div>
          }
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Main player */}
          <div className="clip-chamfer border border-border bg-muted p-2 lg:col-span-8">
            <div className="group relative aspect-video w-full overflow-hidden bg-black">
              <img
                src={featuredStream.image}
                alt={featuredStream.imageAlt}
                className="size-full object-cover"
              />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <Badge variant="gold" className="px-2.5 py-1">
                  <span className="size-1.5 animate-ping rounded-full bg-black" /> Live
                </Badge>
                <Badge variant="outline" className="px-2.5 py-1 text-white">
                  {featuredStream.viewers} watching
                </Badge>
              </div>
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 border border-border bg-card/95 p-3 backdrop-blur-sm">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="type-headline-md text-base text-white uppercase sm:text-2xl">
                      {featuredStream.title}
                    </span>
                    <Badge>{featuredStream.tag}</Badge>
                  </div>
                  <p className="mt-0.5 hidden text-xs text-muted-foreground sm:block">
                    {featuredStream.subtitle}
                  </p>
                </div>
                <Button
                  nativeButton={false}
                  render={<a href={featuredStream.href} target="_blank" rel="noreferrer" />}
                  className="clip-chamfer h-auto shrink-0 rounded-none px-4 py-2 text-sm font-bold tracking-[0.08em] uppercase shadow-hard transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-primary"
                >
                  Expand
                </Button>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="flex flex-col gap-4 lg:col-span-4">
            <a
              href={highlightVod.href}
              target="_blank"
              rel="noreferrer"
              className="group block border border-border bg-secondary p-4 transition-colors hover:border-primary"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="type-tactical text-muted-foreground uppercase">
                  Archived VOD // Highlight
                </span>
                <span className="text-xs font-bold text-primary">{highlightVod.quality}</span>
              </div>
              <div className="relative mb-2 h-24 overflow-hidden border border-border bg-card">
                <img
                  src={highlightVod.image}
                  alt={highlightVod.imageAlt}
                  loading="lazy"
                  className="size-full object-cover opacity-80 transition-all group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <CirclePlay className="size-8 text-white" />
                </div>
              </div>
              <div className="font-heading text-sm tracking-[0.03em] text-white uppercase">
                {highlightVod.title}
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{highlightVod.meta}</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
