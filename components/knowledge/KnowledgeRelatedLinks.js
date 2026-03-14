'use client';

import Link from '@/components/ui/Link';
import { IconChevronRight } from '@/components/ui/Icons';

/**
 * Related topics / helpful links section for Knowledge category pages.
 * links: [{ label, href }]
 */
export default function KnowledgeRelatedLinks({ title = 'Related services', links }) {
  if (!links?.length) return null;

  return (
    <section
      className="bg-brand-grayLight/40 border-t border-brand-grayBorder/60 py-12 sm:py-14"
      aria-labelledby="related-links-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="related-links-heading" className="text-xl font-bold text-brand-navy tracking-tight mb-6">
          {title}
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {links.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group flex items-center gap-2 py-2.5 pr-2 text-sm text-brand-text hover:text-brand-accent transition-colors duration-200 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/40"
              >
                <IconChevronRight className="w-4 h-4 text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" aria-hidden />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
