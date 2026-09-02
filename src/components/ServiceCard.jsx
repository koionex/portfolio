import gradientOverlay from '../assets/images/gradient-overlay.jpg';
import EyebrowStrokeTag from './EyebrowStrokeTag';

const ServiceCard = ({
	number,
	heading,
	shortDescription,
	description,
	offers = [],
	features = [],
	image,
	className = '',
}) => {
	return (
		<div
			className={`relative w-full rounded-2xl p-[1px] ${className}`}
			style={{
				backgroundImage: `url(${gradientOverlay})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		>
			{/* White Card Layer */}
			<div className='relative min-h-[360px] overflow-hidden rounded-[15px] bg-[var(--white)]'>
				{/* Gradient Overlay Background */}
				<div
					className='pointer-events-none absolute inset-0 opacity-10'
					style={{
						backgroundImage: `url(${gradientOverlay})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				/>

				{/* Content */}
				<div className='relative z-10 grid min-h-[360px] grid-cols-1 md:grid-cols-2'>
					{/* LEFT IMAGE */}
					<div className='flex items-center justify-center p-6 md:p-8'>
						{image && (
							<img
								src={image}
								alt={heading}
								className='h-full max-h-[300px] w-full object-contain'
							/>
						)}
					</div>

					{/* RIGHT CONTENT */}
					<div className='flex flex-col justify-center p-6 md:p-10'>
						{/* Heading */}
						<h3 className='text-lg font-semibold text-[var(--black)]'>
							<span className='mr-2'>{number}.</span>

							<span className='bg-linear-to-r from-[var(--gradient-blue)] via-[var(--gradient-red)] to-[var(--gradient-orange)] bg-clip-text text-transparent'>
								{heading}
							</span>
						</h3>

						{/* Short Description */}
						<p className='mt-5 font-medium leading-6 text-[var(--black)]'>
							{shortDescription}
						</p>

						{/* Description */}
						<p className='mt-4 max-w-md text-sm leading-6 text-[var(--black)]/80'>
							{description}
						</p>

						{/* What We Offer */}
						{offers.length > 0 && (
							<div className='mt-5'>
								<p className='mb-2 text-sm font-semibold'>What we offer:</p>

								<div className='flex flex-wrap gap-3'>
									{offers.map((offer, index) => (
										<EyebrowStrokeTag key={index} name={offer} />
									))}
								</div>
							</div>
						)}

						{/* Features */}
						{features.length > 0 && (
							<div className='mt-5'>
								<p className='mb-2 text-sm font-semibold'>Feature:</p>

								<div className='flex flex-wrap gap-3'>
									{features.map((feature, index) => (
										<EyebrowStrokeTag key={index} name={feature} />
									))}
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;
