import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import DocsToc from '@/components/DocsToc';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
  const { promises: fs } = await import('fs');
  const path = await import('path');

  const params: { slug: string[] }[] = [];

  try {
    const docsDir = path.join(process.cwd(), 'src', 'content', 'docs', 'tools');

    // Get all files recursively
    async function getAllFiles(dirPath: string, relativePath: string[] = []): Promise<void> {
      const entries = await fs.readdir(dirPath, { withFileTypes: true });

      for (const entry of entries) {
        if (entry.isFile() && entry.name.endsWith('.md')) {
          const slug = entry.name.replace('.md', '');
          params.push({ slug: [...relativePath, slug] });
        } else if (entry.isDirectory()) {
          const subDirPath = path.join(dirPath, entry.name);
          await getAllFiles(subDirPath, [...relativePath, entry.name]);
        }
      }
    }

    await getAllFiles(docsDir);

  } catch (error) {
    console.warn('Could not generate static params for tools:', error);
  }

  return params;
}

export default async function DocPage({ params }: PageProps) {
  const { slug } = await params;
  const slugPath = slug.join('/');

  // Read the markdown file
  const filePath = path.join(process.cwd(), 'src', 'content', 'docs', 'tools', `${slugPath}.md`);

  let content: string;
  let data: { title?: string; description?: string };

  try {
    const fileContents = await fs.readFile(filePath, 'utf-8');
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
          <Link href="/docs/tools" className="text-apple-blue hover:text-apple-purple transition-colors">
            Tools
          </Link>
          {slug.length > 1 && (
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
  const { slug } = await params;
  const slugPath = slug.join('/');

  try {
    const filePath = path.join(process.cwd(), 'src', 'content', 'docs', 'tools', `${slugPath}.md`);
    const fileContents = await fs.readFile(filePath, 'utf-8');
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