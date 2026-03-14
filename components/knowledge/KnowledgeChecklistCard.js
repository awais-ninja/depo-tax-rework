'use client';

import Link from '@/components/ui/Link';
import { IconArrowDownTray } from '@/components/ui/Icons';

/**
 * Card for downloadable checklist: title, summary, Download CTA.
 * href can be placeholder (# or /knowledge/checklists) until real files exist.
 */
export default function KnowledgeChecklistCard({ title, summary, href = '/knowledge/checklists' }) {
  return (
    <div className="flex flex-col rounded-2xl border border-brand-grayBorder bg-white p-6 shadow-[0_2px_12px_rgba(15,23,42,0.05)]">
      <h2 className="text-lg font-bold text-brand-navy tracking-tight mb-2">
        {title}
      </h2>
      {summary && (
        <p className="text-sm text-brand-text/85 leading-relaxed flex-1 mb-5">
          {summary}
        </p>
      )}
      <Link
        href={href}
        className="inline-flex items-center justify-center gap-2 min-h-12 px-5 py-2.5 rounded-xl font-semibold text-white bg-brand-accent hover:bg-brand-accentDark transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 w-fit"
      >
        <IconArrowDownTray className="w-5 h-5" aria-hidden />
        Download Checklist
      </Link>
    </div>
  );
}
