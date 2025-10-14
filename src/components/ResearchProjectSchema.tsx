interface ResearchProjectSchemaProps {
  name: string;
  description: string;
  url: string;
  keywords?: string[];
}

export default function ResearchProjectSchema({
  name,
  description,
  url,
  keywords = [],
}: ResearchProjectSchemaProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ResearchProject",
    "name": name,
    "description": description,
    "url": url,
    "keywords": keywords.join(", "),
    "about": [
      {
        "@type": "Thing",
        "name": "AI Safety"
      },
      {
        "@type": "Thing",
        "name": "AI Alignment"
      },
      {
        "@type": "Thing",
        "name": "AI Governance"
      }
    ],
    "author": {
      "@type": "Organization",
      "name": "Gyro Governance",
      "url": "https://gyrogovernance.com"
    },
    "funder": {
      "@type": "Organization",
      "name": "Gyro Governance",
      "url": "https://gyrogovernance.com"
    },
    "knowsAbout": [
      "AI Safety Evaluation",
      "AI Alignment Metrics",
      "Frontier AI Safety",
      "Mathematical Physics",
      "AI Governance"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2),
      }}
    />
  );
}

