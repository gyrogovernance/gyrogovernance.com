# Technology Stack Documentation

## Overview

The Gyro Governance website is built using a modern, performant tech stack focused on static site generation, type safety, and excellent developer experience.

---

## Core Framework

### Next.js 15.5.7 (App Router)

The website uses the **Next.js App Router** architecture (not the Pages Router). This is confirmed by:

- The `src/app/` directory structure
- Route handlers in `src/app/*/route.ts` files
- Server Components by default
- File-based routing with layouts

**Key Features:**
- **App Router**: Modern routing architecture with layouts, loading states, and error boundaries
- **Static Site Export**: Configured with `output: 'export'` for fully static deployment
- **Turbopack**: Used for both development (`--turbopack`) and production builds for faster compilation
- **Route Handlers**: Used for dynamic XML generation (RSS feed, sitemap)

**Configuration:**
- Static export mode for deployment to any static hosting
- Trailing slashes enabled for URL consistency
- Unoptimized images (for static export compatibility)
- SVG support with security policies

---

## Frontend Framework

### React 19.2.1

**Latest React version** with:
- Server Components (default in App Router)
- Client Components (marked with `'use client'`)
- React Server Actions (where needed)
- Automatic code splitting and lazy loading

### React DOM 19.2.1

Synchronized with React version for optimal compatibility.

---

## Language & Type Safety

### TypeScript 5.x

**Strict mode enabled** with:
- Type checking for all components
- Path aliases (`@/*` maps to `./src/*`)
- ES Module support with `moduleResolution: "bundler"`
- Incremental compilation for faster builds

**Configuration:**
- Target: ES2017
- Strict mode enabled
- Isolated modules
- Path mapping for cleaner imports

---

## Styling

### Tailwind CSS 4.x

**Latest Tailwind CSS** with:
- PostCSS integration via `@tailwindcss/postcss`
- Typography plugin (`@tailwindcss/typography`) for rich content formatting
- Custom theme extensions
- Dark mode support via class-based theming

**Custom Theme:**
- Custom font families (Nunito, Geist Sans, Geist Mono)
- Extended color palette (apple-blue, apple-purple, apple-pink)
- Custom font weights
- Responsive design utilities

### CSS

**Global styles** in `src/app/globals.css`:
- CSS custom properties (CSS variables) for theming
- Dark mode variables
- Utility classes for animations
- Critical CSS for above-the-fold content

---

## Fonts

### Google Fonts Integration

**Three font families** loaded via Next.js font optimization:

1. **Geist Sans** - Primary sans-serif font
   - Variable font with display swap
   - Preloaded for performance

2. **Geist Mono** - Monospace font
   - For code and technical content
   - Display swap enabled

3. **Nunito** - Content font
   - Weights: 400, 500, 600, 700, 800
   - Preloaded with system fallbacks

**Optimization:**
- Automatic font subsetting
- Self-hosted font loading
- Preload hints for critical fonts
- Font display swap for performance

---

## Content Management

### Markdown-Based CMS

**Build-time content generation** system:

- **Source**: Markdown files in `src/content/articles/`
- **Parser**: `gray-matter` for frontmatter extraction
- **Renderer**: `marked` for markdown-to-HTML conversion
- **Generator**: Custom scripts for build-time data generation

**Features:**
- YAML frontmatter for metadata
- Automatic article data generation
- RSS feed generation
- Sitemap generation
- Static HTML generation

**Build Process:**
1. Markdown files parsed at build time
2. Metadata extracted and processed
3. `articles-data.ts` generated automatically
4. Static HTML pages generated
5. RSS and sitemap XML generated

### Documentation System

**Dynamic file-based documentation** with:
- **Source**: Markdown files in `src/content/docs/{repo}/`
- **Navigation**: Server-generated sidebar with hierarchical structure
- **Routing**: Dynamic routes `docs/[repo]/[...slug]` for any nesting depth
- **Table of Contents**: Client-side generated from headings
- **Static Generation**: All docs pre-rendered for optimal performance

**Features:**
- Folder/file hierarchy with expandable navigation
- Active page highlighting and breadcrumbs
- Auto-generated ToC with scroll-spy functionality
- Real-time file system reflection (add/remove files instantly)
- Responsive design with mobile-friendly navigation

**Architecture:**
- Server components for file system scanning
- Client components for interactive navigation
- Portal rendering for right sidebar ToC
- Static params generation for all nested routes
- TypeScript interfaces for type safety

### Automated Link Validation

**Comprehensive site-wide link checker** for ensuring website integrity:

---

## CGM Knowledge Base Search

**Client-side search system** for the CGM dataset:

