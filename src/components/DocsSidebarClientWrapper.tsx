"use client";

import dynamic from "next/dynamic";
import type { FC } from "react";

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

const DocsSidebarClient = dynamic(
  () => import("./DocsSidebarClient"),
  { ssr: false }
);

interface DocsSidebarClientWrapperProps {
  repositories: Repo[];
}

const DocsSidebarClientWrapper: FC<DocsSidebarClientWrapperProps> = ({
  repositories,
}) => {
  return <DocsSidebarClient repositories={repositories} />;
};

export default DocsSidebarClientWrapper;
