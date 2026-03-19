/**
 * Main nav and mega menus. Edit menu items here.
 * Used by Navbar and MegaMenu.
 */

import { BOOKING_URL, contact } from './contact';

export const mainNav = [
  { label: 'Home', href: '/', megaKey: null },
  { label: 'About Us', href: '/about', megaKey: 'about' },
  { label: 'Services', href: '/services', megaKey: 'services' },
  { label: 'Pricing', href: '/pricing', megaKey: 'pricing' },
  { label: 'Who We Serve', href: '/who-we-serve', megaKey: 'whoWeServe' },
  { label: 'Knowledge', href: '/knowledge', megaKey: 'knowledge' },
  { label: 'Contact', href: '/contact', megaKey: 'contact' },
]

export const megaMenuAbout = {
  columns: [
    {
      items: [
        { label: 'Our Story', href: '/about#our-story' },
        { label: 'Meet the Team', href: '/about#meet-the-team' },
        { label: 'Why Choose DepoTax', href: '/about#why-choose-depotax' },
        { label: 'Technology We Use', href: '/about#technology-we-use' },
      ],
    },
    {
      items: [
        { label: 'Client Reviews', href: '/about#client-reviews' },
        { label: 'Our Process', href: '/about#our-process' },
        { label: 'Case Studies', href: '/about#case-studies' },
        { label: 'Careers', href: '/about#careers' },
      ],
    },
  ],
  featuredCard: {
    text: 'Work with a team of experienced accountants focused on helping businesses grow.',
    ctaLabel: 'Book a free consultation',
    ctaHref: BOOKING_URL,
  },
}

export const megaMenuServices = {
  columns: [
    {
      title: 'Accounting & Compliance',
      items: [
        { label: 'Annual Accounts', href: '/services/annual-accounts' },
        { label: 'Bookkeeping', href: '/services/bookkeeping' },
        { label: 'Management Accounts', href: '/services/management-accounts' },
        { label: 'Payroll', href: '/services/payroll' },
        { label: 'VAT Returns', href: '/services/vat-returns' },
        { label: 'Confirmation Statement', href: '/services/confirmation-statement' },
      ],
    },
    {
      title: 'Tax Services',
      items: [
        { label: 'Self Assessment', href: '/services/self-assessment' },
        { label: 'Corporation Tax', href: '/services/corporation-tax' },
        { label: 'Capital Gains Tax', href: '/services/capital-gains-tax' },
        { label: 'Tax Planning', href: '/services/tax-planning' },
        { label: 'Non Resident Landlord Tax', href: '/services/non-resident-landlord-tax' },
      ],
    },
    {
      title: 'Business Advisory',
      items: [
        { label: 'Startup Support', href: '/services/startup-support' },
        { label: 'Company Formation', href: '/services/company-formation' },
        { label: 'Cashflow Forecasting', href: '/services/cashflow-forecasting' },
        { label: 'CFO Advisory', href: '/services/cfo-advisory' },
        { label: 'Business Growth Planning', href: '/services/business-growth-planning' },
      ],
    },
    {
      title: 'Property Services',
      items: [
        { label: 'Landlord Accounting', href: '/services/landlord-accounting' },
        { label: 'SPV Accounting', href: '/services/spv-accounting' },
        { label: 'Property Tax Returns', href: '/services/property-tax-returns' },
        { label: 'HMO / Holiday Let Accounting', href: '/services/hmo-holiday-let-accounting' },
      ],
    },
  ],
}

export const megaMenuPricing = {
  columns: [
    {
      title: 'Pricing formats',
      items: [
        { label: 'Compliance Only Packages', href: '/pricing?mode=packages&packageType=compliance' },
        { label: 'Core Packages', href: '/pricing?mode=packages&packageType=core' },
        { label: 'Growth Packages', href: '/pricing?mode=packages&packageType=growth' },
        { label: 'One Off Services', href: '/pricing?mode=single-services' },
        { label: 'Company Formations', href: '/pricing?mode=single-services&service=company-formation' },
      ],
    },
    {
      title: 'Client types',
      items: [
        { label: 'Contractors', href: '/pricing?mode=packages&businessType=contractors' },
        { label: 'Limited Companies', href: '/pricing?mode=packages&businessType=limited-companies' },
        { label: 'Landlords', href: '/pricing?mode=packages&businessType=landlords' },
        { label: 'Non Resident Landlords', href: '/pricing?mode=packages&businessType=non-resident-landlords' },
        { label: 'SPV Residential', href: '/pricing?mode=packages&businessType=spv-residential' },
        { label: 'Self Employed', href: '/pricing?mode=packages&businessType=self-employed' },
      ],
    },
  ],
}

