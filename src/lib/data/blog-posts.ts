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
    slug: 'behavior-tree-sequencing',
    title: 'Finalizing the Behavior Tree and Testing the Camera',
    date: '2026-05-30',
    category: 'design',
    summary: "Finalizing our behavior tree sequencing against the competition task descriptions, cleaning up the workspace, and testing the camera against last year's model.",
    thumbnail: '/images/vehicle/placeholder-sub-1.jpg',
    media: [
      { type: 'image', src: '', alt: 'Current behavior tree structure', caption: 'Our current behavior tree (placeholder)' },
      { type: 'image', src: '', alt: "Camera running last year's model", caption: "Camera tested with last year's model (placeholder)" },
    ],
    content: `Today, we worked on finalizing our behavior tree sequencing and structure, cleaning up our old workspace, and testing our camera with an old model. Our behavior tree structure was mostly finalized, though we decided to go through the competition task descriptions to make sure everything was correctly implemented. We found that some aspects of our behavior tree structure were sequenced incorrectly and tailored for parts that weren't included in this year's sub. For example, we changed the ordering of the sequencing so that the sub would initialize first, creating a more sensible ordering. Another thing we changed was removing unnecessary checks and conditions. Lastly, we removed conditions involving hydrophones, which we do not plan on utilizing in this year's sub.\n\n## Cleaning Up and Testing the Camera\n\nWe also cleaned up our old workspace so everything was more organized and reflective of this year's competition. Moreover, we also tested our camera with last year's model, just to make sure the model worked smoothly with our current pipeline.`,
  },
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
