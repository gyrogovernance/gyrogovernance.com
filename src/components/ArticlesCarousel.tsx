'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import ChevronLeftIcon from "@/components/icons/ChevronLeftIcon";
import ChevronRightIcon from "@/components/icons/ChevronRightIcon";
import type { ArticleMeta } from "@/lib/articles";

interface ArticlesCarouselProps {
  articles: ArticleMeta[];
}

export default function ArticlesCarousel({ articles }: ArticlesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => {
      const newIsMobile = window.innerWidth < 1024; // lg breakpoint
      if (newIsMobile !== isMobile) {
        setIsMobile(newIsMobile);
        setCurrentIndex(0); // Reset to first page when switching between mobile/desktop
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobile]);

  const itemsPerPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(articles.length / itemsPerPage);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const currentArticles = articles.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  // Only show carousel controls if there are more articles than can fit in one view
  const showControls = articles.length > itemsPerPage;

  return (
    <div className="relative px-12 sm:px-16 lg:px-0">
      {/* Navigation Arrows - positioned outside on large screens, inside on mobile */}
      {showControls && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-0 lg:left-0 lg:-translate-x-14 top-1/2 -translate-y-1/2 z-10 bg-surface-elevated/95 backdrop-blur-md hover:bg-apple-blue text-foreground hover:text-white p-2 sm:p-3 rounded-full shadow-lg border border-border/50 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-apple-blue/50"
            aria-label="Previous articles"
          >
            <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 lg:right-0 lg:translate-x-14 top-1/2 -translate-y-1/2 z-10 bg-surface-elevated/95 backdrop-blur-md hover:bg-apple-blue text-foreground hover:text-white p-2 sm:p-3 rounded-full shadow-lg border border-border/50 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-apple-blue/50"
            aria-label="Next articles"
          >
            <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </>
      )}

      {/* Articles Grid with Transition */}
      <div className="overflow-hidden">
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out"
          style={{
            opacity: 1,
          }}
        >
          {currentArticles.map((article) => (
            <article
              key={article.slug}
              className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-border/80 hover:shadow-xl transition-shadow duration-300 animate-fade-in"
            >
              <div className="flex flex-col h-full">
                {article.coverImage && (
                  <div className="mb-4 relative w-full h-40 overflow-hidden rounded-lg border border-border/60">
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      className="object-cover hover:scale-[1.02] transition-transform duration-200"
                    />
                  </div>
                )}
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center text-xs text-foreground-tertiary mb-2">
                    <span className="uppercase tracking-wide">{article.category}</span>
                    <span className="mx-2">•</span>
                    <time dateTime={article.date}>
                      {new Date(article.date).toLocaleDateString()}
                    </time>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3 hover:text-apple-blue transition-colors duration-200">
                    <Link href={`/articles/${article.slug}`}>{article.title}</Link>
                  </h4>
                  <p className="text-sm text-foreground-secondary mb-4 line-clamp-3 flex-1">
                    {article.excerpt}
                  </p>
                  <Link
                    href={`/articles/${article.slug}`}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-apple-blue/30 bg-apple-blue/10 text-apple-blue hover:text-white hover:bg-apple-blue transition-colors duration-200 font-semibold text-sm"
                    aria-label={`Read more: ${article.title}`}
                  >
                    <span className="text-base">👓</span>
                    <span>Read more</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      {showControls && (
        <div className="flex justify-center items-center mt-8 gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-apple-blue/50 ${
                index === currentIndex
                  ? 'w-8 bg-apple-blue'
                  : 'w-2 bg-foreground-tertiary hover:bg-foreground-secondary'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

