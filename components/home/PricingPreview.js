'use client';

import Link from '@/components/ui/Link';
import SectionReveal from '@/components/ui/SectionReveal';
import { HiCheck } from 'react-icons/hi2';

const PACKAGES = [
  {
    title: 'Growth Packages',
    description:
      'All-inclusive accounting for businesses that need dedicated support, strategic input and ongoing financial oversight.',
    highlights: [
      'Dedicated qualified accountant and bookkeeper',
      'Quarterly business health checks',
      'Part-time FD support',
      'Higher-touch financial support',
    ],
    cta: 'Start Accounting With Us',
    href: '/pricing',
    chip: 'Best for Growing Businesses',
  },
  {
    title: 'Core – All Inclusive',
    description:
      'All-inclusive packages with continuous support throughout the year, a dedicated accounts manager and qualified accountant.',
    highlights: [
      'Dedicated accounts manager',
      'Qualified accountant support',
      'Ongoing bookkeeping and compliance',
      'Popular with growing businesses',
    ],
    cta: 'Start Accounting With Us',
    href: '/pricing',
    chip: 'Most Popular',
    featured: true,
  },
  {
    title: 'Compliance Only',
    description:
      'Compliance-only packages for SMEs that need year-end accounts or tax return filing without regular ongoing support.',
    highlights: [
      'Year-end accounts preparation',
      'Tax return filing support',
      'Suitable for low-support businesses',
      'Best for compliance-only needs',
    ],
    cta: 'Start Accounting With Us',
    href: '/pricing',
    chip: 'Compliance Only',
    note: 'If you need regular support, compliance-only packages may not be suitable.',
  },
  {
    title: 'One-Off Packages',
    description:
      'One-off accounting services for clients who do not need monthly support and prefer a simple online process.',
    highlights: [
      'Online package selection',
      'Pay online',
      'Provide your information securely',
      'Accounts or tax return prepared and submitted on your behalf',
    ],
    cta: 'Explore One-Off Packages',
    href: '/pricing',
    chip: 'Online Only',
  },
];

export default function PricingPreview() {
  return (
    <section
      className="relative py-16 lg:py-24 bg-white overflow-hidden"
      aria-labelledby="pricing-heading"
    >
      {/* Subtle decorative – md+ only */}
      <div
        className="pointer-events-none absolute inset-0 hidden md:block"
        aria-hidden
      >
        <div className="absolute top-20 -right-20 w-72 h-72 rounded-full bg-[#9a0000]/5 blur-3xl" />
        <div className="absolute bottom-20 -left-20 w-56 h-56 rounded-full bg-[#1F4E79]/5 blur-3xl" />
      </div>

      <SectionReveal>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2
              id="pricing-heading"
              className="reveal-item reveal-item-delay-1 text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-4"
            >
              Accounting Packages
            </h2>
            <p className="reveal-item reveal-item-delay-2 text-sm sm:text-base text-brand-text/85 mb-3">
              Flexible accounting packages for contractors, limited companies,
              sole traders, landlords and growing businesses in the UK. Choose
              the level of support that fits your needs, workload and budget.
            </p>
            <p className="reveal-item reveal-item-delay-2 text-xs sm:text-sm text-brand-text/70 font-medium">
              Spread the cost over 12 months with no additional interest.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mb-14">
            {PACKAGES.map((pkg, index) => {
              const delay =
                index < 2
                  ? index === 0
                    ? 'reveal-item-delay-3'
                    : 'reveal-item-delay-4'
                  : index === 2
                    ? 'reveal-item-delay-5'
                    : 'reveal-item-delay-6';
              const isFeatured = pkg.featured;

              return (
                <article
                  key={pkg.title}
                  className={`reveal-item ${delay} group flex flex-col rounded-2xl border bg-white overflow-hidden transition-all duration-200 md:hover:-translate-y-1 ${
                    isFeatured
                      ? 'border-[#9a0000]/40 shadow-[0_12px_40px_rgba(154,0,0,0.08)] md:hover:shadow-[0_20px_50px_rgba(154,0,0,0.12)]'
                      : 'border-brand-grayBorder shadow-[0_8px_28px_rgba(15,23,42,0.08)] md:hover:shadow-[0_16px_40px_rgba(15,23,42,0.12)] md:hover:border-brand-accent/30'
                  }`}
                >
                  {pkg.chip && (
                    <div className="px-6 pt-5 pb-0">
                      <span
                        className={`inline-block text-[10px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full ${
                          isFeatured
                            ? 'bg-[#9a0000]/12 text-brand-accent'
                            : 'bg-brand-grayLight text-brand-text/70'
                        }`}
                      >
                        {pkg.chip}
                      </span>
                    </div>
                  )}
                  <div className="p-6 flex-1 flex flex-col">
                    {!pkg.chip && <div className="pt-2" />}
                    <h3 className="text-lg sm:text-xl font-semibold text-brand-navy mb-2">
                      {pkg.title}
                    </h3>
                    <p className="text-sm text-brand-text/85 mb-4 flex-1">
                      {pkg.description}
                    </p>
                    <ul className="space-y-2 mb-5">
                      {pkg.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-brand-text/85"
                        >
                          <HiCheck
                            className="w-5 h-5 text-brand-accent shrink-0 mt-0.5"
                            aria-hidden
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    {pkg.note && (
                      <p className="text-xs text-brand-text/70 mb-4 italic">
                        {pkg.note}
                      </p>
                    )}
                    <Link
                      href={pkg.href}
                      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 ${
                        isFeatured
                          ? 'bg-brand-accent text-white hover:bg-brand-accentDark'
                          : 'border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white'
                      }`}
                    >
                      {pkg.cta}
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="reveal-item reveal-item-delay-6 text-center rounded-2xl border border-brand-grayBorder bg-brand-grayLight/40 px-6 py-8 sm:p-10">
            <h3 className="text-lg font-semibold text-brand-navy mb-2">
              Not Sure Which Package Is Right for You?
            </h3>
            <p className="text-sm text-brand-text/85 max-w-xl mx-auto mb-6">
              Use our pricing calculator to get an instant estimate for your
              accounting fees and compare the right level of support for your
              business.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-white bg-brand-accent hover:bg-brand-accentDark transition-colors duration-200"
            >
              See whole pricing
            </Link>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
