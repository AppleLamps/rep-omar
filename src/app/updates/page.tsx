import Link from "next/link";
import type { Metadata } from "next";
import { reviewedDate, updates, socialImage } from "@/lib/investigation";
import { Citations } from "@/components/SourceLink";

export const metadata: Metadata = {
  title: "Developments & Corrections",
  description: "The disclosure amendments, federal investigation and court developments in the Omar, Mynett and Rose Lake story.",
  alternates: { canonical: "/updates" },
  openGraph: { title: "Developments & Corrections | Follow The Money", description: "The disclosure amendments, investigations and court developments, by date.", url: "/updates", images: [socialImage] },
  twitter: { card: "summary_large_image", title: "Developments & Corrections | Follow The Money", description: "The disclosure amendments, investigations and court developments, by date.", images: ["/twitter-image"] },
};
export default function UpdatesPage() {
  return <main id="main-content" tabIndex={-1} className="bg-slate-50">
    <header className="gradient-bg dark-panel pb-12 pt-28 xl:pt-40"><div className="page-container"><Link href="/" className="source-link text-sm text-red-200">← The full investigation</Link><p className="eyebrow mt-7 text-red-200">Updated {reviewedDate}</p><h1 className="section-title mt-4 text-white">Developments &amp; corrections</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">Omar’s disclosure reversal, the federal investigation and the court proceedings around Rose Lake, from the latest developments back to the original filings.</p></div></header>
    <div className="page-container space-y-5 py-10 sm:py-14">
      {updates.map(update => <article key={update.isoDate} className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7"><p className="eyebrow text-red-800">{update.kind}</p><time dateTime={update.isoDate} className="mt-3 block text-sm text-slate-600">{update.date}</time><h2 className="mt-3 text-xl font-bold text-slate-950 sm:text-2xl">{update.title}</h2><p className="mt-4 max-w-4xl text-base leading-7 text-slate-700">{update.text}</p><Citations ids={update.sourceIds} /></article>)}
      <details className="rounded-xl border border-slate-200 bg-white"><summary className="cursor-pointer p-5 text-sm font-bold text-red-900">Corrections to earlier versions</summary><div className="space-y-4 border-t border-slate-200 p-5 text-sm leading-6 text-slate-700">
        <p>The amended 2023 disclosure belongs alongside the amended 2024 report. Rose Lake’s archived roster distinguishes partners from advisers; earlier descriptions of Hoffman, Pratt and Healy were inaccurate. Derrough’s current employer is Jefferies.</p>
        <p>The campaign-payment figures and FEC outcome have been corrected. Rose Lake’s legislative-expertise quotation is reproduced from its archived website. The July 2024 cannabis payoff cannot be placed after both OCI wires from the available dates.</p>
        <p>Hailer’s November 20, 2024 declaration is the cited court document; an earlier transcript reference was incorrect. Rose Lake’s adviser connection to Ivanhoe Atlantic does not establish a Rose Lake ownership stake.</p>
        <p>Omar’s current House committees are Education and the Workforce and Budget. The February 2026 Oversight letter is addressed to Mynett. Earlier references to Omar’s current service on Foreign Affairs and to the letter’s recipient were incorrect.</p>
        <Citations ids={["amendment2023", "team", "derrough", "fec", "legislation", "declaration", "ivanhoe", "committees", "oversight"]} />
      </div></details>
      <nav aria-label="Continue reading" className="flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-200 pt-5 text-sm font-semibold text-red-800"><Link href="/#papertiger" className="source-link">The disclosure reversal</Link><Link href="/#transfers" className="source-link">The $11.25 million wires</Link><Link href="/#sources" className="source-link">The source documents</Link></nav>
    </div>
  </main>;
}
