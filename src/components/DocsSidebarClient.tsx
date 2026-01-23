"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useMemo, useRef, useState } from "react";

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

interface DocsSidebarClientProps {
  repositories: Repo[];
}

function useSessionStorageState<T>(key: string, initial: T) {
  const [state, setState] = useState<T>(() => {
    if (typeof window === "undefined" || !key) return initial;
    const raw = window.sessionStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : initial;
  });

  useEffect(() => {
    if (!key) return;
    try {
      window.sessionStorage.setItem(key, JSON.stringify(state));
    } catch {}
  }, [key, state]);

  return [state, setState] as const;
}

function Chevron({ open, size = 16 }: { open: boolean; size?: number }) {
  return (
    <svg
      className={`transition-transform ${open ? "rotate-90" : ""}`}
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}

function FolderItem({
  repo,
  item,
  level,
  parentPath,
  pathname,
  isInDocsSection,
}: {
  repo: Repo;
  item: DocsItem;
  level: number;
  parentPath: string[];
  pathname: string;
  isInDocsSection: boolean;
}) {
  const currentPath = [...parentPath, item.slug];
  const folderPrefix = `/docs/${repo.id}/${currentPath.join("/")}`;

  // Auto-open if current page is inside this folder
  const shouldBeOpen = pathname === folderPrefix || pathname.startsWith(folderPrefix + "/");

  // Use sessionStorage only when in docs section
  const storageKey = isInDocsSection ? `docsSidebar:folderOpen:${repo.id}:${currentPath.join("/")}` : '';
  const [isExpanded, setIsExpanded] = useSessionStorageState<boolean>(storageKey, shouldBeOpen);

  useEffect(() => {
    if (shouldBeOpen) setIsExpanded(true);
  }, [shouldBeOpen, setIsExpanded]);

  return (
    <div className="mb-2" key={currentPath.join("/")}>
      <button
        type="button"
        onClick={() => setIsExpanded((v) => !v)}
        className="w-full px-3 py-2 text-sm rounded-md text-foreground-secondary hover:bg-surface-elevated hover:text-foreground transition-colors text-left"
        style={{ paddingLeft: `${12 + level * 16}px` }}
        aria-expanded={isExpanded}
      >
        <div className="flex items-center justify-between">
          <span className="font-medium">{item.title}</span>
          <Chevron open={isExpanded} size={12} />
        </div>
      </button>

      {isExpanded && item.children && (
        <div className="ml-4 mt-1 space-y-1">
          {item.children.map((child) => (
            <DocsItemComponent
              key={[...currentPath, child.slug].join("/")}
              repo={repo}
              item={child}
              level={level + 1}
              parentPath={currentPath}
              pathname={pathname}
              isInDocsSection={isInDocsSection}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function DocsItemComponent({
  repo,
  item,
  level,
  parentPath,
  pathname,
  isInDocsSection,
}: {
  repo: Repo;
  item: DocsItem;
  level: number;
  parentPath: string[];
  pathname: string;
  isInDocsSection: boolean;
}) {
  const currentPath = [...parentPath, item.slug];
  const href = `/docs/${repo.id}/${currentPath.join("/")}`;

  if (item.isFolder && item.children) {
    return (
      <FolderItem
        repo={repo}
        item={item}
        level={level}
        parentPath={parentPath}
        pathname={pathname}
        isInDocsSection={isInDocsSection}
      />
    );
  }

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`block px-3 py-2 text-sm rounded-md transition-colors hover:bg-surface-elevated hover:text-foreground
        ${isActive ? "bg-surface-elevated text-apple-blue" : "text-foreground-secondary"}`}
      style={{ paddingLeft: `${12 + level * 16}px` }}
      key={currentPath.join("/")}
    >
      <div className="font-medium">{item.title}</div>
      {!!item.description && (
        <div className="text-xs text-foreground-tertiary mt-0.5">{item.description}</div>
      )}
    </Link>
  );
}

function RepositorySection({
  repo,
  pathname,
  isInDocsSection,
}: {
  repo: Repo;
  pathname: string;
  isInDocsSection: boolean;
}) {
  const repoPrefix = `/docs/${repo.id}`;
  const isRepoActive = pathname === repoPrefix || pathname.startsWith(repoPrefix + "/");

  // Use sessionStorage only when in docs section
  const [isExpanded, setIsExpanded] = useSessionStorageState<boolean>(
    isInDocsSection ? `docsSidebar:repoOpen:${repo.id}` : '',
    isRepoActive
  );

  useEffect(() => {
    if (isRepoActive) setIsExpanded(true);
  }, [isRepoActive, setIsExpanded]);

  return (
    <div className="mb-4">
      <div
        className={`flex items-stretch rounded-md border border-transparent ${
          isRepoActive ? "bg-surface-elevated" : ""
        }`}
      >
        {/* Toggle button (does NOT navigate) */}
        <button
          type="button"
          onClick={() => setIsExpanded((v) => !v)}
          className={`px-3 py-2 rounded-l-md transition-colors ${
            isRepoActive
              ? "text-apple-blue"
              : "text-foreground-secondary hover:bg-surface-elevated hover:text-foreground"
          }`}
          aria-label={`Toggle ${repo.name}`}
          aria-expanded={isExpanded}
        >
          <Chevron open={isExpanded} />
        </button>

        {/* Link (navigates) */}
        <Link
          href={`/docs/${repo.id}`}
          className={`flex-1 px-3 py-2 rounded-r-md transition-colors ${
            isRepoActive
              ? "text-apple-blue"
              : "text-foreground-secondary hover:bg-surface-elevated hover:text-foreground"
          }`}
        >
          <div className="font-medium">{repo.name}</div>
          <p className="text-sm text-foreground-tertiary mt-1">{repo.description}</p>
        </Link>
      </div>

      {isExpanded && (
        <div className="ml-4 mt-2 space-y-1">
          <Link
            href={`/docs/${repo.id}`}
            className={`block px-3 py-2 text-sm rounded-md transition-colors hover:bg-surface-elevated hover:text-foreground ${
              pathname === `/docs/${repo.id}` ? "bg-surface-elevated text-apple-blue" : "text-foreground-secondary"
            }`}
            aria-current={pathname === `/docs/${repo.id}` ? "page" : undefined}
          >
            Overview
          </Link>

          {repo.docs.map((doc) => (
            <DocsItemComponent
              key={`${repo.id}:${doc.slug}`}
              repo={repo}
              item={doc}
              level={0}
              parentPath={[]}
              pathname={pathname}
              isInDocsSection={isInDocsSection}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function DocsSidebarClient({ repositories }: DocsSidebarClientProps) {
  const pathname = usePathname();
  const isInDocsSection = pathname.startsWith('/docs');

  // scroll container ref
  const scrollRef = useRef<HTMLDivElement>(null);

  // Clear sidebar state when leaving docs section
  useEffect(() => {
    if (!isInDocsSection) {
      // Clear all sidebar toggle states when leaving docs
      const keysToRemove = [];
      for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        if (key && key.startsWith('docsSidebar:')) {
          keysToRemove.push(key);
        }
      }
      keysToRemove.forEach(key => sessionStorage.removeItem(key));
    }
  }, [isInDocsSection]);

  // Restore scroll on mount (only if still in docs)
  useEffect(() => {
    if (!isInDocsSection) return;

    const el = scrollRef.current;
    if (!el) return;
    const raw = sessionStorage.getItem("docsSidebar:scrollTop");
    if (raw) el.scrollTop = Number(raw);
  }, [isInDocsSection]);

  // Persist scroll (only when in docs)
  useEffect(() => {
    if (!isInDocsSection) return;

    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      sessionStorage.setItem("docsSidebar:scrollTop", String(el.scrollTop));
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [isInDocsSection]);

  // Ensure active item is visible after navigation (only when in docs)
  useEffect(() => {
    if (!isInDocsSection) return;

    const el = scrollRef.current;
    if (!el) return;
    const active = el.querySelector('a[aria-current="page"]') as HTMLAnchorElement | null;
    active?.scrollIntoView({ block: "center" });
  }, [pathname, isInDocsSection]);

  return (
    <nav className="hidden xl:block w-64 shrink-0 h-full">
      <div ref={scrollRef} className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
        <div className="p-4">
          <Link
            href="/docs"
            className="block text-lg font-semibold text-foreground hover:text-apple-blue transition-colors mb-6"
          >
            Documentation
          </Link>

          <div className="space-y-1">
            {repositories.map((repo) => (
              <RepositorySection key={repo.id} repo={repo} pathname={pathname} isInDocsSection={isInDocsSection} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}