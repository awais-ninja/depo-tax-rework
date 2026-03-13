import LegalDocumentLayout, { LegalSection } from '@/components/legal/LegalDocumentLayout';
import Link from '@/components/ui/Link';
import {
  megaMenuAbout,
  megaMenuServices,
  megaMenuPricing,
  megaMenuWhoWeServe,
  megaMenuKnowledge,
} from '@/components/layout/navConfig';

export const metadata = {
  title: 'Sitemap',
  description: 'Overview of the main sections of the DepoTax website to help visitors navigate the site.',
};

function SitemapGroup({ title, items }) {
  return (
    <ul className="space-y-2 mt-2">
      {items.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className="text-brand-accent hover:underline">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function flattenMenu(menu) {
  return menu.columns.flatMap((col) => col.items || []);
}

export default function SitemapPage() {
  const aboutItems = flattenMenu(megaMenuAbout);
  const serviceColumns = megaMenuServices.columns;
  const pricingItems = flattenMenu(megaMenuPricing);
  const whoWeServeColumns = megaMenuWhoWeServe.columns;
  const knowledgeItems = flattenMenu(megaMenuKnowledge);

  return (
    <LegalDocumentLayout
      title="Sitemap"
      introduction="This page provides an overview of the main sections of the DepoTax website to help visitors navigate the site more easily."
    >
      <LegalSection id="main" title="Main Pages">
        <ul className="space-y-2">
          <li><Link href="/" className="text-brand-accent hover:underline">Home</Link></li>
          <li><Link href="/about" className="text-brand-accent hover:underline">About Us</Link></li>
          <li><Link href="/services" className="text-brand-accent hover:underline">Services</Link></li>
          <li><Link href="/pricing" className="text-brand-accent hover:underline">Pricing</Link></li>
          <li><Link href="/who-we-serve" className="text-brand-accent hover:underline">Who We Serve</Link></li>
          <li><Link href="/knowledge" className="text-brand-accent hover:underline">Knowledge</Link></li>
          <li><Link href="/contact" className="text-brand-accent hover:underline">Contact Us</Link></li>
          <li><Link href="https://www.picktime.com/aazizandco" className="text-brand-accent hover:underline">Book a Consultation</Link></li>
        </ul>
      </LegalSection>

      <LegalSection id="about" title="About">
        <SitemapGroup title="About" items={aboutItems} />
      </LegalSection>

      <LegalSection id="services" title="Services">
        {serviceColumns.map((col) => (
          <div key={col.title || 'services'} className="mb-4">
            {col.title && (
              <h3 className="text-sm font-semibold text-brand-navy mt-4 mb-2 first:mt-0">
                {col.title}
              </h3>
            )}
            <SitemapGroup items={col.items} />
          </div>
        ))}
      </LegalSection>

      <LegalSection id="pricing" title="Pricing">
        <SitemapGroup items={pricingItems} />
      </LegalSection>

      <LegalSection id="who-we-serve" title="Who We Serve">
        {whoWeServeColumns.map((col) => (
          <div key={col.title || 'who'} className="mb-4">
            {col.title && (
              <h3 className="text-sm font-semibold text-brand-navy mt-4 mb-2 first:mt-0">
                {col.title}
              </h3>
            )}
            <SitemapGroup items={col.items} />
          </div>
        ))}
      </LegalSection>

      <LegalSection id="knowledge" title="Knowledge">
        <SitemapGroup items={knowledgeItems} />
      </LegalSection>

      <LegalSection id="legal" title="Legal & Information">
        <ul className="space-y-2">
          <li><Link href="/privacy" className="text-brand-accent hover:underline">Privacy Policy</Link></li>
          <li><Link href="/terms" className="text-brand-accent hover:underline">Terms & Conditions</Link></li>
          <li><Link href="/sitemap" className="text-brand-accent hover:underline">Sitemap</Link></li>
        </ul>
      </LegalSection>
    </LegalDocumentLayout>
  );
}
