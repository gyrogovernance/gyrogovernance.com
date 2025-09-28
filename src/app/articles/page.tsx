import Link from "next/link";
import Image from "next/image";
import { listArticles, listAllTags, listFeaturedArticles } from "@/lib/articles";

const categories = [
  { key: undefined, label: "All" },
  { key: "featured", label: "Featured" },
  { key: "reports", label: "Reports" },
] as const;

export const metadata = {
  title: "Articles",
  description: "Research articles, featured insights, and governance reports.",
};

export default function ArticlesPage({ searchParams }: { searchParams?: { category?: string; tag?: string; page?: string } }) {
  const selected = (searchParams?.category as "featured" | "reports" | undefined) || undefined;
  const selectedTag = searchParams?.tag || undefined;
  const page = Math.max(1, parseInt(searchParams?.page || '1', 10) || 1);
  const PAGE_SIZE = 6;

  const all = selected === 'featured'
    ? listFeaturedArticles(selectedTag)
    : listArticles(selected === 'reports' ? 'reports' : undefined, selectedTag);
  const totalPages = Math.max(1, Math.ceil(all.length / PAGE_SIZE));
  const items = all.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const tags = listAllTags();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
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

      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {categories.map((c) => {
          const href = c.key ? `/articles?category=${c.key}${selectedTag ? `&tag=${encodeURIComponent(selectedTag)}` : ''}` : `/articles${selectedTag ? `?tag=${encodeURIComponent(selectedTag)}` : ''}`;
          const isActive = (c.key ?? undefined) === selected;
          return (
            <Link
              key={c.label}
              href={href}
              className={
                "px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 border " +
                (isActive
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-surface-elevated/60 text-foreground-secondary border-border hover:text-foreground")
              }
              aria-current={isActive ? "page" : undefined}
            >
              {c.label}
            </Link>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-2 justify-center mb-8">
        <Link
          href={`/articles${selected ? `?category=${selected}` : ''}`}
          className={
            "px-3 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200 border " +
            (!selectedTag ? "bg-blue-600 text-white border-blue-600" : "bg-surface-elevated/60 text-foreground-secondary border-border hover:text-foreground")
          }
        >
          All tags
        </Link>
        {tags.map((t) => {
          const query = new URLSearchParams();
          if (selected) query.set('category', selected);
          query.set('tag', t);
          const href = `/articles?${query.toString()}`;
          const isActive = selectedTag?.toLowerCase() === t.toLowerCase();
          return (
            <Link
              key={t}
              href={href}
              className={
                "px-3 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200 border " +
                (isActive ? "bg-blue-600 text-white border-blue-600" : "bg-surface-elevated/60 text-foreground-secondary border-border hover:text-foreground")
              }
            >
              #{t}
            </Link>
          );
        })}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
        {items.map((a) => (
          <article
            key={a.slug}
            className="relative bg-surface-elevated/60 backdrop-blur-sm rounded-xl shadow-lg border border-border/80 hover:shadow-xl transition-shadow duration-300 h-full overflow-hidden group"
          >
            <div className="p-4 h-full flex flex-col">
              {a.coverImage ? (
                <div className="mb-4 relative w-full h-40 overflow-hidden rounded-lg border border-border/60">
                  <Link href={`/articles/${a.slug}`} aria-label={`Open ${a.title}`} className="absolute inset-0 z-10" />
                  <Image
                    src={a.coverImage}
                    alt={a.title}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-200"
                  />
                </div>
              ) : null}
              <div className="flex items-center text-xs text-foreground-tertiary mb-2">
                <span className="uppercase tracking-wide">{a.category}</span>
                <span className="mx-2">•</span>
                <time dateTime={a.date}>{new Date(a.date).toLocaleDateString()}</time>
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
            const q = new URLSearchParams();
            if (selected) q.set('category', selected);
            if (selectedTag) q.set('tag', selectedTag);
            q.set('page', String(p));
            const href = `/articles?${q.toString()}`;
            const isActive = p === page;
            return (
              <Link
                key={p}
                href={href}
                className={
                  "min-w-9 text-center px-3 py-2 rounded-lg text-sm font-semibold border transition-colors duration-200 " +
                  (isActive ? "bg-blue-600 text-white border-blue-600" : "bg-surface-elevated/60 text-foreground-secondary border-border hover:text-foreground")
                }
                aria-current={isActive ? "page" : undefined}
              >
                {p}
              </Link>
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


