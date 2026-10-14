import Link from "next/link";
import Hero from "@/components/Hero";
import UpdatesBanner from "@/components/UpdatesBanner";
import StatCards from "@/components/StatCards";
import TransferEvidence from "@/components/TransferEvidence";
import FinancialTable from "@/components/FinancialTable";
import PeopleSection from "@/components/PeopleSection";
import ReportSection from "@/components/ReportSection";
import SourcesSection from "@/components/SourcesSection";
import SourceLink, { Citations } from "@/components/SourceLink";

export default function Home() {
  return <main id="main-content" tabIndex={-1}>
    <Hero />
    <StatCards />
    <ReportSection id="papertiger" eyebrow="The disclosure reversal" title="Millions in reported value. Then “None”." intro="The most direct evidence comes from Omar’s own filings. On March 26, 2026, she revised two years of financial disclosures for Rose Lake Capital LLC and eStCru LLC, her husband Tim Mynett’s businesses.">
      <div className="grid gap-5 sm:grid-cols-2">
        <article className="profile-card"><p className="eyebrow text-red-800">2024 report · filed May 14, 2025</p><h3 className="mt-3 text-2xl font-bold">Roughly $6–30 million</h3><p className="mt-3 text-sm leading-6 text-slate-700">Omar listed Rose Lake Capital LLC at $5,000,001–$25,000,000 and eStCru LLC at $1,000,001–$5,000,000. The same report listed no Rose Lake partnership income.</p><Citations ids={["original"]} /></article>
        <article className="profile-card border-red-200 bg-red-50"><p className="eyebrow text-red-800">Amendments · filed March 26, 2026</p><h3 className="mt-3 text-2xl font-bold">Both asset values: “None”</h3><p className="mt-3 text-sm leading-6 text-slate-700">Both the 2023 and 2024 amendments list “None” for the two business values. The revised 2024 report adds $100,001–$1,000,000 in Rose Lake partnership income.</p><Citations ids={["amendment2023", "amendment"]} /></article>
      </div>
      <div className="mt-6 max-w-3xl space-y-4 text-base leading-7 text-slate-700">
        <p>That revision changed the public account of the family’s business finances: millions in reported asset value were replaced, while a substantial income entry appeared. The asset brackets describe reported valuations; changing them does not show money leaving a bank account.</p>
        <p>Omar’s office attributed the original valuations to an accounting error involving liabilities. The explanation puts the underlying accounting at the center of the story. Which ownership interests and liabilities produced the original numbers? What paid the Rose Lake income later added to the filing?</p>
        <Citations ids={["original", "amendment", "followup"]} />
      </div>
      <div className="mt-8"><h3 className="mb-5 text-xl font-bold">The filings, side by side</h3><FinancialTable /></div>
      <p className="mt-5 text-sm leading-6 text-slate-600">The next annual report, filed May 13, 2026 for calendar year 2025, again lists both business values as “None,” no Rose Lake partnership income and $201–$1,000 from eStCru. <SourceLink id="annual">Read the 2025 report</SourceLink>.</p>
    </ReportSection>
    <TransferEvidence />
    <PeopleSection />
    <ReportSection id="money" eyebrow="Before Rose Lake" title="Omar’s campaign paid about $2.9 million to Mynett’s firm">
      <div className="grid gap-5 md:grid-cols-2">
        <article className="profile-card"><h3 className="text-xl font-bold">The E Street Group payments</h3><p className="mt-3 text-sm leading-6 text-slate-700">Mynett’s business relationship with Omar’s campaign preceded the Rose Lake disclosures. Her campaign paid approximately $2.9 million to E Street Group, the political consultancy where he was a partner, according to reporting on campaign filings.</p><Citations ids={["campaign"]} /><div className="mt-5 border-t border-slate-200 pt-5"><h4 className="font-bold">The campaign-finance case closed in 2021</h4><p className="mt-3 text-sm leading-6 text-slate-700">The FEC voted 6–0 on December 2, 2021 to close MUR 7639. It found no reason to believe campaign money had been converted to personal use or payees improperly reported. It dismissed the disbursement-purpose allegation and directed amendments to purpose descriptions as needed.</p><Citations ids={["fec"]} /></div></article>
        <article className="profile-card"><h3 className="text-xl font-bold">Rose Lake put “legislation” in its sales pitch</h3><blockquote className="mt-4 border-l-4 border-red-700 pl-4 text-base font-medium leading-7 text-slate-900">“Our expertise includes structuring deals, legislation, mergers and acquisitions, debt restructuring and capital raising.”</blockquote><p className="mt-3 text-xs text-slate-600">Rose Lake website · archived May 6, 2024</p><Citations ids={["legislation"]} /><p className="mt-5 text-sm leading-6 text-slate-700">A congresswoman’s spouse helped build an investment firm that marketed legislative expertise alongside dealmaking. Its clients, fees and services deserve the same scrutiny as the income reported on her disclosure.</p></article>
      </div>
    </ReportSection>
    <ReportSection id="redflags" eyebrow="The business record" title="Investor lawsuits behind the investment pitch">
      <div className="grid gap-5 md:grid-cols-2">
        <article className="profile-card"><p className="eyebrow text-red-800">Cannabis ventures</p><h3 className="mt-3 text-xl font-bold">A disputed $3.5 million and a $1.2 million payoff</h3><p className="mt-3 text-sm leading-6 text-slate-700">In a December 2022 Minnesota complaint, investors alleged that roughly $3.5 million entrusted for cannabis ventures had not been deployed or returned as promised. The defendants included Hailer, eST Ventures and the Badlands entities. Mynett was mentioned in the complaint but was not a defendant.</p><p className="mt-3 text-sm leading-6 text-slate-700">The complaint challenged an explanation that funds were held by the Treasury’s Office of Foreign Assets Control. Reporting describes a 2023 settlement, a default and a final $1.2 million payoff in July 2024. The alleged OFAC hold was disputed; the cited records do not establish that OCI funded the payoff.</p><Citations ids={["cannabis", "reformer", "settlements", "followup"]} /></article>
        <article className="profile-card"><p className="eyebrow text-red-800">Wine venture</p><h3 className="mt-3 text-xl font-bold">A $300,000 investment and a promised 200% return</h3><p className="mt-3 text-sm leading-6 text-slate-700">The eStCru dispute centered on a reported promise of a 200% return within 18 months. After the investor’s $300,000 principal was returned, he sued for at least $780,000. Mynett and Hailer denied defrauding him.</p><p className="mt-3 text-sm leading-6 text-slate-700">The investor’s attorney later said the case settled and the agreed amount was paid; the suit was dropped in November 2024, according to reporting. On April 4, 2026, nine days after Omar amended the disclosures, eStCru filed its cancellation certificate, signed by Hailer.</p><Citations ids={["reformer", "followup", "winery"]} /></article>
      </div>
      <article className="mt-5 rounded-xl border border-red-200 bg-red-50 p-5 sm:p-7"><h3 className="text-xl font-bold">The $60 billion marketing number</h3><p className="mt-3 max-w-3xl text-sm leading-6 text-slate-700">Rose Lake’s archived team page displayed “$60B” and “AUM” beneath “Unparalleled Experience.” That presentation left a consequential question: did the number describe assets Rose Lake managed, or experience its team brought from other jobs? On February 5, 2026, House Oversight Chairman James Comer demanded Mynett’s audited financial statements and regulatory filings, directly challenging the firm’s asset-management claim.</p><Citations ids={["team", "oversight"]} /></article>
    </ReportSection>
    <ReportSection id="status" eyebrow="October 13, 2026" title="The disclosure investigation reaches federal prosecutors">
      <div className="max-w-3xl space-y-4 text-base leading-7 text-slate-700">
        <p>U.S. Attorney Jeanine Pirro announced on October 13 that her office was investigating Omar’s financial disclosures. The announcement opens a new stage of scrutiny; it is not a finding that Omar committed a crime.</p>
        <Citations ids={["pirro", "federal"]} />
        <p>A month earlier, the Office of Congressional Conduct voted 5–1 to recommend dismissing the disclosure allegations, according to September 9 reporting. The Wall Street Journal reported reviewing the watchdog’s confidential findings. That recommendation concerns the disclosure case; the Byju’s litigation over the Rose Lake wires has its own parties, claims and court record.</p>
        <Citations ids={["watchdogVote", "watchdog"]} />
      </div>
      <p className="mt-5 text-sm"><Link href="/updates" className="source-link text-red-800">Dates, developments and corrections →</Link></p>
    </ReportSection>
    <ReportSection id="conflict" eyebrow="The accounting still owed to the public" title="Publish the accounts behind the disclosures." dark>
      <p className="mb-6 max-w-3xl text-base leading-7 text-slate-200">Omar signed the filings. Mynett held the disclosed business interests. Hailer gave the sworn account of the wires. Each should answer for the part of the record that bears their name.</p>
      <div className="grid gap-4 md:grid-cols-2">
        {[{title:"Omar: explain the valuation reversal",text:"Release the accounting work, ownership figures and liabilities behind the original business values and the March 2026 amendments."},{title:"Mynett: identify the Rose Lake income",text:"Explain the clients, services and distributions behind the $100,001–$1,000,000 partnership-income bracket added to the 2024 report."},{title:"Hailer: account for the $11.25 million",text:"Release the transactions showing what happened after OCI’s two wires, including any repayment, retained fee or onward transfer."},{title:"Rose Lake: substantiate the investment pitch",text:"Explain the $60 billion AUM presentation and release the records supporting it, along with the business relationships between the Rose Lake entities."}].map(item => <article key={item.title} className="evidence-card"><h3 className="text-lg font-bold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p></article>)}
      </div>
      <p className="mt-6 max-w-3xl text-base leading-7 text-slate-200">A signed disclosure is supposed to let the public see a lawmaker’s financial interests. When million-dollar valuations are rewritten and substantial income appears only in an amendment, the public deserves the accounting behind the correction.</p>
      <Citations ids={["original", "amendment2023", "amendment", "declaration", "oversight"]} light />
    </ReportSection>
    <div className="print-hidden bg-slate-50 py-5 sm:py-6"><div className="page-container"><UpdatesBanner /></div></div>
    <SourcesSection />
  </main>;
}
