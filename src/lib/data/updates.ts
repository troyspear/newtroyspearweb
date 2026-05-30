export interface Update {
  id: string
  title: string
  date: string
  slug: string
}

export const updates: Update[] = [
  {
    id: '1',
    title: 'Fixing Camera Latency: Migrating from ONNX to TensorRT',
    date: '2026-05-23',
    slug: 'camera-latency-tensorrt',
  },
]
