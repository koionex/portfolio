import EyeBrowTag from '../components/EyeBrowTag';
import gradiantOverlay from '../assets/images/gradient-overlay.jpg';
import Fill from '../components/buttons/Fill';

import brandImage from '../assets/images/card/brand.png';
import uiuxImage from '../assets/images/card/uiux.png';
import webImage from '../assets/images/card/web-development.png';
import customSoftwareImage from '../assets/images/card/custom-software.png';

import Card from '../components/Card';
import Stroke from '../components/buttons/Stroke';
import { scrollToSection } from '../utils/scroll';

const services = [
	{
		heading: 'Branding',
		description:
			'Create memorable brand identities and visuals that communicate your ideas.',
		image: brandImage,
	},
	{
		heading: 'UI/UX Design',
		description:
			'Design intuitive and engaging website experiences based on your needs and requirements.',
		image: uiuxImage,
	},
	{
		heading: 'Web Development',
		description:
			'Develop modern, responsive, and user-friendly websites and web applications.',
		image: webImage,
	},
	{
		heading: 'Custom Software',
		description:
			'Whatever your business, we understand your requirements and build software tailored to your needs.',
		image: customSoftwareImage,
	},
];

const Home = () => {
	return (
		<section id='home'>
			<div className='w-full flex flex-wrap gap-3 justify-center p-6 tablet:gap-10 tablet:p-10'>
				<EyeBrowTag name='Technology' color='--gradient-blue' />
				<EyeBrowTag name='Design' color='--gradient-red' />
				<EyeBrowTag name='Innovation' color='--gradient-orange' />
			</div>

			{/* Hero Headings */}
			<div className='relative flex items-center justify-center'>
				<div className='relative z-10 flex flex-col items-center gap-4'>
					<img
						src={gradiantOverlay}
						alt=''
						className='absolute left-1/3 top-1/3 w-full -translate-x-1/3 -translate-y-1/3 blur-xl opacity-20'
					/>

					<h1 className='font-medium text-2xl tablet:text-4xl'>Lead with vision.</h1>

					<h1 className='font-medium text-2xl tablet:text-4xl'>Transform ideas.</h1>

					<h1 className='font-medium text-2xl tablet:text-4xl'>Connect People.</h1>
				</div>
			</div>

			{/* Description */}
			<p className='text-center px-4 py-8 text-sm tablet:text-base tablet:p-10'>
				<span className='font-medium'>Koionex is a technology company</span>{' '}
				specializing in <span className='font-medium'>branding</span>,{' '}
				<span className='font-medium'>UI/UX design</span>,{' '}
				<span className='font-medium'>web development</span>, and{' '}
				<span className='font-medium'>custom software solutions</span>.
			</p>

			{/* CTA */}
			<div className='flex justify-center'>
				<Fill
					name='Explore All Services'
					onClick={() => scrollToSection('service')}
				/>
			</div>

			{/* Scrolling Cards */}
			<div className='group w-full overflow-hidden py-10'>
				<div className='flex w-max gap-8 animate-scroll group-hover:[animation-play-state:paused]'>
					{services.map((service, index) => (
						<Card
							key={`first-${index}`}
							heading={service.heading}
							description={service.description}
							image={service.image}
						/>
					))}

					{services.map((service, index) => (
						<Card
							key={`second-${index}`}
							heading={service.heading}
							description={service.description}
							image={service.image}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Home;
