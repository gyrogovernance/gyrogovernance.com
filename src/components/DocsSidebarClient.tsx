"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, type CSSProperties } from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

interface DocsItem {
  slug: string;
  title: string;
  description?: string;
  isFolder?: boolean;
  children?: DocsItem[];
}

interface Repo {
  id: string;
  name: string;
  description: string;
  docs: DocsItem[];
}

interface DocsSidebarClientProps {
  repositories: Repo[];
}

const sidebarMenuItemStyles = {
  root: ({ active }: { active: boolean }) => ({
    marginBottom: "0.22rem",
    borderRadius: "0.65rem",
    border: "1px solid transparent",
    backgroundColor: "transparent",
    boxShadow: "none"
  }),
  button: ({ active, isSubmenu }: { active: boolean; isSubmenu?: boolean }) => ({
    borderRadius: "0.65rem",
    height: "auto !important",
    minHeight: "2.55rem",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: "0.54rem 0.65rem",
    marginBottom: isSubmenu ? "0.2rem" : "0",
    overflow: "hidden",
    border: "1px solid transparent",
    backgroundColor: active ? "rgba(56, 189, 248, 0.13)" : "transparent",
    color: active ? "var(--apple-blue)" : "var(--text-primary)",
    fontWeight: active ? 600 : 400,
    whiteSpace: "normal",
    wordBreak: "normal" as CSSProperties["wordBreak"],
    overflowWrap: "break-word" as CSSProperties["overflowWrap"],
    transition: "background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease"
  }),
  label: ({ active }: { active: boolean }) => ({
    display: "block",
    width: "100%",
    whiteSpace: "normal",
    wordBreak: "normal" as CSSProperties["wordBreak"],
    overflowWrap: "break-word" as CSSProperties["overflowWrap"],
    color: active ? "var(--apple-blue)" : "var(--text-primary)",
    lineHeight: 1.35
  }),
  icon: {
    display: "none"
  },
  subMenuContent: {
    paddingLeft: "0.3rem",
    backgroundColor: "transparent",
    boxShadow: "none"
  },
  SubMenuExpandIcon: {
    color: "var(--text-tertiary)"
  }
};

function getFolderPath(repoId: string, path: string[]) {
  return `${repoId}:${path.join("/")}`;
}

export default function DocsSidebarClient({ repositories }: DocsSidebarClientProps) {
  const pathname = usePathname();
  const isInDocsSection = pathname.startsWith("/docs");
  const scrollRef = useRef<HTMLDivElement>(null);

  const renderDocsItem = (repo: Repo, item: DocsItem, parentPath: string[]) => {
    const currentPath = [...parentPath, item.slug];
    const href = `/docs/${repo.id}/${currentPath.join("/")}`;
    const normalizedPath = href.endsWith("/") ? href.slice(0, -1) : href;

    if (item.isFolder && item.children && item.children.length > 0) {
      const folderKey = `folder:${getFolderPath(repo.id, currentPath)}`;
      const isFolderOpen = pathname === normalizedPath || pathname.startsWith(`${normalizedPath}/`);
      const isFolderSelected = pathname === normalizedPath;

      return (
        <SubMenu
          key={folderKey}
        label={<span className="font-medium text-apple-blue break-words">{item.title}</span>}
          active={isFolderSelected}
          defaultOpen={isFolderOpen}
        >
          {item.children.map((child) => renderDocsItem(repo, child, currentPath))}
        </SubMenu>
      );
    }

    const isActive = pathname === normalizedPath || pathname === `${normalizedPath}/`;

    return (
      <MenuItem
        key={href}
        component={<Link href={href} />}
        active={isActive}
      >
        <div>
          <div className="font-medium">{item.title}</div>
          {!!item.description && <div className="text-xs mt-0.5 break-words" style={{ color: "var(--text-tertiary)" }}>{item.description}</div>}
        </div>
      </MenuItem>
    );
  };

  const renderRepoSection = (repo: Repo) => {
    const repoPath = `/docs/${repo.id}`;
    const normalizedRepoPath = repoPath.endsWith("/") ? repoPath.slice(0, -1) : repoPath;
    const isRepoOpen = pathname === normalizedRepoPath || pathname === `${normalizedRepoPath}/` || pathname.startsWith(`${normalizedRepoPath}/`);
    const isRepoSelected = pathname === normalizedRepoPath || pathname === `${normalizedRepoPath}/`;

    return (
      <SubMenu
        key={repo.id}
        active={isRepoSelected}
        defaultOpen={isRepoOpen}
        label={
          <div className="leading-tight">
            <div className="font-medium text-apple-blue">{repo.name}</div>
            <div className="text-xs mt-0.5 break-words" style={{ color: "var(--text-tertiary)" }}>{repo.description}</div>
          </div>
        }
      >
        <MenuItem
          component={<Link href={repoPath} />}
          active={isRepoSelected}
          className="font-medium text-apple-blue"
        >
          Overview
        </MenuItem>

        {repo.docs.map((doc) => renderDocsItem(repo, doc, []))}
      </SubMenu>
    );
  };

  useEffect(() => {
    if (!isInDocsSection) return;

    const el = scrollRef.current;
    if (!el) return;
    const raw = sessionStorage.getItem("docsSidebar:scrollTop");
    if (raw) el.scrollTop = Number(raw);
  }, [isInDocsSection]);

  useEffect(() => {
    if (!isInDocsSection) return;

    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      sessionStorage.setItem("docsSidebar:scrollTop", String(el.scrollTop));
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [isInDocsSection]);

  return (
      <nav className="hidden xl:block w-full shrink-0 h-full pl-1 pr-0">
      <div
        ref={scrollRef}
        style={{ backgroundColor: "transparent" }}
          className="h-full overflow-y-auto overflow-x-hidden py-2 pl-1 pr-0 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent"
      >
        <Sidebar
          className="docs-sidebar-root"
          width="100%"
          style={{
            backgroundColor: "transparent",
            color: "var(--text-primary)",
            backgroundImage: "none"
          }}
          rootStyles={{
            border: "none",
            borderRadius: "0rem",
            height: "100%",
            backgroundColor: "transparent",
            backgroundImage: "none",
            paddingBottom: "0rem",
            overflow: "visible"
          }}
        >
          <Menu
            menuItemStyles={sidebarMenuItemStyles}
            rootStyles={{ padding: "0" }}
          >
            {repositories.map((repo) => renderRepoSection(repo))}
          </Menu>
        </Sidebar>
      </div>
    </nav>
  );
}