- **Source**: JSONL dataset at `src/content/dataset/cgm_dataset_main.jsonl`
- **Index**: Pre-built JSON at `public/search-index/index.json`
- **Component**: `src/components/CGMSearch.jsx`
- **Route**: `/search`

### Dataset Schema

Each record contains:

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique identifier (e.g., `cgm_001`) |
| `source` | string | Origin markdown file path |
| `section` | string | Document section/heading |
| `category` | string | Domain tag (`axiom`, `prediction`, `cosmology`, etc.) |
| `type` | string | Content type (`concept`, `equation`, `claim`, etc.) |
| `question` | string | Natural language question |
| `answer` | string | Faithful answer from source |
| `context` | string | Verbatim excerpt from source |
| `tags` | array | Searchable keywords |
| `importance` | string | `core`, `supporting`, or `detail` |

### Build Process

**Run manually when dataset changes:**

```bash
node scripts/build-search-index.js
```

This generates `public/search-index/index.json` containing:
- All records from the JSONL
- Facets for filtering (categories, types, tags, importance levels)

**Note**: The index is committed to the repository. No build-time generation required.

### Search Features

- **Text search**: Scored by match location (tags > question > answer > context)
- **Filters**: Category, type, importance, individual tags
- **Highlighting**: Matched terms highlighted in results
- **Expandable context**: Show source context and document location

### Architecture

```
cgm_dataset_main.jsonl
        ↓
  build-search-index.js (run manually)
        ↓
  public/search-index/index.json (committed)
        ↓
  CGMSearch.jsx loads at runtime
        ↓
  Client-side filtering and scoring
```

### Adding New Entries

1. Add records to `src/content/dataset/cgm_dataset_main.jsonl`
2. Run `node scripts/build-search-index.js`
3. Commit both files

- **Technology**: Node.js HTTP client with intelligent crawling
- **Coverage**: All internal links across the entire website
- **Features**:
  - Automatic site crawling and link discovery
  - Redirect handling (HTTP 308/301/302/307)
  - Duplicate link filtering and deduplication
  - HTTP status code validation (200-399 range)
  - Timeout handling and error reporting
  - CI/CD integration ready
- **Usage**: `npm run check-links` (requires dev server running)
- **Output**: Real-time status reports with ✅/❌ indicators
- **Performance**: Comprehensive crawling with smart limits

**Benefits:**
- Prevents broken links across the entire site
- Catches navigation issues before deployment
- Validates both documentation and main site links
- Maintains user experience quality
- Supports automated deployment pipelines

---

## Build Tools & Performance

### Turbopack

**Next-generation bundler** used for:
- Development server (`next dev --turbopack`)
- Production builds (`next build --turbopack`)
- Faster compilation times
- Better incremental builds

### Node.js 20+

**Required versions:**
- Node.js >= 20.0.0
- npm >= 10.0.0

### Build Scripts

```json
{
  "dev": "next dev --turbopack",
  "dev:fast": "next dev --turbopack",
  "prebuild": "node scripts/clean-build.mjs && node scripts/generate-articles-data.mjs",
  "build": "next build --turbopack",
  "export": "npm run prebuild && next build --turbopack",
  "start": "next start",
  "lint": "eslint"
}
```

---

## Code Quality

### ESLint 9.x

**Modern flat config** with:
- Next.js core web vitals rules
- TypeScript-specific rules
- Automatic ignores for build artifacts

### TypeScript Compiler

**Strict type checking:**
- No implicit any
- Strict null checks
- Strict function types
- No unused locals/parameters

---

## UI Components & Libraries

### Heroicons 2.2.0

**SVG icon library** with:
- React components for icons
- Optimized package imports
- Custom icon components

### Recharts 3.5.1

**Charting library** for:
- Data visualizations
- Responsive charts
- Interactive graphs

---

## SEO & Metadata

### Next.js Metadata API

**Comprehensive SEO** configuration:
- Dynamic metadata per page
- Open Graph tags
- Twitter Card tags
- Structured data (JSON-LD)
- Sitemap generation
- RSS feed generation

**Features:**
- Canonical URLs
- Robots directives
- Image metadata
- Social sharing optimization

---

## Performance Optimizations

### Static Site Generation

**Fully static export:**
- All pages pre-rendered at build time
- Zero server-side runtime
- Maximum CDN caching
- Fastest possible load times

### Image Optimization

**Next.js Image component** with:
- Automatic format optimization
- Responsive images
- Lazy loading
- Priority loading for above-the-fold

### Code Splitting

**Automatic code splitting:**
- Route-based splitting
- Component-level splitting
- Dynamic imports
- Minimal JavaScript bundles

### Caching

**Vercel configuration** (`vercel.json`):
- Static assets: 1 year cache
- HTML pages: 1 hour cache
- Fonts and images: Long-term caching

