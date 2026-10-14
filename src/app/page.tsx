import Link from "next/link";
import Hero from "@/components/Hero";
import UpdatesBanner from "@/components/UpdatesBanner";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import StatCards from "@/components/StatCards";
import TransferEvidence from "@/components/TransferEvidence";
import FinancialTable from "@/components/FinancialTable";
import PeopleSection from "@/components/PeopleSection";
import ReportSection from "@/components/ReportSection";
import SourcesSection from "@/components/SourcesSection";
import SourceLink, { Citations } from "@/components/SourceLink";
import { reviewedDate } from "@/lib/investigation";

export default function Home() {
  return <main id="main-content" tabIndex={-1}>
    <Hero />
    <div className="print-hidden bg-slate-50 py-5 sm:py-6"><div className="page-container space-y-3"><UpdatesBanner /><DisclaimerBanner /></div></div>
    <StatCards />
    <ReportSection id="status" eyebrow={"Developments · " + reviewedDate} title="Federal scrutiny. Rewritten disclosures. Unanswered money questions.">
      <div className="grid gap-5 md:grid-cols-2">
        <article className="profile-card border-red-200"><p className="eyebrow text-red-800">October 13, 2026</p><h3 className="mt-3 text-xl font-bold">Pirro announces the federal investigation</h3><p className="mt-3 text-sm leading-6 text-slate-700">U.S. Attorney Jeanine Pirro said her office is investigating Omar’s financial disclosures. The announcement is public; the transfer questions below remain separate documentary issues.</p><Citations ids={["pirro", "federal"]} /></article>
        <article className="profile-card"><p className="eyebrow text-red-800">September 9, 2026 · reported recommendation</p><h3 className="mt-3 text-xl font-bold">OCC recommends dismissal, 5–1</h3><p className="mt-3 text-sm leading-6 text-slate-700">Reporting describes the Office of Congressional Conduct’s recommendation to dismiss the disclosure allegations. A final House Ethics disposition was not located. The OCC recommendation and federal investigation are distinct.</p><Citations ids={["watchdogVote", "watchdog"]} /></article>
      </div>
      <p className="mt-5 text-sm"><Link href="/updates" className="source-link text-red-800">Read the dated updates and corrections →</Link></p>
    </ReportSection>
    <TransferEvidence />
    <ReportSection id="papertiger" eyebrow="Two reporting years rewritten" title="From millions in reported assets to “None”" intro="On March 26, 2026, Omar amended both the 2023 and 2024 reports. The changes reach back further than a single year's valuation.">
      <div className="grid gap-5 sm:grid-cols-2">
        <article className="profile-card"><p className="eyebrow text-red-800">2024 original · May 14, 2025</p><h3 className="mt-3 text-2xl font-bold">$6–30 million in combined business brackets</h3><p className="mt-3 text-sm leading-6 text-slate-700">Rose Lake: $5,000,001–$25,000,000. eStCru: $1,000,001–$5,000,000. These were the reported spouse-asset brackets, not an exact household net-worth calculation.</p><Citations ids={["original"]} /></article>
        <article className="profile-card border-red-200 bg-red-50"><p className="eyebrow text-red-800">2023 &amp; 2024 amendments · March 26, 2026</p><h3 className="mt-3 text-2xl font-bold">Both business asset values: None</h3><p className="mt-3 text-sm leading-6 text-slate-700">The 2024 amendment also adds $100,001–$1,000,000 in Rose Lake partnership income. In the 2023 amendment, eStCru income changes from $201–$1,000 to $2,501–$5,000.</p><Citations ids={["amendment2023", "amendment"]} /></article>
      </div>
      <div className="mt-6 border-l-4 border-red-700 bg-slate-50 p-5"><h3 className="font-bold">The explanation still needs its supporting records</h3><p className="mt-3 text-sm leading-6 text-slate-700">Omar’s office attributed the original valuations to an accounting error involving liabilities. Her filings give brackets; they do not identify the payers behind the revised partnership income or connect it to OCI’s wires. The underlying accounts would answer those questions.</p><Citations ids={["followup", "amendment"]} /></div>
      <div className="mt-8"><h3 className="mb-5 text-xl font-bold">Originals, amendments and the latest annual filing</h3><FinancialTable /></div>
      <p className="mt-5 text-sm leading-6 text-slate-600">The May 13, 2026 annual filing covers calendar year 2025: both values None, no Rose Lake partnership income and $201–$1,000 from eStCru. <SourceLink id="annual">Read the latest annual report</SourceLink>.</p>
    </ReportSection>
    <PeopleSection />
    <ReportSection id="money" eyebrow="The campaign-to-business history" title="Campaign money went to her husband’s firm">
      <div className="grid gap-5 md:grid-cols-2">
        <article className="profile-card"><h3 className="text-xl font-bold">Approximately $2.9 million</h3><p className="mt-3 text-sm leading-6 text-slate-700">Reported historical campaign payments to E Street Group, where Mynett was a partner.</p><Citations ids={["campaign"]} /><div className="mt-5 border-t border-slate-200 pt-5"><h4 className="font-bold">The FEC decision is part of the record</h4><p className="mt-3 text-sm leading-6 text-slate-700">On December 2, 2021, the FEC voted 6–0 in MUR 7639. It found no reason to believe campaign funds were converted to personal use or payees were improperly reported, dismissed the disbursement-purpose allegation, directed purpose-reporting amendments as needed and closed the file.</p><Citations ids={["fec"]} /></div></article>
        <article className="profile-card"><h3 className="text-xl font-bold">What the political network advertised</h3><blockquote className="mt-4 border-l-4 border-red-700 pl-4 text-base font-medium leading-7 text-slate-900">“Our expertise includes structuring deals, legislation, mergers and acquisitions, debt restructuring and capital raising.”</blockquote><p className="mt-3 text-xs text-slate-600">Rose Lake website · May 6, 2024 archive</p><Citations ids={["legislation"]} /><p className="mt-5 text-sm leading-6 text-slate-700"><strong>Author’s analysis:</strong> A private investment firm built by political operatives advertising legislation expertise deserves close scrutiny. Which clients paid for that expertise, and what services did they receive?</p></article>
      </div>
    </ReportSection>
    <ReportSection id="redflags" eyebrow="Allegations, records and outcomes" title="The investor disputes and the $60 billion pitch">
      <div className="grid gap-5 md:grid-cols-2">
        <article className="profile-card"><p className="eyebrow text-red-800">Cannabis investors</p><h3 className="mt-3 text-xl font-bold">Badlands and eST Ventures</h3><p className="mt-3 text-sm leading-6 text-slate-700">The December 2022 Minnesota complaint alleged that roughly $3.5 million entrusted for cannabis ventures was not deployed or returned as promised. It describes a disputed OFAC-hold explanation.</p><p className="mt-3 text-sm leading-6 text-slate-700">Reporting describes a 2023 settlement and default, followed by a final $1.2 million payoff in July 2024. The exact payer account and a link to OCI’s wires have not been established. The OFAC hold remains an allegation.</p><Citations ids={["cannabis", "reformer", "settlements", "followup"]} /></article>
        <article className="profile-card"><p className="eyebrow text-red-800">Wine investor</p><h3 className="mt-3 text-xl font-bold">Mohd v. eStCru</h3><p className="mt-3 text-sm leading-6 text-slate-700">Reporting describes a $300,000 investment, a promised 200% return within 18 months and a suit seeking at least $780,000 after the principal was returned. Mynett and Hailer denied defrauding the investor.</p><p className="mt-3 text-sm leading-6 text-slate-700">A later report quotes Mohd’s attorney saying the matter settled and the amount was paid; it dates the dropped suit to November 2024. eStCru filed its certificate of cancellation April 4, 2026.</p><Citations ids={["reformer", "followup", "winery"]} /></article>
      </div>
      <article className="mt-5 rounded-xl border border-red-200 bg-red-50 p-5 sm:p-7"><h3 className="text-xl font-bold">$60 billion in AUM was on the website</h3><p className="mt-3 max-w-3xl text-sm leading-6 text-slate-700">The archived team page displayed “$60B” and “AUM” under “Unparalleled Experience.” Comer’s February 2026 letter questioned the firm’s asset-management claim and demanded audited accounts and regulatory filings. The reviewed records do not explain how that marketing number was calculated.</p><Citations ids={["team", "oversight"]} /></article>
    </ReportSection>
    <ReportSection id="conflict" eyebrow="The records Omar and Mynett should explain" title="Show the accounts. Answer the questions." dark>
      <div className="grid gap-4 md:grid-cols-2">
        {[{title:"Where did the $11.25 million go?",text:"Publish the transactions after the incoming wires: any return, retained fee, transfer between entities or payment to an individual."},{title:"Who funded the partnership income?",text:"Identify the payers and accounts behind the $100,001–$1,000,000 Rose Lake income added to the 2024 filing."},{title:"What supported the original valuations?",text:"Provide the accounting work, ownership interests and liabilities behind the original figures and both reporting-year amendments."},{title:"Who paid the cannabis judgment?",text:"Produce the payment receipt and source account. A July payoff and incoming company wires do not, by themselves, establish the funding connection."}].map(item => <article key={item.title} className="evidence-card"><h3 className="text-lg font-bold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p></article>)}
      </div>
      <p className="mt-6 max-w-3xl text-sm leading-6 text-slate-300">These are the author’s demands for transparency. The known documents establish the disclosure revisions, Hailer’s transfer account and the lenders’ legal activity. The transaction trail should be made public.</p>
      <Citations ids={["amendment2023", "amendment", "declaration", "subpoenas"]} light />
    </ReportSection>
    <SourcesSection />
  </main>;
}
