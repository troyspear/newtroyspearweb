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
  {
    id: '4',
    title: 'DROPPER: From First Prototype to Final Design',
    date: '2026-05-20',
    slug: 'dropper-development',
  },
  {
    id: '3',
    title: 'CLAW: Initial Brainstorming',
    date: '2026-04-10',
    slug: 'claw-initial-brainstorming',
  },
]
