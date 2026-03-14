'use client';

import { useState } from 'react';
import { IconChevronDown } from '@/components/ui/Icons';

/**
 * Grouped FAQ section: group title + accordion items.
 * items: [{ question, answer }]
 */
function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border border-brand-grayBorder rounded-xl bg-white shadow-[0_2px_12px_rgba(15,23,42,0.06)] overflow-hidden transition-all duration-200 hover:border-brand-accent/30">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 sm:px-6 sm:py-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50 focus-visible:ring-offset-2 rounded-xl"
        aria-expanded={isOpen}
      >
        <span className="text-sm sm:text-base font-semibold text-brand-navy pr-2">{question}</span>
        <span
          className={`shrink-0 w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden
        >
          <IconChevronDown className="w-5 h-5" />
        </span>
      </button>
      <div className={`grid transition-[grid-template-rows] duration-200 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <p className="px-5 pb-4 sm:px-6 sm:pb-5 pt-0 text-sm text-brand-text/85 leading-relaxed border-t border-brand-grayBorder/60">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function KnowledgeFaqGroup({ groupTitle, items, openIndex, onToggle, startIndex }) {
  return (
    <section className="mb-10" aria-labelledby={`faq-group-${groupTitle.replace(/[\s/]+/g, '-').replace(/[^a-zA-Z0-9-]/g, '')}`}>
      <h2 id={`faq-group-${groupTitle.replace(/[\s/]+/g, '-').replace(/[^a-zA-Z0-9-]/g, '')}`} className="text-xl font-bold text-brand-navy tracking-tight mb-4">
        {groupTitle}
      </h2>
      <div className="space-y-3">
        {items.map((item, i) => (
          <FaqItem
            key={item.question}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === startIndex + i}
            onToggle={() => onToggle(startIndex + i)}
          />
        ))}
      </div>
    </section>
  );
}
