/**
 * XML sitemap for search engines (Google, Bing, etc.).
 * Served at /sitemap.xml
 */

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.depotax.co.uk';

const staticPages = [
  { path: '', priority: 1, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/pricing', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/who-we-serve', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/knowledge', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/contact', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/sitemap', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
];

const serviceSlugs = [
  'annual-accounts', 'bookkeeping', 'management-accounts', 'payroll', 'vat-returns',
  'confirmation-statement', 'self-assessment', 'corporation-tax', 'capital-gains-tax',
  'tax-planning', 'non-resident-landlord-tax', 'startup-support', 'company-formation',
  'cashflow-forecasting', 'cfo-advisory', 'business-growth-planning', 'landlord-accounting',
  'spv-accounting', 'property-tax-returns', 'hmo-holiday-let-accounting',
];

const knowledgePaths = [
  '/knowledge/tax-guides',
  '/knowledge/accounting-guides',
  '/knowledge/business-advice',
  '/knowledge/tax-planning-tips',
  '/knowledge/checklists',
  '/knowledge/tax-calendar',
  '/knowledge/faqs',
];

function buildSitemapEntries() {
  const now = new Date().toISOString();
  const entries = [
    ...staticPages.map(({ path, priority, changeFrequency }) => ({
      url: `${baseUrl}${path || '/'}`,
      lastModified: now,
      changeFrequency,
      priority,
    })),
    ...serviceSlugs.map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
    ...knowledgePaths.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    })),
  ];
  return entries;
}

function toXml(entries) {
  const urlElements = entries
    .map(
      (e) =>
        `  <url>\n    <loc>${escapeXml(e.url)}</loc>\n    <lastmod>${e.lastModified}</lastmod>\n    <changefreq>${e.changeFrequency}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlElements}\n</urlset>`;
}

function escapeXml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const entries = buildSitemapEntries();
  const xml = toXml(entries);
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
