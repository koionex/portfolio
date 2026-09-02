import gradientOverlay from '../assets/images/gradient-overlay.jpg';

const Heading = ({ title, className = '' }) => {
	return (
		<div className={`flex flex-col items-center ${className} p-5`}>
			<h2 className='text-center text-3xl font-medium text-[var(--black)]'>
				{title}
			</h2>

			{/* Gradient Underline */}
			<div
				className='mt-0.5 h-[3px] w-16 rounded-full'
				style={{
					backgroundImage: `url(${gradientOverlay})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			/>
		</div>
	);
};

export default Heading;
