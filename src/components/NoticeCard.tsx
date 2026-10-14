import type { ReactNode } from "react";

interface NoticeCardProps {
  id: string;
  title: string;
  children: ReactNode;
  action?: ReactNode;
  footer: ReactNode;
  variant?: "update" | "legal";
  compact?: boolean;
}

export default function NoticeCard({ id, title, children, action, footer, variant = "legal", compact = false }: NoticeCardProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`relative rounded-xl border bg-white px-4 sm:px-6 print:border-slate-300 ${compact ? "py-3" : "py-4 sm:py-6"} ${variant === "update" ? "border-amber-300" : "border-slate-200"}`}>
      <div className="grid grid-cols-[2.25rem_minmax(0,1fr)] items-start gap-x-3 sm:gap-x-4">
        <div aria-hidden="true" className={`flex h-9 w-9 items-center justify-center rounded-lg ${variant === "update" ? "bg-amber-100 text-amber-800" : "bg-slate-100 text-slate-600"}`}>
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="min-w-0">
          <div className={compact ? "flex flex-wrap items-center justify-between gap-x-4" : ""}>
            <h2 id={`${id}-title`} className={`flex min-h-9 items-center font-semibold leading-6 text-slate-900 ${compact ? "text-sm" : "pr-12 text-sm sm:text-base"}`}>{title}</h2>
            {compact ? <div className="flex items-center">{footer}</div> : null}
          </div>
          <div className={compact ? "text-xs leading-5 text-slate-600" : "mt-2 text-sm leading-6 text-slate-600"}>{children}</div>
          {compact ? null : <div className="mt-3 flex flex-wrap items-center gap-3">{footer}</div>}
        </div>
      </div>
      {action ? <div className="absolute right-2 top-3 sm:right-4 sm:top-5">{action}</div> : null}
    </section>
  );
}
