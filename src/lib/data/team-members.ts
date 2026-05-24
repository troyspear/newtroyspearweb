export interface TeamMember {
  name: string
  role: string
  subTeam: 'Mechanical' | 'Electrical' | 'Software' | 'Leadership'
  image: string
  year: string
}

export function getTeamYears(): string[] {
  const years = [...new Set(teamMembers.map((m) => m.year))]
  return years.sort((a, b) => b.localeCompare(a))
}

export function getMembersByYear(year: string): TeamMember[] {
  return teamMembers.filter((m) => m.year === year)
}

export const teamMembers: TeamMember[] = [
  // Leadership
  { name: 'Gavin Gibson', role: 'Co-Commander', subTeam: 'Leadership', image: '/images/team/placeholder-member.jpg', year: '2025-2026' },
  { name: 'Krishna Sivakumar', role: 'Co-Commander', subTeam: 'Leadership', image: '/images/team/placeholder-member.jpg', year: '2025-2026' },
  { name: 'Humza Shahzad', role: 'Mechanical Commander', subTeam: 'Leadership', image: '/images/team/placeholder-member.jpg', year: '2025-2026' },
  { name: 'Matthew Yen', role: 'Software Commander', subTeam: 'Leadership', image: '/images/team/placeholder-member.jpg', year: '2025-2026' },

  // Electrical
  { name: 'Kathy He', role: 'Member', subTeam: 'Electrical', image: '/images/team/placeholder-member.jpg', year: '2025-2026' },
  { name: 'Zion Qu', role: 'Member', subTeam: 'Electrical', image: '/images/team/placeholder-member.jpg', year: '2025-2026' },
  { name: 'Avijeet Singh', role: 'Member', subTeam: 'Electrical', image: '/images/team/placeholder-member.jpg', year: '2025-2026' },

  // Mechanical
  { name: 'Sai Arasala', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2025-2026' },
  { name: 'Alex Kwon', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2025-2026' },
  { name: 'Jane Liu', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2025-2026' },
  { name: 'Alessandra Noronha', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2025-2026' },
  { name: 'Ansh Sanghvi', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2025-2026' },
  { name: 'Wesley Shen', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2025-2026' },
  { name: 'Kaileo Truong', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2025-2026' },
  { name: 'Max Valesquez', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2025-2026' },
  { name: 'Jason Xu', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2025-2026' },

  // Software
  { name: 'Ryan Jian', role: 'Member', subTeam: 'Software', image: '/images/team/placeholder-member.jpg', year: '2025-2026' },
  { name: 'Brooke Li', role: 'Member', subTeam: 'Software', image: '/images/team/placeholder-member.jpg', year: '2025-2026' },
  { name: 'Rener Li', role: 'Member', subTeam: 'Software', image: '/images/team/placeholder-member.jpg', year: '2025-2026' },
  { name: 'Cristian Liu', role: 'Member', subTeam: 'Software', image: '/images/team/placeholder-member.jpg', year: '2025-2026' },
  { name: 'Shreyas Rawat', role: 'Member', subTeam: 'Software', image: '/images/team/placeholder-member.jpg', year: '2025-2026' },
  { name: 'Ryan Zhou', role: 'Member', subTeam: 'Software', image: '/images/team/placeholder-member.jpg', year: '2025-2026' },

  // --- 2024-2025 ---

  // Electrical
  { name: 'Gavin Gibson', role: 'Member', subTeam: 'Electrical', image: '/images/team/placeholder-member.jpg', year: '2024-2025' },
  { name: 'Kathy He', role: 'Member', subTeam: 'Electrical', image: '/images/team/placeholder-member.jpg', year: '2024-2025' },
  { name: 'Elvina Liou', role: 'Member', subTeam: 'Electrical', image: '/images/team/placeholder-member.jpg', year: '2024-2025' },
  { name: 'Tim Zhang', role: 'Member', subTeam: 'Electrical', image: '/images/team/placeholder-member.jpg', year: '2024-2025' },

  // Mechanical
  { name: 'Aidan Chen', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2024-2025' },
  { name: 'Arjun Reddy', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2024-2025' },
  { name: 'Humza Shahzad', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2024-2025' },
  { name: 'Wesley Shen', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2024-2025' },
  { name: 'Troy Song', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2024-2025' },
  { name: 'Landis Tien', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2024-2025' },
  { name: 'Daniel Tran', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2024-2025' },

  // Software
  { name: 'Aahana Bhise', role: 'Member', subTeam: 'Software', image: '/images/team/placeholder-member.jpg', year: '2024-2025' },
  { name: 'Bruce Deng', role: 'Member', subTeam: 'Software', image: '/images/team/placeholder-member.jpg', year: '2024-2025' },
  { name: 'Ryan Jian', role: 'Member', subTeam: 'Software', image: '/images/team/placeholder-member.jpg', year: '2024-2025' },
  { name: 'Rener Li', role: 'Member', subTeam: 'Software', image: '/images/team/placeholder-member.jpg', year: '2024-2025' },
  { name: 'Jocelyn Mathew', role: 'Member', subTeam: 'Software', image: '/images/team/placeholder-member.jpg', year: '2024-2025' },
  { name: 'Mateus Noronha', role: 'Member', subTeam: 'Software', image: '/images/team/placeholder-member.jpg', year: '2024-2025' },
  { name: 'Kirthi Reddy', role: 'Member', subTeam: 'Software', image: '/images/team/placeholder-member.jpg', year: '2024-2025' },
  { name: 'Shri Krishna Sivakumar', role: 'Member', subTeam: 'Software', image: '/images/team/placeholder-member.jpg', year: '2024-2025' },
  { name: 'Kaileo Truong', role: 'Member', subTeam: 'Software', image: '/images/team/placeholder-member.jpg', year: '2024-2025' },
  { name: 'Matthew Yen', role: 'Member', subTeam: 'Software', image: '/images/team/placeholder-member.jpg', year: '2024-2025' },
  { name: 'Ryan Zhou', role: 'Member', subTeam: 'Software', image: '/images/team/placeholder-member.jpg', year: '2024-2025' },

  // --- 2023-2024 ---

  // Mechanical
  { name: 'Aidan Chen', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2023-2024' },
  { name: 'Gavin Gibson', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2023-2024' },
  { name: 'Kaleb Lee', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2023-2024' },
  { name: 'Yongjing Li', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2023-2024' },
  { name: 'Elvina Liou', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2023-2024' },
  { name: 'Yun Long', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2023-2024' },
  { name: 'Thomas Nguyen-Ta', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2023-2024' },
  { name: 'Jason Pan', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2023-2024' },
  { name: 'Humza Shahzad', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2023-2024' },
  { name: 'Daniel Tran', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2023-2024' },

  // Software
  { name: 'Raina Ban', role: 'Member', subTeam: 'Software', image: '/images/team/placeholder-member.jpg', year: '2023-2024' },
  { name: 'Bruce Deng', role: 'Member', subTeam: 'Software', image: '/images/team/placeholder-member.jpg', year: '2023-2024' },
  { name: 'Joshua Kim', role: 'Member', subTeam: 'Software', image: '/images/team/placeholder-member.jpg', year: '2023-2024' },
  { name: 'Mateus Noronha', role: 'Member', subTeam: 'Software', image: '/images/team/placeholder-member.jpg', year: '2023-2024' },
  { name: 'Derek Peng', role: 'Member', subTeam: 'Software', image: '/images/team/placeholder-member.jpg', year: '2023-2024' },
  { name: 'Krishna Sivakumar', role: 'Member', subTeam: 'Software', image: '/images/team/placeholder-member.jpg', year: '2023-2024' },
  { name: 'Landis Tien', role: 'Member', subTeam: 'Software', image: '/images/team/placeholder-member.jpg', year: '2023-2024' },
  { name: 'Kaileo Truong', role: 'Member', subTeam: 'Software', image: '/images/team/placeholder-member.jpg', year: '2023-2024' },
  { name: 'Dylan Xiang', role: 'Member', subTeam: 'Software', image: '/images/team/placeholder-member.jpg', year: '2023-2024' },
  { name: 'Ryan Zhou', role: 'Member', subTeam: 'Software', image: '/images/team/placeholder-member.jpg', year: '2023-2024' },
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
]
