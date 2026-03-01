import React from 'react';
import Glass from '../../../ui/glass';

export default function SchedulingTab() {
	return (
		<div className="h-[500px] p-8 flex flex-col items-center justify-center text-center space-y-6">
			<Glass className="w-full max-w-sm p-6 space-y-4" border>
				<div className="flex justify-between items-center text-white/80 font-bold border-b border-white/5 pb-4">
					<span>September 2025</span>
					<span>&larr; &rarr;</span>
				</div>
				<div className="grid grid-cols-7 gap-2 text-xs text-center text-white/50">
					<span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
					{[...Array(30)].map((_, i) => (
						<div key={i} className={`p-2 rounded-lg ${i === 14 ? 'bg-[#7CCCCE] text-[#121212]' : 'hover:bg-white/5'}`}>{i + 1}</div>
					))}
				</div>
			</Glass>
			<p className="text-white/60">Integrated team calendars.</p>
		</div>
	);
}
