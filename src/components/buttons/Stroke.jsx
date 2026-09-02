import gradientImage from '../../assets/images/gradient-overlay.jpg';

const Stroke = ({ name, onClick, className = '' }) => {
	return (
		<button
			onClick={onClick}
			className={`group w-fit shrink-0 rounded-full p-[1px] ${className}`}
			style={{
				backgroundImage: `url(${gradientImage})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		>
			<div className='inline-flex w-full items-center justify-center whitespace-nowrap rounded-full bg-[var(--white)] px-3 py-1.5 text-sm font-medium text-[var(--black)] transition-colors duration-300 group-hover:bg-transparent group-hover:text-[var(--white)]'>
				{name}
			</div>
		</button>
	);
};

export default Stroke;
