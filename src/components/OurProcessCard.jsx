import gradientOverlay from '../assets/images/gradient-overlay.jpg';

const OurProcessCard = ({ number, heading, description, className = '' }) => {
	return (
		<div
			className={`relative min-h-[180px] overflow-hidden rounded-xl border border-transparent p-[1px] ${className}`}
			style={{
				backgroundImage: `url(${gradientOverlay})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		>
			{/* Card */}
			<div className='relative h-full min-h-[178px] rounded-[11px] bg-[var(--white)] p-5'>
				{/* Number */}
				<div
					className='flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold text-[var(--white)]'
					style={{
						backgroundImage: `url(${gradientOverlay})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				>
					{String(number).padStart(2, '0')}
				</div>

				{/* Heading */}
				<h3 className='mt-4 bg-linear-to-r from-[var(--gradient-blue)] via-[var(--gradient-red)] to-[var(--gradient-orange)] bg-clip-text text-lg font-semibold text-transparent'>
					{heading}
				</h3>

				{/* Description */}
				<p className='mt-3 text-sm leading-5 text-[var(--black)]'>{description}</p>
			</div>
		</div>
	);
};

export default OurProcessCard;
