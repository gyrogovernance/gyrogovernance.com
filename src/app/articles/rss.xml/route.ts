import { NextResponse } from 'next/server';
import { listArticles } from '@/lib/articles';

export const dynamic = 'force-static';

function escape(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const site = 'https://gyrogovernance.com';
  const metas = listArticles();
  const items = metas.slice(0, 30).map((m) => {
    const link = `${site}/articles/${m.slug}`;
    return `
      <item>
        <title>${escape(m.title)}</title>
        <link>${link}</link>
        <guid>${link}</guid>
        <pubDate>${new Date(m.date).toUTCString()}</pubDate>
        <description>${escape(m.excerpt || '')}</description>
      </item>`;
  }).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>Gyro Governance — Articles</title>
      <link>${site}/articles</link>
      <description>Research articles, featured insights, and reports.</description>
      ${items}
    </channel>
  </rss>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 's-maxage=300, stale-while-revalidate=86400',
    },
  });
}


