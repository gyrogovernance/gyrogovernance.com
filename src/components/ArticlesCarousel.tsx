'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import ChevronLeftIcon from "@/components/icons/ChevronLeftIcon";
import ChevronRightIcon from "@/components/icons/ChevronRightIcon";
import type { ArticleMeta } from "@/lib/articles";
import { LiquidGlassCard } from "@/components/LiquidGlassCard";

interface ArticlesCarouselProps {
  articles: ArticleMeta[];
}

export default function ArticlesCarousel({ articles }: ArticlesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance (in px) to trigger a swipe
  const minSwipeDistance = 50;

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

  const itemsPerPage = isMobile ? 1 : 2;
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

  // Only show carousel controls if there are multiple pages
  const showControls = totalPages > 1;

  // Handle touch/swipe events
  const onTouchStart = (e: React.TouchEvent) => {
    // Don't intercept touches on links or buttons
    const target = e.target as HTMLElement;
    if (target.closest('a') || target.closest('button')) {
      return;
    }
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    // Don't intercept touches on links or buttons
    const target = e.target as HTMLElement;
    if (target.closest('a') || target.closest('button')) {
      setTouchStart(null);
      setTouchEnd(null);
      return;
    }

    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Handle mouse drag events (for touchpad)
  const onMouseDown = (e: React.MouseEvent) => {
    // Don't intercept clicks on links or buttons
    const target = e.target as HTMLElement;
    if (target.closest('a') || target.closest('button')) {
      return;
    }
    setTouchEnd(null);
    setTouchStart(e.clientX);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (touchStart === null) return;
    setTouchEnd(e.clientX);
  };

  const onMouseUp = (e: React.MouseEvent) => {
    // Don't intercept clicks on links or buttons
    const target = e.target as HTMLElement;
    if (target.closest('a') || target.closest('button')) {
      setTouchStart(null);
      setTouchEnd(null);
      return;
    }

    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  const onMouseLeave = () => {
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className="relative px-12 sm:px-16">
      {/* Navigation Arrows - positioned inside the container */}
      {showControls && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-surface-elevated/95 backdrop-blur-md hover:bg-classic-blue text-foreground hover:text-white p-2 sm:p-3 rounded-full shadow-lg border border-border/50 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-classic-blue/50"
            aria-label="Previous articles"
          >
            <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-surface-elevated/95 backdrop-blur-md hover:bg-classic-blue text-foreground hover:text-white p-2 sm:p-3 rounded-full shadow-lg border border-border/50 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-classic-blue/50"
            aria-label="Next articles"
          >
            <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </>
      )}

      {/* Articles Grid with Transition */}
      <div
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        className="cursor-grab active:cursor-grabbing"
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 transition-all duration-500 ease-in-out select-none"
          style={{
            opacity: 1,
          }}
        >
          {currentArticles.map((article) => (
            <LiquidGlassCard
              key={article.slug}
              className="glass-card glass-card-translucent rounded-[2rem] shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              intensity="subtle"
              blur={24}
              saturation={145}
              luminosity={108}
              shadowIntensity={0.12}
            >
              <article className="p-6">
                <div className="flex flex-col h-full">
                  {article.coverImage && (
                    <Link 
                      href={`/articles/${article.slug}`}
                      className="mb-4 relative w-full h-40 overflow-hidden rounded-lg border border-border/60 block"
                    >
                      <Image
                        src={article.coverImage}
                        alt={article.title}
                        fill
                        className="object-cover hover:scale-[1.02] transition-transform duration-200"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                        loading="lazy"
                      />
                    </Link>
                  )}
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center text-xs text-foreground-tertiary mb-2">
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
                    <h4 className="text-lg font-semibold text-foreground mb-3 hover:text-classic-blue transition-colors duration-200">
                      <Link href={`/articles/${article.slug}`}>{article.title}</Link>
                    </h4>
                    <p className="text-sm text-foreground-secondary mb-4 line-clamp-3 flex-1">
                      {article.excerpt}
                    </p>
                    <Link
                      href={`/articles/${article.slug}`}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-classic-blue/30 bg-classic-blue/10 text-classic-blue hover:text-white hover:bg-classic-blue transition-colors duration-200 font-semibold text-sm"
                      aria-label={`Read full article: ${article.title}`}
                    >
                      <span className="text-base">👓</span>
                      <span>Read full article</span>
                    </Link>
                  </div>
                </div>
              </article>
            </LiquidGlassCard>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      {showControls && (
        <div className="flex justify-center items-center mt-8 gap-2 p-2 bg-surface-elevated/40 backdrop-blur-sm rounded-full border border-border/30 w-fit mx-auto shadow-2xl">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-classic-blue/50 focus:ring-offset-2 ${
                index === currentIndex
                  ? 'w-6 h-2 bg-gradient-to-r from-classic-blue to-classic-purple shadow-md shadow-classic-blue/30'
                  : 'w-2 h-2 bg-foreground-tertiary/50 hover:bg-foreground-secondary'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

