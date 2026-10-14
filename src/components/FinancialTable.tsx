import { financialData } from "@/lib/investigation";
import SourceLink from "./SourceLink";

export default function FinancialTable() {
  return <>
    <p id="disclosure-table-description" className="mb-5 text-sm leading-6 text-slate-600">Calendar-year entries for spouse-owned assets (SP). Income type: partnership income. “None” is the form’s entry. The original 2023 and 2024 figures are superseded; each remains visible for comparison.</p>
    <div className="disclosure-mobile space-y-4 sm:hidden">
      {financialData.map(row => <article key={row.id} className={"rounded-xl border p-4 " + (row.status === "Amended" ? "border-red-200 bg-red-50" : "border-slate-200 bg-white")}>
        <div className="flex flex-wrap items-start justify-between gap-2"><h4 className="font-semibold text-slate-900">{row.asset}</h4><span className="text-xs font-semibold text-slate-600">{row.status}</span></div>
        <p className="mt-2 text-sm font-bold text-red-800">{row.year}</p>
        <dl className="mt-3 space-y-2 text-sm"><div><dt className="inline text-slate-600">Reported asset value: </dt><dd className="inline font-semibold text-slate-900">{row.value}</dd></div><div><dt className="inline text-slate-600">Partnership income: </dt><dd className="inline text-slate-900">{row.income}</dd></div></dl>
        <p className="mt-3 text-xs text-slate-600">Filed {row.filed}</p><p className="mt-2 text-xs"><SourceLink id={row.sourceId}>Read the filing</SourceLink></p>
      </article>)}
    </div>
    <div role="region" aria-label="Disclosure comparison, horizontally scrollable" aria-describedby="disclosure-table-description" tabIndex={0} className="disclosure-desktop relative hidden overflow-x-auto rounded-xl border border-slate-200 sm:block">
      <table className="w-full min-w-[900px] text-sm">
        <caption className="sr-only">Spouse business asset values and partnership income, with original and amended disclosures</caption>
        <thead className="bg-slate-900 text-white"><tr>{["Calendar year", "Asset", "Reported value", "Partnership income", "Filing / status"].map(label => <th key={label} scope="col" className="px-4 py-4 text-left font-semibold">{label}</th>)}</tr></thead>
        <tbody className="divide-y divide-slate-200">{financialData.map(row => <tr key={row.id} className={row.status === "Amended" ? "bg-red-50" : "bg-white"}>
          <th scope="row" className="px-4 py-4 text-left font-semibold">{row.year}</th><td className="px-4 py-4">{row.asset}</td><td className="px-4 py-4 font-semibold text-slate-900">{row.value}</td><td className="px-4 py-4">{row.income}</td><td className="px-4 py-4"><span className="block text-xs font-semibold text-slate-700">{row.status} · {row.filed}</span><SourceLink id={row.sourceId}>Read filing</SourceLink></td>
        </tr>)}</tbody>
      </table>
    </div>
  </>;
}
