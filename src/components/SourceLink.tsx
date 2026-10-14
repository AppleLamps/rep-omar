import type { ReactNode } from "react";
import { sources, type SourceId } from "@/lib/investigation";

export default function SourceLink({ id, children, page, light = false }: { id: SourceId; children?: ReactNode; page?: number; light?: boolean }) {
  const source = sources[id];
  return <a href={source.href + (page ? "#page=" + page : "")} target="_blank" rel="noopener noreferrer" className={"source-link " + (light ? "text-red-200 hover:text-white" : "text-red-800 hover:text-red-950")}>{children ?? source.label}<span className="sr-only"> (opens in a new tab)</span></a>;
}

export function Citations({ ids, light = false }: { ids: SourceId[]; light?: boolean }) {
  return <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-xs leading-5 print:text-sm">{ids.map(id => <li key={id}><SourceLink id={id} light={light} /></li>)}</ul>;
}
