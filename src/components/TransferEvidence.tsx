import { timeline } from "@/lib/investigation";
import ReportSection from "./ReportSection";
import SourceLink, { Citations } from "./SourceLink";

export default function TransferEvidence() {
  return <ReportSection id="transfers" eyebrow="The court-record trail" title="$11.25 million. Two wires. Where did it go?" intro="Hailer’s sworn account puts millions into Rose Lake Inc. The records below show why the transfer deserves scrutiny and what the lenders pursued." dark>
    <div className="grid gap-4 sm:grid-cols-2">
      {[{ date: "June 21, 2024", value: "$10,000,000" }, { date: "July 25, 2024", value: "$1,250,000" }].map(wire => <article key={wire.date} className="rounded-2xl border border-red-400/40 bg-red-900/20 p-5 sm:p-7">
        <p className="text-sm font-semibold text-red-200">{wire.date}</p><p className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{wire.value}</p><p className="mt-3 text-sm text-slate-300">OCI Limited → Rose Lake Inc. · per Hailer</p>
      </article>)}
    </div>
    <div className="mt-6 max-w-3xl space-y-4 text-base leading-7 text-slate-200">
      <p>Hailer identifies <strong className="text-white">OCI Limited’s Barclays account in the UK</strong> as the sender. He describes money documented as a loan and represented to Rose Lake as a fee for an attempted purchase of Byju’s Term Loan B.</p>
      <p>He later says Byju Raveendran directed him to return the entire amount through <strong className="text-white">Divya Gokulnath’s account</strong>. His declaration never says that return was completed. It does not trace a payment to Mynett.</p>
      <p className="text-sm"><SourceLink id="declaration" page={4} light>Declaration, pages 4–6</SourceLink><span className="mx-3" aria-hidden="true">·</span><SourceLink id="declaration" page={13} light>Return instruction, pages 13–14</SourceLink></p>
    </div>
    <div className="mt-8 grid gap-4 md:grid-cols-3">
      <article className="evidence-card"><p className="eyebrow text-red-200">Bank records</p><h3 className="mt-3 text-lg font-bold">Twelve banks targeted</h3><p className="mt-3 text-sm leading-6 text-slate-300">The lenders’ March 2025 subpoena notice seeks transaction records using Rose Lake and Hailer as search terms.</p><Citations ids={["subpoenas"]} light /></article>
      <article className="evidence-card"><p className="eyebrow text-red-200">Lenders’ allegation</p><h3 className="mt-3 text-lg font-bold">Possible Alpha-funds financing</h3><p className="mt-3 text-sm leading-6 text-slate-300">The OCI complaint connects the transfer account to an alleged secretive loan buyback and questions the source of funds.</p><Citations ids={["ociComplaint"]} light /></article>
      <article className="evidence-card"><p className="eyebrow text-red-200">Confirmed plan</p><h3 className="mt-3 text-lg font-bold">Claims against Hailer preserved</h3><p className="mt-3 text-sm leading-6 text-slate-300">The October 2025 plan names Hailer as excluded party 69. Preserving claims leaves the right to pursue them; it does not decide liability.</p><Citations ids={["plan"]} light /></article>
    </div>
    <details className="mt-8 rounded-xl border border-slate-700">
      <summary className="cursor-pointer px-5 py-4 text-sm font-semibold">Read the seven-event transfer and litigation timeline</summary>
      <ol className="border-t border-slate-700 px-5 py-6 sm:px-7">{timeline.map(event => <li key={event.title} className="relative border-l border-slate-600 pb-7 pl-6 last:pb-0"><span aria-hidden="true" className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-red-400" /><p className="text-xs font-semibold text-red-200">{event.date}</p><h3 className="mt-1 font-bold">{event.title}</h3><p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">{event.text}</p><Citations ids={[event.sourceId]} light /></li>)}</ol>
    </details>
    <details className="mt-4 rounded-xl border border-slate-700">
      <summary className="cursor-pointer px-5 py-4 text-sm font-semibold">OCI’s accounting and its response</summary>
      <div className="space-y-4 border-t border-slate-700 px-5 py-5 text-sm leading-6 text-slate-300">
        <p>Oliver Chapman’s November 2025 declaration accounts for about $505.9 million received by OCI. Most listed outflows are dated in 2022; a $13.1 million item directed by Rupin Banker has no transaction date. It does not name Rose Lake or trace the 2024 wires.</p>
        <p>The accompanying settlement motion proposes releasing OCI and Chapman and continuing claims against Banker. OCI’s February 2026 statement says approval occurred January 23 and that the company was released. The approval date here is attributed to OCI; the separate order was not recovered.</p>
        <Citations ids={["chapman", "oci"]} light />
      </div>
    </details>
    <aside className="mt-8 rounded-xl border-l-4 border-red-500 bg-white/5 p-5"><p className="text-sm font-semibold text-white">The central demand: release the bank trail.</p><p className="mt-2 text-sm leading-6 text-slate-300">The incoming wires, any return and any intercompany payments should be reconciled with transaction records. The amended partnership-income bracket does not supply that trail.</p></aside>
  </ReportSection>;
}
