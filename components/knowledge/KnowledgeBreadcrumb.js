'use client';

import Link from '@/components/ui/Link';

/**
 * Breadcrumb for Knowledge section: Knowledge > [Section name]
 */
export default function KnowledgeBreadcrumb({ sectionLabel }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-brand-text/80">
        <li>
          <Link href="/knowledge" className="hover:text-brand-accent transition-colors duration-200">
            Knowledge
          </Link>
        </li>
        {sectionLabel && (
          <>
            <li aria-hidden className="text-brand-grayBorder">/</li>
            <li className="text-brand-navy font-medium" aria-current="page">
              {sectionLabel}
            </li>
          </>
        )}
      </ol>
    </nav>
  );
}
