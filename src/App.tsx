import { EventWall } from '@/components/site/event-wall'
import { Hero } from '@/components/site/hero'
import { MerchSection } from '@/components/site/merch-section'
import { RosterSection } from '@/components/site/roster-section'
import { SiteFooter } from '@/components/site/site-footer'
import { SiteHeader } from '@/components/site/site-header'
import { StreamsSection } from '@/components/site/streams-section'
import { Ticker } from '@/components/site/ticker'
import { WarRoom } from '@/components/site/war-room'

function App() {
  return (
    <>
      <SiteHeader />
      <main className="relative overflow-hidden bg-grid-tactical pt-13">
        <Hero />
        <Ticker />
        <RosterSection />
        <StreamsSection />
        <EventWall />
        <MerchSection />
        <WarRoom />
      </main>
      <SiteFooter />
    </>
  )
}

export default App
