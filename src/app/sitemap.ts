// Static sitemap for SEO
// This will be generated as a static file in public/sitemap.xml
const sitemapData = {
  urlset: {
    $: { xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9" },
    url: [
      {
        loc: "https://gyrogovernance.com/",
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: "weekly",
        priority: "1.0"
      },
      {
        loc: "https://gyrogovernance.com/about",
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: "monthly",
        priority: "0.8"
      }
    ]
  }
};

// Export for static generation (this won't work with dynamic routes in static export)
// Instead, we'll create a static sitemap.xml file
export default sitemapData;
