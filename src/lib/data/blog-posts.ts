export interface BlogPost {
  slug: string
  title: string
  date: string
  category: 'design' | 'testing' | 'competition' | 'build'
  summary: string
  thumbnail: string
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'hull-design-v2',
    title: 'Hull Design v2: Lessons from Last Year',
    date: '2025-09-15',
    category: 'design',
    summary: 'A complete redesign of our hull based on hydrodynamic analysis and competition feedback. We reduced drag by 30% while improving internal component access.',
    thumbnail: '/images/vehicle/placeholder-sub-1.jpg',
    content: `## Overview\n\nAfter our 2024 competition run, we identified several areas where our hull design could improve. The primary concerns were:\n\n- Excessive drag at higher speeds\n- Difficulty accessing internal electronics for maintenance\n- Insufficient space for additional sensors\n\n## Design Process\n\nWe used CFD simulations to test multiple hull profiles before settling on a streamlined torpedo shape with removable end caps. The new design features:\n\n- **30% drag reduction** compared to v1\n- **Quick-release end caps** for rapid electronics access\n- **Modular sensor mounts** along the hull exterior\n\n## Testing Results\n\nPool tests confirmed improved straight-line speed and maneuverability. The vehicle now achieves stable operation at depths up to 5 meters.\n\n## Next Steps\n\nWe're finalizing the mounting system for our new camera array and will begin integration testing next week.`,
  },
  {
    slug: 'pool-test-march-2025',
    title: 'Pool Test Session: March 2025',
    date: '2025-08-20',
    category: 'testing',
    summary: 'First in-water test of the new vehicle. Validated basic thruster control, depth hold, and leak-free operation at 3 meters.',
    thumbnail: '/images/vehicle/placeholder-sub-2.jpg',
    content: `## Test Objectives\n\n1. Validate waterproof integrity of new hull\n2. Test basic thruster control (forward, reverse, yaw)\n3. Achieve stable depth hold at 2-3 meters\n4. Check sensor readings underwater\n\n## Results\n\n| Test | Status | Notes |\n|------|--------|-------|\n| Leak test (30 min) | Pass | No moisture detected in any compartment |\n| Forward/reverse | Pass | Smooth acceleration, good response |\n| Yaw control | Pass | 360-degree rotation in < 5 seconds |\n| Depth hold | Partial | Oscillation at 3m, PID needs tuning |\n| Sensor check | Pass | All sensors reporting accurate data |\n\n## Key Takeaways\n\n- Hull integrity is excellent\n- Depth hold PID parameters need adjustment\n- Thruster response time is within spec\n- Camera housing performed well underwater`,
  },
  {
    slug: 'electrical-system-overview',
    title: 'Electrical System Architecture',
    date: '2025-07-10',
    category: 'design',
    summary: 'Documenting our power distribution, custom PCB stack, and sensor integration approach for the 2025-2026 vehicle.',
    thumbnail: '/images/vehicle/placeholder-diagram.jpg',
    content: `## Power System\n\nOur vehicle runs on a 14.8V 4S LiPo battery pack providing approximately 2 hours of operation. Power distribution is handled through a custom PCB with individual fused circuits for each subsystem.\n\n## Custom PCBs\n\nWe designed three custom PCBs this year:\n\n1. **Power Distribution Board** — Main power routing with voltage monitoring\n2. **Sensor Hub** — Aggregates data from IMU, depth sensor, and hydrophones\n3. **Thruster Controller** — ESC signals and current monitoring for 8 thrusters\n\n## Sensor Suite\n\n- IMU (9-axis) for orientation\n- Pressure sensor for depth\n- 2x cameras (forward + downward)\n- Hydrophone array for acoustic pinger localization\n\n## Communication\n\nAll subsystems communicate via ROS 2 topics over Ethernet. A tether connection is used during testing for real-time monitoring and debugging.`,
  },
  {
    slug: 'software-autonomy-stack',
    title: 'Building Our Autonomy Stack',
    date: '2025-06-01',
    category: 'build',
    summary: 'How we built our computer vision pipeline, state machine, and PID controllers for autonomous underwater navigation.',
    thumbnail: '/images/vehicle/placeholder-sub-1.jpg',
    content: `## Architecture\n\nOur autonomy stack is built on ROS 2 Humble and runs on an NVIDIA Jetson. The main components are:\n\n- **Perception** — YOLOv8-based object detection for gate, buoys, and bins\n- **Localization** — Extended Kalman Filter fusing IMU, depth, and DVL data\n- **Planning** — Behavior tree-based mission planner\n- **Control** — Cascaded PID controllers for 6-DOF motion\n\n## Computer Vision\n\nWe trained custom YOLOv8 models on our own dataset of 5,000+ annotated underwater images. Detection runs at 30 FPS on the Jetson with TensorRT optimization.\n\n## Simulation\n\nBefore any pool time, we validate everything in a Gazebo simulation environment with realistic underwater physics and sensor noise models.\n\n## Results\n\nIn simulation, our vehicle can reliably:\n- Navigate through the gate (95% success rate)\n- Hit the correct buoy (88% success rate)\n- Complete the bins task (75% success rate)`,
  },
  {
    slug: 'competition-prep-2025',
    title: 'RoboSub 2025 Competition Preparation',
    date: '2025-05-15',
    category: 'competition',
    summary: 'Final preparations for the RoboSub 2025 competition — vehicle checklist, strategy, and logistics.',
    thumbnail: '/images/gallery/placeholder-1.jpg',
    content: `## Competition Strategy\n\nFor RoboSub 2025, we're focusing on reliable execution of core tasks rather than attempting all challenges. Our priority order:\n\n1. **Gate navigation** — Most reliable task, always attempt first\n2. **Buoy interaction** — High confidence with our vision system\n3. **Dropper/bins** — Medium confidence, attempt if time allows\n4. **Surfacing** — Always reserve time for clean surface\n\n## Pre-Competition Checklist\n\n- [ ] Final leak test (48-hour soak)\n- [ ] Battery capacity verification\n- [ ] Spare parts inventory\n- [ ] Competition presentation preparation\n- [ ] Travel logistics confirmed\n\n## Lessons from Last Year\n\nLast year we over-committed to difficult tasks and ran out of time. This year, we're prioritizing consistency and clean runs over ambition.`,
  },
]

export const categoryLabels: Record<string, string> = {
  design: 'Design',
  testing: 'Testing',
  competition: 'Competition',
  build: 'Build',
}
