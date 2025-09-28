'use client';

import { useState } from 'react';

interface CopyControlsProps {
  targetElementId?: string;
  className?: string;
}

export default function CopyControls({ targetElementId = 'article-content', className = '' }: CopyControlsProps) {
  const [status, setStatus] = useState<'idle' | 'copied-link' | 'copied-text'>('idle');

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setStatus('copied-link');
      setTimeout(() => setStatus('idle'), 1500);
    } catch {}
  };

  const copyText = async () => {
    try {
      const el = document.getElementById(targetElementId);
      const text = el?.innerText?.trim() || '';
      if (text) {
        await navigator.clipboard.writeText(text);
        setStatus('copied-text');
        setTimeout(() => setStatus('idle'), 1500);
      }
    } catch {}
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <button
        type="button"
        onClick={copyLink}
        className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-surface-elevated/60 border border-border hover:bg-surface focus:outline-none"
        aria-label="Copy link"
      >
        🔗 Copy link
      </button>
      <button
        type="button"
        onClick={copyText}
        className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-surface-elevated/60 border border-border hover:bg-surface focus:outline-none"
        aria-label="Copy text"
      >
        📋 Copy text
      </button>
      {status !== 'idle' && (
        <span className="text-xs text-foreground-tertiary ml-1">
          {status === 'copied-link' ? 'Link copied' : 'Text copied'}
        </span>
      )}
    </div>
  );
}


