export interface VehicleSpec {
  label: string
  value: string
}

export const vehicleSpecs: VehicleSpec[] = [
  { label: 'Vehicle Name', value: 'ORCA' },
  { label: 'Dimensions', value: '60 × 40 × 30 cm' },
  { label: 'Weight (dry)', value: '12.5 kg' },
  { label: 'Weight (wet)', value: '~0.5 kg positive buoyancy' },
  { label: 'Max Depth', value: '5 meters' },
  { label: 'Thrusters', value: '8× Blue Robotics T200' },
  { label: 'Battery', value: '14.8V 4S 10Ah LiPo' },
  { label: 'Runtime', value: '~2 hours' },
  { label: 'Processor', value: 'NVIDIA Jetson Orin Nano' },
  { label: 'Cameras', value: '2× (forward + downward)' },
  { label: 'IMU', value: '9-axis (accel, gyro, mag)' },
  { label: 'Depth Sensor', value: 'Bar30 pressure sensor' },
  { label: 'Framework', value: 'ROS 2 Humble' },
  { label: 'Hull Material', value: '3D printed PETG + acrylic tubes' },
]

export const subsystems = [
  {
    name: 'Propulsion',
    description: 'Eight Blue Robotics T200 thrusters in a vectored configuration provide full 6-DOF movement. Custom ESC interface board manages thruster allocation.',
    icon: 'zap',
  },
  {
    name: 'Vision',
    description: 'Dual-camera system with YOLOv8 object detection running on NVIDIA Jetson. Forward camera for navigation, downward camera for bin tasks.',
    icon: 'eye',
  },
  {
    name: 'Controls',
    description: 'Cascaded PID controllers for depth, heading, and position hold. Extended Kalman Filter fuses IMU, depth, and camera data for state estimation.',
    icon: 'cpu',
  },
  {
    name: 'Hull & Frame',
    description: 'Modular torpedo-style hull with 3D-printed PETG frame and acrylic pressure tubes. Quick-release end caps for rapid electronics access.',
    icon: 'box',
  },
]
