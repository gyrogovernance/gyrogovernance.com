import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type ArticleCategory = 'featured' | 'reports';

export interface ArticleMeta {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  date: string; // ISO string
  coverImage?: string;
  tags?: string[];
  featured?: boolean; // New: pin articles regardless of category
}

export interface Article extends ArticleMeta {
  content: string;
}

const CONTENT_DIR = path.join(process.cwd(), 'src', 'content', 'articles');

function ensureContentDir() {
  if (!fs.existsSync(CONTENT_DIR)) {
    fs.mkdirSync(CONTENT_DIR, { recursive: true });
  }
}

function parseArticleFile(filePath: string): Article | null {
  try {
    const file = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(file);
    const slug = path.basename(filePath).replace(/\.md$/i, '');
    if (!data.title || !data.category || !data.date) return null;
    const article: Article = {
      slug,
      title: String(data.title),
      excerpt: String(data.excerpt || ''),
      category: String(data.category) as ArticleCategory,
      date: String(data.date),
      coverImage: data.coverImage ? String(data.coverImage) : undefined,
      tags: Array.isArray(data.tags) ? (data.tags as unknown[]).map(String) : undefined,
      featured: typeof data.featured === 'boolean' ? (data.featured as boolean) : undefined,
      content,
    };
    return article;
  } catch {
    return null;
  }
}

export function listArticles(category?: ArticleCategory, tag?: string): ArticleMeta[] {
  ensureContentDir();
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.toLowerCase().endsWith('.md'));
  const articles: Article[] = files
    .map((f) => parseArticleFile(path.join(CONTENT_DIR, f)))
    .filter((a): a is Article => Boolean(a));
  let items = category ? articles.filter((a) => a.category === category) : articles;
  if (tag) {
    const t = tag.toLowerCase();
    items = items.filter((a) => (a.tags || []).some((x) => x.toLowerCase() === t));
  }
  return items
    .slice()
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(({ content, ...meta }) => meta);
}

export function getArticleBySlug(slug: string): Article | undefined {
  ensureContentDir();
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return undefined;
  return parseArticleFile(filePath) ?? undefined;
}

export function listAllTags(): string[] {
  ensureContentDir();
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.toLowerCase().endsWith('.md'));
  const tags = new Set<string>();
  files.forEach((f) => {
    const parsed = parseArticleFile(path.join(CONTENT_DIR, f));
    if (parsed?.tags) parsed.tags.forEach((t) => tags.add(t));
  });
  return Array.from(tags).sort((a, b) => a.localeCompare(b));
}

// New: list featured (pinned) articles. Backwards compatible with legacy category: 'featured'.
export function listFeaturedArticles(tag?: string): ArticleMeta[] {
  ensureContentDir();
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.toLowerCase().endsWith('.md'));
  const articles: Article[] = files
    .map((f) => parseArticleFile(path.join(CONTENT_DIR, f)))
    .filter((a): a is Article => Boolean(a));
  let items = articles.filter((a) => a.featured === true || a.category === 'featured');
  if (tag) {
    const t = tag.toLowerCase();
    items = items.filter((a) => (a.tags || []).some((x) => x.toLowerCase() === t));
  }
  return items
    .slice()
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(({ content, ...meta }) => meta);
}


