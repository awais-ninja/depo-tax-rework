'use client';

import Link from '@/components/ui/Link';
import SectionReveal from '@/components/ui/SectionReveal';
import SectionBackgroundLabel from '@/components/ui/SectionBackgroundLabel';

const CAREERS_INTRO =
  'Wish to join and be a part of our team? Since the beginning of our journey, we have always aimed to build a fair, professional, and supportive working environment for everyone. If you are passionate about accounting, client service, and professional growth, we would be happy to hear from you.';

const CAREERS_AREAS = [
  'Accounting and tax professionals',
  'Payroll and compliance support',
  'Client management and administration',
  'Marketing and operational support',
];

const CAREERS_MICROCOPY =
  'We welcome interest from motivated professionals who value high standards, dependable service, and long-term client relationships.';

export default function AboutCareers() {
  return (
    <section
      id="careers"
      className="relative py-12 sm:py-14 md:py-16 lg:py-20 overflow-hidden bg-white"
      aria-labelledby="careers-heading"
    >
      <SectionBackgroundLabel label="CAREERS" position="left-bottom" size="md" />
      <SectionReveal>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12 xl:gap-16 lg:items-start">
            {/* Left: heading, paragraph, bullet list */}
            <div className="lg:col-span-7 order-1">
              <h2
                id="careers-heading"
                className="reveal-item reveal-item-delay-1 text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-4"
              >
                <span className="text-[#2b4b6b]">Our </span>
                <span className="text-[#9a0000]">Careers</span>
              </h2>
              <p className="reveal-item reveal-item-delay-2 mt-4 sm:mt-5 text-base text-brand-text/85 leading-relaxed">
                {CAREERS_INTRO}
              </p>
              <ul
                className="reveal-item reveal-item-delay-3 mt-6 sm:mt-8 space-y-2 text-brand-text/85"
                aria-label="Areas we look for"
              >
                {CAREERS_AREAS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" aria-hidden />
                    <span className="text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="reveal-item reveal-item-delay-3 mt-6 text-sm text-brand-text/70 leading-relaxed italic">
                {CAREERS_MICROCOPY}
              </p>
              <p className="reveal-item reveal-item-delay-3 mt-4 text-sm text-brand-text/85">
                Send your CV to: <Link href="mailto:careers@depotax.co.uk" className="font-medium text-brand-accent hover:text-brand-accentDark underline underline-offset-2">careers@depotax.co.uk</Link>
              </p>
            </div>

            {/* Right: contact / CV card */}
            <div className="lg:col-span-5 order-2 mb-8 lg:mb-0">
              <div className="reveal-item reveal-item-delay-3 rounded-2xl border border-brand-grayBorder bg-brand-grayLight/30 p-5 sm:p-6 lg:p-7 shadow-[0_4px_20px_rgba(15,23,42,0.06)]">
                <h3 className="text-lg sm:text-xl font-bold text-brand-navy mb-3">
                  Interested in joining DepoTax?
                </h3>
                <p className="text-sm sm:text-base text-brand-text/85 leading-relaxed mb-5 sm:mb-6">
                  Send your CV and a short introduction to{' '}
                  <Link href="mailto:careers@depotax.co.uk" className="font-medium text-brand-accent hover:text-brand-accentDark underline underline-offset-2">
                    careers@depotax.co.uk
                  </Link>{' '}
                  for future opportunities.
                </p>
                <Link
                  href="mailto:careers@depotax.co.uk"
                  className="inline-flex items-center justify-center min-h-[44px] sm:min-h-[48px] px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-white bg-brand-accent hover:bg-brand-accentDark transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 text-sm sm:text-base w-full sm:w-auto"
                >
                  Send Your CV
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
