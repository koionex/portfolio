import Heading from '../components/Heading';
import ServiceCard from '../components/ServiceCard';

import brandImage from '../assets/images/card/brand.png';
import uiuxImage from '../assets/images/card/uiux.png';
import webImage from '../assets/images/card/web-development.png';
import customSoftwareImage from '../assets/images/card/custom-software.png';
import Fill from '../components/buttons/Fill';
import { scrollToSection } from '../utils/scroll';

const services = [
	{
		number: '1',
		heading: 'Branding',
		shortDescription: 'Build a clear and memorable identity for your business.',
		description:
			'Your brand is more than a logo. It is how people recognize, understand, and remember your business. Koionex helps create a consistent brand identity that communicates your values and connects with your audience.',
		offers: ['Logo design', 'Visual identity', 'Business cards'],
		features: ['Brand guidelines', 'Brand strategy and direction'],
		image: brandImage,
	},
	{
		number: '2',
		heading: 'UI/UX Design',
		shortDescription: 'Create intuitive and engaging digital experiences.',
		description:
			'We design user-focused interfaces that are clear, functional, and visually engaging. Every experience is built around your users, business goals, and the way people interact with your product.',
		offers: ['Wireframes', 'UI design', 'UX design'],
		features: ['User research', 'Design systems'],
		image: uiuxImage,
	},
	{
		number: '3',
		heading: 'Web Development',
		shortDescription: 'Build modern and responsive websites for your business.',
		description:
			'We develop fast, responsive, and scalable websites that provide a smooth experience across devices and help your business build a strong digital presence.',
		offers: ['Business websites', 'Landing pages', 'Web applications'],
		features: ['Responsive design', 'Performance optimization'],
		image: webImage,
	},
	{
		number: '4',
		heading: 'Custom Software',
		shortDescription: 'Build software tailored to your business needs.',
		description:
			'Every business works differently. We understand your requirements and develop custom software solutions designed around your workflows, processes, and long-term goals.',
		offers: ['Custom software', 'Business systems', 'SaaS products'],
		features: ['Scalable architecture', 'Business automation'],
		image: customSoftwareImage,
	},
];

const Service = () => {
	return (
		<section id='service' className='relative w-full'>
			{/* Section Heading */}
			<Heading title='Service' />

			{/* Cards Container — reduced px on mobile */}
			<div className='mx-auto mt-16 max-w-6xl px-4 md:px-6'>
				{services.map((service, index) => (
					<div
						key={service.heading}
						className='sticky'
						style={{
							top: '100px',
							zIndex: index + 1,
						}}
					>
						<div className='mb-8'>
							<ServiceCard {...service} />
						</div>
					</div>
				))}
			</div>

			{/* CTA: Discuss Your Idea → scrolls to #contact */}
			<div className='flex justify-center'>
				<Fill name='Discuss Your Idea' onClick={() => scrollToSection('contact')} />
			</div>
		</section>
	);
};

export default Service;
