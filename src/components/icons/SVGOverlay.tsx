import React from 'react';

interface SVGOverlayProps {
  className?: string;
}

export default function SVGOverlay({ className = "absolute inset-0 h-full pointer-events-none" }: SVGOverlayProps) {
  return (
    <svg 
    className={className}
      xmlns="http://www.w3.org/2000/svg" 
      version="1.1" 
      xmlnsXlink="http://www.w3.org/1999/xlink" 
      width="100%" 
      height="100%" 
      preserveAspectRatio="xMidYMid slice" 
      viewBox="0 0 1440 560"
    >
      <defs>
        <mask id="SvgjsMask1018">
          <rect width="1440" height="560" fill="#72FF6B"></rect>
        </mask>
      </defs>
      <g mask="url(&quot;#SvgjsMask1018&quot;)" fill="none" stroke="#4CFFCC" strokeWidth="2">
        <path d="M1467.36 292.65C1315.01 287.24 1204.8 51.73 909.58 46.25 614.36 40.77 495.66-94.21 351.8-95.31"></path>
        <path d="M1584.15 365.38C1465.02 365.19 1348.48 295.38 1112.8 295.38 877.13 295.38 889.91 369.51 641.46 365.38 393 361.25 320.46 3.7 170.11-19.72"></path>
        <path d="M1684.22 401.54C1581.12 401.28 1481.01 331.54 1277.79 331.54 1074.58 331.54 1101.34 414.84 871.37 401.54 641.4 388.24 617.95-49.61 464.94-102.36"></path>
        <path d="M1551.07 193.72C1413.24 194.62 1225.21 325.26 1014.98 322.52 804.74 319.78 853.19-7.94 746.93-52.59"></path>
        <path d="M1534.88 197.76C1422.89 197.54 1313.65 127.76 1092.41 127.76 871.18 127.76 875.67 198.66 649.94 197.76 424.21 196.86 334.17-43.23 207.47-51.62"></path>
      </g>
    </svg>
  );
}