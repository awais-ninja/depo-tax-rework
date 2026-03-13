/**
 * Data for the four audience detail sections on the Who We Serve page.
 * Order: Individuals, Businesses, Property Clients, Specialist Professionals.
 * Layout alternates: text-left, text-right, text-left, text-right.
 */

export const AUDIENCE_DETAIL_SECTIONS = [
  {
    id: 'individuals-detail',
    label: 'Individuals',
    heading: 'Accounting and Tax Support for Individuals',
    paragraph:
      'DepoTax supports individuals with personal tax matters, self-employment income, contractor earnings, landlord income, and more complex reporting needs. Whether you need Self Assessment help, advice on allowable expenses, or support with capital gains or additional income sources, we provide clear guidance and accurate filing so you stay compliant and in control.',
    supportPoints: [
      { title: 'Self Assessment Support' },
      { title: 'Freelancer and Contractor Tax Help' },
      { title: 'Landlord Tax Reporting' },
      { title: 'Support for Additional Income Sources' },
    ],
    serviceLinks: [
      { label: 'Self Assessment', href: '/services/self-assessment' },
      { label: 'Capital Gains Tax', href: '/services/capital-gains-tax' },
      { label: 'Tax Planning', href: '/services/tax-planning' },
      { label: 'Non-Resident Landlord Tax', href: '/services/non-resident-landlord-tax' },
    ],
    ctaLabel: 'Speak to Our Team',
    ctaHref: '/contact',
    layout: 'text-left',
  },
  {
    id: 'businesses-detail',
    label: 'Businesses',
    heading: 'Accounting Support for Startups, Companies, and Growing Businesses',
    paragraph:
      'DepoTax works with startups, limited companies, and small businesses that need structured accounting, payroll, tax compliance, and advisory support. From day-one setup and bookkeeping to year-end accounts, VAT, corporation tax, and growth planning, we help you stay organised and compliant so you can focus on running your business.',
    supportPoints: [
      { title: 'Year-End Accounts and Compliance' },
      { title: 'Bookkeeping and Payroll' },
      { title: 'VAT and Corporation Tax Support' },
      { title: 'Advisory Support for Business Growth' },
    ],
    serviceLinks: [
      { label: 'Annual Accounts', href: '/services/annual-accounts' },
      { label: 'Bookkeeping', href: '/services/bookkeeping' },
      { label: 'Payroll', href: '/services/payroll' },
      { label: 'VAT Returns', href: '/services/vat-returns' },
      { label: 'Corporation Tax', href: '/services/corporation-tax' },
      { label: 'Startup Support', href: '/services/startup-support' },
      { label: 'Company Formation', href: '/services/company-formation' },
      { label: 'Cashflow Forecasting', href: '/services/cashflow-forecasting' },
    ],
    ctaLabel: 'Speak to Our Team',
    ctaHref: '/contact',
    layout: 'text-right',
    variant: 'alt',
  },
  {
    id: 'property-clients-detail',
    label: 'Property Clients',
    heading: 'Accounting and Tax Services for Landlords and Property Investors',
    paragraph:
      'DepoTax supports landlords, SPV companies, property investors, and non-resident landlords with accounting, reporting, and tax-related support. We help you keep clear records of rental income and expenses, report property income correctly to HMRC, and navigate the specific rules that apply to buy-to-let, SPVs, HMOs, and furnished holiday lets.',
    supportPoints: [
      { title: 'Landlord Accounting' },
      { title: 'Property Tax Return Support' },
      { title: 'SPV Company Accounting' },
      { title: 'HMO and Holiday Let Accounting' },
    ],
    serviceLinks: [
      { label: 'Landlord Accounting', href: '/services/landlord-accounting' },
      { label: 'SPV Accounting', href: '/services/spv-accounting' },
      { label: 'Property Tax Returns', href: '/services/property-tax-returns' },
      { label: 'HMO / Holiday Let Accounting', href: '/services/hmo-holiday-let-accounting' },
      { label: 'Non-Resident Landlord Tax', href: '/services/non-resident-landlord-tax' },
    ],
    ctaLabel: 'Speak to Our Team',
    ctaHref: '/contact',
    layout: 'text-left',
  },
  {
    id: 'specialist-professionals-detail',
    label: 'Specialist Professionals',
    heading: 'Accounting Support for Specialist and Professional Sectors',
    paragraph:
      'DepoTax also supports specialist client groups that often need organised accounting support, practical advice, and dependable compliance handling. Whether you are a consultant, healthcare professional, charity, or tech startup, we tailor our approach to your sector and help you meet your reporting and tax obligations with confidence.',
    supportPoints: [
      { title: 'Consultants and Independent Professionals' },
      { title: 'Healthcare Professionals' },
      { title: 'Charities and Not-for-Profit Organisations' },
      { title: 'Tech Startups and Growth-Focused Ventures' },
    ],
    serviceLinks: [
      { label: 'Self Assessment', href: '/services/self-assessment' },
      { label: 'Tax Planning', href: '/services/tax-planning' },
      { label: 'Company Formation', href: '/services/company-formation' },
      { label: 'CFO Advisory', href: '/services/cfo-advisory' },
      { label: 'Business Growth Planning', href: '/services/business-growth-planning' },
    ],
    ctaLabel: 'Speak to Our Team',
    ctaHref: '/contact',
    layout: 'text-right',
    variant: 'alt',
  },
];
