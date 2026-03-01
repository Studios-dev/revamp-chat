import { cn } from "../../utils/cn";

export const PilledButton = ({
	className,
	size = "size-10",
	children,
	href,
	invisible = false,
	hrefClassname,
	title,
	...props
}: {
	size?: string;
	href?: string;
	invisible?: boolean;
	hrefClassname?: string;
	title?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
	const component = (
		<button
			type="button"
			className={cn(
				"grid aspect-square place-items-center rounded-full border",
				"scale-100 bg-radial-[circle_at_50%_110%] from-white/0 via-75% via-transparent text-white/60! transition-all duration-100 active:scale-95",
				invisible
					? "border-transparent hover:border-white/10 hover:backdrop-blur-sm"
					: "border-white/10 bg-white/5 backdrop-blur-sm",
				"not-disabled:hover:scale-105 not-disabled:hover:from-white/10 not-disabled:hover:*:text-zinc-200!",
				className,
				size,
			)}
			{...props}
		>
			<span className="motion-blur-in-sm motion-opacity-in-0 motion-duration-300 [&>svg]:w-full">
				{children}
			</span>
		</button>
	);

	if (href) {
		return (
			<a href={href} className={hrefClassname}>
				{component}
			</a>
		);
	}

	return component;
};

export const Button = ({
	className,
	children,
	type = "button",
	btnType = "normal",
	size = "md",
	noExpand = false,
	disabled,
	...props
}: {
	btnType?: "normal" | "invisible" | "primary" | "danger";
	size?: "sm" | "md" | "none";
	noExpand?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => (
	<button
		type={type}
		className={cn(
			"group flex select-none items-center rounded-full bg-radial-[ellipse_at_50%_110%] from-white/0 via-50% via-transparent text-zinc-300 transition-all active:scale-95",
			"hover:not-disabled:bg-white/5 hover:not-disabled:from-white/10 hover:not-disabled:text-white",
			"disabled:cursor-not-allowed disabled:brightness-75",
			btnType === "invisible"
				? "hover:bg-white/5 hover:not-disabled:from-white/10 hover:text-zinc-300! hover:ring hover:ring-white/10"
				: "bg-white/5 ring ring-white/10 hover:not-disabled:from-white/10",
			btnType === "primary" &&
			"bg-blue-600/40 from-white/5 ring-blue-600/50 hover:not-disabled:bg-blue-600/70",
			btnType === "danger" &&
			"bg-red-600/40 from-white/5 ring-red-600/50 hover:not-disabled:bg-red-600/60",
			size === "sm" &&
			cn(
				"px-3 py-1 text-sm [&>svg]:mr-1.5 [&>svg]:size-5",
				!noExpand && "hover:not-disabled:scale-102"
			),
			size === "md" &&
			cn(
				"px-4 py-2 [&>svg]:mr-2.5 [&>svg]:size-6",
				!noExpand && "hover:not-disabled:scale-102"
			),
			className,
		)}
		disabled={disabled}
		{...props}
	>
		{children}
	</button>
);
