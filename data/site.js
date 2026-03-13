/**
 * Site-wide constants: name, URL, default metadata.
 * Used by app/layout.js and other pages for SEO and branding.
 */

export const SITE_NAME = 'DepoTax'
export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.depotax.co.uk'

export const defaultMetadata = {
  description: 'Clear pricing, expert tax advice, and modern accounting for self-employed, contractors, startups, landlords and SPVs across the UK. Book a free consultation.',
  keywords: ['accountants UK', 'tax consultants', 'self assessment', 'limited company accounting', 'landlord accounting', 'contractor accounting', 'DepoTax'],
  openGraph: {
    title: 'DepoTax | Expert Accountants & Tax Consultants UK',
    description: 'Expert accounting and tax services for businesses and individuals across the UK. Clear pricing, modern accounting.',
  },
  twitter: {
    title: 'DepoTax | Expert Accountants & Tax Consultants UK',
    description: 'Expert accounting and tax services for businesses and individuals across the UK.',
  },
}

/** LD+JSON site navigation labels and order (for structured data). */
export const structuredDataNav = [
  { name: 'Home', url: '/' },
  { name: 'Pricing', url: '/pricing' },
  { name: 'Services', url: '/services' },
  { name: 'Who We Serve', url: '/who-we-serve' },
  { name: 'Knowledge', url: '/knowledge' },
  { name: 'Contact', url: '/contact' },
]
