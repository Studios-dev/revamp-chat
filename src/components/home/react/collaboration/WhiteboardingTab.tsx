import React from 'react';
import Glass from '../../../ui/glass';

export default function WhiteboardingTab() {
	return (
		<div className="h-[500px] p-8 flex flex-col items-center justify-center text-center space-y-6 relative overflow-hidden">

			{/* Mock Cursor */}
			<div className="absolute top-1/3 left-1/3 text-[#7CCCCE] flex gap-2 items-center animate-bounce">
				<svg className="size-6 -rotate-12 fill-current" viewBox="0 0 24 24"><path d="M5.5 3.21a.75.75 0 0 1 1.04-.04l13 13a.75.75 0 0 1-1.09 1.02L14.7 13.9l-3.2 7.7a.75.75 0 0 1-1.4-.6l3.2-7.7L5.54 4.25a.75.75 0 0 1-.04-1.04Z" /></svg>
				<span className="bg-[#7CCCCE] text-[#121212] text-xs font-bold px-2 py-0.5 rounded-full">Sarah</span>
			</div>

			<div className="flex gap-4">
				<Glass className="size-24 rounded-full" border />
				<Glass className="size-24 rotate-45" border />
				<Glass className="size-24 rounded-xl" border />
			</div>

			<p className="text-white/60">Infinite canvas for brainstorming.</p>
		</div>
	);
}
