# Party Neraka — Official Community Portal

**English** | [Bahasa Indonesia](./README.id.md)

The official web portal for **Party Neraka**, an Indonesian streamer and gaming collective. It's a single-page site where you can meet the roster, browse streams and VODs, check upcoming community events, and see merch drops.

**Live:** https://pt.hapnanarsad.id

---

## Tech stack

| Area | Tools |
| --- | --- |
| UI | [shadcn/ui](https://ui.shadcn.com) (Base UI primitives, `base-nova` style), [Tailwind CSS v4](https://tailwindcss.com), [`cn`](https://github.com/shadcn-ui/cn), [lucide-react](https://lucide.dev) |
| Framework | [React 19](https://react.dev) + [React Compiler](https://react.dev/learn/react-compiler), [Vite 8](https://vite.dev) |
| Language | TypeScript 7 |
| Tooling | [Bun](https://bun.sh), [Oxlint](https://oxc.rs/docs/guide/usage/linter) |
| Hosting | [Cloudflare Workers](https://developers.cloudflare.com/workers/) (`cf` CLI + `@cloudflare/vite-plugin`) |

## Getting started

**Prerequisites:** [Bun](https://bun.sh) (v1.x).

```bash
bun install
bun run dev
```

## Scripts

| Command | Runs | Description |
| --- | --- | --- |
| `bun run dev` | `cf dev` | Start the local dev server (Vite + Cloudflare runtime) |
| `bun run build` | `tsc -b && cf build` | Type-check, then build for production into `dist/` |
| `bun run deploy` | `cf deploy` | Deploy the build to Cloudflare Workers |
| `bun run lint` | `oxlint` | Lint the project |
| `bun run preview` | `vite preview` | Preview the production build locally |

## Project structure

```text
.
├── cloudflare.config.ts      # Worker name, SPA fallback, custom domain
├── components.json           # shadcn/ui config (aliases → src/)
├── index.html                # HTML shell + Google Fonts (Anton, Space Grotesk)
├── vite.config.ts            # React, React Compiler, Tailwind, Cloudflare, "@" alias
└── src/
    ├── App.tsx               # Page composition (section order)
    ├── main.tsx              # React entry
    ├── index.css             # Tailwind + design tokens + custom utilities
    ├── components/
    │   ├── icons.tsx         # YouTube / Instagram brand icons
    │   ├── site/             # Page sections (header, hero, ticker, roster,
    │   │                     #   streams, event wall, merch, about, footer)
    │   └── ui/               # shadcn/ui components (button, badge, avatar)
    ├── data/
    │   ├── roster.ts         # Roster members + handle helpers
    │   └── content.ts        # Nav, ticker, videos, events, merch
    └── lib/
        └── utils.ts          # cn() helper
```

`@/*` resolves to `./src/*` (configured in `tsconfig.json`, `tsconfig.app.json` and `vite.config.ts`).

## Editing content

All site copy lives in `src/data/`, so you don't need to touch any components.

> [!NOTE]
> The videos, events, ticker and merch entries are currently **placeholder content** based on the original Stitch design. Replace them with real data when it's available.

### Roster — `src/data/roster.ts`

Each member is one entry in the `roster` array:

```ts
{
  name: 'Fandra Octoramonth',
  youtube: 'https://www.youtube.com/@FandraOcto',
  instagram: 'https://www.instagram.com/octoramonth/',
  image: `${IMG}Fandra_Octoramont.jpg`, // hosted on data.hapnanarsad.id
}
```

- The display handles (`@FandraOcto`, `@octoramonth`) come from the URLs automatically.
- Array order is display order. The first 8 members show by default, and the rest appear after clicking **Deploy Full Roster**.
- If an image fails to load, the card shows the member's initials instead.

### Videos — `src/data/content.ts`

The Streams section is a YouTube-style grid with category chips. Each `Video` looks like this:

```ts
{
  id: 'petra-144fps',
  title: 'Petra Clutch Highlight at 144FPS',
  channel: getMember('KhoPetra'),   // must match a roster `name` exactly
  category: 'Highlights',           // one of `videoCategories` (except All/Live)
  duration: '08:15',                // VOD only
  views: '51K views',
  published: '2 days ago',
  // live: { viewers: '3,108' },    // set this instead for a live stream
  // thumbnail: 'https://…',        // optional custom thumbnail
  thumbText: '144FPS Clutch',       // overlay text for the generated thumbnail
}
```

- `getMember()` throws if the name isn't in the roster, so typos show up early.
- If there's no `thumbnail`, the card builds one from the creator's roster photo and `thumbText`.
- Cards currently link to the creator's YouTube channel.

### Events, ticker, merch and nav

These are also in `src/data/content.ts`: `events` (status: `closed` / `live` / `upcoming`), `tickerItems`, `merch` and `navLinks`.

## Theming

Design tokens live in `src/index.css`:

- **Palette:** the Stitch colours are mapped onto shadcn's CSS variables (`--background`, `--primary`, `--border`, `--muted-foreground`, and so on). The site is dark-only (`<html class="dark">`).
- **Brand extras:** `gold`, `gold-foreground`, `blush` and `raised` (for example `text-gold`, `bg-raised`).
- **Shadows and animation:** `shadow-hard`, `shadow-hard-sm`, `shadow-hellfire`, `shadow-halo`, `drop-shadow-hellfire`, `animate-marquee`.
- **Shape utilities:** `clip-chamfer`, `clip-card`, `clip-tag`, `bg-grid-tactical`.
- **Type scale:** `type-display`, `type-headline-xl`, `type-headline-lg`, `type-headline-md`, `type-label-lg`, `type-label-md`, `type-tactical`.
- **Fonts:** Anton (`font-heading`) and Space Grotesk (`font-sans`), loaded from Google Fonts in `index.html`.

## Adding shadcn/ui components

```bash
bunx shadcn@latest add <component>
```

Components are written to `src/components/ui/` through the `@/*` alias defined in `components.json`.

## Deployment

The site is deployed as a static SPA on Cloudflare Workers:

```bash
bun run build
bun run deploy
```

Configuration is in `cloudflare.config.ts`: worker `party_neraka`, `single-page-application` not-found handling, and the custom domain `pt.hapnanarsad.id`.

## Development notes

- **React Compiler** is enabled through `@rolldown/plugin-babel` with `reactCompilerPreset()`. It makes dev and build slower. Avoid impure calls such as `new Date()` during render, because the compiler skips components that make them.
- **Oxlint:** for stricter checks, you can enable type-aware rules by installing `oxlint-tsgolint` and setting `"options": { "typeAware": true }` in `.oxlintrc.json`.

## Credits

- UI design generated with [Stitch](https://stitch.withgoogle.com): project *Process Workflow Engine*, screen *Party Neraka – Official Community Portal*.
- Roster photos and logo are hosted on `data.hapnanarsad.id`. All rights belong to the respective creators.
