import Heading from '../components/Heading';
import OurProcessCard from '../components/OurProcessCard';
import processLine from '../assets/images/process-line.png';

const steps = [
	{ name: 'Discovery', side: 'right' },
	{ name: 'Feasibility Study', side: 'left' },
	{ name: 'Project Proposal', side: 'right' },
	{ name: 'Design', side: 'left' },
	{ name: 'Development and Testing', side: 'right' },
	{ name: 'Deployment', side: 'left' },
	{ name: 'Maintenance and Support', side: 'right' },
];

const processes = [
	{
		number: 1,
		heading: 'Discovery',
		description:
			'We begin by listening to your ideas, understanding your business, identifying your goals, and learning about the people you want to reach.',
	},
	{
		number: 2,
		heading: 'Feasibility Study',
		description:
			'We research your requirements and evaluate the technical, practical, and business feasibility of the project. This helps us identify the best solution, possible challenges, required resources, and an estimated timeline.',
	},
	{
		number: 3,
		heading: 'Project Proposal',
		description:
			'Based on our findings, we prepare a clear project proposal covering the scope, features, expectations, timeline, responsibilities, and terms. Once everything is reviewed and approved, we begin the project.',
	},
	{
		number: 4,
		heading: 'Design',
		description:
			'We turn the project requirements into a clear visual and user experience. Depending on the project, this may include branding, user flows, wireframes, UI design, prototypes, and design systems.',
	},
	{
		number: 5,
		heading: 'Development & Testing',
		description:
			'We build the approved solution and test it carefully to ensure it works as expected, performs reliably, and provides a smooth experience across different devices and users.',
	},
	{
		number: 6,
		heading: 'Deployment',
		description:
			'Once the project is approved and ready, we launch it in the live environment. We complete the required setup, final checks, handover, and basic guidance.',
	},
	{
		number: 7,
		heading: 'Maintenance & Support',
		description:
			'After launch, we remain available for ongoing support, bug fixes, updates, improvements, and future changes according to your maintenance plan.',
	},
];

const OurProcess = () => {
	return (
		<section className='relative w-full overflow-hidden'>
			{/* Section Heading */}
			<Heading title='Our Process' />

			{/* Intro */}
			<div className='mx-auto mt-4 max-w-3xl px-4 tablet:px-6 text-center'>
				<p className='text-xl font-medium text-[var(--black)]'>
					From vision to valuable digital solutions.
				</p>

				<p className='mt-5 text-sm leading-6 text-[var(--black)]'>
					We follow a{' '}
					<span className='font-medium'>clear and collaborative process</span> to
					understand your goals, validate your ideas, and transform them into{' '}
					<span className='font-medium'>practical digital solutions</span>. From the
					first conversation to{' '}
					<span className='font-medium'>post-launch support</span>, we keep every
					step{' '}
					<span className='font-medium'>
						transparent, focused, and aligned with your vision
					</span>
					.
				</p>
			</div>

			{/* ============================= */}
			{/* PROCESS ROAD */}
			{/* ============================= */}

			<div className='relative mx-auto mt-12 h-[430px] w-full max-w-3xl px-6'>
				{/* Road Image */}
				<div className='absolute left-1/2 top-0 h-full w-[50px] -translate-x-1/2'>
					<img src={processLine} alt='' className='h-full w-full object-fill' />
				</div>

				{/* Step Names */}
				<div className='relative z-10 flex h-full flex-col justify-between py-2'>
					{steps.map((step, index) => (
						<div
							key={index}
							className={`flex w-full items-center ${
								step.side === 'left' ? 'justify-start' : 'justify-end'
							}`}
						>
							<span
								className={`w-[40%] text-lg font-medium text-[var(--black)] tablet:text-base ${
									step.side === 'left' ? 'text-right' : 'text-left'
								}`}
							>
								{step.name}
							</span>
						</div>
					))}
				</div>
			</div>

			{/* ============================= */}
			{/* PROCESS CARDS */}
			{/* ============================= */}

			<div className='mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-5 px-4 tablet:px-6 tablet:grid-cols-2 desktop:grid-cols-3'>
				{processes.map((process, index) => (
					<OurProcessCard
						key={process.number}
						number={process.number}
						heading={process.heading}
						description={process.description}
						className={index === processes.length - 1 ? 'desktop:col-start-2' : ''}
					/>
				))}
			</div>
		</section>
	);
};

export default OurProcess;
