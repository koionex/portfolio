import Logo from '../assets/images/horizontal-logo.png';
import Stroke from './buttons/Stroke';
import LinkTag from './LinkTag';

const Navbar = () => {
	return (
		<div className='w-full h-[100px] flex items-center justify-between gap-10 px-10 border-b-2 border-navbar-gradient'>
			<img src={Logo} alt='Koionex Logo' className='w-30' />
			<ul className='flex items-center justify-center gap-10'>
				<LinkTag name='Home' />
				<LinkTag name='About' />
				<LinkTag name='Services' />
				<LinkTag name='Our Process' />
				<LinkTag name='Contact' />
			</ul>
			<Stroke name="Let's Build" />
		</div>
	);
};

export default Navbar;
