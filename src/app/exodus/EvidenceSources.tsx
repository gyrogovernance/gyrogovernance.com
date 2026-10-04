const EVIDENCE_SOURCES = [
  {
    org: "MIT",
    label: "AI Incident Tracker",
    href: "https://airisk.mit.edu/ai-incident-tracker",
    domain: "airisk.mit.edu",
  },
  {
    org: "World Bank",
    label: "AI & Power Concentration",
    href: "https://www.worldbank.org/en/publication/wdr2026",
    domain: "worldbank.org",
  },
  {
    org: "UN",
    label: "Economic Insecurity & Inequality",
    href: "https://desapublications.un.org/publications/world-social-report-2025-new-policy-consensus-accelerate-social-progress",
    domain: "un.org",
  },
  {
    org: "ILO",
    label: "Generative AI and Jobs",
    href: "https://www.ilo.org/publications/generative-ai-and-jobs-refined-global-index-occupational-exposure",
    domain: "ilo.org",
  },
  {
    org: "IEA",
    label: "Energy and AI",
    href: "https://www.iea.org/reports/energy-and-ai/executive-summary",
    domain: "iea.org",
  },
  {
    org: "WHO",
    label: "Inequality & Human Health",
    href: "https://www.who.int/publications/i/item/9789240107588",
    domain: "who.int",
  },
] as const;

function SourcePill({
  source,
  duplicate = false,
}: {
  source: (typeof EVIDENCE_SOURCES)[number];
  duplicate?: boolean;
}) {
  return (
    <a
      href={source.href}
      target="_blank"
      rel="noopener noreferrer"
      className="evidence-pill"
      tabIndex={duplicate ? -1 : undefined}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://www.google.com/s2/favicons?domain=${source.domain}&sz=64`}
        alt=""
        width={22}
        height={22}
        className="evidence-pill-icon"
        loading="lazy"
      />
      <span className="evidence-pill-org">{source.org}</span>
      <span className="evidence-pill-sep" aria-hidden="true">
        ·
      </span>
      <span className="evidence-pill-label">{source.label}</span>
    </a>
  );
}

export default function EvidenceSources() {
  return (
    <div className="mb-6" aria-label="Supporting sources">
      <p className="text-sm font-semibold uppercase tracking-wider text-foreground-secondary/70 mb-3 text-center">
        Sources
      </p>
      <div className="evidence-marquee">
        <div className="evidence-marquee-track">
          <div className="evidence-marquee-group">
            {EVIDENCE_SOURCES.map((source) => (
              <SourcePill key={source.org} source={source} />
            ))}
          </div>
          <div className="evidence-marquee-group" aria-hidden="true">
            {EVIDENCE_SOURCES.map((source) => (
              <SourcePill key={`dup-${source.org}`} source={source} duplicate />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
