"use client";

import Link from "next/link";

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
  // For static export, everything is expanded by default

  const renderDocsItem = (repo: Repo, item: DocsItem, level = 0, parentPath: string[] = []) => {
    const currentPath = [...parentPath, item.slug];
    const href = `/docs/${repo.id}/${currentPath.join('/')}`;

    if (item.isFolder && item.children) {

      return (
        <div key={item.slug} className="mb-2">
          <div
            className="w-full px-3 py-2 text-sm rounded-md text-foreground-secondary"
            style={{ paddingLeft: `${12 + level * 16}px` }}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">{item.title}</span>
              <svg
                className="w-3 h-3 rotate-90"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Always expanded for static export */}
          <div className="ml-4 mt-1 space-y-1">
            {item.children?.map(child => renderDocsItem(repo, child, level + 1, currentPath))}
          </div>
        </div>
      );
    }

    return (
      <Link
        key={item.slug}
        href={href}
        className="block px-3 py-2 text-sm rounded-md transition-colors hover:bg-surface-elevated text-foreground-secondary hover:text-foreground"
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
                <div
                  className={`w-full px-3 py-2 rounded-md ${
                    currentRepo === repo.id ? 'bg-surface-elevated text-apple-blue' : 'text-foreground-secondary'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{repo.name}</span>
                    <svg
                      className="w-4 h-4 rotate-90"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-foreground-tertiary mt-1">{repo.description}</p>
                </div>

                <div className="ml-4 mt-2 space-y-1">
                    {/* Repository index link */}
                    <Link
                      href={`/docs/${repo.id}`}
                      className="block px-3 py-2 text-sm rounded-md transition-colors hover:bg-surface-elevated text-foreground-secondary hover:text-foreground"
                    >
                      Overview
                    </Link>

                    {/* Render docs with proper folder/file hierarchy */}
                    {repo.docs.map((doc) => renderDocsItem(repo, doc, 0, []))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}