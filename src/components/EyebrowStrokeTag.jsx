import gradientOverlay from '../assets/images/gradient-overlay.jpg';

const EyebrowStrokeTag = ({ name, className = '' }) => {
	return (
		<span
			className={`inline-flex rounded-full p-[1px] ${className}`}
			style={{
				backgroundImage: `url(${gradientOverlay})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		>
			<span className='rounded-full bg-[var(--white)] px-3 py-1 text-xs text-[var(--black)]'>
				{name}
			</span>
		</span>
	);
};

export default EyebrowStrokeTag;
