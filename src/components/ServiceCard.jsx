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
			<div className='relative overflow-hidden rounded-[15px] bg-[var(--white)]'>
				{/* Gradient Overlay Background */}
				<div
					className='pointer-events-none absolute inset-0 opacity-10'
					style={{
						backgroundImage: `url(${gradientOverlay})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				/>

				{/* ================= CONTENT ================= */}
				{/* Below 960px → Image top / Content bottom */}
				{/* 960px+ → Image left / Content right */}
				<div className='relative z-10 grid grid-cols-1 desktop:min-h-[360px] desktop:grid-cols-2'>
					{/* ================= IMAGE ================= */}
					<div className='flex w-full items-center justify-center px-2 pt-4 tablet:px-6 tablet:pt-6 desktop:p-8'>
						{image && (
							<img
								src={image}
								alt={heading}
								className='h-auto w-full max-w-full object-contain desktop:max-h-[300px]'
							/>
						)}
					</div>

					{/* ================= CONTENT ================= */}
					<div className='flex flex-col justify-center p-5 tablet:p-8 desktop:p-10'>
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
								<p className='mb-2 text-sm font-semibold text-[var(--black)]'>
									What we offer:
								</p>

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
								<p className='mb-2 text-sm font-semibold text-[var(--black)]'>
									Features:
								</p>

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
