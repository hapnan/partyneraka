import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { roster } from '@/data/roster'
import { MemberCard } from './member-card'
import { SectionHeading } from './section-heading'

const INITIAL_COUNT = 8

export function RosterSection() {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? roster : roster.slice(0, INITIAL_COUNT)

  return (
    <section id="roster" className="relative px-6 py-16 md:px-14">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          bordered
          title="The Roster"
          eyebrow={
            <span className="text-gold">
              {roster.length} operatives // dossiers declassified
            </span>
          }
          aside={
            <p className="max-w-md text-sm text-muted-foreground">
              Trading-card dossiers of Party Neraka core founders, creators, and combatants. Hover
              each operative to decrypt telemetry.
            </p>
          }
        />

        <div id="roster-grid" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((member, i) => (
            <MemberCard key={member.name} member={member} index={i} />
          ))}
        </div>

        {roster.length > INITIAL_COUNT && (
          <div className="mt-10 flex justify-center">
            <Button
              variant="outline"
              aria-expanded={expanded}
              aria-controls="roster-grid"
              onClick={() => setExpanded((v) => !v)}
              className="clip-chamfer h-auto gap-2 rounded-none border-border bg-card px-6 py-3 font-heading text-xl font-normal tracking-wide text-white uppercase shadow-hard-sm hover:border-primary hover:bg-primary hover:text-white dark:bg-card dark:hover:bg-primary"
            >
              {expanded ? 'Collapse Roster' : `Deploy Full Roster (${roster.length})`}
              <ChevronDown
                className={`size-5 transition-transform ${expanded ? 'rotate-180' : ''}`}
              />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
