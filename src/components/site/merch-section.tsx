import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { merch, type MerchBadgeTone } from '@/data/content'
import { SectionHeading } from './section-heading'

const badgeVariant: Record<MerchBadgeTone, 'default' | 'gold' | 'outline'> = {
  primary: 'default',
  gold: 'gold',
  muted: 'outline',
}

export function MerchSection() {
  return (
    <section id="merch" className="border-t border-border bg-card px-6 py-16 md:px-14">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          bordered
          title="Merch"
          aside={
            <div className="md:text-right">
              <span className="type-headline-md text-gold uppercase">Pre-Order Open</span>
              <p className="type-tactical text-muted-foreground uppercase">
                Ships worldwide // numbered editions
              </p>
            </div>
          }
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {merch.map((item) => (
            <article
              key={item.name}
              className="group clip-card flex flex-col border border-border bg-muted p-4 transition-all hover:border-primary"
            >
              <div className="relative mb-4 aspect-square w-full overflow-hidden bg-background">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <Badge variant={badgeVariant[item.badgeTone]} className="absolute top-2 left-2">
                  {item.badge}
                </Badge>
              </div>
              <div className="mb-1 flex items-center justify-between gap-2">
                <h3 className="font-heading text-lg tracking-[0.03em] text-white uppercase">
                  {item.name}
                </h3>
                <span className="font-heading text-lg tracking-[0.03em] whitespace-nowrap text-primary">
                  {item.price}
                </span>
              </div>
              <p className="mb-4 flex-1 text-xs text-muted-foreground">{item.description}</p>
              <Button
                variant="outline"
                className="clip-chamfer h-auto w-full rounded-none border-border bg-card py-2.5 font-heading text-sm font-normal tracking-[0.03em] text-white uppercase shadow-hard-sm hover:border-primary hover:bg-primary hover:text-white dark:bg-card dark:hover:bg-primary"
              >
                {item.cta}
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
