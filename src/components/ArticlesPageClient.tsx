'use client';

import Link from "next/link";
import Image from "next/image";
import { getArticlesData, getFeaturedArticlesData } from "@/lib/articles-data";
import { useState, useEffect, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const categories = [
  { key: undefined, label: "All" },
  { key: "featured", label: "Featured" },
  { key: "reports", label: "Reports" },
  { key: "reviews", label: "Reviews" },
  { key: "research", label: "Research" },
] as const;

export default function ArticlesPageClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selected, setSelected] = useState<"featured" | "reports" | "reviews" | "research" | undefined>(undefined);
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 6;

  // Get all data
  const allArticles = getArticlesData();
  const featuredArticles = getFeaturedArticlesData();

  // Update state from URL params on mount and when searchParams change
  useEffect(() => {
    const category = searchParams.get('category') as "featured" | "reports" | "reviews" | "research" | undefined;
    const pageNum = Math.max(1, parseInt(searchParams.get('page') || '1', 10) || 1);
    
    setSelected(category || undefined);
    setPage(pageNum);
  }, [searchParams]);

  // Filter articles based on selection
  const filteredArticles = useMemo(() => {
    if (selected === 'featured') {
      return featuredArticles;
    }
    if (selected === 'reports') {
      return allArticles.filter(article => article.category === 'reports');
    }
    if (selected === 'reviews') {
      return allArticles.filter(article => article.category === 'reviews');
    }
    if (selected === 'research') {
      return allArticles.filter(article => article.category === 'research');
    }
    return allArticles;
  }, [selected, allArticles, featuredArticles]);

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / PAGE_SIZE));
  const items = filteredArticles.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  // Update URL when filters change
  const updateURL = (newCategory?: string, newPage?: number) => {
    const params = new URLSearchParams();
    if (newCategory) params.set('category', newCategory);
    if (newPage && newPage > 1) params.set('page', newPage.toString());
    
    const queryString = params.toString();
    const newURL = queryString ? `/articles?${queryString}` : '/articles';
    router.push(newURL);
  };

  const handleCategoryChange = (category: "featured" | "reports" | "reviews" | "research" | undefined) => {
    setSelected(category);
    setPage(1);
    updateURL(category, 1);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    updateURL(selected, newPage);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
      <div className="text-center mb-10 animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-apple-blue via-apple-purple to-apple-pink bg-clip-text text-transparent">
            Articles
          </span>
        </h1>
        <p className="text-foreground-secondary max-w-2xl mx-auto">
          Explore featured insights and quarterly reports on AI governance and alignment.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {categories.map((c) => {
          const isActive = (c.key ?? undefined) === selected;
          return (
            <button
              key={c.label}
              onClick={() => handleCategoryChange(c.key)}
              className={
                "px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 border " +
                (isActive
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-surface-elevated/60 text-foreground-secondary border-border hover:text-foreground")
              }
              aria-current={isActive ? "page" : undefined}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
        {items.map((a) => (
          <article
            key={a.slug}
            className="relative bg-surface-elevated/60 backdrop-blur-sm rounded-[2rem] !shadow-2xl border border-border/80  h-full overflow-hidden group"
          >
            <div className="p-4 h-full flex flex-col">
              {a.coverImage ? (
                <Link 
                  href={`/articles/${a.slug}`}
                  aria-label={`Open ${a.title}`}
                  className="mb-4 relative w-full h-40 overflow-hidden rounded-lg border border-border/60 block"
                >
                  <Image
                    src={a.coverImage}
                    alt={a.title}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-200"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                    loading="lazy"
                  />
                </Link>
              ) : null}
              <div className="flex items-center text-xs text-foreground-tertiary mb-2">
                <span className="uppercase tracking-wide">{a.category}</span>
                <span className="mx-2">•</span>
                <time dateTime={a.date}>{new Date(a.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit'
                })}</time>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-apple-blue transition-colors duration-200">
                <Link href={`/articles/${a.slug}`}>{a.title}</Link>
              </h3>
              <p className="text-sm text-foreground-secondary mb-3 line-clamp-3">{a.excerpt}</p>
              <div className="mt-auto">
                <Link
                  href={`/articles/${a.slug}`}
                  className="flex w-full items-center justify-center gap-2 px-4 py-2 rounded-full border border-apple-blue/30 bg-apple-blue/10 text-apple-blue hover:text-white hover:bg-apple-blue transition-colors duration-200 font-semibold"
                  aria-label={`Read more: ${a.title}`}
                >
                  <span className="text-base">👓</span>
                  <span>Read more</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-10">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => {
            const isActive = p === page;
            return (
              <button
                key={p}
                onClick={() => handlePageChange(p)}
                className={
                  "min-w-9 text-center px-3 py-2 rounded-lg text-sm font-semibold border transition-colors duration-200 " +
                  (isActive ? "bg-blue-600 text-white border-blue-600" : "bg-surface-elevated/60 text-foreground-secondary border-border hover:text-foreground")
                }
                aria-current={isActive ? "page" : undefined}
              >
                {p}
              </button>
            );
          })}
        </div>
      )}

      <div className="flex items-center justify-center mt-10">
        <a
          href="/articles/rss.xml"
          className="inline-flex items-center px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium rounded-full transition-colors duration-300"
          aria-label="RSS feed for Articles"
        >
          RSS
        </a>
      </div>
    </div>
  );
}
