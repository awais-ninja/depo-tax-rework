'use client';

import Link from '@/components/ui/Link';
import SectionBackgroundLabel from '@/components/ui/SectionBackgroundLabel';

const FEATURED = [
  {
    title: 'Self Assessment Tax Return Guide',
    summary: 'A clear overview of who needs to file, key deadlines, and what to prepare for your Self Assessment tax return.',
    category: 'Tax Guides',
    href: '/knowledge/tax-guides',
  },
  {
    title: 'VAT Returns Explained for Small Businesses',
    summary: 'Practical guidance on VAT registration, returns, and common obligations for small businesses.',
    category: 'Accounting Guides',
    href: '/knowledge/accounting-guides',
  },
  {
    title: 'Startup Accounting Checklist',
    summary: 'Essential steps and records to keep when starting a business, from company formation to first-year compliance.',
    category: 'Checklists',
    href: '/knowledge/checklists',
  },
  {
    title: 'Tax Planning Tips for Landlords',
    summary: 'Useful tips to help landlords plan for tax, manage records, and stay on top of property income reporting.',
    category: 'Tax Planning Tips',
    href: '/knowledge/tax-planning-tips',
  },
];

export default function KnowledgeFeaturedResources() {
  return (
    <section
      id="featured-resources"
      className="relative overflow-hidden bg-brand-grayLight/50 py-16 sm:py-20 md:py-24 lg:py-28 border-t border-brand-grayBorder/60"
      aria-labelledby="featured-resources-heading"
    >
      <SectionBackgroundLabel label="FEATURED" position="right-mid" size="lg" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-accent mb-3">
            Featured Resources
          </p>
          <h2
            id="featured-resources-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy tracking-tight leading-tight mb-4"
          >
            Popular Guides and Practical Resources
          </h2>
          <p className="text-base text-brand-text/85 leading-relaxed">
            Curated guides and resources to help you with tax, accounting, and business planning.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {FEATURED.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex flex-col rounded-2xl border border-brand-grayBorder bg-white p-6 shadow-[0_2px_12px_rgba(15,23,42,0.05)] hover:shadow-[0_8px_28px_rgba(15,23,42,0.1)] hover:border-brand-accent/25 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 text-left"
            >
              <span className="inline-flex items-center self-start px-2.5 py-1 rounded-md bg-brand-accent/10 text-brand-accent text-xs font-semibold mb-4">
                {item.category}
              </span>
              <h3 className="text-lg font-bold text-brand-navy tracking-tight mb-2 group-hover:text-brand-accent transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-sm text-brand-text/85 leading-relaxed flex-1 mb-5">
                {item.summary}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent group-hover:gap-3 transition-all duration-200">
                Read More
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
