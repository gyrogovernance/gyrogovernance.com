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
        {/* Cache control hints for static assets */}
        <meta httpEquiv="Cache-Control" content="public, max-age=31536000, immutable" />
        {/* Critical CSS for above-the-fold content */}
        <style dangerouslySetInnerHTML={{
          __html: `
            :root {
              --text-primary: rgba(0, 0, 0, 0.98);
              --text-secondary: rgba(0, 0, 0, 0.85);
              --text-tertiary: rgba(0, 0, 0, 0.65);
              --bg-base: #ffffff;
              --bg-surface: #fafafa;
              --bg-elevated: #ffffff;
              --border-primary: rgba(0, 0, 0, 0.1);
              --border-secondary: rgba(0, 0, 0, 0.05);
              --link-color: #0056b3;
              --link-hover: #003d82;
            }
            .dark {
              --text-primary: rgba(255, 255, 255, 0.98);
              --text-secondary: rgba(255, 255, 255, 0.85);
              --text-tertiary: rgba(255, 255, 255, 0.65);
              --bg-base: #0a0a0a;
              --bg-surface: #141414;
              --bg-elevated: #1f1f1f;
              --border-primary: rgba(255, 255, 255, 0.15);
              --border-secondary: rgba(255, 255, 255, 0.08);
              --link-color: #66b3ff;
              --link-hover: #99ccff;
            }
            body { font-family: var(--font-nunito), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; margin: 0; background: var(--bg-base); color: var(--text-primary); transition: background-color 0.3s ease, color 0.3s ease; }
            .nav-link { min-height: 44px; min-width: 44px; }
            @font-face { font-family: 'Nunito'; font-display: swap; }
          `
        }} />
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        {/* DNS prefetch for faster lookups */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        {/* CSS will be automatically optimized by Next.js */}
        <StructuredData />
        {/* Google Analytics - Ultra-delayed loading after user interaction */}
        <Script id="google-analytics-delayed" strategy="lazyOnload">
          {`
            // Delay GA loading until after page is interactive and user has scrolled or clicked
            let gaLoaded = false;
            
            function loadGA() {
              if (gaLoaded) return;
              gaLoaded = true;
              
              // Load GA script
              const script = document.createElement('script');
              script.async = true;
              script.src = 'https://www.googletagmanager.com/gtag/js?id=G-JKP3TVGR91';
              document.head.appendChild(script);
              
              // Initialize GA
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              
              // Set default consent state to denied
              gtag('consent', 'default', {
                'analytics_storage': 'denied'
              });
              
              // Initialize GA with consent mode - minimal config
              gtag('config', 'G-JKP3TVGR91', {
                'anonymize_ip': true,
                'allow_google_signals': false,
                'allow_ad_personalization_signals': false,
                'transport_type': 'beacon',
                'page_title': document.title,
                'page_location': window.location.href
              });
            }
            
            // Load after 3 seconds OR after first user interaction (whichever comes first)
            const events = ['scroll', 'click', 'touchstart', 'mousemove', 'keydown'];
            const timeout = setTimeout(loadGA, 3000);
            
            function handleInteraction() {
              clearTimeout(timeout);
              loadGA();
              events.forEach(event => window.removeEventListener(event, handleInteraction));
            }
            
            // Wait for page to be fully loaded
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
        <div className="blob-container">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
          
          {/* SVG Overlay - Centered and full width on desktop */}
          <SVGOverlay className="svg-overlay absolute inset-0 h-full pointer-events-none left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0" />
        </div>
                  <header className="sticky top-3 z-50 bg-surface/40 backdrop-blur-md border border-border-inner shadow-[0_0_0_1px_var(--border-outer)] max-w-4xl mx-auto rounded-[2rem]" role="banner">
            <div className="max-w-6xl lg:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <Link
                    href="/"
                    className="nav-link text-foreground-secondary hover:text-apple-blue text-sm font-bold transition-all duration-200 focus:outline-none"
                    aria-label="Home page"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="nav-link text-foreground-secondary hover:text-apple-blue text-sm font-bold transition-all duration-200 focus:outline-none"
                    aria-label="About Gyro Governance"
                  >
                    About
                  </Link>
                  <Link
                    href="/articles"
                    className="nav-link text-foreground-secondary hover:text-apple-blue text-sm font-bold transition-all duration-200 focus:outline-none"
                    aria-label="Articles"
                  >
                    Articles
                  </Link>
                  <Link
                    href="/docs"
                    className="nav-link text-foreground-secondary hover:text-apple-blue text-sm font-bold transition-all duration-200 focus:outline-none"
                    aria-label="Documentation"
                  >
                    Docs
                  </Link>
                </nav>
                
                <ThemeToggle />
                
                {/* GitHub Button - Hidden on mobile */}
                <a
                  href="https://github.com/gyrogovernance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center ml-auto mr-0 bg-gradient-to-r from-apple-blue via-apple-purple to-apple-pink hover:from-apple-purple hover:via-apple-pink hover:to-apple-blue text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-apple-blue/50"
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
        </header>

                  <main role="main" className="relative z-10">
                    {children}
                  </main>

                  <footer className="bg-surface-elevated/50 backdrop-blur-sm border-t border-border mt-16" role="contentinfo">
          <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-foreground-secondary font-medium">GYRO GOVERNANCE | 2025 | CC BY-SA 4.0</p>
              
                {/* Main Menu Navigation */}
              <nav className="mt-6" role="navigation" aria-label="Footer navigation">
                <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-sm">
                  <Link href="/" className="text-foreground-secondary hover:text-apple-blue transition-colors duration-200 font-medium">
                    Home
                  </Link>
                  <span className="text-foreground-tertiary flex items-center px-1">•</span>
                  <Link href="/about" className="text-foreground-secondary hover:text-apple-blue transition-colors duration-200 font-medium">
                    About Gyro Governance
                  </Link>
                  <span className="text-foreground-tertiary flex items-center px-1">•</span>
                  <Link href="/articles" className="text-foreground-secondary hover:text-apple-blue transition-colors duration-200 font-medium">
                    Articles
                  </Link>
                  <span className="text-foreground-tertiary flex items-center px-1">•</span>
                  <Link href="/docs" className="text-foreground-secondary hover:text-apple-blue transition-colors duration-200 font-medium">
                    Docs
                  </Link>
                  <span className="text-foreground-tertiary flex items-center px-1">•</span>
                  <Link href="/github" className="text-foreground-secondary hover:text-apple-blue transition-colors duration-200 font-medium">
                    GitHub
                  </Link>
                  <span className="text-foreground-tertiary flex items-center px-1">•</span>
                  <Link href="/glossary" className="text-foreground-secondary hover:text-apple-blue transition-colors duration-200 font-medium">
                    Glossary
                  </Link>
                  <span className="text-foreground-tertiary flex items-center px-1">•</span>
                  <Link href="/privacy-policy" className="text-foreground-secondary hover:text-apple-blue transition-colors duration-200 font-medium">
                    Privacy Policy
                  </Link>
                  <span className="text-foreground-tertiary flex items-center px-1">•</span>
                  <Link href="/cookie-policy" className="text-foreground-secondary hover:text-apple-blue transition-colors duration-200 font-medium">
                    Cookie Policy
                  </Link>
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
        <CookieBanner />
        <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
