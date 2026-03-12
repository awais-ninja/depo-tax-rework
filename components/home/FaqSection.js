'use client';

import { useState } from 'react';
import Link from '@/components/ui/Link';
import SectionReveal from '@/components/ui/SectionReveal';
import { HiChevronDown } from 'react-icons/hi2';

const FAQ_ITEMS = [
  {
    question: 'How much does an accountant cost in the UK?',
    answer:
      'The cost of an accountant in the UK depends on the level of support you need. DepoTax offers flexible accounting packages for contractors, limited companies, sole traders, landlords and growing businesses, with options to spread the cost over 12 months.',
  },
  {
    question: 'Do I need an accountant for a limited company?',
    answer:
      'Most limited companies benefit from an accountant to handle annual accounts, corporation tax, payroll, VAT returns and Companies House filing. This helps businesses stay compliant and organised throughout the year.',
  },
  {
    question: 'Do you help with self assessment tax returns?',
    answer:
      'Yes. DepoTax supports self employed professionals, landlords and individuals with self assessment tax returns, tax planning and HMRC filing support.',
  },
  {
    question: 'Do you offer bookkeeping and payroll services?',
    answer:
      'Yes. We provide bookkeeping services, payroll and PAYE support, pension submissions and cloud accounting support for small businesses and limited companies across the UK.',
  },
  {
    question: 'Do you work with contractors and landlords?',
    answer:
      'Yes. We support contractors with accounting and tax planning, and we also provide specialist accounting services for landlords, HMO owners, property investors and SPV companies.',
  },
  {
    question: 'Can I get a fixed fee accounting package?',
    answer:
      'Yes. DepoTax offers fixed fee accounting packages designed to give businesses clear monthly pricing with no hidden surprises.',
  },
  {
    question: 'Do you only work with businesses in London?',
    answer:
      'No. While our office is based in London, we support businesses, contractors, sole traders, landlords and growing companies across the UK.',
  },
  {
    question: 'How do I get started with DepoTax?',
    answer:
      'You can get started by contacting our team, booking a consultation, or using the pricing calculator to explore the package that best suits your needs.',
  },
];

function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div
      className="border border-brand-grayBorder rounded-xl bg-white shadow-[0_2px_12px_rgba(15,23,42,0.06)] overflow-hidden transition-all duration-200 hover:border-brand-accent/30 hover:shadow-[0_4px_20px_rgba(15,23,42,0.08)]"
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
          <HiChevronDown className="w-5 h-5" />
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

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      className="relative py-16 lg:py-24 bg-brand-grayLight/50 overflow-hidden"
      aria-labelledby="faq-heading"
    >
      <SectionReveal>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="reveal-item reveal-item-delay-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-text/60 mb-3">
              Frequently Asked Questions
            </p>
            <h2
              id="faq-heading"
              className="reveal-item reveal-item-delay-2 text-2xl sm:text-3xl font-bold uppercase tracking-tight text-brand-navy mb-4"
            >
              Common Questions About Our Accounting, Tax Returns &amp; Bookkeeping
              Services
            </h2>
            <p className="reveal-item reveal-item-delay-2 text-sm sm:text-base text-brand-text/85">
              Find answers to common questions about accounting packages, tax
              returns, bookkeeping, payroll, HMRC support and working with
              DepoTax across the UK.
            </p>
          </div>

          <div className="space-y-3 reveal-item reveal-item-delay-3">
            {FAQ_ITEMS.map((item, index) => (
              <FaqItem
                key={item.question}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={() => toggle(index)}
              />
            ))}
          </div>

          <div className="reveal-item reveal-item-delay-4 mt-12 text-center rounded-2xl border border-brand-grayBorder bg-white p-6 sm:p-8 shadow-[0_4px_20px_rgba(15,23,42,0.08)]">
            <h3 className="text-lg font-semibold text-brand-navy mb-2">
              Still Have Questions?
            </h3>
            <p className="text-sm text-brand-text/85 mb-5 max-w-md mx-auto">
              Speak to our team for expert advice on accounting packages, tax
              returns, bookkeeping and business support.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/book-consultation"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-white bg-brand-accent hover:bg-brand-accentDark transition-colors duration-200"
              >
                Book Consultation
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold border-2 border-brand-accent text-brand-accent bg-white hover:bg-brand-accent hover:text-white transition-colors duration-200"
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
