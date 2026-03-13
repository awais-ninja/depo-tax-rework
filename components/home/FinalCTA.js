'use client';

import Link from '@/components/ui/Link';
import SectionReveal from '@/components/ui/SectionReveal';
import SectionBackgroundLabel from '@/components/ui/SectionBackgroundLabel';
import SectionAmbient from '@/components/ui/SectionAmbient';
import { HiPhone, HiEnvelope } from 'react-icons/hi2';

export default function FinalCTA() {
  return (
    <section
      className="relative py-16 lg:py-24 bg-brand-grayLight text-brand-text overflow-hidden"
      aria-labelledby="final-cta-heading"
    >
      {/* Accent stripe – top on mobile, left on desktop */}
      <div className="absolute top-0 left-0 w-full h-1 bg-brand-accent lg:w-1 lg:h-full lg:min-h-full z-0" aria-hidden />
      <SectionBackgroundLabel label="GET STARTED" position="left-bottom" />
      <SectionAmbient />
      <SectionReveal>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative lg:pl-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-center">
            {/* Left: message block */}
            <div className="lg:col-span-3">
              <h2
                id="final-cta-heading"
                className="reveal-item reveal-item-delay-1 text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-4"
              >
                <span className="text-[#2b4b6b]">Get </span>
                <span className="text-[#9a0000]">Started</span>
              </h2>
              <p className="reveal-item reveal-item-delay-2 text-lg font-semibold text-brand-text/90 mb-3">
                Need Reliable Accounting and Tax Support?
              </p>
              <p className="reveal-item reveal-item-delay-2 text-brand-text/85 text-sm sm:text-base leading-relaxed max-w-lg">
                DepoTax helps businesses and individuals across the UK with trusted accounting, tax, payroll, bookkeeping, and advisory services. Get practical support tailored to your needs.
              </p>
            </div>

            {/* Right: CTA card */}
            <div className="lg:col-span-2">
              <div className="reveal-item reveal-item-delay-3 rounded-2xl bg-white border border-brand-grayBorder shadow-[0_4px_20px_rgba(15,23,42,0.08)] p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-text/70 mb-5">
                  Reach out today
                </p>
                <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                  <Link
                    href="mailto:info@depotax.co.uk"
                    className="inline-flex items-center justify-center gap-2 min-h-[48px] px-5 py-3 rounded-xl font-semibold text-white bg-brand-accent hover:bg-brand-accentDark transition-colors duration-200"
                  >
                    <HiEnvelope className="w-5 h-5 shrink-0" aria-hidden />
                    Contact Us Today
                  </Link>
                  <Link
                    href="tel:+442036599254"
                    className="inline-flex items-center justify-center gap-2 min-h-[48px] px-5 py-3 rounded-xl font-semibold border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white transition-colors duration-200"
                  >
                    <HiPhone className="w-5 h-5 shrink-0" aria-hidden />
                    Call Our Team
                  </Link>
                </div>
                <p className="mt-5 pt-5 border-t border-brand-grayBorder text-xs text-brand-text/75 leading-relaxed">
                  Trusted by businesses, contractors, landlords, and self-employed professionals. Speak to our team for practical and reliable advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
