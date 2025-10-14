interface SoftwareSchemaProps {
  name: string;
  description: string;
  url: string;
  codeRepository: string;
  applicationCategory: string;
  operatingSystem?: string;
  keywords?: string[];
}

export default function SoftwareSchema({
  name,
  description,
  url,
  codeRepository,
  applicationCategory,
  operatingSystem = "Cross-platform",
  keywords = [],
}: SoftwareSchemaProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "description": description,
    "url": url,
    "applicationCategory": applicationCategory,
    "operatingSystem": operatingSystem,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Organization",
      "name": "Gyro Governance",
      "url": "https://gyrogovernance.com"
    },
    "codeRepository": codeRepository,
    "programmingLanguage": ["Python", "TypeScript"],
    "license": "https://opensource.org/licenses/MIT",
    "keywords": keywords.join(", "),
    "isAccessibleForFree": true,
    "softwareVersion": "Latest",
    "datePublished": "2024",
    "softwareHelp": {
      "@type": "CreativeWork",
      "url": `${codeRepository}#readme`
    }
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

