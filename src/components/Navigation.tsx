"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface NavigationProps {
  activeSection: string;
  scrollProgress: number;
}

const navLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#players", label: "Players" },
  { href: "#connection", label: "The Links" },
  { href: "#money", label: "Money Trail" },
  { href: "#papertiger", label: "Paper Tiger" },
  { href: "#conflict", label: "Conflicts" },
  { href: "#china", label: "China Ties" },
  { href: "#redflags", label: "Red Flags" },
  { href: "#sources", label: "Sources" },
  { href: "/updates", label: "Updates" },
];

export default function Navigation({ activeSection, scrollProgress }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !navRef.current?.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };
    const desktop = window.matchMedia("(min-width: 1280px)");
    const closeOnDesktop = () => { if (desktop.matches) setMobileMenuOpen(false); };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[70] focus:px-4 focus:py-2 focus:bg-red-600 focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-200 z-[60]">
        <div
          className="h-full bg-gradient-to-r from-red-500 to-red-700 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav ref={navRef} aria-label="Report navigation" className="fixed top-1 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex min-w-0 items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="min-w-0">
                <Link href="/#overview" className="block font-display font-bold text-base sm:text-xl text-slate-900">
                  Follow The Money
                </Link>
                <span className="block text-slate-600 text-xs">by <a href="https://x.com/lamps_apple" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline">Apple Lamps</a></span>
              </div>
            </div>

            <Link href="/updates" className="hidden xl:inline-flex items-center rounded-lg bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-100">
              Read the latest updates <span aria-hidden="true" className="ml-2">→</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              ref={menuButtonRef}
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              className="xl:hidden flex-shrink-0 min-h-11 min-w-11 p-2 rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          <div className="hidden xl:flex items-center justify-between gap-1 border-t border-slate-100 py-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                aria-current={activeSection === link.href.slice(1) ? "location" : undefined}
                className={`whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition-colors ${activeSection === link.href.slice(1) ? "bg-red-50 text-red-700" : "text-slate-600 hover:bg-slate-50 hover:text-red-700"}`}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Disclosure menu stays within short and landscape viewports. */}
          {mobileMenuOpen && (
            <div id="mobile-navigation" className="xl:hidden max-h-[calc(100dvh-4.25rem)] overflow-y-auto overscroll-contain py-3 border-t border-slate-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)}
                    aria-current={activeSection === link.href.slice(1) ? "location" : undefined}
                    className={`min-h-11 flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeSection === link.href.slice(1) ? "bg-red-50 text-red-700" : "text-slate-600 hover:bg-slate-50"}`}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
