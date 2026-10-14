import Link from "next/link";
import { reviewedDate, reviewedISODate } from "@/lib/investigation";
import { Citations } from "./SourceLink";

export default function Hero() {
  return <header id="overview" className="gradient-bg dark-panel pb-12 pt-28 sm:pb-16 xl:pt-40">
    <div className="page-container">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-[0.15em] text-red-200">
        <span>Follow the money</span><span className="text-slate-300">By Apple Lamps</span>
      </div>
      <h1 className="font-display mt-6 max-w-4xl text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">Ilhan Omar, Tim Mynett<br className="hidden sm:block" /> &amp; the Money Trail</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">Ilhan Omar reported her husband’s businesses in asset brackets totaling roughly $6–30 million. Ten months later, she changed both values to “None” and added $100,001–$1,000,000 in previously unreported Rose Lake partnership income.</p>
      <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">Her office blamed an accounting error. The revised filings leave a basic accountability question: what produced the income, and what supported the figures she signed?</p>
      <Citations ids={["original", "amendment", "followup"]} light />
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Link href="#papertiger" className="primary-button">Read the disclosure reversal <span aria-hidden="true">→</span></Link>
        <Link href="#transfers" className="inline-flex min-h-11 items-center text-sm font-semibold text-white underline underline-offset-4">The separate $11.25 million transfer</Link>
      </div>
      <p className="mt-6 text-xs text-slate-300">Updated <time dateTime={reviewedISODate}>{reviewedDate}</time></p>
    </div>
  </header>;
}
