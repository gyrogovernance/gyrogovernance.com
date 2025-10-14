interface ArticleStructuredDataProps {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  image?: string;
  url: string;
  tags?: string[];
  category?: string;
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
  category,
}: ArticleStructuredDataProps) {
  // Use NewsArticle for reviews (Google News indexing), ScholarlyArticle for research/reports
  const articleType = category === "reviews" ? "NewsArticle" : "ScholarlyArticle";
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": articleType,
    "headline": title,
    "abstract": description,
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
      "url": "https://gyrogovernance.com",
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
    "articleSection": "AI Safety Research",
    "isAccessibleForFree": true,
    "inLanguage": "en-US",
    "license": "https://creativecommons.org/licenses/by-sa/4.0/"
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

