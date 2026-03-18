import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import DocsSidebarClientWrapper from './DocsSidebarClientWrapper';

interface DocsItem {
  slug: string;
  title: string;
  description?: string;
  isFolder?: boolean;
  children?: DocsItem[];
}

interface Repo {
  id: string;
  name: string;
  description: string;
  docs: DocsItem[];
}

interface DocsSidebarProps {
  currentRepo?: string;
}

async function getDocsForRepo(repoId: string): Promise<DocsItem[]> {
  const docsDir = path.join(process.cwd(), 'src', 'content', 'docs', repoId);
  const docs: DocsItem[] = [];

  try {
    const entries = await fs.readdir(docsDir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isFile() && entry.name.endsWith('.md')) {
        const slug = entry.name.replace('.md', '');
        const filePath = path.join(docsDir, entry.name);

        try {
          const content = await fs.readFile(filePath, 'utf-8');
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
        const subDocs = await scanDocsDirectory(subDirPath, [entry.name]);

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
    console.warn(`Could not read docs directory for ${repoId}:`, error);
  }

  return docs.sort((a, b) => {
    // Folders first, then alphabetically
    if (a.isFolder && !b.isFolder) return -1;
    if (!a.isFolder && b.isFolder) return 1;
    return a.title.localeCompare(b.title);
  });
}

async function scanDocsDirectory(dirPath: string, relativePath: string[] = []): Promise<DocsItem[]> {
  const docs: DocsItem[] = [];

  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isFile() && entry.name.endsWith('.md')) {
        const slug = entry.name.replace('.md', '');
        const filePath = path.join(dirPath, entry.name);

        try {
          const content = await fs.readFile(filePath, 'utf-8');
          const { data } = matter(content);

          docs.push({
            slug: slug,  // Just the filename, not the full path
            title: data.title || slug.replace(/[_-]/g, ' '),
            description: data.description || ''
          });
        } catch (error) {
          console.warn(`Could not read ${filePath}:`, error);
        }
      } else if (entry.isDirectory()) {
        const subDirPath = path.join(dirPath, entry.name);
        const subDocs = await scanDocsDirectory(subDirPath, [...relativePath, entry.name]);

        if (subDocs.length > 0) {
          docs.push({
            slug: entry.name,  // Just the folder name, not the full path
            title: entry.name.replace(/[_-]/g, ' '),
            isFolder: true,
            children: subDocs
          });
        }
      }
    }
  } catch (error) {
    console.warn(`Could not scan directory ${dirPath}:`, error);
  }

  return docs.sort((a, b) => {
    // Folders first, then alphabetically
    const aIsFolder = a.isFolder || (a.children && a.children.length > 0);
    const bIsFolder = b.isFolder || (b.children && b.children.length > 0);
    if (aIsFolder && !bIsFolder) return -1;
    if (!aIsFolder && bIsFolder) return 1;
    return a.title.localeCompare(b.title);
  });
}

export default async function DocsSidebar({ currentRepo }: DocsSidebarProps) {
  const repositories: Repo[] = [];

  // Reorder repositories: Tools, Superintelligence, Science
  const orderedRepos = ['tools', 'superintelligence', 'science'];

  for (const repoId of orderedRepos) {
    const docs = await getDocsForRepo(repoId);
    repositories.push({
      id: repoId,
      name: getRepoName(repoId),
      description: getRepoDescription(repoId),
      docs
    });
  }

  function getRepoName(repoId: string): string {
    switch (repoId) {
      case 'tools':
        return '🧭 Tools';
      case 'science':
        return '⚡ Science';
      case 'superintelligence':
        return '❤️ Superintelligence';
      default:
        return repoId.charAt(0).toUpperCase() + repoId.slice(1);
    }
  }

  function getRepoDescription(repoId: string): string {
    switch (repoId) {
      case 'tools':
        return 'Development tools and frameworks';
      case 'science':
        return 'Research papers and foundations';
      case 'superintelligence':
        return 'AI and superintelligence research';
      default:
        return '';
    }
  }

  return (
    <DocsSidebarClientWrapper
      repositories={repositories}
    />
  );
}