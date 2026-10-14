import Link from "next/link";
import { reviewedDate, reviewedISODate } from "@/lib/investigation";

export default function Hero() {
  return <header id="overview" className="gradient-bg dark-panel pb-12 pt-28 sm:pb-16 xl:pt-40">
    <div className="page-container">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-[0.15em] text-red-200">
        <span>Follow the money</span><span className="text-slate-300">A conservative investigation by Apple Lamps</span>
      </div>
      <h1 className="font-display mt-6 max-w-4xl text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">Ilhan Omar, Tim Mynett<br className="hidden sm:block" /> &amp; the Money Trail</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">Millions in reported business values rewritten. A political network turned investment firm. $11.25 million wired into a partner’s company. The records demand answers.</p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Link href="#transfers" className="primary-button">Follow the $11.25 million <span aria-hidden="true">→</span></Link>
        <Link href="#papertiger" className="inline-flex min-h-11 items-center text-sm font-semibold text-white underline underline-offset-4">Compare the disclosures</Link>
      </div>
      <p className="mt-6 text-xs text-slate-300">Records reviewed <time dateTime={reviewedISODate}>{reviewedDate}</time> · Original filings and responses linked throughout</p>
    </div>
  </header>;
}
