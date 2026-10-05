"use client";

import { useEffect, useRef } from "react";

const EVIDENCE_SOURCES = [
  {
    org: "MIT",
    label: "AI Incident Tracker",
    href: "https://airisk.mit.edu/ai-incident-tracker",
    domain: "airisk.mit.edu",
  },
  {
    org: "World Bank",
    label: "AI & Power Concentration",
    href: "https://www.worldbank.org/en/publication/wdr2026",
    domain: "worldbank.org",
  },
  {
    org: "UN",
    label: "Economic Insecurity & Inequality",
    href: "https://desapublications.un.org/publications/world-social-report-2025-new-policy-consensus-accelerate-social-progress",
    domain: "un.org",
  },
  {
    org: "ILO",
    label: "Generative AI and Jobs",
    href: "https://www.ilo.org/publications/generative-ai-and-jobs-refined-global-index-occupational-exposure",
    domain: "ilo.org",
  },
  {
    org: "IEA",
    label: "Energy and AI",
    href: "https://www.iea.org/reports/energy-and-ai/executive-summary",
    domain: "iea.org",
  },
  {
    org: "WHO",
    label: "Inequality & Human Health",
    href: "https://www.who.int/publications/i/item/9789240107588",
    domain: "who.int",
  },
] as const;

function SourcePill({
  source,
  duplicate = false,
}: {
  source: (typeof EVIDENCE_SOURCES)[number];
  duplicate?: boolean;
}) {
  return (
    <a
      href={source.href}
      target="_blank"
      rel="noopener noreferrer"
      className="evidence-pill"
      tabIndex={duplicate ? -1 : undefined}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://www.google.com/s2/favicons?domain=${source.domain}&sz=64`}
        alt=""
        width={22}
        height={22}
        className="evidence-pill-icon"
        loading="lazy"
      />
      <span className="evidence-pill-org">{source.org}</span>
      <span className="evidence-pill-sep" aria-hidden="true">
        ·
      </span>
      <span className="evidence-pill-label">{source.label}</span>
    </a>
  );
}

export default function EvidenceSources() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const group = groupRef.current;
    if (!scroller || !group) return;

    let frame = 0;
    let paused = false;
    let resumeTimer = 0;
    let dragging = false;
    let dragStartX = 0;
    let dragStartScroll = 0;
    let moved = false;
    const speed = 0.45;

    const loopWidth = () => {
      const next = group.nextElementSibling as HTMLElement | null;
      if (!next) return group.offsetWidth;
      return next.offsetLeft - group.offsetLeft;
    };

    const tick = () => {
      if (!paused && !dragging) {
        scroller.scrollLeft += speed;
        const width = loopWidth();
        if (width > 0 && scroller.scrollLeft >= width) {
          scroller.scrollLeft -= width;
        }
      }
      frame = window.requestAnimationFrame(tick);
    };

    const pause = () => {
      paused = true;
      window.clearTimeout(resumeTimer);
    };

    const scheduleResume = () => {
      window.clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(() => {
        paused = false;
      }, 1800);
    };

    const onPointerDown = (event: PointerEvent) => {
      pause();
      if (event.pointerType !== "mouse" || event.button !== 0) return;
      dragging = true;
      moved = false;
      dragStartX = event.clientX;
      dragStartScroll = scroller.scrollLeft;
      scroller.setPointerCapture(event.pointerId);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!dragging) return;
      const delta = event.clientX - dragStartX;
      if (Math.abs(delta) > 4) moved = true;
      scroller.scrollLeft = dragStartScroll - delta;
    };

    const onPointerUp = (event: PointerEvent) => {
      if (dragging) {
        dragging = false;
        if (scroller.hasPointerCapture(event.pointerId)) {
          scroller.releasePointerCapture(event.pointerId);
        }
      }
      scheduleResume();
    };

    const onClickCapture = (event: MouseEvent) => {
      if (!moved) return;
      event.preventDefault();
      event.stopPropagation();
      moved = false;
    };

    scroller.addEventListener("pointerdown", onPointerDown);
    scroller.addEventListener("pointermove", onPointerMove);
    scroller.addEventListener("pointerup", onPointerUp);
    scroller.addEventListener("pointercancel", onPointerUp);
    scroller.addEventListener("click", onClickCapture, true);
    scroller.addEventListener("wheel", pause, { passive: true });
    scroller.addEventListener("mouseenter", pause);
    scroller.addEventListener("mouseleave", scheduleResume);

    frame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(resumeTimer);
      scroller.removeEventListener("pointerdown", onPointerDown);
      scroller.removeEventListener("pointermove", onPointerMove);
      scroller.removeEventListener("pointerup", onPointerUp);
      scroller.removeEventListener("pointercancel", onPointerUp);
      scroller.removeEventListener("click", onClickCapture, true);
      scroller.removeEventListener("wheel", pause);
      scroller.removeEventListener("mouseenter", pause);
      scroller.removeEventListener("mouseleave", scheduleResume);
    };
  }, []);

  return (
    <div className="mb-6" aria-label="Supporting sources">
      <p className="text-sm font-semibold uppercase tracking-wider text-foreground-secondary/70 mb-3 text-center">
        Sources
      </p>
      <div className="evidence-marquee">
        <div ref={scrollerRef} className="evidence-marquee-scroller">
          <div className="evidence-marquee-track">
            <div ref={groupRef} className="evidence-marquee-group">
              {EVIDENCE_SOURCES.map((source) => (
                <SourcePill key={source.org} source={source} />
              ))}
            </div>
            <div className="evidence-marquee-group" aria-hidden="true">
              {EVIDENCE_SOURCES.map((source) => (
                <SourcePill key={`dup-${source.org}`} source={source} duplicate />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
