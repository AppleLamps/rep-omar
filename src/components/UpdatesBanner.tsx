"use client";

import { useState } from "react";
import Link from "next/link";
import { reviewedDate } from "@/lib/investigation";
import NoticeCard from "./NoticeCard";

export default function UpdatesBanner() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;
  return <NoticeCard id="update-notice" title={"Federal disclosure investigation · " + reviewedDate} variant="update" footer={<Link href="/updates" className="inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-semibold text-red-800 underline underline-offset-4">Read the updates <span aria-hidden="true">→</span></Link>} action={<button type="button" onClick={() => setDismissed(true)} className="flex h-11 w-11 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100" aria-label="Dismiss update notice"><span aria-hidden="true" className="text-xl">×</span></button>}>
    <p>U.S. Attorney Jeanine Pirro announced that her office is investigating Omar’s financial disclosures.</p>
  </NoticeCard>;
}
