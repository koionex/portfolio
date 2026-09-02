import { useState } from 'react';
import Heading from '../components/Heading';
import gradientOverlay from '../assets/images/gradient-overlay.jpg';

const Contact = () => {
	const [hasCompany, setHasCompany] = useState(true);
	const [selectedService, setSelectedService] = useState('');

	const services = [
		'Branding',
		'UI/UX Design',
		'Web Development',
		'Custom Software',
		'Others',
	];

	return (
		<section className='relative w-full overflow-hidden pt-15'>
			{/* Heading */}
			<Heading title='Contact' />

			{/* Intro */}
			<div className='mx-auto mt-4 max-w-2xl px-6 text-center'>
				<p className='text-xs font-medium text-[var(--black)]'>
					Let&apos;s transform your idea into reality.
				</p>

				<p className='mt-5 text-sm leading-6 text-[var(--black)]'>
					Have an idea, project, or business challenge? Tell us about it. Whether you
					need a new brand, a website, a better user experience, or custom software,
					Koionex is ready to understand your vision and explore the next step with
					you.
				</p>
			</div>

			{/* Main Contact Container */}
			<div
				className='relative mx-auto mt-12 max-w-6xl rounded-2xl p-[1px]'
				style={{
					backgroundImage: `url(${gradientOverlay})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<div className='grid grid-cols-1 gap-10 rounded-[15px] bg-[var(--white)] p-5 lg:grid-cols-2 lg:p-8'>
					{/* ================= LEFT SIDE ================= */}
					<div className='flex flex-col justify-between'>
						<div>
							<h2 className='max-w-md text-3xl font-semibold leading-tight text-[var(--black)]'>
								Have an idea, a project,
								<br />
								or a question? Let&apos;s
								<br />
								connect.
							</h2>

							<p className='mt-4 text-sm text-[var(--black)]'>
								Email us directly at{' '}
								<span className='bg-linear-to-r from-[var(--gradient-blue)] via-[var(--gradient-red)] to-[var(--gradient-orange)] bg-clip-text font-semibold text-transparent'>
									hello@koionex.com
								</span>
								.
							</p>
						</div>

						{/* Why Choose Card */}
						<div
							className='relative mt-12 overflow-hidden rounded-2xl p-[1px]'
							style={{
								backgroundImage: `url(${gradientOverlay})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
							}}
						>
							{/* White Layer */}
							<div className='relative overflow-hidden rounded-[15px] bg-[var(--white)] p-6'>
								{/* Gradient Background Layer */}
								<div
									className='pointer-events-none absolute inset-0 opacity-10'
									style={{
										backgroundImage: `url(${gradientOverlay})`,
										backgroundSize: 'cover',
										backgroundPosition: 'center',
									}}
								/>

								<div className='relative z-10'>
									<h3 className='bg-linear-to-r from-[var(--gradient-blue)] via-[var(--gradient-red)] to-[var(--gradient-orange)] bg-clip-text text-sm font-semibold text-transparent'>
										Why choose Koionex
									</h3>

									<ul className='mt-5 space-y-4 text-sm leading-6 text-[var(--black)]'>
										<li>
											<span className='font-medium'>• Vision-led:</span> We begin by
											understanding your goals and direction.
										</li>

										<li>
											<span className='font-medium'>• User-focused:</span> We design
											solutions around the people who will use them.
										</li>

										<li>
											<span className='font-medium'>• Practical thinking:</span> We focus
											on useful solutions rather than unnecessary complexity.
										</li>

										<li>
											<span className='font-medium'>• Connected process:</span> Branding,
											design, and development work together.
										</li>

										<li>
											<span className='font-medium'>• Growing with you:</span> We create
											solutions that can adapt as your business develops.
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					{/* ================= RIGHT FORM ================= */}
					<form className='rounded-2xl border border-[var(--gradient-blue)]/40 bg-[var(--white)] p-5 md:p-7'>
						{/* Name */}
						<div>
							<label className='text-xs font-medium text-[var(--black)]'>
								Name <span className='text-[var(--gradient-red)]'>*</span>
							</label>

							<input
								type='text'
								required
								className='mt-2 w-full rounded-lg border border-transparent bg-[var(--black)]/10 px-4 py-3 text-sm outline-none transition focus:border-[var(--gradient-blue)]'
							/>
						</div>

						{/* Email */}
						<div className='mt-4'>
							<label className='text-xs font-medium text-[var(--black)]'>
								Email <span className='text-[var(--gradient-red)]'>*</span>
							</label>

							<input
								type='email'
								required
								className='mt-2 w-full rounded-lg border border-transparent bg-[var(--black)]/10 px-4 py-3 text-sm outline-none transition focus:border-[var(--gradient-blue)]'
							/>
						</div>

						{/* Phone */}
						<div className='mt-4'>
							<label className='text-xs font-medium text-[var(--black)]'>
								Phone <span className='text-[var(--gradient-red)]'>*</span>
							</label>

							<input
								type='tel'
								required
								className='mt-2 w-full rounded-lg border border-transparent bg-[var(--black)]/10 px-4 py-3 text-sm outline-none transition focus:border-[var(--gradient-blue)]'
							/>
						</div>

						{/* Company */}
						<div className='mt-4'>
							<label className='text-xs font-medium text-[var(--black)]'>
								Company name{' '}
								{hasCompany && <span className='text-[var(--gradient-red)]'>*</span>}
							</label>

							<input
								type='text'
								required={hasCompany}
								disabled={!hasCompany}
								className={`mt-2 w-full rounded-lg border border-transparent px-4 py-3 text-sm outline-none transition ${
									hasCompany
										? 'bg-[var(--black)]/10'
										: 'cursor-not-allowed bg-[var(--black)]/5'
								}`}
							/>

							{/* Toggle */}
							<div className='mt-3 flex items-center gap-3'>
								<button
									type='button'
									onClick={() => setHasCompany(!hasCompany)}
									className={`relative h-5 w-10 rounded-full transition ${
										hasCompany ? 'bg-[var(--black)]' : 'bg-[var(--black)]/20'
									}`}
								>
									<span
										className={`absolute top-1 h-3 w-3 rounded-full bg-[var(--white)] transition-all ${
											hasCompany ? 'left-6' : 'left-1'
										}`}
									/>
								</button>

								<span className='text-xs text-[var(--black)]/60'>
									{hasCompany ? 'Company name is required' : "I don't have a company"}
								</span>
							</div>
						</div>

						{/* Service Input */}
						<div className='mt-5'>
							<label className='text-xs font-medium text-[var(--black)]'>
								Service <span className='text-[var(--gradient-red)]'>*</span>
							</label>

							<input
								type='text'
								value={selectedService}
								readOnly
								required
								placeholder='Select a service below'
								className='mt-2 w-full rounded-lg border border-transparent bg-[var(--black)]/10 px-4 py-3 text-sm outline-none'
							/>
						</div>

						{/* Service Radio Buttons */}
						<div className='mt-3 grid grid-cols-2 gap-x-5 gap-y-3'>
							{services.map((service) => (
								<label
									key={service}
									className='flex cursor-pointer items-center gap-2 text-xs text-[var(--black)]'
								>
									<input
										type='radio'
										name='service'
										value={service}
										checked={selectedService === service}
										onChange={() => setSelectedService(service)}
										className='h-4 w-4 cursor-pointer'
									/>

									<span>{service}</span>
								</label>
							))}
						</div>

						{/* Submit Button */}
						<div className='mt-8 flex justify-center'>
							<button
								type='submit'
								className='rounded-full p-[1px]'
								style={{
									backgroundImage: `url(${gradientOverlay})`,
									backgroundSize: 'cover',
									backgroundPosition: 'center',
								}}
							>
								<span className='block rounded-full bg-[var(--white)] px-5 py-2 text-xs text-[var(--black)] transition hover:bg-transparent hover:text-[var(--white)]'>
									Send Inquiry
								</span>
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
