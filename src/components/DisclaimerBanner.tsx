"use client";

import { useState } from "react";

export default function DisclaimerBanner() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-amber-50 border-b-2 border-amber-200 print:bg-white print:border-slate-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-start gap-3">
          <svg
            className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div className="flex-1">
            <p className="text-amber-800 text-sm font-medium">
              Important Legal Notice
            </p>
            <p className="text-amber-700 text-sm mt-1">
              This publication contains <strong>opinion, commentary, and analysis</strong> on
              matters of public concern regarding public figures. All factual claims are based
              on publicly available sources including congressional disclosures, court records,
              and news reports. Where allegations are discussed, they represent claims made by
              third parties and do not constitute assertions of guilt or wrongdoing.
            </p>

            {isExpanded && (
              <div className="mt-3 space-y-2 text-amber-700 text-sm border-t border-amber-200 pt-3">
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
            )}

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 text-amber-600 hover:text-amber-800 text-sm font-medium underline focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded"
            >
              {isExpanded ? "Show less" : "Read full disclaimer"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
