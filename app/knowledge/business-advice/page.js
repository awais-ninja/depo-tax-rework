import KnowledgeCategoryHero from '@/components/knowledge/KnowledgeCategoryHero';
import KnowledgeResourceCard from '@/components/knowledge/KnowledgeResourceCard';
import KnowledgeRelatedLinks from '@/components/knowledge/KnowledgeRelatedLinks';
import KnowledgeFinalCTA from '@/components/knowledge/KnowledgeFinalCTA';

export const metadata = {
  title: 'Business Advice | Startups & Growing Companies | DepoTax',
  description:
    'Practical business advice for startups, directors, and growing companies. Financial foundations, structure, cashflow, and growth from DepoTax.',
};

const GUIDES = [
  {
    title: 'Financial Foundations for Startups',
    summary: 'Essential financial and compliance steps when starting a business, from formation to first year.',
    categoryTag: 'Business Advice',
    href: '/knowledge/business-advice',
  },
  {
    title: 'Choosing the Right Business Structure',
    summary: 'Sole trader, limited company, and other structures: what to consider for tax and liability.',
    categoryTag: 'Business Advice',
    href: '/knowledge/business-advice',
  },
  {
    title: 'Why Cashflow Visibility Matters',
    summary: 'How understanding cashflow helps you plan, pay bills, and grow with confidence.',
    categoryTag: 'Business Advice',
    href: '/knowledge/business-advice',
  },
  {
    title: 'Preparing for Business Growth',
    summary: 'Practical steps to scale without losing control of finances and compliance.',
    categoryTag: 'Business Advice',
    href: '/knowledge/business-advice',
  },
  {
    title: 'Common Accounting Mistakes Small Businesses Make',
    summary: 'Frequent pitfalls and how to avoid them with better records and planning.',
    categoryTag: 'Business Advice',
    href: '/knowledge/business-advice',
  },
  {
    title: 'When a Growing Business Needs Advisory Support',
    summary: 'Signs that strategic financial and advisory support could help your business.',
    categoryTag: 'Business Advice',
    href: '/knowledge/business-advice',
  },
];

const RELATED_SERVICES = [
  { label: 'Startup Support', href: '/services/startup-support' },
  { label: 'Company Formation', href: '/services/company-formation' },
  { label: 'Cashflow Forecasting', href: '/services/cashflow-forecasting' },
  { label: 'CFO Advisory', href: '/services/cfo-advisory' },
  { label: 'Business Growth Planning', href: '/services/business-growth-planning' },
];

export default function BusinessAdvicePage() {
  return (
    <>
      <KnowledgeCategoryHero
        sectionLabel="Business Advice"
        heading="Business Advice"
        paragraph="This section provides practical business-focused guidance for startups, directors, and growing companies looking for clearer financial and compliance support. Use it to make better decisions and stay on track."
      />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {GUIDES.map((guide) => (
            <KnowledgeResourceCard
              key={guide.title}
              title={guide.title}
              summary={guide.summary}
              categoryTag={guide.categoryTag}
              ctaText="Read More"
              href={guide.href}
            />
          ))}
        </div>
      </section>
      <KnowledgeRelatedLinks title="Related services" links={RELATED_SERVICES} />
      <KnowledgeFinalCTA />
    </>
  );
}
