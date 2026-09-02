import EyeBrowTag from '../components/EyeBrowTag';
import gradiantOverlay from '../assets/images/gradient-overlay.jpg';
import Fill from '../components/buttons/Fill';

import brandImage from '../assets/images/card/brand.png';
import uiuxImage from '../assets/images/card/uiux.png';
import webImage from '../assets/images/card/web-development.png';
import customSoftwareImage from '../assets/images/card/custom-software.png';

import Card from '../components/Card';
import Stroke from '../components/buttons/Stroke';

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
		<>
			<div className=' w-full flex gap-10 justify-center p-10'>
				<EyeBrowTag name='Technology' color='--gradient-blue' />
				<EyeBrowTag name='Design' color='--gradient-red' />
				<EyeBrowTag name='Innovation' color='--gradient-orange' />
			</div>
			<div className='relative flex items-center justify-center'>
				{/* Headings */}
				<div className='relative z-10 flex flex-col items-center gap-4'>
					<img
						src={gradiantOverlay}
						alt=''
						className='absolute left-1/3 top-1/3 w-full -translate-x-1/3 -translate-y-1/3 blur-xl opacity-20'
					/>
					<h1 className='font-medium text-4xl'>Lead with vision.</h1>
					<h1 className='font-medium text-4xl'>Transform ideas.</h1>
					<h1 className='font-medium text-4xl'>Connect People.</h1>
				</div>
			</div>

			<p className='text-center p-10'>
				<span className='font-medium'>Koionex</span> is a technology company
				offering Branding, UI/UX design, web development, and custom software
				solutions.
			</p>
			<div className='flex justify-center'>
				<Fill name='See Our Process' />
			</div>

			<div className='group w-full overflow-hidden py-10'>
				{/* Moving Track */}
				<div className='flex w-max gap-8 animate-scroll group-hover:[animation-play-state:paused]'>
					{/* First Cards */}
					{services.map((service, index) => (
						<Card
							key={`first-${index}`}
							heading={service.heading}
							description={service.description}
							image={service.image}
						/>
					))}

					{/* Duplicate Cards for Infinite Loop */}
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
			<div className='flex justify-center'>
				<Stroke name='Explore All Services' />
			</div>
		</>
	);
};

export default Home;
