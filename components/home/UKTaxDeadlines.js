'use client';

import Link from '@/components/ui/Link';
import SectionReveal from '@/components/ui/SectionReveal';
import SectionBackgroundLabel from '@/components/ui/SectionBackgroundLabel';
import SectionAmbient from '@/components/ui/SectionAmbient';
import { IconCalendarDays } from '@/components/ui/Icons';

const DEADLINES = [
  {
    deadlineTitle: 'Self Assessment Tax Return',
    deadlineDate: '31 January',
    description: 'Online Self Assessment tax returns must be submitted and any tax owed must be paid by 31 January following the end of the tax year.',
  },
  {
    deadlineTitle: 'VAT Returns',
    deadlineDate: 'Usually quarterly (1 month and 7 days after period end)',
    description: 'VAT returns and payments must normally be submitted one month and seven days after the end of each VAT accounting period.',
  },
  {
    deadlineTitle: 'Company Accounts Filing',
    deadlineDate: '9 months after company financial year end',
    description: 'Limited companies must file their annual accounts with Companies House within nine months of the end of their accounting period.',
  },
  {
    deadlineTitle: 'Corporation Tax Payment',
    deadlineDate: '9 months and 1 day after accounting period',
    description: "Corporation Tax must be paid to HMRC nine months and one day after the end of the company's accounting period.",
  },
  {
    deadlineTitle: 'PAYE / Payroll Deadlines',
    deadlineDate: '22nd of each month (if paying electronically)',
    description: 'Employers must submit PAYE payments to HMRC by the 22nd of each month when paying electronically.',
  },
  {
    deadlineTitle: 'CIS Returns',
    deadlineDate: '19th of each month',
    description: 'Construction Industry Scheme (CIS) contractors must submit monthly returns to HMRC by the 19th of each month.',
  },
];

function DeadlineCard({ deadlineTitle, deadlineDate, description }) {
  return (
    <article className="rounded-xl border border-brand-grayBorder bg-white p-5 sm:p-6 shadow-[0_4px_20px_rgba(15,23,42,0.06)] transition-all duration-200 md:hover:shadow-[0_8px_28px_rgba(15,23,42,0.08)] md:hover:border-brand-accent/20">
      <div className="flex gap-3">
        <span className="shrink-0 w-10 h-10 rounded-lg bg-brand-grayLight flex items-center justify-center text-brand-accent" aria-hidden>
          <IconCalendarDays className="w-5 h-5" />
        </span>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-brand-navy mb-2">{deadlineTitle}</h3>
          <p className="text-sm font-semibold text-brand-accent mb-2">{deadlineDate}</p>
          <p className="text-sm text-brand-text/85 leading-relaxed">{description}</p>
        </div>
      </div>
    </article>
  );
}

export default function UKTaxDeadlines() {
  return (
    <section
      className="relative py-14 pb-16 md:pt-18 md:pb-20 lg:pt-20 lg:pb-28 bg-brand-grayLight/50 overflow-hidden"
      aria-labelledby="tax-deadlines-heading"
    >
      <SectionBackgroundLabel label="DATES" position="left-top" />
      <SectionAmbient />
      <SectionReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2
              id="tax-deadlines-heading"
              className="reveal-item reveal-item-delay-1 text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-4"
            >
              <span className="text-[#2b4b6b]">Important </span>
              <span className="text-[#9a0000]">Dates</span>
            </h2>
            <p className="reveal-item reveal-item-delay-2 text-sm sm:text-base text-brand-text/85 mb-2">
              Key filing and payment deadlines for UK businesses, contractors, landlords, and self-employed individuals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 mb-10">
            {DEADLINES.map((item, i) => (
              <div key={item.deadlineTitle} className={`reveal-item ${i < 2 ? 'reveal-item-delay-3' : i < 4 ? 'reveal-item-delay-4' : 'reveal-item-delay-5'}`}>
                <DeadlineCard
                  deadlineTitle={item.deadlineTitle}
                  deadlineDate={item.deadlineDate}
                  description={item.description}
                />
              </div>
            ))}
          </div>

          <div className="reveal-item reveal-item-delay-4 text-center rounded-xl border border-brand-grayBorder bg-white px-6 py-6 sm:py-8 shadow-[0_4px_20px_rgba(15,23,42,0.06)]">
            <p className="text-brand-navy font-semibold mb-4">Need help meeting these deadlines?</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-white bg-brand-accent hover:bg-brand-accentDark transition-colors duration-200"
            >
              Speak to an Accountant
            </Link>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
