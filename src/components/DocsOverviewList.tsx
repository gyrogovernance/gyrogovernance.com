import Link from "next/link";

interface DocsItem {
  slug: string;
  title: string;
  description?: string;
  isFolder?: boolean;
  children?: DocsItem[];
}

interface DocsOverviewListProps {
  basePath: string;
  docs: DocsItem[];
}

function OverviewCard({
  href,
  title,
  description
}: {
  href: string;
  title: string;
  description?: string;
}) {
  return (
    <Link
      href={href}
      className="block px-3 py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-4 border-b border-border/40 last:border-b-0 transition-colors hover:bg-surface-elevated/40"
    >
      <div className="flex flex-col gap-1">
        <span className="text-sm sm:text-[15px] font-semibold leading-tight text-foreground">{title}</span>
        {!!description && (
          <span className="text-xs sm:text-sm leading-relaxed text-foreground-secondary">
            {description}
          </span>
        )}
      </div>
    </Link>
  );
}

export default function DocsOverviewList({
  basePath,
  docs
}: DocsOverviewListProps) {
  return (
    <div className="space-y-2 sm:space-y-3">
      {docs.map((doc) => {
        if (doc.isFolder && doc.children && doc.children.length > 0) {
          return (
            <section
              key={doc.slug}
              className="overflow-hidden rounded-3xl !shadow-none border border-border/65 bg-surface-elevated/35"
            >
              <div className="px-3 py-2.5 sm:px-4 sm:py-3 border-b border-border/60">
                <h2 className="text-sm sm:text-[0.95rem] font-semibold tracking-wide text-apple-blue">
                  {doc.title}
                </h2>
              </div>

              <div className="divide-y divide-border/40">
                {doc.children.map((child) => (
                  <OverviewCard
                    key={child.slug}
                    href={`/docs/${basePath}/${doc.slug}/${child.slug}`}
                    title={child.title}
                    description={child.description}
                  />
                ))}
              </div>
            </section>
          );
        }

        return (
          <Link
            key={doc.slug}
            href={`/docs/${basePath}/${doc.slug}`}
            className="block rounded-3xl !shadow-none border border-border/65 bg-surface-elevated/35 px-3 py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-5 transition-colors hover:border-apple-blue/50 hover:bg-surface-elevated/50"
          >
            <span className="text-sm sm:text-base font-semibold leading-tight text-apple-blue">
              {doc.title}
            </span>
            {!!doc.description && (
              <p className="mt-1 text-xs sm:text-sm leading-relaxed text-foreground-secondary">
                {doc.description}
              </p>
            )}
          </Link>
        );
      })}
    </div>
  );
}
