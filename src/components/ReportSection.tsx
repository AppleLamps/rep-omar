import type { ReactNode } from "react";

export default function ReportSection({ id, eyebrow, title, intro, children, dark = false }: { id: string; eyebrow?: string; title: string; intro?: string; children: ReactNode; dark?: boolean }) {
  return <section id={id} aria-labelledby={id + "-heading"} className={"report-section " + (dark ? "bg-slate-950 text-white dark-panel" : "bg-white text-slate-900")}>
    <div className="page-container">
      {eyebrow ? <p className={"eyebrow " + (dark ? "text-red-200" : "text-red-800")}>{eyebrow}</p> : null}
      <h2 id={id + "-heading"} className="section-title">{title}</h2>
      {intro ? <p className={"mt-4 mb-8 max-w-3xl text-base leading-7 " + (dark ? "text-slate-300" : "text-slate-600")}>{intro}</p> : <div className="mb-8" />}
      {children}
    </div>
  </section>;
}
