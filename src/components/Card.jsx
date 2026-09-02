import gradientOverlay from '../assets/images/gradient-overlay.jpg';

const Card = ({ heading, description, image, className = '', onClick }) => {
	return (
		<div
			onClick={onClick}
			className={`group relative h-[250px] w-[450px] shrink-0 overflow-hidden rounded-2xl p-[1px] ${className}`}
			style={{
				backgroundImage: `url(${gradientOverlay})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		>
			{/* Card Background */}
			<div className='relative h-full w-full overflow-hidden rounded-[15px] bg-[var(--white)]'>
				{/* Content */}
				<div className='relative z-10 flex flex-col items-center px-8 pt-6 text-center'>
					{/* Heading */}
					<h3 className='bg-linear-to-r from-[var(--gradient-blue)] via-[var(--gradient-red)] to-[var(--gradient-orange)] bg-clip-text text-base font-semibold text-transparent'>
						{heading}
					</h3>

					{/* Description */}
					<p className='mt-3 max-w-[380px] text-sm leading-6 text-[var(--black)]'>
						{description}
					</p>
				</div>

				{/* Bottom Image */}
				{image && (
					<div className='absolute bottom-0 left-1/2 w-[85%] -translate-x-1/2 translate-y-40 '>
						<img
							src={image}
							alt={heading}
							className='w-full object-cover opacity-90 blur-[5%]'
						/>
					</div>
				)}

				{/* Bottom Fade */}
				<div className='pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20 bg-linear-to-t from-[var(--white)] via-[var(--white)]/40 to-transparent opacity-20' />
			</div>
		</div>
	);
};

export default Card;
