// ORCA (RoboSub 2026) technical content. Sourced from the 2026 TDR
// (public/documents/tdr-2026.pdf) and the team's build logs, so the vehicle
// page can stand on its own without sending readers to the PDF.
import type { Spec, VehicleFigure } from '@/components/vehicle/VehicleBlocks'

const fig = (
  name: string,
  width: number,
  height: number,
  alt: string,
  caption: string,
): VehicleFigure => ({ src: `/images/vehicle/orca/${name}.png`, width, height, alt, caption })

export const orcaSummary =
  'ORCA is our 2026 autonomous underwater vehicle. It builds on Krabby Patty with a redesigned claw, dropper, and torpedo, a safer power and kill-switch architecture, and a ROS 2 software stack that uses two ZED 2i stereo cameras and YOLO26 object detection for both perception and localization. Every design choice this season aimed at one thing: a reliable, modular vehicle that scores points consistently in the competition pool.'

export const orcaSpecs: Spec[] = [
  { label: 'Onboard computer', value: 'NVIDIA Jetson Orin Nano', detail: 'Runs detection, localization, and mission planning' },
  { label: 'Flight controller', value: 'Pixhawk PX4', detail: 'Driven over MAVLink via MAVROS' },
  { label: 'Cameras', value: '2x Stereolabs ZED 2i', detail: 'Forward + downward, 1080p @ 30 fps, 120 mm stereo baseline' },
  { label: 'Navigation sensors', value: 'ZED 2i IMU, barometer, magnetometer', detail: 'Visual SLAM + IMU odometry replaces last year’s DVL' },
  { label: 'Power', value: '14.8 V LiPo', detail: '2x Blue Robotics 10 Ah packs, 4x Turnigy 5000 mAh 4S packs' },
  { label: 'Power rails', value: '12 V thrusters, 2x 7.125 V servos', detail: 'Buck-regulated on a custom high-power board' },
  { label: 'Frame', value: '6061 aluminum', detail: 'Modular bottom plate with a hole grid for mounting tools' },
  { label: 'Main compartment', value: 'Clear acrylic enclosure', detail: '1 camera window, 20 penetrator ports' },
  { label: 'Software', value: 'ROS 2 Humble', detail: 'YOLO26, ZED SDK, Nav2, OpenCV, PyTorch, Pymavlink' },
  { label: 'Manipulators', value: 'Claw, dropper, torpedo', detail: 'Compliant PLA/TPU claw, two-barrel dropper, self-propelled electric torpedo' },
  { label: 'Fabrication', value: 'In-house', detail: 'Frame machined from aluminum; tools 3D printed in PLA and TPU' },
  { label: 'Team', value: '17 students', detail: '8 mechanical, 3 electrical, 6 software' },
]

export interface Task {
  priority: number
  name: string
  task: string
  reason: string
}

/** RoboSub 2026 tasks in the order we chose to attempt them. */
export const taskPriorities: Task[] = [
  { priority: 1, name: 'Begin Assessment', task: 'Task 1', reason: 'Light on logic and movement, so it is the most reliable source of points.' },
  { priority: 2, name: 'Recon', task: 'Task 3', reason: 'Drop markers into bins. The new dropper was designed specifically for this task.' },
  { priority: 3, name: 'Resupply', task: 'Task 5', reason: 'Main target for the claw; needs mechanical and software systems working together.' },
  { priority: 4, name: 'Avoid Debris', task: 'Task 2', reason: 'Depends heavily on precise localization in a changing pool environment.' },
  { priority: 5, name: 'Torpedoes', task: 'Task 4', reason: 'Needs accurate aiming plus the new electric torpedo firing on command.' },
  { priority: 6, name: 'Return Home', task: 'Task 6', reason: 'Relies on the vehicle knowing where it started after a full run.' },
]

export interface Subsystem {
  id: string
  name: string
  summary: string
  points: string[]
  figures: VehicleFigure[]
}

export interface SubsystemGroup {
  name: 'Mechanical' | 'Electrical' | 'Software'
  intro: string
  subsystems: Subsystem[]
}