---

## Analytics

### Google Analytics

**Privacy-focused implementation:**
- Delayed loading (after user interaction)
- Consent mode enabled
- Anonymized IP addresses
- No ad personalization
- Minimal data collection

**Loading Strategy:**
- Loads after 3 seconds OR first user interaction
- Beacon transport for efficiency
- Respects user consent preferences

---

## Theme System

### Custom Theme Provider

**Dark mode support:**
- System preference detection
- Manual toggle
- Persistent user preference
- Smooth transitions

**Implementation:**
- CSS custom properties
- Class-based theming
- No flash of unstyled content
- Accessible contrast ratios

---

## Deployment

### Static Hosting

**Hostes:**
- GitHub Pages

**Designed for static deployment:**
- Vercel (primary)
- Netlify compatible
- Any static host compatible

**Features:**
- Pre-built static files
- No server required
- Maximum portability
- CDN-friendly

---

## Development Tools

### Custom Scripts

**Build automation scripts:**
- `clean-build.mjs` - Clean build artifacts
- `generate-articles-data.mjs` - Generate article metadata
- `generate-responsive-images.mjs` - Image optimization
- `optimize-images.mjs` - Image compression
- `link-checker.js` - Comprehensive site-wide link validation

### Git Integration

**Version control:**
- Git-based workflow
- Generated files committed (for transparency)
- Pre-build hooks
- CI/CD ready

---

## Security

### Content Security Policy

**SVG security:**
- Sandboxed SVG rendering
- Restricted script execution
- Safe image handling

### Privacy

**User privacy:**
- Cookie consent banner
- Analytics consent mode
- Minimal data collection
- GDPR considerations

---

## File Structure

```
gyrogovernance.com/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   ├── articles/          # Article routes
│   │   ├── docs/              # Documentation routes
│   │   │   ├── layout.tsx     # Docs layout with sidebars
│   │   │   ├── page.tsx       # Docs homepage
│   │   │   ├── [repo]/        # Repository routes
│   │   │   │   ├── page.tsx   # Repository overview
│   │   │   │   └── [...slug]/ # Dynamic doc pages
│   │   ├── about/             # About page
│   │   └── [slug]/            # Dynamic routes
│   ├── components/            # React components
│   │   ├── DocsSidebar.tsx    # Server component for docs navigation
│   │   ├── DocsSidebarClient.tsx # Client component for interactive nav
│   │   ├── DocsToc.tsx        # Table of contents component
│   │   └── ArticleToc.tsx     # Article table of contents
│   ├── content/               # Markdown content
│   │   ├── articles/          # Article markdown files
│   │   └── docs/              # Documentation markdown files
│   │       ├── tools/         # Tools documentation
│   │       ├── science/       # Science documentation
│   │       └── superintelligence/ # AI documentation
│   └── lib/                   # Utility functions
│       ├── articles.ts        # Server-side article functions
│       ├── docs.ts            # Markdown rendering utilities
│       └── articles-data.ts   # Client-side data (generated)
├── public/                    # Static assets
├── scripts/                   # Build scripts
├── docs/                      # Project documentation
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies
```

---

## Key Dependencies Summary

### Production Dependencies
- `next`: 15.5.7 - Core framework
- `react`: 19.2.1 - UI library
- `react-dom`: 19.2.1 - React rendering
- `@heroicons/react`: 2.2.0 - Icons
- `gray-matter`: 4.0.3 - Markdown frontmatter
- `marked`: 16.3.0 - Markdown rendering
- `recharts`: 3.5.1 - Charts

### Development Dependencies
- `typescript`: 5.x - Type safety
- `tailwindcss`: 4.x - Styling
- `@tailwindcss/typography`: 0.5.19 - Typography plugin
- `eslint`: 9.x - Linting
- `eslint-config-next`: 15.5.7 - Next.js ESLint config

---

## Performance Metrics

**Target Metrics:**
- Lighthouse Performance: 95+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.0s
- Cumulative Layout Shift: < 0.1

**Achievements:**
- Fully static site (instant server response)
- Optimized images and fonts
- Minimal JavaScript bundles
- Efficient code splitting
- Long-term caching

---

## Browser Support

**Modern browsers:**
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

**Features:**
- CSS Grid and Flexbox
- ES2017+ JavaScript
- CSS Custom Properties
- Modern font loading

---

## Future Considerations

**Potential Enhancements:**
- Progressive Web App (PWA) support
- Service Worker for offline access
- Enhanced image optimization
- Advanced caching strategies
- More interactive visualizations

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Documentation](https://vercel.com/docs)

---

**Last Updated**: January 22, 2026
**Maintained By**: Gyro Governance
