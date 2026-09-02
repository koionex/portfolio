import {
	FaLinkedinIn,
	FaInstagram,
	FaYoutube,
	FaDribbble,
	FaXTwitter,
} from 'react-icons/fa6';

import { MdEmail } from 'react-icons/md';

import logo from '../assets/images/horizontal-logo.png';
import gradientImage from '../assets/images/gradient-overlay.jpg';
import { scrollToSection } from '../utils/scroll';

// Reusable footer nav link — matches LinkTag hover/active behaviour
const FooterLink = ({ label, sectionId }) => {
	return (
		<button
			onClick={() => scrollToSection(sectionId)}
			className='group relative w-fit pb-1 text-sm text-[var(--black)] transition-all duration-300 ease-in-out hover:font-medium'
		>
			{label}
			<span
				className='absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-300 ease-in-out group-hover:w-full'
				style={{
					backgroundImage: `url(${gradientImage})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			/>
		</button>
	);
};

const Footer = () => {
	const exploreLinks = [
		{ label: 'Home', sectionId: 'home' },
		{ label: 'About', sectionId: 'about' },
		{ label: 'Service', sectionId: 'service' },
		{ label: 'Our Process', sectionId: 'our-process' },
		{ label: 'Contact', sectionId: 'contact' },
	];

	const socialLinks = [
		{
			icon: FaLinkedinIn,
			label: 'LinkedIn',
			link: 'https://www.linkedin.com/company/koionex',
		},
		{
			icon: FaInstagram,
			label: 'Instagram',
			link: 'https://www.instagram.com/koionex',
		},
		{
			icon: FaYoutube,
			label: 'YouTube',
			link: 'https://youtube.com/@koionex?si=IYbNCtX6kr0Yk-PV',
		},
		// {
		// 	icon: FaDribbble,
		// 	label: 'Dribbble',
		// 	link: 'https://dribbble.com/koionex',
		// },
		{
			icon: FaXTwitter,
			label: 'X',
			link: 'https://x.com/koionex',
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

			<div className='relative mx-auto max-w-7xl px-4 py-6 tablet:px-6'>
				{/* Background Grid Decorations */}
				<div className='grid-background pointer-events-none absolute bottom-0 left-[25%] h-32 w-48 opacity-30' />

				<div className='grid-background pointer-events-none absolute right-[5%] top-12 h-32 w-48 opacity-30' />

				{/* Main Content */}
				<div className='relative z-10 grid grid-cols-1 items-start gap-10 tablet:grid-cols-2'>
					{/* Left - Explore */}
					<div className='flex flex-col items-center text-center tablet:items-start tablet:text-left'>
						<h4 className='text-lg font-semibold text-[var(--black)]'>Explore</h4>

						<ul className='mt-4 flex flex-col items-center justify-center gap-3 tablet:flex-row tablet:flex-wrap tablet:items-center tablet:justify-start tablet:gap-x-3 tablet:gap-y-2'>
							{exploreLinks.map((link, index) => (
								<li key={link.label} className='flex items-center gap-3'>
									<FooterLink label={link.label} sectionId={link.sectionId} />

									{index < exploreLinks.length - 1 && (
										<span className='hidden text-[var(--black)]/40 tablet:inline'>
											&bull;
										</span>
									)}
								</li>
							))}
						</ul>
					</div>

					{/* Right - Logo + Social */}
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
