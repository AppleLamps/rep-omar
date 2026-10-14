import { sources, sourceGroups, reviewedDate, type Source } from "@/lib/investigation";
import ReportSection from "./ReportSection";

export default function SourcesSection({ appendix = false }: { appendix?: boolean }) {
  const groups = appendix ? sourceGroups.filter(group => group === "Mining appendix" || group === "Archived team") : sourceGroups;
  const seen = new Set<string>();
  const entries = Object.entries(sources).filter(([, source]) => { if (seen.has(source.href)) return false; seen.add(source.href); return true; });
  return <ReportSection id="sources" eyebrow="Read the documents" title="The source documents" intro={"House financial disclosures, court filings, archived company pages and the reporting cited in this investigation. Updated " + reviewedDate + "."}>
    <div className="grid gap-5 md:grid-cols-2">{groups.map(group => <section key={group} className="rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6" aria-label={group}><h3 className="mb-5 text-lg font-bold">{group}</h3><ul className="space-y-5">{entries.filter(([, source]) => source.group === group).map(([id, item]) => { const source: Source = item; return <li key={id}><a href={source.href} target="_blank" rel="noopener noreferrer" className="source-link text-sm font-semibold text-red-800">{source.label}<span className="sr-only"> (opens in a new tab)</span></a><p className="mt-1 text-xs leading-5 text-slate-600">{source.kind}{source.date ? " · " + source.date : ""}</p></li>; })}</ul></section>)}</div>
  </ReportSection>;
}
