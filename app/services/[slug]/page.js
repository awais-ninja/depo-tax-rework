import { notFound } from 'next/navigation';
import { getServicePageData } from '@/data/services/servicePageData';
import { getAllServiceSlugs } from '@/data/services/config';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';

/**
 * Generate static params for all known service slugs.
 */
export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

/**
 * Dynamic metadata from service page data.
 */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = getServicePageData(slug);
  if (!data) return { title: 'Service Not Found' };
  return {
    title: data.seo?.title ?? `${data.title} | DepoTax`,
    description: data.seo?.description ?? undefined,
  };
}

/**
 * Individual service page — rendered by reusable template and data.
 */
export default async function ServiceSlugPage({ params }) {
  const { slug } = await params;
  const data = getServicePageData(slug);

  if (!data) notFound();

  return <ServicePageTemplate data={data} />;
}
