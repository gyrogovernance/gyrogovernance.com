import { marked } from 'marked';

// Configure marked with safe options
marked.setOptions({
  breaks: true,
  gfm: true,
});

export async function renderMarkdown(content: string): Promise<string> {
  return marked(content);
}
