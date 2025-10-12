import Link from "next/link";
import Image from "next/image";
import { getArticleBySlug, listArticles } from "@/lib/articles";
import type { Metadata } from "next";
import { marked } from "marked";
import CopyControls from "@/components/CopyControls";
import ArticleStructuredData from "@/components/ArticleStructuredData";

interface Params {
  slug: string;
}

export async function generateStaticParams() {
  const metas = listArticles();
  return metas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article" };
  
  const ogImage = article.coverImage || "/og-image.png";
  const articleUrl = `https://gyrogovernance.com/articles/${slug}`;
  
  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: articleUrl,
      siteName: "Gyro Governance",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: article.title,
          type: "image/png",
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: article.date,
      authors: ["Gyro Governance"],
      tags: article.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [ogImage],
      creator: "@gyrogovernance",
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-foreground-secondary">Article not found.</p>
        <Link href="/articles" className="text-apple-blue font-semibold">
          Back to Articles
        </Link>
      </div>
    );
  }

  // Configure markdown renderer
  const setMarkedOptions = (
    marked as unknown as { setOptions: (o: { gfm?: boolean; breaks?: boolean }) => void }
  ).setOptions;
  setMarkedOptions({ gfm: true, breaks: true });

  // Render HTML directly
  const rendered = marked(article.content);
  const html = typeof rendered === "string" ? rendered : "";

  return (
    <>
      <ArticleStructuredData
        title={article.title}
        description={article.excerpt}
        datePublished={article.date}
        dateModified={article.date}
        author="Gyro Governance"
        image={article.coverImage}
        url={`https://gyrogovernance.com/articles/${slug}`}
        tags={article.tags}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="mb-6">
          <Link href="/articles" className="text-apple-blue hover:text-apple-purple">
            ← Back to Articles
          </Link>
        </div>
        <article className="animate-fade-in-up">
        <header className="mb-6">
          <div className="flex items-center text-sm text-foreground-tertiary mb-2">
            <span className="uppercase tracking-wide">{article.category}</span>
            <span className="mx-2">•</span>
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
              })}
            </time>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {article.title}
          </h1>
          {article.coverImage ? (
            <div className="relative w-full h-64 rounded-xl overflow-hidden border border-border/60">
              <Image
                src={article.coverImage}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
          ) : null}
        </header>

        {/* Content only */}
        <div className="prose prose-invert max-w-none text-foreground-secondary leading-relaxed">
          <div
            id="article-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <CopyControls className="mt-4" targetElementId="article-content" />
        </div>

        {/* Divider before Promo */}
        <div className="mt-10 mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-apple-blue/50 to-transparent" />
          <p className="mt-3 text-sm text-foreground-tertiary text-center">
            Explore more work from our labs and ongoing publications.
          </p>
        </div>

        {/* Promo Section */}
        <section className="mt-12 space-y-8">
          {/* Labs */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Labs</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <article className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-border/80 hover:shadow-xl transition-shadow duration-300">
                <div className="flex h-full">
                  <div className="flex items-center justify-center mr-4">
                    <div className="text-5xl">⚡</div>
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        Mathematical Physics Science
                      </h3>
                      <p className="text-foreground-secondary">
                        Gyroscopic Alignment Research Lab
                      </p>
                    </div>
                    <a
                      href="https://github.com/gyrogovernance/science"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-full transition-colors duration-300 mt-4 self-start"
                      aria-label="Visit Gyroscopic Alignment Research Lab (opens in new tab)"
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>
              </article>

              <article className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-border/80 hover:shadow-xl transition-shadow duration-300">
                <div className="flex h-full">
                  <div className="flex items-center justify-center mr-4">
                    <div className="text-5xl">👶</div>
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        Artificial Superintelligence Architecture (ASI/AGI)
                      </h3>
                      <p className="text-foreground-secondary">
                        Gyroscopic Alignment Development Lab
                      </p>
                    </div>
                    <a
                      href="https://github.com/gyrogovernance/superintelligence"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-full transition-colors duration-300 mt-4 self-start"
                      aria-label="Visit Gyroscopic Alignment Development Lab (opens in new tab)"
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>
              </article>

              <article className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-border/80 hover:shadow-xl transition-shadow duration-300">
                <div className="flex h-full">
                  <div className="flex items-center justify-center mr-4">
                    <div className="text-5xl">🌟</div>
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        AI Safety Diagnostics
                      </h3>
                      <p className="text-foreground-secondary">
                        Gyroscopic Alignment Evaluation Lab
                      </p>
                    </div>
                    <a
                      href="https://github.com/gyrogovernance/diagnostics"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-full transition-colors duration-300 mt-4 self-start"
                      aria-label="Visit Gyroscopic Alignment Evaluation Lab (opens in new tab)"
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>
              </article>

              <article className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-border/80 hover:shadow-xl transition-shadow duration-300">
                <div className="flex h-full">
                  <div className="flex items-center justify-center mr-4">
                    <div className="text-5xl">🧭</div>
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        AI Quality Governance
                      </h3>
                      <p className="text-foreground-secondary">
                        Gyroscopic Alignment Behaviour Lab
                      </p>
                    </div>
                    <a
                      href="https://github.com/gyrogovernance/tools"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-full transition-colors duration-300 mt-4 self-start"
                      aria-label="Visit Gyroscopic Alignment Behaviour Lab (opens in new tab)"
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* Resources - Newsletter */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Resources</h2>
            <div className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-border/80 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/assets/the_walk_cover.jpg"
                    alt="The Walk Newsletter Cover"
                    width={160}
                    height={160}
                    className="w-40 h-40 object-cover rounded-lg border border-border/50"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    The Walk
                  </h3>
                  <p className="text-foreground-secondary mb-3">
                    A Journey of Self-Discovery, Augmented Intelligence (AI) & Good Governance. One step at a time. Weekly insights on AI adoption, alignment, and ethical governance.
                  </p>
                  <a
                    href="https://www.linkedin.com/newsletters/the-walk-7115036597602967553/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full transition-colors duration-300"
                    aria-label="Read The Walk newsletter on LinkedIn (opens in new tab)"
                  >
                    LinkedIn Newsletter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
    </>
  );
}
