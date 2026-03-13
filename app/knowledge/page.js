import KnowledgeHero from '@/components/knowledge/KnowledgeHero';
import KnowledgeCategoriesGrid from '@/components/knowledge/KnowledgeCategoriesGrid';
import KnowledgeFeaturedResources from '@/components/knowledge/KnowledgeFeaturedResources';
import KnowledgeTaxCalendarPreview from '@/components/knowledge/KnowledgeTaxCalendarPreview';
import KnowledgeFaqPreview from '@/components/knowledge/KnowledgeFaqPreview';
import KnowledgeFinalCTA from '@/components/knowledge/KnowledgeFinalCTA';

export const metadata = {
  title: 'Knowledge Hub',
  description:
    'Trusted tax guides, accounting resources, checklists, and practical advice from DepoTax. A professional resource centre for individuals and businesses in the UK.',
};

export default function KnowledgePage() {
  return (
    <>
      <KnowledgeHero />
      <KnowledgeCategoriesGrid />
      <KnowledgeFeaturedResources />
      <KnowledgeTaxCalendarPreview />
      <KnowledgeFaqPreview />
      <KnowledgeFinalCTA />
    </>
  );
}
