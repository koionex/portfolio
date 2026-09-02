export const scrollToSection = (sectionId) => {
	const element = document.getElementById(sectionId);

	if (!element) return;

	const navbarHeight = 80;

	const elementPosition = element.getBoundingClientRect().top + window.scrollY;

	const scrollPosition = Math.max(0, elementPosition - navbarHeight);

	window.scrollTo({
		top: scrollPosition,
		behavior: 'smooth',
	});
};
