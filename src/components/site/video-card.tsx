import { useState } from 'react'
import { Play, Radio } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import type { Video } from '@/data/content'
import { initials, youtubeHandle } from '@/data/roster'

function Thumbnail({ video }: { video: Video }) {
  const [failed, setFailed] = useState(false)
  const src = video.thumbnail ?? video.channel.image
  const generated = !video.thumbnail

  return (
    <>
      {failed ? (
        <div className="flex size-full items-center justify-center bg-muted font-heading text-6xl text-muted-foreground/30">
          {initials(video.channel.name)}
        </div>
      ) : (
        <img
          src={src}
          alt=""
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className={
            generated
              ? 'absolute inset-y-0 right-0 h-full w-3/5 object-cover object-[center_20%] transition-transform duration-300 group-hover:scale-105'
              : 'size-full object-cover transition-transform duration-300 group-hover:scale-105'
          }
        />
      )}

      {/* Generated, YouTube-style thumbnail: photo on the right, punchy title on the left */}
      {generated && !failed && (
        <>
          <div className="absolute inset-0 bg-linear-to-r from-background via-background/85 to-transparent" />
          <div className="absolute inset-0 bg-grid-tactical opacity-60" />
          <div className="absolute inset-y-0 left-0 flex w-3/5 flex-col justify-center gap-1 p-4">
            <span className="type-tactical text-primary uppercase">Party Neraka</span>
            <span className="font-heading text-2xl leading-none tracking-wide text-white uppercase drop-shadow-hellfire sm:text-3xl">
              {video.thumbText ?? video.channel.name}
            </span>
          </div>
        </>
      )}
    </>
  )
}

export function VideoCard({ video }: { video: Video }) {
  const { channel } = video
  const handle = youtubeHandle(channel.youtube)

  return (
    <article className="group flex flex-col">
      <a
        href={channel.youtube}
        target="_blank"
        rel="noreferrer"
        aria-label={`${video.title} — ${channel.name}`}
        className="relative block aspect-video overflow-hidden rounded-lg border border-border bg-muted transition-[border-color,box-shadow] duration-200 group-hover:border-primary group-hover:shadow-hellfire"
      >
        <Thumbnail video={video} />

        {/* Hover play affordance */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
          <span className="flex size-12 scale-75 items-center justify-center rounded-full bg-primary text-white opacity-0 shadow-hard-sm transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
            <Play className="size-5 translate-x-px fill-current" />
          </span>
        </div>

        {/* Duration / live pill (bottom-right, like YouTube) */}
        {video.live ? (
          <span className="absolute right-2 bottom-2 flex items-center gap-1 rounded-sm bg-primary px-1.5 py-0.5 text-xs font-bold tracking-wide text-white uppercase">
            <Radio className="size-3.5" />
            Live
          </span>
        ) : (
          video.duration && (
            <span className="absolute right-2 bottom-2 rounded-sm bg-black/85 px-1.5 py-0.5 text-xs font-semibold text-white tabular-nums">
              {video.duration}
            </span>
          )
        )}
      </a>

      <div className="mt-3 flex gap-3">
        <a
          href={channel.youtube}
          target="_blank"
          rel="noreferrer"
          aria-label={`${channel.name} channel`}
          className="shrink-0"
        >
          <Avatar className={video.live ? 'ring-2 ring-primary ring-offset-2 ring-offset-card' : undefined}>
            <AvatarImage src={channel.image} alt={channel.name} />
            <AvatarFallback>{initials(channel.name)}</AvatarFallback>
          </Avatar>
        </a>

        <div className="min-w-0 flex-1">
          <h3 className="line-clamp-2 text-[15px] leading-snug font-semibold text-white transition-colors group-hover:text-primary">
            <a href={channel.youtube} target="_blank" rel="noreferrer">
              {video.title}
            </a>
          </h3>
          <a
            href={channel.youtube}
            target="_blank"
            rel="noreferrer"
            title={handle}
            className="mt-1 block truncate text-[13px] text-muted-foreground transition-colors hover:text-white"
          >
            {channel.name}
          </a>
          {video.live ? (
            <div className="mt-0.5 flex items-center gap-2 text-[13px] text-muted-foreground">
              <span>{video.live.viewers} watching</span>
              <span className="rounded-sm bg-primary/15 px-1 py-px text-[10px] font-bold tracking-wider text-primary uppercase">
                Live
              </span>
            </div>
          ) : (
            <div className="mt-0.5 text-[13px] text-muted-foreground">
              {video.views}
              <span aria-hidden="true" className="mx-1">
                •
              </span>
              {video.published}
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
