import { useState } from 'react'
import { Bell, Menu, ShoppingBag, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { navLinks } from '@/data/content'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const IMG = 'https://data.hapnanarsad.id/partyNeraka/'
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-card/95 shadow-[0_4px_20px_rgba(0,0,0,0.8)] backdrop-blur-md">
      <div className="flex w-full items-center justify-between gap-4 px-6 py-2 md:px-14">
        <a href="#hero" className="group flex items-center gap-2" aria-label="Party Neraka home">
          <span className="clip-chamfer flex size-8 items-center justify-center bg-primary shadow-hard-sm">
            <img
              src={`${IMG}Logo_NoBG.png`}
              alt="Party Neraka Logo"
              className="size-5 object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </span>
          <span className="type-tactical text-muted-foreground/70">
          </span>
          <span className="type-headline-md tracking-wider text-white uppercase italic">
            Party Neraka
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'type-label-lg pb-1 uppercase transition-colors duration-150 active:translate-y-0.5',
                i === 0
                  ? 'border-b-2 border-primary text-white'
                  : 'border-b-2 border-transparent text-muted-foreground hover:text-primary'
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="clip-chamfer hidden items-center gap-2 border border-gold bg-card px-3 py-1 shadow-halo sm:flex">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-gold" />
            </span>
            <span className="type-tactical whitespace-nowrap text-gold">LIVE BROADCAST</span>
          </div>

          <div className="flex items-center gap-1 text-muted-foreground">
            <button
              type="button"
              aria-label="Notifications"
              className="p-1 transition-colors hover:text-primary"
            >
              <Bell className="size-5" />
            </button>
            <a href="#merch" aria-label="Merch" className="p-1 transition-colors hover:text-primary">
              <ShoppingBag className="size-5" />
            </a>
          </div>

          <Button
            nativeButton={false}
            render={<a href="#streams" />}
            className="clip-chamfer hidden h-auto rounded-none px-4 py-2 text-sm font-bold tracking-[0.08em] uppercase shadow-hard transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-primary md:inline-flex"
          >
            Watch Live
          </Button>

          <button
            type="button"
            className="p-1 text-white lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-card px-6 py-4 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="type-label-lg block border-l-2 border-transparent py-2 pl-3 text-muted-foreground uppercase hover:border-primary hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
