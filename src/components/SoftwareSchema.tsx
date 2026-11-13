interface SoftwareSchemaProps {
  name: string;
  description: string;
  url: string;
  codeRepository: string;
  applicationCategory: string;
  operatingSystem?: string;
  keywords?: string[];
  softwareVersion?: string;
  datePublished?: string;
  downloadUrl?: string | string[];
  screenshot?: string | string[];
  license?: string;
}

export default function SoftwareSchema({
  name,
  description,
  url,
  codeRepository,
  applicationCategory,
  operatingSystem = "Cross-platform",
  keywords = [],
  softwareVersion = "Latest",
  datePublished = "2024",
  downloadUrl,
  screenshot,
  license = "https://opensource.org/licenses/MIT",
}: SoftwareSchemaProps) {
  const structuredData: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url,
    applicationCategory,
    operatingSystem,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: "Gyro Governance",
      url: "https://gyrogovernance.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Gyro Governance",
      url: "https://gyrogovernance.com",
    },
    codeRepository,
    programmingLanguage: ["TypeScript", "Python"],
    license,
    keywords: keywords.join(", "),
    isAccessibleForFree: true,
    softwareVersion,
    datePublished,
    softwareHelp: {
      "@type": "CreativeWork",
      url: `${codeRepository}#readme`,
    },
  };

  if (downloadUrl) {
    structuredData.downloadUrl = downloadUrl;
  }
  if (screenshot) {
    structuredData.screenshot = screenshot;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
