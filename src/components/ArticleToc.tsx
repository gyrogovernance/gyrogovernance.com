"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export interface TocHeading {
  depth: number; // 1..6
  text: string;
  id: string;
}

interface ArticleTocProps {
  headings: TocHeading[];
  offsetTop?: number; // pixels to offset when scrolling (height of sticky header)
}

type TocNode = { id: string; text: string; children: Array<{ id: string; text: string }> };

function buildTree(headings: TocHeading[]): TocNode[] {
  const tree: TocNode[] = [];
  let current: TocNode | null = null;
  headings
    .filter(h => h.depth === 2 || h.depth === 3) // keep ToC clean
    .forEach(h => {
      if (h.depth === 2) {
        current = { id: h.id, text: h.text, children: [] };
        tree.push(current);
      } else if (h.depth === 3) {
        if (!current) {
          // stray h3 without a preceding h2 – treat as h2
          current = { id: h.id, text: h.text, children: [] };
          tree.push(current);
        } else {
          current.children.push({ id: h.id, text: h.text });
        }
      }
    });
  return tree;
}

export default function ArticleToc({ headings, offsetTop = 96 }: ArticleTocProps) {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  // Build hierarchical tree only once per render
  const tree = useMemo(() => buildTree(headings), [headings]);

  // Body scroll lock for mobile dialog
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Close on Escape (works for both desktop and mobile)
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  // Focus trap for the mobile dialog
  useEffect(() => {
    if (!open) return;
    // focus first link
    const t = setTimeout(() => firstLinkRef.current?.focus(), 0);
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  // Scroll-spy with IntersectionObserver
  useEffect(() => {
    const ids = headings.map(h => h.id);

    // Produce HTMLElement[] (not (HTMLElement | null)[])
    const elements: HTMLElement[] = ids
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      entries => {
        // Pick the entry closest to the top that is intersecting
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top));

        if (visible[0]) {
          setActiveId(visible[0].target.id);
          return;
        }

        // Fallback: last section above the viewport
        const above: HTMLElement[] = elements
          .filter(el => el.getBoundingClientRect().top - offsetTop <= 0)
          .sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top);

        const last = above[above.length - 1];
        if (last) setActiveId(last.id);
      },
      {
        rootMargin: `-${offsetTop + 8}px 0px -65% 0px`,
        threshold: [0, 1],
      }
    );

    // Type is HTMLElement[], so observe() receives Element (OK)
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [headings, offsetTop]);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const handleJump = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - offsetTop;
    if (prefersReducedMotion) {
      window.scrollTo(0, y);
    } else {
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setOpen(false);
  };

  if (!headings || headings.length === 0 || tree.length === 0) return null;

  // Desktop aside (sticky, right column)
  const desktop = (
    <nav
      className="hidden lg:block sticky top-24 self-start max-h-[calc(100vh-8rem)] overflow-auto bg-surface-elevated/60 border border-border/80 rounded-lg p-3 shadow-xl"
      aria-label="Table of contents"
      role="doc-toc"
    >
      <h2 className="toc-title">On this page</h2>
      <ul className="toc-list">
        {tree.map(node => (
          <li key={node.id} className="toc-item">
            <a
              href={`#${node.id}`}
              onClick={handleJump(node.id)}
              aria-current={activeId === node.id ? "true" : undefined}
              className={`toc-link ${activeId === node.id ? 'active' : ''}`}
            >
              {node.text}
            </a>
            {node.children.length > 0 ? (
              <ul className="toc-sublist">
                {node.children.map(ch => (
                  <li key={ch.id} className="toc-item">
                    <a
                      href={`#${ch.id}`}
                      onClick={handleJump(ch.id)}
                      aria-current={activeId === ch.id ? "true" : undefined}
                      className={`toc-link ${activeId === ch.id ? 'active' : ''}`}
                    >
                      {ch.text}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );

  // Mobile floating button + accessible dialog
  const mobile = (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-apple-blue text-white shadow-xl"
        aria-label="Open table of contents"
        aria-haspopup="dialog"
        aria-expanded={open ? "true" : "false"}
      >
        <span>ToC</span>
      </button>
      {open ? (
        <div className="lg:hidden fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Table of contents">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div
            ref={dialogRef}
            className="absolute bottom-0 left-0 right-0 bg-surface-elevated/90 backdrop-blur-md border-t border-border/80 rounded-t-xl p-4 max-h-[70vh] overflow-auto focus:outline-none"
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="toc-title">On this page</h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="px-3 py-1 rounded-md border border-border/80 text-foreground-secondary"
                aria-label="Close table of contents"
              >
                Close
              </button>
            </div>
            <ul className="toc-list">
              {tree.map((node, i) => (
                <li key={node.id} className="toc-item">
                  <a
                    ref={i === 0 ? firstLinkRef : undefined}
                    href={`#${node.id}`}
                    onClick={handleJump(node.id)}
                    className={`toc-link ${activeId === node.id ? 'active' : ''}`}
                  >
                    {node.text}
                  </a>
                  {node.children.length > 0 ? (
                    <ul className="toc-sublist">
                      {node.children.map(ch => (
                        <li key={ch.id} className="toc-item">
                          <a
                            href={`#${ch.id}`}
                            onClick={handleJump(ch.id)}
                            className={`toc-link ${activeId === ch.id ? 'active' : ''}`}
                          >
                            {ch.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );

  return (
    <>
      {desktop}
      {mobile}
    </>
  );
}
