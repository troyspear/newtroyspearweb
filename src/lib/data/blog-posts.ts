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
    slug: 'camera-latency-tensorrt',
    title: 'Fixing Camera Latency: Migrating from ONNX to TensorRT',
    date: '2026-05-23',
    category: 'build',
    summary: 'Tackling the camera lag that dropped us from a target of 720p @ 60 fps down to 0.5 fps, and why we moved our model runtime from ONNX to TensorRT on the Jetson Orin Nano.',
    thumbnail: '/images/vehicle/placeholder-sub-1.jpg',
    media: [
      { type: 'image', src: '', alt: 'Camera feed and inference latency comparison before and after TensorRT migration', caption: 'Camera + inference latency, ONNX vs. TensorRT (placeholder)' },
    ],
    content: `## Overview\n\nToday, we worked on fixing the high latency issue of the camera and implementing localization. The camera is supposed to run at 720p @ 60 fps, but in practice, it was running much slower, at around 0.5 fps.\n\n## Diagnosing the Lag\n\nTo diagnose the problem causing the lag, we went through two main components:\n\n- The runtime of the model\n- The model itself\n\n## Switching from ONNX to TensorRT\n\nThe previous runtime for the model was ONNX, which was chosen because it provided a standardized file format we could run anywhere. We had used ONNX in previous years because of its ease of use, accessibility, and its compatibility with our software stack.\n\nHowever, due to the limited compute power the Jetson Orin Nano has, our main processing unit, we decided to switch over to TensorRT. TensorRT is a runtime, like ONNX, but optimized for inference speed and throughput, which is ideal for our situation.`,
  },
]

export const categoryLabels: Record<string, string> = {
  design: 'Design',
  testing: 'Testing',
  competition: 'Competition',
  build: 'Build',
}
