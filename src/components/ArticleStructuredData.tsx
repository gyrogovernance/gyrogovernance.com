interface ArticleStructuredDataProps {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  image?: string;
  url: string;
  tags?: string[];
}

export default function ArticleStructuredData({
  title,
  description,
  datePublished,
  dateModified,
  author,
  image,
  url,
  tags,
}: ArticleStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": title,
    "description": description,
    "image": image ? `https://gyrogovernance.com${image}` : "https://gyrogovernance.com/og-image.png",
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Organization",
      "name": author,
      "url": "https://gyrogovernance.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Gyro Governance",
      "logo": {
        "@type": "ImageObject",
        "url": "https://gyrogovernance.com/og-image.png",
        "width": 1200,
        "height": 630
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "keywords": tags?.join(", "),
    "articleSection": "AI Research",
    "inLanguage": "en-US"
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

