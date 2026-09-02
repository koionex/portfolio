import { useEffect } from 'react';
import { FaCheck } from 'react-icons/fa6';

/**
 * Success toast — shows "We'll reach you soon" style message with a green
 * check icon, auto-closes after `duration` ms (default 2000ms).
 */
const SuccessToast = ({ show, message, onClose, duration = 2000 }) => {
	useEffect(() => {
		if (!show) return;
		const timer = setTimeout(() => onClose(), duration);
		return () => clearTimeout(timer);
	}, [show, duration, onClose]);

	return (
		<div
			className={`fixed left-1/2 top-6 z-100 -translate-x-1/2 transition-all duration-300 ${
				show
					? 'translate-y-0 opacity-100'
					: 'pointer-events-none -translate-y-4 opacity-0'
			}`}
		>
			<div className='flex items-center gap-3 rounded-full bg-[var(--white)] px-5 py-3 shadow-2xl ring-1 ring-[var(--black)]/10'>
				<span className='flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500 text-[var(--white)]'>
					<FaCheck size={12} />
				</span>

				<p className='text-sm font-medium text-[var(--black)]'>{message}</p>
			</div>
		</div>
	);
};

export default SuccessToast;
