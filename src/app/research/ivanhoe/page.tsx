import Link from "next/link";
import type { Metadata } from "next";
import ReportSection from "@/components/ReportSection";
import SourceLink, { Citations } from "@/components/SourceLink";
import SourcesSection from "@/components/SourcesSection";
import { reviewedDate, socialImage } from "@/lib/investigation";

export const metadata: Metadata = {
  title: "Ivanhoe, China & the Political Network",
  description: "The dated Ivanhoe records, Chinese-linked shareholders and a Rose Lake adviser’s role. A conservative research appendix with primary sources.",
  alternates: { canonical: "/research/ivanhoe" },
  openGraph: { title: "Ivanhoe, China & the Political Network | Follow The Money", description: "Congressional concerns, Chinese-linked shareholders and the documented adviser connection.", url: "/research/ivanhoe", images: [socialImage] },
  twitter: { card: "summary_large_image", title: "Ivanhoe, China & the Political Network | Follow The Money", description: "Congressional concerns, Chinese-linked shareholders and the documented adviser connection.", images: ["/twitter-image"] },
};

export default function IvanhoePage() {
  return <main id="main-content" tabIndex={-1}>
    <header className="gradient-bg dark-panel pb-12 pt-28 xl:pt-40"><div className="page-container">
      <Link href="/#players" className="source-link text-sm text-red-200">← Back to the Rose Lake network</Link>
      <p className="eyebrow mt-7 text-red-200">Research appendix · Reviewed {reviewedDate}</p>
      <h1 className="section-title mt-4 text-white">Ivanhoe, China &amp; the political network</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">A Rose Lake-listed adviser leads an American mining company that drew congressional scrutiny over Chinese-linked interests. Those records deserve examination on their own terms.</p>
    </div></header>
    <ReportSection id="adviser" eyebrow="The documented connection" title="Pham sits at the intersection">
      <p className="max-w-3xl text-base leading-7 text-slate-700">The October 2024 Rose Lake team archive lists J. Peter Pham as an advisor. Ivanhoe Atlantic’s current company page lists him as Executive Chairman &amp; Interim CEO. That establishes the adviser and leadership connection. The reviewed records do not establish Rose Lake ownership of Ivanhoe Atlantic.</p><Citations ids={["team", "ivanhoe"]} />
      <div className="mt-6 rounded-xl border-l-4 border-red-700 bg-red-50 p-5"><p className="text-sm leading-6 text-slate-800"><strong>Author’s analysis:</strong> Shared political and diplomatic networks deserve scrutiny in critical-minerals policy. A shareholder agreement or register is needed before claiming a financial stake for Rose Lake or Mynett.</p></div>
    </ReportSection>
    <ReportSection id="companies" eyebrow="Separate companies, overlapping leadership" title="Follow the actual corporate records">
      <div className="grid gap-5 md:grid-cols-2">
        <article className="profile-card"><h3 className="text-xl font-bold">Ivanhoe Atlantic &amp; I-Pulse</h3><p className="mt-3 text-sm leading-6 text-slate-700">Ivanhoe Atlantic identifies I-Pulse Inc. as its majority shareholder and Robert Friedland as I-Pulse’s founder and chairman. Its foundational project is Kon Kweni in Guinea.</p><Citations ids={["ivanhoe"]} /></article>
        <article className="profile-card"><h3 className="text-xl font-bold">Ivanhoe Mines’ 2024 shareholders</h3><p className="mt-3 text-sm leading-6 text-slate-700">The April 29, 2024 proxy lists CITIC Metal Africa Investments at <strong>24.78%</strong> and Zijin affiliate Gold Mountains at <strong>13.03%</strong>, totaling <strong>37.81%</strong>. These are dated 2024 voting-share figures for Ivanhoe Mines, not current percentages or Ivanhoe Atlantic’s ownership.</p><p className="mt-4 text-xs"><SourceLink id="proxy" page={13}>Proxy, printed page 12</SourceLink></p></article>
      </div>
    </ReportSection>
    <ReportSection id="congress" eyebrow="Congressional scrutiny" title="Moolenaar challenged the safeguards" dark>
      <p className="max-w-3xl text-base leading-7 text-slate-200">In his December 9, 2025 letter to Secretary Marco Rubio, Rep. John Moolenaar raised concerns about the $1.8 billion rail and mining project involving Guinea and Liberia, shared leadership and Chinese-linked stakes in Ivanhoe Mines. His roughly 40% figure cites the earlier proxy. His assertions are the congressional office’s position.</p>
      <Citations ids={["moolenaar"]} light />
      <div className="mt-7 grid gap-5 md:grid-cols-2">
        <article className="evidence-card"><h3 className="text-lg font-bold">FCC: the named telecom services</h3><p className="mt-3 text-sm leading-6 text-slate-300">The Covered List names international services provided by Pacific Networks Corp. and its wholly owned subsidiary ComNet (USA) LLC, added September 20, 2022. These are the specific entities and services to cite, not every CITIC business.</p><Citations ids={["fcc"]} light /></article>
        <article className="evidence-card"><h3 className="text-lg font-bold">Zijin: a confirmed UFLPA listing</h3><p className="mt-3 text-sm leading-6 text-slate-300">Zijin Mining Group Co., Ltd. was added to the UFLPA Entity List January 15, 2025. The Federal Register notice and current DHS list identify the company by name.</p><Citations ids={["uflpa", "dhs"]} light /></article>
      </div>
      <p className="mt-6 max-w-3xl text-sm leading-6 text-slate-300">Ivanhoe Atlantic describes itself as an American company developing U.S.-aligned projects. Its published corporate structure should be read alongside the congressional concerns. Common leadership does not make the two Ivanhoe companies the same legal entity.</p><Citations ids={["ivanhoe"]} light />
    </ReportSection>
    <SourcesSection appendix />
  </main>;
}
