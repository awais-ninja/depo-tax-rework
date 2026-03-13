'use client';

import Link from '@/components/ui/Link';
import { HiArrowRight } from 'react-icons/hi2';

/**
 * Reusable audience detail section: label, heading, paragraph, support points, service links, optional CTA.
 * layout: 'text-left' = content left / cards+links right; 'text-right' = cards+links left / content right.
 */
export default function AudienceDetailSection({
  id,
  label,
  heading,
  paragraph,
  supportPoints = [],
  serviceLinks = [],
  ctaLabel,
  ctaHref,
  layout = 'text-left',
  variant = 'default',
}) {
  const isTextRight = layout === 'text-right';
  const sectionBg = variant === 'alt' ? 'bg-brand-grayLight/30' : 'bg-white';

  const contentBlock = (
    <div className="lg:py-2">
      <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-accent mb-3">
        {label}
      </p>
      <h2 id={`${id}-heading`} className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-navy tracking-tight leading-tight mb-5">
        {heading}
      </h2>
      <p className="text-base text-brand-text/85 leading-relaxed max-w-xl">
        {paragraph}
      </p>
      {ctaLabel && ctaHref && (
        <div className="mt-8">
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:text-brand-accentDark transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 rounded"
          >
            {ctaLabel}
            <HiArrowRight className="w-4 h-4 flex-shrink-0" aria-hidden />
          </Link>
        </div>
      )}
    </div>
  );

  const sidebarBlock = (
    <div className="space-y-8">
      {/* Support points / mini cards */}
      {supportPoints.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {supportPoints.map((point) => (
            <div
              key={point.title}
              className="rounded-xl border border-brand-grayBorder bg-white p-4 shadow-[0_2px_12px_rgba(15,23,42,0.04)]"
            >
              <h3 className="text-sm font-bold text-brand-navy mb-1">
                {point.title}
              </h3>
              {point.description && (
                <p className="text-xs text-brand-text/80 leading-relaxed">
                  {point.description}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
      {/* Relevant service links */}
      {serviceLinks.length > 0 && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-text/60 mb-3">
            Relevant services
          </p>
          <ul className="flex flex-wrap gap-2">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-brand-grayBorder bg-brand-grayLight/30 px-3 py-2 text-sm font-medium text-brand-navy hover:border-brand-accent/30 hover:text-brand-accent hover:bg-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
                >
                  {link.label}
                  <HiArrowRight className="w-3.5 h-3.5 flex-shrink-0 opacity-70" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

  return (
    <section
      id={id}
      className={`py-14 sm:py-16 md:py-20 lg:py-24 border-t border-brand-grayBorder/60 ${sectionBg}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 lg:gap-12 xl:gap-16 lg:items-start ${
            isTextRight ? 'lg:grid-flow-dense' : ''
          }`}
        >
          <div className={isTextRight ? 'lg:col-start-2' : ''}>
            {contentBlock}
          </div>
          <div className={isTextRight ? 'lg:col-start-1 lg:row-start-1' : ''}>
            {sidebarBlock}
          </div>
        </div>
      </div>
    </section>
  );
}
