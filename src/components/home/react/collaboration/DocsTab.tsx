import React from 'react';
import Glass from '../../../ui/glass';

export default function DocsTab() {
	return (
		<div className="h-[500px] p-8 flex flex-col items-center justify-center text-center space-y-6">
			<Glass className="p-8 aspect-[3/4] w-64 flex flex-col items-start gap-4">
				<div className="w-full h-8 bg-white/10 rounded-lg animate-pulse" />
				<div className="space-y-2 w-full">
					<div className="w-full h-4 bg-white/5 rounded-md" />
					<div className="w-[90%] h-4 bg-white/5 rounded-md" />
					<div className="w-[80%] h-4 bg-white/5 rounded-md" />
				</div>
				<div className="w-full h-32 bg-white/5 rounded-lg mt-4" />
			</Glass>
			<p className="text-white/60">Live multi-player editing.</p>
		</div>
	);
}
