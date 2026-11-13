'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const DEMO_SRC = '/air-office-demo/index.html';
/** Hardcoded overview scale: iframe lays out larger, then shrinks to fit the frame. */
const DEMO_ZOOM = 0.55;
const FULLSCREEN_ZOOM = 0.75;

export default function AIROfficeStaticDemo() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const zoom = isFullscreen ? FULLSCREEN_ZOOM : DEMO_ZOOM;
  const layoutPercent = `${(100 / zoom).toFixed(4)}%`;

  useEffect(() => {
    const sync = () => {
      setIsFullscreen(document.fullscreenElement === frameRef.current);
    };
    document.addEventListener('fullscreenchange', sync);
    return () => document.removeEventListener('fullscreenchange', sync);
  }, []);

  const toggleFullscreen = useCallback(async () => {
    const frame = frameRef.current;
    if (!frame) return;
    try {
      if (document.fullscreenElement === frame) {
        await document.exitFullscreen();
      } else {
        await frame.requestFullscreen();
      }
    } catch {
      /* Fullscreen can be denied by the browser; leave the embed as-is. */
    }
  }, []);

  return (
    <div className="w-full">
      <div
        ref={frameRef}
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
          className={`relative bg-[#0b0c0e] overflow-hidden ${
            isFullscreen ? 'min-h-0 flex-1' : 'w-full aspect-[16/10] min-h-[28rem]'
          }`}
        >
          {!loaded && (
            <div className="absolute inset-0 z-10 flex items-center justify-center text-sm text-white/50">
              Loading demo…
            </div>
          )}
          <iframe
            title="AIR Office interactive demo"
            src={DEMO_SRC}
            className="absolute top-0 left-0 border-0 origin-top-left"
            style={{
              width: layoutPercent,
              height: layoutPercent,
              transform: `scale(${zoom})`,
            }}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            allow="clipboard-read; clipboard-write; fullscreen"
          />
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
