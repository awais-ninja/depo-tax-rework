/**
 * Edit menu items here. Each mega menu has:
 * - columns: array of { title?: string, items: [{ label, href }] }
 * - featuredCard?: { text, ctaLabel, ctaHref } for a highlight card (e.g. About Us)
 */

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
    ctaHref: 'https://www.picktime.com/aazizandco',
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
      items: [
        { label: 'Compliance Only Packages', href: '/pricing#compliance' },
        { label: 'Core Packages', href: '/pricing#core' },
        { label: 'Growth Packages', href: '/pricing#growth' },
        { label: 'One Off Services', href: '/pricing#one-off' },
        { label: 'Company Formations', href: '/pricing#formations' },
      ],
    },
    {
      items: [
        { label: 'Contractors', href: '/pricing' },
        { label: 'Limited Companies', href: '/pricing' },
        { label: 'Landlords', href: '/pricing' },
        { label: 'Non Resident Landlords', href: '/pricing' },
        { label: 'SPV Residential', href: '/pricing' },
        { label: 'Self Employed', href: '/pricing' },
      ],
    },
  ],
}

export const megaMenuWhoWeServe = {
  columns: [
    {
      title: 'Individuals',
      items: [
        { label: 'Self Employed', href: '/who-we-serve#individuals-detail' },
        { label: 'Freelancers', href: '/who-we-serve#individuals-detail' },
        { label: 'High Net Worth Individuals', href: '/who-we-serve#individuals-detail' },
        { label: 'CIS Contractors', href: '/who-we-serve#individuals-detail' },
      ],
    },
    {
      title: 'Businesses',
      items: [
        { label: 'Startups', href: '/who-we-serve#businesses-detail' },
        { label: 'Limited Companies', href: '/who-we-serve#businesses-detail' },
        { label: 'Small Businesses', href: '/who-we-serve#businesses-detail' },
        { label: 'Contractors', href: '/who-we-serve#businesses-detail' },
      ],
    },
    {
      title: 'Property',
      items: [
        { label: 'Landlords', href: '/who-we-serve#property-clients-detail' },
        { label: 'Non Resident Landlords', href: '/who-we-serve#property-clients-detail' },
        { label: 'SPV Companies', href: '/who-we-serve#property-clients-detail' },
        { label: 'Property Investors', href: '/who-we-serve#property-clients-detail' },
      ],
    },
    {
      title: 'Specialist',
      items: [
        { label: 'Charities', href: '/who-we-serve#specialist-professionals-detail' },
        { label: 'Consultants', href: '/who-we-serve#specialist-professionals-detail' },
        { label: 'Healthcare Professionals', href: '/who-we-serve#specialist-professionals-detail' },
        { label: 'Tech Startups', href: '/who-we-serve#specialist-professionals-detail' },
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
