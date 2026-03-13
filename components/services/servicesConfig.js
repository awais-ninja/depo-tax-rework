/**
 * Single source of truth for Services routes and metadata.
 * Used by: navbar (navConfig links), Services layout, dynamic [slug] page, future landing.
 * Add or edit services here to keep URLs and labels in sync.
 */

export const SERVICE_CATEGORIES = {
  accounting: 'Accounting & Compliance',
  tax: 'Tax Services',
  advisory: 'Business Advisory',
  property: 'Property Services',
}

/** All services: slug, label, category key. Order matches nav dropdown. */
export const SERVICES_LIST = [
  // Accounting & Compliance
  { slug: 'annual-accounts', label: 'Annual Accounts', category: 'accounting' },
  { slug: 'bookkeeping', label: 'Bookkeeping', category: 'accounting' },
  { slug: 'management-accounts', label: 'Management Accounts', category: 'accounting' },
  { slug: 'payroll', label: 'Payroll', category: 'accounting' },
  { slug: 'vat-returns', label: 'VAT Returns', category: 'accounting' },
  { slug: 'confirmation-statement', label: 'Confirmation Statement', category: 'accounting' },
  // Tax Services
  { slug: 'self-assessment', label: 'Self Assessment', category: 'tax' },
  { slug: 'corporation-tax', label: 'Corporation Tax', category: 'tax' },
  { slug: 'capital-gains-tax', label: 'Capital Gains Tax', category: 'tax' },
  { slug: 'tax-planning', label: 'Tax Planning', category: 'tax' },
  { slug: 'non-resident-landlord-tax', label: 'Non Resident Landlord Tax', category: 'tax' },
  // Business Advisory
  { slug: 'startup-support', label: 'Startup Support', category: 'advisory' },
  { slug: 'company-formation', label: 'Company Formation', category: 'advisory' },
  { slug: 'cashflow-forecasting', label: 'Cashflow Forecasting', category: 'advisory' },
  { slug: 'cfo-advisory', label: 'CFO Advisory', category: 'advisory' },
  { slug: 'business-growth-planning', label: 'Business Growth Planning', category: 'advisory' },
  // Property Services
  { slug: 'landlord-accounting', label: 'Landlord Accounting', category: 'property' },
  { slug: 'spv-accounting', label: 'SPV Accounting', category: 'property' },
  { slug: 'property-tax-returns', label: 'Property Tax Returns', category: 'property' },
  { slug: 'hmo-holiday-let-accounting', label: 'HMO / Holiday Let Accounting', category: 'property' },
]

const slugSet = new Set(SERVICES_LIST.map((s) => s.slug))

/** Check if a slug is a valid service (for dynamic route). */
export function isValidServiceSlug(slug) {
  return slugSet.has(slug)
}

/** Get service by slug. */
export function getServiceBySlug(slug) {
  return SERVICES_LIST.find((s) => s.slug === slug) ?? null
}

/** Get all slugs (for static params or sitemap). */
export function getAllServiceSlugs() {
  return SERVICES_LIST.map((s) => s.slug)
}

/** Group services by category for landing page or nav. */
export function getServicesByCategory() {
  const byCat = {}
  SERVICES_LIST.forEach((s) => {
    if (!byCat[s.category]) byCat[s.category] = []
    byCat[s.category].push(s)
  })
  return Object.entries(SERVICE_CATEGORIES).map(([key, label]) => ({
    key,
    label,
    services: byCat[key] || [],
  }))
}
