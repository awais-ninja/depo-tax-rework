'use client';

import SectionReveal from '@/components/ui/SectionReveal';
import SectionBackgroundLabel from '@/components/ui/SectionBackgroundLabel';
import { IconClock, IconUserGroup, IconDocumentText, IconStar } from '@/components/ui/Icons';

const METRICS = [
  {
    id: 'years',
    value: '10+',
    label: 'Years Experience',
    Icon: IconClock,
  },
  {
    id: 'clients',
    value: '500+',
    label: 'Clients Supported',
    Icon: IconUserGroup,
  },
  {
    id: 'returns',
    value: '1000+',
    label: 'Tax Returns Filed',
    Icon: IconDocumentText,
  },
  {
    id: 'satisfaction',
    value: '98%',
    label: 'Client Satisfaction',
    Icon: IconStar,
  },
];

export default function AboutTrustMetrics() {
  return (
    <section
      id="trust-metrics"
      className="relative py-10 sm:py-12 md:py-14 lg:py-16 overflow-hidden bg-white"
      aria-labelledby="trust-metrics-heading"
    >
      <SectionBackgroundLabel label="OUR IMPACT" position="right-top" size="md" />
      <SectionReveal>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h2
              id="trust-metrics-heading"
              className="reveal-item reveal-item-delay-1 text-xl sm:text-2xl md:text-3xl font-bold text-brand-navy tracking-tight mb-3"
            >
              Supporting Businesses and Individuals With Trusted Accounting Expertise
            </h2>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {METRICS.map((metric, i) => (
              <div
                key={metric.id}
                className={`reveal-item ${i < 2 ? (i === 0 ? 'reveal-item-delay-2' : 'reveal-item-delay-3') : (i === 2 ? 'reveal-item-delay-4' : 'reveal-item-delay-5')} flex flex-col items-center text-center p-4 sm:p-5 rounded-xl border border-brand-grayBorder/60 bg-brand-grayLight/30`}
              >
                <metric.Icon className="w-6 h-6 sm:w-7 sm:h-7 text-brand-accent mb-3 flex-shrink-0" aria-hidden />
                <p className="text-2xl sm:text-3xl font-bold text-brand-navy mb-1" aria-hidden>
                  {metric.value}
                </p>
                <p className="text-sm sm:text-base text-brand-text/85 font-medium">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
