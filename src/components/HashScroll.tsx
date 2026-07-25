"use client";

import { useEffect } from "react";

function scrollToHash() {
  const raw = window.location.hash.slice(1);
  if (!raw) return;

  // Next.js <Link href="#…"> can leave mangled hashes like "thm#moments".
  const id = decodeURIComponent(raw.split("#")[0] ?? "");
  if (!id) return;

  const el = document.getElementById(id);
  if (!el) return;

  const html = document.documentElement;
  const previous = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";
  el.scrollIntoView();
  html.style.scrollBehavior = previous;
}

/**
 * Chrome often drops native hash scrolling when scroll-behavior is smooth
 * or when other layout/scroll work runs during load. Re-apply after paint.
 */
export default function HashScroll() {
  useEffect(() => {
    scrollToHash();

    const t0 = window.setTimeout(scrollToHash, 0);
    const t1 = window.setTimeout(scrollToHash, 100);
    const t2 = window.setTimeout(scrollToHash, 400);

    window.addEventListener("hashchange", scrollToHash);
    window.addEventListener("load", scrollToHash);

    return () => {
      window.clearTimeout(t0);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.removeEventListener("hashchange", scrollToHash);
      window.removeEventListener("load", scrollToHash);
    };
  }, []);

  return null;
}
