'use client';

import Link from '@/components/ui/Link';
import SectionBackgroundLabel from '@/components/ui/SectionBackgroundLabel';
import {
  HiDocumentText,
  HiCalculator,
  HiBriefcase,
  HiLightBulb,
  HiClipboardDocumentList,
  HiCalendarDays,
  HiQuestionMarkCircle,
} from 'react-icons/hi2';

const CATEGORIES = [
  {
    title: 'Tax Guides',
    description: 'Practical information on common tax topics, filings, and obligations in the UK.',
    href: '/knowledge/tax-guides',
    ctaText: 'Explore Guides',
    Icon: HiDocumentText,
  },
  {
    title: 'Accounting Guides',
    description: 'Helpful content on bookkeeping, accounts, payroll, VAT, and compliance.',
    href: '/knowledge/accounting-guides',
    ctaText: 'View Resources',
    Icon: HiCalculator,
  },
  {
    title: 'Business Advice',
    description: 'Useful guidance for startups, small businesses, and growing companies.',
    href: '/knowledge/business-advice',
    ctaText: 'View Resources',
    Icon: HiBriefcase,
  },
  {
    title: 'Tax Planning Tips',
    description: 'Practical tips to help individuals and businesses plan more efficiently.',
    href: '/knowledge/tax-planning-tips',
    ctaText: 'View Resources',
    Icon: HiLightBulb,
  },
  {
    title: 'Downloadable Checklists',
    description: 'Simple downloadable resources to help clients stay organised.',
    href: '/knowledge/checklists',
    ctaText: 'View Resources',
    Icon: HiClipboardDocumentList,
  },
  {
    title: 'Tax Calendar',
    description: 'Key filing and payment deadlines to help you stay aware of important dates.',
    href: '/knowledge/tax-calendar',
    ctaText: 'View Calendar',
    Icon: HiCalendarDays,
  },
  {
    title: 'FAQs',
    description: 'Answers to common accounting, tax, and compliance questions.',
    href: '/knowledge/faqs',
    ctaText: 'See FAQs',
    Icon: HiQuestionMarkCircle,
  },
];

export default function KnowledgeCategoriesGrid() {
  return (
    <section
      id="resource-categories"
      className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24 lg:py-28 border-t border-brand-grayBorder/60"
      aria-labelledby="resource-categories-heading"
    >
      <SectionBackgroundLabel label="RESOURCES" position="right-top" size="lg" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-accent mb-3">
            Browse by topic
          </p>
          <h2
            id="resource-categories-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy tracking-tight leading-tight mb-4"
          >
            Resource Categories
          </h2>
          <p className="text-base text-brand-text/85 leading-relaxed">
            Find guides, checklists, and practical resources organised by topic.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {CATEGORIES.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex flex-col rounded-2xl border border-brand-grayBorder bg-white p-6 sm:p-7 shadow-[0_2px_12px_rgba(15,23,42,0.05)] hover:shadow-[0_8px_28px_rgba(15,23,42,0.1)] hover:border-brand-accent/25 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 text-left"
            >
              <span className="flex-shrink-0 w-11 h-11 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-4 group-hover:bg-brand-accent/15 transition-colors duration-200">
                <item.Icon className="w-6 h-6" aria-hidden />
              </span>
              <h3 className="text-lg font-bold text-brand-navy tracking-tight mb-2 group-hover:text-brand-accent transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-sm text-brand-text/85 leading-relaxed flex-1 mb-5">
                {item.description}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent group-hover:gap-3 transition-all duration-200">
                {item.ctaText}
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
