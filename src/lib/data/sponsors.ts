export interface Sponsor {
  name: string
  logo: string
  url: string
  tier: 'platinum' | 'gold' | 'silver' | 'bronze'
}

export const sponsors: Sponsor[] = [
  { name: 'Water Linked', logo: '/images/sponsors/waterlinked.png', url: 'https://waterlinked.com', tier: 'platinum' },
  { name: 'SimScale', logo: '/images/sponsors/simscale.png', url: 'https://simscale.com', tier: 'gold' },
  { name: 'Onshape', logo: '/images/sponsors/onshape.png', url: 'https://onshape.com', tier: 'silver' },
  { name: 'Blue Robotics', logo: '/images/sponsors/bluerobotics.png', url: 'https://bluerobotics.com', tier: 'bronze' },
  { name: 'Blue Trail Engineering', logo: '/images/sponsors/bluetrail.png', url: 'https://bluetrailengineering.com', tier: 'bronze' },
]

export const tierConfig = {
  platinum: { 
    label: 'Platinum', 
    logoSize: 'h-20',
    textClass: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold tracking-wider',
    cardClass: 'bg-slate-950/95 dark:bg-slate-950/90 border-indigo-500/40 hover:border-indigo-500/80 shadow-[0_0_20px_rgba(99,102,241,0.12)] hover:shadow-[0_0_30px_rgba(99,102,241,0.28)] hover:scale-[1.03] duration-300'
  },
  gold: { 
    label: 'Gold', 
    logoSize: 'h-16',
    textClass: 'bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent font-bold tracking-wider',
    cardClass: 'bg-amber-500/8 dark:bg-amber-500/5 hover:bg-amber-500/15 dark:hover:bg-amber-500/10 border-amber-500/30 hover:border-amber-500/60 shadow-[0_0_15px_rgba(245,158,11,0.06)] hover:shadow-[0_0_25px_rgba(245,158,11,0.18)] hover:scale-[1.02] duration-300'
  },
  silver: { 
    label: 'Silver', 
    logoSize: 'h-14',
    textClass: 'bg-gradient-to-r from-slate-400 to-slate-500 bg-clip-text text-transparent font-bold tracking-wider',
    cardClass: 'bg-slate-400/8 dark:bg-slate-400/5 hover:bg-slate-400/15 dark:hover:bg-slate-400/10 border-slate-400/30 hover:border-slate-400/60 shadow-[0_0_10px_rgba(148,163,184,0.04)] hover:shadow-[0_0_18px_rgba(148,163,184,0.14)] hover:scale-[1.01] duration-300'
  },
  bronze: { 
    label: 'Bronze', 
    logoSize: 'h-12',
    textClass: 'bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text text-transparent font-bold tracking-wider',
    cardClass: 'bg-orange-500/5 dark:bg-orange-500/2 hover:bg-orange-500/10 dark:hover:bg-orange-500/5 border-orange-500/20 hover:border-orange-500/40 hover:scale-[1.01] duration-300'
  },
}
