import { advisors, partners } from "@/lib/investigation";
import ReportSection from "./ReportSection";
import { Citations } from "./SourceLink";
import ConnectionMap from "./ConnectionMap";

export default function PeopleSection() {
  return <ReportSection id="players" eyebrow="Political connections, private business" title="The Democratic network behind Rose Lake" intro="Rose Lake assembled a roster of Democratic fundraisers, party officials, diplomats and bankers. Its October 2024 website put those political credentials at the center of its investment pitch.">
    <div className="grid gap-4 lg:grid-cols-3">
      <article className="profile-card border-red-200"><p className="eyebrow text-red-800">The public official</p><h3 className="mt-3 text-xl font-bold">Rep. Ilhan Omar</h3><p className="mt-3 text-sm leading-6 text-slate-700">Minnesota Democrat; Mynett’s spouse and signer of the financial disclosures. Current committees: Education and the Workforce and Budget. She also leads the U.S.-Africa Policy Working Group.</p><Citations ids={["committees", "workingGroup", "amendment"]} /></article>
      <article className="profile-card"><p className="eyebrow text-red-800">The spouse and partner</p><h3 className="mt-3 text-xl font-bold">Tim Mynett</h3><p className="mt-3 text-sm leading-6 text-slate-700">Mynett co-founded Rose Lake after working at E Street Group. Omar’s amended 2024 disclosure reports $100,001–$1,000,000 in partnership income from his Rose Lake Capital LLC interest.</p><Citations ids={["team", "amendment"]} /></article>
      <article className="profile-card"><p className="eyebrow text-red-800">The company executive</p><h3 className="mt-3 text-xl font-bold">Will Hailer</h3><p className="mt-3 text-sm leading-6 text-slate-700">A former DNC senior adviser, Hailer identifies himself as Rose Lake Inc.’s CEO in the declaration describing the $11.25 million wires. He was also a defendant in the Minnesota cannabis-investor suit.</p><Citations ids={["hailerBio", "declaration", "cannabis"]} /></article>
    </div>
    <div className="mt-8 rounded-2xl border border-slate-200">
      <div className="border-b border-slate-200 p-5 sm:p-6"><h3 className="text-lg font-bold">Founders &amp; partners</h3><p className="mt-2 text-xs leading-5 text-slate-600">Rose Lake’s advertised leadership as of October 29, 2024.</p><Citations ids={["team"]} /></div>
      <div className="grid divide-y divide-slate-200 sm:grid-cols-2 sm:divide-y-0">{partners.map(person => <article key={person.name} className="border-b border-slate-100 p-5 sm:p-6"><h4 className="font-bold">{person.name}</h4><p className="mt-1 text-xs font-semibold text-red-800">{person.role}</p><p className="mt-3 text-sm leading-6 text-slate-700">{person.description}</p><Citations ids={person.sourceIds} /></article>)}</div>
    </div>
    <details className="mt-4 rounded-xl border border-slate-200">
      <summary className="cursor-pointer px-5 py-4 text-sm font-bold">The advisory roster: banking and diplomatic power</summary>
      <div className="grid border-t border-slate-200 sm:grid-cols-2">{advisors.map(person => <article key={person.name} className="border-b border-slate-100 p-5"><h4 className="font-bold">{person.name}</h4><p className="mt-1 text-xs font-semibold text-red-800">{person.role} · 2024 archive</p><p className="mt-3 text-sm leading-6 text-slate-700">{person.description}</p><Citations ids={person.sourceIds} /></article>)}</div>
    </details>
    <details className="mt-4 rounded-xl border border-slate-200"><summary className="cursor-pointer px-5 py-4 text-sm font-bold">Earlier Minnesota connections: Peterson and Knuth</summary><div className="border-t border-slate-200 p-5 text-sm leading-6 text-slate-700"><p>February 2023 reporting identified former House Agriculture chairman Collin Peterson and former Minnesota state representative Kate Knuth as listed senior advisors. Their names no longer appeared on the October 2024 team roster.</p><Citations ids={["historicalTeam", "team"]} /></div></details>
    <ConnectionMap />
  </ReportSection>;
}