export const subsystemGroups: SubsystemGroup[] = [
  {
    name: 'Mechanical',
    intro:
      'The mechanical goal for ORCA was reliability and modularity. The frame and main compartment are machined from 6061 aluminum; custom tools are 3D printed in PLA and TPU so they can be iterated quickly.',
    subsystems: [
      {
        id: 'frame',
        name: 'Frame and mounting plate',
        summary:
          'The bottom panel carries an array of holes so tools like the claw and torpedo launcher can be mounted, moved, and swapped without new parts.',
        points: [
          'Machined from 6061 aluminum',
          'Hole grid lets subsystems be repositioned as testing reveals better layouts',
          'Designed so the frame can be reused on future vehicles',
        ],
        figures: [fig('mounting-plate', 1134, 495, 'CAD render of ORCA’s mounting plate with a grid of holes', 'Modular mounting plate')],
      },
      {
        id: 'main-compartment',
        name: 'Main compartment',
        summary:
          'The electrical bay holds the Jetson, Pixhawk, and power electronics in a clear acrylic enclosure on a custom 3D-printed electronics tray.',
        points: [
          'One window for camera visibility and 20 ports for cables and future sensors',
          'Switched back to an off-the-shelf acrylic tube after waterproofing quality issues with 2025’s custom welded enclosure',
          'Tray was reprinted after pool trials to keep the Pixhawk and ZED 2i sensors aligned',
        ],
        figures: [fig('main-compartment', 658, 396, 'CAD render of the acrylic main compartment with electronics tray', 'Main compartment and electronics tray')],
      },
      {
        id: 'claw',
        name: 'Claw',
        summary:
          '2025’s 1:1 gear train did not transfer enough torque to hold objects. ORCA uses a hybrid compliant claw: rigid PLA for structure and flexible TPU fingers that conform to what they grab.',
        points: [
          'Compliant TPU fingers chosen over printed "bristles", which were hard to print and wasted support material',
          'Four-bar "double-joint" linkage keeps the fingers parallel as they close',
          'Four-gear series train with an idler gear turns the two arms in opposite directions (a worm gear was ruled out by the servo’s rotation limit)',
          'Gear plate sits flush on the servo face with countersunk fasteners',
        ],
        figures: [
          fig('claw-assembly', 894, 800, 'CAD render of the full claw assembly with gear train and compliant fingers', 'Full claw assembly'),
          fig('claw-compliant', 494, 539, 'Close-up of a compliant TPU claw finger', 'Compliant TPU finger'),
          fig('claw-double-joint', 917, 667, 'Close-up of the four-bar double-joint linkage', 'Double-joint linkage'),
        ],
      },
      {
        id: 'dropper',
        name: 'Dropper',
        summary:
          'Last year the dropper and torpedo shared one servo and a rotating barrel. For 2026 they are separate: a simple two-barrel dropper with cover plates, inspired by Delhi Technological University’s LAPRAS 2.0.',
        points: [
          'SER-2010 servo releases markers for the Recon (Bins) task',
          'Markers fall aligned with the planned path instead of perpendicular to it',
          'V1 used a 6 mm guide rod and finned markers; V2 adds a compartment for steel weights so markers drop quickly',
          'Markers went through five iterations (see Testing below)',
        ],
        figures: [
          fig('dropper-v1', 451, 388, 'CAD render of the first dropper design', 'Dropper V1'),
          fig('dropper-v2', 342, 339, 'CAD render of the second dropper design with a marker loaded', 'Dropper V2 with marker'),
        ],
      },
      {
        id: 'torpedo',
        name: 'Torpedo',
        summary:
          'The spring-loaded launcher was unreliable, so ORCA moves to a self-propelled electric torpedo. A small DC motor spins a propeller, and a microcontroller with a photoresistor reads binary-encoded fire signals flashed by an LED on the vehicle.',
        points: [
          'First proof-of-concept was 18 in long, built from readily available materials',
          'Later versions shrink it toward regulation size and test different hull materials',
          'No off-the-shelf watertight brushless motor fits at this scale, so we built a custom watertight hull around a brushed DC motor',
        ],
        figures: [fig('torpedo-concept', 1521, 938, 'Cutaway CAD render of the electric torpedo proof of concept', 'Electric torpedo proof of concept (cutaway)')],
      },
    ],
  },
  {
    name: 'Electrical',
    intro:
      'The electrical subteam focused on safety and faster debugging: clean power distribution, protection against surges, and a kill switch that reliably stops the vehicle.',
    subsystems: [
      {
        id: 'power',
        name: 'Power distribution and kill switch',
        summary:
          'A custom high-power board routes power from the 14.8 V LiPo batteries to everything that moves. The waterproof kill switch cuts this board directly, stopping all thrusters and actuators at once.',
        points: [
          'Two buck converters give two independent 7.125 V servo rails; a separate buck regulator supplies a stable 12 V thruster rail',
          'A 555 timer-driven precharge circuit switches a high-current relay through a MOSFET to stop the inrush current that hurt an earlier board',
          'Diode array for overvoltage protection; screw terminals for fast repair',
          'A hard kill forces every subsystem to re-initialize cleanly, which makes sensor desyncs and software deadlocks easier to isolate',
          'IP67 inline kill switch rated 12–24 V, 20 A',
        ],
        figures: [fig('electrical-schematic', 1400, 675, 'Wiring diagram from LiPo batteries through kill switch and power distribution to ESCs, thrusters, Pixhawk, Jetson, and ZED 2i', 'Power system wiring diagram')],
      },
    ],
  },
  {
    name: 'Software',
    intro:
      'The software stack runs on ROS 2. Specialized processes talk over publish/subscribe topics, from high-level mission planning all the way down to thruster PWM.',
    subsystems: [
      {
        id: 'architecture',
        name: 'Architecture and control',
        summary:
          'MAVROS bridges ROS 2 and MAVLink so the Jetson can command the Pixhawk PX4. A PID loop uses IMU data to adjust the PWM signals sent to each thruster.',
        points: [
          'Detection node: runs YOLO26 and publishes 3D bounding boxes and object positions',
          'Localization node: tracks position relative to the start, and can load or build pool maps with Nav2',
          'Behavior tree node: makes high-level decisions from mission goals and sensor data',
          'Control node: turns behavior-tree decisions into motion commands sent to the Pixhawk over MAVLink',
        ],
        figures: [fig('software-stack', 657, 332, 'Block diagram of vision, localization, behavior tree, and movement and control subsystems', 'Software stack overview')],
      },
      {
        id: 'vision',
        name: 'Vision and localization',
        summary:
          'Two ZED 2i stereo cameras, one facing forward and one facing down, provide depth maps, 6-DoF tracking, and tracking of fixed floor markers. That gives us perception and localization from one sensor family.',
        points: [
          'Dropping the DVL simplified the stack a lot, at the cost of a small drop in localization accuracy',
          'Two-stage intercept: first re-center the target in the front camera at matching depth, then use stereo depth to estimate its 3D position and hand it to the behavior tree',
          'Moved model inference from ONNX Runtime to TensorRT after the camera pipeline fell to ~0.5 fps on the Jetson',
        ],
        figures: [],
      },
    ],
  },
]

