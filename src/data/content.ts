const LH = 'https://lh3.googleusercontent.com/aida-public/'

export const navLinks = [
  { label: 'Roster', href: '#roster' },
  { label: 'Streams', href: '#streams' },
  { label: 'Community', href: '#community' },
  { label: 'Merch', href: '#merch' },
  { label: 'About', href: '#war-room' },
] as const

export type TickerTone = 'primary' | 'gold' | 'muted'

export const tickerItems: { text: string; tone: TickerTone }[] = [
  { text: 'Latest VOD: Fandra & Hans 24HR Tactical Hell Run', tone: 'muted' },
  { text: 'Petra clutch highlight at 144FPS', tone: 'gold' },
  { text: 'Merch drop 04 ships worldwide now', tone: 'muted' },
  { text: 'Next tournament match: Valorant Cup Saturday 20:00 WIB', tone: 'primary' },
  { text: 'Discord voice room 4 is popping with 128 squadmates', tone: 'muted' },
]

export const featuredStream = {
  title: 'Fandra & Hans // Chaos Valorant Squad Scrim',
  tag: '5v5 Ranked',
  subtitle: 'Party Neraka Official Raid Hub // Playing with Community Members',
  viewers: '14,289',
  image: `${LH}AB6AXuDwRpqq2QnwjZeziz-1NfSVAnbXoh2DT1qr5WFQAqv7HR4juEQaaNBRYNQGBC6ITXOwg6_1ivXesXc3QRR6TNoJr5YCqHKjz_yirMoIn0tnWq3xTCPY7TJ5DeRZ9rz0-QkHJyhjZOUabqujUMQWrI7i5EdMLy95f52vzrhQDNW6_KZZIcYfRMT71tK3kdYGUB6vOhxuN1i9Jh5hskULKtjRXzcdG8pHin7lVQ-E6bv3`,
  imageAlt:
    'High-contrast esports broadcast of a tactical shooter tournament lit by crimson flares and amber arena lights.',
  href: 'https://www.youtube.com/@FandraOcto',
}

export const highlightVod = {
  title: "Nugi's insane 1v4 Marshal clutch replay",
  meta: 'Uploaded 14 hours ago // 84.2K views',
  quality: '1080P60',
  image: `${LH}AB6AXuApEvPPQJxLq_LtsyN7BfHXO1ZFyO9qZLFFh4Sn7u0v1MHjz8VHzyU-bf0TZMdMQw5XBTZK0Q1LmkkHo3Rq54_Z0QaE86mNHzRY5RfUN3OnuwVfGQvPZBgyE0WtSzWw9C2WDF4z4YuhTrRG4d76xphpTrqB5e6a4Qzsk-qTl9XDw2Vzl106gLqiMU6VpbxBnFicia9hybnLLMDii2jRthaZ26h25i8V_RZVMzH9YB1K`,
  imageAlt: 'Esports montage thumbnail with tactical crosshairs and red neon lighting.',
  href: 'https://www.youtube.com/@NugrahaDarmawan',
}

export type EventStatus = 'closed' | 'live' | 'upcoming'

export const events: {
  title: string
  description: string
  date: string
  status: EventStatus
}[] = [
  {
    title: 'Neraka Night Invitational #08',
    description: 'Valorant 5v5 Community Cup // IDR 25.000.000 Prize Pool',
    date: '25 Oct',
    status: 'closed',
  },
  {
    title: 'Warzone Subversion Drop-In',
    description: 'Squad Scrims with Fandra & Diki // Open Voice Channels',
    date: '31 Oct',
    status: 'live',
  },
  {
    title: 'Apex Legends Chaos Gauntlet',
    description: 'Hans & Petra Duo Bounty Hunt // Live Stream Giveaways',
    date: '07 Nov',
    status: 'upcoming',
  },
]

export type MerchBadgeTone = 'primary' | 'gold' | 'muted'

export const merch: {
  name: string
  price: string
  description: string
  badge: string
  badgeTone: MerchBadgeTone
  cta: string
  image: string
  imageAlt: string
}[] = [
  {
    name: 'PN-01 Combat Jersey',
    price: 'IDR 450K',
    description:
      'Heavyweight moisture-wicking mesh jersey with oversized shoulder cut and devil crest patch.',
    badge: 'Drop 04 Hellfire',
    badgeTone: 'primary',
    cta: 'Secure Pre-Order',
    image: `${LH}AB6AXuBdFhywLpRMaSn1p5j2xhlxdyfBeTvcm25NwT2IO5qYIJYHTY6FskeXKALAVKyK-bLZ451SuAiuUYqi5MIsmnUToKwgxmV6-hsLHX0dKwjYFTuIcjPCWfKy0ggcxBpAC51uw9svVq53gEeflvOk9a1wHbM7HRi40A5ghcTCaL7Rrx9kBRFM5kXW10oBFAiUNXDoe8BWcKY04IDNGxEceplwSQmy6AieWcpFvf9fU6BL`,
    imageAlt: 'Charcoal esports jersey with crimson accents and bold Party Neraka typography.',
  },
  {
    name: 'Tactical Devil Bomber',
    price: 'IDR 850K',
    description:
      'Flight nylon construction with water-repellent finish, velcro sleeve tags, and blood-red inner quilt.',
    badge: 'Limited 100 Pieces',
    badgeTone: 'gold',
    cta: 'Secure Pre-Order',
    image: `${LH}AB6AXuCipphe-AYXZi3jHtTdymyz6bIsTtI-B_yx6Xj4u0mn8Frd9ItIRtfYMSlGMktQr4EKYJvNifYmoQjSyNh_OHL7xEr5HwFaqWJjzc5V43x-hY2gue8zET6y2VqEO7QbX-L3d_zZEELUUcxUk-5GvJAGe-ZEgoXluEniLX1AT74T3vbYU-y5jvJpYD2bbldKqLiJiX10Ekp1VHg0aYd50pVx_Dc22pGNGifN2LhqK8Vw`,
    imageAlt: 'Matte slate tactical bomber jacket with embroidered devil patches.',
  },
  {
    name: 'Subversion Recon Cap',
    price: 'IDR 250K',
    description:
      'Unstructured low-profile 6-panel cap with magnetic quick-release back buckle and embroidered cross.',
    badge: 'In Stock',
    badgeTone: 'muted',
    cta: 'Add to Squad Cart',
    image: `${LH}AB6AXuDH2nh9yDvZfZg6q633RpkQEFPbxcOUJNdL3XbOJj9BTCkJzR4aRCg05skvCWCNxuBB4nCrr8GwY3Egzdd5cZZFgC4hmKPk8DBsLL1cYR9TSKfwkjJU4_01ELr5Nqi9hj3p0I0QHdS6q-zneE3K1SQd2odcE1jRxcPD9GKXsn69mwHuHLC1xnpqH93SCkpg7k7VL95YHoLCuf-ZY4xU-xCnLLckxAi0SrhgA4n2ULT-`,
    imageAlt: 'Dark washed canvas bucket hat and balaclava with tonal Party Neraka logo.',
  },
]
