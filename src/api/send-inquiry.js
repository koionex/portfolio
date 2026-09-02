import { sendInquiryMail } from '../utils/mail.js';

export default async function handler(req, res) {
	if (req.method !== 'POST') {
		return res.status(405).json({
			error: 'Method not allowed',
		});
	}

	const { name, email, phone, company, hasCompany, service } = req.body || {};

	if (!name || !email || !phone || !service) {
		return res.status(400).json({
			error: 'Missing required fields',
		});
	}

	try {
		await sendInquiryMail({
			name,
			email,
			phone,
			company,
			hasCompany,
			service,
		});

		return res.status(200).json({
			success: true,
		});
	} catch (error) {
		console.error('Email send error:', error);

		return res.status(500).json({
			error: 'Failed to send email',
		});
	}
}
