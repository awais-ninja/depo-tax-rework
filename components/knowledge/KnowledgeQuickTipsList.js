'use client';

import { IconCheckCircle } from '@/components/ui/Icons';

/**
 * Simple list of quick-tip items for Tax Planning Tips page.
 * items: string[]
 */
export default function KnowledgeQuickTipsList({ title = 'Quick tips', items }) {
  if (!items?.length) return null;

  return (
    <section className="py-10 sm:py-12 border-t border-brand-grayBorder/60" aria-labelledby="quick-tips-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="quick-tips-heading" className="text-xl font-bold text-brand-navy tracking-tight mb-6">
          {title}
        </h2>
        <ul className="space-y-3">
          {items.map((tip) => (
            <li key={tip} className="flex items-start gap-3 text-brand-text/90">
              <IconCheckCircle className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" aria-hidden />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
