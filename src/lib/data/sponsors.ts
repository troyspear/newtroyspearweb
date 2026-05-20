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
    textClass: 'bg-gradient-to-r from-[#8C9BAA] via-[#D4DEE8] to-[#8C9BAA] bg-clip-text text-transparent font-bold tracking-wider',
    cardClass: 'bg-surface hover:bg-elevated border-border-subtle hover:border-border hover:scale-[1.02] duration-300',
  },
  gold: {
    label: 'Gold',
    logoSize: 'h-16',
    textClass: 'bg-gradient-to-r from-[#B8860B] via-[#DAA520] to-[#B8860B] bg-clip-text text-transparent font-bold tracking-wider',
    cardClass: 'bg-surface hover:bg-elevated border-border-subtle hover:border-border hover:scale-[1.02] duration-300',
  },
  silver: {
    label: 'Silver',
    logoSize: 'h-14',
    textClass: 'bg-gradient-to-r from-[#808080] via-[#C0C0C0] to-[#808080] bg-clip-text text-transparent font-bold tracking-wider',
    cardClass: 'bg-surface hover:bg-elevated border-border-subtle hover:border-border hover:scale-[1.01] duration-300',
  },
  bronze: {
    label: 'Bronze',
    logoSize: 'h-12',
    textClass: 'bg-gradient-to-r from-[#804A00] via-[#CD7F32] to-[#804A00] bg-clip-text text-transparent font-bold tracking-wider',
    cardClass: 'bg-surface hover:bg-elevated border-border-subtle hover:border-border hover:scale-[1.01] duration-300',
  },
}
