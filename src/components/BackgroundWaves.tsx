export default function BackgroundWaves() {
  return (
    <>
      {/* Top wave */}
      <svg
        className="bg-wave bg-wave-top"
        viewBox="0 0 1440 280"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveTopLight" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#93c5fd" />
            <stop offset="50%" stopColor="#a5b4fc" />
            <stop offset="100%" stopColor="#c4b5fd" />
          </linearGradient>
          <linearGradient id="waveTopDark" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1e3a5f" />
            <stop offset="50%" stopColor="#2d1b69" />
            <stop offset="100%" stopColor="#1a1040" />
          </linearGradient>
        </defs>
        <path
          d="M0 160 C 200 100, 400 220, 600 140 S 1000 80, 1200 150 L 1440 180 L 1440 0 L 0 0 Z"
          fill="url(#waveTopLight)"
        />
        <path
          d="M0 200 C 300 130, 500 250, 720 160 S 1100 100, 1440 180 L 1440 0 L 0 0 Z"
          fill="url(#waveTopLight)"
          opacity="0.4"
        />
      </svg>

      {/* Bottom wave */}
      <svg
        className="bg-wave bg-wave-bottom"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveBotLight" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#a5b4fc" />
            <stop offset="50%" stopColor="#93c5fd" />
            <stop offset="100%" stopColor="#c4b5fd" />
          </linearGradient>
        </defs>
        <path
          d="M0 100 C 240 160, 480 40, 720 110 S 1200 180, 1440 90 L 1440 220 L 0 220 Z"
          fill="url(#waveBotLight)"
        />
        <path
          d="M0 130 C 300 180, 600 60, 900 120 S 1200 160, 1440 100 L 1440 220 L 0 220 Z"
          fill="url(#waveBotLight)"
          opacity="0.35"
        />
      </svg>

      {/* Dot grid texture */}
      <div className="bg-dot-grid" />
    </>
  );
}
