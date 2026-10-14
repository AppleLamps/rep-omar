"use client";

import { useState } from "react";
import NoticeCard from "./NoticeCard";
import LegalText from "./LegalText";

export default function DisclaimerBanner() {
  const [isExpanded, setIsExpanded] = useState(false);
  return <NoticeCard compact id="legal-notice" title="Editorial & Legal Notice" footer={<button type="button" aria-expanded={isExpanded} aria-controls="full-disclaimer" onClick={() => setIsExpanded(!isExpanded)} className="inline-flex min-h-11 items-center gap-2 rounded-lg text-xs font-semibold text-slate-600 underline underline-offset-4 hover:text-slate-900">{isExpanded ? "Show less" : "Read full disclaimer"}<span aria-hidden="true">{isExpanded ? "−" : "+"}</span></button>}>
    <p>Conservative opinion and analysis. Public records and allegations are attributed to their sources.</p>
    <div id="full-disclaimer" hidden={!isExpanded} className="mt-3 border-t border-slate-200 pt-3 text-sm"><LegalText /></div>
  </NoticeCard>;
}
