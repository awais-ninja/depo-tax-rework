'use client';

import Link from '@/components/ui/Link';

export default function ServicePageFinalCTA({ data }) {
  const { label, heading, paragraph, primaryLabel, primaryHref, secondaryLabel, secondaryHref, trustLine } = data;
  const displayTrustLine = trustLine ?? 'Support tailored for businesses and individuals across the UK.';

  return (
    <section
      className="relative py-14 sm:py-20 md:py-20 lg:py-24 bg-white border-t border-brand-grayBorder/60"
      aria-labelledby="service-cta-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {label && (
          <p className="text-sm font-medium text-brand-accent uppercase tracking-wider mb-2">
            {label}
          </p>
        )}
        <h2
          id="service-cta-heading"
          className="text-2xl sm:text-3xl font-bold tracking-tight mb-4"
        >
          <span className="text-[#2b4b6b]">{heading}</span>
        </h2>
        {paragraph && (
          <p className="text-base text-brand-text/85 leading-relaxed mb-8">
            {paragraph}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 rounded-xl font-semibold text-white bg-brand-accent hover:bg-brand-accentDark transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 text-sm sm:text-base w-full sm:w-auto"
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 rounded-xl font-semibold border-2 border-brand-navy text-brand-navy bg-white hover:bg-brand-navy hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2 text-sm sm:text-base w-full sm:w-auto"
          >
            {secondaryLabel}
          </Link>
        </div>
        {displayTrustLine && (
          <p className="mt-6 text-sm text-brand-text/70">
            {displayTrustLine}
          </p>
        )}
      </div>
    </section>
  );
}
