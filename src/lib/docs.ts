import { marked } from 'marked';

// Configure marked with safe options
marked.setOptions({
  breaks: true,
  gfm: true,
});

// Add id attributes to headings so ToC links and scroll tracking work
const renderer = {
  heading({ tokens, depth }: { tokens: any[]; depth: number }) {
    const text = tokens.map((t: any) => t.text ?? t.raw ?? '').join('');
    const slug = text
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
    return `<h${depth} id="${slug}">${tokens.map((t: any) => t.raw ?? '').join('')}</h${depth}>`;
  },
};

// Wrap tables in scrollable containers so wide tables
// don't get clipped by the glass-card's overflow:hidden
marked.use({
  renderer: {
    ...renderer,
    table(token: any) {
      const headerHtml = token.header
        .map((cell: any) => this.tablecell(cell))
        .join('');
      const headerRow = this.tablerow({ text: headerHtml });

      const bodyRows = token.rows
        .map((row: any) => {
          const cells = row.map((cell: any) => this.tablecell(cell)).join('');
          return this.tablerow({ text: cells });
        })
        .join('');

      return `<div class="table-wrapper"><table><thead>${headerRow}</thead><tbody>${bodyRows}</tbody></table></div>`;
    },
  },
});

export async function renderMarkdown(content: string): Promise<string> {
  return marked(content);
}
