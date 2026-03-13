'use client';

import { HiUserGroup } from 'react-icons/hi2';

function isItemWithDescription(item) {
  return item && typeof item === 'object' && 'name' in item && 'description' in item;
}

export default function ServicePageWhoItsFor({ data }) {
  const { title, intro, items } = data;
  if (!items || items.length === 0) return null;

  return (
    <section
      className="relative py-12 sm:py-16 md:py-20 bg-brand-grayLight/30"
      aria-labelledby="service-who-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="service-who-heading"
          className="text-xl sm:text-2xl font-bold text-brand-navy tracking-tight mb-4"
        >
          {title}
        </h2>
        {intro && (
          <p className="text-base text-brand-text/85 leading-relaxed mb-6">
            {intro}
          </p>
        )}
        {isItemWithDescription(items[0]) ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {items.map((item, i) => (
              <article
                key={i}
                className="rounded-xl border border-brand-grayBorder bg-white p-5 shadow-[0_2px_12px_rgba(15,23,42,0.04)]"
              >
                <h3 className="text-base font-bold text-brand-navy mb-2 flex items-center gap-2">
                  <HiUserGroup className="w-5 h-5 text-brand-accent flex-shrink-0" aria-hidden />
                  {item.name}
                </h3>
                <p className="text-sm text-brand-text/85 leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        ) : (
          <ul className="space-y-3">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <HiUserGroup className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" aria-hidden />
                <span className="text-brand-text/90">{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
