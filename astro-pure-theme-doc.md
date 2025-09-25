---
title: 'Getting Started'
description: 'Get started with the Astro Theme Pure'
order: 1
---

import { Steps, Aside, Tabs, TabItem } from 'astro-pure/user'

## Installation

Two way to install. "Template" way is lightweight and simple, but hard to update; while "Fork" way is easy to update but needs some skills for git.

### Install Using Template

<Aside type='tip'>
Astro has a great article teaching you setting up project: [Install and set up Astro #Use a theme or starter template](https://docs.astro.build/en/install-and-setup/#use-a-theme-or-starter-template) 
</Aside>

<Steps>

1. Install the theme

   Execute the following command in the your user directory to install the theme:
   
   <Tabs>
   <TabItem label='bun'>
   ```shell
   bun create astro@latest --template cworld1/astro-theme-pure
   ```
   <Aside type='tip'>
   For Bun, if the installation is slow, it is recommended to use a mirror configuration by creating `bunfig.toml` under the project root directory:

   ```toml title="bunfig.toml"
   [install]
   registry = "<npm mirror site>"
   ```

   For details about other PM mirror configs, you may need to see their official documents.
   </Aside>
   </TabItem>
   <TabItem label='pnpm'>
   ```shell
   pnpm create astro@latest --template cworld1/astro-theme-pure
   ```
   </TabItem>
   <TabItem label='yarn'>
   ```shell
   yarn create astro --template cworld1/astro-theme-pure
   ```
   </TabItem>
   <TabItem label='npm'>
   ```shell
   npm create astro@latest -- --template cworld1/astro-theme-pure
   ```
   </TabItem>
   </Tabs>

   By default, this command will use the template repository’s main branch. To use a different branch name, pass it as part of the `--template` argument: `cworld1/astro-theme-pure#<branch>`.

2. Answer the questions and follow the instructions of the CLI wizard.

3. VOILA!

   You can now [start the Astro dev server](https://docs.astro.build/en/install-and-setup/#start-the-astro-dev-server) and see a live preview of your project while you make it your own!

</Steps>

### Install Using Fork

You only need to [click fork button at theme repository](https://github.com/cworld1/astro-theme-pure/fork) to create your project; then clone the forked repository to your local machine.

```shell
git clone https://github.com/<your-username>/astro-theme-pure.git
```

Then, you can start the Astro dev server and see a live preview of your project while you make it your own!

## Start the Dev Server

Go to your project directory:

```shell
cd ./<your-project>
```

<Tabs>
<TabItem label='bun'>
```shell
bun dev
```
</TabItem>
<TabItem label='pnpm'>
```shell
pnpm dev
```
</TabItem>
<TabItem label='yarn'>
```shell
yarn run dev
```
</TabItem>
<TabItem label='npm'>
```shell
npm run dev
```
</TabItem>
</Tabs>

Next, please read the configuration notes first and continue configuring the theme.

## Migrate to Astro

See [Astro: Migrate an existing project to Astro](https://docs.astro.build/en/guides/migrate-to-astro/).

## Theme File Structure

The theme file structure is as follows:

- `public`: Static resources that will be copied to the root directory
- `src`:
  - `assets`: Static resources
  - `components`: Components used in the theme, also include user-like components, like `Card`, `Collapse`, `Spoiler`, etc.
  - `layouts`: Basic site layouts
  - `pages`: Pages like `404`, `about`, `blog`, `docs`, `index`, etc.
  - `plugins`: Extended plugins used in the theme
  - `types`: Typescript type definitions
  - `utils`: Utilities
  - `site.config.ts`: Theme configuration file
- `astro.config.mjs`: Astro configuration file
- `eslint.config.mjs`: ESLint configuration file
- `prettier.config.mjs`: Prettier configuration file
- `uno.config.ts`: UnoCSS configuration file
- `tsconfig.json`: Typescript configuration file
- `package.json`: Package information

## Simple Setup


<Steps>

1. Remove docs files

   - Remove the `src/pages/docs` directory
   - Remove the menu declaration in `src/site.config.ts`:
   
   ```ts title="src/site.config.ts"
   export const theme: ThemeUserConfig = {
      // ...
      /** Configure the header of your site. */
      header: {
         menu: [
            { title: 'Blog', link: '/blog' },
            { title: 'Docs', link: '/docs' }, // [!code --]
            // ...
         ],
      },
   }
   ```

   - Remove the Content Collection for docs in `src/content.config.ts`:

   ```ts title="src/content.config.ts"
   const docs = defineCollection({ // [!code --]
   loader: glob({ base: './src/content/docs', pattern: '**/*.{md,mdx}' }), // [!code --]
   schema: ({ image }) => // [!code --]
      z.object({ // [!code --]
         ... // [!code --]
      }) // [!code --]
   }) // [!code --]
   export const collections = { blog, docs } // [!code --]
   export const collections = { blog } // [!code ++]
   ```

2. Remove `packages` directory (this will be imported by our NPM package)

3. Change the site favicon.

   <Aside type='tip'>
   [Favicon.io](https://favicon.io/) is a great tool that can help you generate favicons quickly.
   </Aside>

   Replace the `public/favicon/*` files with your own favicon.

4. Replace your avatar image.

   Replace the `src/assets/avatar.png` file with your own avatar image.

5. Configure the site

   You can configure your project inside the `src/site.config.ts` configuration file:

   ```ts title="src/site.config.ts"
   export const theme: ThemeUserConfig = {
      author: 'CWorld',
      title: 'Astro Theme Pure',
      site: 'https://astro-pure.js.org',
      description: 'Stay hungry, stay foolish',
      // ...
   }

   export const integ: IntegrationUserConfig = { /* ... */ }
   // ...
   ```

6. Typescript Syntax

   The configuration file `site.config.ts` uses Typescript syntax. If you are not familiar with TS syntax, please read about it [here](https://learnxinyminutes.com/docs/typescript/) first.

</Steps>

---
title: 'Configuration'
description: 'Configuration files'
order: 4
---

## Theme Configuration

File: `src/site.config.ts`

pending update...

## Astro Configuration

File: `astro.config.mjs`

You can configure it to change deployment methods, add rehype & remark plugins, and more.

Read more about Astro configuration [here](https://docs.astro.build/en/guides/configuring-astro/).

## ESLint Configuration

File: `eslint.config.mjs`

You can configure ESLint to change rules and security checks.

Read more about ESLint configuration [here](https://eslint.org/docs/latest/use/configure/configuration-files).

## Prettier Configuration

File: `prettier.config.mjs`

You can configure Prettier to change code formatting rules, this can change your experience using package command `format` and extension support for your favorite IDE.

Options are available [here](https://prettier.io/docs/en/options).

## UnoCSS Configuration

File: `uno.config.ts`

It is a utility-first CSS framework building custom designs. Theme also uses its preset `typography` to make type settings.

Checkout [UnoCSS & Styles ](/docs/integrations/unocss) for more info.

## Typescript Configuration

File: `tsconfig.json`

---
title: 'Authoring Content'
description: 'Making your own content'
order: 2
---

import { Aside } from 'astro-pure/user'

Astro helps you [author and present your content](https://docs.astro.build/en/guides/content/). You can write a blog post directly in Astro using Markdown/MDX, or fetch your content from a headless CMS. Astro lets you build a site around your content: you can add a layout to your pages, create an index of posts, and set up an RSS feed to allow readers to subscribe.

## Writing Content

In Astro, you can author your content in a variety of ways:

- In Markdown files (`.md` or [alternative extensions](https://docs.astro.build/en/guides/markdown-content/)), designed to make it easy to write rich text content.
- In MDX (`.mdx`) or Markdoc (`.mdoc`) files with [an official integration](https://docs.astro.build/en/guides/integrations-guide/), which can include components and dynamic expressions in your document.
- Using a [third-party content management system (CMS)](https://docs.astro.build/en/guides/content/#headless-cms-authoring), then pulling that content into a `.astro` page.
- Other options (less commonly used for content-heavy pages) include [`.astro` files](https://docs.astro.build/en/basics/astro-pages/#astro-pages) and [`.html` files](https://docs.astro.build/en/basics/astro-pages/#html-pages).

For this theme, `.md` and `.mdx` is suopported by default.

### Markdown Authoring

Markdown is a convenient syntax for writing rich text with basic formatting and common elements like headers, lists, and images. Astro has built-in support for Markdown files in your project.

Create and write a new `.md` file in your code editor or bring in an existing file written in your favorite Markdown editor. Some online Markdown editors like [StackEdit](https://stackedit.io/) and [Dillinger](https://dillinger.io) will even allow you to edit and sync your work with your Astro repository stored on GitHub.

Let's give you example of [writing Markdown content in Astro](https://docs.astro.build/en/guides/markdown-content/):

```markdown title="src/content/blog/first-article.md"
---
title: 'First Article' # (Required, max 60)
description: 'I like writing articles.' # (Required, 10 to 160)
publishDate: '2024-11-30 00:08:00' # (Required, Date)
tags:
  - Markdown # (Also can write format like next line)
heroImage: { src: './thumbnail.jpg', alt: 'an image targetting my article', color: '#B4C6DA' }
# thumbnail.jpg should be in the same folder as the article
draft: false # (set true will only show in development)
language: 'English' # (String as you like)
comment: true # (set false will disable comment, even if you've enabled it in site-config)
---

## This is a title

This is a paragraph.
```

If you have a lot of assets, you can create a folder for title like `src/content/blog/first-article/` and put all your assets in there. Of course, your content should be renamed to `index.md` or `index.mdx` and also be contained in this folder.

<Aside type='tip'>

If you want to use remote image for `heroImage`, please add `inferSize: true` or specificed `width` and `height` to the object `heroImage`. Example:

```yaml
heroImage:
  { src: 'https://img.tukuppt.com/ad_preview/00/15/09/5e715a320b68e.jpg!/fw/980', inferSize: true }
# Or specificed width and height
heroImage:
  { src: 'https://img.tukuppt.com/ad_preview/00/15/09/5e715a320b68e.jpg!/fw/980', width: 980, height: 551 }
```

</Aside>

Too complex? Simple example just need these:

```markdown title="src/content/blog/simple-article.md"
---
title: Simple Article
description: Just another simple article.
publishDate: 2024-07-26
---

I like writing simple articles.
```

<Aside type='tip'>
This theme has a quick script to create a new article for you. Just run `bun new <post-slug>` in your terminal.
</Aside>

### MDX Authoring

This allows you to include UI elements such as a banner or an interactive carousel along with your text content.

Write and edit `.mdx` files directly in your code editor, alongside your project files. MDX files are a [supported page file type](https://docs.astro.build/en/basics/astro-pages/#supported-page-files) in Astro, and may also be used as [content collection entries](https://docs.astro.build/en/guides/content/#content-collections).

For integrated components, checkout [User Components](/docs/integrations/components) and [Advanced Components](/docs/integrations/advanced).

### Connect a CMS

See [Astro: Use a CMS with Astro](https://docs.astro.build/en/guides/cms/)

## Pages

Astro uses **file-based routing** to [generate your build URLs](https://docs.astro.build/en/guides/routing/) based on the file layout of your project `src/pages/` directory.

### Routes

`.astro` [page components](https://docs.astro.build/en/basics/astro-pages/) as well as Markdown and MDX Files (`.md`, `.mdx`) within the `src/pages/` directory **automatically become pages on your website**. Each page’s route corresponds to its path and filename within the `src/pages/` directory.

```diff
# Example: Static routes
src/pages/index.astro        -> mysite.com/
src/pages/about.astro        -> mysite.com/about
src/pages/about/index.astro  -> mysite.com/about
src/pages/about/me.astro     -> mysite.com/about/me
src/pages/posts/1.md         -> mysite.com/posts/1
```

<Aside type='tip'>

There is no separate "routing config" to maintain in an Astro project! When you add a file to the `src/pages/` directory, a new route is automatically created for you. In static builds, you can customize the file output format using the [`build.format`](https://docs.astro.build/en/reference/configuration-reference/#buildformat) configuration option.

</Aside>

### Astro Pages

Astro pages use the `.astro` file extension and support the same features as [Astro components](https://docs.astro.build/en/basics/astro-components/).

```astro title="src/pages/index.astro"
---

---

<html lang='en'>
  <head>
    <title>My Homepage</title>
  </head>
  <body>
    <h1>Welcome to my website!</h1>
  </body>
</html>
```

A page must produce a full HTML document. If not explicitly included, Astro will add the necessary `<!DOCTYPE html>` declaration and `<head>` content to any `.astro` component located within `src/pages/` by default. You can opt-out of this behavior on a per-component basis by marking it as a [partial](#page-partials) page.

To avoid repeating the same HTML elements on every page, you can move common `<head>` and `<body>` elements into your own [layout components](/en/basics/layouts/). You can use as many or as few layout components as you'd like.

And in this theme, luckly you can use `BaseLayout.astro` as your layout component.

```astro title="src/pages/mypage.astro"
---
import PageLayout from '@/layouts/BaseLayout.astro' // [!code highlight]

const meta = {
  title: 'My Page',
  description: 'My fav page'
}
const highlightColor = '#44AEF6' // Optional
---

<PageLayout {meta} {highlightColor}>
  <!-- [!code highlight] -->
  <p>My page content, wrapped in a layout!</p>
</PageLayout>
<!-- [!code highlight] -->
```

<Aside type='tip'>
  Read more about [layout components](https://docs.astro.build/en/basics/layouts/) in Astro.
</Aside>

### Markdown/MDX Pages

While `.astro` pages have some flexsible features and be friendly to inline / module scripts, `.md` and `.mdx` pages are more suitable for content-focused pages.

Astro also treats any Markdown (`.md`) files inside of `src/pages/` as pages in your final website. If you have the [MDX Integration installed](https://docs.astro.build/en/guides/integrations-guide/mdx/#installation), it also treats MDX (`.mdx`) files the same way.

<Aside type='caution'>

Consider creating [content collections](/en/guides/content-collections/) instead of pages for directories of related Markdown files that share a similar structure, such as blog posts or product items.

</Aside>

Markdown files can use the special `layout` frontmatter property to specify a [layout component](https://docs.astro.build/en/basics/layouts/) that will wrap their Markdown content in a full `<html>...</html>` page document.

This theme supports a good layout for `.md` and `.mdx` files:

```markdown title="src/pages/terms/privacy.md"
---
layout: '@/layouts/IndividualPage.astro'

title: 'Privacy Policy'
description: 'Effective date: 2024-11-26'
language: 'En' # optional
back: '/terms/list' # optional, default to '/'
heroImage: { src: './thumbnail.jpg' } # will used to social-image
---

## Privacy Policy 1

This is the first section of the privacy policy.
```

### HTML Pages

Files with the `.html` file extension can be placed in the `src/pages/` directory and used directly as pages on your site. Note that some key Astro features are not supported in [HTML Components](https://docs.astro.build/en/basics/astro-components/#html-components).

---
title: 'Deployment'
description: 'Deploy your site to various platforms'
order: 3
---

import { Aside, Steps } from 'astro-pure/user'

## Package Mode

This theme which >= v4.0.0 has integrated NPM package mode. Recommended way is remove local package file, and install the theme integration from NPM. If there's some reason you want to change the package content, you should link local package to your theme template. A `bun` method is integrated. You should:

1. Add environment variable `BUN_LINK_PKG=true`.
2. Run `bun pure check` to link the package automatically.

This method can also work on Deployment for other platforms like 'Vercel'. All you need is to add the environment variable to build options on your platform control settings. The build command `astro-pure check && astro check && astro build` will automatically link the package.

## Deployment Mode

<Aside type='tip'>

Astro had a very fantastic support for deployment. Check [Deploy your Astro Site](https://docs.astro.build/en/guides/deploy/) for more.

</Aside>

### Vercel

This theme supports Vercel by default:

<Steps>

1. Push your code to your online Git repository (GitHub, GitLab, BitBucket).
2. [Import your project](https://vercel.com/new) into Vercel.
3. Vercel will automatically detect Astro and configure the right settings.
4. Your application is deployed! (e.g. [astro.vercel.app](https://astro.vercel.app/))

</Steps>

And vercel also support static method:

```ts title="astro.config.mjs"
import vercelServerless from '@astrojs/vercel/serverless' // [!code --]
import vercelStatic from '@astrojs/vercel/static'; // [!code ++]

export default defineConfig({
  //   ...
  adapter: vercelServerless() // [!code --]
  adapter: vercelStatic(), // [!code ++]
})
```

### Node server

If you are deploying with Node.js locally, you need to install `@astrojs/node` first:

```shell
bun add '@astrojs/node'
```

Then follow the comments in `astro.config.ts` and modify like:

```ts title="astro.config.ts"
import node from '@astrojs/node' // [!code ++]
import vercelServerless from '@astrojs/vercel/serverless' // [!code --]

export default defineConfig({
  //   ...
  adapter: vercelServerless(), // [!code --]
  adapter: node({ mode: 'standalone' }), // [!code ++]

  integrations: [
    // prettier-ignore
    outputCopier({ // [!code --]
      integ: ['sitemap', 'pagefind'] // [!code --]
    }) // [!code --]
  ]
})
```

### Bun server

Bun also support static method.

Check [@nurodev/astro-bun](https://www.npmjs.com/package/@nurodev/astro-bun) for more.

### Static

Remove all server adapter configuration in `astro.config.ts`:

```ts title="astro.config.ts"
import vercelServerless from '@astrojs/vercel/serverless' // [!code --]

export default defineConfig({
  //   ...
  adapter: vercelServerless(), // [!code --]
  output: 'server' // [!code --]
})
```

### GitHub Pages

See [Astro: Configure Astro for GitHub Pages](https://docs.astro.build/en/guides/deploy/github/).

For ones deploying on GitHub Pages with a base path, like `username.github.io/repo-name`, please read [Deployment#Platform with Base Path](/docs/setup/deployment#platform-with-base-path).
carefully.

## Platform with Base Path

<Aside type='danger'>

1. Astro provides basic support for a base path — see the "base" option in the configuration reference [Astro: base](https://docs.astro.build/en/reference/configuration-reference/#base) for more.
2. This theme will not support the base path, as it seriously break down the experience of remote developments. In general, deploying the template with a base path is not recommended because the homepage integrates lists, resume elements, and other features that rely on the template’s source structure.
3. If you follow the guide and modify the code, you can deploy with a base path, but you cannot use the same project copy to deploy both with and without a base path simultaneously. Proceed at your own risk; do not open issues about this unless you plan to contribute improvements to the docs.

</Aside>

1. Set the `base` option in `astro.config.ts` to your base path, for example:

   ```ts title="astro.config.ts"
   export default defineConfig({
     //   ...
     base: '/repo-name/' // Replace with your repository name
   })
   ```

2. Update all internal links in Dynamic script files:
   - `src/components/BaseHead.astro`
   - `src/pages/docs/DocsContent.astro`
   - `src/pages/rss.xml.ts`
   - `packages/pure/components/pages/PostPreview.astro` ([Customize Theme](/docs/advanced/customize) is required to make the change)

3. Update all static resource paths:
   - Add base paths in `src/site.config.ts`. Especially the menu configs.
   - Add base paths in `src/plugins/shiki-transformers.ts` for all `/icons/code.svg`.
   - Add base paths in `src/assets/styles/app.css` for all url in `@font-face` property.

   