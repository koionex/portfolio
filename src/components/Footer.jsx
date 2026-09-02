import {
	FaLinkedinIn,
	FaInstagram,
	FaYoutube,
	FaDribbble,
	FaXTwitter,
} from 'react-icons/fa6';

import { MdEmail } from 'react-icons/md';

import logo from '../assets/images/horizontal-logo.png';

const Footer = () => {
	const exploreLinks = ['Home', 'About', 'Service', 'Our Process', 'Contact'];

	const serviceLinks = [
		'Branding',
		'UI/UX Design',
		'Web Development',
		'Custom Software',
	];

	const socialLinks = [
		{
			icon: FaLinkedinIn,
			label: 'LinkedIn',
			link: '#',
		},
		{
			icon: FaInstagram,
			label: 'Instagram',
			link: '#',
		},
		{
			icon: FaYoutube,
			label: 'YouTube',
			link: '#',
		},
		{
			icon: FaDribbble,
			label: 'Dribbble',
			link: '#',
		},
		{
			icon: FaXTwitter,
			label: 'X',
			link: '#',
		},
		{
			icon: MdEmail,
			label: 'Email',
			link: 'mailto:hello@koionex.com',
		},
	];

	return (
		<footer className='relative w-full overflow-hidden bg-[var(--white)] pt-15'>
			{/* Gradient Top Stroke */}
			<div className='h-[1px] w-full bg-linear-to-r from-[var(--gradient-blue)] via-[var(--gradient-red)] to-[var(--gradient-orange)]' />

			<div className='relative mx-auto max-w-7xl px-6 py-6'>
				{/* Background Grid Decorations */}
				<div className='grid-background pointer-events-none absolute bottom-0 left-[25%] h-32 w-48 opacity-30' />

				<div className='grid-background pointer-events-none absolute right-[5%] top-12 h-32 w-48 opacity-30' />

				{/* Main Content */}
				<div className='relative z-10 grid grid-cols-1 items-start gap-10 md:grid-cols-3'>
					{/* Left - Explore */}
					<div className='flex flex-col'>
						<h4 className='text-xs font-semibold text-[var(--black)]'>Explore</h4>

						<ul className='mt-4 space-y-2'>
							{exploreLinks.map((link) => (
								<li key={link}>
									<a
										href={`#${link.toLowerCase().replaceAll(' ', '-')}`}
										className='text-xs text-[var(--black)] transition-colors duration-300 hover:font-medium'
									>
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Center - Logo + Social */}
					<div className='flex flex-col items-center text-center'>
						{/* Logo */}
						<img src={logo} alt='Koionex' className='h-auto w-24 object-contain' />

						{/* Tagline */}
						<p className='mt-2 text-xs font-medium'>
							<span className='text-[var(--gradient-blue)]'>Lead with Vision.</span>{' '}
							<span className='text-[var(--gradient-red)]'>Transform Ideas.</span>{' '}
							<span className='text-[var(--gradient-orange)]'>Connect People.</span>
						</p>

						{/* Social Icons */}
						<div className='mt-8 flex items-center justify-center gap-7'>
							{socialLinks.map((social) => {
								const Icon = social.icon;

								return (
									<a
										key={social.label}
										href={social.link}
										aria-label={social.label}
										target={
											social.link !== 'mailto:hello@koionex.com' ? '_blank' : undefined
										}
										rel='noopener noreferrer'
										className='text-base text-[var(--black)] transition-all duration-300 hover:scale-110'
									>
										<Icon />
									</a>
								);
							})}
						</div>
					</div>

					{/* Right - Services */}
					<div className='flex flex-col md:items-end'>
						<h4 className='text-xs font-semibold text-[var(--black)]'>Service</h4>

						<ul className='mt-4 space-y-2 md:text-right'>
							{serviceLinks.map((service) => (
								<li key={service}>
									<a
										href='#service'
										className='text-xs text-[var(--black)] transition-colors duration-300 hover:font-medium'
									>
										{service}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Bottom Copyright */}
				<div className='relative z-10 mt-8 flex justify-center border-t border-[var(--black)]/10 pt-4'>
					<p className='text-xs text-[var(--black)]'>
						© {new Date().getFullYear()}{' '}
						<span className='font-semibold'>Koionex</span>. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
