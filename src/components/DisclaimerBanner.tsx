"use client";

import { useState } from "react";
import NoticeCard from "./NoticeCard";

export default function DisclaimerBanner() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <NoticeCard
      compact
      id="legal-notice"
      title="Important Legal Notice"
      footer={
        <button type="button" aria-expanded={isExpanded} aria-controls="full-disclaimer"
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex min-h-11 items-center gap-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 underline underline-offset-4">
          {isExpanded ? "Show less" : "Read full disclaimer"}
          <span aria-hidden="true">{isExpanded ? "−" : "+"}</span>
        </button>
      }
    >
      <p>Opinion and analysis based on public records. Allegations are attributed to their sources.</p>
      <div id="full-disclaimer" hidden={!isExpanded} className="mt-3 space-y-3 border-t border-slate-200 pt-3 text-sm leading-6">
            <p>
              This publication contains <strong>opinion, commentary, and analysis</strong> on
              matters of public concern regarding public figures. All factual claims are based
              on publicly available sources including congressional disclosures, court records,
              and news reports. Where allegations are discussed, they represent claims made by
              third parties and do not constitute assertions of guilt or wrongdoing.
            </p>

                <p>
                  <strong>Fair Comment Doctrine:</strong> The individuals discussed are public
                  figures whose publicly disclosed financial activities and official conduct are
                  legitimate subjects of public scrutiny under the First Amendment.
                </p>
                <p>
                  <strong>Presumption of Innocence:</strong> References to lawsuits or
                  investigations describe allegations, not proven facts. All persons are presumed
                  innocent unless proven otherwise in a court of law.
                </p>
                <p>
                  <strong>No Professional Advice:</strong> This content is for informational
                  purposes only and does not constitute legal, financial, or investment advice.
                </p>
                <p>
                  <strong>Corrections:</strong> Any person who believes a statement herein is
                  inaccurate may contact the author with supporting documentation for review.
                </p>
      </div>

    </NoticeCard>
  );
}
