import Heading from '../components/Heading';
import penMark from '../assets/images/pen-mark.png';
import fullLogo from '../assets/images/full-logo-grid.png';

const About = () => {
	return (
		<section className='relative w-full overflow-hidden'>
			<Heading title='About' />
			{/* Background Grid Decorations */}

			{/* Top Center Grid */}
			<div className='pointer-events-none absolute left-1/2 top-0 h-10 w-48 -translate-x-1/2 opacity-30'>
				<div className='grid-background h-full w-full' />
			</div>

			{/* Top Left Grid */}
			<div className='pointer-events-none absolute left-1/4 top-0 h-10 w-48 opacity-30'>
				<div className='grid-background h-full w-full' />
			</div>

			{/* Top Right Grid */}
			<div className='pointer-events-none absolute right-0 top-0 h-10 w-48 opacity-30'>
				<div className='grid-background h-full w-full' />
			</div>

			{/* Content */}
			<div className='relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center'>
				{/* Founded Heading */}
				<div className='relative mt-10 flex flex-col items-center text-[var(--black)]'>
					<img
						src={penMark}
						alt=''
						className='pointer-events-none absolute left-40 top-[-0px] z-10 block h-[90px] w-auto -translate-x-29.1 tablet:left-2/2 tablet:top-[-12px] tablet:h-[150px] tablet:-translate-x-43.5'
					/>

					{/* First Line — flex-wrap prevents horizontal overflow on small screens */}
					<div className='relative z-20 flex flex-wrap items-center justify-center gap-4'>
						<h2 className='text-3xl font-semibold leading-none tablet:text-5xl'>
							<span className='bg-linear-to-r from-[var(--gradient-blue)] via-[var(--gradient-red)] to-[var(--gradient-orange)] bg-clip-text text-transparent'>
								Koionex
							</span>{' '}
							was
						</h2>

						<span className='ml-2 mt-4 text-sm font-normal tablet:text-base'>
							August 24
						</span>
					</div>

					{/* Second Line */}
					<div className='relative z-20 mt-5 flex flex-wrap items-center justify-center gap-8'>
						<h2 className='text-3xl font-semibold leading-none tablet:text-5xl'>
							founded
							<span className='ml-2 font-normal'>on</span>
						</h2>

						<span className='text-4xl font-bold leading-none tablet:text-6xl'>
							2026
						</span>
					</div>
				</div>

				{/* Top Description */}
				<p className='mt-12 max-w-3xl text-sm leading-6 text-[var(--black)] tablet:text-base'>
					As a <span className='font-medium'>growing technology company</span>, we
					help businesses turn their ideas into{' '}
					<span className='font-medium'>clear brands</span>,{' '}
					<span className='font-medium'>engaging digital experiences</span>, and{' '}
					<span className='font-medium'>practical technology solutions</span>. Our
					work brings together <span className='font-medium'>thoughtful design</span>
					, <span className='font-medium'>user-focused thinking</span>, and{' '}
					<span className='font-medium'>reliable development</span> to create digital
					products that are{' '}
					<span className='font-medium'>simple, useful, and meaningful</span>.
				</p>

				{/* Logo Section */}
				<div className='relative mt-10 flex justify-center'>
					{/* Responsive logo width: full width on mobile, fixed on md+ */}
					<img
						src={fullLogo}
						alt='Koionex'
						className='relative z-10 w-full max-w-xs tablet:w-100 tablet:max-w-none'
					/>

					{/* Grid behind logo */}
					<div className='grid-background absolute left-1/2 top-1/2 h-32 w-80 -translate-x-1/2 -translate-y-1/2 opacity-30' />
				</div>

				{/* Bottom Description */}
				<p className='mt-10 max-w-3xl text-sm leading-6 text-[var(--black)] tablet:text-base'>
					Whether you are{' '}
					<span className='font-medium'>starting a new business</span>,{' '}
					<span className='font-medium'>improving your online presence</span>, or{' '}
					<span className='font-medium'>developing a custom digital product</span>,
					Koionex works to understand your goals and transform your vision into a
					solution that{' '}
					<span className='font-medium'>connects you with your audience</span>.
				</p>
			</div>

			{/* Bottom Grid Decorations */}

			<div className='grid-background pointer-events-none absolute bottom-0 left-0 h-24 w-44 opacity-30' />

			<div className='grid-background pointer-events-none absolute bottom-0 left-1/4 h-10 w-48 opacity-30' />

			<div className='grid-background pointer-events-none absolute bottom-0 left-1/2 h-24 w-48 -translate-x-1/2 opacity-30' />

			<div className='grid-background pointer-events-none absolute bottom-0 right-0 h-10 w-48 opacity-30' />
		</section>
	);
};

export default About;
