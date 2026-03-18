'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from "react-dom";
import Link from "next/link";
import GitHubIcon from "@/components/icons/GitHubIcon";
import { LiquidGlassCard } from "@/components/LiquidGlassCard";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const scrollYRef = useRef(0);
  const scrollXRef = useRef(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    const currentScrollY = window.scrollY;
    const currentScrollX = window.scrollX;
    const preventScroll = (event: Event) => event.preventDefault();

    if (isOpen) {
      scrollYRef.current = currentScrollY;
      scrollXRef.current = currentScrollX;
      document.documentElement.style.overflowX = "hidden";
      document.body.style.overflowX = "hidden";
      document.addEventListener("wheel", preventScroll, { passive: false });
      document.addEventListener("touchmove", preventScroll, { passive: false });
      document.addEventListener("keydown", preventScroll);
    } else {
      window.scrollTo(scrollXRef.current, scrollYRef.current);
    }

    return () => {
      document.removeEventListener("wheel", preventScroll);
      document.removeEventListener("touchmove", preventScroll);
      document.removeEventListener("keydown", preventScroll);
      document.documentElement.style.overflowX = "";
      document.body.style.overflowX = "";
      window.scrollTo(scrollXRef.current, scrollYRef.current);
    };
  }, [isOpen]);

  const menuContent = (
    <>
      {/* Mobile Menu Overlay with blur */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[1100] md:hidden safari-backdrop-layer"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-20 inset-x-0 px-4 z-[1101] md:hidden transition-all duration-300 ease-in-out transform ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <LiquidGlassCard
          className="glass-card glass-card-translucent rounded-[2rem] p-1 w-full"
          intensity="subtle"
          blur={22}
          saturation={145}
          luminosity={108}
          shadowIntensity={0.14}
        >
          <nav className="flex flex-col py-4" role="navigation" aria-label="Mobile navigation">
            <Link
              href="/"
              className="mobile-nav-link text-foreground hover:text-classic-blue hover:bg-classic-blue/10 px-6 py-3 text-base font-bold transition-all duration-200 focus:outline-none focus:bg-classic-blue/10 active:scale-[0.98]"
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
              className="mobile-nav-link text-foreground hover:text-classic-blue hover:bg-classic-blue/10 px-6 py-3 text-base font-bold transition-all duration-200 focus:outline-none focus:bg-classic-blue/10 active:scale-[0.98]"
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
              className="mobile-nav-link text-foreground hover:text-classic-blue hover:bg-classic-blue/10 px-6 py-3 text-base font-bold transition-all duration-200 focus:outline-none focus:bg-classic-blue/10 active:scale-[0.98]"
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
              className="mobile-nav-link text-foreground hover:text-classic-blue hover:bg-classic-blue/10 px-6 py-3 text-base font-bold transition-all duration-200 focus:outline-none focus:bg-classic-blue/10 active:scale-[0.98]"
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
              className="inline-flex items-center justify-center mx-6 my-2 px-6 py-3 text-base font-bold bg-gradient-to-r from-classic-blue via-classic-purple to-classic-pink hover:from-classic-purple hover:via-classic-pink hover:to-classic-blue text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-classic-blue/50 active:scale-[0.98]"
              aria-label="Visit Gyro Governance GitHub organization (opens in new tab)"
              onClick={closeMenu}
            >
              <GitHubIcon className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </nav>
        </LiquidGlassCard>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-foreground-secondary hover:text-classic-blue transition-colors duration-200 relative z-[1020]"
        aria-label="Toggle mobile menu"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Portal renders overlay and menu at body level */}
      {mounted && createPortal(menuContent, document.body)}
    </>
  );
}