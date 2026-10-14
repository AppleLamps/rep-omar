import Link from "next/link";
import type { Metadata } from "next";
import ReportSection from "@/components/ReportSection";
import SourceLink, { Citations } from "@/components/SourceLink";
import SourcesSection from "@/components/SourcesSection";
import { reviewedDate, socialImage } from "@/lib/investigation";

export const metadata: Metadata = {
  title: "Rose Lake’s Adviser & the Ivanhoe China Dispute",
  description: "A Rose Lake adviser leads Ivanhoe Atlantic as Congress challenges Chinese-linked interests around a major African mining and rail project.",
  alternates: { canonical: "/research/ivanhoe" },
  openGraph: { title: "Rose Lake’s Adviser & the Ivanhoe China Dispute | Follow The Money", description: "The political connections and corporate interests behind a contested African mining project.", url: "/research/ivanhoe", images: [socialImage] },
  twitter: { card: "summary_large_image", title: "Rose Lake’s Adviser & the Ivanhoe China Dispute | Follow The Money", description: "The political connections and corporate interests behind a contested African mining project.", images: ["/twitter-image"] },
};

export default function IvanhoePage() {
  return <main id="main-content" tabIndex={-1}>
    <header className="gradient-bg dark-panel pb-12 pt-28 xl:pt-40"><div className="page-container">
      <Link href="/#players" className="source-link text-sm text-red-200">← The Rose Lake network</Link>
      <p className="eyebrow mt-7 text-red-200">The mining connection · Updated {reviewedDate}</p>
      <h1 className="section-title mt-4 text-white">Rose Lake’s adviser &amp; the Ivanhoe China dispute</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">J. Peter Pham appeared on Rose Lake’s advisory roster. He now leads Ivanhoe Atlantic, whose African mining and rail project has drawn a congressional challenge over Chinese-linked interests and overlapping corporate leadership.</p>
      <Citations ids={["team", "ivanhoe", "moolenaar"]} light />
    </div></header>
    <ReportSection id="adviser" eyebrow="Political credentials, commercial reach" title="From U.S. envoy to Rose Lake adviser and mining executive">
      <div className="max-w-3xl space-y-4 text-base leading-7 text-slate-700">
        <p>Pham served as a U.S. special envoy for Africa’s Great Lakes and Sahel regions. Rose Lake listed him as an adviser in October 2024. Ivanhoe Atlantic’s company page identifies him as Executive Chairman &amp; Interim CEO.</p>
        <p>His roles show the reach of the network Rose Lake advertised: an investment firm co-founded by a congresswoman’s spouse presented a senior Africa-policy figure as an adviser. Pham’s leadership of Ivanhoe Atlantic places that connection alongside a consequential dispute over mining, infrastructure and U.S. policy.</p>
        <p>The documented link is Pham’s advisory role. The cited corporate records establish no ownership stake in Ivanhoe Atlantic for Rose Lake or Mynett.</p>
      </div><Citations ids={["team", "ivanhoe"]} />
    </ReportSection>
    <ReportSection id="companies" eyebrow="The ownership structure" title="Two Ivanhoe companies and a shared founder">
      <div className="grid gap-5 md:grid-cols-2">
        <article className="profile-card"><h3 className="text-xl font-bold">Ivanhoe Atlantic</h3><p className="mt-3 text-sm leading-6 text-slate-700">Ivanhoe Atlantic identifies I-Pulse Inc. as its majority shareholder and Robert Friedland as I-Pulse’s founder and chairman. Its foundational project is Kon Kweni in Guinea. The company describes its projects as U.S.-aligned.</p><Citations ids={["ivanhoe"]} /></article>
        <article className="profile-card"><h3 className="text-xl font-bold">Ivanhoe Mines</h3><p className="mt-3 text-sm leading-6 text-slate-700">A separate company, Ivanhoe Mines reported that CITIC Metal Africa Investments held <strong>24.78%</strong> of its voting shares and Zijin affiliate Gold Mountains held <strong>13.03%</strong> in its April 29, 2024 proxy. Together, those dated holdings totaled <strong>37.81%</strong>. They describe Ivanhoe Mines’ ownership, not Ivanhoe Atlantic’s.</p><p className="mt-4 text-xs"><SourceLink id="proxy" page={13}>2024 proxy, printed page 12</SourceLink></p></article>
      </div>
    </ReportSection>
    <ReportSection id="congress" eyebrow="The December 2025 challenge" title="Moolenaar questioned the project’s safeguards" dark>
      <p className="max-w-3xl text-base leading-7 text-slate-200">In a December 9, 2025 letter to Secretary of State Marco Rubio, Rep. John Moolenaar challenged the safeguards surrounding a $1.8 billion mining and rail project involving Guinea and Liberia. He cited shared leadership and Chinese-linked holdings in Ivanhoe Mines, using a roughly 40% figure drawn from the earlier proxy.</p>
      <p className="mt-4 max-w-3xl text-base leading-7 text-slate-200">The letter’s concern was whether overlapping corporate interests could compromise a project promoted as serving U.S. strategic goals. That is Moolenaar’s allegation. Ivanhoe Atlantic’s separate ownership structure is essential to evaluating it.</p>
      <Citations ids={["moolenaar", "ivanhoe", "proxy"]} light />
      <div className="mt-7 grid gap-5 md:grid-cols-2">
        <article className="evidence-card"><h3 className="text-lg font-bold">The FCC’s telecom restrictions</h3><p className="mt-3 text-sm leading-6 text-slate-300">The FCC’s Covered List includes international services provided by Pacific Networks Corp. and its subsidiary ComNet (USA) LLC, added September 20, 2022. The designation applies to the listed services and entities, rather than every business associated with CITIC.</p><Citations ids={["fcc"]} light /></article>
        <article className="evidence-card"><h3 className="text-lg font-bold">Zijin’s forced-labor-list designation</h3><p className="mt-3 text-sm leading-6 text-slate-300">Zijin Mining Group Co., Ltd. was added to the Uyghur Forced Labor Prevention Act Entity List on January 15, 2025. The Federal Register notice and DHS list name the company directly.</p><Citations ids={["uflpa", "dhs"]} light /></article>
      </div>
      <p className="mt-6 max-w-3xl text-base leading-7 text-slate-200">For Rose Lake, the significance is the caliber and commercial reach of the advisers it used to market itself. Pham’s place on that roster warrants attention. A claim that Omar, Mynett or Rose Lake owned or profited from this mining project would require financial evidence beyond the advisory connection.</p>
    </ReportSection>
    <SourcesSection appendix />
  </main>;
}
