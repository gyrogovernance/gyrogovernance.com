import Link from 'next/link';

const repositories = [
  {
    id: 'tools',
    name: 'Tools',
    description: 'Development tools and frameworks',
    icon: '🧭'
  },
  {
    id: 'science',
    name: 'Science',
    description: 'Research papers and foundations',
    icon: '⚡'
  },
  {
    id: 'superintelligence',
    name: 'Superintelligence',
    description: 'AI and superintelligence research',
    icon: '❤️'
  }
];

export default function DocsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Documentation</h1>
        <p className="text-xl text-foreground-secondary">
          Comprehensive documentation for Gyro Governance tools, research, and frameworks.
        </p>
      </div>

      <div className="space-y-6">
        {repositories.map((repo) => (
          <Link
            key={repo.id}
            href={`/docs/${repo.id}`}
            className="block p-8 bg-surface-elevated/60 backdrop-blur-sm rounded-xl shadow-lg border border-border/80 hover:shadow-xl transition-all duration-200 hover:border-apple-blue/50"
          >
            <div className="flex items-start gap-6">
              <div className="text-4xl flex-shrink-0">{repo.icon}</div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-2 text-foreground">{repo.name}</h2>
                <p className="text-foreground-secondary">{repo.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}