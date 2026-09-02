import gradientImage from '../../assets/images/gradient-overlay.jpg';

const Fill = ({ name, onClick, className = '' }) => {
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
			<div className='inline-flex w-full items-center justify-center whitespace-nowrap rounded-full bg-transparent px-3 py-1.5 text-sm font-medium text-[var(--white)] transition-all duration-300 group-hover:bg-[var(--white)] group-hover:text-[var(--black)]'>
				{name}
			</div>
		</button>
	);
};

export default Fill;
