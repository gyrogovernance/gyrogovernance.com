import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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

  try {
    const entries = fs.readdirSync(docsDir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isFile() && entry.name.endsWith('.md')) {
        const slug = entry.name.replace('.md', '');
        const filePath = path.join(docsDir, entry.name);

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
        const subDirPath = path.join(docsDir, entry.name);
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

export default async function ToolsPage() {
  const docs = await getDocs('tools');

  return (
    <div>
      <div className="mb-8">
        <Link href="/docs" className="text-apple-blue hover:text-apple-purple transition-colors">
          ← Back to Documentation
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-8 text-foreground">Tools Documentation</h1>

      <div className="space-y-4">
        {docs.map((doc) => {
          if (doc.isFolder && doc.children) {
            return (
              <div key={doc.slug} className="space-y-2">
                {/* Folder header */}
                <div className="text-sm text-apple-blue font-medium uppercase tracking-wide px-2 py-1 bg-apple-blue/5 rounded">
                  {doc.title}
                </div>

                {/* Folder contents */}
                <div className="ml-4 space-y-2">
                  {doc.children.map((child) => (
                    <Link
                      key={child.slug}
                      href={`/docs/tools/${doc.slug}/${child.slug}`}
                      className="block p-4 bg-surface-elevated/60 backdrop-blur-sm rounded-lg shadow-md border border-border/80 hover:shadow-lg transition-all duration-200 hover:border-apple-blue/50"
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-foreground-secondary text-sm flex-shrink-0">
                          📄
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-foreground">
                            {child.title}
                          </h3>
                          {child.description && (
                            <p className="text-sm text-foreground-secondary mt-1">{child.description}</p>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          }

          // Regular file
          return (
            <Link
              key={doc.slug}
              href={`/docs/tools/${doc.slug}`}
              className="block p-6 bg-surface-elevated/60 backdrop-blur-sm rounded-xl shadow-lg border border-border/80 hover:shadow-xl transition-all duration-200 hover:border-apple-blue/50"
            >
              <div className="flex items-start gap-3">
                <div className="text-foreground-secondary text-sm flex-shrink-0">
                  📄
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground">
                    {doc.title}
                  </h3>
                  {doc.description && (
                    <p className="text-sm text-foreground-secondary mt-1">{doc.description}</p>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}