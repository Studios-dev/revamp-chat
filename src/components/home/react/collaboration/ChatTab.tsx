import React, { useState, useEffect, useRef } from 'react';
import { FaceSmileIcon, PlusIcon } from '@heroicons/react/24/outline';
import { ProgressiveBlur } from '../../../ui/progressiveBlur';

const avatars = {
	user: 'https://api.dicebear.com/9.x/micah/svg?seed=Felix&mouth=smile',
	ai: 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=RevampBot',
	collab: 'https://api.dicebear.com/9.x/micah/svg?seed=Sarah&mouth=smile'
};

const conversation = [
	{ type: 'collab', text: 'Hey team, did we finalize the Q3 roadmap?', delay: 1000, timestamp: '2:45 PM' },
	{ type: 'user', text: 'Just wrapping it up. @RevampBot can you summarize the key action items?', delay: 2500, timestamp: '2:46 PM' },
	{ type: 'ai', text: 'Sure! Here are the key action items:\n1. Finalize API v2 specs\n2. Update design system tokens\n3. Schedule user interviews.', delay: 1500, timestamp: '2:46 PM' },
	{ type: 'collab', text: 'Thanks! I will pick up the API specs.', delay: 3000, timestamp: '2:47 PM' },
	{ type: 'user', text: 'Great, I will handle the design tokens.', delay: 2000, timestamp: '2:47 PM' },
	{ type: 'ai', text: 'I have created Jira tickets for both tasks and assigned them to you.', delay: 1500, timestamp: '2:48 PM' },
	{ type: 'user', text: 'Perfect. Lets sync again tomorrow.', delay: 2500, timestamp: '2:48 PM' },
	{ type: 'collab', text: 'Sounds good.', delay: 1500, timestamp: '2:49 PM' }
];

export default function ChatTab() {
	const [messages, setMessages] = useState<any[]>([]);
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		if (currentIndex >= conversation.length) return;

		const msg = conversation[currentIndex];
		const timeout = setTimeout(() => {
			setMessages(prev => [...prev, msg]);
			setCurrentIndex(prev => prev + 1);
		}, msg.delay);

		return () => clearTimeout(timeout);
	}, [currentIndex]);


	return (
		<div className="flex flex-col h-[500px] relative">
			{/* <ProgressiveBlur position="top" height="20%" blurLevels={[1, 2, 4, 8]} className="z-10" /> */}

			<div className="grow flex flex-col justify-end p-4 md:p-8 space-y-6 overflow-y-auto min-h-0 relative z-0">
				{messages.map((msg, idx) => {
					const isUser = msg.type === 'user';
					const isAi = msg.type === 'ai';
					return (
						<div key={idx} className={`flex gap-4 max-w-[90%] md:max-w-[75%] ${isUser ? 'self-end flex-row-reverse' : 'self-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
							<div className="size-8 min-w-8 rounded-full bg-white/5 border border-white/5 overflow-hidden">
								<img src={avatars[msg.type as keyof typeof avatars]} className="w-full h-full object-cover" />
							</div>

							<div className={`flex flex-col gap-1 ${isUser ? 'items-end' : 'items-start'}`}>
								<div className={`py-3 px-5 rounded-2xl text-sm leading-relaxed whitespace-pre-line
                                    ${isUser
										? 'bg-[#3B79F5] text-white rounded-tr-none'
										: isAi
											? 'bg-gradient-to-br from-[#1E293B]/10 to-[#0F172A]/10 border border-[#7CCCCE]/20 text-cyan-50 rounded-tl-none'
											: 'text-zinc-100 rounded-tl-none'}
                                `}>
									{msg.text}
								</div>
								<span className="text-[10px] text-white/30 px-1">
									{msg.timestamp}
								</span>
							</div>
						</div>
					)
				})}
			</div>
			{/* Input */}
			<div className="p-6 pt-2 z-20">
				<div className="bg-[#1E1E1E] border border-white/10 rounded-2xl flex items-center p-2 pr-4 gap-4 shadow-lg">
					<input type="text" placeholder="Type Anything..." className="bg-transparent border-none outline-none text-white/80 grow px-4 h-12" disabled />
					<div className="flex gap-2">
						<button className="size-8 rounded-full bg-white/5 grid place-items-center hover:bg-white/10 transition text-white/60">
							<FaceSmileIcon className="size-5" />
						</button>
						<button className="size-8 rounded-full bg-white/5 grid place-items-center hover:bg-white/10 transition text-white/60">
							<PlusIcon className="size-5" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
