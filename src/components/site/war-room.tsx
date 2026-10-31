export function WarRoom() {
  return (
    <section id="war-room" className="border-t border-border bg-background px-6 py-16 md:px-14">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mx-auto mb-4 h-1 w-12 bg-primary" />
        <h2 className="type-headline-xl mb-4 text-white uppercase">
          About Party Neraka
        </h2>
        <p className="mb-6 text-base leading-relaxed text-muted-foreground">
          Party Neraka was born in 2023 from late night ranked losses, unfiltered laughs, and the
          raw refusal to fit sanitized esports team guidelines. We build for the underdogs, the
          aggressive shooters, and the street creators who play till sunrise. No corporate sponsors
          dictate our voice. Welcome to the squad.
        </p>
        <div className="clip-chamfer inline-flex flex-wrap items-center justify-center gap-4 border border-border bg-card px-6 py-3">
          <span className="type-tactical text-primary uppercase">Official comm link:</span>
          <a href="mailto:hq@partyneraka.gg" className="font-mono text-sm text-white hover:underline">
            hq@partyneraka.gg
          </a>
        </div>
      </div>
    </section>
  )
}
