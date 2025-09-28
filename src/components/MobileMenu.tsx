'use client';

import Link from "next/link";
import GitHubIcon from "@/components/icons/GitHubIcon";

export default function MobileMenu() {
  const toggleMenu = () => {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
      menu.classList.toggle('hidden');
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 text-foreground-secondary hover:text-apple-blue transition-colors duration-200"
        aria-label="Toggle mobile menu"
        onClick={toggleMenu}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="hidden md:hidden border-t border-border/50 mt-4 pt-4">
        <nav className="flex flex-col space-y-2" role="navigation" aria-label="Mobile navigation">
          <Link
            href="/"
            className="text-foreground-secondary hover:text-apple-blue px-3 py-2 text-sm font-bold transition-all duration-200 focus:outline-none"
            aria-label="Home page"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-foreground-secondary hover:text-apple-blue px-3 py-2 text-sm font-bold transition-all duration-200 focus:outline-none"
            aria-label="About Gyro Governance"
          >
            About
          </Link>
          <Link
            href="/articles"
            className="text-foreground-secondary hover:text-apple-blue px-3 py-2 text-sm font-bold transition-all duration-200 focus:outline-none"
            aria-label="Articles"
          >
            Articles
          </Link>
          <a
            href="https://github.com/gyrogovernance"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-2 text-sm font-bold text-foreground-secondary hover:text-apple-blue transition-all duration-200 focus:outline-none"
            aria-label="Visit Gyro Governance GitHub organization (opens in new tab)"
          >
            <GitHubIcon className="w-4 h-4 mr-2" />
            GitHub
          </a>
        </nav>
      </div>
    </>
  );
}
