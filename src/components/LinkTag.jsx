import gradientImage from '../assets/images/gradient-overlay.jpg';

const LinkTag = ({ name }) => {
	return (
		<div>
			<li className='group relative cursor-pointer pb-1 transition-all duration-300 ease-in-out hover:font-medium'>
				{name}
				<span
					className='absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-300 ease-in-out group-hover:w-full'
					style={{
						backgroundImage: `url(${gradientImage})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				/>
			</li>
		</div>
	);
};

export default LinkTag;
