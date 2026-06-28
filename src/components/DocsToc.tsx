"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { LiquidGlassCard } from "@/components/LiquidGlassCard";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface DocsTocProps {
  htmlContent: string;
}

export default function DocsToc({ htmlContent }: DocsTocProps) {
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Extract headings from HTML content
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');

    const items: TocItem[] = [];
    headings.forEach((heading) => {
      const id = heading.id || heading.textContent?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      if (id && heading.textContent) {
        items.push({
          id,
          text: heading.textContent,
          level: parseInt(heading.tagName.charAt(1))
        });
      }
    });

    setTocItems(items);
  }, [htmlContent]);

  useEffect(() => {
    // Set up intersection observer for active link highlighting
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0px -80% 0px',
        threshold: 0.1
      }
    );

    tocItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [tocItems]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveId(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (tocItems.length === 0) return null;

  const tocContent = (
    <LiquidGlassCard
      className="sticky top-0 glass-card glass-card-translucent rounded-[2rem] p-4"
      intensity="subtle"
      blur={22}
      saturation={145}
      luminosity={108}
      shadowIntensity={0.12}
    >
      <h3 className="toc-title">
        On this page
      </h3>
      <div className="max-h-96 overflow-y-auto pr-0 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
        <ul className="space-y-0.5">
          {tocItems.map((item, index) => (
            <li key={`${item.id}-${index}`} style={{ paddingLeft: `${(item.level - 1) * 0.75}rem` }}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`toc-link ${activeId === item.id ? 'active' : ''}`}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </LiquidGlassCard>
  );

  // Use portal to render ToC in the right sidebar
  if (typeof document !== 'undefined') {
    const tocContainer = document.getElementById('docs-toc-container');
    if (tocContainer) {
      return createPortal(tocContent, tocContainer);
    }
  }

  // Fallback: render inline (for SSR or if container not found)
  return tocContent;
}