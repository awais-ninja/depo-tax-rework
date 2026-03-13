'use client';

import SectionReveal from '@/components/ui/SectionReveal';
import { HiClock, HiUserGroup, HiDocumentText, HiHeart } from 'react-icons/hi2';

const METRICS = [
  {
    icon: HiClock,
    value: '10+',
    label: 'Years Experience',
  },
  {
    icon: HiUserGroup,
    value: '500+',
    label: 'Clients Supported',
  },
  {
    icon: HiDocumentText,
    value: '1000+',
    label: 'Tax Returns Filed',
  },
  {
    icon: HiHeart,
    value: '98%',
    label: 'Client Satisfaction',
  },
];

export default function TrustMetricsSection() {
  return (
    <section
      className="relative py-14 pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24 bg-brand-grayLight/50 overflow-hidden"
      aria-labelledby="trust-metrics-heading"
    >
      <SectionReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <p className="reveal-item reveal-item-delay-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-text/60 mb-2">
              Why Clients Trust Us
            </p>
            <h2
              id="trust-metrics-heading"
              className="reveal-item reveal-item-delay-2 text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-4"
            >
              <span className="text-[#2b4b6b]">Trusted Accounting Support for </span>
              <span className="text-[#9a0000]">Businesses and Individuals</span>
            </h2>
            <p className="reveal-item reveal-item-delay-2 text-sm sm:text-base text-brand-text/85 leading-relaxed">
              DepoTax provides reliable accounting, tax, payroll, and advisory services for clients across the UK.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {METRICS.map((item, i) => (
              <div
                key={item.label}
                className={`reveal-item ${i < 2 ? 'reveal-item-delay-3' : 'reveal-item-delay-4'} rounded-xl border border-brand-grayBorder bg-white p-6 sm:p-7 shadow-[0_4px_20px_rgba(15,23,42,0.06)] flex flex-col items-center text-center`}
              >
                <span className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-4" aria-hidden>
                  <item.icon className="w-6 h-6" />
                </span>
                <p className="text-2xl sm:text-3xl font-bold text-brand-accent mb-1 tabular-nums">
                  {item.value}
                </p>
                <p className="text-sm font-medium text-brand-navy">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
