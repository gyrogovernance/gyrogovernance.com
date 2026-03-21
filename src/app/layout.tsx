import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import Script from 'next/script';
import SVGOverlay from "@/components/icons/SVGOverlay";
import { ThemeProvider } from '@/components/ThemeProvider';
import ThemeToggle from '@/components/ThemeToggle';
import StructuredData from '@/components/StructuredData';
import CookieBanner from '@/components/CookieBanner';
import GitHubIcon from '@/components/icons/GitHubIcon';
import MobileMenu from '@/components/MobileMenu';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { LiquidGlassNav } from '@/components/LiquidGlassNav';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['ui-monospace', 'monospace'],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: {
    default: "Gyro Governance - AI Research and Development",
    template: "%s | Gyro Governance"
  },
  description: "Advancing AI governance through innovative research and development solutions. Mathematical physics foundations for AGI/ASI architecture and LLM alignment tools.",
  keywords: [
    "AI governance",
    "artificial intelligence",
    "mathematical physics",
    "AGI architecture",
    "ASI research",
    "LLM alignment",
    "gyroscopic physics",
    "AI ethics",
    "machine learning",
    "artificial superintelligence"
  ],
  authors: [{ name: "Gyro Governance" }],
  creator: "Gyro Governance",
  publisher: "Gyro Governance",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://gyrogovernance.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
  },
  openGraph: {
    title: "Gyro Governance - AI Research and Development",
    description: "Advancing AI governance through innovative research and development solutions. Mathematical physics foundations for AGI/ASI architecture.",
    url: "https://gyrogovernance.com",
    siteName: "Gyro Governance",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gyro Governance - AI Research and Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gyro Governance - AI Research and Development",
    description: "Advancing AI governance through innovative research and development solutions. Mathematical physics foundations for AGI/ASI architecture.",
    images: ["/og-image.png"],
    creator: "@gyrogovernance",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true} className="scroll-smooth scroll-pt-24">
      <head>
        <meta httpEquiv="Cache-Control" content="public, max-age=31536000, immutable" />
        <style dangerouslySetInnerHTML={{
          __html: `
            :root {
              --text-primary: rgba(0, 0, 0, 0.98);
              --text-secondary: rgba(0, 0, 0, 0.85);
              --text-tertiary: rgba(0, 0, 0, 0.65);
              --border-primary: rgba(0, 0, 0, 0.1);
              --border-secondary: rgba(0, 0, 0, 0.05);
              --link-color: #0056b3;
              --link-hover: #003d82;
            }
            .dark {
              --text-primary: rgba(255, 255, 255, 0.98);
              --text-secondary: rgba(255, 255, 255, 0.85);
              --text-tertiary: rgba(255, 255, 255, 0.65);
              --border-primary: rgba(255, 255, 255, 0.15);
              --border-secondary: rgba(255, 255, 255, 0.08);
              --link-color: #66b3ff;
              --link-hover: #99ccff;
            }
            body {
              font-family: var(--font-nunito), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
              margin: 0;
              background: var(--bg-base);
              color: var(--text-primary);
              transition: background-color 0.3s ease, color 0.3s ease;
            }
            .nav-link { min-height: 44px; min-width: 44px; }
            @font-face { font-family: 'Nunito'; font-display: swap; }
          `
        }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <StructuredData />
        <Script id="google-analytics-delayed" strategy="lazyOnload">
          {`
            let gaLoaded = false;
            
            function loadGA() {
              if (gaLoaded) return;
              gaLoaded = true;
              
              const script = document.createElement('script');
              script.async = true;
              script.src = 'https://www.googletagmanager.com/gtag/js?id=G-JKP3TVGR91';
              document.head.appendChild(script);
              
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              
              gtag('consent', 'default', {
                'analytics_storage': 'denied'
              });
              
              gtag('config', 'G-JKP3TVGR91', {
                'anonymize_ip': true,
                'allow_google_signals': false,
                'allow_ad_personalization_signals': false,
                'transport_type': 'beacon',
                'page_title': document.title,
                'page_location': window.location.href
              });
            }
            
            const events = ['scroll', 'click', 'touchstart', 'mousemove', 'keydown'];
            const timeout = setTimeout(loadGA, 3000);
            
            function handleInteraction() {
              clearTimeout(timeout);
              loadGA();
              events.forEach(event => window.removeEventListener(event, handleInteraction));
            }
            
            if (document.readyState === 'complete') {
              events.forEach(event => window.addEventListener(event, handleInteraction, { once: true, passive: true }));
            } else {
              window.addEventListener('load', () => {
                events.forEach(event => window.addEventListener(event, handleInteraction, { once: true, passive: true }));
              });
            }
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider>
          {/* ── Background layer ── */}
          <div className="blob-container">
            <div className="blob blob-1" />
            <div className="blob blob-2" />
            <div className="blob blob-3" />
            <SVGOverlay className="svg-overlay absolute inset-0 h-full pointer-events-none left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0" />
          </div>

          {/* ── Sticky header ── */}
          <header className="glass-nav-shell max-w-4xl mx-3 md:mx-auto" role="banner">
            <LiquidGlassNav className="p-0">
              <div className="w-full px-3 sm:px-4">
                <div className="flex justify-between items-center h-16">
                  <div className="flex items-center">
                    <Link
                      href="/"
                      className="flex items-center focus:outline-none rounded hover:opacity-80 transition-opacity duration-300"
                      aria-label="Gyro Governance - Home"
                    >
                      <Image
                        src="/assets/gyrogovernance_logo.svg"
                        alt="Gyro Governance Logo"
                        width={40}
                        height={40}
                        className="h-10 w-10"
                        priority
                        loading="eager"
                        sizes="40px"
                        placeholder="empty"
                      />
                    </Link>
                  </div>
                  <div className="flex items-center space-x-5">
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-1" role="navigation" aria-label="Main navigation">
                      <Link href="/" className="nav-link text-foreground-secondary hover:text-classic-blue text-sm font-bold transition-all duration-200 focus:outline-none" aria-label="Home page">
                        Home
                      </Link>
                      <Link href="/about" className="nav-link text-foreground-secondary hover:text-classic-blue text-sm font-bold transition-all duration-200 focus:outline-none" aria-label="About Gyro Governance">
                        About
                      </Link>
                      <Link href="/articles" className="nav-link text-foreground-secondary hover:text-classic-blue text-sm font-bold transition-all duration-200 focus:outline-none" aria-label="Articles">
                        Articles
                      </Link>
                      <Link href="/docs" className="nav-link text-foreground-secondary hover:text-classic-blue text-sm font-bold transition-all duration-200 focus:outline-none" aria-label="Documentation">
                        Docs
                      </Link>
                    </nav>

                    <ThemeToggle />

                    {/* GitHub Button — Hidden on mobile */}
                    <a
                      href="https://github.com/gyrogovernance"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-cta-button hidden sm:inline-flex items-center ml-auto mr-2 md:mr-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-400/50"
                      aria-label="Visit Gyro Governance GitHub organization (opens in new tab)"
                    >
                      <GitHubIcon className="w-4 h-4 mr-2" />
                      GitHub
                    </a>

                    {/* Mobile Menu */}
                    <MobileMenu />
                  </div>
                </div>
              </div>
            </LiquidGlassNav>
          </header>

          {/* ── Page body ── */}
          <div className="page-body">
            <main role="main" className="relative">
              {children}
            </main>

            <footer className="border-t border-border-primary mt-16 bg-bg-surface/80" role="contentinfo">
              <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <p className="text-foreground-secondary font-medium">GYRO GOVERNANCE | 2025 | CC BY-SA 4.0</p>

                  <nav className="mt-6" role="navigation" aria-label="Footer navigation">
                    <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-sm">
                      <Link href="/" className="text-foreground-secondary hover:text-classic-blue transition-colors duration-200 font-medium">Home</Link>
                      <span className="text-foreground-tertiary flex items-center px-1">•</span>
                      <Link href="/about" className="text-foreground-secondary hover:text-classic-blue transition-colors duration-200 font-medium">About Gyro Governance</Link>
                      <span className="text-foreground-tertiary flex items-center px-1">•</span>
                      <Link href="/articles" className="text-foreground-secondary hover:text-classic-blue transition-colors duration-200 font-medium">Articles</Link>
                      <span className="text-foreground-tertiary flex items-center px-1">•</span>
                      <Link href="/docs" className="text-foreground-secondary hover:text-classic-blue transition-colors duration-200 font-medium">Docs</Link>
                      <span className="text-foreground-tertiary flex items-center px-1">•</span>
                      <Link href="/github" className="text-foreground-secondary hover:text-classic-blue transition-colors duration-200 font-medium">GitHub</Link>
                      <span className="text-foreground-tertiary flex items-center px-1">•</span>
                      <Link href="/glossary" className="text-foreground-secondary hover:text-classic-blue transition-colors duration-200 font-medium">Glossary</Link>
                      <span className="text-foreground-tertiary flex items-center px-1">•</span>
                      <Link href="/privacy-policy" className="text-foreground-secondary hover:text-classic-blue transition-colors duration-200 font-medium">Privacy Policy</Link>
                      <span className="text-foreground-tertiary flex items-center px-1">•</span>
                      <Link href="/cookie-policy" className="text-foreground-secondary hover:text-classic-blue transition-colors duration-200 font-medium">Cookie Policy</Link>
                    </div>
                  </nav>

                  <div className="mt-4 flex justify-center">
                    <Image
                      src="/assets/gyrogovernance_stamp.svg"
                      alt="Gyro Governance Logo"
                      width={120}
                      height={120}
                      className="h-30 w-30 opacity-30 hover:opacity-60 transition-opacity duration-200"
                      loading="lazy"
                      sizes="120px"
                    />
                  </div>
                </div>
              </div>
            </footer>
          </div>

          <CookieBanner />
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}