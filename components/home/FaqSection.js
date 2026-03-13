'use client';

import { useState } from 'react';
import Link from '@/components/ui/Link';
import SectionReveal from '@/components/ui/SectionReveal';
import SectionBackgroundLabel from '@/components/ui/SectionBackgroundLabel';
import SectionAmbient from '@/components/ui/SectionAmbient';
import { IconChevronDown } from '@/components/ui/Icons';

import { faq as faqData } from '@/data/home';
import { BOOKING_URL } from '@/data/contact';

function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div
      className="border border-brand-grayBorder rounded-xl bg-white shadow-[0_2px_12px_rgba(15,23,42,0.06)] overflow-hidden transition-all duration-200 hover:border-brand-accent/30 hover:shadow-[0_4px_20px_rgba(15,23,42,0.08)]"
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 sm:px-6 sm:py-5 min-h-12 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50 focus-visible:ring-offset-2 rounded-xl"
        aria-expanded={isOpen}
      >
        <span className="text-sm sm:text-base font-semibold text-brand-navy pr-2">
          {question}
        </span>
        <span
          className={`shrink-0 w-10 h-10 min-w-12 min-h-12 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden
        >
          <IconChevronDown className="w-5 h-5" />
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-200 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-4 sm:px-6 sm:pb-5 pt-0 text-sm text-brand-text/90 leading-relaxed border-t border-brand-grayBorder/60">
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
      <SectionBackgroundLabel label="FAQ" position="right-bottom" size="lg" />
      <SectionAmbient />
      <SectionReveal>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 id="faq-heading" className="reveal-item reveal-item-delay-1 text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-4">
              <span className="text-[#2b4b6b]">{faqData.heading1}</span>
              <span className="text-[#9a0000]">{faqData.heading2}</span>
            </h2>
            <p className="reveal-item reveal-item-delay-2 text-sm sm:text-base text-brand-text/90 text-center">{faqData.intro}</p>
          </div>

          <div className="space-y-3 reveal-item reveal-item-delay-3">
            {faqData.items.map((item, index) => (
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
            <h3 className="text-lg font-semibold text-brand-navy mb-2">{faqData.stillHaveQuestions.title}</h3>
            <p className="text-sm text-brand-text/90 mb-5 max-w-md mx-auto">{faqData.stillHaveQuestions.description}</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href={BOOKING_URL} className="inline-flex items-center justify-center min-h-12 px-6 py-3 rounded-xl font-semibold text-white bg-brand-accent hover:bg-brand-accentDark transition-colors duration-200" aria-label={`${faqData.stillHaveQuestions.ctaBook} (FAQ section)`}>
                {faqData.stillHaveQuestions.ctaBook}
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center min-h-12 px-6 py-3 rounded-xl font-semibold border-2 border-brand-accent text-brand-accent bg-white hover:bg-brand-accent hover:text-white transition-colors duration-200" aria-label={`${faqData.stillHaveQuestions.ctaContact} (FAQ section)`}>
                {faqData.stillHaveQuestions.ctaContact}
              </Link>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
