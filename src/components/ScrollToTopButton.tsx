"use client";

import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowButton(window.scrollY > 280);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed right-4 bottom-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-surface-elevated/90 text-foreground shadow-lg transition-all duration-200 sm:bottom-6 sm:right-6 sm:h-11 sm:w-11 ${
        showButton
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-2 pointer-events-none"
      } hover:bg-apple-blue hover:text-white hover:border-apple-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apple-blue`}
    >
      <span className="sr-only">Scroll to top</span>
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          d="M12 17V7M12 7L7 12M12 7L17 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </button>
  );
}
