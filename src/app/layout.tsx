import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import Script from 'next/script';
import { ThemeProvider } from '@/components/ThemeProvider';
import ThemeToggle from '@/components/ThemeToggle';
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

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
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
          className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} antialiased`}
        >
        <ThemeProvider>
        <div className="blob-container">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>
                  <header className="sticky top-1.5 z-50 bg-surface/40 backdrop-blur-md border border-border-inner shadow-[0_0_0_1px_var(--border-outer)] mx-1.5 rounded-2xl" role="banner">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link
                  href="/"
                  className="flex items-center focus:outline-none rounded p-1 hover:opacity-80 transition-opacity duration-300"
                  aria-label="Gyro Governance - Home"
                >
                  <Image 
                    src="/assets/gyrogovernance_logo.png" 
                    alt="Gyro Governance Logo" 
                    width={40}
                    height={40}
                    className="h-10 w-10"
                    priority
                  />
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <nav className="hidden md:flex space-x-1" role="navigation" aria-label="Main navigation">
                  <Link
                    href="/"
                    className="text-foreground-secondary hover:text-apple-blue px-3 py-2 text-sm font-bold transition-all duration-200 focus:outline-none"
                    aria-label="Home page"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="text-foreground-secondary hover:text-apple-blue px-3 py-2 text-sm font-bold transition-all duration-200 focus:outline-none"
                    aria-label="About Gyro Governance"
                  >
                    About
                  </Link>
                </nav>
                <ThemeToggle />
                <a
                  href="https://korompilias.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300/50"
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

                  <footer className="bg-surface-elevated/50 backdrop-blur-sm border-t border-border mt-16" role="contentinfo">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-foreground-secondary font-medium">BASIL KOROMPILIAS | 2025 | CC BY-SA 4.0</p>
              <div className="mt-4 flex justify-center">
                <Image 
                  src="/assets/gyrogovernance_stamp.svg" 
                  alt="Gyro Governance Logo" 
                  width={120}
                  height={120}
                  className="h-30 w-30 opacity-30 hover:opacity-60 transition-opacity duration-200"
                />
              </div>
            </div>
          </div>
        </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
