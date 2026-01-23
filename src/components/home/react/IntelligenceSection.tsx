import React from 'react';
import { MagnifyingGlassIcon, PencilSquareIcon, MicrophoneIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function IntelligenceSection() {
	const features = [
		{ icon: MagnifyingGlassIcon, title: "Smart Search", desc: "Find anything, anywhere" },
		{ icon: PencilSquareIcon, title: "Auto-Complete", desc: "Write docs faster" },
		{ icon: MicrophoneIcon, title: "Transcripts", desc: "Never miss a word" },
		{ icon: SparklesIcon, title: "Agentic Bot", desc: "Your proactive assistant" }
	];

	return (
		<section className="py-24 px-6 text-white">
			<div className="max-w-4xl mx-auto text-center space-y-8">
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7CCCCE]/10 border border-[#7CCCCE]/20 text-[#7CCCCE] text-sm font-medium">
					<SparklesIcon className="size-4 animate-pulse" /> Revamp Intelligence
				</div>

				{/* Gradient Title: Matches size of first section (3xl md 5xl) */}
				<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
					First class AI that{' '}
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7CCCCE] to-[#276E85]">
						empowers humans.
					</span>
				</h2>

				<p className="text-lg text-zinc-400 max-w-2xl mx-auto">
					Intelligent cross-platform search, document autocomplete, searchable meeting transcripts + notes, and a built in agentic chatbot.
				</p>

				{/* Feature Grid */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
					{features.map((feature, idx) => (
						<div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition group cursor-default">
							<div className="text-[#7CCCCE] mb-3 group-hover:scale-110 transition-transform duration-300 grid place-items-center">
								<feature.icon className="size-8 text-[#7CCCCE]" />
							</div>
							<h3 className="font-semibold text-white mb-1">{feature.title}</h3>
							<p className="text-xs text-zinc-500">{feature.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
