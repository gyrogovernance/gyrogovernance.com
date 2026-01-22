"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
  currentRepo?: string;
}

export default function DocsSidebarClient({ repositories, currentRepo }: DocsSidebarClientProps) {
  const pathname = usePathname();
  const [expandedRepos, setExpandedRepos] = useState<Set<string>>(
    new Set([currentRepo || "tools"])
  );

  const toggleRepo = (repoId: string) => {
    const newExpanded = new Set(expandedRepos);
    if (newExpanded.has(repoId)) {
      newExpanded.delete(repoId);
    } else {
      newExpanded.add(repoId);
    }
    setExpandedRepos(newExpanded);
  };

  const toggleFolder = (repoId: string, folderSlug: string) => {
    const key = `${repoId}-${folderSlug}`;
    const newExpanded = new Set(expandedRepos);
    if (newExpanded.has(key)) {
      newExpanded.delete(key);
    } else {
      newExpanded.add(key);
    }
    setExpandedRepos(newExpanded);
  };

  const isActive = (href: string) => pathname === href;

  const renderDocsItem = (repo: Repo, item: DocsItem, level = 0, parentPath: string[] = []) => {
    const currentPath = [...parentPath, item.slug];
    const href = `/docs/${repo.id}/${currentPath.join('/')}`;

    if (item.isFolder && item.children) {
      const folderKey = `${repo.id}-${item.slug}`;
      const isExpanded = expandedRepos.has(folderKey);

      return (
        <div key={item.slug} className="mb-2">
          <button
            onClick={() => toggleFolder(repo.id, item.slug)}
            className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors hover:bg-surface-elevated ${
              isActive(href)
                ? 'bg-apple-blue/10 text-apple-blue border-l-2 border-apple-blue'
                : 'text-foreground-secondary hover:text-foreground'
            }`}
            style={{ paddingLeft: `${12 + level * 16}px` }}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">{item.title}</span>
              <svg
                className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          {isExpanded && (
            <div className="ml-4 mt-1 space-y-1">
              {item.children?.map(child => renderDocsItem(repo, child, level + 1, currentPath))}
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        key={item.slug}
        href={href}
        className={`block px-3 py-2 text-sm rounded-md transition-colors hover:bg-surface-elevated ${
          isActive(href)
            ? 'bg-apple-blue/10 text-apple-blue border-l-2 border-apple-blue'
            : 'text-foreground-secondary hover:text-foreground'
        }`}
        style={{ paddingLeft: `${12 + level * 16}px` }}
      >
        <div className="font-medium">{item.title}</div>
        {item.description && (
          <div className="text-xs text-foreground-tertiary mt-0.5">
            {item.description}
          </div>
        )}
      </Link>
    );
  };

  return (
    <nav className="hidden xl:block w-64 shrink-0 h-full">
      <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
        <div className="p-4">
          <Link
            href="/docs"
            className="block text-lg font-semibold text-foreground hover:text-apple-blue transition-colors mb-6"
          >
            Documentation
          </Link>

          <div className="space-y-1">
            {repositories.map((repo) => (
              <div key={repo.id} className="mb-4">
                <button
                  onClick={() => toggleRepo(repo.id)}
                  className={`w-full text-left px-3 py-2 rounded-md transition-colors hover:bg-surface-elevated ${
                    currentRepo === repo.id ? 'bg-surface-elevated text-apple-blue' : 'text-foreground-secondary'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{repo.name}</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${expandedRepos.has(repo.id) ? 'rotate-90' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-foreground-tertiary mt-1">{repo.description}</p>
                </button>

                {expandedRepos.has(repo.id) && (
                  <div className="ml-4 mt-2 space-y-1">
                    {/* Repository index link */}
                    <Link
                      href={`/docs/${repo.id}`}
                      className={`block px-3 py-2 text-sm rounded-md transition-colors hover:bg-surface-elevated ${
                        isActive(`/docs/${repo.id}`)
                          ? 'bg-apple-blue/10 text-apple-blue border-l-2 border-apple-blue'
                          : 'text-foreground-secondary hover:text-foreground'
                      }`}
                    >
                      Overview
                    </Link>

                    {/* Render docs with proper folder/file hierarchy */}
                    {repo.docs.map((doc) => renderDocsItem(repo, doc, 0, []))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}