'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import GitHubIcon from "@/components/icons/GitHubIcon";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 text-foreground-secondary hover:text-apple-blue transition-colors duration-200 relative z-50"
        aria-label="Toggle mobile menu"
        onClick={toggleMenu}
      >
        {isOpen ? (
          // Close icon
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Menu icon
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-20 right-4 left-4 z-40 md:hidden transition-all duration-300 ease-in-out transform ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-surface-elevated/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-border/80 overflow-hidden">
          <nav className="flex flex-col py-4" role="navigation" aria-label="Mobile navigation">
            <Link
              href="/"
              className="mobile-nav-link text-foreground hover:text-apple-blue hover:bg-apple-blue/10 px-6 py-3 text-base font-bold transition-all duration-200 focus:outline-none focus:bg-apple-blue/10 active:scale-[0.98]"
              aria-label="Home page"
              onClick={closeMenu}
            >
              <div className="flex items-center">
                <span className="mr-3 text-xl">🏠</span>
                <span>Home</span>
              </div>
            </Link>
            <Link
              href="/about"
              className="mobile-nav-link text-foreground hover:text-apple-blue hover:bg-apple-blue/10 px-6 py-3 text-base font-bold transition-all duration-200 focus:outline-none focus:bg-apple-blue/10 active:scale-[0.98]"
              aria-label="About Gyro Governance"
              onClick={closeMenu}
            >
              <div className="flex items-center">
                <span className="mr-3 text-xl">ℹ️</span>
                <span>About</span>
              </div>
            </Link>
            <Link
              href="/articles"
              className="mobile-nav-link text-foreground hover:text-apple-blue hover:bg-apple-blue/10 px-6 py-3 text-base font-bold transition-all duration-200 focus:outline-none focus:bg-apple-blue/10 active:scale-[0.98]"
              aria-label="Articles"
              onClick={closeMenu}
            >
              <div className="flex items-center">
                <span className="mr-3 text-xl">📚</span>
                <span>Articles</span>
              </div>
            </Link>
            <Link
              href="/docs"
              className="mobile-nav-link text-foreground hover:text-apple-blue hover:bg-apple-blue/10 px-6 py-3 text-base font-bold transition-all duration-200 focus:outline-none focus:bg-apple-blue/10 active:scale-[0.98]"
              aria-label="Documentation"
              onClick={closeMenu}
            >
              <div className="flex items-center">
                <span className="mr-3 text-xl">📖</span>
                <span>Docs</span>
              </div>
            </Link>

            {/* Divider */}
            <div className="my-2 mx-6 border-t border-border/50"></div>
            
            <a
              href="https://github.com/gyrogovernance"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center mx-6 my-2 px-6 py-3 text-base font-bold bg-gradient-to-r from-apple-blue via-apple-purple to-apple-pink hover:from-apple-purple hover:via-apple-pink hover:to-apple-blue text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-apple-blue/50 active:scale-[0.98]"
              aria-label="Visit Gyro Governance GitHub organization (opens in new tab)"
              onClick={closeMenu}
            >
              <GitHubIcon className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
