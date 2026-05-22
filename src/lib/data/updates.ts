export interface Update {
  id: string
  title: string
  date: string
  slug: string
}

export const updates: Update[] = [
  {
    id: '1',
    title: 'Hull Design v2 Complete — 30% drag reduction',
    date: '2025-09-15',
    slug: 'hull-design-v2',
  },
  {
    id: '2',
    title: 'First Pool Test Success — validated at 3m depth',
    date: '2025-08-20',
    slug: 'pool-test-march-2025',
  },
  {
    id: '3',
    title: 'YOLOv8 Vision Pipeline running at 30 FPS on Jetson',
    date: '2025-06-01',
    slug: 'software-autonomy-stack',
  },
  {
    id: '4',
    title: 'RoboSub 2025 Competition Prep underway',
    date: '2025-05-15',
    slug: 'competition-prep-2025',
  },
  {
    id: '5',
    title: 'Electrical System Architecture finalized',
    date: '2025-07-10',
    slug: 'electrical-system-overview',
  },
  {
    id: '6',
    title: 'Pool Test #2 — Autonomous gate navigation, 4 hrs water time',
    date: '2025-05-10',
    slug: 'pool-test-may-2025',
  },
  {
    id: '7',
    title: 'Simulation Validation — Gazebo vs. real-world comparison',
    date: '2025-04-18',
    slug: 'simulation-validation',
  },
]
