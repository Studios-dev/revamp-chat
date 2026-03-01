import { cn } from "../../utils/cn";


export default function Glass({
	className,
	border = false,
	...props
}: React.ComponentProps<"div"> & { border?: boolean }) {
	return (
		<div
			className={cn(
				"rounded-3xl bg-white/5 backdrop-blur-sm",
				// use the border for when you need the border to be "inside" the component for whatever reason (mainly clipping)
				border ? "border border-white/10" : "ring ring-white/15",
				className,
			)}
			{...props}
		/>
	);
}

