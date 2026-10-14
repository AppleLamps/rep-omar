import Link from "next/link";
import { reviewedDate, reviewedISODate } from "@/lib/investigation";
import BrandMark from "./BrandMark";
import LegalText from "./LegalText";

export default function Footer() {
  return <footer className="bg-slate-950 py-7 text-slate-300 dark-panel">
    <div className="page-container">
      <div className="flex flex-wrap items-start justify-between gap-x-8 gap-y-4">
        <div className="flex items-center gap-3"><BrandMark /><div><Link href="/#overview" className="font-display text-lg font-bold text-white">Follow The Money</Link><p className="text-xs">Conservative commentary and public-records research by <a href="https://x.com/lamps_apple" target="_blank" rel="noopener noreferrer" className="text-red-200 underline">Apple Lamps</a></p></div></div>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-2 text-sm"><Link href="/updates" className="source-link">Updates</Link><Link href="/#sources" className="source-link">Sources</Link><Link href="/research/ivanhoe" className="source-link">Mining appendix</Link></nav>
      </div>
      <details id="footer-legal" className="mt-5 border-t border-slate-700 pt-3 text-xs"><summary className="w-fit cursor-pointer py-2 font-semibold text-slate-200">Disclaimer &amp; corrections</summary><div className="mt-3 max-w-3xl"><LegalText /></div></details>
      <p className="mt-3 text-xs leading-5 text-slate-400"><span>© 2026 Apple Lamps.</span> <span className="ml-2">Records reviewed <time dateTime={reviewedISODate}>{reviewedDate}</time>.</span></p>
    </div>
  </footer>;
}
