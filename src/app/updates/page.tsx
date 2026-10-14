import Link from "next/link";
import type { Metadata } from "next";
import { reviewedDate, updates, socialImage } from "@/lib/investigation";
import { Citations } from "@/components/SourceLink";

export const metadata: Metadata = {
  title: "Updates & Corrections",
  description: "Dated developments and documented corrections in the Omar, Mynett and Rose Lake investigation.",
  alternates: { canonical: "/updates" },
  openGraph: { title: "Updates & Corrections | Follow The Money", description: "Dated developments in the Omar, Mynett and Rose Lake investigation.", url: "/updates", images: [socialImage] },
  twitter: { card: "summary_large_image", title: "Updates & Corrections | Follow The Money", description: "Dated developments in the Omar, Mynett and Rose Lake investigation.", images: ["/twitter-image"] },
};
export default function UpdatesPage() {
  return <main id="main-content" tabIndex={-1} className="bg-slate-50">
    <header className="gradient-bg dark-panel pb-12 pt-28 xl:pt-40"><div className="page-container"><Link href="/" className="source-link text-sm text-red-200">← Back to the full investigation</Link><p className="eyebrow mt-7 text-red-200">Records reviewed {reviewedDate}</p><h1 className="section-title mt-4 text-white">Updates &amp; corrections</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">Follow the developments, compare the originals and see what changed. Event dates and dates added to this publication are kept separate.</p></div></header>
    <div className="page-container space-y-5 py-10 sm:py-14">
      <details className="rounded-xl border border-red-200 bg-white"><summary className="cursor-pointer p-5 text-sm font-bold text-red-900">What this revision corrects</summary><div className="space-y-3 border-t border-red-100 p-5 text-sm leading-6 text-slate-700"><p>The 2023 amendment is now included alongside 2024. The team roster distinguishes partners from advisors, and the Hoffman, Pratt and Healy biographies are corrected. Derrough’s current employer is updated.</p><p>The campaign-payment denominator and FEC disposition are corrected. The legislative-expertise quote matches the archive. The transfer timeline no longer claims that a payoff followed both wires.</p><p>The earlier missing transcript placeholder stays removed. The linked document is Hailer’s November 20 declaration in Epic! Creations. Mining records now have a separate dated appendix; a Rose Lake stake in Ivanhoe remains unestablished.</p><p>Earlier present-tense Foreign Affairs claims and the mistaken Oversight-letter recipient remain corrected. The letter is addressed to Mynett; Omar’s current committees are Education and the Workforce and Budget.</p></div></details>
      {updates.map(update => <article key={update.isoDate} className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7"><p className="eyebrow text-red-800">{update.kind}</p><time dateTime={update.isoDate} className="mt-3 block text-sm text-slate-600">{update.date}</time><h2 className="mt-3 text-xl font-bold text-slate-950 sm:text-2xl">{update.title}</h2><p className="mt-4 max-w-4xl text-base leading-7 text-slate-700">{update.text}</p><Citations ids={update.sourceIds} /></article>)}
      <nav aria-label="Continue reading" className="flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-200 pt-5 text-sm font-semibold text-red-800"><Link href="/#transfers" className="source-link">The $11.25 million</Link><Link href="/#papertiger" className="source-link">Disclosure comparison</Link><Link href="/#sources" className="source-link">All source records</Link></nav>
    </div>
  </main>;
}
