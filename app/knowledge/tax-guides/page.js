import KnowledgeCategoryHero from '@/components/knowledge/KnowledgeCategoryHero';
import KnowledgeResourceCard from '@/components/knowledge/KnowledgeResourceCard';
import KnowledgeRelatedLinks from '@/components/knowledge/KnowledgeRelatedLinks';
import KnowledgeFinalCTA from '@/components/knowledge/KnowledgeFinalCTA';

export const metadata = {
  title: 'Tax Guides | Practical UK Tax Information | DepoTax',
  description:
    'Practical tax guides for UK individuals and businesses. Self Assessment, corporation tax, capital gains, deadlines, and tax planning from DepoTax.',
};

const GUIDES = [
  {
    title: 'Self Assessment Tax Return Guide',
    summary: 'Who needs to file, key deadlines, and what to prepare for your Self Assessment tax return in the UK.',
    categoryTag: 'Tax Guides',
    href: '/knowledge/tax-guides',
  },
  {
    title: 'Corporation Tax Basics for Limited Companies',
    summary: 'An overview of corporation tax for limited companies, including rates, filing, and payment deadlines.',
    categoryTag: 'Tax Guides',
    href: '/knowledge/tax-guides',
  },
  {
    title: 'Capital Gains Tax Explained',
    summary: 'When CGT applies, rates, allowances, and reporting requirements for individuals and businesses.',
    categoryTag: 'Tax Guides',
    href: '/knowledge/tax-guides',
  },
  {
    title: 'Non-Resident Landlord Tax Guide',
    summary: 'Tax obligations and reporting for non-resident landlords letting UK property.',
    categoryTag: 'Tax Guides',
    href: '/knowledge/tax-guides',
  },
  {
    title: 'Understanding Tax Deadlines in the UK',
    summary: 'Key filing and payment deadlines for Self Assessment, corporation tax, VAT, and more.',
    categoryTag: 'Tax Guides',
    href: '/knowledge/tax-calendar',
  },
  {
    title: 'Tax Planning Basics for Businesses',
    summary: 'Practical steps to plan ahead, use allowances, and stay organised with business tax.',
    categoryTag: 'Tax Guides',
    href: '/knowledge/tax-planning-tips',
  },
];

const RELATED_SERVICES = [
  { label: 'Self Assessment', href: '/services/self-assessment' },
  { label: 'Corporation Tax', href: '/services/corporation-tax' },
  { label: 'Capital Gains Tax', href: '/services/capital-gains-tax' },
  { label: 'Tax Planning', href: '/services/tax-planning' },
  { label: 'Non-Resident Landlord Tax', href: '/services/non-resident-landlord-tax' },
];

export default function TaxGuidesPage() {
  return (
    <>
      <KnowledgeCategoryHero
        sectionLabel="Tax Guides"
        label="Knowledge Centre"
        heading="Tax Guides"
        paragraph="This section provides practical information on common tax matters, filings, deadlines, and obligations relevant to UK individuals and businesses. Use these guides to better understand your tax responsibilities."
      />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {GUIDES.map((guide) => (
            <KnowledgeResourceCard
              key={guide.title}
              title={guide.title}
              summary={guide.summary}
              categoryTag={guide.categoryTag}
              ctaText="Read Guide"
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
