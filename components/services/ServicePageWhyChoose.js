'use client';

import { HiCheck } from 'react-icons/hi2';

export default function ServicePageWhyChoose({ data }) {
  const { title, intro, points } = data;
  if (!points || points.length === 0) return null;

  return (
    <section
      className="relative py-12 sm:py-16 md:py-20 bg-white"
      aria-labelledby="service-why-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="service-why-heading"
          className="text-xl sm:text-2xl font-bold text-brand-navy tracking-tight mb-4"
        >
          {title}
        </h2>
        {intro && (
          <p className="text-base text-brand-text/85 leading-relaxed mb-6">
            {intro}
          </p>
        )}
        <ul className="space-y-3">
          {points.map((point, i) => (
            <li key={i} className="flex items-center gap-3">
              <HiCheck className="w-5 h-5 text-brand-accent flex-shrink-0" aria-hidden />
              <span className="text-brand-text/90">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
