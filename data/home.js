/**
 * Home page section content. Components import from here.
 */

/** Hero */
export const hero = {
  trustPoints: ['Since 2010', 'Fixed Fee Packages', 'HMRC Support', 'Cloud Accounting'],
  welcomeLabel: 'Welcome to DepoTax',
  headlineParts: [
    { text: 'Specialist Accountants & ', accent: false },
    { text: 'Tax Consultants', accent: true },
    { text: 'for Contractors, ', accent: false },
    { text: 'Companies', accent: true },
    { text: 'and ', accent: false },
    { text: 'Growing Businesses', accent: true },
  ],
  subtext:
    'Expert tax planning, bookkeeping, payroll and accounting services for contractors, limited companies, self employed professionals, landlords and SPVs across the UK.',
  ctaPrimary: { label: 'View Pricing', href: '/pricing' },
  ctaSecondary: { label: 'Book Free Consultation', href: 'https://www.picktime.com/aazizandco' },
  googleReviews: {
    rating: '4.9',
    basedOn: 'Based on 192 Google reviews',
    verified: 'Verified Google Rating',
  },
  quickServicesCard: {
    badge: 'Instant Quote',
    heading1: 'Choose the support ',
    heading2: 'you need',
    description: 'Quickly explore the services most businesses need.',
  },
  quickServices: [
    { title: 'Tax Planning & Returns', href: '/services/tax-planning', popular: true },
    { title: 'Bookkeeping & Payroll', href: '/services/bookkeeping', popular: false },
    { title: 'Business Advice & Compliance', href: '/services/cfo-advisory', popular: false },
  ],
}

/** Trust strip (affiliations) */
export const trustStrip = {
  heading1: 'Our Affiliations & ',
  heading2: 'Partners',
  description: 'Trusted by businesses, property investors and individuals across the UK.',
  logos: [
    { name: 'ACCA', src: '/hero/acca.svg', alt: 'ACCA - Association of Chartered Certified Accountants', width: 120, height: 48 },
    { name: 'AAT', src: '/hero/aat.svg', alt: 'AAT - Association of Accounting Technicians', width: 120, height: 48 },
    { name: 'Xero', src: '/hero/xero.svg', alt: 'Xero cloud accounting', width: 120, height: 48 },
    { name: 'QuickBooks', src: '/hero/quickBooks.svg', alt: 'QuickBooks accounting software', width: 120, height: 48 },
    { name: 'Sage', src: '/hero/sage.svg', alt: 'Sage business software', width: 120, height: 48 },
    { name: 'HMRC', src: '/hero/hmrc.jpeg', alt: 'HMRC - HM Revenue and Customs', width: 48, height: 48 },
    { name: 'Moneysoft', src: '/hero/moneysoft.png', alt: 'Moneysoft payroll software', width: 120, height: 36 },
  ],
}

/** Trust metrics (stats) */
export const trustMetrics = {
  eyebrow: 'Why Clients Trust Us',
  heading1: 'Trusted Accounting Support for ',
  heading2: 'Businesses and Individuals',
  description: 'DepoTax provides reliable accounting, tax, payroll, and advisory services for clients across the UK.',
  metrics: [
    { value: '10+', label: 'Years Experience' },
    { value: '500+', label: 'Clients Supported' },
    { value: '1000+', label: 'Tax Returns Filed' },
    { value: '98%', label: 'Client Satisfaction' },
  ],
}

/** Why Choose Us - feature list (iconKey maps to component icon) */
export const whyChooseUs = {
  heading1: 'Why Choose ',
  heading2: 'Us',
  description:
    'Why choose DepoTax for accounting, tax returns and bookkeeping in the UK? Businesses, contractors, landlords and self-employed professionals choose our fixed fee accountants for expert accounting services in the UK, deadline-focused support, payroll help and reliable HMRC compliance guidance for tax returns and bookkeeping services.',
  features: [
    { iconKey: 'bolt', title: 'Fast Company Accounts', description: 'We prepare company accounts quickly and efficiently so businesses stay organised and meet Companies House filing requirements on time—often within 20 days.' },
    { iconKey: 'phone', title: 'Unlimited Phone Support', description: 'Clients benefit from unlimited phone and email support whenever they need accounting or tax advice from an experienced small business accountant in the UK.' },
    { iconKey: 'document', title: 'Free Tax Review', description: 'We include a free tax review to highlight opportunities for better planning, savings and HMRC compliance across your company accounts and self assessment.' },
    { iconKey: 'clock', title: 'On-Time Filing', description: 'Our team works to a clear deadline process with a 100% focus on filing on time for tax returns, VAT, payroll and HMRC compliance documents.' },
    { iconKey: 'globe', title: 'UK Tax Expertise', description: 'With over 10 years serving the UK market, we understand local tax rules, HMRC expectations and how accounting services in the UK should support growing businesses.' },
    { iconKey: 'shield', title: 'Quality Assurance', description: 'Every assignment is reviewed under a clear quality assurance and department review process so work is accurate, compliant and matched to your sector.' },
    { iconKey: 'userGroup', title: 'Dedicated Support Team', description: 'You get responsive support from a dedicated team of accountants who understand your business, sector expertise needs and ongoing bookkeeping services in the UK.' },
    { iconKey: 'building', title: 'Accessible London Office', description: 'Our Greyhound Lane, London SW16 5NL office is easy to reach for in-person consultations, with convenient transport links and free parking outside the office.' },
  ],
}

