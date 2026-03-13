/**
 * Copy for Services page category sections: headings, intros, and one-line service descriptions.
 * Kept separate from servicesConfig so structure and copy can evolve independently.
 */

import { getServicesByCategory } from './servicesConfig';

/** One-line description per service slug. Concise and professional. */
export const SERVICE_DESCRIPTIONS = {
  'annual-accounts': 'Preparation and submission support for accurate year-end company accounts.',
  bookkeeping: 'Structured day-to-day financial record management for clear reporting and compliance.',
  'management-accounts': 'Regular management reporting to support business decisions and performance tracking.',
  payroll: 'Accurate payroll processing, RTI submissions, and payslip support for your team.',
  'vat-returns': 'VAT return preparation and submission, with advice on schemes and compliance.',
  'confirmation-statement': 'Companies House confirmation statement and annual return filing support.',
  'self-assessment': 'Support with accurate personal tax return preparation and submission.',
  'corporation-tax': 'Corporation tax computation, returns, and planning for limited companies.',
  'capital-gains-tax': 'CGT calculations, reporting, and planning for disposals and investments.',
  'tax-planning': 'Proactive tax efficiency advice tailored to your business and personal situation.',
  'non-resident-landlord-tax': 'UK tax compliance and return filing for non-resident landlords.',
  'startup-support': 'Accounting and compliance setup for new businesses from day one.',
  'company-formation': 'Limited company formation and post-incorporation compliance support.',
  'cashflow-forecasting': 'Cashflow modelling and forecasting to support planning and funding.',
  'cfo-advisory': 'Strategic financial oversight and advisory for growing businesses.',
  'business-growth-planning': 'Financial planning and advisory to support sustainable growth.',
  'landlord-accounting': 'Rental income, expenses, and tax reporting for property landlords.',
  'spv-accounting': 'Accounting and compliance for property SPVs and buy-to-let structures.',
  'property-tax-returns': 'Property income and capital gains tax returns and advice.',
  'hmo-holiday-let-accounting': 'Accounting and tax support for HMOs and furnished holiday lets.',
}

/** Section id (for anchor), category key, label, heading, and intro per category. */
export const CATEGORY_SECTIONS = [
  {
    id: 'accounting-compliance',
    categoryKey: 'accounting',
    label: 'Accounting & Compliance',
    heading: 'Reliable Financial Management and Compliance Support',
    intro: 'We help businesses and individuals maintain accurate records, meet filing deadlines, and stay compliant with HMRC and Companies House. From day-to-day bookkeeping to year-end accounts and payroll, we provide structured support so you can focus on running your business.',
    backgroundLabel: 'ACCOUNTING',
    backgroundPosition: 'right-mid',
  },
  {
    id: 'tax-services',
    categoryKey: 'tax',
    label: 'Tax Services',
    heading: 'Expert Tax Advice and Return Preparation',
    intro: 'Our tax team supports individuals and companies with self assessment, corporation tax, capital gains, and tax planning. We aim to ensure accurate returns, timely submissions, and practical advice to help you meet obligations and make informed decisions.',
    backgroundLabel: 'TAX',
    backgroundPosition: 'left-mid',
  },
  {
    id: 'business-advisory',
    categoryKey: 'advisory',
    label: 'Business Advisory',
    heading: 'Strategic Support for Startups and Growing Businesses',
    intro: 'From company formation and startup support to cashflow forecasting, CFO-level advisory, and business growth planning, we provide the financial clarity and strategic input that growing businesses need to scale with confidence.',
    backgroundLabel: 'ADVISORY',
    backgroundPosition: 'right-mid',
  },
  {
    id: 'property-services',
    categoryKey: 'property',
    label: 'Property Services',
    heading: 'Accounting and Tax Support for Property Investors',
    intro: 'We support landlords, SPVs, and property investors with rental accounting, property tax returns, and specialist reporting for HMOs and furnished holiday lets. Our aim is clear records, compliant filing, and practical tax advice.',
    backgroundLabel: 'PROPERTY',
    backgroundPosition: 'left-mid',
  },
]

/**
 * Returns category sections with services enriched with one-line descriptions.
 * Use this on the Services page to render ServicesCategorySection.
 */
export function getCategorySectionsWithServices() {
  const byCategory = getServicesByCategory();
  return CATEGORY_SECTIONS.map((section, index) => {
    const categoryData = byCategory.find((c) => c.key === section.categoryKey);
    const services = (categoryData?.services || []).map((s) => ({
      slug: s.slug,
      label: s.label,
      description: SERVICE_DESCRIPTIONS[s.slug] ?? null,
    }))
    return {
      ...section,
      services,
      variant: index % 2 === 1 ? 'alt' : 'default',
    }
  })
}
