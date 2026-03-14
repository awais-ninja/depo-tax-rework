'use client';

import SectionReveal from '@/components/ui/SectionReveal';
import SectionBackgroundLabel from '@/components/ui/SectionBackgroundLabel';
import {
  IconAcademicCap,
  IconUserGroup,
  IconLightBulb,
  IconDocumentCheck,
  IconChatBubbleLeftRight,
  IconCloud,
} from '@/components/ui/Icons';

const VALUE_CARDS = [
  {
    title: 'Experienced Professionals',
    description: 'Our team brings trusted accounting and tax expertise so you receive accurate, compliant advice from people who understand UK regulation.',
    Icon: IconAcademicCap,
  },
  {
    title: 'Tailored Support',
    description: 'We adapt our services to each client—whether you’re a sole trader, limited company, or landlord—so you get the right level of support.',
    Icon: IconUserGroup,
  },
  {
    title: 'Clear and Practical Advice',
    description: 'Straightforward guidance without jargon. We explain options clearly so you can make informed decisions about your finances and tax.',
    Icon: IconLightBulb,
  },
  {
    title: 'Reliable Compliance Support',
    description: 'We help you stay on top of tax, payroll, VAT, and filing obligations so you meet deadlines and remain compliant with HMRC and Companies House.',
    Icon: IconDocumentCheck,
  },
  {
    title: 'Responsive Communication',
    description: 'Timely support when you need it. We aim to respond promptly and keep you updated so you’re never left waiting on important matters.',
    Icon: IconChatBubbleLeftRight,
  },
  {
    title: 'Modern Cloud-Based Processes',
    description: 'We use modern cloud accounting systems and processes so your data is secure, accessible, and aligned with current best practice.',
    Icon: IconCloud,
  },
];

function ValueCard({ title, description, Icon, delayClass }) {
  return (
    <article
      className={`reveal-item ${delayClass} flex flex-col rounded-xl border border-brand-grayBorder bg-white p-5 sm:p-6 shadow-[0_2px_12px_rgba(15,23,42,0.04)] transition-all duration-200 md:hover:border-brand-accent/20 md:hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)]`}
    >
      <span
        className="mb-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent"
        aria-hidden
      >
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="text-base font-bold text-brand-navy mb-2">{title}</h3>
      <p className="text-sm text-brand-text/85 leading-relaxed">{description}</p>
    </article>
  );
}

export default function ServicesWhyChoose() {
  return (
    <section
      id="services-why-choose"
      className="relative py-14 sm:py-20 md:py-20 lg:py-24 overflow-hidden bg-white"
      aria-labelledby="services-why-choose-heading"
    >
      <SectionBackgroundLabel label="WHY DEPOTAX" position="right-mid" size="md" />
      <SectionReveal>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="max-w-3xl mb-10 sm:mb-12">
            <p className="reveal-item reveal-item-delay-1 text-[11px] font-bold uppercase tracking-[0.15em] text-brand-accent mb-3">
              Why Choose DepoTax
            </p>
            <h2
              id="services-why-choose-heading"
              className="reveal-item reveal-item-delay-1 text-xl sm:text-2xl md:text-3xl font-bold text-brand-navy tracking-tight leading-tight mb-4"
            >
              Reliable Accounting and Tax Support Built Around Your Business Needs
            </h2>
            <p className="reveal-item reveal-item-delay-1 text-base text-brand-text/85 leading-relaxed">
              DepoTax provides clear advice, dependable service, responsive communication, and tailored accounting support for businesses and individuals across the UK. We aim to be the partner you can rely on for compliance and growth.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {VALUE_CARDS.map((card, i) => (
              <ValueCard
                key={card.title}
                title={card.title}
                description={card.description}
                Icon={card.Icon}
                delayClass={
                  i < 2 ? 'reveal-item-delay-2' : i < 4 ? 'reveal-item-delay-3' : 'reveal-item-delay-4'
                }
              />
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
