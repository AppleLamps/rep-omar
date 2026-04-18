import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Updates Since Publication | Follow the Money",
    description:
        "Post-publication developments including the February 2026 House Oversight inquiry and sworn bankruptcy testimony from Rose Lake's named advisor.",
};

export default function UpdatesPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Page header */}
            <div className="bg-slate-900 px-4 py-10 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-6 transition-colors"
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        Back to the full report
                    </Link>
                    <div className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold tracking-wide uppercase mb-4">
                        Updated: April 2026
                    </div>
                    <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
                        Updates Since Publication
                    </h1>
                    <p className="text-slate-300 text-base max-w-3xl leading-relaxed">
                        This site was first published in December 2025. The developments
                        below post-date original publication and are reported here as
                        updates rather than rewritten into the original pages. All original
                        text remains intact for transparency.
                    </p>
                </div>
            </div>

            {/* Update entries */}
            <div className="px-4 py-12 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto space-y-10">

                    {/* ── Entry 1: House Oversight ── */}
                    <article className="bg-white rounded-2xl border-2 border-amber-400 shadow-sm overflow-hidden">
                        {/* Entry label */}
                        <div className="bg-amber-50 border-b border-amber-200 px-6 py-3 flex items-center gap-3">
                            <svg
                                className="w-5 h-5 text-amber-600 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span className="text-xs font-semibold text-amber-800 uppercase tracking-wide">
                                Post-Publication Update &bull; April 2026
                            </span>
                        </div>

                        <div className="px-6 py-6">
                            <p className="text-slate-500 text-sm mb-1">February 5, 2026</p>
                            <h2 className="text-xl font-bold text-slate-900 mb-4">
                                House Oversight Committee Opens Inquiry
                            </h2>

                            <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-4">
                                <p className="text-slate-700">
                                    On February 5, 2026, House Oversight and Government Reform
                                    Committee Chairman James Comer (R-KY) sent a letter to Rep.
                                    Ilhan Omar requesting records related to her husband&apos;s
                                    business interests in Rose Lake Capital and related entities.
                                    The letter references concerns that the valuation reported on
                                    her 2024 Financial Disclosure ($5,000,001–$25,000,000 for the
                                    Rose Lake stake) may not be substantiated by the underlying
                                    entities&apos; publicly available financial activity.
                                </p>
                                <p className="text-slate-700">
                                    This is a committee inquiry, not a finding of wrongdoing.
                                    Rep. Omar&apos;s office has stated that the disclosures comply
                                    with House rules.
                                </p>
                            </div>

                            {/* Exhibit link — placeholder pending upload */}
                            {/* TODO: Drop the PDF at /exhibits/oversight-letter-2026-02-05.pdf and remove this TODO */}
                            <div className="mt-5 p-4 bg-slate-50 rounded-lg border border-slate-200">
                                <div className="flex items-start gap-3">
                                    <svg
                                        className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                    <div>
                                        <p className="text-slate-700 text-sm font-medium">
                                            House Oversight Letter to Rep. Omar (Feb 5, 2026)
                                        </p>
                                        <p className="text-slate-400 text-xs mt-1 italic">
                                            Exhibit pending upload — file will appear at{" "}
                                            <code className="text-slate-600">/exhibits/oversight-letter-2026-02-05.pdf</code>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* ── Entry 2: Sworn Bankruptcy Testimony ── */}
                    <article className="bg-white rounded-2xl border-2 border-amber-400 shadow-sm overflow-hidden">
                        <div className="bg-amber-50 border-b border-amber-200 px-6 py-3 flex items-center gap-3">
                            <svg
                                className="w-5 h-5 text-amber-600 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span className="text-xs font-semibold text-amber-800 uppercase tracking-wide">
                                Post-Publication Update &bull; April 2026
                            </span>
                        </div>

                        <div className="px-6 py-6">
                            <p className="text-slate-500 text-sm mb-1">November 21, 2024 (sworn testimony)</p>
                            <h2 className="text-xl font-bold text-slate-900 mb-4">
                                Sworn Bankruptcy Testimony Contradicts Disclosure Valuation
                            </h2>

                            <div className="text-sm leading-relaxed space-y-4">
                                <p className="text-slate-700">
                                    On November 21, 2024, E.J. Hailer — named on Rose Lake&apos;s
                                    website as the firm&apos;s principal operating partner — gave
                                    sworn testimony in the Voizzit Information Technology Chapter
                                    11 proceeding (U.S. Bankruptcy Court, District of Delaware).
                                    Under examination, Hailer testified that Rose Lake had a
                                    combined bank balance of approximately{" "}
                                    <strong className="text-red-700">$42.44</strong> at the time
                                    of the examination, that the firm had{" "}
                                    <strong>&ldquo;no AUM as a legal term of art,&rdquo;</strong>{" "}
                                    and that the combined asset base of the Rose Lake entities was
                                    under $1 million.
                                </p>
                                <p className="text-slate-700">
                                    This sworn testimony predates Rep. Omar&apos;s May 2025
                                    Financial Disclosure, which reported her husband&apos;s Rose
                                    Lake stake at a value between{" "}
                                    <strong className="text-red-700">$5 million and $25 million</strong>.
                                    The apparent contradiction is the subject of the House
                                    Oversight inquiry referenced above.
                                </p>
                            </div>

                            {/* Two-column comparison */}
                            <div className="mt-6 grid sm:grid-cols-2 gap-4">
                                <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                                    <p className="text-xs font-semibold text-red-700 uppercase tracking-wide mb-2">
                                        Sworn Testimony — Nov 21, 2024
                                    </p>
                                    <ul className="space-y-1 text-sm text-slate-700">
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-500 mt-0.5">&#8226;</span>
                                            Combined bank balance: <strong>~$42.44</strong>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-500 mt-0.5">&#8226;</span>
                                            <strong>&ldquo;No AUM as a legal term of art&rdquo;</strong>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-500 mt-0.5">&#8226;</span>
                                            Combined assets <strong>under $1 million</strong>
                                        </li>
                                    </ul>
                                    <p className="text-slate-500 text-xs mt-3 italic">
                                        Source: U.S. Bankruptcy Court D. Del., Voizzit Chapter 11
                                        Section 341 examination transcript of E.J. Hailer
                                    </p>
                                </div>
                                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                                    <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-2">
                                        Financial Disclosure — May 2025
                                    </p>
                                    <ul className="space-y-1 text-sm text-slate-700">
                                        <li className="flex items-start gap-2">
                                            <span className="text-slate-400 mt-0.5">&#8226;</span>
                                            Spouse&apos;s Rose Lake stake:{" "}
                                            <strong>$5,000,001 – $25,000,000</strong>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-slate-400 mt-0.5">&#8226;</span>
                                            Signed under penalty of false-statement statutes
                                        </li>
                                    </ul>
                                    <p className="text-slate-500 text-xs mt-3 italic">
                                        Source: U.S. House Clerk, Rep. Omar 2024 Annual Financial
                                        Disclosure
                                    </p>
                                </div>
                            </div>

                            {/* Exhibit link — placeholder */}
                            {/* TODO: Drop the PDF at /exhibits/hailer-341-transcript-2024-11-21.pdf and remove this TODO */}
                            <div className="mt-5 p-4 bg-slate-50 rounded-lg border border-slate-200">
                                <div className="flex items-start gap-3">
                                    <svg
                                        className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                    <div>
                                        <p className="text-slate-700 text-sm font-medium">
                                            E.J. Hailer Section 341 Examination Transcript (Nov 21, 2024)
                                        </p>
                                        <p className="text-slate-400 text-xs mt-1 italic">
                                            Exhibit pending upload — file will appear at{" "}
                                            <code className="text-slate-600">/exhibits/hailer-341-transcript-2024-11-21.pdf</code>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* ── Entry 3: Delaware / DC Entity Records ── */}
                    <article className="bg-white rounded-2xl border-2 border-amber-400 shadow-sm overflow-hidden">
                        <div className="bg-amber-50 border-b border-amber-200 px-6 py-3 flex items-center gap-3">
                            <svg
                                className="w-5 h-5 text-amber-600 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span className="text-xs font-semibold text-amber-800 uppercase tracking-wide">
                                Post-Publication Update &bull; April 2026
                            </span>
                        </div>

                        <div className="px-6 py-6">
                            <h2 className="text-xl font-bold text-slate-900 mb-4">
                                Delaware and DC Entity Records — Status Check
                            </h2>

                            <p className="text-slate-700 text-sm mb-5">
                                A review of Delaware Secretary of State ICIS filings confirms
                                three Rose Lake entities:
                            </p>

                            <div className="overflow-x-auto rounded-xl border border-slate-200 mb-5">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="bg-slate-900 text-white text-left">
                                            <th className="px-4 py-3 font-semibold">Entity</th>
                                            <th className="px-4 py-3 font-semibold">DE File #</th>
                                            <th className="px-4 py-3 font-semibold">Formed</th>
                                            <th className="px-4 py-3 font-semibold">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 bg-white">
                                        <tr>
                                            <td className="px-4 py-3 font-medium text-slate-900">
                                                Rose Lake Holdings LLC
                                            </td>
                                            <td className="px-4 py-3 text-slate-600">6890594</td>
                                            <td className="px-4 py-3 text-slate-600">Jun 30, 2022</td>
                                            <td className="px-4 py-3">
                                                <span className="inline-block px-2 py-0.5 rounded-full bg-green-100 text-green-800 text-xs font-medium">
                                                    Good Standing (DE)
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="bg-slate-50">
                                            <td className="px-4 py-3 font-medium text-slate-900">
                                                Rose Lake Capital LLC
                                            </td>
                                            <td className="px-4 py-3 text-slate-600">6954979</td>
                                            <td className="px-4 py-3 text-slate-600">Aug 5, 2022</td>
                                            <td className="px-4 py-3">
                                                <span className="inline-block px-2 py-0.5 rounded-full bg-green-100 text-green-800 text-xs font-medium mr-1">
                                                    Good Standing (DE)
                                                </span>
                                                <span className="inline-block px-2 py-0.5 rounded-full bg-red-100 text-red-800 text-xs font-medium">
                                                    DC Revocation List
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 font-medium text-slate-900">
                                                Rose Lake Inc.
                                            </td>
                                            <td className="px-4 py-3 text-slate-600">7246289</td>
                                            <td className="px-4 py-3 text-slate-600">Jan 19, 2023</td>
                                            <td className="px-4 py-3">
                                                <span className="inline-block px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 text-xs font-medium">
                                                    Agent unassigned / status unknown
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                                <p className="text-slate-600 text-xs">
                                    <strong>Note:</strong> Rose Lake Capital LLC (DC file #C00007470247) is
                                    currently listed on the District of Columbia Entity Revocation
                                    List. Entity status is a matter of public record and does not
                                    by itself establish wrongdoing.
                                </p>
                            </div>
                        </div>
                    </article>

                    {/* Footer nav */}
                    <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <Link
                            href="/"
                            className="text-sm text-red-600 hover:text-red-700 font-medium transition-colors"
                        >
                            &larr; Return to full report
                        </Link>
                        <Link
                            href="/#sources"
                            className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
                        >
                            View all sources &amp; citations &rarr;
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
