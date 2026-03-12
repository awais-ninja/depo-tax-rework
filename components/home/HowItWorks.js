'use client';

import Link from '@/components/ui/Link';
import SectionReveal from '@/components/ui/SectionReveal';

const STEPS = [
  {
    num: '01',
    title: 'Book a Consultation',
    description:
      'Speak with our team about your business, tax position and the type of accounting support you need.',
  },
  {
    num: '02',
    title: 'Choose the Right Package',
    description:
      'Select a suitable accounting package or one-off service based on your business type, support needs and budget.',
  },
  {
    num: '03',
    title: 'Share Your Information',
    description:
      'Send over your documents and business details securely so we can review your records and set everything up properly.',
  },
  {
    num: '04',
    title: 'We Handle the Work',
    description:
      'Our team manages your bookkeeping, payroll, tax returns, accounts and HMRC compliance with ongoing support throughout the year.',
  },
];

function StepCard({ step, index, delayClass }) {
  return (
    <article
      className={`reveal-item ${delayClass} group relative flex flex-col rounded-2xl border border-brand-grayBorder bg-white p-6 shadow-[0_8px_28px_rgba(15,23,42,0.08)] transition-all duration-200 md:hover:-translate-y-1 md:hover:shadow-[0_16px_40px_rgba(15,23,42,0.12)] md:hover:border-[#9a0000]/30`}
    >
      <div className="flex items-start gap-4">
        <span
          className="shrink-0 w-12 h-12 rounded-xl bg-[#9a0000]/10 text-[#9a0000] font-bold text-lg flex items-center justify-center border border-[#9a0000]/20"
          aria-hidden
        >
          {step.num}
        </span>
        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-brand-navy mb-2">
            {step.title}
          </h3>
          <p className="text-sm text-brand-text/85 leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function HowItWorks() {
  return (
    <section
      className="relative py-16 lg:py-24 bg-brand-grayLight/50 overflow-hidden"
      aria-labelledby="how-it-works-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 hidden md:block"
        aria-hidden
      >
        <div className="absolute top-1/4 -left-20 w-48 h-48 rounded-full bg-[#9a0000]/[0.04] blur-3xl" />
      </div>

      <SectionReveal>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2
              id="how-it-works-heading"
              className="reveal-item reveal-item-delay-1 text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-4"
            >
              How It Works
            </h2>
            <p className="reveal-item reveal-item-delay-2 text-sm sm:text-base text-brand-text/85">
              A simple process to get started with DepoTax. From your first
              consultation to ongoing accounting support, we make things
              simple, clear and efficient for businesses, contractors,
              landlords and self-employed professionals across the UK.
            </p>
          </div>

          {/* Steps: horizontal on lg with connector, 2x2 on md, stacked on mobile */}
          <div className="relative">
            {/* Connecting line – desktop only, between step cards */}
            <div
              className="hidden lg:block absolute top-[5.5rem] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#9a0000]/30 to-transparent pointer-events-none"
              style={{ left: '12.5%', right: '12.5%' }}
              aria-hidden
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
              {STEPS.map((step, i) => (
                <StepCard
                  key={step.num}
                  step={step}
                  index={i}
                  delayClass={
                    i === 0
                      ? 'reveal-item-delay-3'
                      : i === 1
                        ? 'reveal-item-delay-4'
                        : i === 2
                          ? 'reveal-item-delay-5'
                          : 'reveal-item-delay-6'
                  }
                />
              ))}
            </div>
          </div>

          <p className="reveal-item reveal-item-delay-6 text-center text-sm text-brand-text/75 font-medium mt-8">
            Clear pricing. Dedicated support. Ongoing compliance.
          </p>

          <div className="reveal-item reveal-item-delay-6 flex flex-wrap justify-center gap-2 mt-6">
            {['Free Consultation', 'Fixed Fee Packages', 'HMRC Support', 'Ongoing Advice'].map(
              (chip) => (
                <span
                  key={chip}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/80 border border-brand-grayBorder/80 text-brand-text/80"
                >
                  {chip}
                </span>
              )
            )}
          </div>

          <div className="reveal-item reveal-item-delay-6 text-center mt-8">
            <Link
              href="/book-consultation"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-white bg-[#9a0000] hover:bg-[#7a0000] transition-colors duration-200"
            >
              Book a free consultation
              <span className="ml-1.5" aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
