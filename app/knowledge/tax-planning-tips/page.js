import KnowledgeCategoryHero from '@/components/knowledge/KnowledgeCategoryHero';
import KnowledgeResourceCard from '@/components/knowledge/KnowledgeResourceCard';
import KnowledgeQuickTipsList from '@/components/knowledge/KnowledgeQuickTipsList';
import KnowledgeRelatedLinks from '@/components/knowledge/KnowledgeRelatedLinks';
import KnowledgeFinalCTA from '@/components/knowledge/KnowledgeFinalCTA';

const FEATURED_TIPS = [
  {
    title: 'Tax Planning for Company Directors',
    summary: 'Practical ways directors can plan ahead for income, dividends, and tax efficiency within the rules.',
    categoryTag: 'Tax Planning',
    href: '/knowledge/tax-planning-tips',
  },
  {
    title: 'Planning Ahead for Self Assessment',
    summary: 'Steps to get ready for the Self Assessment deadline and avoid last-minute stress.',
    categoryTag: 'Tax Planning',
    href: '/knowledge/tax-planning-tips',
  },
  {
    title: 'Tax Considerations for Landlords',
    summary: 'Key tax points for landlords: income, expenses, and reporting for UK rental property.',
    categoryTag: 'Tax Planning',
    href: '/knowledge/tax-planning-tips',
  },
];

const QUICK_TIPS = [
  'Keep records updated year-round',
  'Review income sources early',
  'Plan ahead for filing deadlines',
  'Understand allowable expenses',
  'Review business structure when needed',
];

const RELATED_LINKS = [
  { label: 'Tax Planning', href: '/services/tax-planning' },
  { label: 'Self Assessment', href: '/services/self-assessment' },
  { label: 'Corporation Tax', href: '/services/corporation-tax' },
  { label: 'Non-Resident Landlord Tax', href: '/services/non-resident-landlord-tax' },
];

export default function TaxPlanningTipsPage() {
  return (
    <>
      <KnowledgeCategoryHero
        sectionLabel="Tax Planning Tips"
        heading="Tax Planning Tips"
        paragraph="This section shares practical tax planning ideas to help you think ahead, stay organised, and better understand your financial responsibilities. Use these tips as a starting point and seek tailored advice where needed."
      />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-xl font-bold text-brand-navy tracking-tight mb-6">Featured topics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURED_TIPS.map((tip) => (
            <KnowledgeResourceCard
              key={tip.title}
              title={tip.title}
              summary={tip.summary}
              categoryTag={tip.categoryTag}
              ctaText="Read More"
              href={tip.href}
            />
          ))}
        </div>
      </section>
      <KnowledgeQuickTipsList title="Quick tips" items={QUICK_TIPS} />
      <KnowledgeRelatedLinks title="Related services" links={RELATED_LINKS} />
      <KnowledgeFinalCTA />
    </>
  );
}
