'use client';

import { useState } from 'react';
import Link from '@/components/ui/Link';
import SectionBackgroundLabel from '@/components/ui/SectionBackgroundLabel';
import { IconChevronDown } from '@/components/ui/Icons';

const FAQ_ITEMS = [
  {
    question: 'Do I need to file a Self Assessment tax return?',
    answer:
      'You usually need to file if you are self-employed, a company director, a landlord receiving rental income, or have other income not fully taxed at source. HMRC may also require you to file if your income is over certain thresholds or if you have been sent a notice to file.',
  },
  {
    question: 'What records should I keep for bookkeeping?',
    answer:
      'Keep records of sales and income, purchases and expenses, bank statements, receipts, invoices, and any supporting documents. How long you keep them depends on the type of tax and HMRC requirements — typically at least five years for Self Assessment and six years for many business records.',
  },
  {
    question: 'When are annual accounts due?',
    answer:
      'For limited companies, annual accounts are generally due 9 months after the end of the accounting period. The filing deadline at Companies House is usually 9 months after the period end; you may have a later deadline for sending accounts to HMRC with your corporation tax return.',
  },
  {
    question: 'Can an accountant help with VAT returns?',
    answer:
      'Yes. An accountant can prepare and submit your VAT returns, advise on VAT schemes, and help you stay compliant with HMRC. Many businesses use an accountant for quarterly or annual VAT reporting.',
  },
];

function FaqPreviewItem({ question, answer, isOpen, onToggle }) {
  return (
    <div
      className="border border-brand-grayBorder rounded-xl bg-white shadow-[0_2px_12px_rgba(15,23,42,0.06)] overflow-hidden transition-all duration-200 hover:border-brand-accent/30"
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 sm:px-6 sm:py-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50 focus-visible:ring-offset-2 rounded-xl"
        aria-expanded={isOpen}
      >
        <span className="text-sm sm:text-base font-semibold text-brand-navy pr-2">
          {question}
        </span>
        <span
          className={`shrink-0 w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden
        >
          <IconChevronDown className="w-5 h-5" />
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-200 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-4 sm:px-6 sm:pb-5 pt-0 text-sm text-brand-text/85 leading-relaxed border-t border-brand-grayBorder/60">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function KnowledgeFaqPreview() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq-preview"
      className="relative overflow-hidden bg-brand-grayLight/50 py-16 sm:py-20 md:py-24 border-t border-brand-grayBorder/60"
      aria-labelledby="faq-preview-heading"
    >
      <SectionBackgroundLabel label="FAQ" position="right-bottom" size="lg" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10 sm:mb-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-accent mb-3">
            Common Questions
          </p>
          <h2
            id="faq-preview-heading"
            className="text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight leading-tight mb-4"
          >
            Helpful Answers to Common Accounting and Tax Questions
          </h2>
          <p className="text-base text-brand-text/85 leading-relaxed">
            Quick answers to frequently asked questions. For more, visit our full FAQ section.
          </p>
        </header>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => (
            <FaqPreviewItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => toggle(index)}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/knowledge/faqs"
            className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-xl font-semibold border-2 border-brand-navy text-brand-navy bg-white hover:bg-brand-navy hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2"
          >
            View All FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}
