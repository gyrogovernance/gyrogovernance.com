'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const DEMO_SRC = '/air-office-demo/index.html';
/**
 * Logical desktop width used only when the visible frame is smaller than this.
 * Never upscale above 1× — that is what made HDMI / large fullscreen huge and
 * knocked liquid-glass compositing off on the external display.
 */
const DESKTOP_WIDTH = 1280;

type FrameLayout =
  | { mode: 'native' }
  | { mode: 'scaled'; scale: number; height: number };

const SETTINGS_KEY = 'air-office:settings-personal';
const FLAT_MATERIALS_KEY = 'appearance.flat-materials';

function forceFlatMaterials() {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    const prefs = raw ? JSON.parse(raw) : {};
    const next =
      prefs && typeof prefs === 'object' && !Array.isArray(prefs) ? { ...prefs } : {};
    if (next[FLAT_MATERIALS_KEY] === true) return;
    next[FLAT_MATERIALS_KEY] = true;
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(next));
  } catch {
    /* localStorage can be blocked; the demo index.html also forces this. */
  }
}

export default function AIROfficeStaticDemo() {
  const shellRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [layout, setLayout] = useState<FrameLayout>({ mode: 'native' });

  useEffect(() => {
    forceFlatMaterials();
    setReady(true);
  }, []);

  useEffect(() => {
    const sync = () => {
      setIsFullscreen(document.fullscreenElement === shellRef.current);
    };
    document.addEventListener('fullscreenchange', sync);
    return () => document.removeEventListener('fullscreenchange', sync);
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const update = () => {
      const width = viewport.clientWidth;
      const height = viewport.clientHeight;
      if (width <= 0 || height <= 0) return;

      // Fullscreen or a frame as wide as the desktop layout: render 1:1, no CSS scale.
      // Scaling above 1× on HDMI / high-res displays blew the UI up and broke glass.
      if (isFullscreen || width >= DESKTOP_WIDTH) {
        setLayout({ mode: 'native' });
        return;
      }

      const scale = width / DESKTOP_WIDTH;
      setLayout({ mode: 'scaled', scale, height: height / scale });
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, [isFullscreen]);

  const toggleFullscreen = useCallback(async () => {
    const shell = shellRef.current;
    if (!shell) return;
    try {
      if (document.fullscreenElement === shell) {
        await document.exitFullscreen();
      } else {
        await shell.requestFullscreen();
      }
    } catch {
      /* Fullscreen can be denied by the browser; leave the embed as-is. */
    }
  }, []);

  const iframeStyle =
    layout.mode === 'native'
      ? {
          width: '100%',
          height: '100%',
          transform: 'none',
          transformOrigin: 'top left',
        }
      : {
          width: DESKTOP_WIDTH,
          height: layout.height,
          transform: `scale(${layout.scale})`,
          transformOrigin: 'top left',
        };

  return (
    <div className="w-full">
      <div
        ref={shellRef}
        className={`overflow-hidden border border-border/60 bg-[#0b0c0e] shadow-2xl ${
          isFullscreen ? 'flex h-full w-full flex-col rounded-none' : 'rounded-2xl'
        }`}
      >
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10 bg-black/40 shrink-0">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" aria-hidden="true" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" aria-hidden="true" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" aria-hidden="true" />
          <span className="ml-3 text-xs text-white/60 font-medium truncate flex-1">
            AIR Office · interactive demo
          </span>
          <button
            type="button"
            onClick={() => void toggleFullscreen()}
            className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label={isFullscreen ? 'Exit full screen' : 'Open demo in full screen'}
          >
            {isFullscreen ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
              </svg>
            )}
            {isFullscreen ? 'Exit' : 'Full screen'}
          </button>
        </div>
        <div
          ref={viewportRef}
          className={`relative bg-[#0b0c0e] overflow-hidden ${
            isFullscreen ? 'min-h-0 flex-1' : 'w-full aspect-[16/10] min-h-[28rem]'
          }`}
        >
          {!loaded && (
            <div className="absolute inset-0 z-10 flex items-center justify-center text-sm text-white/50">
              Loading demo…
            </div>
          )}
          {ready ? (
            <iframe
              title="AIR Office interactive demo"
              src={DEMO_SRC}
              className="absolute top-0 left-0 border-0"
              style={iframeStyle}
              loading="lazy"
              onLoad={() => setLoaded(true)}
              allow="clipboard-read; clipboard-write; fullscreen"
            />
          ) : null}
        </div>
      </div>
      <p className="mt-3 text-center text-sm text-foreground-tertiary">
        Explore the seeded workspace here, and open Arcade if you want to play a game.
        <br />
        Sending chat, Local AI, Code, and live folder mounts are not available in this demo.
      </p>
    </div>
  );
}
