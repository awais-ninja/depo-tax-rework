"use client";

import SectionReveal from "@/components/ui/SectionReveal";
import { IconXCircle, IconCheckCircle } from "@/components/ui/Icons";

const COMPARISON_ROWS = [
  {
    typical: "Slow response times",
    depotax: "Responsive and practical support",
  },
  {
    typical: "Generic advice",
    depotax: "Tailored accounting and tax guidance",
  },
  {
    typical: "Hidden or unclear pricing",
    depotax: "Transparent service structure",
  },
  {
    typical: "Limited support",
    depotax: "Full accounting, payroll, tax, and advisory support",
  },
  {
    typical: "Reactive service only",
    depotax: "Ongoing business support and compliance guidance",
  },
];

export default function WhyDepoTaxComparisonSection() {
  return (
    <section
      className="relative py-14 pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-28 bg-brand-grayLight/40 overflow-hidden"
      aria-labelledby="comparison-heading"
    >
      <SectionReveal>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2
              id="comparison-heading"
              className="reveal-item reveal-item-delay-1 text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-4"
            >
              <span className="text-[#2b4b6b]">The DepoTax </span>
              <span className="text-[#9a0000]">Difference</span>
            </h2>
            <p className="reveal-item reveal-item-delay-2 text-xl sm:text-2xl font-bold text-[#2b4b6b] max-w-3xl mx-auto mb-3">
              Why Businesses Choose DepoTax
            </p>
            <p className="reveal-item reveal-item-delay-2 text-center text-brand-text/80 max-w-2xl mx-auto">
              We focus on practical support, transparent service, and dependable
              accounting solutions tailored to each client.
            </p>
          </div>

          <div className="reveal-item reveal-item-delay-3 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Typical firms column */}
            <div className="rounded-2xl border border-brand-grayBorder bg-white p-6 sm:p-8 shadow-[0_4px_20px_rgba(15,23,42,0.06)]">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-brand-grayBorder">
                <IconXCircle className="w-6 h-6 text-brand-text/40" aria-hidden />
                <h3 className="text-sm font-bold uppercase tracking-widest text-brand-text/80">
                  Typical Accounting Firms
                </h3>
              </div>
              <ul className="space-y-4" role="list">
                {COMPARISON_ROWS.map((row, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span
                      className="flex h-5 w-5 shrink-0 rounded-full bg-brand-grayBorder/80 items-center justify-center text-[10px] font-bold text-brand-text/50 mt-0.5"
                      aria-hidden
                    >
                      {i + 1}
                    </span>
                    <p className="text-sm sm:text-base text-brand-text/75 leading-snug">
                      {row.typical}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* DepoTax column */}
            <div className="rounded-2xl border-2 border-[#9a0000]/20 bg-white p-6 sm:p-8 shadow-[0_4px_24px_rgba(154,0,0,0.06)] relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-bl-full bg-[#9a0000]/5 pointer-events-none"
                aria-hidden
              />
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#9a0000]/25 relative">
                <IconCheckCircle className="w-6 h-6 text-[#9a0000]" aria-hidden />
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#9a0000]">
                  DepoTax
                </h3>
              </div>
              <ul className="space-y-4 relative" role="list">
                {COMPARISON_ROWS.map((row, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span
                      className="flex h-5 w-5 shrink-0 rounded-full bg-[#9a0000]/15 items-center justify-center text-[10px] font-bold text-[#9a0000] mt-0.5"
                      aria-hidden
                    >
                      {i + 1}
                    </span>
                    <p className="text-sm sm:text-base font-medium text-[#2b4b6b] leading-snug">
                      {row.depotax}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Optional: single-row comparison on smaller screens could show arrow; we're using two cards which stack on mobile */}
        </div>
      </SectionReveal>
    </section>
  );
}
