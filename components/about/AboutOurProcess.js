'use client';

import SectionReveal from '@/components/ui/SectionReveal';
import SectionBackgroundLabel from '@/components/ui/SectionBackgroundLabel';

const PROCESS_INTRO =
  'DepoTax follows a clear process from initial consultation through ongoing accounting, tax, payroll, and compliance support. We keep things structured, transparent, and focused on your business needs.';

const SUPPORT_NOTE =
  'From first conversation to ongoing compliance support, we aim to make accounting and tax matters clear, efficient, and manageable for every client.';

const STEPS = [
  {
    num: '01',
    title: 'Initial Consultation',
    description:
      'We take time to understand your business, current situation, and accounting or tax requirements so we can recommend the right support.',
    color: '#1F4E79', // brand-navy
  },
  {
    num: '02',
    title: 'Review & Setup',
    description:
      'We review your documents, assess your needs, and set up the most suitable accounting support structure for your business.',
    color: '#2E5C8A', // brand-blue
  },
  {
    num: '03',
    title: 'Ongoing Support',
    description:
      'We provide regular bookkeeping, payroll, tax, compliance, and advisory support so you stay on track and compliant throughout the year.',
    color: '#9a0000', // brand-accent
  },
  {
    num: '04',
    title: 'Reporting & Guidance',
    description:
      'We keep you informed with clear communication, timely updates, and practical financial guidance so you can make confident decisions.',
    color: '#5c6b7a', // muted slate
  },
];

function ProcessStepCard({ step, delayClass }) {
  const { num, title, description, color } = step;
  return (
    <article
      className={`reveal-item ${delayClass} relative flex flex-col min-h-[200px] sm:min-h-[220px]`}
      aria-labelledby={`process-step-${num}-title`}
    >
      {/* Layered design: colored shape behind, white card on top */}
      <div
        className="absolute inset-0 rounded-2xl translate-x-1 translate-y-1 sm:translate-x-1.5 sm:translate-y-1.5"
        style={{ backgroundColor: color }}
        aria-hidden
      />
      <div className="relative flex flex-col flex-1 rounded-2xl border border-brand-grayBorder bg-white p-5 sm:p-6 shadow-[0_4px_20px_rgba(15,23,42,0.06)] transition-all duration-200 md:hover:shadow-[0_8px_28px_rgba(15,23,42,0.08)]">
        {/* Step number — clear and professional */}
        <div
          className="absolute top-0 right-0 flex flex-col items-center justify-center rounded-bl-xl rounded-tr-2xl w-10 sm:w-11 h-20 sm:h-24 text-white"
          style={{ backgroundColor: color }}
          aria-hidden
        >
          <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider">Step</span>
          <span className="font-bold text-lg sm:text-xl leading-tight mt-0.5">{num}</span>
        </div>

        <div className="pr-11 sm:pr-12 pt-1">
          <h3
            id={`process-step-${num}-title`}
            className="text-base sm:text-lg font-bold text-brand-navy mb-2"
          >
            {title}
          </h3>
          <p className="text-sm text-brand-text/85 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function AboutOurProcess() {
  return (
    <section
      id="our-process"
      className="relative py-12 sm:py-14 md:py-16 lg:py-20 overflow-hidden bg-brand-grayLight/40"
      aria-labelledby="our-process-heading"
    >
      <SectionBackgroundLabel label="OUR PROCESS" position="right-bottom" size="md" />
      <SectionReveal>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h2
              id="our-process-heading"
              className="reveal-item reveal-item-delay-1 text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-4"
            >
              <span className="text-[#2b4b6b]">Our </span>
              <span className="text-[#9a0000]">Process</span>
            </h2>
            <p className="reveal-item reveal-item-delay-2 mt-4 text-base text-brand-text/85 leading-relaxed">
              {PROCESS_INTRO}
            </p>
          </div>

          {/* Process steps: 1 col mobile, 2 col tablet, 4 col desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
            {STEPS.map((step, i) => (
              <ProcessStepCard
                key={step.num}
                step={step}
                delayClass={
                  i === 0 ? 'reveal-item-delay-3' : i === 1 ? 'reveal-item-delay-4' : i === 2 ? 'reveal-item-delay-5' : 'reveal-item-delay-6'
                }
              />
            ))}
          </div>

          {/* Supporting note */}
          <p className="reveal-item reveal-item-delay-6 text-center text-sm sm:text-base text-brand-text/75 max-w-2xl mx-auto mt-8 sm:mt-10 leading-relaxed">
            {SUPPORT_NOTE}
          </p>
        </div>
      </SectionReveal>
    </section>
  );
}
