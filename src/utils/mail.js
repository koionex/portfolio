import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

const transporter = nodemailer.createTransport({
	host: process.env.ZOHO_SMTP_HOST,
	port: Number(process.env.ZOHO_SMTP_PORT),
	secure: process.env.ZOHO_SMTP_SECURE === 'true',
	auth: {
		user: process.env.ZOHO_EMAIL_USER,
		pass: process.env.ZOHO_EMAIL_PASS,
	},
});

const escapeHtml = (str = '') => {
	return String(str)
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#039;');
};

export const sendInquiryMail = async ({
	name,
	email,
	phone,
	company,
	hasCompany,
	service,
}) => {
	// Get HTML template path
	const templatePath = path.join(process.cwd(), 'templates', 'inquiry.html');

	// Read HTML template
	let html = fs.readFileSync(templatePath, 'utf8');

	// Replace placeholders
	html = html
		.replace('{{name}}', escapeHtml(name))
		.replace('{{email}}', escapeHtml(email))
		.replace('{{phone}}', escapeHtml(phone))
		.replace(
			'{{company}}',
			hasCompany ? escapeHtml(company || '-') : 'No company',
		)
		.replace('{{service}}', escapeHtml(service))
		.replace('{{year}}', new Date().getFullYear());

	// Send email
	await transporter.sendMail({
		from: `"Koionex" <${process.env.ZOHO_EMAIL_USER}>`,
		to: process.env.ZOHO_RECEIVER_EMAIL,
		replyTo: email,
		subject: `New Inquiry from ${name} — ${service}`,
		html,
	});
};
