import SourceLink from "./SourceLink";
import type { SourceId } from "@/lib/investigation";

const stats: { value: string; label: string; source: SourceId; href: string }[] = [
  { value: "$11.25M", label: "Wires to Rose Lake Inc. in Hailer’s sworn account", source: "declaration", href: "#transfers" },
  { value: "2 years", label: "2023 and 2024 business disclosures amended", source: "amendment2023", href: "#papertiger" },
  { value: "None", label: "Both business asset values in both amendments", source: "amendment", href: "#papertiger" },
  { value: "$100k–1M", label: "Amended 2024 Rose Lake partnership income bracket", source: "amendment", href: "#papertiger" },
];
export default function StatCards() {
  return <section aria-label="Key records" className="bg-slate-50 py-8">
    <div className="page-container grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
      {stats.map(stat => <article key={stat.label} className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
        <a href={stat.href} className="block rounded-sm"><span className="block text-2xl font-extrabold tracking-tight text-red-800 sm:text-3xl">{stat.value}</span><span className="mt-2 block text-xs leading-5 text-slate-700 sm:text-sm">{stat.label}</span></a>
        <p className="mt-3 text-xs"><SourceLink id={stat.source}>Source record</SourceLink></p>
      </article>)}
    </div>
  </section>;
}
