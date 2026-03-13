'use client';

import Link from '@/components/ui/Link';

/**
 * Card for guide/resource items: optional category tag, title, summary, CTA.
 */
export default function KnowledgeResourceCard({ title, summary, categoryTag, ctaText = 'Read Guide', href = '#' }) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border border-brand-grayBorder bg-white p-6 shadow-[0_2px_12px_rgba(15,23,42,0.05)] hover:shadow-[0_8px_28px_rgba(15,23,42,0.1)] hover:border-brand-accent/25 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 text-left"
    >
      {categoryTag && (
        <span className="inline-flex items-center self-start px-2.5 py-1 rounded-md bg-brand-accent/10 text-brand-accent text-xs font-semibold mb-3">
          {categoryTag}
        </span>
      )}
      <h2 className="text-lg font-bold text-brand-navy tracking-tight mb-2 group-hover:text-brand-accent transition-colors duration-200">
        {title}
      </h2>
      {summary && (
        <p className="text-sm text-brand-text/85 leading-relaxed flex-1 mb-5">
          {summary}
        </p>
      )}
      <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent group-hover:gap-3 transition-all duration-200">
        {ctaText}
        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </Link>
  );
}
