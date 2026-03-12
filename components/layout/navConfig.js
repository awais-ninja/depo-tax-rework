/**
 * Edit menu items here. Each mega menu has:
 * - columns: array of { title?: string, items: [{ label, href }] }
 * - featuredCard?: { text, ctaLabel, ctaHref } for a highlight card (e.g. About Us)
 */

export const megaMenuAbout = {
  columns: [
    {
      items: [
        { label: 'Work in Progress', href: '/work-in-progress' },
        { label: 'Our Story', href: '/about/our-story' },
        { label: 'Meet the Team', href: '/about/team' },
        { label: 'Why Choose DepoTax', href: '/about/why-choose-us' },
        { label: 'Technology We Use', href: '/about/technology' },
      ],
    },
    {
      items: [
        { label: 'Client Reviews', href: '/about/reviews' },
        { label: 'Our Process', href: '/about/process' },
        { label: 'Case Studies', href: '/about/case-studies' },
        { label: 'Careers', href: '/about/careers' },
      ],
    },
  ],
  featuredCard: {
    text: 'Work with a team of experienced accountants focused on helping businesses grow.',
    ctaLabel: 'Book a free consultation',
    ctaHref: '/book-consultation',
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
        { label: 'Business Growth Planning', href: '/services/business-growth' },
      ],
    },
    {
      title: 'Property Services',
      items: [
        { label: 'Landlord Accounting', href: '/services/landlord-accounting' },
        { label: 'SPV Accounting', href: '/services/spv-accounting' },
        { label: 'Property Tax Returns', href: '/services/property-tax-returns' },
        { label: 'HMO / Holiday Let Accounting', href: '/services/hmo-holiday-let' },
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
        { label: 'Contractors', href: '/pricing/contractors' },
        { label: 'Limited Companies', href: '/pricing/limited-companies' },
        { label: 'Landlords', href: '/pricing/landlords' },
        { label: 'Non Resident Landlords', href: '/pricing/non-resident-landlords' },
        { label: 'SPV Residential', href: '/pricing/spv' },
        { label: 'Self Employed', href: '/pricing/self-employed' },
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
        { label: 'High Net Worth Individuals', href: '/who-we-serve/hnwi' },
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
        { label: 'SPV Companies', href: '/who-we-serve/spvs' },
        { label: 'Property Investors', href: '/who-we-serve/property-investors' },
      ],
    },
    {
      title: 'Specialist',
      items: [
        { label: 'Charities', href: '/who-we-serve/charities' },
        { label: 'Consultants', href: '/who-we-serve/consultants' },
        { label: 'Healthcare Professionals', href: '/who-we-serve/healthcare' },
        { label: 'Tech Startups', href: '/who-we-serve/tech-startups' },
      ],
    },
  ],
}

export const megaMenuKnowledge = {
  columns: [
    {
      items: [
        { label: 'Tax Guides', href: '/knowledge/tax-guides' },
        { label: 'Accounting Guides', href: '/knowledge/accounting-guides' },
        { label: 'Business Advice', href: '/knowledge/business-advice' },
      ],
    },
    {
      items: [
        { label: 'Latest Insights', href: '/knowledge/insights' },
        { label: 'Budget Updates', href: '/knowledge/budget-updates' },
        { label: 'Tax Planning Tips', href: '/knowledge/tax-planning-tips' },
      ],
    },
    {
      items: [
        { label: 'Downloadable Checklists', href: '/knowledge/checklists' },
        { label: 'Tax Calendar', href: '/knowledge/tax-calendar' },
        { label: 'FAQs', href: '/knowledge/faqs' },
      ],
    },
  ],
}
