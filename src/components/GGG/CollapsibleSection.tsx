'use client';

import { useState } from 'react';

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function CollapsibleSection({ title, children, defaultOpen = false }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="my-4 border border-border/60 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 bg-surface-elevated/60 hover:bg-surface-elevated/80 transition-colors flex items-center justify-between text-left gap-4"
      >
        <span className="font-semibold text-foreground">{title}</span>
        <span className="text-foreground-tertiary flex-shrink-0">
          {isOpen ? '▲' : '▼'}
        </span>
      </button>
      {isOpen && (
        <div className="px-4 py-3 border-t border-border/60">
          {children}
        </div>
      )}
    </div>
  );
}
