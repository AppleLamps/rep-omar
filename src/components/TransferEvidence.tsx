import { timeline } from "@/lib/investigation";
import ReportSection from "./ReportSection";
import SourceLink, { Citations } from "./SourceLink";

export default function TransferEvidence() {
  return <ReportSection id="transfers" eyebrow="The Byju’s court filings" title="Hailer’s company received $11.25 million in two wires" intro="Will Hailer, Mynett’s business partner and a Rose Lake co-founder, described the transfers under oath. His November 2024 declaration says OCI Limited sent the money to Rose Lake Inc. during an attempted purchase of Byju’s debt." dark>
    <div className="grid gap-4 sm:grid-cols-2">
      {[{ date: "June 21, 2024", value: "$10,000,000" }, { date: "July 25, 2024", value: "$1,250,000" }].map(wire => <article key={wire.date} className="rounded-2xl border border-red-400/40 bg-red-900/20 p-5 sm:p-7">
        <p className="text-sm font-semibold text-red-200">{wire.date}</p><p className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{wire.value}</p><p className="mt-3 text-sm text-slate-300">OCI Limited → Rose Lake Inc. · Hailer’s sworn account</p>
      </article>)}
    </div>
    <div className="mt-6 max-w-3xl space-y-4 text-base leading-7 text-slate-200">
      <p>Hailer identifies <strong className="text-white">OCI’s Barclays account in the United Kingdom</strong> as the source. The money was documented as a loan but represented to Rose Lake as a fee for an attempted purchase of Byju’s Term Loan B, according to his declaration.</p>
      <p>By mid-October, Hailer says, Byju Raveendran had instructed him to return the entire $11.25 million through <strong className="text-white">Divya Gokulnath’s account</strong>. The declaration describes that instruction without saying the money was returned. The destination of the funds remains the central question.</p>
      <p className="text-sm"><SourceLink id="declaration" page={4} light>Hailer’s declaration, pages 4–6</SourceLink><span className="mx-3" aria-hidden="true">·</span><SourceLink id="declaration" page={13} light>The return instruction, pages 13–14</SourceLink></p>
    </div>
    <aside className="mt-7 rounded-xl border-l-4 border-red-500 bg-white/5 p-5"><h3 className="text-base font-bold text-white">Two Rose Lake entities, two financial questions</h3><p className="mt-3 text-sm leading-6 text-slate-300">Hailer names Rose Lake Inc. as the wire recipient. Omar’s disclosure names Rose Lake Capital LLC. The cited documents do not establish a transfer between those companies or personal receipt of OCI’s money by Omar or Mynett. The $11.25 million therefore cannot be counted as their income or used to explain the amended asset values.</p><Citations ids={["declaration", "amendment"]} light /></aside>
    <div className="mt-8 grid gap-4 md:grid-cols-3">
      <article className="evidence-card"><p className="eyebrow text-red-200">March 2025</p><h3 className="mt-3 text-lg font-bold">Lenders sought records from twelve banks</h3><p className="mt-3 text-sm leading-6 text-slate-300">A subpoena notice sought transaction records using Rose Lake and Hailer among its search terms, putting their financial activity within the lenders’ effort to trace the funds.</p><Citations ids={["subpoenas"]} light /></article>
      <article className="evidence-card"><p className="eyebrow text-red-200">May 2025 complaint</p><h3 className="mt-3 text-lg font-bold">The alleged loan-buyback scheme</h3><p className="mt-3 text-sm leading-6 text-slate-300">The lenders alleged that the wires may have financed an undisclosed buyback of the loan using Alpha funds. That account is an allegation in the OCI complaint.</p><Citations ids={["ociComplaint"]} light /></article>
      <article className="evidence-card"><p className="eyebrow text-red-200">October 2025 plan</p><h3 className="mt-3 text-lg font-bold">Claims against Hailer survived</h3><p className="mt-3 text-sm leading-6 text-slate-300">The confirmed Alpha plan lists Hailer as excluded party 69, preserving claims against him for possible pursuit. The plan itself makes no finding of liability.</p><Citations ids={["plan"]} light /></article>
    </div>
    <details className="mt-8 rounded-xl border border-slate-700">
      <summary className="cursor-pointer px-5 py-4 text-sm font-semibold">The transfers and litigation, in order</summary>
      <ol className="border-t border-slate-700 px-5 py-6 sm:px-7">{timeline.map(event => <li key={event.title} className="relative border-l border-slate-600 pb-7 pl-6 last:pb-0"><span aria-hidden="true" className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-red-400" /><p className="text-xs font-semibold text-red-200">{event.date}</p><h3 className="mt-1 font-bold">{event.title}</h3><p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">{event.text}</p><Citations ids={[event.sourceId]} light /></li>)}</ol>
    </details>
    <details className="mt-4 rounded-xl border border-slate-700">
      <summary className="cursor-pointer px-5 py-4 text-sm font-semibold">OCI’s accounting and settlement</summary>
      <div className="space-y-4 border-t border-slate-700 px-5 py-5 text-sm leading-6 text-slate-300">
        <p>Oliver Chapman’s November 2025 declaration accounts for about $505.9 million received by OCI. Most listed outflows date to 2022; a $13.1 million item directed by Rupin Banker has no transaction date. That accounting names no Rose Lake recipient and leaves the 2024 wires unexplained.</p>
        <p>The accompanying settlement motion proposed releases for OCI and Chapman while continuing claims against Banker. OCI said in February 2026 that the settlement had been approved on January 23 and that the company had been released.</p>
        <Citations ids={["chapman", "oci"]} light />
      </div>
    </details>
  </ReportSection>;
}
