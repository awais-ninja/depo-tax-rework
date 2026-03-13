import KnowledgeCategoryHero from '@/components/knowledge/KnowledgeCategoryHero';
import KnowledgeChecklistCard from '@/components/knowledge/KnowledgeChecklistCard';
import KnowledgeRelatedLinks from '@/components/knowledge/KnowledgeRelatedLinks';
import KnowledgeFinalCTA from '@/components/knowledge/KnowledgeFinalCTA';

export const metadata = {
  title: 'Downloadable Checklists | Accounting & Tax Checklists | DepoTax',
  description:
    'Free downloadable checklists for Self Assessment, bookkeeping, VAT, annual accounts, and more. Stay organised with DepoTax.',
};

const CHECKLISTS = [
  {
    title: 'Self Assessment Preparation Checklist',
    summary: 'Steps and documents to gather before filing your Self Assessment tax return.',
    href: '/knowledge/checklists',
  },
  {
    title: 'Startup Accounting Checklist',
    summary: 'Essential accounting and compliance tasks when starting a business.',
    href: '/knowledge/checklists',
  },
  {
    title: 'Bookkeeping Records Checklist',
    summary: 'Records to keep for accurate bookkeeping and tax compliance.',
    href: '/knowledge/checklists',
  },
  {
    title: 'VAT Return Preparation Checklist',
    summary: 'What to have ready before completing and submitting your VAT return.',
    href: '/knowledge/checklists',
  },
  {
    title: 'Annual Accounts Preparation Checklist',
    summary: 'Information and documents needed for year-end accounts.',
    href: '/knowledge/checklists',
  },
  {
    title: 'Landlord Record-Keeping Checklist',
    summary: 'Records landlords should keep for rental income and expenses.',
    href: '/knowledge/checklists',
  },
];

const RELATED_LINKS = [
  { label: 'Tax Guides', href: '/knowledge/tax-guides' },
  { label: 'Accounting Guides', href: '/knowledge/accounting-guides' },
  { label: 'Tax Calendar', href: '/knowledge/tax-calendar' },
];

export default function ChecklistsPage() {
  return (
    <>
      <KnowledgeCategoryHero
        sectionLabel="Downloadable Checklists"
        heading="Downloadable Checklists"
        paragraph="This section provides useful checklists to help individuals and businesses stay organised with accounting, tax, and compliance tasks. Download and use them as practical references."
      />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CHECKLISTS.map((item) => (
            <KnowledgeChecklistCard
              key={item.title}
              title={item.title}
              summary={item.summary}
              href={item.href}
            />
          ))}
        </div>
      </section>
      <KnowledgeRelatedLinks title="Related guides" links={RELATED_LINKS} />
      <KnowledgeFinalCTA />
    </>
  );
}
