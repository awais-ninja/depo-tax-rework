'use client'

import { useState } from 'react'
import { IconChevronDown } from '@/components/ui/Icons'

function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border border-brand-grayBorder rounded-xl bg-white shadow-[0_2px_12px_rgba(15,23,42,0.04)] overflow-hidden transition-all duration-200 hover:border-brand-accent/20">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 sm:px-6 sm:py-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 rounded-xl"
        aria-expanded={isOpen}
      >
        <span className="text-sm sm:text-base font-semibold text-brand-navy pr-2">{question}</span>
        <span
          className={`shrink-0 w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
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
  )
}

export default function LocationFaq({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  if (!Array.isArray(items) || items.length === 0) return null

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-brand-grayLight/30" aria-labelledby="location-faq-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="location-faq-heading" className="text-xl sm:text-2xl font-bold text-brand-navy tracking-tight mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {items.map((item, index) => (
            <FaqItem
              key={`${item.q}-${index}`}
              question={item.q}
              answer={item.a}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex((prev) => (prev === index ? null : index))}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

