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
  // 2024–25
  { id: '1', src: '/images/gallery/24-25/24-25_cmdr.jpg', alt: 'RoboNation commander\'s briefing at RoboSub 2025', caption: 'Commander\'s briefing at RoboSub 2025', date: 'August 2025', category: 'competition', year: 2025 },

  // 2023–24
  { id: '2', src: '/images/gallery/23-24/23-24_comp.jpg', alt: 'Team presenting AUV to Navy judges', caption: 'Presenting Krabby Patty to Navy judges at RoboSub 2024', date: 'August 2024', category: 'competition', year: 2024 },
  { id: '3', src: '/images/gallery/23-24/23-24_comp1.jpg', alt: 'Team speaking with Navy officer at judging', caption: 'Technical interview with judges at RoboSub 2024', date: 'August 2024', category: 'competition', year: 2024 },
  { id: '4', src: '/images/gallery/23-24/23-24_pool.jpg', alt: 'Watching AUV during competition pool run', caption: 'Watching Krabby Patty during a competition run', date: 'August 2024', category: 'competition', year: 2024 },
  { id: '5', src: '/images/gallery/23-24/23-24_team.jpg', alt: 'Team jumping for group photo with AUV at RoboSub', caption: 'Team photo at RoboSub 2024', date: 'August 2024', category: 'team', year: 2024 },
  { id: '6', src: '/images/gallery/23-24/23-24_team1.jpg', alt: 'Fun team group photo at RoboSub banners', caption: 'Team photo at RoboSub 2024', date: 'August 2024', category: 'team', year: 2024 },
  { id: '7', src: '/images/gallery/23-24/23-24_team2.jpg', alt: 'Formal team photo with AUV at RoboSub', caption: 'Formal team photo at RoboSub 2024', date: 'August 2024', category: 'team', year: 2024 },
  { id: '8', src: '/images/gallery/23-24/2023-4_comp.png', alt: 'AUV poolside before competition run', caption: 'Krabby Patty poolside before a run', date: 'August 2024', category: 'competition', year: 2024 },
  { id: '9', src: '/images/gallery/23-24/2023-4_comp1.png', alt: 'AUV being lowered into competition pool', caption: 'Deploying Krabby Patty into the pool', date: 'August 2024', category: 'competition', year: 2024 },
  { id: '10', src: '/images/gallery/23-24/2023-4_build.png', alt: 'Member using a drill press', caption: 'Machining parts for the frame', date: '2024', category: 'build', year: 2024 },
  { id: '11', src: '/images/gallery/23-24/2023-4_build1.png', alt: 'Software team working on laptops', caption: 'Software team working session', date: '2024', category: 'build', year: 2024 },
  { id: '12', src: '/images/gallery/23-24/2023-4_build2.png', alt: 'Krabby Patty AUV on a table', caption: 'Krabby Patty fully assembled', date: '2024', category: 'build', year: 2024 },
  { id: '13', src: '/images/gallery/23-24/2023-4_test.png', alt: 'AUV floating in a pool during testing', caption: 'Pool testing Krabby Patty', date: '2024', category: 'practice', year: 2024 },
  { id: '14', src: '/images/gallery/23-24/2023-4_team.png', alt: 'Team group photo indoors', caption: 'Team hangout during build season', date: '2024', category: 'team', year: 2024 },

  // 2022–23
  { id: '15', src: '/images/gallery/22-23/22-23_comp.jpg', alt: 'Team working on AUV at competition tent', caption: 'Prepping Sea++ at the competition tent', date: 'August 2023', category: 'competition', year: 2023 },
  { id: '16', src: '/images/gallery/22-23/22-23_comp1.jpg', alt: 'Team members around AUV at competition', caption: 'Final checks on Sea++ at RoboSub 2023', date: 'August 2023', category: 'competition', year: 2023 },
  { id: '17', src: '/images/gallery/22-23/22-23_comp2.jpg', alt: 'Team gathered around vehicle at competition tent', caption: 'Working on Sea++ between runs', date: 'August 2023', category: 'competition', year: 2023 },
  { id: '18', src: '/images/gallery/22-23/22-23_comp3.jpg', alt: 'Team members discussing next to AUV', caption: 'Strategizing at RoboSub 2023', date: 'August 2023', category: 'competition', year: 2023 },
  { id: '19', src: '/images/gallery/22-23/22-23_compend.jpg', alt: 'All RoboSub teams group photo at the pool', caption: 'All-teams group photo at RoboSub 2023', date: 'August 2023', category: 'competition', year: 2023 },
  { id: '20', src: '/images/gallery/22-23/22-23_teampicture.jpg', alt: 'Team photo at RoboSub table with AUV', caption: 'Team photo at RoboSub 2023', date: 'August 2023', category: 'team', year: 2023 },
  { id: '21', src: '/images/gallery/22-23/22-23_teampicture1.jpg', alt: 'Casual team photo at RoboSub table', caption: 'Team photo at RoboSub 2023', date: 'August 2023', category: 'team', year: 2023 },
]
