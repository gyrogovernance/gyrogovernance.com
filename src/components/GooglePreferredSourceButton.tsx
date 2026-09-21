'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from '@/components/ThemeProvider';

const DEEPLINK = 'https://www.google.com/preferences/source?q=gyrogovernance.com';

interface PreferredSourceApi {
  init: (opts: { theme?: 'light' | 'dark'; lang?: string }) => void;
  addPreferredSource: () => void;
}

declare global {
  interface Window {
    PREFERRED_SOURCE?: PreferredSourceApi | Array<(api: PreferredSourceApi) => void>;
  }
}

function withPreferredSource(callback: (api: PreferredSourceApi) => void) {
  if (typeof window === 'undefined') return;

  const existing = window.PREFERRED_SOURCE;
  if (existing && !Array.isArray(existing) && typeof existing.init === 'function') {
    callback(existing);
    return;
  }

  const queue = (window.PREFERRED_SOURCE = window.PREFERRED_SOURCE || []) as Array<
    (api: PreferredSourceApi) => void
  >;
  queue.push(callback);
}

interface GooglePreferredSourceButtonProps {
  className?: string;
  /** Compact text for tight toolbars. Default matches Google's wording. */
  label?: string;
}

export default function GooglePreferredSourceButton({
  className = '',
  label = 'Add to preferred sources',
}: GooglePreferredSourceButtonProps) {
  const { actualTheme } = useTheme();
  const apiRef = useRef<PreferredSourceApi | null>(null);

  useEffect(() => {
    withPreferredSource((api) => {
      api.init({ theme: actualTheme, lang: 'en' });
      apiRef.current = api;
    });
  }, [actualTheme]);

  const handleClick = () => {
    if (apiRef.current) {
      apiRef.current.addPreferredSource();
      return;
    }

    // Fallback if the publisher script has not loaded yet
    window.open(DEEPLINK, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={
        className ||
        'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-border bg-surface-elevated/80 text-foreground hover:bg-surface transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-classic-blue/40'
      }
      aria-label="Add Gyro Governance to Google Preferred Sources"
    >
      <GoogleGIcon className="w-4 h-4 shrink-0" />
      <span>{label}</span>
    </button>
  );
}

function GoogleGIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}
