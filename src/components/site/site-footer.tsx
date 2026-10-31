import { navLinks } from '@/data/content'

const YEAR = new Date().getFullYear()

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="flex w-full flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row md:px-14">
        <div className="flex flex-col items-center md:items-start">
          <div className="type-headline-lg tracking-widest text-white uppercase">Party Neraka</div>
          <p className="type-tactical mt-2 text-center text-muted-foreground md:text-left">
            © {YEAR} PARTY NERAKA. ALL RIGHTS RESERVED. TACTICAL SUBVERSION
            SQUAD // 00-PN
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-end">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="type-tactical text-muted-foreground uppercase underline-offset-4 transition-all hover:text-primary hover:underline active:scale-95"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
