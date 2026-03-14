'use client';

import Link from '@/components/ui/Link';
import { IconCheck } from '@/components/ui/Icons';

export default function ServicePageHero({ data }) {
  const { label, title, description, primaryCtaLabel, primaryCtaHref, secondaryCtaLabel, secondaryCtaHref, trustBullets } = data;

  return (
    <section
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white border-b border-brand-grayBorder/60"
      aria-labelledby="service-hero-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-accent mb-3">
          {label}
        </p>
        <h1
          id="service-hero-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy tracking-tight leading-tight mb-5"
        >
          {title}
        </h1>
        <p className="text-base sm:text-lg text-brand-text/85 leading-relaxed mb-6 max-w-2xl">
          {description}
        </p>

        {trustBullets && trustBullets.length > 0 && (
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-brand-text/90 mb-8" aria-hidden>
            {trustBullets.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <IconCheck className="w-5 h-5 text-brand-accent flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          <Link
            href={primaryCtaHref}
            className="inline-flex items-center justify-center min-h-12 px-6 py-2.5 rounded-xl font-semibold text-white bg-brand-accent hover:bg-brand-accentDark transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 text-sm sm:text-base w-full sm:w-auto"
          >
            {primaryCtaLabel}
          </Link>
          <Link
            href={secondaryCtaHref}
            className="inline-flex items-center justify-center min-h-12 px-6 py-2.5 rounded-xl font-semibold border-2 border-brand-navy text-brand-navy bg-white hover:bg-brand-navy hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2 text-sm sm:text-base w-full sm:w-auto"
          >
            {secondaryCtaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
