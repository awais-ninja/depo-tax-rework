'use client';

import SectionReveal from '@/components/ui/SectionReveal';
import SectionBackgroundLabel from '@/components/ui/SectionBackgroundLabel';
import {
  IconAcademicCap,
  IconUserGroup,
  IconLightBulb,
  IconDocumentCheck,
  IconChatBubbleLeftRight,
  IconChartBar,
} from '@/components/ui/Icons';

const VALUE_CARDS = [
  {
    title: 'Experienced Professionals',
    description: 'Our team brings trusted accounting and tax expertise so you receive accurate, compliant advice from people who understand UK regulation and your sector.',
    Icon: IconAcademicCap,
  },
  {
    title: 'Tailored Client Support',
    description: 'We adapt our services to each client’s needs—whether you’re a sole trader, limited company, or landlord—so you get the right level of support.',
    Icon: IconUserGroup,
  },
  {
    title: 'Clear and Practical Advice',
    description: 'Straightforward guidance without jargon or confusion. We explain options clearly so you can make informed decisions about your finances and tax.',
    Icon: IconLightBulb,
  },
  {
    title: 'Reliable Compliance Support',
    description: 'We help you stay on top of tax, payroll, VAT, and filing obligations so you meet deadlines and remain compliant with HMRC and Companies House.',
    Icon: IconDocumentCheck,
  },
  {
    title: 'Responsive Communication',
    description: 'Timely support when you need it. We aim to respond promptly and keep you updated so you’re never left waiting on important accounting or tax matters.',
    Icon: IconChatBubbleLeftRight,
  },
  {
    title: 'Long-Term Business Support',
    description: 'We help you not only stay compliant but also operate with more confidence—supporting your growth and financial planning year after year.',
    Icon: IconChartBar,
  },
];

function ValueCard({ title, description, Icon, delayClass }) {
  return (
    <article
      className={`reveal-item ${delayClass} flex flex-col rounded-xl border border-brand-grayBorder bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.06)] transition-all duration-200 md:hover:border-brand-accent/20 md:hover:shadow-[0_8px_28px_rgba(15,23,42,0.08)]`}
    >
      <span
        className="mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent"
        aria-hidden
      >
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="text-base font-semibold text-brand-navy mb-2">{title}</h3>
      <p className="text-sm text-brand-text/85 leading-relaxed">{description}</p>
    </article>
  );
}

export default function AboutWhyChoose() {
  return (
    <section
      id="why-choose-depotax"
      className="relative py-14 md:py-16 lg:py-20 overflow-hidden bg-brand-grayLight/40"
      aria-labelledby="why-choose-depotax-heading"
    >
      <SectionBackgroundLabel label="WHY US" position="right-mid" size="md" />
      <SectionReveal>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <h2
              id="why-choose-depotax-heading"
              className="reveal-item reveal-item-delay-1 text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-4"
            >
              <span className="text-[#2b4b6b]">Why Choose </span>
              <span className="text-[#9a0000]">Us</span>
            </h2>
            <p className="reveal-item reveal-item-delay-2 text-base text-brand-text/85 leading-relaxed">
              DepoTax supports businesses and individuals with responsive service, practical advice, and dependable accounting and tax support tailored to your situation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {VALUE_CARDS.map((item, i) => (
              <ValueCard
                key={item.title}
                title={item.title}
                description={item.description}
                Icon={item.Icon}
                delayClass={i < 3 ? 'reveal-item-delay-3' : 'reveal-item-delay-4'}
              />
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
