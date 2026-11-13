'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const PROGRAMS = [
  { href: '/air-office', label: 'AIR Office', ariaLabel: 'AIR Office program' },
  { href: '/exodus', label: 'Exodus', ariaLabel: 'Exodus program' },
] as const;

export default function ProgramsDropdown() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="nav-link inline-flex items-center text-foreground-secondary hover:text-classic-blue text-sm font-bold transition-all duration-200 focus:outline-none"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label="Programs menu"
        onClick={() => setOpen((value) => !value)}
      >
        Programs
        <svg
          className={`ml-1 w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        className={`absolute left-0 top-full pt-2 z-[var(--z-dropdown)] transition-all duration-150 ${
          open ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1 pointer-events-none'
        }`}
        role="menu"
        aria-label="Programs"
      >
        <div className="min-w-[11rem] rounded-xl border border-border bg-bg-surface/95 backdrop-blur-md shadow-lg py-1">
          {PROGRAMS.map((program) => (
            <Link
              key={program.href}
              href={program.href}
              role="menuitem"
              className="block px-4 py-2.5 text-sm font-bold text-foreground-secondary hover:text-classic-blue hover:bg-classic-blue/10 transition-colors duration-150"
              aria-label={program.ariaLabel}
              onClick={() => setOpen(false)}
            >
              {program.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
