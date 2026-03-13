'use client';

import { useState } from 'react';
import SectionBackgroundLabel from '@/components/ui/SectionBackgroundLabel';
import SectionAmbient from '@/components/ui/SectionAmbient';

const FAQ_ITEMS = [
  {
    question: 'How much does an accountant cost in the UK?',
    answer:
      'Accounting fees vary depending on business size and services required. DepoTax offers transparent monthly packages and individual services so you can choose the level of support that suits your situation.',
  },
  {
    question: 'Do you offer fixed monthly accounting packages?',
    answer:
      'Yes. Many of our services are offered through fixed monthly packages designed to cover common compliance and accounting needs.',
  },
  {
    question: 'Can I choose individual services instead of a package?',
    answer:
      'Yes. Our pricing page allows you to select single services if you prefer tailored support instead of a full package.',
  },
  {
    question: 'Are consultations free?',
    answer:
      'Yes. We offer an initial consultation so we can understand your requirements and recommend the most suitable services.',
  },
  {
    question: 'Do you support contractors and landlords?',
    answer:
      'Yes. DepoTax provides specialist support for contractors, landlords, limited companies, and self-employed individuals across the UK.',
  },
];

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-brand-grayLight/40">
      <SectionBackgroundLabel label="FAQ" position="right-bottom" size="lg" />
      <SectionAmbient />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
        <header className="mb-6 sm:mb-8 text-left">
          <h2 className="text-xl sm:text-2xl font-semibold text-brand-navy mb-2">Pricing FAQs</h2>
          <p className="text-sm sm:text-base text-brand-text/80">
            Answers to common questions about DepoTax pricing, packages, and how we work.
          </p>
        </header>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="rounded-2xl border border-brand-grayBorder/80 bg-white overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between gap-4 px-4 py-3 sm:px-5 sm:py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-brand-navy">
                    {item.question}
                  </span>
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold border ${
                      isOpen
                        ? 'bg-brand-accent text-white border-brand-accent'
                        : 'bg-white text-brand-navy border-brand-grayBorder'
                    }`}
                    aria-hidden
                  >
                    {isOpen ? '-' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-brand-text/80 border-t border-brand-grayBorder/80">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

