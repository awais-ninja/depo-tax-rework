/**
 * Dynamic robots.txt for search engine crawlers (Google, Bing, etc.).
 * Served at /robots.txt
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.depotax.co.uk';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/admin/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl.replace(/^https?:\/\//, ''),
  };
}
