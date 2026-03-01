import React from 'react';
import Glass from '../../../ui/glass';

export default function IntegrationsTab() {
	return (
		<div className="h-[500px] p-8 flex flex-col items-center justify-center text-center space-y-6">
			<div className="grid grid-cols-3 gap-6">
				<Glass className="size-24 grid place-items-center text-2xl" border>GitHub</Glass>
				<Glass className="size-24 grid place-items-center text-2xl" border>Drive</Glass>
				<Glass className="size-24 grid place-items-center text-2xl" border>Linear</Glass>
				<Glass className="size-24 grid place-items-center text-2xl" border>Slack</Glass>
				<Glass className="size-24 grid place-items-center text-2xl" border>Notion</Glass>
				<Glass className="size-24 grid place-items-center text-2xl border-dashed border-2 opacity-50">+ Add</Glass>
			</div>
			<p className="text-white/60">Connect your favorite tools.</p>
		</div>
	);
}
