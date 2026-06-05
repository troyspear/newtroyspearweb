export interface Update {
  id: string
  title: string
  date: string
  slug: string
}

export const updates: Update[] = [
  {
    id: '2',
    title: 'Finalizing the Behavior Tree and Testing the Camera',
    date: '2026-05-30',
    slug: 'behavior-tree-sequencing',
  },
  {
    id: '1',
    title: 'Fixing Camera Latency: Migrating from ONNX to TensorRT',
    date: '2026-05-23',
    slug: 'camera-latency-tensorrt',
  },
]
