// Past-vehicle technical summaries, pulled from each season's TDR
// (public/documents/tdr-20XX.pdf).
import type { Spec } from '@/components/vehicle/VehicleBlocks'

export interface Highlight {
  title: string
  body: string
}

export interface PastVehicle {
  specs: Spec[]
  highlights: Highlight[]
  tdr: { href: string; label: string }
}

export const krabbyPatty: PastVehicle = {
  specs: [
    { label: 'Onboard computer', value: 'NVIDIA Jetson Orin Nano' },
    { label: 'Flight controller', value: 'Pixhawk PX4', detail: 'Via MAVROS / MAVLink' },
    { label: 'Cameras', value: '2x Stereolabs ZED 2i', detail: 'Depth, 6-DoF tracking, built-in IMU' },
    { label: 'Frame', value: 'Octagonal aluminum', detail: '1010 extrusions + CNC-milled 1/4 in 6061-T6 plates' },
    { label: 'Thruster layout', value: 'BlueROV2 Heavy', detail: 'Six degrees of freedom' },
    { label: 'Main compartment', value: 'Custom welded aluminum', detail: '2 windows, 10 ports, 4 latches' },
    { label: 'Power', value: '14.8 V LiPo', detail: 'Two packs in parallel via a custom combiner board' },
    { label: 'Software', value: 'ROS 2, YOLOv8, ZED SDK, Nav2' },
    { label: 'Team', value: '19 students', detail: '6 mechanical, 4 electrical, 9 software' },
  ],
  highlights: [
    { title: 'Shallow octagonal frame', body: 'Replaced 2024’s tall rectangular frame, which caused significant drag, with a shallow octagon for better handling and hydrodynamics.' },
    { title: 'In-house hull', body: 'The main compartment, nicknamed the "patty", was machined and welded in-house from 6061 aluminum, sealed with custom silicone O-rings and a 3/4 in lid.' },
    { title: 'Double-jointed claw', body: 'A servo-driven double-joint keeps the claw’s hands parallel. Task-specific grips hold the cup, lid, and ladle, and the claw retracts upward when docked.' },
    { title: 'Combined torpedo + dropper', body: 'One servo and a compound gearbox drove a 360° barrel: spring torpedoes fired at 30° and 60°, and markers dropped through offset holes.' },
    { title: 'First electrical subteam', body: 'New battery combiner, high-power, and low-power boards. The kill switch stopped the thrusters while keeping the Jetson powered, so software did not need to reboot between runs.' },
    { title: 'SHRUB behavior tree', body: 'Mission planning moved from a finite state machine to a behavior tree with a shared blackboard, validated in Gazebo simulation with ArduPilot SITL before pool tests.' },
  ],
  tdr: { href: '/documents/tdr-2025.pdf', label: 'Read TDR 2024-2025 (PDF)' },
}

export const aura: PastVehicle = {
  specs: [
    { label: 'Onboard computer', value: 'NVIDIA Jetson Nano' },
    { label: 'Flight controller', value: 'Pixhawk PX4', detail: 'Via MAVROS / MAVLink' },
    { label: 'Frame', value: 'Blue Robotics BlueROV2' },
    { label: 'Navigation', value: 'Doppler Velocity Log (DVL)', detail: 'Replaced sonar after IMU-only results were poor' },
    { label: 'Vision', value: 'YOLOv8', detail: 'With OpenCV' },
    { label: 'Mission planning', value: 'Behavior tree', detail: 'BehaviorTree.CPP on ROS' },
    { label: 'Design tools', value: 'Onshape + SimScale', detail: 'CAD and simulation of components' },
    { label: 'Team', value: '20 students' },
  ],
  highlights: [
    { title: 'Built for modularity', body: 'Aura was designed to handle the basics of autonomous movement and to be easy to upgrade in later seasons.' },
    { title: 'DVL navigation', body: 'After weighing the complexity of sonar and talking with other teams, we added a DVL. It became essential because the IMU alone gave mediocre results.' },
    { title: 'Upgraded tools', body: 'Upgraded claw and torpedo systems over Sea++, with components iterated in Onshape and SimScale.' },
    { title: 'PID + power boards', body: 'A PID controller adjusts thruster PWM from sensor feedback, powered through our first custom power distribution boards.' },
  ],
  tdr: { href: '/documents/tdr-2024.pdf', label: 'Read TDR 2023-2024 (PDF)' },
}

export const seaPlusPlus: PastVehicle = {
  specs: [
    { label: 'Onboard computer', value: 'NVIDIA Jetson Nano', detail: '4 GB RAM' },
    { label: 'Flight controller', value: 'Pixhawk PX4', detail: 'Via MAVROS / MAVLink' },
    { label: 'Frame', value: 'Blue Robotics BlueROV2 R2' },
    { label: 'Cameras', value: '2x Low-Light HD USB', detail: 'One forward, one downward' },
    { label: 'Backup sensing', value: '2x Ping sonar altimeters', detail: 'Mounted beside the front camera' },
    { label: 'Claw', value: 'Modified Newton Subsea Gripper', detail: 'Custom 3D-printed jaws and 4 mm carbon-fiber forks' },
    { label: 'Vision', value: 'YOLO v4 + Sea-Thru', detail: 'Color correction for underwater glare and tint' },
    { label: 'Power', value: 'Turnigy 5000 mAh 4S LiPo' },
    { label: 'Team', value: '10 students', detail: 'Our first season' },
  ],
  highlights: [
    { title: 'Off-the-shelf foundation', body: 'With little manufacturing equipment, we used a BlueROV2 R2 frame for its durability and support for off-the-shelf parts.' },
    { title: 'Two-camera vision', body: 'A forward camera localized the vehicle relative to the gate and buoys; a downward camera detected symbols and centered the vehicle over them.' },
    { title: 'Sea-Thru color correction', body: 'We applied Derya Akkaynak’s Sea-Thru algorithm to remove underwater tint, which also let us train on images taken on land and in simulation.' },
    { title: 'Behavior tree from day one', body: 'Chose a behavior tree over a finite state machine for easier scaling, runtime reconfiguration, and ROS integration.' },
  ],
  tdr: { href: '/documents/tdr-2023.pdf', label: 'Read TDR 2022-2023 (PDF)' },
}
