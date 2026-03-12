'use client';

import SectionReveal from '@/components/ui/SectionReveal';

export default function LocalSEOSection() {
  return (
    <section className="py-16 lg:py-24 bg-brand-grayLight">
      <SectionReveal>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="reveal-item reveal-item-delay-1 text-2xl sm:text-3xl font-bold mb-6">
            Supporting Businesses in Milton Keynes, London and Across the UK
          </h2>
          <p className="reveal-item reveal-item-delay-2 text-brand-text/90 text-lg leading-relaxed">
            Whether you need <strong>accountants in Milton Keynes</strong>, <strong>tax consultants</strong> in London, or <strong>bookkeeping services</strong> and <strong>payroll support</strong> anywhere in the UK, we deliver the same high standard of service. Our clients include <strong>landlord accountants</strong> customers, <strong>startup accountants</strong> clients, and businesses of all sizes. We combine local understanding with nationwide coverage so you get expert advice and transparent pricing wherever you are.
          </p>
        </div>
      </SectionReveal>
    </section>
  );
}
