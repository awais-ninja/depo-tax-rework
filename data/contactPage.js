/**
 * Contact page content: hero and form.
 */

export const contactHero = {
  eyebrow: 'Contact DepoTax',
  title: 'Contact Us',
  description: 'Get in touch with our team. If you have a question about accounting, tax, payroll, or business matters, we are here to help. You can contact us directly, book a consultation, or visit one of our offices.',
  ctaBook: 'Book a Consultation',
  ctaEnquiry: 'Send an Enquiry',
}

export const contactForm = {
  heading: 'Send an Enquiry',
  successTitle: 'Thank you for your enquiry.',
  successMessage: 'We will get back to you as soon as possible.',
  fields: {
    name: { label: 'Full Name', placeholder: 'Your name', required: true },
    email: { label: 'Email Address', placeholder: 'you@example.com', required: true },
    phone: { label: 'Phone Number', placeholder: '+44 ...', required: false },
    service: { label: 'Service Required', required: false },
    message: { label: 'Message', placeholder: 'How can we help?', required: true },
  },
  serviceOptions: ['Accounting Services', 'Tax Services', 'Business Advisory', 'Property Accounting', 'General Enquiry'],
  submitLabel: 'Send Message',
  privacyNote: 'Your information will only be used to respond to your enquiry.',
  sidebar: {
    title: 'Prefer to meet?',
    description: 'Book a consultation at a time that suits you. Our team is available Monday to Friday, with Saturday and Sunday by arrangement.',
    ctaLabel: 'Book a Consultation',
  },
}
