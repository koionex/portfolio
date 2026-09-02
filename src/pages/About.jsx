import Heading from '../components/Heading';
import penMark from '../assets/images/pen-mark.png';
import fullLogo from '../assets/images/full-logo-grid.png';

const About = () => {
	return (
		<section className='relative w-full overflow-hidden pt-15'>
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
				{/* Founded Heading */}
				<div className='relative mt-10 flex flex-col items-center text-[var(--black)]'>
					{/* Pen Mark */}
					<img
						src={penMark}
						alt=''
						className='pointer-events-none absolute left-2/2 top-[-12px] z-10 h-[150px] w-auto -translate-x-43.5'
					/>

					{/* First Line */}
					<div className='relative z-20 flex items-center justify-center gap-4'>
						<h2 className='text-4xl font-semibold leading-none md:text-5xl'>
							<span className='bg-linear-to-r from-[var(--gradient-blue)] via-[var(--gradient-red)] to-[var(--gradient-orange)] bg-clip-text text-transparent'>
								Koionex
							</span>{' '}
							was
						</h2>

						<span className='mt-4 text-sm font-normal md:text-base'>August 24</span>
					</div>

					{/* Second Line */}
					<div className='relative z-20 mt-5 flex items-center justify-center gap-8'>
						<h2 className='text-4xl font-semibold leading-none md:text-5xl'>
							founded
							<span className='ml-4 font-normal'>on</span>
						</h2>

						<span className='text-5xl font-bold leading-none md:text-6xl'>2026</span>
					</div>
				</div>

				{/* Top Description */}
				<p className='mt-12 max-w-3xl text-sm leading-6 text-[var(--black)] md:text-base'>
					We help businesses turn their ideas into clear brands, engaging digital
					experiences, and practical technology solutions. Our work brings together
					thoughtful design, user-focused thinking, and reliable development to
					create digital products that are simple, useful, and meaningful.
				</p>

				{/* Logo Section */}
				<div className='relative mt-10 flex justify-center'>
					<img
						src={fullLogo}
						alt='Koionex'
						className='relative z-10 w-100 md:w-104'
					/>

					{/* Grid behind logo */}
					<div className='grid-background absolute left-1/2 top-1/2 h-32 w-80 -translate-x-1/2 -translate-y-1/2 opacity-30' />
				</div>

				{/* Bottom Description */}
				<p className='mt-12 max-w-3xl text-sm leading-6 text-[var(--black)] md:text-base'>
					Whether you are starting a new business, improving your online presence, or
					developing a custom digital product, Koionex works to understand your goals
					and transform your vision into a solution that connects your audience.
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
