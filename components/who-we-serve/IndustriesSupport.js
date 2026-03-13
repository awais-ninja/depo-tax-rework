'use client';

import SectionBackgroundLabel from '@/components/ui/SectionBackgroundLabel';

const INDUSTRIES = [
  'Construction',
  'Property',
  'Technology',
  'Retail',
  'Professional Services',
  'Healthcare',
  'Consulting',
  'E-commerce',
];

export default function IndustriesSupport() {
  return (
    <section
      id="industries"
      className="relative py-16 sm:py-20 md:py-24 bg-brand-grayLight/40 overflow-hidden"
      aria-labelledby="industries-heading"
    >
      <SectionBackgroundLabel label="INDUSTRIES" position="left-mid" size="md" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <header className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-accent mb-3">
            Sectors
          </p>
          <h2
            id="industries-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy tracking-tight leading-tight mb-4"
          >
            Industries We Support Across the UK
          </h2>
          <p className="text-base text-brand-text/85 leading-relaxed">
            DepoTax supports clients across multiple industries and understands the practical accounting, reporting, and compliance needs of different sectors.
          </p>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry}
              className="rounded-xl border border-brand-grayBorder bg-white px-4 py-4 sm:px-5 sm:py-5 text-center shadow-[0_2px_12px_rgba(15,23,42,0.04)] hover:shadow-[0_6px_20px_rgba(15,23,42,0.08)] hover:border-brand-accent/20 transition-all duration-200"
            >
              <span className="text-sm sm:text-base font-semibold text-brand-navy">
                {industry}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
