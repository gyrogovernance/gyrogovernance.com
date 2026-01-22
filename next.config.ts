import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  experimental: {
    optimizePackageImports: ['@heroicons/react'],
    esmExternals: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    reactRemoveProperties: process.env.NODE_ENV === 'production' ? { properties: ['^data-testid$'] } : false,
  },
  // GitHub Pages deployment - custom domain doesn't need basePath
  // basePath: process.env.NODE_ENV === 'production' ? '/gyrogovernance.com' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/gyrogovernance.com/' : '',
};

export default nextConfig;
