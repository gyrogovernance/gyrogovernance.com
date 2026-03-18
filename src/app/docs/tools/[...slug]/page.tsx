import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import DocsToc from '@/components/DocsToc';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export function generateStaticParams() {
  const params: { slug: string[] }[] = [];

  console.log('Starting generateStaticParams for tools');

  try {
    const cwd = process.cwd();
    console.log('Current working directory:', cwd);

    const docsDir = path.join(cwd, 'src', 'content', 'docs', 'tools');
    console.log('Looking for docs in:', docsDir);

    // Check if directory exists
    if (!fs.existsSync(docsDir)) {
      console.error('Tools docs directory not found at:', docsDir);
      return params;
    }

    console.log('Tools docs directory found, reading files...');

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
    console.log(`Successfully generated ${params.length} static params for tools`);

  } catch (error) {
    console.error('Failed to generate static params for tools:', error);
    // Return empty array on error to prevent build failure
  }

  return params;
}

export default async function DocPage({ params }: PageProps) {
  const { slug } = await params;
  if (!slug || !Array.isArray(slug) || slug.length === 0) {
    notFound();
  }
  const slugPath = slug.join('/');

  // Read the markdown file
  const filePath = path.join(process.cwd(), 'src', 'content', 'docs', 'tools', `${slugPath}.md`);

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
      <div className="space-y-4 sm:space-y-6">
        {/* Breadcrumb */}
        <div className="mb-4 sm:mb-6">
          <Link href="/docs" className="text-classic-blue hover:text-classic-purple transition-colors">
            ← Documentation
          </Link>
          <span className="mx-2 text-foreground-secondary">/</span>
          <Link href="/docs/tools" className="text-classic-blue hover:text-classic-purple transition-colors">
            Tools
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
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-foreground">
            {data.title}
          </h1>
        )}

        {/* Description */}
        {data.description && (
          <p className="text-base sm:text-lg text-foreground-secondary mb-4 sm:mb-6">{data.description}</p>
        )}

        {/* Content */}
        <article className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-code:text-foreground prose-a:text-classic-blue hover:prose-a:text-classic-purple">
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </article>
      </div>
    </>
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  if (!slug || !Array.isArray(slug) || slug.length === 0) {
    return {
      title: 'Tools Documentation',
      description: 'Tools documentation',
    };
  }
  const slugPath = slug.join('/');

  try {
    const filePath = path.join(process.cwd(), 'src', 'content', 'docs', 'tools', `${slugPath}.md`);
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContents);

    return {
      title: data.title || `${slugPath.replace(/_/g, ' ')} | Tools`,
      description: data.description || 'Tools documentation',
    };
  } catch {
    return {
      title: `${slugPath.replace(/_/g, ' ')} | Tools`,
    };
  }
}