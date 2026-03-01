import React, { useState, useEffect } from 'react';
import { ShieldCheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import Glass from '../../ui/glass';

export default function ModerationSection() {
	const [activeCard, setActiveCard] = useState(0);
	const [isPaused, setIsPaused] = useState(false);

	useEffect(() => {
		if (isPaused) return;
		const interval = setInterval(() => {
			setActiveCard(prev => (prev === 0 ? 1 : 0));
		}, 5000);
		return () => clearInterval(interval);
	}, [isPaused]);

	const handleSwitch = (index: number) => {
		setActiveCard(index);
		setIsPaused(true); // Stop auto-switching if user interacts
	};

	return (
		<section className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 py-12 px-6 max-w-7xl mx-auto text-white">

			<div className="flex-1 space-y-6">
				<h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">Best-in-class moderation tooling</h2>
				<p className="text-white/70 text-lg leading-relaxed">
					Keep your community safe with powerful visual tools. Track reports, manage appeals, and view edit histories with git-style diffs.
				</p>
				<div className="flex gap-4 pt-2">
					<button
						onClick={() => handleSwitch(0)}
						className={`p-3 rounded-xl transition-all border ${activeCard === 0 ? 'bg-white/10 border-white/10 text-white shadow-lg' : 'border-transparent text-zinc-500 hover:bg-white/5'}`}
					>
						<ShieldCheckIcon className="size-6" />
					</button>
					<button
						onClick={() => handleSwitch(1)}
						className={`p-3 rounded-xl transition-all border ${activeCard === 1 ? 'bg-white/10 border-white/10 text-white shadow-lg' : 'border-transparent text-zinc-500 hover:bg-white/5'}`}
					>
						<ClockIcon className="size-6" />
					</button>
				</div>
			</div>

			<div className="flex-1 w-full flex justify-center h-[400px] items-center relative perspective-1000">
				{/* Kanban Card */}
				<Glass className={`absolute w-full max-w-md p-6 shadow-2xl transition-all duration-700 ease-in-out
                    ${activeCard === 0 ? 'opacity-100 translate-x-0 rotate-0 z-20' : 'opacity-40 translate-x-12 rotate-6 z-10 scale-90 blur-[1px]'}`} border>

					<div className="flex items-center justify-between mb-6">
						<h3 className="font-semibold text-zinc-300 flex items-center gap-2">Report Queue</h3>
						<div className="flex -space-x-2">
							<div className="size-8 rounded-full bg-zinc-800 border border-[#121212]"></div>
						</div>
					</div>

					<div className="space-y-3">
						<div className="bg-zinc-800/50 p-3 rounded-lg border border-white/5 space-y-2 backdrop-blur-sm">
							<div className="flex justify-between items-start">
								<span className="text-xs bg-red-500/20 text-red-300 px-1.5 py-0.5 rounded">Harassment</span>
							</div>
							<p className="text-sm text-zinc-300">User report in #general</p>
						</div>
						<div className="bg-zinc-800/50 p-3 rounded-lg border border-white/5 space-y-2 opacity-50 backdrop-blur-sm">
							<div className="flex justify-between items-start">
								<span className="text-xs bg-orange-500/20 text-orange-300 px-1.5 py-0.5 rounded">Spam</span>
							</div>
							<p className="text-sm text-zinc-300">Link spam in #random</p>
						</div>
					</div>
				</Glass>

				{/* Diff Card */}
				<Glass className={`absolute w-full max-w-md p-6 shadow-2xl transition-all duration-700 ease-in-out
                    ${activeCard === 1 ? 'opacity-100 translate-x-0 rotate-0 z-20' : 'opacity-40 -translate-x-12 -rotate-6 z-10 scale-90 blur-[1px]'}`} border>

					{/* Header */}
					<div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
						<div className="flex items-center gap-3">
							<div className="size-10 rounded-full bg-zinc-800 border border-white/5 overflow-hidden">
								<img src="https://api.dicebear.com/9.x/micah/svg?seed=Trouble" className="size-full bg-zinc-700" />
							</div>
							<div>
								<div className="font-bold text-sm text-white">TroubleMaker</div>
								<div className="text-xs text-zinc-500">User ID: 83921...</div>
							</div>
						</div>
						<div className="px-2 py-1 rounded bg-[#1E1E1E] border border-white/5 text-xs text-zinc-400 font-mono">
							MSG_EDIT
						</div>
					</div>

					{/* Content */}
					<div className="space-y-4">
						{/* Before */}
						<div className="p-3 rounded-xl bg-red-500/5 border border-red-500/10 relative overflow-hidden group">
							<div className="absolute top-2 right-2 text-[10px] font-bold text-red-400 uppercase tracking-wider">Before</div>
							<p className="text-zinc-400 text-sm line-through decoration-red-400/50">This framework sucks!</p>
						</div>

						{/* Arrow */}
						<div className="flex justify-center text-zinc-600">
							<svg className="size-5 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
						</div>

						{/* After */}
						<div className="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/10 relative overflow-hidden">
							<div className="absolute top-2 right-2 text-[10px] font-bold text-emerald-400 uppercase tracking-wider">After</div>
							<p className="text-zinc-200 text-sm">This framework has some areas to improve.</p>
						</div>
					</div>

					<div className="mt-6 flex gap-2">
						<button className="flex-1 py-2 rounded-lg bg-zinc-800 text-xs font-semibold hover:bg-zinc-700 transition">Warn User</button>
						<button className="flex-1 py-2 rounded-lg bg-zinc-800 text-xs font-semibold hover:bg-zinc-700 transition">View History</button>
					</div>

				</Glass>
			</div>
		</section>
	);
}
