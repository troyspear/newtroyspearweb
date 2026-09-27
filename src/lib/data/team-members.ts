export interface TeamMember {
  name: string
  role: string
  subTeam: 'Mechanical' | 'Electrical' | 'Software' | 'Business and Outreach' | 'Leadership' | 'General'
  image: string
  year: string
  grade?: number
}

export function getTeamYears(): string[] {
  const years = [...new Set(teamMembers.map((m) => m.year))]
  return years.sort((a, b) => b.localeCompare(a))
}

export function getMembersByYear(year: string): TeamMember[] {
  return teamMembers.filter((m) => m.year === year)
}

export const teamMembers: TeamMember[] = [
  // --- 2026-2027 ---

  // Leadership
  { name: 'Shri Krishna Sivakumar', role: 'Team Commander', subTeam: 'Leadership', image: '/images/team/placeholder-member.jpg', year: '2026-2027', grade: 12 },
  { name: 'Gavin Gibson', role: 'Team Commander', subTeam: 'Leadership', image: '/images/team/placeholder-member.jpg', year: '2026-2027', grade: 12 },
  { name: 'Humza Shahzad', role: 'Mechanical Co-Commander', subTeam: 'Leadership', image: '/images/team/placeholder-member.jpg', year: '2026-2027', grade: 12 },
  { name: 'Saisantosh Arasala', role: 'Mechanical Co-Commander', subTeam: 'Leadership', image: '/images/team/placeholder-member.jpg', year: '2026-2027', grade: 12 },
  { name: 'Shreyas Rawat', role: 'Software Commander', subTeam: 'Leadership', image: '/images/team/placeholder-member.jpg', year: '2026-2027', grade: 10 },
  { name: 'Jason Xu', role: 'Documentation Manager', subTeam: 'Leadership', image: '/images/team/placeholder-member.jpg', year: '2026-2027', grade: 10 },
  { name: 'Ryan Zhou', role: 'Business and Outreach Manager', subTeam: 'Leadership', image: '/images/team/placeholder-member.jpg', year: '2026-2027' },

  // Mechanical
  { name: 'Alexander Kwon', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2026-2027', grade: 10 },
  { name: 'Maximus Velasquez', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2026-2027', grade: 10 },
  { name: 'Kaileo Truong', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2026-2027', grade: 12 },
  { name: 'Ansh Sanghvi', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2026-2027', grade: 10 },
  { name: 'Casper Wen', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2026-2027' },
  { name: 'Lucas Peng', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2026-2027' },
  { name: 'Jacob Adams', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2026-2027' },

  // Electrical
  { name: 'Avijeet Singh', role: 'Member', subTeam: 'Electrical', image: '/images/team/placeholder-member.jpg', year: '2026-2027', grade: 12 },
  { name: 'Allex Kim', role: 'Member', subTeam: 'Electrical', image: '/images/team/placeholder-member.jpg', year: '2026-2027' },

  // Software
  { name: 'Prajit Manicka', role: 'Member', subTeam: 'Software', image: '/images/team/placeholder-member.jpg', year: '2026-2027' },
  { name: 'Veeram Dugar', role: 'Member', subTeam: 'Software', image: '/images/team/placeholder-member.jpg', year: '2026-2027' },

  // Business and Outreach
  { name: 'Rinji Tsui', role: 'Member', subTeam: 'Business and Outreach', image: '/images/team/placeholder-member.jpg', year: '2026-2027' },

  // --- 2025-2026 ---

  // Leadership
  { name: 'Gavin Gibson', role: 'Co-Commander', subTeam: 'Leadership', image: '/images/team/placeholder-member.jpg', year: '2025-2026', grade: 11 },
  { name: 'Shri Krishna Sivakumar', role: 'Co-Commander', subTeam: 'Leadership', image: '/images/team/placeholder-member.jpg', year: '2025-2026', grade: 11 },
  { name: 'Humza Shahzad', role: 'Mechanical Commander', subTeam: 'Leadership', image: '/images/team/placeholder-member.jpg', year: '2025-2026', grade: 11 },
  { name: 'Matthew Yen', role: 'Software Commander', subTeam: 'Leadership', image: '/images/team/placeholder-member.jpg', year: '2025-2026', grade: 11 },

  // Electrical
  { name: 'Kathy He', role: 'Member', subTeam: 'Electrical', image: '/images/team/placeholder-member.jpg', year: '2025-2026', grade: 10 },
  { name: 'Zion Qu', role: 'Member', subTeam: 'Electrical', image: '/images/team/placeholder-member.jpg', year: '2025-2026', grade: 10 },
  { name: 'Avijeet Singh', role: 'Member', subTeam: 'Electrical', image: '/images/team/placeholder-member.jpg', year: '2025-2026', grade: 11 },

  // Mechanical
  { name: 'Saisantosh Arasala', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2025-2026', grade: 11 },
  { name: 'Alexander Kwon', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2025-2026', grade: 9 },
  { name: 'Jane Liu', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2025-2026', grade: 9 },
  { name: 'Alessandra Noronha', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2025-2026', grade: 10 },
  { name: 'Ansh Sanghvi', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2025-2026', grade: 9 },
  { name: 'Kaileo Truong', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2025-2026', grade: 11 },
  { name: 'Maximus Velasquez', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2025-2026', grade: 9 },
  { name: 'Jason Xu', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2025-2026', grade: 9 },

  // Software
  { name: 'Ryan Jian', role: 'Member', subTeam: 'Software', image: '/images/team/placeholder-member.jpg', year: '2025-2026', grade: 10 },
  { name: 'Brooke Li', role: 'Member', subTeam: 'Software', image: '/images/team/placeholder-member.jpg', year: '2025-2026', grade: 11 },
  { name: 'Rener Li', role: 'Member', subTeam: 'Software', image: '/images/team/placeholder-member.jpg', year: '2025-2026', grade: 10 },
  { name: 'Cristian Liu', role: 'Member', subTeam: 'Software', image: '/images/team/placeholder-member.jpg', year: '2025-2026', grade: 10 },
  { name: 'Shreyas Rawat', role: 'Member', subTeam: 'Software', image: '/images/team/placeholder-member.jpg', year: '2025-2026', grade: 9 },

  // --- 2024-2025 ---

  // Leadership
  { name: 'Raina Ban', role: 'Commander', subTeam: 'Leadership', image: '/images/team/placeholder-member.jpg', year: '2024-2025' },
  { name: 'Aidan Chen', role: 'Assistant Commander', subTeam: 'Leadership', image: '/images/team/placeholder-member.jpg', year: '2024-2025' },

  // Electrical
  { name: 'Gavin Gibson', role: 'Member', subTeam: 'Electrical', image: '/images/team/placeholder-member.jpg', year: '2024-2025' },
  { name: 'Kathy He', role: 'Member', subTeam: 'Electrical', image: '/images/team/placeholder-member.jpg', year: '2024-2025' },
  { name: 'Elvina Liou', role: 'Member', subTeam: 'Electrical', image: '/images/team/placeholder-member.jpg', year: '2024-2025' },
  { name: 'Tim Zhang', role: 'Member', subTeam: 'Electrical', image: '/images/team/placeholder-member.jpg', year: '2024-2025' },

  // Mechanical
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

  // Leadership
  { name: 'Kaleb Lee', role: 'Commander', subTeam: 'Leadership', image: '/images/team/placeholder-member.jpg', year: '2023-2024' },
  { name: 'Derek Peng', role: 'Sub-Commander', subTeam: 'Leadership', image: '/images/team/placeholder-member.jpg', year: '2023-2024' },
  { name: 'Raina Ban', role: 'Sub-Commander', subTeam: 'Leadership', image: '/images/team/placeholder-member.jpg', year: '2023-2024' },
  { name: 'Bruce Deng', role: 'Sub-Commander', subTeam: 'Leadership', image: '/images/team/placeholder-member.jpg', year: '2023-2024' },

  // Mechanical
  { name: 'Aidan Chen', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2023-2024' },
  { name: 'Gavin Gibson', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2023-2024' },
  { name: 'Yongjing Li', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2023-2024' },
  { name: 'Elvina Liou', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2023-2024' },
  { name: 'Yun Long', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2023-2024' },
  { name: 'Thomas Nguyen-Ta', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2023-2024' },
  { name: 'Jason Pan', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2023-2024' },
  { name: 'Humza Shahzad', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2023-2024' },
  { name: 'Daniel Tran', role: 'Member', subTeam: 'Mechanical', image: '/images/team/placeholder-member.jpg', year: '2023-2024' },

  // Software
  { name: 'Joshua Kim', role: 'Member', subTeam: 'Software', image: '/images/team/placeholder-member.jpg', year: '2023-2024' },
  { name: 'Mateus Noronha', role: 'Member', subTeam: 'Software', image: '/images/team/placeholder-member.jpg', year: '2023-2024' },
  { name: 'Shri Krishna Sivakumar', role: 'Member', subTeam: 'Software', image: '/images/team/placeholder-member.jpg', year: '2023-2024' },
  { name: 'Landis Tien', role: 'Member', subTeam: 'Software', image: '/images/team/placeholder-member.jpg', year: '2023-2024' },
  { name: 'Kaileo Truong', role: 'Member', subTeam: 'Software', image: '/images/team/placeholder-member.jpg', year: '2023-2024' },
  { name: 'Dylan Xiang', role: 'Member', subTeam: 'Software', image: '/images/team/placeholder-member.jpg', year: '2023-2024' },
  { name: 'Ryan Zhou', role: 'Member', subTeam: 'Software', image: '/images/team/placeholder-member.jpg', year: '2023-2024' },

  // --- 2022-2023 ---

  // General
  { name: 'Kaleb Lee', role: 'Member', subTeam: 'General', image: '/images/team/placeholder-member.jpg', year: '2022-2023' },
  { name: 'Thomas Nguyen-Ta', role: 'Member', subTeam: 'General', image: '/images/team/placeholder-member.jpg', year: '2022-2023' },
  { name: 'Derek Peng', role: 'Member', subTeam: 'General', image: '/images/team/placeholder-member.jpg', year: '2022-2023' },
  { name: 'Puru Jain', role: 'Member', subTeam: 'General', image: '/images/team/placeholder-member.jpg', year: '2022-2023' },
  { name: 'Pali Jain', role: 'Member', subTeam: 'General', image: '/images/team/placeholder-member.jpg', year: '2022-2023' },
  { name: 'Raina Ban', role: 'Member', subTeam: 'General', image: '/images/team/placeholder-member.jpg', year: '2022-2023' },
  { name: 'Bruce Deng', role: 'Member', subTeam: 'General', image: '/images/team/placeholder-member.jpg', year: '2022-2023' },
  { name: 'Mateus Noronha', role: 'Member', subTeam: 'General', image: '/images/team/placeholder-member.jpg', year: '2022-2023' },
  { name: 'Aidan Chen', role: 'Member', subTeam: 'General', image: '/images/team/placeholder-member.jpg', year: '2022-2023' },
  { name: 'Aaron Li', role: 'Member', subTeam: 'General', image: '/images/team/placeholder-member.jpg', year: '2022-2023' },
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
    description: 'Builds the autonomy stack: computer vision, path planning, PID controllers, and ROS integration for mission execution.',
  },
  {
    name: 'Business and Outreach',
    description: 'Runs sponsorships, fundraising, social media, and community outreach that keep the team funded and connected.',
  },
]
