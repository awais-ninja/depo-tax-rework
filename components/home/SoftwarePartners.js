'use client';

import SectionReveal from '@/components/ui/SectionReveal';

const partners = ['Xero', 'QuickBooks', 'Sage', 'FreeAgent'];

export default function SoftwarePartners() {
  return (
    <section className="py-16 lg:py-20 bg-brand-white border-y border-brand-grayBorder">
      <SectionReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="reveal-item reveal-item-delay-1 text-2xl font-bold text-center mb-10">
            <span className="text-[#2b4b6b]">Powered by Leading </span>
            <span className="text-[#9a0000]">Accounting Software</span>
          </h2>
          <div className="reveal-item reveal-item-delay-2 flex flex-wrap justify-center items-center gap-8 sm:gap-12">
            {partners.map((name) => (
              <div
                key={name}
                className="h-12 w-28 rounded-lg bg-brand-grayLight flex items-center justify-center text-sm font-semibold text-brand-navy/80"
                aria-hidden
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
