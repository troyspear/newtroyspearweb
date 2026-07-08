export interface BlogPost {
	slug: string;
	title: string;
	date: string;
	category: "design" | "testing" | "competition" | "build";
	summary: string;
	thumbnail: string;
	content: string;
	media?: BlogMedia[];
}

export interface BlogMedia {
	type: "image" | "video";
	src: string;
	alt: string;
	caption?: string;
}

export const blogPosts: BlogPost[] = [
	{
		slug: "placeholder-update",
		title: "Placeholder: Lorem Ipsum Blog Post",
		date: "2026-07-08",
		category: "build",
		summary:
			"A placeholder blog post used to pad the scrolling marquee on wide desktop viewports. Replace with real content later.",
		thumbnail: "/images/vehicle/placeholder-sub-1.jpg",
		content: `## Placeholder Heading

This is placeholder content. Replace it with a real update when ready.

- Lorem ipsum dolor sit amet
- Consectetur adipiscing elit
- Sed do eiusmod tempor incididunt`,
	},
	{
		slug: "orca-first-pool-trials",
		title: "ORCA Back in the Water: Second Pool Trials",
		date: "2026-07-07",
		category: "testing",
		summary:
			"ORCA's second in-water test: leak checks and movement scripts go smoothly until a misaligned Pixhawk and ZED 2i send the sub into the floor, and an overtightened kill switch lets water into the battery compartment.",
		thumbnail: "/images/pool.jpeg",
		media: [
			{
				type: "image",
				src: "/images/pool.jpeg",
				alt: "ORCA in the pool during its second water trials",
				caption: "ORCA during its second pool trial (7 Jul 2026)",
			},
		],
		content: `## Back in the Water

Today, we water-tested the sub again. We tested the sub for any leaks, along with scripts that tested the sub's movement, such as depth holding, forward movement, strafing, and more. When we put the sub into the water, there were no signs of leakage, which was great. A script that made the sub surge forward was run, but something unexpected happened: the sub moved downward and to the left, crashing into the ground. We hurriedly pulled the sub out of the water to check for any leaks, and to our dismay, there was some minor leakage in the battery compartment. Some of our members were dispatched to retrieve isopropyl alcohol, tissue paper, and a screwdriver kit to debug and find out how severe the damage was. We found that water had leaked into the kill switch, which made its light stop working; however, the kill switch still worked. The cause was the kill switch being screwed too tightly, so our precautionary measures ended up backfiring. The cause of the sub's movement going awry was the Pixhawk and ZED 2i stereo camera being misaligned. These two devices contain important position-tracking sensors, so if the sensors were misaligned, the sub would be misaligned as well.

## Fixing the Leak

To fix this, we decided to first coat the kill switch in a layer of Gorilla epoxy and let it cure for about 12 hours. Once the first layer is roughly set, another layer of JB Weld epoxy will be added on top.

To fix the misaligned sensors, we are also printing a new electrical tray. The tray will house all our components, from the Jetson Orin Nano to the Pixhawk.

## Next Steps

Hopefully, next time we are able to properly test our software code and not be held back by electrical and mechanical bugs.`,
	},
	{
		slug: "behavior-tree-sequencing",
		title: "Finalizing the Behavior Tree and Testing the Camera",
		date: "2026-05-30",
		category: "design",
		summary:
			"Finalizing our behavior tree sequencing against the competition task descriptions, cleaning up the workspace, and testing the camera against last year's model.",
		thumbnail: "/images/vehicle/placeholder-sub-1.jpg",
		media: [
			{
				type: "image",
				src: "",
				alt: "Current behavior tree structure",
				caption: "Our current behavior tree (placeholder)",
			},
			{
				type: "image",
				src: "",
				alt: "Camera running last year's model",
				caption: "Camera tested with last year's model (placeholder)",
			},
		],
		content: `Today, we worked on finalizing our behavior tree sequencing and structure, cleaning up our old workspace, and testing our camera with an old model. Our behavior tree structure was mostly finalized, though we decided to go through the competition task descriptions to make sure everything was correctly implemented. We found that some aspects of our behavior tree structure were sequenced incorrectly and tailored for parts that weren't included in this year's sub. For example, we changed the ordering of the sequencing so that the sub would initialize first, creating a more sensible ordering. Another thing we changed was removing unnecessary checks and conditions. Lastly, we removed conditions involving hydrophones, which we do not plan on utilizing in this year's sub.\n\n## Cleaning Up and Testing the Camera\n\nWe also cleaned up our old workspace so everything was more organized and reflective of this year's competition. Moreover, we also tested our camera with last year's model, just to make sure the model worked smoothly with our current pipeline.`,
	},
	{
		slug: "camera-latency-tensorrt",
		title: "Fixing Camera Latency: Migrating from ONNX to TensorRT",
		date: "2026-05-23",
		category: "build",
		summary:
			"Tackling the camera lag that dropped us from a target of 720p @ 60 fps down to 0.5 fps, and why we moved our model runtime from ONNX to TensorRT on the Jetson Orin Nano.",
		thumbnail: "/images/vehicle/placeholder-sub-1.jpg",
		media: [
			{
				type: "image",
				src: "",
				alt: "Camera feed and inference latency comparison before and after TensorRT migration",
				caption: "Camera + inference latency, ONNX vs. TensorRT (placeholder)",
			},
		],
		content: `## Overview\n\nToday, we worked on fixing the high latency issue of the camera and implementing localization. The camera is supposed to run at 720p @ 60 fps, but in practice, it was running much slower, at around 0.5 fps.\n\n## Diagnosing the Lag\n\nTo diagnose the problem causing the lag, we went through two main components:\n\n- The runtime of the model\n- The model itself\n\n## Switching from ONNX to TensorRT\n\nThe previous runtime for the model was ONNX, which was chosen because it provided a standardized file format we could run anywhere. We had used ONNX in previous years because of its ease of use, accessibility, and its compatibility with our software stack.\n\nHowever, due to the limited compute power the Jetson Orin Nano has, our main processing unit, we decided to switch over to TensorRT. TensorRT is a runtime, like ONNX, but optimized for inference speed and throughput, which is ideal for our situation.`,
	},
	{
		slug: "claw-initial-brainstorming",
		title: "CLAW: Initial Brainstorming",
		date: "2026-04-10",
		category: "design",
		summary:
			"Early brainstorming and sketches for CLAW. Rough ideas for now, to be elaborated later.",
		thumbnail: "/images/vehicle/placeholder-sub-1.jpg",
		media: [
			{
				type: "image",
				src: "",
				alt: "CLAW initial sketches",
				caption: "Initial sketches (placeholder)",
			},
		],
		content: `## Brainstorming\n\nBrief ideas for now, to be elaborated later.\n\n- Initial brainstorming\n- Sketches`,
	},
	{
		slug: "dropper-development",
		title: "DROPPER: From First Prototype to Final Design",
		date: "2026-05-20",
		category: "build",
		summary:
			"The full development log of the dropper, from a 38mm rough prototype through five iterations to a final straight-finned, screw-in design — and its accuracy testing.",
		thumbnail: "/images/vehicle/dropper-v5-may20.png",
		media: [
			{
				type: "image",
				src: "/images/vehicle/dropper-v1-apr17.png",
				alt: "First rough dropper prototype",
				caption: "v1 — first rough prototype (17 Apr 2026)",
			},
			{
				type: "image",
				src: "/images/vehicle/dropper-helical-may10.png",
				alt: "Dropper with helical fins",
				caption: "v3 — experimental helical fins (10 May 2026)",
			},
			{
				type: "image",
				src: "/images/vehicle/dropper-helical-may16.png",
				alt: "Dropper with helical fins moved to the back",
				caption: "v4 — helical fins moved to the back (16 May 2026)",
			},
			{
				type: "image",
				src: "/images/vehicle/dropper-v5-may20.png",
				alt: "Final dropper with straight screw-in fins",
				caption: "v5 — final straight screw-in fins (20 May 2026)",
			},
		],
		content: `## Iterations\n\n**17 Apr 2026 — v1.** First rough prototype created. Diameter was 38mm.\n\n**1 May 2026.** Printed and tested; the fins broke off and the body was not dense enough.\n\n**7 May 2026 — v2.** Experimental teardrop shape, two halves printed sideways and connected with 3D-printed pins. Proved ineffective due to lack of fins. Added one 14mm steel bearing for density and reduced the diameter to 20mm.\n\n**10 May 2026 — v3.** Added helical fins (also experimental). Used two 14mm steel bearings in the lower part and a two-part assembly held together with one-way connections. Size increased to 28mm diameter for a 30mm barrel.\n\n**16 May 2026 — v4.** Helical fins moved to the back after a better understanding of the dynamics.\n\n**20 May 2026 — v5 (final).** Switched to straight fins that screw in, allowing for easy fin changes.\n\n## New Testing Method\n\nWe built a stand out of PVC tubes weighed down with bricks, with a mount for the dropper that adjusts for each hole and centers onto the target.\n\nThe target used 50cm-increment circles out to 250cm diameter:\n\n- 50cm — orange\n- 150cm — red\n- 250cm — white\n\nThe dropper was released by hand via actuation of the obstruction block and allowed to drop with minimal disturbance in the water by a diver.\n\n## Results\n\nOut of 10 trials: 7 orange, 2 red, and 1 between red and orange. Average deviation was 25mm–75mm.`,
	},
];

export const categoryLabels: Record<string, string> = {
	design: "Design",
	testing: "Testing",
	competition: "Competition",
	build: "Build",
};
