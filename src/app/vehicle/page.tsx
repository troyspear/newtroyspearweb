import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ClipboardList, FileText } from "lucide-react";
import GltfViewerLoader from "@/components/vehicle/GltfViewerLoader";
import {
	Card,
	Eyebrow,
	Figure,
	SectionTitle,
	SpecGrid,
} from "@/components/vehicle/VehicleBlocks";
import {
	designChanges,
	orcaSpecs,
	orcaSummary,
	subsystemGroups,
	taskPriorities,
	testing,
} from "@/lib/data/orca";

export const metadata: Metadata = {
	title: "ORCA",
	description:
		"ORCA, Troy SPEAR's 2026 RoboSub AUV: specs, mechanical, electrical, and software design, competition strategy, and test results.",
};

const pageNav = [
	{ href: "#strategy", label: "Strategy" },
	{ href: "#specs", label: "Specs" },
	{ href: "#mechanical", label: "Mechanical" },
	{ href: "#electrical", label: "Electrical" },
	{ href: "#software", label: "Software" },
	{ href: "#changes", label: "What changed" },
	{ href: "#testing", label: "Testing" },
];

export default function VehiclePage() {
	return (
		<div className="pt-20 pb-16">
			{/* Header */}
			<section className="px-5 sm:px-8 pt-16 pb-10">
				<div className="max-w-6xl mx-auto">
					<Eyebrow>RoboSub 2026 &middot; Current vehicle</Eyebrow>
					<h1 className="mt-3 font-display text-4xl sm:text-5xl font-light text-fg tracking-tight">
						ORCA
					</h1>
					<p className="mt-5 text-base sm:text-lg text-fg-secondary max-w-3xl leading-relaxed">
						{orcaSummary}
					</p>
					<nav
						aria-label="On this page"
						className="mt-8 flex flex-wrap gap-2"
					>
						{pageNav.map((item) => (
							<a
								key={item.href}
								href={item.href}
								className="px-3.5 py-1.5 rounded-full text-sm font-medium bg-elevated border border-border text-fg-secondary hover:text-accent hover:border-accent/50 transition-colors"
							>
								{item.label}
							</a>
						))}
					</nav>
				</div>
			</section>

			<section className="px-5 sm:px-8 pb-16">
				<div className="max-w-5xl mx-auto">
					<GltfViewerLoader url="/models/orca-compressed.glb" />
				</div>
			</section>

			{/* Competition strategy */}
			<section className="px-5 sm:px-8 py-16 bg-accent-subtle border-y border-border-subtle">
				<div className="max-w-6xl mx-auto">
					<SectionTitle
						id="strategy"
						eyebrow="The mission"
						title="What ORCA has to do"
						intro="RoboSub is an international competition run by RoboNation where student-built submarines complete an underwater obstacle course with no human control. Once the vehicle is in the water, it has to find each task with its own cameras and decide what to do on its own. Time in the pool is limited, so we ranked the 2026 tasks by how reliably we can score them."
					/>
					<ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
						{taskPriorities.map((t) => (
							<li
								key={t.name}
								className="rounded-xl border border-border bg-elevated p-5 shadow-sm"
							>
								<div className="flex items-center gap-3">
									<span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-page text-sm font-semibold">
										{t.priority}
									</span>
									<div>
										<h3 className="text-base font-medium text-fg leading-tight">
											{t.name}
										</h3>
										<p className="text-xs text-fg-muted">{t.task}</p>
									</div>
								</div>
								<p className="mt-3 text-sm text-fg-secondary leading-relaxed">
									{t.reason}
								</p>
							</li>
						))}
					</ol>
				</div>
			</section>

			{/* Specs */}
			<section className="px-5 sm:px-8 py-16">
				<div className="max-w-6xl mx-auto">
					<SectionTitle
						id="specs"
						eyebrow="At a glance"
						title="Specifications"
					/>
					<SpecGrid specs={orcaSpecs} />
				</div>
			</section>

			{/* Subsystems */}
			{subsystemGroups.map((group, gi) => (
				<section
					key={group.name}
					className={`px-5 sm:px-8 py-16 ${gi % 2 === 0 ? "bg-surface/60 border-y border-border-subtle" : ""}`}
				>
					<div className="max-w-6xl mx-auto">
						<SectionTitle
							id={group.name.toLowerCase()}
							eyebrow={`${group.name} design`}
							title={group.name}
							intro={group.intro}
						/>
						<div className="space-y-6">
							{group.subsystems.map((sys) => (
								<Card key={sys.id}>
									{/* One figure sits beside the text; several go in a row
									    underneath so the card doesn't turn into a tall column. */}
									<div
										className={
											sys.figures.length === 1
												? "grid grid-cols-1 lg:grid-cols-5 gap-8"
												: ""
										}
									>
										<div className={sys.figures.length === 1 ? "lg:col-span-3" : "max-w-4xl"}>
											<h3
												id={sys.id}
												className="scroll-mt-28 font-display text-xl font-medium text-fg"
											>
												{sys.name}
											</h3>
											<p className="mt-3 text-base text-fg-secondary leading-relaxed">
												{sys.summary}
											</p>
											<ul className="mt-4 space-y-2">
												{sys.points.map((p) => (
													<li key={p} className="flex gap-2.5 text-sm text-fg-secondary leading-relaxed">
														<span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
														{p}
													</li>
												))}
											</ul>
										</div>
										{sys.figures.length > 0 && (
											<div
												className={
													sys.figures.length === 1
														? "lg:col-span-2"
														: "mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
												}
											>
												{sys.figures.map((f) => (
													<Figure key={f.src} figure={f} />
												))}
											</div>
										)}
									</div>
								</Card>
							))}
						</div>
					</div>
				</section>
			))}

			{/* What changed */}
			<section className="px-5 sm:px-8 py-16">
				<div className="max-w-6xl mx-auto">
					<SectionTitle
						id="changes"
						eyebrow="Design decisions"
						title="What changed from Krabby Patty"
						intro="ORCA keeps what worked on our 2025 vehicle (the modular aluminum frame, ZED 2i cameras, Jetson Orin Nano, and ROS 2 stack) and replaces the parts that held us back."
					/>
					<div className="overflow-x-auto rounded-2xl border border-border bg-elevated shadow-sm">
						<table className="w-full min-w-[640px] text-left text-sm">
							<thead className="bg-surface text-xs uppercase tracking-wider text-fg-muted">
								<tr>
									<th scope="col" className="px-5 py-3 font-semibold">Area</th>
									<th scope="col" className="px-5 py-3 font-semibold">2025: Krabby Patty</th>
									<th scope="col" className="px-5 py-3 font-semibold">2026: ORCA</th>
									<th scope="col" className="px-5 py-3 font-semibold">Why</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-border-subtle">
								{designChanges.map((c) => (
									<tr key={c.area}>
										<th scope="row" className="px-5 py-3.5 font-medium text-fg">{c.area}</th>
										<td className="px-5 py-3.5 text-fg-secondary">{c.before}</td>
										<td className="px-5 py-3.5 text-fg font-medium">{c.after}</td>
										<td className="px-5 py-3.5 text-fg-secondary">{c.why}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</section>

			{/* Testing */}
			<section className="px-5 sm:px-8 py-16 bg-surface/60 border-y border-border-subtle">
				<div className="max-w-6xl mx-auto">
					<SectionTitle
						id="testing"
						eyebrow="Validation"
						title="Testing"
						intro="Every subsystem is tested on its own before it goes on the vehicle, then again in the pool. Results come from our tests so far; protocols are the procedures we use for subsystems still being validated."
					/>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
						{testing.map((t) => {
							const isResult = t.status === "Result";
							const Icon = isResult ? CheckCircle2 : ClipboardList;
							return (
								<Card key={t.title} className="flex flex-col">
									<span
										className={`inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
											isResult
												? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
												: "bg-accent-subtle text-accent"
										}`}
									>
										<Icon className="w-3.5 h-3.5" aria-hidden="true" />
										{isResult ? "Result" : "Test protocol"}
									</span>
									<h3 className="mt-3 font-display text-lg font-medium text-fg">{t.title}</h3>
									<p className="mt-2 text-sm text-fg-secondary leading-relaxed">{t.summary}</p>
									<ul className="mt-3 space-y-1.5">
										{t.points.map((p) => (
											<li key={p} className="flex gap-2.5 text-sm text-fg-secondary leading-relaxed">
												<span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
												{p}
											</li>
										))}
									</ul>
									{t.link && (
										<Link
											href={t.link.href}
											className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:opacity-70 transition-opacity"
										>
											{t.link.label} <ArrowRight className="w-3.5 h-3.5" />
										</Link>
									)}
								</Card>
							);
						})}
					</div>

					<figure className="mt-8">
						<div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-border">
							<Image
								src="/images/pool.jpeg"
								alt="ORCA in the pool during its second water trial"
								fill
								className="object-cover"
								sizes="(max-width: 1152px) 100vw, 1152px"
							/>
						</div>
						<figcaption className="mt-2 text-sm text-fg-muted">
							ORCA during its second pool trial, July 2026.
						</figcaption>
					</figure>
				</div>
			</section>

			{/* Video */}
			<section className="px-5 sm:px-8 py-16">
				<div className="max-w-5xl mx-auto">
					<SectionTitle eyebrow="Video" title="RoboSub 2026 team video" />
					<div className="relative aspect-video rounded-2xl overflow-hidden bg-surface border border-border-subtle">
						<iframe
							src="https://www.youtube.com/embed/KP6zZ--u0qI"
							title="Troy SPEAR Team Video: RoboSub 2026"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							loading="lazy"
							className="absolute inset-0 w-full h-full"
						/>
					</div>

					<Card className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
						<div>
							<h3 className="font-display text-lg font-medium text-fg">
								Want every detail?
							</h3>
							<p className="mt-1 text-sm text-fg-secondary">
								The 2026 Technical Design Report includes full CAD drawings for the claw and dropper.
							</p>
						</div>
						<a
							href="/documents/tdr-2026.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-page hover:bg-accent/85 transition-colors"
						>
							<FileText className="w-4 h-4" />
							Read the 2026 TDR
						</a>
					</Card>
				</div>
			</section>
		</div>
	);
}
