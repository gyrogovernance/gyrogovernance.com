import { NextResponse } from 'next/server';
import { listArticles } from '@/lib/articles';

export const dynamic = 'force-static';

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toISOString().split('T')[0]; // YYYY-MM-DD format
}

export async function GET() {
  const site = 'https://gyrogovernance.com';
  const articles = listArticles();
  
  // Static pages
  const staticPages = [
    { loc: site, lastmod: '2025-09-28', changefreq: 'weekly', priority: 1.0 },
    { loc: `${site}/about`, lastmod: '2024-09-26', changefreq: 'monthly', priority: 0.8 },
    { loc: `${site}/articles`, lastmod: '2025-09-28', changefreq: 'weekly', priority: 0.9 },
    { loc: `${site}/privacy-policy`, lastmod: '2024-09-26', changefreq: 'yearly', priority: 0.3 },
    { loc: `${site}/cookie-policy`, lastmod: '2024-09-26', changefreq: 'yearly', priority: 0.3 },
  ];
  
  // Article pages
  const articlePages = articles.map(article => ({
    loc: `${site}/articles/${article.slug}`,
    lastmod: formatDate(article.date),
    changefreq: 'monthly',
    priority: article.featured ? 0.9 : 0.7,
  }));
  
  // Combine all pages
  const allPages = [...staticPages, ...articlePages];
  
  // Generate XML
  const urls = allPages.map(page => `  <url>
    <loc>${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n');
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
  
  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=86400, stale-while-revalidate=604800',
    },
  });
}

