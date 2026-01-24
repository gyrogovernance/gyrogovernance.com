import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import DocsToc from '@/components/DocsToc';

interface PageProps {
  params: { slug: string[] };
}

export function generateStaticParams() {
  const params: { slug: string[] }[] = [];

  console.log('Starting generateStaticParams for superintelligence');

  try {
    const cwd = process.cwd();
    console.log('Current working directory:', cwd);

    const docsDir = path.join(cwd, 'src', 'content', 'docs', 'superintelligence');
    console.log('Looking for docs in:', docsDir);

    // Check if directory exists
    if (!fs.existsSync(docsDir)) {
      console.error('Superintelligence docs directory not found at:', docsDir);
      return params;
    }

    console.log('Superintelligence docs directory found, reading files...');

    // Get all files recursively
    function getAllFiles(dirPath: string, relativePath: string[] = []): void {
      try {
        const entries = fs.readdirSync(dirPath, { withFileTypes: true });
        console.log(`Found ${entries.length} entries in ${dirPath}`);

        for (const entry of entries) {
          if (entry.isFile() && entry.name.endsWith('.md')) {
            const slug = entry.name.replace('.md', '');
            params.push({ slug: [...relativePath, slug] });
            console.log('Added param:', { slug: [...relativePath, slug] });
          } else if (entry.isDirectory()) {
            const subDirPath = path.join(dirPath, entry.name);
            getAllFiles(subDirPath, [...relativePath, entry.name]);
          }
        }
      } catch (error) {
        console.error(`Error reading directory ${dirPath}:`, error);
      }
    }

    getAllFiles(docsDir);
    console.log(`Successfully generated ${params.length} static params for superintelligence`);

  } catch (error) {
    console.error('Failed to generate static params for superintelligence:', error);
    // Return empty array on error to prevent build failure
  }

  return params;
}

export default async function DocPage({ params }: PageProps) {
  const { slug } = params;
  if (!slug || !Array.isArray(slug) || slug.length === 0) {
    notFound();
  }
  const slugPath = slug.join('/');

  // Read the markdown file
  const filePath = path.join(process.cwd(), 'src', 'content', 'docs', 'superintelligence', `${slugPath}.md`);

  let content: string;
  let data: { title?: string; description?: string };

  try {
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const parsed = matter(fileContents);
    content = parsed.content;
    data = parsed.data;
  } catch {
    notFound();
  }

  // Use the existing renderMarkdown function from lib/docs.ts
  const { renderMarkdown } = await import('@/lib/docs');
  const htmlContent = await renderMarkdown(content);

  return (
    <>
      {/* Table of Contents - renders via portal to right sidebar */}
      <DocsToc htmlContent={htmlContent} />

      {/* Main Content */}
      <div>
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/docs" className="text-apple-blue hover:text-apple-purple transition-colors">
            ← Documentation
          </Link>
          <span className="mx-2 text-foreground-secondary">/</span>
          <Link href="/docs/superintelligence" className="text-apple-blue hover:text-apple-purple transition-colors">
            Superintelligence
          </Link>
          {slug && slug.length > 1 && (
            <>
              <span className="mx-2 text-foreground-secondary">/</span>
              <span className="text-foreground-secondary">{slug.slice(0, -1).join(' / ')}</span>
            </>
          )}
          <span className="mx-2 text-foreground-secondary">/</span>
          <span className="text-foreground-secondary">{slug[slug.length - 1].replace(/_/g, ' ')}</span>
        </div>

        {/* Title */}
        {!content.trim().startsWith('# ') && data.title && (
          <h1 className="text-4xl font-bold mb-8 text-foreground">{data.title}</h1>
        )}

        {/* Description */}
        {data.description && (
          <p className="text-xl text-foreground-secondary mb-8">{data.description}</p>
        )}

        {/* Content */}
        <article className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-code:text-foreground prose-a:text-apple-blue hover:prose-a:text-apple-purple">
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </article>
      </div>
    </>
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = params;
  if (!slug || !Array.isArray(slug) || slug.length === 0) {
    return {
      title: 'Superintelligence Documentation',
      description: 'Superintelligence documentation',
    };
  }
  const slugPath = slug.join('/');

  try {
    const filePath = path.join(process.cwd(), 'src', 'content', 'docs', 'superintelligence', `${slugPath}.md`);
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContents);

    return {
      title: data.title || `${slugPath.replace(/_/g, ' ')} | Superintelligence`,
      description: data.description || 'Superintelligence documentation',
    };
  } catch {
    return {
      title: `${slugPath.replace(/_/g, ' ')} | Superintelligence`,
    };
  }
}