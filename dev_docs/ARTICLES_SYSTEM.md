# Articles System Documentation

## Overview

The articles system is designed to automatically generate all necessary files at build time from markdown files. This ensures that your content is always in sync across all parts of the website without requiring manual updates.

## Architecture

### Content Source
- **Location**: `src/content/articles/*.md`
- **Format**: Markdown files with YAML frontmatter

### Build-Time Generation

The system automatically generates:
1. **articles-data.ts** - Client-side article metadata for React components
2. **RSS feed** - `/articles/rss.xml` for subscribers
3. **Sitemap** - `/sitemap.xml` including all article URLs

## How It Works

### 1. Markdown Files

Each article is a markdown file in `src/content/articles/` with frontmatter:

```markdown
---
title: "Your Article Title"
excerpt: "Brief description for preview cards and SEO"
category: "reports" # or "featured"
date: "2025-09-28" # ISO format YYYY-MM-DD
coverImage: "/assets/cover-image.png"
featured: true # Optional: pin this article
tags: ["governance", "alignment", "physics"]
---

Your article content here in markdown...
```

### 2. Build Process

When you run `bun run build` or `bun run export`, article data generation runs automatically via lifecycle hooks:

```
bun run build
  └─ prebuild (auto)  →  Generate articles-data.ts
  └─ next build --turbopack
        ↓
      Generate RSS feed, sitemap, static HTML

bun run export
  └─ preexport (auto) →  Generate articles-data.ts
  └─ next build
        ↓
      Generate RSS feed, sitemap, static HTML
```

### 3. Generated Files

#### `src/lib/articles-data.ts`
- **Purpose**: Provides article metadata to client components
- **Auto-generated**: Yes, DO NOT edit manually
- **Source**: Parsed from markdown files
- **Used by**: `ArticlesPageClient.tsx` for listing and filtering

#### `/articles/rss.xml`
- **Type**: Route handler (force-static)
- **Source**: Server-side `listArticles()` function
- **Updated**: Every build automatically

#### `/sitemap.xml`
- **Type**: Route handler (force-static)
- **Includes**: All static pages + all article pages
- **Updated**: Every build automatically

## Adding New Articles

### Step 1: Create Markdown File

Create a new `.md` file in `src/content/articles/`:

```bash
src/content/articles/my-new-article.md
```

### Step 2: Add Frontmatter

```yaml
---
title: "My New Article"
excerpt: "A brief description"
category: "reports"
date: "2025-10-01"
coverImage: "/assets/my-article-cover.png"
featured: false
tags: ["governance"]
---
```

### Step 3: Write Content

Write your article content in markdown below the frontmatter.

### Step 4: Build

```bash
bun run build
```

That's it! Your article will automatically:
- ✅ Appear in the articles listing
- ✅ Get its own page at `/articles/my-new-article`
- ✅ Be included in the RSS feed
- ✅ Be added to the sitemap
- ✅ Be filterable by tags and category

## Development Workflow

### During Development
```bash
bun run dev
```
The dev server reads articles dynamically from markdown files. No need to run the generation script manually.

### Before Deployment
```bash
bun run export
```
This runs the prebuild script automatically and generates the static site.

## File Structure

```
src/
├── content/
│   └── articles/
│       ├── article-1.md
│       ├── article-2.md
│       └── article-3.md
├── lib/
│   ├── articles.ts          # Server-side functions (fs operations)
│   └── articles-data.ts     # Client-side data (auto-generated)
├── app/
│   └── articles/
│       ├── page.tsx         # Articles listing page
│       ├── [slug]/
│       │   └── page.tsx     # Individual article page
│       ├── rss.xml/
│       │   └── route.ts     # RSS feed generator
│       └── sitemap.xml/
│           └── route.ts     # Sitemap generator (relocated to root)
└── components/
    └── ArticlesPageClient.tsx  # Client component for filtering

scripts/
└── generate-articles-data.mjs  # Build-time generation script
```

## Advanced Features

### Featured Articles
Set `featured: true` in frontmatter to pin articles regardless of category:

```yaml
featured: true
```

### Tags
Add multiple tags for better organization:

```yaml
tags: ["governance", "alignment", "physics", "superintelligence"]
```

### Categories
Current categories:
- `featured` - Highlighted content
- `reports` - Research reports and insights

### Sorting
Articles are automatically sorted by date (newest first).

## Troubleshooting

### Articles not showing up?
1. Check frontmatter has required fields: `title`, `category`, `date`
2. Run `bun run prebuild` manually to see any warnings
3. Check console for parsing errors

### Sitemap not updating?
1. Delete the `out/` directory
2. Run `bun run build` again
3. Check `out/sitemap.xml` was generated

### RSS feed not updating?
The RSS feed is generated at build time using the same data source as articles. If articles show up but RSS doesn't update, try:
1. Clear browser cache
2. Check `out/articles/rss.xml` was generated

## CI/CD Integration

The system works automatically with any CI/CD pipeline. Example GitHub Actions:

```yaml
- name: Install dependencies
  run: bun install --frozen-lockfile

- name: Install Playwright browsers
  run: bunx playwright install --with-deps

- name: Build site
  run: bun run export
  
- name: Deploy
  # Your deployment step
```

The `prebuild` script runs automatically before `build`, so no extra steps needed.

## Performance

- **Build time**: ~5-10ms per article for data generation
- **Client bundle**: Minimal - only metadata is included
- **Runtime**: Zero overhead - all generation happens at build time

## Best Practices

1. **Commit generated files**: Commit `articles-data.ts` to git for transparency
2. **Use ISO dates**: Format dates as `YYYY-MM-DD` for consistency
3. **Optimize images**: Use optimized images for `coverImage`
4. **Write good excerpts**: Keep excerpts concise (1-2 sentences)
5. **Tag consistently**: Use lowercase tags for better filtering

## Future Enhancements

Potential improvements to consider:
- [ ] Author metadata
- [ ] Reading time calculation
- [ ] Related articles suggestions
- [ ] Full-text search
- [ ] JSON-LD structured data for articles
- [ ] Table of contents generation
- [ ] Multi-language support

