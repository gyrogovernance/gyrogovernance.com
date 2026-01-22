import fs from "node:fs";
import path from "node:path";
import { cache } from "react";

export type DocArea = "science" | "superintelligence" | "tools" | "other";
export type DocType =
  | "analyses"
  | "specsProtocols"
  | "papersBriefs"
  | "reportsResults"
  | "guidesReference";

export interface DocStats {
  total: number;
  byArea: Record<DocArea, number>;
  byType: Record<DocType, number>;
  rootUsed: string; // helpful for debugging
}

const DOC_EXTS = new Set([".md", ".mdx", ".html"]);

function existsDir(p: string) {
  try {
    return fs.existsSync(p) && fs.statSync(p).isDirectory();
  } catch {
    return false;
  }
}

function pickDocsRoot(): string {
  const env = process.env.DOCS_STATS_DIR;
  if (env) {
    const abs = path.isAbsolute(env) ? env : path.join(process.cwd(), env);
    if (existsDir(abs)) return abs;
  }

  const candidates = [
    path.join(process.cwd(), "src", "content", "docs"),
    path.join(process.cwd(), ".next", "server", "app", "docs"),
  ];

  for (const c of candidates) {
    if (existsDir(c)) return c;
  }

  // fallback: first candidate (keeps function stable)
  return candidates[0];
}

function shouldIgnoreFile(absPath: string, docsRoot: string): boolean {
  const ext = path.extname(absPath).toLowerCase();
  if (!DOC_EXTS.has(ext)) return true;

  const base = path.basename(absPath, ext).toLowerCase();

  // Common "non-doc page" names in source repos
  if (base === "readme" || base === "index" || base === "_index") return true;

  // If scanning built html output, ignore section landing pages like `science.html`
  // when there is a sibling directory `science/`.
  if (ext === ".html") {
    const dir = path.dirname(absPath);
    if (dir === docsRoot) {
      const siblingDir = path.join(docsRoot, base);
      if (existsDir(siblingDir)) return true;
    }
  }

  return false;
}

function walkFiles(root: string): string[] {
  const out: string[] = [];
  const stack = [root];

  while (stack.length) {
    const current = stack.pop()!;
    let entries: fs.Dirent[];
    try {
      entries = fs.readdirSync(current, { withFileTypes: true });
    } catch {
      continue;
    }

    for (const e of entries) {
      const full = path.join(current, e.name);
      if (e.isDirectory()) stack.push(full);
      else out.push(full);
    }
  }

  return out;
}

function detectArea(relPath: string): DocArea {
  const parts = relPath.split(path.sep).filter(Boolean);
  const first = (parts[0] || "").toLowerCase();

  if (first === "science") return "science";
  if (first === "superintelligence") return "superintelligence";
  if (first === "tools") return "tools";
  return "other";
}

function detectType(fileBaseLower: string): DocType {
  // Priority matters - check for more specific patterns first
  if (fileBaseLower.includes("paper")) return "papersBriefs";

  if (fileBaseLower.includes("specs")) return "specsProtocols";

  if (fileBaseLower.includes("report") || fileBaseLower.includes("results")) return "reportsResults";

  if (fileBaseLower.startsWith("analysis_") || fileBaseLower.includes("analysis")) return "analyses";

  // Everything else (programs, governance models, terms, grammar, exports, examples, etc.)
  return "guidesReference";
}

export const getDocStats = cache((): DocStats => {
  const docsRoot = pickDocsRoot();

  const byArea: DocStats["byArea"] = {
    science: 0,
    superintelligence: 0,
    tools: 0,
    other: 0,
  };

  const byType: DocStats["byType"] = {
    analyses: 0,
    specsProtocols: 0,
    papersBriefs: 0,
    reportsResults: 0,
    guidesReference: 0,
  };

  const allFiles = walkFiles(docsRoot);
  let total = 0;

  for (const abs of allFiles) {
    if (shouldIgnoreFile(abs, docsRoot)) continue;

    const rel = path.relative(docsRoot, abs);
    const area = detectArea(rel);

    const ext = path.extname(abs).toLowerCase();
    const base = path.basename(abs, ext).toLowerCase();
    const type = detectType(base);

    total++;
    byArea[area]++;
    byType[type]++;
  }

  return { total, byArea, byType, rootUsed: docsRoot };
});