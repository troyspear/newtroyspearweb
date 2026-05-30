export interface Tdr {
  year: string
  vehicle: string
  vehicleSlug: string
  description: string
  pdfUrl: string
  upcoming?: boolean
}

export const tdrs: Tdr[] = [
  {
    year: '2025-2026',
    vehicle: 'ORCA',
    vehicleSlug: '/vehicle',
    description: '',
    pdfUrl: '',
    upcoming: true,
  },
  {
    year: '2024-2025',
    vehicle: 'Krabby Patty',
    vehicleSlug: '/vehicle/past/krabby-patty',
    description:
      'Octagonal aluminum frame with custom CNC-milled components, dual ZED 2i stereo cameras, NVIDIA Jetson Orin Nano, double-jointed claw, and YOLOv8 with 3D spatial localization.',
    pdfUrl: '/documents/tdr-2025.pdf',
  },
  {
    year: '2023-2024',
    vehicle: 'Aura',
    vehicleSlug: '/vehicle/past/aura',
    description:
      'Newly built AUV integrating YOLOv8 vision, DVL for underwater positioning, upgraded claw and torpedo systems, and behavior tree mission planning on a BlueROV2 frame.',
    pdfUrl: '/documents/tdr-2024.pdf',
  },
  {
    year: '2022-2023',
    vehicle: 'Sea++',
    vehicleSlug: '/vehicle/past/sea-plus-plus',
    description:
      'Our inaugural AUV built by 10 students using a BlueROV2 R2 frame, YOLO v4 object detection, ROS with PID control, and an NVIDIA Jetson Nano. Designed as the foundation for future years.',
    pdfUrl: '/documents/tdr-2023.pdf',
  },
]

/** Published TDRs only (excludes upcoming/in-progress reports). */
export const publishedTdrs = tdrs.filter((tdr) => !tdr.upcoming)
