import Link from "next/link";
import type { Metadata } from "next";
import { reviewedDate, sources } from "@/lib/investigation";

export const metadata: Metadata = {
  title: "October 2026 Investigation Update | Follow the Money",
  description: "Updated disclosure filings, the Rose Lake transfer record, congressional watchdog findings, and the newly announced federal investigation. Reviewed October 13, 2026.",
};

const updates = [
  { date: "October 13, 2026", title: "Pirro announces financial-disclosure investigation", label: "Reported public statement", text: "U.S. Attorney Jeanine Pirro said her office is investigating Rep. Omar’s financial disclosures. The public statement establishes federal scrutiny, not a finding of wrongdoing. Reporting about a separate search of Omar’s home does not establish a connection to this financial-disclosure investigation.", links: [sources.federal] },
  { date: "September 9, 2026", title: "OCC recommendation to dismiss allegations reported", label: "Watchdog recommendation", text: "The Wall Street Journal reported that it reviewed confidential Office of Congressional Conduct findings recommending dismissal of the financial-disclosure allegations. The Star Tribune reported a 5–1 board vote. The OCC recommendation and Pirro’s federal investigation are separate. This review has not established a final House Ethics Committee disposition.", links: [sources.watchdog, sources.watchdogVote] },
  { date: "May 13, 2026", title: "New annual disclosure covers calendar year 2025", label: "Primary record", text: "Omar’s 2025 annual disclosure, filing 10077400, lists the asset values of Rose Lake Capital LLC and eStCru LLC as None. It reports no Rose Lake partnership income and $201–$1,000 from eStCru for 2025. These figures refer to a different reporting year from the March amendment.", links: [sources.annual] },
  { date: "April 4, 2026", title: "eStCru termination filing", label: "Reporting with reproduced filing", text: "The Washington Free Beacon reported and reproduced a California termination filing for eStCru, signed by William Hailer, dated April 4. This was nine days after the disclosure amendment. Termination alone does not determine the merits of earlier investor allegations.", links: [sources.winery] },
  { date: "March 26, 2026", title: "Asset values removed; partnership income revised", label: "Primary record", text: "The 2024 amendment, filing 10073338, changes both business asset values to None. Rose Lake partnership income changes from none to $100,001–$1,000,000, and eStCru income becomes $2,501–$5,000. Omar’s office attributed the original valuations to an accounting error involving liabilities. The filing date is March 26; reporting publicized the amendment in April.", links: [sources.original, sources.amendment] },
  { date: "February 5, 2026", title: "Oversight requests records from Timothy Mynett", label: "Primary congressional letter", text: "Chairman James Comer addressed his letter to Timothy Mynett, president and co-founder of Rose Lake Capital and partner at eStCru. He requested audited financial statements, regulatory filings and records concerning business travel or dealings in the UAE, Somalia and Kenya, with a February 19 deadline. The letter contains concerns and document requests, not adjudicated findings.", links: [sources.oversight] },
  { date: "November 20, 2024 · Added to this report October 13, 2026", title: "Hailer’s declaration supplies the transfer lead", label: "Historical primary record newly incorporated", text: "The identified document is William R. Hailer’s declaration in Epic! Creations, case 24-11161-BLS, docket 314. The report now distinguishes Rose Lake Inc., named in this declaration, from Rose Lake Capital LLC, named in Omar’s financial disclosure. The incoming wires and requested return route are presented with their evidence limits in the main report.", links: [sources.declaration] },
];

export default function UpdatesPage() {
  return (
    <main id="main-content" className="min-h-screen bg-slate-50">
      <header className="bg-slate-900 text-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-block text-red-300 underline mb-6">← Back to the full report</Link>
          <p className="text-red-300 text-sm font-semibold uppercase mb-3">Reviewed {reviewedDate}</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-4">Updates Since Publication</h1>
          <p className="text-slate-300 leading-relaxed">A dated record of new developments and corrections to the report. Event dates, filing dates and the dates material was incorporated into this publication are distinguished below.</p>
        </div>
      </header>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-6">
        <aside className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-sm text-amber-900">
          <h2 className="font-bold text-lg mb-3">Corrections incorporated October 13, 2026</h2>
          <p className="mb-3">Omar’s current committees are Education and the Workforce and Budget. Earlier present-tense Foreign Affairs claims have been corrected. The report’s earlier inference that Rose Lake owned Ivanhoe Atlantic equity is now explicitly labeled unverified.</p>
          <p className="mb-3">The former April update incorrectly described the Oversight letter as addressed to Omar and labeled a missing Hailer document as a Voizzit Section 341 transcript. The letter is addressed to Mynett. The document now linked is the November 20 declaration in Epic! Creations; the earlier transcript placeholder and bank-balance comparison have been removed.</p>
          <a href={sources.committees.href} target="_blank" rel="noopener noreferrer" className="underline">Official current committee list</a>
        </aside>
        {updates.map(update => (
          <article key={update.title} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
            <p className="text-red-700 text-xs font-semibold uppercase tracking-wide mb-2">{update.label}</p>
            <p className="text-slate-600 text-sm mb-2">{update.date}</p>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">{update.title}</h2>
            <p className="text-slate-700 leading-relaxed">{update.text}</p>
            <ul className="mt-5 space-y-3 text-sm">{update.links.map(source => <li key={source.href}><a href={source.href} target="_blank" rel="noopener noreferrer" className="text-red-700 underline underline-offset-2">{source.label}</a></li>)}</ul>
          </article>
        ))}
        <div className="bg-slate-900 text-slate-300 rounded-xl p-6 text-sm">
          <p>OCI’s February 2026 company statement says claims against it were released under a settlement approved January 23. The transfer lead should be read alongside that statement. The destination of the Rose Lake funds remains unresolved in the documents reviewed.</p>
          <a href={sources.oci.href} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-red-300 underline">OCI company statement</a>
        </div>
        <nav aria-label="Report links" className="flex flex-wrap gap-5 pt-4 border-t border-slate-200">
          <Link href="/#transfers" className="text-red-700 font-semibold underline">Read the transfer record</Link>
          <Link href="/#sources" className="text-red-700 underline">All sources and citations</Link>
        </nav>
      </div>
    </main>
  );
}
