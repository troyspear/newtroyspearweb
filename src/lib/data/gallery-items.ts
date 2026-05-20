export interface GalleryItem {
  id: string
  src: string
  alt: string
  caption: string
  date: string
  category: 'competition' | 'practice' | 'build' | 'team'
  year: number
}

export const galleryItems: GalleryItem[] = [
  { id: '1', src: '/images/gallery/placeholder-1.jpg', alt: 'Team at RoboSub competition', caption: 'RoboSub 2025 Competition Day', date: 'August 2025', category: 'competition', year: 2025 },
  { id: '2', src: '/images/gallery/placeholder-2.jpg', alt: 'Vehicle in the pool', caption: 'First pool test of the season', date: 'March 2025', category: 'practice', year: 2025 },
  { id: '3', src: '/images/gallery/placeholder-3.jpg', alt: 'Building the vehicle frame', caption: 'Hull assembly in the workshop', date: 'January 2025', category: 'build', year: 2025 },
  { id: '4', src: '/images/gallery/placeholder-4.jpg', alt: 'Team group photo', caption: 'Team photo at competition', date: 'August 2025', category: 'team', year: 2025 },
  { id: '5', src: '/images/gallery/placeholder-5.jpg', alt: 'Electronics integration', caption: 'Wiring the electronics bay', date: 'February 2025', category: 'build', year: 2025 },
  { id: '6', src: '/images/gallery/placeholder-6.jpg', alt: 'Underwater vehicle test', caption: 'Depth testing at local pool', date: 'April 2025', category: 'practice', year: 2025 },
  { id: '7', src: '/images/gallery/placeholder-7.jpg', alt: 'Competition run', caption: 'Autonomous run at RoboSub', date: 'August 2024', category: 'competition', year: 2024 },
  { id: '8', src: '/images/gallery/placeholder-8.jpg', alt: 'Previous year team', caption: '2024 team photo', date: 'August 2024', category: 'team', year: 2024 },
  { id: '9', src: '/images/gallery/placeholder-9.jpg', alt: 'Soldering electronics', caption: 'PCB assembly session', date: 'December 2024', category: 'build', year: 2024 },
  { id: '10', src: '/images/gallery/placeholder-10.jpg', alt: 'Practice run', caption: 'Navigation test in pool', date: 'May 2024', category: 'practice', year: 2024 },
  { id: '11', src: '/images/gallery/placeholder-11.jpg', alt: 'CAD design session', caption: 'Designing the new hull', date: 'November 2024', category: 'build', year: 2024 },
  { id: '12', src: '/images/gallery/placeholder-12.jpg', alt: 'Award ceremony', caption: 'Receiving award at competition', date: 'August 2024', category: 'competition', year: 2024 },
]
