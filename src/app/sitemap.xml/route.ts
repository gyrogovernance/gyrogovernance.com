import { NextResponse } from 'next/server';
import { listArticles } from '@/lib/articles';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';

const CONTENT_DIR = path.join(process.cwd(), 'src', 'content');

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toISOString().split('T')[0]; // YYYY-MM-DD format
}

function getDocsPages(site: string): Array<{ loc: string; lastmod: string; changefreq: string; priority: number }> {
  const docsPages: Array<{ loc: string; lastmod: string; changefreq: string; priority: number }> = [];

  try {
    const docsDir = path.join(CONTENT_DIR, 'docs');

    // Get all repo directories
    const repos = fs.readdirSync(docsDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    repos.forEach(repo => {
      const repoDir = path.join(docsDir, repo);

      // Add the repo overview page
      docsPages.push({
        loc: `${site}/docs/${repo}`,
        lastmod: '2025-12-12', // Use a recent date for docs
        changefreq: 'monthly',
        priority: 0.8,
      });

      // Recursively get all markdown files
      function scanDir(dirPath: string, relativePath: string[] = []): void {
        const entries = fs.readdirSync(dirPath, { withFileTypes: true });

        entries.forEach(entry => {
          const entryPath = path.join(dirPath, entry.name);

          if (entry.isDirectory()) {
            // Recurse into subdirectories
            scanDir(entryPath, [...relativePath, entry.name]);
          } else if (entry.isFile() && entry.name.endsWith('.md')) {
            // Add markdown file as a page
            const slug = entry.name.replace(/\.md$/i, '');
            const fullPath = [...relativePath, slug].join('/');

            docsPages.push({
              loc: `${site}/docs/${repo}/${fullPath}`,
              lastmod: '2025-12-12',
              changefreq: 'monthly',
              priority: 0.7,
            });
          }
        });
      }

      scanDir(repoDir);
    });
  } catch (error) {
    console.warn('Error scanning docs for sitemap:', error);
  }

  return docsPages;
}

export async function GET() {
  const site = 'https://gyrogovernance.com';
  const articles = listArticles();

  // Static pages
  const staticPages = [
    { loc: site, lastmod: '2025-09-28', changefreq: 'weekly', priority: 1.0 },
    { loc: `${site}/about`, lastmod: '2024-09-26', changefreq: 'monthly', priority: 0.8 },
    { loc: `${site}/articles`, lastmod: '2025-09-28', changefreq: 'weekly', priority: 0.9 },
    { loc: `${site}/docs`, lastmod: '2025-12-12', changefreq: 'weekly', priority: 0.9 },
    { loc: `${site}/github`, lastmod: '2025-10-14', changefreq: 'monthly', priority: 0.8 },
    { loc: `${site}/glossary`, lastmod: '2025-10-14', changefreq: 'monthly', priority: 0.8 },
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

  // Docs pages
  const docsPages = getDocsPages(site);

  // Combine all pages
  const allPages = [...staticPages, ...articlePages, ...docsPages];
  
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

