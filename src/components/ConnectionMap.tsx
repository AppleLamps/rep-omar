import Link from "next/link";
import { Citations } from "./SourceLink";

export default function ConnectionMap() {
  return <div id="connection" className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-7">
    <h3 className="text-xl font-bold">The companies in the disclosures and lawsuits</h3>
    <p className="mt-3 text-sm leading-6 text-slate-600">Mynett and Hailer’s business history runs through investment, wine and cannabis ventures. Each company has a distinct place in the financial record.</p>
    <div className="mt-5 grid gap-4 md:grid-cols-2">
      <article className="rounded-xl border border-slate-200 bg-white p-5"><p className="eyebrow text-red-800">Named wire recipient</p><h4 className="mt-2 font-bold">Rose Lake Inc.</h4><p className="mt-3 text-sm leading-6 text-slate-700">Hailer identifies himself as CEO of this Delaware public benefit corporation. His declaration describes the $11.25 million incoming wires.</p><Citations ids={["declaration"]} /></article>
      <article className="rounded-xl border border-slate-200 bg-white p-5"><p className="eyebrow text-red-800">Disclosed spouse asset</p><h4 className="mt-2 font-bold">Rose Lake Capital LLC</h4><p className="mt-3 text-sm leading-6 text-slate-700">House forms describe venture capital management in Washington, DC. The amended 2024 entry lists value None and partnership income of $100,001–$1,000,000.</p><Citations ids={["amendment"]} /></article>
      <article className="rounded-xl border border-slate-200 bg-white p-5"><p className="eyebrow text-red-800">Wine venture</p><h4 className="mt-2 font-bold">eStCru LLC</h4><p className="mt-3 text-sm leading-6 text-slate-700">California winery named in Omar’s disclosures and the Mohd dispute. Its April 4, 2026 cancellation was signed by Hailer.</p><Citations ids={["annual", "winery"]} /></article>
      <article className="rounded-xl border border-slate-200 bg-white p-5"><p className="eyebrow text-red-800">Cannabis litigation</p><h4 className="mt-2 font-bold">eST Ventures &amp; Badlands entities</h4><p className="mt-3 text-sm leading-6 text-slate-700">The Minnesota complaint names Hailer, eST Ventures LLC, Badlands Fund GP LLC and Badlands Ventures LLC as defendants. Mynett is mentioned, not named as a defendant in that complaint.</p><Citations ids={["cannabis"]} /></article>
    </div>
    <p className="mt-5 text-sm leading-6 text-slate-600">The corporate structure matters: any accounting of the $11.25 million must identify the legal entities and accounts through which it moved.</p>
    <p id="china" className="mt-4 text-sm"><Link href="/research/ivanhoe" className="source-link text-red-800">The Rose Lake adviser at the center of the Ivanhoe mining dispute →</Link></p>
  </div>;
}
