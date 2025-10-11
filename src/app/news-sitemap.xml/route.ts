import { NextResponse } from 'next/server';
import { listArticles } from '@/lib/articles';

export const dynamic = 'force-static';

function formatGoogleNewsDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toISOString(); // Full ISO 8601 format for Google News
}

export async function GET() {
  const articles = listArticles();
  
  // Google News only indexes articles from the last 2 days, but we'll include all
  // to keep the sitemap updated as older articles age out naturally
  const newsArticles = articles
    .filter(article => article.featured) // Only featured articles
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Newest first
  
  // Generate XML entries for each article
  const urls = newsArticles.map(article => `  <url>
    <loc>https://gyrogovernance.com/articles/${article.slug}</loc>
    <news:news>
      <news:publication>
        <news:name>Gyro Governance</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${formatGoogleNewsDate(article.date)}</news:publication_date>
      <news:title>${escapeXml(article.title)}</news:title>
      <news:keywords>${article.tags?.join(', ') || ''}</news:keywords>
    </news:news>
  </url>`).join('\n');
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${urls}
</urlset>`;
  
  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400', // Refresh more frequently for news
    },
  });
}

// Helper function to escape XML special characters
function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

