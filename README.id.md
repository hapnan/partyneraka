# Party Neraka — Portal Komunitas Resmi

[English](./README.md) | **Bahasa Indonesia**

Portal web resmi **Party Neraka**, kolektif streamer dan gamer Indonesia. Situs satu halaman ini menampilkan roster, kumpulan stream dan VOD, jadwal event komunitas, serta rilisan merch.

**Live:** https://pt.hapnanarsad.id

---

## Tech stack

| Area | Tools |
| --- | --- |
| UI | [shadcn/ui](https://ui.shadcn.com) (primitif Base UI, gaya `base-nova`), [Tailwind CSS v4](https://tailwindcss.com), [`cn`](https://github.com/shadcn-ui/cn), [lucide-react](https://lucide.dev) |
| Framework | [React 19](https://react.dev) + [React Compiler](https://react.dev/learn/react-compiler), [Vite 8](https://vite.dev) |
| Bahasa | TypeScript 7 |
| Tooling | [Bun](https://bun.sh), [Oxlint](https://oxc.rs/docs/guide/usage/linter) |
| Hosting | [Cloudflare Workers](https://developers.cloudflare.com/workers/) (CLI `cf` + `@cloudflare/vite-plugin`) |

## Memulai

**Prasyarat:** [Bun](https://bun.sh) (v1.x).

```bash
bun install
bun run dev
```

## Script

| Perintah | Menjalankan | Keterangan |
| --- | --- | --- |
| `bun run dev` | `cf dev` | Menjalankan dev server lokal (Vite + runtime Cloudflare) |
| `bun run build` | `tsc -b && cf build` | Cek tipe, lalu build produksi ke `dist/` |
| `bun run deploy` | `cf deploy` | Deploy hasil build ke Cloudflare Workers |
| `bun run lint` | `oxlint` | Lint proyek |
| `bun run preview` | `vite preview` | Pratinjau hasil build produksi secara lokal |

## Struktur proyek

```text
.
├── cloudflare.config.ts      # Nama worker, fallback SPA, custom domain
├── components.json           # Konfigurasi shadcn/ui (alias → src/)
├── index.html                # Kerangka HTML + Google Fonts (Anton, Space Grotesk)
├── vite.config.ts            # React, React Compiler, Tailwind, Cloudflare, alias "@"
└── src/
    ├── App.tsx               # Susunan halaman (urutan section)
    ├── main.tsx              # Entry React
    ├── index.css             # Tailwind + design token + utility kustom
    ├── components/
    │   ├── icons.tsx         # Ikon brand YouTube / Instagram
    │   ├── site/             # Section halaman (header, hero, ticker, roster,
    │   │                     #   streams, event wall, merch, about, footer)
    │   └── ui/               # Komponen shadcn/ui (button, badge, avatar)
    ├── data/
    │   ├── roster.ts         # Anggota roster + helper handle
    │   └── content.ts        # Nav, ticker, video, event, merch
    └── lib/
        └── utils.ts          # Helper cn()
```

`@/*` mengarah ke `./src/*` (diatur di `tsconfig.json`, `tsconfig.app.json`, dan `vite.config.ts`).

## Mengubah konten

Semua teks situs ada di `src/data/`, jadi kamu tidak perlu mengubah komponen apa pun.

> [!NOTE]
> Data video, event, ticker, dan merch saat ini masih **konten placeholder** dari desain Stitch asli. Ganti dengan data asli kalau sudah tersedia.

### Roster — `src/data/roster.ts`

Setiap anggota adalah satu entri di array `roster`:

```ts
{
  name: 'Fandra Octoramonth',
  youtube: 'https://www.youtube.com/@FandraOcto',
  instagram: 'https://www.instagram.com/octoramonth/',
  image: `${IMG}Fandra_Octoramont.jpg`, // di-host di data.hapnanarsad.id
}
```

- Handle yang tampil (`@FandraOcto`, `@octoramonth`) diambil otomatis dari URL.
- Urutan array = urutan tampil. Secara default hanya 8 anggota pertama yang tampil, sisanya muncul setelah tombol **Deploy Full Roster** diklik.
- Kalau foto gagal dimuat, kartu menampilkan inisial anggota sebagai gantinya.

### Video — `src/data/content.ts`

Section Streams berbentuk grid ala YouTube dengan chip kategori. Setiap `Video` bentuknya seperti ini:

```ts
{
  id: 'petra-144fps',
  title: 'Petra Clutch Highlight at 144FPS',
  channel: getMember('KhoPetra'),   // harus sama persis dengan `name` di roster
  category: 'Highlights',           // salah satu `videoCategories` (selain All/Live)
  duration: '08:15',                // khusus VOD
  views: '51K views',
  published: '2 days ago',
  // live: { viewers: '3,108' },    // isi ini sebagai gantinya untuk live stream
  // thumbnail: 'https://…',        // thumbnail kustom (opsional)
  thumbText: '144FPS Clutch',       // teks overlay untuk thumbnail otomatis
}
```

- `getMember()` akan melempar error kalau nama tidak ada di roster, jadi salah ketik langsung ketahuan.
- Kalau `thumbnail` tidak diisi, kartu membuat thumbnail sendiri dari foto roster kreator dan `thumbText`.
- Saat ini kartu mengarah ke channel YouTube kreator.

### Event, ticker, merch, dan nav

Semuanya juga ada di `src/data/content.ts`: `events` (status: `closed` / `live` / `upcoming`), `tickerItems`, `merch`, dan `navLinks`.

## Tema

Design token ada di `src/index.css`:

- **Palet:** warna dari Stitch dipetakan ke variabel CSS shadcn (`--background`, `--primary`, `--border`, `--muted-foreground`, dan lainnya). Situs ini hanya mode gelap (`<html class="dark">`).
- **Warna brand tambahan:** `gold`, `gold-foreground`, `blush`, dan `raised` (misalnya `text-gold`, `bg-raised`).
- **Shadow dan animasi:** `shadow-hard`, `shadow-hard-sm`, `shadow-hellfire`, `shadow-halo`, `drop-shadow-hellfire`, `animate-marquee`.
- **Utility bentuk:** `clip-chamfer`, `clip-card`, `clip-tag`, `bg-grid-tactical`.
- **Skala tipografi:** `type-display`, `type-headline-xl`, `type-headline-lg`, `type-headline-md`, `type-label-lg`, `type-label-md`, `type-tactical`.
- **Font:** Anton (`font-heading`) dan Space Grotesk (`font-sans`), dimuat dari Google Fonts di `index.html`.

## Menambah komponen shadcn/ui

```bash
bunx shadcn@latest add <component>
```

Komponen akan ditulis ke `src/components/ui/` lewat alias `@/*` yang diatur di `components.json`.

## Deployment

Situs di-deploy sebagai SPA statis di Cloudflare Workers:

```bash
bun run build
bun run deploy
```

Konfigurasinya ada di `cloudflare.config.ts`: worker `party_neraka`, not-found handling `single-page-application`, dan custom domain `pt.hapnanarsad.id`.

## Catatan pengembangan

- **React Compiler** aktif lewat `@rolldown/plugin-babel` dengan `reactCompilerPreset()`. Ini membuat dev dan build lebih lambat. Hindari pemanggilan yang tidak murni seperti `new Date()` saat render, karena compiler akan melewati komponen yang melakukannya.
- **Oxlint:** untuk pengecekan yang lebih ketat, kamu bisa mengaktifkan aturan type-aware dengan memasang `oxlint-tsgolint` dan menambahkan `"options": { "typeAware": true }` di `.oxlintrc.json`.

## Kredit

- Desain UI dibuat dengan [Stitch](https://stitch.withgoogle.com): proyek *Process Workflow Engine*, layar *Party Neraka – Official Community Portal*.
- Foto roster dan logo di-host di `data.hapnanarsad.id`. Semua hak milik masing-masing kreator.
