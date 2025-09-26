import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Script from 'next/script';
import StructuredData from '@/components/StructuredData';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Gyro Governance - AI Research and Development",
    template: "%s | Gyro Governance"
  },
  description: "Advancing AI governance through innovative research and development solutions. Mathematical physics foundations for AGI/ASI architecture and LLM alignment protocols.",
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
  openGraph: {
    title: "Gyro Governance - AI Research and Development",
    description: "Advancing AI governance through innovative research and development solutions. Mathematical physics foundations for AGI/ASI architecture.",
    url: "https://gyrogovernance.com",
    siteName: "Gyro Governance",
    images: [
      {
        url: "/og-image.svg",
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
    images: ["/og-image.svg"],
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
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-JKP3TVGR91"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JKP3TVGR91');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-surface/95 backdrop-blur-sm border-b border-border shadow-lg animate-slide-in-left" role="banner">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-8">
                <Link
                  href="/"
                  className="text-2xl font-bold bg-gradient-to-r from-apple-blue to-apple-purple bg-clip-text text-transparent hover:from-apple-purple hover:to-apple-pink transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-apple-blue focus:ring-offset-2 rounded p-1"
                  aria-label="Gyro Governance - Home"
                >
                  Gyro Governance
                </Link>
                <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
                  <Link
                    href="/"
                    className="text-foreground-secondary hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-surface-elevated focus:outline-none focus:ring-2 focus:ring-apple-blue focus:ring-offset-2 card-hover"
                    aria-label="Home page"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="text-foreground-secondary hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-surface-elevated focus:outline-none focus:ring-2 focus:ring-apple-blue focus:ring-offset-2 card-hover"
                    aria-label="About Gyro Governance"
                  >
                    About
                  </Link>
                </nav>
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href="https://korompilias.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-apple-blue to-apple-purple hover:from-apple-purple hover:to-apple-pink text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-apple-blue/50 animate-pulse-glow"
                  aria-label="Visit Author's personal website (opens in new tab)"
                >
                  Author
                </a>
              </div>
            </div>
          </div>
        </header>

        <main role="main" className="animate-fade-in-up">
          {children}
        </main>

        <footer className="bg-surface-elevated/50 backdrop-blur-sm border-t border-border mt-16 animate-fade-in-up" role="contentinfo">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-foreground-secondary font-medium">&copy; 2024 Gyro Governance. All rights reserved.</p>
              <p className="mt-2 text-sm text-foreground-tertiary">
                Advancing AI governance through innovative research and development solutions
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
