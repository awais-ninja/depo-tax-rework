'use client';

import Link from '@/components/ui/Link';
import SectionReveal from '@/components/ui/SectionReveal';
import TestimonialsBackground from '@/components/ui/TestimonialsBackground';
import SectionBackgroundLabel from '@/components/ui/SectionBackgroundLabel';
import SectionAmbient from '@/components/ui/SectionAmbient';

const AUDIENCE_CARDS = [
  {
    title: 'Limited Companies',
    description: 'Accounting for limited companies including bookkeeping, VAT returns, payroll services, annual accounts and corporation tax compliance.',
    href: '/who-we-serve#businesses-detail',
    cta: 'View Details',
  },
  {
    title: 'Contractors',
    description: 'Specialist contractor accountants providing IR35 guidance, company accounts, payroll support and tax planning for contractors across the UK.',
    href: '/who-we-serve#businesses-detail',
    cta: 'Explore Service',
  },
  {
    title: 'Sole Traders',
    description: 'Accounting for sole traders and self-employed professionals including self assessment tax returns, bookkeeping services and HMRC compliance support.',
    href: '/who-we-serve#individuals-detail',
    cta: 'Get Help',
  },
  {
    title: 'Landlords',
    description: 'Accounting for landlords, property investors and HMO owners including rental accounts, tax returns and property portfolio support.',
    href: '/who-we-serve#property-clients-detail',
    cta: 'Read More',
  },
  {
    title: 'Startup Businesses',
    description: 'Startup accountants helping new businesses with company formation, bookkeeping, tax planning and financial structure from day one.',
    href: '/who-we-serve#businesses-detail',
    cta: 'Read More',
  },
  {
    title: 'eCommerce Businesses',
    description: 'Accounting for eCommerce businesses including bookkeeping, VAT support, profit tracking, payroll and cloud accounting for online sellers.',
    href: '/who-we-serve#specialist-professionals-detail',
    cta: 'Read More',
  },
];

const ACCENT_CARD = {
  title: 'More Client Types',
  description: 'We also support LLPs, partnerships, non-residents, freelancers, influencers and growing UK businesses.',
  href: '/who-we-serve',
  cta: 'Explore More',
};

const iconPaths = [
  'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
  'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  'M13 10V3L4 14h7v7l9-11h-7z',
  'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
];

function Icon({ path, className = 'w-7 h-7' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
    </svg>
  );
}

export default function WhoWeHelp() {
  return (
    <section
      className="relative pt-18 pb-20 lg:pt-20 lg:pb-28 bg-white overflow-hidden"
      aria-labelledby="who-we-help-heading"
    >
      <TestimonialsBackground />
      {/* Decorative element – md+ only, matches Testimonials style */}
      <div className="hidden md:block absolute top-20 left-8 text-brand-accent opacity-[0.06] font-serif text-[8rem] leading-none pointer-events-none select-none z-0" aria-hidden>
        &
      </div>
      <SectionBackgroundLabel label="WHO WE HELP" position="left-top" />
      <SectionAmbient />
      <SectionReveal>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2
              id="who-we-help-heading"
              className="reveal-item reveal-item-delay-1 text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-4"
            >
              <span className="text-[#2b4b6b]">Who We </span>
              <span className="text-[#9a0000]">Help</span>
            </h2>
            <p className="reveal-item reveal-item-delay-2 text-xl sm:text-2xl font-bold text-brand-navy max-w-3xl mx-auto mb-3">
              Accountants for Self-Employed, Contractors, Landlords & Limited Companies in the UK
            </p>
            <p className="reveal-item reveal-item-delay-2 text-center text-brand-text/90 max-w-2xl mx-auto">
              DepoTax provides expert accounting, bookkeeping, payroll, tax returns and compliance support for limited companies, contractors, sole traders, landlords, startup businesses and eCommerce businesses across the UK.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 justify-items-center md:justify-items-stretch">
            {AUDIENCE_CARDS.map((card, i) => (
              <article
                key={card.title}
                className={`reveal-item ${i < 2 ? 'reveal-item-delay-3' : i < 4 ? 'reveal-item-delay-4' : 'reveal-item-delay-5'} group flex flex-col rounded-xl border border-brand-grayBorder bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] card-hover hover:border-brand-accent/30 transition-all duration-200 min-h-[250px] w-full max-w-sm md:max-w-none`}
              >
                <div className="icon-float w-14 h-14 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-4 animate-float-soft">
                  <Icon path={iconPaths[i]} />
                </div>
                <h3 className="text-lg font-semibold text-brand-navy mb-2">{card.title}</h3>
                <p className="text-sm text-brand-text/90 mb-5 flex-1">{card.description}</p>
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-1.5 text-brand-accent font-semibold text-sm hover:underline"
                >
                  {card.cta}
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden>•</span>
                </Link>
              </article>
            ))}
            {/* Standout accent card – row 2, spans so grid stays 4+3 */}
            <article
              className="reveal-item reveal-item-delay-5 group flex flex-col rounded-xl bg-brand-accent p-6 shadow-[0_4px_20px_rgba(0,0,0,0.12)] card-hover hover:shadow-lg transition-all duration-200 w-full max-w-sm md:max-w-none md:col-span-2 lg:col-span-1 justify-self-center md:justify-self-stretch"
            >
              <h3 className="text-lg font-semibold text-white mb-2">{ACCENT_CARD.title}</h3>
              <p className="text-sm text-white/90 mb-5 flex-1">{ACCENT_CARD.description}</p>
              <Link
                href={ACCENT_CARD.href}
                className="inline-flex items-center gap-1.5 text-white font-semibold text-sm hover:underline"
              >
                {ACCENT_CARD.cta}
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden>•</span>
              </Link>
            </article>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
