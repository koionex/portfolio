import { useState, useEffect } from 'react';

import { HiMenuAlt3, HiX } from 'react-icons/hi';

import Logo from '../assets/images/horizontal-logo.png';

import Stroke from './buttons/Stroke';
import Fill from './buttons/Fill';
import LinkTag from './LinkTag';

import { scrollToSection } from '../utils/scroll';

const navLinks = [
	{ name: 'Home', sectionId: 'home' },
	{ name: 'About', sectionId: 'about' },
	{ name: 'Services', sectionId: 'service' },
	{ name: 'Our Process', sectionId: 'our-process' },
	{ name: 'Contact', sectionId: 'contact' },
];

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('home');

	/* ============================= */
	/* ACTIVE SECTION */
	/* ============================= */

	useEffect(() => {
		const sectionIds = navLinks.map((link) => link.sectionId);

		const observers = [];

		sectionIds.forEach((id) => {
			const element = document.getElementById(id);

			if (!element) return;

			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) {
						setActiveSection(id);
					}
				},
				{
					threshold: 0.3,
				},
			);

			observer.observe(element);
			observers.push(observer);
		});

		return () => {
			observers.forEach((observer) => observer.disconnect());
		};
	}, []);

	/* ============================= */
	/* PREVENT BODY SCROLL */
	/* ============================= */

	useEffect(() => {
		document.body.style.overflow = menuOpen ? 'hidden' : '';

		return () => {
			document.body.style.overflow = '';
		};
	}, [menuOpen]);

	/* ============================= */
	/* FUNCTIONS */
	/* ============================= */

	const closeMenu = () => {
		setMenuOpen(false);
	};

	const handleNavClick = (sectionId) => {
		// Immediately update active link
		setActiveSection(sectionId);

		// Scroll to section
		scrollToSection(sectionId);

		// Close mobile/tablet menu
		closeMenu();
	};

	const handleLetsBuild = () => {
		setActiveSection('contact');
		scrollToSection('contact');
		closeMenu();
	};

	return (
		<>
			{/* ================= NAVBAR ================= */}

			<header className='fixed inset-x-0 top-0 z-30 h-[80px] w-full border-b-2 border-navbar-gradient bg-[var(--white)]'>
				<div className='mx-auto flex h-full w-full items-center justify-between gap-6 px-5 tablet:px-8 desktop:px-10'>
					{/* Logo */}

					<img
						src={Logo}
						alt='Koionex Logo'
						className='h-auto w-28 shrink-0 desktop:w-30'
					/>

					{/* ================= DESKTOP NAV ================= */}

					<ul className='hidden items-center justify-center gap-8 desktop:flex'>
						{navLinks.map((link) => (
							<LinkTag
								key={link.sectionId}
								name={link.name}
								sectionId={link.sectionId}
								isActive={activeSection === link.sectionId}
								onClick={() => handleNavClick(link.sectionId)}
							/>
						))}
					</ul>

					{/* Desktop CTA */}

					<div className='hidden shrink-0 desktop:block'>
						<Stroke name="Let's Build" onClick={() => handleNavClick('contact')} />
					</div>

					{/* ================= MOBILE / TABLET MENU ================= */}

					<button
						type='button'
						aria-label='Open menu'
						onClick={() => setMenuOpen(true)}
						className={`items-center justify-center p-2 text-2xl text-[var(--black)] desktop:hidden ${
							menuOpen ? 'hidden' : 'flex'
						}`}
					>
						<HiMenuAlt3 />
					</button>
				</div>
			</header>

			{/* Spacer for fixed navbar */}

			<div className='h-[80px] w-full' aria-hidden='true' />

			{/* ================= BACKDROP ================= */}

			<div
				onClick={closeMenu}
				className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 desktop:hidden ${
					menuOpen
						? 'pointer-events-auto opacity-100'
						: 'pointer-events-none opacity-0'
				}`}
			/>

			{/* ================= MOBILE / TABLET PANEL ================= */}

			<aside
				className={`fixed inset-y-0 left-0 z-50 flex w-[80%] max-w-[400px] flex-col bg-[var(--white)] shadow-2xl transition-transform duration-300 ease-in-out desktop:hidden ${
					menuOpen ? 'translate-x-0' : '-translate-x-full'
				}`}
			>
				{/* Menu Header */}

				<div className='flex h-[80px] shrink-0 items-center justify-between border-b-2 border-navbar-gradient px-6'>
					<img src={Logo} alt='Koionex Logo' className='h-auto w-28' />

					<button
						type='button'
						aria-label='Close menu'
						onClick={closeMenu}
						className='flex items-center justify-center p-2 text-2xl text-[var(--black)]'
					>
						<HiX />
					</button>
				</div>

				{/* Navigation Links */}

				<nav className='flex-1 overflow-y-auto px-6 py-8'>
					<ul className='flex flex-col gap-6'>
						{navLinks.map((link) => (
							<LinkTag
								key={link.sectionId}
								name={link.name}
								sectionId={link.sectionId}
								isActive={activeSection === link.sectionId}
								onClick={() => handleNavClick(link.sectionId)}
							/>
						))}
					</ul>
				</nav>

				{/* CTA */}

				<div className='shrink-0 border-t border-[var(--black)]/10 px-6 py-6'>
					<Fill name="Let's Build" onClick={handleLetsBuild} className='w-full' />
				</div>
			</aside>
		</>
	);
};

export default Navbar;
