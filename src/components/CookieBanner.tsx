'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  useEffect(() => {
    if (!showBanner) return;

    // Track user interactions
    const handleInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        // Auto-accept after 3 seconds of interaction
        setTimeout(() => {
          if (showBanner) {
            acceptCookies();
          }
        }, 3000);
      }
    };

    // Listen for various user interactions
    const events = ['scroll', 'click', 'keydown', 'touchstart'];
    events.forEach(event => {
      document.addEventListener(event, handleInteraction, { once: false });
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleInteraction);
      });
    };
  }, [showBanner, hasInteracted]);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    // Enable Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
    // Disable Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-surface-elevated/95 backdrop-blur-md border-t border-border shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-foreground-secondary">
              <span className="font-medium text-foreground">🍪 We use cookies to improve your experience.</span>{' '}
              By browsing, scrolling, or clicking anywhere on this site, you're helping us understand how to make it better. 
              You can also explicitly{' '}
              <button
                onClick={acceptCookies}
                className="text-apple-blue hover:text-apple-purple underline font-medium"
              >
                accept
              </button>{' '}
              or{' '}
              <button
                onClick={rejectCookies}
                className="text-apple-blue hover:text-apple-purple underline font-medium"
              >
                reject
              </button>{' '}
              cookies. Read our{' '}
              <Link href="/privacy-policy" className="text-apple-blue hover:text-apple-purple underline">
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link href="/cookie-policy" className="text-apple-blue hover:text-apple-purple underline">
                Cookie Policy
              </Link>
              .
            </p>
            {hasInteracted && (
              <p className="text-xs text-apple-blue mt-2 font-medium">
                ✨ Thanks for exploring! Cookies will be accepted in a moment...
              </p>
            )}
          </div>
          <div className="flex gap-3">
            <button
              onClick={rejectCookies}
              className="px-4 py-2 text-sm font-medium text-foreground-secondary hover:text-foreground border border-border rounded-lg hover:bg-surface transition-colors duration-200"
            >
              Reject
            </button>
            <button
              onClick={acceptCookies}
              className="px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-apple-blue to-apple-purple hover:from-apple-purple hover:to-apple-pink rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
