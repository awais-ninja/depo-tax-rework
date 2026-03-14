'use client';

import Link from '@/components/ui/Link';
import { IconUser, IconBuildingOffice2, IconHome, IconSparkles } from '@/components/ui/Icons';

const CARDS = [
  {
    id: 'individuals',
    title: 'Individuals',
    description: 'Accounting and tax support for individuals with personal income, self-employment, or complex financial situations.',
    types: ['Self Employed', 'Freelancers', 'High Net Worth Individuals', 'CIS Contractors'],
    ctaLabel: 'View Services',
    href: '/services#tax-services',
    Icon: IconUser,
  },
  {
    id: 'businesses',
    title: 'Businesses',
    description: 'Professional accounting, compliance, and advisory services for growing businesses and company directors.',
    types: ['Startups', 'Limited Companies', 'Small Businesses', 'Contractors'],
    ctaLabel: 'View Services',
    href: '/services#accounting-compliance',
    Icon: IconBuildingOffice2,
  },
  {
    id: 'property',
    title: 'Property Clients',
    description: 'Accounting and tax support tailored for property investors, landlords, and property companies.',
    types: ['Landlords', 'Non Resident Landlords', 'SPV Companies', 'Property Investors'],
    ctaLabel: 'View Services',
    href: '/services#property-services',
    Icon: IconHome,
  },
  {
    id: 'specialist',
    title: 'Specialist Professionals',
    description: 'Dedicated accounting support for specialised industries with unique financial requirements.',
    types: ['Charities', 'Consultants', 'Healthcare Professionals', 'Tech Startups'],
    ctaLabel: 'View Services',
    href: '/services#business-advisory',
    Icon: IconSparkles,
  },
];

export default function ClientTypesGrid() {
  return (
    <section
      id="client-types"
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-white"
      aria-labelledby="client-types-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-accent mb-3">
            Who we work with
          </p>
          <h2
            id="client-types-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy tracking-tight leading-tight mb-4"
          >
            Client types we support
          </h2>
          <p className="text-base text-brand-text/85 leading-relaxed">
            From individuals and startups to established businesses and property investors — we tailor our support to your situation.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {CARDS.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              className="group flex flex-col rounded-2xl border border-brand-grayBorder bg-white p-6 sm:p-8 shadow-[0_4px_20px_rgba(15,23,42,0.06)] hover:shadow-[0_12px_40px_rgba(15,23,42,0.12)] hover:border-brand-accent/25 transition-all duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 text-left min-h-[320px]"
            >
              <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-5 group-hover:bg-brand-accent/15 transition-colors duration-200">
                <card.Icon className="w-6 h-6" aria-hidden />
              </span>
              <h3 className="text-xl font-bold text-brand-navy tracking-tight mb-3 group-hover:text-brand-accent transition-colors duration-200">
                {card.title}
              </h3>
              <p className="text-sm text-brand-text/85 leading-relaxed flex-1 mb-6">
                {card.description}
              </p>
              <ul className="space-y-2 mb-6" aria-label="Example client types">
                {card.types.map((type) => (
                  <li key={type} className="flex items-center gap-2 text-sm text-brand-text/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent/60 flex-shrink-0" aria-hidden />
                    {type}
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent group-hover:gap-3 transition-all duration-200">
                {card.ctaLabel}
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
