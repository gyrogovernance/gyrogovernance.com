# Gyro Governance Website

A modern, responsive website for Gyro Governance - AI Research and Development organization, built with Astro and the Pure theme.

## 🚀 Features

- **Modern Design**: Clean, professional design with responsive layout
- **Fast Performance**: Built with Astro for optimal performance
- **SEO Optimized**: Built-in SEO features and sitemap generation
- **Search Functionality**: Integrated search with Pagefind
- **Blog Support**: Markdown-based blog with MDX support
- **Comment System**: Waline comment system integration
- **GitHub Pages Ready**: Configured for GitHub Pages deployment

## 📁 Project Structure

```
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, styles, and other assets
│   ├── components/        # Reusable components
│   ├── layouts/           # Page layouts
│   ├── pages/             # Website pages
│   │   ├── about/         # About page
│   │   ├── research/      # Research page
│   │   ├── blog/          # Blog pages
│   │   └── ...
│   ├── content/           # Content collections (blog posts, docs)
│   └── site.config.ts     # Site configuration
├── .github/workflows/     # GitHub Actions
└── astro.config.ts        # Astro configuration
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/gyrogovernance/gyrogovernance.com.git
cd gyrogovernance.com
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run format` - Format code with Prettier
- `npm run lint` - Lint code with ESLint

## 🚀 Deployment

### GitHub Pages

The website is configured for automatic deployment to GitHub Pages:

1. **Enable GitHub Pages**: Go to your repository settings and enable GitHub Pages
2. **Set Source**: Choose "GitHub Actions" as the source
3. **Push to Main**: The site will automatically deploy when you push to the main branch

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:
- Build the site
- Deploy to GitHub Pages
- Handle the custom domain configuration

### Custom Domain

The site is configured for the custom domain `gyrogovernance.com`:

1. **DNS Configuration**: Point your domain to GitHub Pages:
   - Add a CNAME record pointing to `gyrogovernance.github.io`
   - Or add A records for GitHub Pages IPs

2. **GitHub Pages Settings**: 
   - Go to repository Settings > Pages
   - Add your custom domain in the "Custom domain" field
   - Enable "Enforce HTTPS"

3. **CNAME File**: The `public/CNAME` file contains the custom domain name

## 📝 Content Management

### Adding Blog Posts

1. Create a new markdown file in `src/content/blog/`
2. Add frontmatter with required fields:
```yaml
---
title: 'Your Post Title'
description: 'Post description'
publishDate: '2024-12-01'
tags: ['AI', 'Governance']
heroImage: { src: './thumbnail.jpg', alt: 'Post image' }
draft: false
---
```

### Updating Site Configuration

Edit `src/site.config.ts` to update:
- Site title and description
- Navigation menu
- Social media links
- Footer content
- Theme settings

### Adding New Pages

1. Create a new `.astro` file in `src/pages/`
2. Use the appropriate layout from `src/layouts/`
3. Add navigation links in `src/site.config.ts`

## 🎨 Customization

### Theme Configuration

The site uses the Astro Pure theme. Key configuration files:

- `src/site.config.ts` - Main site configuration
- `astro.config.ts` - Astro and build configuration
- `uno.config.ts` - UnoCSS configuration
- `src/assets/styles/app.css` - Custom styles

### Styling

- Uses UnoCSS for utility-first styling
- Custom CSS can be added to `src/assets/styles/app.css`
- Component-specific styles can be added to individual components

## 📚 Documentation

- [Astro Documentation](https://docs.astro.build/)
- [Astro Pure Theme](https://github.com/cworld1/astro-theme-pure)
- [UnoCSS Documentation](https://unocss.dev/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm run build`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- Website: [gyrogovernance.com](https://gyrogovernance.com)
- Email: contact@gyrogovernance.com
- GitHub: [@gyrogovernance](https://github.com/gyrogovernance)
- Twitter: [@gyrogovernance](https://twitter.com/gyrogovernance)