export const megaMenuWhoWeServe = {
  columns: [
    {
      title: 'Individuals',
      items: [
        { label: 'Self Employed', href: '/who-we-serve/self-employed' },
        { label: 'Freelancers', href: '/who-we-serve/freelancers' },
        { label: 'High Net Worth Individuals', href: '/who-we-serve/high-net-worth-individuals' },
        { label: 'CIS Contractors', href: '/who-we-serve/cis-contractors' },
      ],
    },
    {
      title: 'Businesses',
      items: [
        { label: 'Startups', href: '/who-we-serve/startups' },
        { label: 'Limited Companies', href: '/who-we-serve/limited-companies' },
        { label: 'Small Businesses', href: '/who-we-serve/small-businesses' },
        { label: 'Contractors', href: '/who-we-serve/contractors' },
      ],
    },
    {
      title: 'Property',
      items: [
        { label: 'Landlords', href: '/who-we-serve/landlords' },
        { label: 'Non Resident Landlords', href: '/who-we-serve/non-resident-landlords' },
        { label: 'SPV Companies', href: '/who-we-serve/spv-companies' },
        { label: 'Property Investors', href: '/who-we-serve/property-investors' },
      ],
    },
    {
      title: 'Specialist',
      items: [
        { label: 'Charities', href: '/who-we-serve/charities' },
        { label: 'Consultants', href: '/who-we-serve/consultants' },
        { label: 'Healthcare Professionals', href: '/who-we-serve/healthcare-professionals' },
        { label: 'Tech Startups', href: '/who-we-serve/tech-startups' },
      ],
    },
  ],
}

export const megaMenuKnowledge = {
  columns: [
    {
      title: 'Guides & Advice',
      items: [
        { label: 'Tax Guides', href: '/knowledge/tax-guides' },
        { label: 'Accounting Guides', href: '/knowledge/accounting-guides' },
        { label: 'Business Advice', href: '/knowledge/business-advice' },
      ],
    },
    {
      title: 'Planning',
      items: [
        { label: 'Tax Planning Tips', href: '/knowledge/tax-planning-tips' },
      ],
    },
    {
      title: 'Resources',
      items: [
        { label: 'Downloadable Checklists', href: '/knowledge/checklists' },
        { label: 'Tax Calendar', href: '/knowledge/tax-calendar' },
        { label: 'FAQs', href: '/knowledge/faqs' },
      ],
    },
  ],
}

export const megaMenuContact = {
  columns: [
    {
      title: 'Get in touch',
      items: [
        { label: 'Contact page', href: '/contact' },
        { label: 'Book a consultation', href: BOOKING_URL },
        { label: `Email: ${contact.email}`, href: `mailto:${contact.email}` },
        { label: `Call: ${contact.phone}`, href: `tel:${contact.phone.replace(/\s/g, '')}` },
      ],
    },
    {
      title: 'Offices',
      items: [
        { label: `${contact.headOffice.label} (head office)`, href: contact.headOffice.mapUrl },
        ...contact.branches.map((b) => ({ label: b.label, href: b.mapUrl })),
      ],
    },
  ],
  featuredCard: {
    text: 'Have a question about accounting, tax, VAT or payroll? Speak to our team and we’ll point you in the right direction.',
    ctaLabel: 'Contact us',
    ctaHref: '/contact',
  },
}

/** Mega menu by nav key. Used by Navbar. */
export const megaMenus = {
  about: megaMenuAbout,
  services: megaMenuServices,
  pricing: megaMenuPricing,
  whoWeServe: megaMenuWhoWeServe,
  knowledge: megaMenuKnowledge,
  contact: megaMenuContact,
}