/** Final CTA */
export const finalCta = {
  heading1: 'Get ',
  heading2: 'Started',
  title: 'Need Reliable Accounting and Tax Support?',
  body: 'DepoTax helps businesses and individuals across the UK with trusted accounting, tax, payroll, bookkeeping, and advisory services. Get practical support tailored to your needs.',
  cardEyebrow: 'Reach out today',
  ctaEmail: 'Contact Us Today',
  ctaPhone: 'Call Our Team',
  cardFooter: 'Trusted by businesses, contractors, landlords, and self-employed professionals. Speak to our team for practical and reliable advice.',
}

/** FAQ section */
export const faq = {
  heading1: 'Frequently Asked ',
  heading2: 'Questions',
  intro: 'Find answers to common questions about accounting packages, tax returns, bookkeeping, payroll, HMRC support and working with DepoTax across the UK.',
  items: [
    { question: 'How much does an accountant cost in the UK?', answer: 'The cost of an accountant in the UK depends on the level of support you need. DepoTax offers flexible accounting packages for contractors, limited companies, sole traders, landlords and growing businesses, with options to spread the cost over 12 months.' },
    { question: 'Do I need an accountant for a limited company?', answer: 'Most limited companies benefit from an accountant to handle annual accounts, corporation tax, payroll, VAT returns and Companies House filing. This helps businesses stay compliant and organised throughout the year.' },
    { question: 'Do you help with self assessment tax returns?', answer: 'Yes. DepoTax supports self employed professionals, landlords and individuals with self assessment tax returns, tax planning and HMRC filing support.' },
    { question: 'Do you offer bookkeeping and payroll services?', answer: 'Yes. We provide bookkeeping services, payroll and PAYE support, pension submissions and cloud accounting support for small businesses and limited companies across the UK.' },
    { question: 'Do you work with contractors and landlords?', answer: 'Yes. We support contractors with accounting and tax planning, and we also provide specialist accounting services for landlords, HMO owners, property investors and SPV companies.' },
    { question: 'Can I get a fixed fee accounting package?', answer: 'Yes. DepoTax offers fixed fee accounting packages designed to give businesses clear monthly pricing with no hidden surprises.' },
    { question: 'Do you only work with businesses in London?', answer: 'No. While our office is based in London, we support businesses, contractors, sole traders, landlords and growing companies across the UK.' },
    { question: 'How do I get started with DepoTax?', answer: 'You can get started by contacting our team, booking a consultation, or using the pricing calculator to explore the package that best suits your needs.' },
  ],
  stillHaveQuestions: {
    title: 'Still Have Questions?',
    description: 'Speak to our team for expert advice on accounting packages, tax returns, bookkeeping and business support.',
    ctaBook: 'Book Consultation',
    ctaContact: 'Contact Us',
  },
}

/** Core Services section */
export const coreServices = {
  heading1: 'Core ',
  heading2: 'Services',
  subtitle: 'Bookkeeping, Payroll, Tax Returns & Accounting Services in the UK',
  description: 'DepoTax provides expert bookkeeping, payroll, tax return, business accounting and property accounting services for companies, contractors, sole traders, landlords and growing businesses across the UK.',
  seeMoreLabel: 'See more services',
  services: [
    { title: 'Bookkeeping Services', description: 'Accurate bookkeeping services for small businesses, limited companies and startups using modern cloud accounting tools.', bullets: ['Cloud bookkeeping support', 'Better financial records', 'Ongoing monthly accuracy'], href: '/services/bookkeeping', chip: 'Popular Service', image: '/services/bookkeeping.jpg' },
    { title: 'Payroll Services', description: 'Reliable payroll and PAYE services including payslips, RTI submissions, pension support and HMRC payroll compliance.', bullets: ['PAYE and RTI submissions', 'Pension support', 'HMRC payroll compliance'], href: '/services/payroll', chip: null, image: '/services/payroll.jpg' },
    { title: 'Self Assessment & Tax Returns', description: 'Expert help with self assessment tax returns, personal tax returns and HMRC filing for sole traders, landlords and individuals.', bullets: ['Self assessment tax returns', 'Personal tax return support', 'HMRC filing assistance'], href: '/services/self-assessment', chip: 'For Individuals', image: '/services/tax-return.jpg' },
    { title: 'Management Accounts', description: 'Clear management accounts, profit and loss reports and cash flow insight to help businesses make better financial decisions.', bullets: ['Profit and loss reporting', 'Cash flow visibility', 'Better financial decisions'], href: '/services/management-accounts', chip: null, image: '/services/management-accounts.jpg' },
    { title: 'Property Accounts Services', description: 'Specialist property accounting for landlords, HMO owners and investors including rental accounts and tax reporting support.', bullets: ['Rental income reporting', 'Landlord tax support', 'Property portfolio accounting'], href: '/services/landlord-accounting', chip: 'Property Specialists', image: '/services/property-account-services.jpg' },
    { title: 'Business Startup Support', description: 'Startup accounting support including company formation, financial setup, bookkeeping structure and tax planning for new businesses.', bullets: ['Company formation support', 'Financial setup guidance', 'Startup tax planning'], href: '/services/startup-support', chip: 'For Growing Businesses', image: '/services/business-startup.jpg' },
  ],
  ctaLabels: ['Explore service', 'View details', 'Get help', 'Learn more', 'Read more', 'View details'],
}
