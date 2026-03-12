'use client';

import Link from '@/components/ui/Link';
import SectionReveal from '@/components/ui/SectionReveal';

const SOFTWARE = [
  {
    name: 'Xero',
    description:
      'Cloud accounting software for bookkeeping, invoicing and financial reporting.',
    logo: '/hero/xero.svg',
    alt: 'Xero',
  },
  {
    name: 'QuickBooks',
    description:
      'Modern accounting software for small businesses, payroll and bookkeeping support.',
    logo: '/hero/quickBooks.svg',
    alt: 'QuickBooks',
  },
  {
    name: 'Sage',
    description:
      'Reliable accounting software for bookkeeping, management reporting and business finance.',
    logo: '/hero/sage.svg',
    alt: 'Sage',
  },
  {
    name: 'FreeAgent',
    description:
      'Simple cloud accounting support for freelancers, contractors and small businesses.',
    logo: null,
    alt: 'FreeAgent',
  },
];

function SoftwareCard({ item, delayClass }) {
  return (
    <article
      className={`reveal-item ${delayClass} group flex flex-col items-center text-center rounded-2xl border border-brand-grayBorder bg-white p-6 shadow-[0_8px_28px_rgba(15,23,42,0.08)] transition-all duration-200 md:hover:-translate-y-1 md:hover:shadow-[0_16px_40px_rgba(15,23,42,0.12)] md:hover:border-[#9a0000]/30`}
    >
      <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mb-4">
        {item.logo ? (
          <img
            src={item.logo}
            alt={item.alt}
            className="max-w-full max-h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
            width={96}
            height={96}
          />
        ) : (
          <div className="w-full h-full rounded-xl bg-brand-grayLight/80 flex items-center justify-center text-brand-navy font-semibold text-sm sm:text-base">
            {item.name}
          </div>
        )}
      </div>
      <h3 className="text-base font-semibold text-brand-navy mb-2">
        {item.name}
      </h3>
      <p className="text-sm text-brand-text/85">{item.description}</p>
    </article>
  );
}

export default function AccountingSoftware() {
  return (
    <section
      className="relative py-16 lg:py-24 bg-white overflow-hidden"
      aria-labelledby="software-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 hidden md:block"
        aria-hidden
      >
        <div className="absolute top-24 -right-24 w-64 h-64 rounded-full bg-[#9a0000]/[0.04] blur-3xl" />
      </div>

      <SectionReveal>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-4">
            <h2
              id="software-heading"
              className="reveal-item reveal-item-delay-1 text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-4"
            >
              Accounting Software
            </h2>
            <p className="reveal-item reveal-item-delay-2 text-sm sm:text-base text-brand-text/85 mb-2">
              DepoTax supports businesses using leading cloud accounting
              software including Xero, QuickBooks and Sage. We help clients
              improve bookkeeping, reporting, payroll workflows and financial
              visibility using modern digital accounting tools.
            </p>
            <p className="reveal-item reveal-item-delay-2 text-xs sm:text-sm text-brand-text/70 font-medium">
              Helping businesses stay organised with modern cloud accounting
              tools.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {SOFTWARE.map((item, i) => (
              <SoftwareCard
                key={item.name}
                item={item}
                delayClass={
                  i < 2
                    ? i === 0
                      ? 'reveal-item-delay-3'
                      : 'reveal-item-delay-4'
                    : i === 2
                      ? 'reveal-item-delay-5'
                      : 'reveal-item-delay-6'
                }
              />
            ))}
          </div>

          <div className="reveal-item reveal-item-delay-6 text-center rounded-2xl border border-brand-grayBorder bg-brand-grayLight/30 px-6 py-8 sm:p-10">
            <h3 className="text-lg font-semibold text-brand-navy mb-2">
              Need help choosing the right accounting software?
            </h3>
            <p className="text-sm text-brand-text/85 max-w-xl mx-auto mb-6">
              Our team can support setup, bookkeeping workflows and reporting
              across leading cloud accounting platforms.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/book-consultation"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-white bg-[#9a0000] hover:bg-[#7a0000] transition-colors duration-200"
              >
                Book Consultation
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold border-2 border-[#9a0000] text-[#9a0000] hover:bg-[#9a0000] hover:text-white transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
