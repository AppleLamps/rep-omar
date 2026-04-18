"use client";

import { useState } from "react";
import Link from "next/link";

export default function UpdatesBanner() {
    const [dismissed, setDismissed] = useState(false);

    if (dismissed) return null;

    return (
        <div className="relative bg-amber-50 border-b-2 border-amber-400 px-4 py-3 sm:px-6">
            <div className="max-w-5xl mx-auto flex items-start gap-3 sm:items-center">
                {/* Icon */}
                <div className="flex-shrink-0 mt-0.5 sm:mt-0">
                    <svg
                        className="w-5 h-5 text-amber-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>

                {/* Copy */}
                <p className="flex-1 text-sm text-amber-900 leading-snug">
                    <span className="font-semibold">April 2026 Update —</span>{" "}
                    Since this site was first published in December 2025, the U.S. House
                    Committee on Oversight and Government Reform opened an inquiry into
                    Rep. Omar&apos;s financial disclosures, and new sworn testimony from
                    Rose Lake&apos;s named advisor has entered the public record.{" "}
                    <Link
                        href="/updates"
                        className="font-semibold underline underline-offset-2 hover:text-amber-700 transition-colors"
                    >
                        Read the update &rarr;
                    </Link>
                </p>

                {/* Dismiss */}
                <button
                    onClick={() => setDismissed(true)}
                    className="flex-shrink-0 ml-2 p-1 rounded hover:bg-amber-200 transition-colors"
                    aria-label="Dismiss update notice"
                >
                    <svg
                        className="w-4 h-4 text-amber-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
