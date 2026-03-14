'use client';

import { IconUserCircle, IconBuildingStorefront, IconShieldCheck, IconHeart } from '@/components/ui/Icons';

const FEATURES = [
  {
    title: 'Personalised Support',
    description: 'Every client receives guidance tailored to their business type, income structure, and financial responsibilities.',
    Icon: IconUserCircle,
  },
  {
    title: 'Industry Understanding',
    description: 'DepoTax works with a range of client groups and understands their different accounting and tax priorities.',
    Icon: IconBuildingStorefront,
  },
  {
    title: 'Reliable Compliance',
    description: 'Clients receive organised support to help them stay on top of reporting, deadlines, and obligations.',
    Icon: IconShieldCheck,
  },
  {
    title: 'Long-Term Support',
    description: 'DepoTax aims to support clients not only with immediate requirements, but also as their needs develop over time.',
    Icon: IconHeart,
  },
];

export default function WhyClientsChoose() {
  return (
    <section
      id="why-choose"
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-white"
      aria-labelledby="why-clients-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-accent mb-3">
            Why DepoTax
          </p>
          <h2
            id="why-clients-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy tracking-tight leading-tight mb-4"
          >
            Why Different Client Types Choose DepoTax
          </h2>
          <p className="text-base text-brand-text/85 leading-relaxed">
            Clients choose DepoTax for clear communication, dependable support, practical advice, and accounting services tailored to their situation.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {FEATURES.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-brand-grayBorder bg-brand-grayLight/20 p-6 sm:p-8 text-center hover:border-brand-accent/20 hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition-all duration-200"
            >
              <span className="inline-flex w-14 h-14 rounded-xl bg-brand-accent/10 items-center justify-center text-brand-accent mb-5">
                <item.Icon className="w-7 h-7" aria-hidden />
              </span>
              <h3 className="text-lg font-bold text-brand-navy tracking-tight mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-brand-text/85 leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
