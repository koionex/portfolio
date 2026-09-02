import gradientImage from '../assets/images/gradient-overlay.jpg';

const LinkTag = ({ name, isActive = false, onClick }) => {
	return (
		<li
			onClick={onClick}
			className={`group relative cursor-pointer pb-1 transition-all duration-300 ease-in-out ${
				isActive ? 'font-bold' : 'hover:font-medium'
			}`}
		>
			{name}

			{/* Gradient underline */}
			<span
				className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ease-in-out ${
					isActive ? 'w-full' : 'w-0 group-hover:w-full'
				}`}
				style={{
					backgroundImage: `url(${gradientImage})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			/>
		</li>
	);
};

export default LinkTag;