export interface DesignChange {
  area: string
  before: string
  after: string
  why: string
}

/** What changed from Krabby Patty (2025) to ORCA (2026). */
export const designChanges: DesignChange[] = [
  { area: 'Claw', before: 'Rigid claw, 1:1 series gears', after: 'Hybrid compliant PLA + TPU claw', why: 'Old claw could not grip with enough force' },
  { area: 'Dropper + torpedo', before: 'Combined on one servo and rotating barrel', after: 'Two separate subsystems', why: 'Combining them caused backlash and inaccurate markers' },
  { area: 'Torpedo', before: 'Spring-loaded launcher', after: 'Self-propelled electric torpedo', why: 'Springs launched inconsistently' },
  { area: 'Main compartment', before: 'Custom welded aluminum box', after: 'Off-the-shelf acrylic enclosure', why: 'Custom box had waterproofing quality issues' },
  { area: 'Object detection', before: 'YOLOv8', after: 'YOLO26', why: 'Faster detection for quicker task completion' },
]

export interface TestResult {
  title: string
  status: 'Result' | 'Protocol'
  summary: string
  points: string[]
  link?: { href: string; label: string }
}

export const testing: TestResult[] = [
  {
    title: 'Marker drop tests',
    status: 'Result',
    summary:
      'Recon (Bins) points come down to consistency, so each marker version was dropped in a ~6 ft pool and its path checked against a metal rod.',
    points: [
      'V1: fully 3D printed, not dense enough to sink',
      'V2: added a 14 mm 316L steel bearing, but without fins it drifted',
      'V3–V4: experimented with helical fins',
      'V5: straight screw-in fins plus a second bearing. Most consistent version, adopted as final',
      'Accuracy test (10 drops onto a ringed target): 7 in the inner 50 cm ring, 2 in the 150 cm ring, 1 on the boundary between them',
    ],
    link: { href: '/documentation/dropper-development', label: 'Dropper build log' },
  },
  {
    title: 'Second pool trial (July 2026)',
    status: 'Result',
    summary:
      'Leak checks and movement scripts (depth hold, surge, strafe) on the full vehicle.',
    points: [
      'Hull passed the initial leak check with no water inside',
      'A surge command sent the vehicle down and left: the Pixhawk and ZED 2i were misaligned, so their motion sensors disagreed',
      'An overtightened kill switch let water into the battery compartment',
      'Fixes: two layers of epoxy on the kill switch, and a reprinted electronics tray to lock sensor alignment',
    ],
    link: { href: '/documentation/orca-first-pool-trials', label: 'Pool trial log' },
  },
  {
    title: 'Vision latency',
    status: 'Result',
    summary:
      'The camera pipeline targeted 720p @ 60 fps but ran at roughly 0.5 fps on the Jetson Orin Nano.',
    points: [
      'Profiled both the model runtime and the model itself',
      'Moved inference from ONNX Runtime to TensorRT, which is built for GPU inference speed on NVIDIA hardware',
    ],
    link: { href: '/documentation/camera-latency-tensorrt', label: 'TensorRT build log' },
  },
  {
    title: 'Claw tests',
    status: 'Protocol',
    summary: 'Strength and shape tests, run on land and then repeated underwater.',
    points: [
      'Strength: lift a 1 lb object, shake it, add 1 lb at a time until the claw lets go',
      'Shape: grip a circle, square, hoop, handle, and hexagon and record which hold',
    ],
  },
  {
    title: 'Torpedo accuracy tests',
    status: 'Protocol',
    summary: 'Aim at a target, fire, and measure the miss distance.',
    points: ['10 shots per configuration, each miss distance recorded', 'Same procedure used for the dropper accuracy test'],
  },
]
