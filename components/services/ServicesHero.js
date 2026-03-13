'use client';

import Image from 'next/image';
import Link from '@/components/ui/Link';
import SectionBackgroundLabel from '@/components/ui/SectionBackgroundLabel';
import { HiCheck, HiDocumentText, HiCalculator, HiLightBulb, HiHome } from 'react-icons/hi2';

const TRUST_BULLETS = [
  'Experienced UK accountants',
  'Support for businesses and individuals',
  'Modern cloud accounting systems',
];

const CATEGORIES = [
  {
    id: 'accounting-compliance',
    label: 'Accounting & Compliance',
    subtitle: 'Accounts, bookkeeping, payroll & VAT',
    Icon: HiDocumentText,
  },
  {
    id: 'tax-services',
    label: 'Tax Services',
    subtitle: 'Self assessment, corporation tax & planning',
    Icon: HiCalculator,
  },
  {
    id: 'business-advisory',
    label: 'Business Advisory',
    subtitle: 'Startups, formation & growth support',
    Icon: HiLightBulb,
  },
  {
    id: 'property-services',
    label: 'Property Services',
    subtitle: 'Landlords, SPVs & property tax',
    Icon: HiHome,
  },
];

export default function ServicesHero() {
  return (
    <section
      id="services-hero"
      className="relative overflow-hidden bg-white"
      aria-labelledby="services-hero-heading"
    >
      <SectionBackgroundLabel label="OUR SERVICES" position="right-top" size="lg" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-28 relative z-10">
        {/* Hero content — optional two-column on desktop: text left, space right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12 xl:gap-16 lg:items-start">
          <div className="lg:col-span-7 xl:col-span-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-accent mb-4">
              Our Services
            </p>
            <h1
              id="services-hero-heading"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-brand-navy tracking-tight leading-tight mb-6"
            >
              Professional Accounting, Tax, and Business Advisory Services
            </h1>
            <p className="text-base sm:text-lg text-brand-text/85 leading-relaxed max-w-xl mb-8">
              DepoTax supports businesses, landlords, contractors, startups, and self-employed individuals with reliable accounting, tax compliance, payroll, and advisory services across the UK.
            </p>

            {/* Trust bullets */}
            <ul
              className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-brand-text/90"
              aria-label="Why choose DepoTax"
            >
              {TRUST_BULLETS.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <HiCheck className="w-5 h-5 text-brand-accent flex-shrink-0" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Right column — hero image */}
          <div className="lg:col-span-5 xl:col-span-6 flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[4/3] lg:aspect-auto lg:h-[320px] xl:h-[360px] rounded-xl overflow-hidden border border-brand-grayBorder/60 shadow-[0_4px_24px_rgba(15,23,42,0.06)]">
              <Image
                src="/services/service-hero-image.jpg"
                alt="DepoTax professional accounting, tax, and business advisory services"
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>

        {/* Category navigation strip — Desktop: 4 in a row | Tablet: 2×2 | Mobile: stacked */}
        <div className="mt-14 sm:mt-16 md:mt-20">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-text/50 mb-4 sm:mb-5">
            Explore by category
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`#${cat.id}`}
                className="group flex items-start gap-4 rounded-xl border border-brand-grayBorder bg-white p-5 sm:p-6 shadow-[0_2px_12px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)] hover:border-brand-accent/25 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 text-left min-h-[100px]"
              >
                <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-navy/8 flex items-center justify-center text-brand-navy group-hover:bg-brand-accent/15 group-hover:text-brand-accent transition-colors duration-200">
                  <cat.Icon className="w-5 h-5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <span className="block text-sm font-bold text-brand-navy group-hover:text-brand-accent transition-colors duration-200">
                    {cat.label}
                  </span>
                  <span className="block text-xs text-brand-text/70 mt-0.5">
                    {cat.subtitle}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
