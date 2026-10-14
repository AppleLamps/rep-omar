"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { sections } from "@/lib/investigation";
import Navigation from "./Navigation";
import BackToTop from "./BackToTop";

export default function SiteFrame({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("overview");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  useEffect(() => {
    let opened: HTMLDetailsElement[] = [];
    const beforePrint = () => {
      opened = Array.from(document.querySelectorAll<HTMLDetailsElement>("details:not([open])"));
      opened.forEach(element => { element.open = true; });
    };
    const afterPrint = () => {
      opened.forEach(element => { element.open = false; });
      opened = [];
    };
    window.addEventListener("beforeprint", beforePrint);
    window.addEventListener("afterprint", afterPrint);
    return () => {
      window.removeEventListener("beforeprint", beforePrint);
      window.removeEventListener("afterprint", afterPrint);
    };
  }, []);
  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? Math.min(100, window.scrollY / total * 100) : 0);
      setShowBackToTop(window.scrollY > 500);
      if (pathname !== "/") return;
      const threshold = window.matchMedia("(min-width: 1280px)").matches ? 140 : 92;
      const current = sections.slice().reverse().find(section => {
        const element = document.getElementById(section.id);
        return element && element.getBoundingClientRect().top <= threshold;
      });
      setActiveSection(current?.id ?? "overview");
    };
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(measure); };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", schedule);
    const resize = new ResizeObserver(schedule);
    resize.observe(document.body);
    return () => {
      window.cancelAnimationFrame(frame);
      resize.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", schedule);
    };
  }, [pathname]);
  return <>
    <Navigation activeSection={pathname === "/" ? activeSection : ""} scrollProgress={scrollProgress} pathname={pathname} />
    {children}
    <BackToTop show={showBackToTop} />
  </>;
}
