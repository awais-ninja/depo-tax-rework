'use client';

import Link from '@/components/ui/Link';
import { HiArrowRight } from 'react-icons/hi2';

/**
 * Single service card: title, one-line description, link to service page.
 * Premium, minimal, with hover and optional "Learn more" cue.
 */
export default function ServiceCard({ slug, label, description }) {
  return (
    <Link
      href={`/services/${slug}`}
      className="group flex flex-col rounded-xl border border-brand-grayBorder bg-white p-5 sm:p-6 shadow-[0_2px_12px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)] hover:border-brand-accent/20 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 text-left min-h-[120px]"
    >
      <h3 className="text-base sm:text-lg font-bold text-brand-navy group-hover:text-brand-accent transition-colors duration-200 pr-8">
        {label}
      </h3>
      {description && (
        <p className="mt-2 text-sm text-brand-text/80 leading-relaxed flex-1">
          {description}
        </p>
      )}
      <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-accent group-hover:gap-2 transition-all duration-200">
        Learn more
        <HiArrowRight className="w-4 h-4 flex-shrink-0" aria-hidden />
      </span>
    </Link>
  );
}
