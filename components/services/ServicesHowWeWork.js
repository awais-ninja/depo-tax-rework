'use client';

import SectionReveal from '@/components/ui/SectionReveal';
import SectionBackgroundLabel from '@/components/ui/SectionBackgroundLabel';

const PROCESS_INTRO =
  'DepoTax follows a clear process from initial consultation to ongoing support and compliance. We keep things structured, transparent, and focused on your business needs.';

const STEPS = [
  {
    num: '01',
    title: 'Initial Consultation',
    description: 'We take time to understand your business, situation, and accounting or tax requirements so we can recommend the right support.',
  },
  {
    num: '02',
    title: 'Review & Setup',
    description: 'We review your documents, assess your needs, and set up the most suitable accounting and compliance structure for your business.',
  },
  {
    num: '03',
    title: 'Ongoing Support',
    description: 'We provide regular bookkeeping, payroll, tax, and advisory support so you stay on track and compliant throughout the year.',
  },
  {
    num: '04',
    title: 'Reporting & Guidance',
    description: 'We keep you informed with clear communication, timely updates, and practical financial guidance so you can make confident decisions.',
  },
];

function StepCard({ step, delayClass }) {
  const { num, title, description } = step;
  return (
    <article
      className={`reveal-item ${delayClass} flex flex-col rounded-xl border border-brand-grayBorder bg-white p-5 sm:p-6 shadow-[0_2px_12px_rgba(15,23,42,0.04)] transition-all duration-200 md:hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)] md:hover:border-brand-accent/15 min-h-[180px] sm:min-h-[200px]`}
      aria-labelledby={`services-step-${num}-title`}
    >
      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-accent mb-3">
        Step {num}
      </span>
      <h3
        id={`services-step-${num}-title`}
        className="text-base sm:text-lg font-bold text-brand-navy mb-2"
      >
        {title}
      </h3>
      <p className="text-sm text-brand-text/85 leading-relaxed flex-1">
        {description}
      </p>
    </article>
  );
}

export default function ServicesHowWeWork() {
  return (
    <section
      id="services-how-we-work"
      className="relative py-14 sm:py-20 md:py-20 lg:py-24 overflow-hidden bg-brand-grayLight/30"
      aria-labelledby="services-how-we-work-heading"
    >
      <SectionBackgroundLabel label="OUR PROCESS" position="left-bottom" size="md" />
      <SectionReveal>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <p className="reveal-item reveal-item-delay-1 text-[11px] font-bold uppercase tracking-[0.15em] text-brand-accent mb-3">
              How We Work
            </p>
            <h2
              id="services-how-we-work-heading"
              className="reveal-item reveal-item-delay-1 text-xl sm:text-2xl md:text-3xl font-bold text-brand-navy tracking-tight leading-tight mb-4"
            >
              A Straightforward Process Designed to Support You at Every Stage
            </h2>
            <p className="reveal-item reveal-item-delay-1 text-base text-brand-text/85 leading-relaxed">
              {PROCESS_INTRO}
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {STEPS.map((step, i) => (
              <StepCard
                key={step.num}
                step={step}
                delayClass={
                  i === 0 ? 'reveal-item-delay-2' : i === 1 ? 'reveal-item-delay-3' : i === 2 ? 'reveal-item-delay-4' : 'reveal-item-delay-5'
                }
              />
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
