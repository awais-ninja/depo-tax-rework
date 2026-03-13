'use client';

import { HiCheckCircle } from 'react-icons/hi2';

export default function ServicePageFeatures({ data }) {
  const { title, items } = data;
  if (!items || items.length === 0) return null;

  return (
    <section
      className="relative py-12 sm:py-16 md:py-20 bg-white"
      aria-labelledby="service-features-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="service-features-heading"
          className="text-xl sm:text-2xl font-bold text-brand-navy tracking-tight mb-8"
        >
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {items.map((item, i) => (
            <article
              key={i}
              className="flex gap-4 rounded-xl border border-brand-grayBorder bg-white p-5 shadow-[0_2px_12px_rgba(15,23,42,0.04)]"
            >
              <HiCheckCircle className="w-6 h-6 text-brand-accent flex-shrink-0 mt-0.5" aria-hidden />
              <div>
                <h3 className="text-base font-bold text-brand-navy mb-1">{item.title}</h3>
                <p className="text-sm text-brand-text/85 leading-relaxed">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
