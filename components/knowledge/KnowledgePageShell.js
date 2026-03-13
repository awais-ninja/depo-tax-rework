import KnowledgeBreadcrumb from './KnowledgeBreadcrumb';

/**
 * Wrapper for Knowledge sub-pages: breadcrumb, title, optional intro.
 * Use for placeholder and future content pages.
 */
export default function KnowledgePageShell({ sectionLabel, title, children, intro }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
      <KnowledgeBreadcrumb sectionLabel={sectionLabel} />
      <h1 className="text-3xl sm:text-4xl font-semibold text-brand-accent mb-4">{title}</h1>
      {intro && <p className="text-brand-text mb-8 max-w-2xl">{intro}</p>}
      {children}
    </div>
  );
}
