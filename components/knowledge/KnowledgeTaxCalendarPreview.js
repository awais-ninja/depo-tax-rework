'use client';

import Link from '@/components/ui/Link';
import SectionBackgroundLabel from '@/components/ui/SectionBackgroundLabel';
import { IconCalendarDays } from '@/components/ui/Icons';

const DEADLINES = [
  { label: 'Self Assessment', detail: '31 January' },
  { label: 'VAT Returns', detail: 'Usually 1 month and 7 days after period end' },
  { label: 'Corporation Tax', detail: '9 months and 1 day after accounting period' },
  { label: 'PAYE', detail: '22nd of each month if paying electronically' },
];

export default function KnowledgeTaxCalendarPreview() {
  return (
    <section
      id="tax-calendar-preview"
      className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24 border-t border-brand-grayBorder/60"
      aria-labelledby="tax-calendar-preview-heading"
    >
      <SectionBackgroundLabel label="DATES" position="left-top" size="lg" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10 sm:mb-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-accent mb-3">
            Key Dates
          </p>
          <h2
            id="tax-calendar-preview-heading"
            className="text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight leading-tight mb-4"
          >
            Important UK Tax Deadlines at a Glance
          </h2>
          <p className="text-base text-brand-text/85 leading-relaxed max-w-xl">
            Stay aware of common filing and payment deadlines. For a full list and more detail, use our Tax Calendar.
          </p>
        </header>

        <ul className="space-y-0 divide-y divide-brand-grayBorder/80 border border-brand-grayBorder rounded-2xl bg-brand-grayLight/30 overflow-hidden">
          {DEADLINES.map((item) => (
            <li
              key={item.label}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-5 py-4 sm:px-6 sm:py-5 bg-white/80"
            >
              <span className="font-semibold text-brand-navy">{item.label}</span>
              <span className="text-sm text-brand-text/85 sm:text-right">{item.detail}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <Link
            href="/knowledge/tax-calendar"
            className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-xl font-semibold text-white bg-brand-accent hover:bg-brand-accentDark transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
          >
            <IconCalendarDays className="w-5 h-5" aria-hidden />
            View Full Tax Calendar
          </Link>
        </div>
      </div>
    </section>
  );
}
