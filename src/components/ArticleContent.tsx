'use client';

import { useMemo } from 'react';
import dynamic from 'next/dynamic';

const AlignmentGauge = dynamic(() => import('./GGG/AlignmentGauge'), { ssr: false });
const ConvergenceChart = dynamic(() => import('./GGG/ConvergenceChart'), { ssr: false });
const CompactScenarioExplorer = dynamic(() => import('./GGG/CompactScenarioExplorer'), { ssr: false });
const ReferencesSection = dynamic(() => import('./GGG/ReferencesSection'), { ssr: false });
const ResourceLinks = dynamic(() => import('./GGG/ResourceLinks'), { ssr: false });
const VideoOverview = dynamic(() => import('./GGG/VideoOverview'), { ssr: false });

interface ArticleContentProps {
  html: string;
}

export default function ArticleContent({ html }: ArticleContentProps) {
  const parts = useMemo(() => {
    // Split HTML by component markers (allow optional spaces/newlines before closing tag)
    const componentRegex = /<div\s+data-react-component="([^"]+)"\s*><\/div\s*>/g;
    const parts: Array<{ type: 'html' | 'component'; content: string }> = [];
    let lastIndex = 0;
    let match;

    while ((match = componentRegex.exec(html)) !== null) {
      // Add HTML before component
      if (match.index > lastIndex) {
        parts.push({ type: 'html', content: html.substring(lastIndex, match.index) });
      }
      // Add component marker
      parts.push({ type: 'component', content: match[1] });
      lastIndex = match.index + match[0].length;
    }

    // Add remaining HTML
    if (lastIndex < html.length) {
      parts.push({ type: 'html', content: html.substring(lastIndex) });
    }

    // If no components found, return Direct HTML
    if (parts.length === 0) {
      return [{ type: 'html' as const, content: html }];
    }

    return parts;
  }, [html]);

  return (
    <>
      {parts.map((part, index) => {
        if (part.type === 'html') {
          return (
            <div
              key={index}
              dangerouslySetInnerHTML={{ __html: part.content }}
            />
          );
        } else {
          const Component =
            part.content === 'AlignmentGauge' ? AlignmentGauge :
            part.content === 'ConvergenceChart' ? ConvergenceChart :
            part.content === 'CompactScenarioExplorer' ? CompactScenarioExplorer :
            part.content === 'ReferencesSection' ? ReferencesSection :
            part.content === 'GitHubLink' ? ResourceLinks :
            part.content === 'ResourceLinks' ? ResourceLinks :
            part.content === 'VideoOverview' ? VideoOverview :
            null;
          
          if (!Component) return null;
          
          return <Component key={index} />;
        }
      })}
    </>
  );
}
