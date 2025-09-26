export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Gyro Governance",
    "url": "https://gyrogovernance.com",
    "logo": "https://gyrogovernance.com/og-image.png",
    "description": "Advancing AI governance through innovative research and development solutions. Mathematical physics foundations for AGI/ASI architecture and LLM alignment protocols.",
    "foundingDate": "2024",
    "sameAs": [
      "https://github.com/korompilias"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "technical support",
      "url": "https://gyrogovernance.com/about"
    },
    "areaServed": "Worldwide",
    "knowsAbout": [
      "Artificial Intelligence",
      "AI Governance",
      "Mathematical Physics",
      "AGI Architecture",
      "LLM Alignment",
      "Machine Learning",
      "AI Ethics"
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
