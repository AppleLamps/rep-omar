import SourceLink from "./SourceLink";
import type { SourceId } from "@/lib/investigation";

const stats: { value: string; label: string; source: SourceId; href: string }[] = [
  { value: "$6–30M", label: "Combined business-value brackets in the original 2024 disclosure", source: "original", href: "#papertiger" },
  { value: "None", label: "Both business values in the amended 2024 disclosure", source: "amendment", href: "#papertiger" },
  { value: "$100k–1M", label: "Rose Lake income added for 2024 ($100,001–$1,000,000)", source: "amendment", href: "#papertiger" },
  { value: "$11.25M", label: "Separate wires to Rose Lake Inc., described under oath by Hailer", source: "declaration", href: "#transfers" },
];
export default function StatCards() {
  return <section aria-label="Key records" className="bg-slate-50 py-8">
    <div className="page-container grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
      {stats.map(stat => <article key={stat.label} className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
        <a href={stat.href} className="block rounded-sm"><span className="block text-xl font-extrabold tracking-tight text-red-800 sm:text-2xl xl:text-3xl">{stat.value}</span><span className="mt-2 block text-xs leading-5 text-slate-700 sm:text-sm">{stat.label}</span></a>
        <p className="mt-3 text-xs"><SourceLink id={stat.source}>Source record</SourceLink></p>
      </article>)}
    </div>
  </section>;
}
