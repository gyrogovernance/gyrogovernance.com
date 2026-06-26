export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Gyro Governance",
    "alternateName": "GyroGovernance",
    "url": "https://gyrogovernance.com",
    "logo": "https://gyrogovernance.com/og-image.png",
    "description": "Research lab specializing in AI safety evaluation, alignment metrics, and governance through mathematical physics foundations. Developing frontier AI safety frameworks and superintelligence alignment tools.",
    "foundingDate": "2018",
    "founder": {
      "@type": "Person",
      "name": "Basil Korompilias",
      "url": "https://korompilias.github.io/",
      "sameAs": [
        "https://www.linkedin.com/in/korompilias",
        "https://github.com/korompilias"
      ],
      "jobTitle": "AI Governance Lead"
    },
    "sameAs": [
      "https://github.com/gyrogovernance",
      "https://github.com/korompilias",
      "https://www.linkedin.com/in/korompilias"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "research inquiries",
      "email": "basilkorompilias@gmail.com",
      "url": "https://gyrogovernance.com/about"
    },
    "areaServed": "Worldwide",
    "knowsAbout": [
      "AI Safety Evaluation",
      "AI Alignment Metrics",
      "Frontier AI Safety",
      "AI Governance",
      "Mathematical Physics",
      "AGI Safety",
      "Superintelligence Alignment",
      "LLM Alignment",
      "AI Risk Assessment",
      "Independent AI Testing",
      "AI Pathology Detection",
      "Structural AI Alignment",
      "Gyroscopic Dynamics",
      "AI Control Mechanisms",
      "AI Safety Frameworks"
    ],
    "researchArea": [
      "Artificial Intelligence Safety",
      "AI Alignment Theory",
      "Frontier Model Evaluation",
      "AI Governance Frameworks",
      "Mathematical Physics Applications",
      "Superintelligence Architecture",
      "AI Pathology Detection"
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
