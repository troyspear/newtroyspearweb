export interface BlogPost {
  slug: string
  title: string
  date: string
  category: 'design' | 'testing' | 'competition' | 'build'
  summary: string
  thumbnail: string
  content: string
  media?: BlogMedia[]
}

export interface BlogMedia {
  type: 'image' | 'video'
  src: string
  alt: string
  caption?: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'hull-design-v2',
    title: 'Hull Design v2: Lessons from Last Year',
    date: '2025-09-15',
    category: 'design',
    summary: 'A complete redesign of our hull based on hydrodynamic analysis and competition feedback. We reduced drag by 30% while improving internal component access.',
    thumbnail: '/images/vehicle/placeholder-sub-1.jpg',
    media: [
      { type: 'image', src: '', alt: 'CFD simulation results comparing hull v1 and v2 drag profiles', caption: 'CFD drag comparison, v1 (left) vs v2 (right)' },
      { type: 'image', src: '', alt: 'CAD render of the new torpedo hull with removable end caps', caption: 'Hull v2 CAD model with quick-release end caps' },
      { type: 'image', src: '', alt: 'Manufactured hull assembled with sensor mounts', caption: 'Final hull assembly with modular sensor mounts' },
    ],
    content: `## Overview\n\nAfter our 2024 competition run, we identified several areas where our hull design could improve. The primary concerns were:\n\n- Excessive drag at higher speeds\n- Difficulty accessing internal electronics for maintenance\n- Insufficient space for additional sensors\n\n## Design Process\n\nWe used CFD simulations to test multiple hull profiles before settling on a streamlined torpedo shape with removable end caps. The new design features:\n\n- **30% drag reduction** compared to v1\n- **Quick-release end caps** for rapid electronics access\n- **Modular sensor mounts** along the hull exterior\n\n## Testing Results\n\nPool tests confirmed improved straight-line speed and maneuverability. The vehicle now achieves stable operation at depths up to 5 meters.\n\n## Next Steps\n\nWe're finalizing the mounting system for our new camera array and will begin integration testing next week.`,
  },
  {
    slug: 'pool-test-march-2025',
    title: 'Pool Test Session: March 2025',
    date: '2025-08-20',
    category: 'testing',
    summary: 'First in-water test of the new vehicle. Validated basic thruster control, depth hold, and leak-free operation at 3 meters.',
    thumbnail: '/images/vehicle/placeholder-sub-2.jpg',
    media: [
      { type: 'image', src: '', alt: 'Vehicle submerged during depth hold test at 3 meters', caption: 'Depth hold test at 3m' },
      { type: 'image', src: '', alt: 'Team members monitoring telemetry during pool test', caption: 'Monitoring real-time telemetry poolside' },
    ],
    content: `## Test Objectives\n\n1. Validate waterproof integrity of new hull\n2. Test basic thruster control (forward, reverse, yaw)\n3. Achieve stable depth hold at 2-3 meters\n4. Check sensor readings underwater\n\n## Results\n\n| Test | Status | Notes |\n|------|--------|-------|\n| Leak test (30 min) | Pass | No moisture detected in any compartment |\n| Forward/reverse | Pass | Smooth acceleration, good response |\n| Yaw control | Pass | 360-degree rotation in < 5 seconds |\n| Depth hold | Partial | Oscillation at 3m, PID needs tuning |\n| Sensor check | Pass | All sensors reporting accurate data |\n\n## Key Takeaways\n\n- Hull integrity is excellent\n- Depth hold PID parameters need adjustment\n- Thruster response time is within spec\n- Camera housing performed well underwater`,
  },
  {
    slug: 'pool-test-may-2025',
    title: 'Pool Test Session: May 2025',
    date: '2025-05-10',
    category: 'testing',
    summary: 'Second pool test focused on autonomous gate navigation and PID tuning. Achieved 4 hours of water time across two sessions.',
    thumbnail: '',
    media: [
      { type: 'image', src: '', alt: 'Vehicle autonomously navigating through the practice gate', caption: 'Autonomous gate navigation attempt' },
      { type: 'image', src: '', alt: 'PID response graph showing depth hold improvement', caption: 'Depth hold PID response, before and after tuning' },
    ],
    content: `## Test Objectives\n\n1. Tune depth hold PID (fix oscillation from March test)\n2. First autonomous gate navigation attempt\n3. Test forward camera vision pipeline underwater\n4. Measure battery runtime under load\n\n## Results\n\n| Test | Status | Notes |\n|------|--------|-------|\n| Depth hold (tuned PID) | Pass | Steady hold at 2m, ±5cm oscillation |\n| Gate detection | Pass | YOLOv8 detects gate at 4m range |\n| Gate navigation | Partial | 3/5 successful passes, drift on approach |\n| Battery runtime | Pass | 1h 48m under moderate load |\n| Camera clarity | Pass | Good visibility up to 5m in pool |\n\n## Water Time Summary\n\n- **Session 1:** 2.5 hours, PID tuning and depth hold validation\n- **Session 2:** 1.5 hours - autonomous gate runs\n- **Total water time this test:** 4 hours\n- **Cumulative water time (season):** 7 hours\n\n## Key Takeaways\n\n- PID tuning resolved the depth oscillation issue from March\n- Gate navigation works but heading hold drifts - need DVL integration\n- Battery life exceeds our 1.5 hour competition target`,
  },
  {
    slug: 'simulation-validation',
    title: 'Simulation vs. Reality: Validating Our Gazebo Environment',
    date: '2025-04-18',
    category: 'testing',
    summary: 'Comparing simulation predictions against real pool test data to calibrate our Gazebo environment for more accurate pre-competition testing.',
    thumbnail: '',
    media: [
      { type: 'image', src: '', alt: 'Side-by-side comparison of Gazebo simulation and real pool test footage', caption: 'Gazebo simulation (left) vs. real pool test (right)' },
      { type: 'image', src: '', alt: 'Graph comparing simulated vs actual thruster response curves', caption: 'Thruster response: simulation vs. reality' },
    ],
    content: `## Overview\n\nBefore committing to pool time, we test extensively in our Gazebo simulation environment. But how accurate is it? We ran the same maneuvers in simulation and in the pool to find out.\n\n## Methodology\n\n- Ran identical mission scripts in Gazebo and in the pool\n- Recorded position, depth, and heading data from both\n- Compared thruster response, turn rates, and depth hold accuracy\n\n## Results\n\n| Metric | Simulation | Real World | Difference |\n|--------|-----------|------------|------------|\n| Forward speed (m/s) | 0.8 | 0.72 | -10% |\n| Yaw rate (deg/s) | 45 | 38 | -16% |\n| Depth hold accuracy | ±2cm | ±5cm | Larger |\n| Gate nav success rate | 95% | 60% | -35% |\n\n## Calibration Changes\n\n- Added drag coefficients to match real-world forward speed\n- Increased sensor noise models (IMU drift was underestimated)\n- Added current simulation to model pool water movement\n\n## Key Takeaways\n\n- Simulation is optimistic - real-world success rates are lower\n- After calibration, forward speed and yaw rate match within 5%\n- Depth hold accuracy gap is mostly from sensor noise\n- Gate navigation gap is primarily from vision, not controls`,
  },
  {
    slug: 'electrical-system-overview',
    title: 'Electrical System Architecture',
    date: '2025-07-10',
    category: 'design',
    summary: 'Documenting our power distribution, custom PCB stack, and sensor integration approach for the 2025-2026 vehicle.',
    thumbnail: '/images/vehicle/placeholder-diagram.jpg',
    media: [
      { type: 'image', src: '', alt: 'Block diagram of the electrical system architecture', caption: 'Electrical system block diagram' },
      { type: 'image', src: '', alt: 'Custom power distribution PCB layout in KiCad', caption: 'Power distribution board, KiCad layout' },
      { type: 'image', src: '', alt: 'Assembled sensor hub PCB with IMU and pressure sensor', caption: 'Sensor hub PCB assembled and tested' },
    ],
    content: `## Power System\n\nOur vehicle runs on a 14.8V 4S LiPo battery pack providing approximately 2 hours of operation. Power distribution is handled through a custom PCB with individual fused circuits for each subsystem.\n\n## Custom PCBs\n\nWe designed three custom PCBs this year:\n\n1. \*\*Power Distribution Board:\*\* Main power routing with voltage monitoring\n2. **Sensor Hub** - Aggregates data from IMU, depth sensor, and hydrophones\n3. **Thruster Controller** - ESC signals and current monitoring for 8 thrusters\n\n## Sensor Suite\n\n- IMU (9-axis) for orientation\n- Pressure sensor for depth\n- 2x cameras (forward + downward)\n- Hydrophone array for acoustic pinger localization\n\n## Communication\n\nAll subsystems communicate via ROS 2 topics over Ethernet. A tether connection is used during testing for real-time monitoring and debugging.`,
  },
  {
    slug: 'software-autonomy-stack',
    title: 'Building Our Autonomy Stack',
    date: '2025-06-01',
    category: 'build',
    summary: 'How we built our computer vision pipeline, state machine, and PID controllers for autonomous underwater navigation.',
    thumbnail: '/images/vehicle/placeholder-sub-1.jpg',
    media: [
      { type: 'image', src: '', alt: 'ROS 2 node graph showing the autonomy stack architecture', caption: 'ROS 2 node graph: full autonomy stack' },
      { type: 'image', src: '', alt: 'YOLOv8 detection output showing gate and buoy detection underwater', caption: 'YOLOv8 detection results on underwater test footage' },
      { type: 'image', src: '', alt: 'Gazebo simulation environment with the vehicle navigating through a gate', caption: 'Gazebo simulation: autonomous gate navigation' },
    ],
    content: `## Architecture\n\nOur autonomy stack is built on ROS 2 Humble and runs on an NVIDIA Jetson. The main components are:\n\n- **Perception** - YOLOv8-based object detection for gate, buoys, and bins\n- **Localization** - Extended Kalman Filter fusing IMU, depth, and DVL data\n- **Planning** - Behavior tree-based mission planner\n- **Control** - Cascaded PID controllers for 6-DOF motion\n\n## Computer Vision\n\nWe trained custom YOLOv8 models on our own dataset of 5,000+ annotated underwater images. Detection runs at 30 FPS on the Jetson with TensorRT optimization.\n\n## Simulation\n\nBefore any pool time, we validate everything in a Gazebo simulation environment with realistic underwater physics and sensor noise models.\n\n## Results\n\nIn simulation, our vehicle can reliably:\n- Navigate through the gate (95% success rate)\n- Hit the correct buoy (88% success rate)\n- Complete the bins task (75% success rate)`,
  },
  {
    slug: 'competition-prep-2025',
    title: 'RoboSub 2025 Competition Preparation',
    date: '2025-05-15',
    category: 'competition',
    summary: 'Final preparations for the RoboSub 2025 competition: vehicle checklist, strategy, and logistics.',
    thumbnail: '/images/gallery/placeholder-1.jpg',
    media: [
      { type: 'image', src: '', alt: 'Competition readiness checklist whiteboard', caption: 'Pre-competition checklist' },
    ],
    content: `## Competition Strategy\n\nFor RoboSub 2025, we're focusing on reliable execution of core tasks rather than attempting all challenges. Our priority order:\n\n1. **Gate navigation** - Most reliable task, always attempt first\n2. **Buoy interaction** - High confidence with our vision system\n3. **Dropper/bins** - Medium confidence, attempt if time allows\n4. **Surfacing** - Always reserve time for clean surface\n\n## Pre-Competition Checklist\n\n- [ ] Final leak test (48-hour soak)\n- [ ] Battery capacity verification\n- [ ] Spare parts inventory\n- [ ] Competition presentation preparation\n- [ ] Travel logistics confirmed\n\n## Lessons from Last Year\n\nLast year we over-committed to difficult tasks and ran out of time. This year, we're prioritizing consistency and clean runs over ambition.`,
  },
]

export const categoryLabels: Record<string, string> = {
  design: 'Design',
  testing: 'Testing',
  competition: 'Competition',
  build: 'Build',
}
