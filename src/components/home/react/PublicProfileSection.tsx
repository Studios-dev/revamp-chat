import React from 'react';
import { ChatBubbleOvalLeftIcon, CalendarDaysIcon, ShareIcon } from '@heroicons/react/24/outline';
import Glass from '../../ui/glass';
import { Button } from '../../ui/button';

export default function PublicProfileSection() {
	return (
		<section className="flex flex-col md:flex-row items-center justify-between gap-12 py-12 px-6 max-w-7xl mx-auto text-white">
			<div className="flex-1 space-y-6">
				<h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">Create a public profile</h2>
				<p className="text-white/70 text-lg leading-relaxed">
					Create a customizable, shareable profile with links and descriptions. Let people reach out, start chats, request info, or schedule calls directly.
				</p>
			</div>

			<div className="flex-1 w-full flex justify-center perspective-1000">
				{/* Mock Profile Card */}
				<Glass className="relative w-full max-w-md p-6 shadow-2xl rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-500 ease-out group" border>
					{/* Banner */}
					<div className="h-32 w-full bg-gradient-to-r from-[#7CCCCE] to-[#276E85] rounded-2xl mb-12 relative overflow-hidden">
						<div className="absolute inset-0 bg-white/10 opacity-20"></div>
					</div>

					{/* Avatar */}
					<div className="absolute top-24 left-1/2 -translate-x-1/2">
						<div className="size-24 rounded-full bg-[#18181b] p-1.5 border border-white/10">
							<img src="https://api.dicebear.com/9.x/micah/svg?seed=Rachel&mouth=smile" className="w-full h-full rounded-full bg-zinc-800 object-cover" alt="Profile" />
						</div>
					</div>

					{/* Info */}
					<div className="text-center mt-2 space-y-1">
						<h3 className="text-xl font-bold text-white">Rachel Designer</h3>
						<p className="text-sm text-zinc-400">@rachel.design</p>
						<p className="text-sm text-zinc-300 mt-2">Product Designer building neat things. Let's chat about pixels!</p>
					</div>

					{/* Action Buttons */}
					<div className="mt-8 flex flex-col gap-3">
						<Button className="w-full justify-center h-12" size="md" btnType="primary">
							<ChatBubbleOvalLeftIcon />
							Message Me
						</Button>
						<div className="flex gap-3">
							<Button className="flex-1 justify-center" size="md">
								<CalendarDaysIcon />
								Schedule
							</Button>
							<Button className="flex-1 justify-center" size="md">
								<ShareIcon />
								Socials
							</Button>
						</div>
					</div>

				</Glass>
			</div>
		</section>
	);
}
