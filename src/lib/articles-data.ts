// Pre-generated articles data for client-side use
// This file is generated at build time to avoid fs usage in client components

export type ArticleCategory = 'featured' | 'reports';

export interface ArticleMeta {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  date: string; // ISO string
  coverImage?: string;
  tags?: string[];
  featured?: boolean;
}

// This will be populated by a build script or manually maintained
export const articlesData: ArticleMeta[] = [
  {
    slug: "common-governance-model",
    title: "Common Governance Model: Gyroscopic Principles and Mathematical Physics Foundations",
    excerpt: "A unifying governance model grounded in gyroscopic stability and core constructs from mathematical physics for robust, auditable AI systems.",
    category: "reports",
    date: "2025-09-28",
    coverImage: "/og-image.png",
    featured: true,
    tags: ["governance", "physics", "alignment"]
  },
  {
    slug: "gyroscope-ai-protocol",
    title: "Gyroscope AI Protocol: Structured Reasoning for LLM Alignment",
    excerpt: "A comprehensive protocol for enhancing Large Language Model performance through structured reasoning and gyroscopic alignment principles.",
    category: "featured",
    date: "2025-01-15",
    coverImage: "/og-image.png",
    featured: true,
    tags: ["AI", "protocol", "alignment", "reasoning"]
  },
  {
    slug: "gyroscopic-superintelligence",
    title: "Gyroscopic Superintelligence: Mathematical Foundations for AGI Architecture",
    excerpt: "Exploring the mathematical physics foundations for Artificial General Intelligence through gyroscopic stability principles and recursive alignment.",
    category: "featured",
    date: "2025-01-10",
    coverImage: "/og-image.png",
    featured: true,
    tags: ["AGI", "superintelligence", "mathematics", "physics"]
  }
];

export function getArticlesData(): ArticleMeta[] {
  return articlesData;
}

export function getFeaturedArticlesData(): ArticleMeta[] {
  return articlesData.filter(article => article.featured === true || article.category === 'featured');
}

export function getAllTagsData(): string[] {
  const tags = new Set<string>();
  articlesData.forEach(article => {
    if (article.tags) {
      article.tags.forEach(tag => tags.add(tag));
    }
  });
  return Array.from(tags).sort((a, b) => a.localeCompare(b));
}
