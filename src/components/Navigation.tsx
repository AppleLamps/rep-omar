"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { sections } from "@/lib/investigation";
import BrandMark from "./BrandMark";

interface NavigationProps { activeSection: string; scrollProgress: number; pathname: string }
export default function Navigation({ activeSection, scrollProgress, pathname }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const home = pathname === "/";
  const navLinks = sections.filter(section => section.id !== "status").map(section => ({ href: (home ? "#" : "/#") + section.id, label: section.label, active: home && activeSection === section.id, current: "location" as const }));
  const links = [...navLinks, { href: "/updates", label: "Updates", active: pathname === "/updates", current: "page" as const }, { href: "/research/ivanhoe", label: "Mining Appendix", active: pathname === "/research/ivanhoe", current: "page" as const }];
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") { setMobileMenuOpen(false); menuButtonRef.current?.focus(); } };
    const closeOutside = (event: PointerEvent) => { if (event.target instanceof Node && !navRef.current?.contains(event.target)) setMobileMenuOpen(false); };
    const desktop = window.matchMedia("(min-width: 1280px)");
    const closeOnDesktop = () => { if (desktop.matches) setMobileMenuOpen(false); };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    desktop.addEventListener("change", closeOnDesktop);
    return () => { document.removeEventListener("keydown", closeOnEscape); document.removeEventListener("pointerdown", closeOutside); desktop.removeEventListener("change", closeOnDesktop); };
  }, [mobileMenuOpen]);
  return <>
    <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-red-700 focus:px-4 focus:py-3 focus:text-white">Skip to main content</a>
    <div aria-hidden="true" className="fixed inset-x-0 top-0 z-[60] h-1 bg-slate-200"><div className="h-full bg-red-700" style={{ width: scrollProgress + "%" }} /></div>
    <nav ref={navRef} aria-label="Report navigation" data-site-header className="fixed inset-x-0 top-1 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3"><BrandMark /><div className="min-w-0"><Link href="/#overview" onClick={() => setMobileMenuOpen(false)} className="font-display block text-base font-bold text-slate-950 sm:text-xl">Follow The Money</Link><p className="text-xs text-slate-600">by <a href="https://x.com/lamps_apple" target="_blank" rel="noopener noreferrer" className="text-red-800 hover:underline">Apple Lamps</a></p></div></div>
          <Link href={home ? "#status" : "/#status"} className="hidden min-h-11 items-center rounded-lg bg-red-50 px-4 text-sm font-semibold text-red-800 xl:inline-flex">Latest developments <span aria-hidden="true" className="ml-2">→</span></Link>
          <button ref={menuButtonRef} type="button" aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation" aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-slate-800 hover:bg-slate-100 xl:hidden"><span aria-hidden="true" className="text-2xl">{mobileMenuOpen ? "×" : "☰"}</span></button>
        </div>
        <div className="hidden items-center justify-between gap-1 border-t border-slate-100 py-1 xl:flex">{links.map(link => <Link key={link.href} href={link.href} aria-current={link.active ? link.current : undefined} className={"whitespace-nowrap rounded-lg px-2 py-2 text-sm font-semibold " + (link.active ? "bg-red-50 text-red-800" : "text-slate-600 hover:bg-slate-50 hover:text-red-800")}>{link.label}</Link>)}</div>
        <div id="mobile-navigation" hidden={!mobileMenuOpen} className="max-h-[calc(100dvh-4.25rem)] overflow-y-auto overscroll-contain border-t border-slate-200 py-3 xl:hidden"><div className="grid gap-1 sm:grid-cols-2">{links.map(link => <Link key={link.href} href={link.href} aria-current={link.active ? link.current : undefined} onClick={() => setMobileMenuOpen(false)} className={"flex min-h-11 items-center rounded-lg px-4 py-3 text-sm font-semibold " + (link.active ? "bg-red-50 text-red-800" : "text-slate-700 hover:bg-slate-50")}>{link.label}</Link>)}</div></div>
      </div>
    </nav>
  </>;
}
