import { Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[85vh] items-center justify-center overflow-hidden border-b border-border px-6 py-16 md:px-14"
    >
      {/* Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-5 select-none"
      >
        <span className="font-heading text-[120px] leading-none tracking-tighter whitespace-nowrap text-white uppercase md:text-[220px]">
          Party Neraka
        </span>
      </div>

      {/* Chalk doodles */}
      <div aria-hidden="true" className="pointer-events-none absolute top-12 left-10 z-0 hidden text-muted-foreground/20 lg:block">
        <svg fill="none" height="180" width="180" stroke="currentColor" strokeWidth="2" viewBox="0 0 100 100">
          <line x1="10" x2="30" y1="10" y2="30" />
          <line x1="30" x2="10" y1="10" y2="30" />
          <circle cx="60" cy="20" r="10" />
          <path d="M70 50 L90 50 L80 70 Z" />
          <path d="M10 80 Q 40 60 70 85" strokeDasharray="4 2" />
        </svg>
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute right-12 bottom-10 z-0 hidden text-primary/20 lg:block">
        <svg fill="none" height="140" width="140" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 100 100">
          <polyline points="20,10 60,10 40,50 80,50 30,90 45,55 25,55" />
        </svg>
      </div>

      <div className="relative z-20 mx-auto flex max-w-5xl flex-col items-center text-center">

        <h1 className="type-display max-w-4xl text-balance text-white uppercase drop-shadow-hellfire">
          Welcome To Party Neraka
        </h1>

        <p className="mt-4 max-w-2xl text-base text-balance text-muted-foreground">
          Underground streamer locker room engineered for unapologetic attitude, high-octane FPS
          combat, and midnight banter. No corporate polish. Pure raw subculture.
        </p>

        <div className="mt-10 flex w-full flex-wrap items-center justify-center gap-4">
          <Button
            nativeButton={false}
            render={<a href="#streams" />}
            variant="outline"
            className="clip-chamfer h-auto gap-2 rounded-none border-gold bg-card px-8 py-4 font-heading text-2xl font-normal tracking-wide text-gold uppercase hover:bg-gold hover:text-gold-foreground dark:border-gold dark:bg-card dark:hover:bg-gold"
          >
            <Play className="size-6 fill-current" />
            Watch Streams
          </Button>
          <Button
            nativeButton={false}
            render={<a href="#roster" />}
            variant="outline"
            className="clip-chamfer h-auto rounded-none border-border bg-transparent px-6 py-4 font-heading text-2xl font-normal tracking-wide text-white uppercase hover:border-white hover:bg-transparent hover:text-white dark:bg-transparent dark:hover:bg-transparent"
          >
            Explore Roster
          </Button>
        </div>
      </div>
    </section>
  )
}
