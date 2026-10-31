import { useState } from 'react'
import { YoutubeIcon, InstagramIcon } from '@/components/icons'
import { Badge } from '@/components/ui/badge'
import { initials, instagramHandle, youtubeHandle, type Member } from '@/data/roster'

type MemberCardProps = {
  member: Member
  index: number
}

export function MemberCard({ member, index }: MemberCardProps) {
  const [imageFailed, setImageFailed] = useState(false)
  const number = String(index + 1).padStart(2, '0')
  const yt = youtubeHandle(member.youtube)
  const ig = instagramHandle(member.instagram)

  return (
    <article className="group clip-card relative border border-border bg-card p-3 transition-all duration-200 hover:border-primary hover:shadow-hellfire">
      <div className="type-tactical absolute top-2 right-2 z-10 text-muted-foreground/30">
        {number} // PN
      </div>

      <div className="relative mb-3 h-72 w-full overflow-hidden bg-muted">
        {imageFailed ? (
          <div className="flex size-full items-center justify-center font-heading text-7xl text-muted-foreground/40">
            {initials(member.name)}
          </div>
        ) : (
          <img
            src={member.image}
            alt={member.name}
            loading="lazy"
            decoding="async"
            onError={() => setImageFailed(true)}
            className="size-full object-cover object-top grayscale transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0"
          />
        )}
        <Badge
          variant={index % 2 === 0 ? 'outline-gold' : 'outline-primary'}
          className="absolute bottom-2 left-2"
        >
          Operative #{number}
        </Badge>
      </div>

      <div className="px-1">
        <h3 className="type-headline-md truncate text-white uppercase transition-colors group-hover:text-primary">
          {member.name}
        </h3>
        <a
          href={member.youtube}
          target="_blank"
          rel="noreferrer"
          className="mt-1 block truncate text-xs text-muted-foreground hover:text-white"
        >
          {yt}
        </a>

        <div className="mt-3 flex items-center justify-between gap-2 border-t border-border pt-3">
          <a
            href={member.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label={`${member.name} on Instagram`}
            className="type-tactical flex min-w-0 items-center gap-1 text-muted-foreground hover:text-white"
          >
            <InstagramIcon className="size-4 shrink-0" />
            <span className="truncate">{ig}</span>
          </a>
          <a
            href={member.youtube}
            target="_blank"
            rel="noreferrer"
            aria-label={`${member.name} on YouTube`}
            className="type-tactical flex shrink-0 items-center gap-1 text-primary uppercase hover:underline"
          >
            <YoutubeIcon className="size-4" />
            YT →
          </a>
        </div>
      </div>
    </article>
  )
}
