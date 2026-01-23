import React from 'react';
import { AdjustmentsHorizontalIcon, SwatchIcon, EyeIcon } from '@heroicons/react/24/outline';

export default function CustomizeSection() {
	return (
		<section className="flex flex-col-reverse md:flex-row items-center gap-16 py-12 px-6 max-w-7xl mx-auto text-white">

			

			{/* Text Side */}
			<div className="flex-1 space-y-6">
				<h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">Customize your way</h2>
				<p className="text-white/70 text-lg leading-relaxed">
					Make Revamp truly yours. From themes and accent colors to layout density and custom CSS. We believe software should adapt to you, not the other way around.
				</p>

				<ul className="space-y-3 pt-4">
					<li className="flex items-center gap-3 text-zinc-300">
						<SwatchIcon className="size-5 text-[#7CCCCE]" /> 50+ Built-in themes
					</li>
					<li className="flex items-center gap-3 text-zinc-300">
						<AdjustmentsHorizontalIcon className="size-5 text-[#7CCCCE]" /> Layout density controls
					</li>
					<li className="flex items-center gap-3 text-zinc-300">
						<EyeIcon className="size-5 text-[#7CCCCE]" /> Custom CSS support
					</li>
				</ul>
			</div>

			{/* Visual Side */}
			<div className="flex-1 w-full">
				<div className="bg-[#121212] rounded-3xl border border-[#7CCCCE]/20 p-8 shadow-2xl relative overflow-hidden group">
					{/* UI Mockup */}
					<div className="flex gap-6">
						{/* Sidebar Control */}
						<div className="w-16 flex flex-col gap-4 border-r border-white/5 pr-6 items-center">
							<div className="w-8 h-8 rounded-full bg-[#276E85] ring-2 ring-[#7CCCCE]"></div>
							<div className="w-8 h-8 rounded-full bg-purple-500 opacity-50 grayscale hover:grayscale-0 transition"></div>
							<div className="w-8 h-8 rounded-full bg-blue-500 opacity-50 grayscale hover:grayscale-0 transition"></div>
							<div className="w-8 h-8 rounded-full bg-green-500 opacity-50 grayscale hover:grayscale-0 transition"></div>
						</div>

						{/* Preview Area */}
						<div className="flex-1 space-y-4">
							<div className="flex justify-between items-center mb-6">
								<span className="text-sm font-bold text-zinc-500">Theme Preview</span>
								<span className="text-xs bg-[#276E85]/20 text-[#7CCCCE] px-2 py-1 rounded">Revamp Dark</span>
							</div>

							<div className="flex gap-3">
								<div className="flex-1 bg-zinc-800 h-24 rounded-xl animate-pulse"></div>
								<div className="flex-1 bg-zinc-800 h-24 rounded-xl animate-pulse delay-75"></div>
							</div>
							<div className="bg-zinc-800 h-32 rounded-xl w-full animate-pulse delay-150"></div>
						</div>
					</div>

					{/* Floating Controls */}
					<div className="absolute bottom-6 right-6 bg-zinc-900 border border-white/10 p-4 rounded-xl shadow-xl flex flex-col gap-3 w-48 scale-95 group-hover:scale-100 transition-transform">
						<div className="flex justify-between items-center text-xs">
							<span className="text-zinc-400">Accent</span>
							<div className="w-4 h-4 rounded-full bg-[#276E85] shadow-[0_0_10px_rgba(39,110,133,0.5)]"></div>
						</div>
						<div className="h-1 bg-zinc-700 rounded-full w-full">
							<div className="h-full w-[70%] bg-gradient-to-r from-[#7CCCCE] to-[#276E85] rounded-full"></div>
						</div>
						<div className="flex justify-between items-center text-xs mt-1">
							<span className="text-zinc-400">Radius</span>
							<span className="text-white">16px</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
