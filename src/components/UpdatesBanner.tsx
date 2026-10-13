"use client";

import { useState } from "react";
import Link from "next/link";
import NoticeCard from "./NoticeCard";

export default function UpdatesBanner() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <NoticeCard
      id="update-notice"
      title="October 13, 2026 Update"
      variant="update"
      footer={<Link href="/updates" className="inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-semibold text-red-700 hover:text-red-800 underline underline-offset-4">Read the update <span aria-hidden="true">→</span></Link>}
      action={
        <button type="button" onClick={() => setDismissed(true)} className="flex h-11 w-11 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors" aria-label="Dismiss update notice">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      }
    >
      <p>New disclosure filings, the Rose Lake transfer record, the OCC dismissal recommendation, and Pirro&apos;s newly announced federal investigation are now included.</p>
    </NoticeCard>
  );
}
