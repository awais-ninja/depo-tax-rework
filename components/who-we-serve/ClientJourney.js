'use client';

import SectionBackgroundLabel from '@/components/ui/SectionBackgroundLabel';

const STEPS = [
  {
    number: 1,
    title: 'Understanding Your Needs',
    description: 'We start by understanding your business, income sources, structure, and reporting requirements.',
  },
  {
    number: 2,
    title: 'Setting Up the Right Support',
    description: 'We help put the right accounting, tax, and compliance support in place from the outset.',
  },
  {
    number: 3,
    title: 'Ongoing Accounting and Tax Support',
    description: 'We provide regular support to help clients stay organised, informed, and compliant.',
  },
  {
    number: 4,
    title: 'Helping You Move Forward With Confidence',
    description: 'Our aim is to support better financial clarity and confidence as your needs evolve.',
  },
];

export default function ClientJourney() {
  return (
    <section
      id="client-journey"
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-brand-grayLight/40 overflow-hidden"
      aria-labelledby="journey-heading"
    >
      <SectionBackgroundLabel label="JOURNEY" position="right-bottom" size="md" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <header className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-accent mb-3">
            Our Approach
          </p>
          <h2
            id="journey-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy tracking-tight leading-tight mb-4"
          >
            How We Support Our Clients
          </h2>
          <p className="text-base text-brand-text/85 leading-relaxed">
            DepoTax takes a structured and practical approach to understanding client needs, setting up the right support, and providing ongoing accounting and tax guidance.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STEPS.map((step) => (
            <article
              key={step.number}
              className="rounded-xl border border-brand-grayBorder bg-white p-6 shadow-[0_2px_12px_rgba(15,23,42,0.04)]"
            >
              <span
                className="inline-flex w-10 h-10 rounded-lg bg-brand-navy/8 items-center justify-center text-sm font-bold text-brand-navy mb-4"
                aria-hidden
              >
                {step.number}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-brand-navy tracking-tight mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-brand-text/85 leading-relaxed">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
