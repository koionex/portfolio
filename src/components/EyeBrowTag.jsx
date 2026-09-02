const EyeBrowTag = ({ name, color }) => {
	return (
		<button
			className='w-fit shrink-0 rounded-full p-[1px]'
			style={{
				background: `linear-gradient(to right, color-mix(in srgb, var(${color}) 20%, transparent), transparent)`,
			}}
		>
			<div
				className='inline-flex w-full items-center justify-center whitespace-nowrap rounded-full border px-3 py-1.5 text-sm font-medium'
				style={{
					borderColor: `color-mix(in srgb, var(${color}) 20%, transparent)`,
					color: `var(${color})`,
				}}
			>
				{name}
			</div>
		</button>
	);
};

export default EyeBrowTag;
