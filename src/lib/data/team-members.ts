export interface TeamMember {
  name: string
  role: string
  subTeam: 'Mechanical' | 'Electrical' | 'Software' | 'Business' | 'Leadership'
  image: string
  year?: string
}

export const teamMembers: TeamMember[] = [
  { name: 'Alex Chen', role: 'Team Captain', subTeam: 'Leadership', image: '/images/team/placeholder-member.jpg', year: '2025-2026' },
  { name: 'Sarah Kim', role: 'Mechanical Lead', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2025-2026' },
  { name: 'Marcus Johnson', role: 'Electrical Lead', subTeam: 'Electrical', image: '/images/team/placeholder-member.jpg', year: '2025-2026' },
  { name: 'Priya Patel', role: 'Software Lead', subTeam: 'Software', image: '/images/team/placeholder-member.jpg', year: '2025-2026' },
  { name: 'David Liu', role: 'Business Manager', subTeam: 'Business', image: '/images/team/placeholder-member.jpg', year: '2025-2026' },
  { name: 'Emma Torres', role: 'Hull Designer', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2025-2026' },
  { name: 'James Park', role: 'PCB Designer', subTeam: 'Electrical', image: '/images/team/placeholder-member.jpg', year: '2025-2026' },
  { name: 'Olivia Wang', role: 'CV Engineer', subTeam: 'Software', image: '/images/team/placeholder-member.jpg', year: '2025-2026' },
  { name: 'Ryan Martinez', role: 'Thruster Systems', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2025-2026' },
  { name: 'Sophie Lee', role: 'Sensor Integration', subTeam: 'Electrical', image: '/images/team/placeholder-member.jpg', year: '2025-2026' },
  { name: 'Nathan Brown', role: 'Controls Engineer', subTeam: 'Software', image: '/images/team/placeholder-member.jpg', year: '2025-2026' },
  { name: 'Isabella Garcia', role: 'Outreach Lead', subTeam: 'Business', image: '/images/team/placeholder-member.jpg', year: '2025-2026' },
]

export const subTeams = [
  {
    name: 'Mechanical',
    description: 'Designs and fabricates the vehicle hull, thruster mounts, and waterproof enclosures. Handles CAD modeling, 3D printing, and assembly.',
  },
  {
    name: 'Electrical',
    description: 'Develops power distribution, custom PCBs, sensor arrays, and wiring harnesses. Ensures reliable underwater electronics.',
  },
  {
    name: 'Software',
    description: 'Builds the autonomy stack — computer vision, path planning, PID controllers, and ROS integration for mission execution.',
  },
  {
    name: 'Business',
    description: 'Manages sponsorships, outreach, documentation, and competition logistics. Keeps the team funded and organized.',
  },
]
