import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import DocsOverviewList from '@/components/DocsOverviewList';

interface DocsItem {
  slug: string;
  title: string;
  description?: string;
  isFolder?: boolean;
  children?: DocsItem[];
}

async function getDocs(repo: string): Promise<DocsItem[]> {
  const docsDir = path.join(process.cwd(), 'src', 'content', 'docs', repo);
  const docs: DocsItem[] = [];

  // In development, Next.js might change the working directory
  // Let's try to find the correct path
  const altDocsDir = path.join(__dirname, '..', '..', '..', 'content', 'docs', repo);
  const finalDocsDir = fs.existsSync(docsDir) ? docsDir : altDocsDir;

  try {
    const entries = fs.readdirSync(finalDocsDir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isFile() && entry.name.endsWith('.md')) {
        const slug = entry.name.replace('.md', '');
        const filePath = path.join(finalDocsDir, entry.name);

        try {
          const content = fs.readFileSync(filePath, 'utf-8');
          const { data } = matter(content);

          docs.push({
            slug,
            title: data.title || slug.replace(/[_-]/g, ' '),
            description: data.description || ''
          });
        } catch (error) {
          console.warn(`Could not read ${filePath}:`, error);
        }
      } else if (entry.isDirectory()) {
        const subDirPath = path.join(finalDocsDir, entry.name);
        const subDocs = await scanDocsDirectory(subDirPath);

        if (subDocs.length > 0) {
          docs.push({
            slug: entry.name,
            title: entry.name.replace(/[_-]/g, ' '),
            isFolder: true,
            children: subDocs
          });
        }
      }
    }
  } catch (error) {
    console.warn(`Could not read docs directory for ${repo}:`, error);
  }

  return docs.sort((a, b) => {
    // Folders first, then alphabetically
    if (a.isFolder && !b.isFolder) return -1;
    if (!a.isFolder && b.isFolder) return 1;
    return a.title.localeCompare(b.title);
  });
}

async function scanDocsDirectory(dirPath: string): Promise<DocsItem[]> {
  const docs: DocsItem[] = [];

  try {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isFile() && entry.name.endsWith('.md')) {
        const slug = entry.name.replace('.md', '');
        const filePath = path.join(dirPath, entry.name);

        try {
          const content = fs.readFileSync(filePath, 'utf-8');
          const { data } = matter(content);

          docs.push({
            slug,
            title: data.title || slug.replace(/[_-]/g, ' '),
            description: data.description || ''
          });
        } catch (error) {
          console.warn(`Could not read ${filePath}:`, error);
        }
      }
    }
  } catch (error) {
    console.warn(`Could not scan directory ${dirPath}:`, error);
  }

  return docs.sort((a, b) => a.title.localeCompare(b.title));
}

export default async function SciencePage() {
  const docs = await getDocs('science');

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="mb-4 sm:mb-6">
        <Link href="/docs" className="text-apple-blue hover:text-apple-purple transition-colors">
          Back to Documentation
        </Link>
      </div>

      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
        Science Documentation
      </h1>

      <DocsOverviewList basePath="science" docs={docs} />
    </div>
  );
}