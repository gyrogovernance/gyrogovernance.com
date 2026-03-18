import Link from 'next/link';
import type { ReactElement } from 'react';

const repositories = [
  {
    id: 'tools',
    name: 'Tools',
    description: 'Development tools and frameworks',
    icon: 'tools'
  },
  {
    id: 'science',
    name: 'Science',
    description: 'Research papers and foundations',
    icon: 'science'
  },
  {
    id: 'superintelligence',
    name: 'Superintelligence',
    description: 'AI and superintelligence research',
    icon: 'superintelligence'
  }
];

const repoIcons: Record<string, ReactElement> = {
  tools: (
    <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M9 6h6v2H9z" />
      <path d="M8 11h8v2H8z" />
      <path d="M9 16h6v2H9z" />
      <path d="M14.5 3h-5l-.5 1.5L6 4.5V5h12v-.5l-2.5-.5-.5-1.5z" />
      <path d="M6 6v13.5c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5V6" />
    </svg>
  ),
  science: (
    <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="19" r="1" />
      <path d="M12 4v13" />
      <path d="M12 8c-4 0-7 2.5-8 5.5h16C19 10.5 16 8 12 8z" />
      <path d="M4 11.5C5 7.9 8.1 5 12 5s7 2.9 8 6.5" />
    </svg>
  ),
  superintelligence: (
    <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 2l2.5 5 5.5.8-4 3.9 1 5.3L12 13.8 7 17l1-5.3-4-3.9L9.5 7 12 2z" />
      <path d="M6 20h12" />
      <path d="M8 22h8" />
    </svg>
  )
};

export default function DocsPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-5 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">Documentation</h1>
        <p className="text-base sm:text-lg text-foreground-secondary">
          Comprehensive documentation for Gyro Governance tools, research, and frameworks.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
        {repositories.map((repo) => (
          <Link
            key={repo.id}
            href={`/docs/${repo.id}`}
            className="group block rounded-xl border border-border/70 bg-surface-elevated/35 p-3 sm:p-4 transition-all duration-200 hover:border-classic-blue/45 hover:bg-surface-elevated/50"
          >
            <div className="flex items-start gap-4">
              <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-md bg-surface-elevated/60 border border-border/60 text-classic-blue">
                {repoIcons[repo.icon]}
              </span>
              <div className="flex-1">
                <h2 className="text-[1rem] sm:text-lg font-semibold text-classic-blue mb-1.5 sm:mb-2 group-hover:text-classic-blue/85 transition-colors">
                  {repo.name}
                </h2>
                <p className="text-xs sm:text-sm text-foreground-secondary leading-relaxed">
                  {repo.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}