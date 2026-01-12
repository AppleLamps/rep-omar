export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-800 print:hidden">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <span className="font-display font-bold text-lg text-white">Follow The Money</span>
              <p className="text-slate-500 text-xs">by <a href="https://x.com/lamps_apple" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 hover:underline">Apple Lamps</a></p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-slate-500 text-sm">Based on public records and congressional disclosures</p>
            <p className="text-slate-600 text-xs mt-1">Sources: House.gov, Court Records, SEC Filings</p>
          </div>
        </div>

        {/* Legal Disclaimers Section */}
        <div className="mt-10 pt-8 border-t border-slate-800">
          <h3 className="text-slate-400 text-sm font-semibold mb-4 text-center">Legal Disclaimers</h3>

          <div className="space-y-4 text-slate-500 text-xs leading-relaxed">
            {/* Opinion & Commentary Disclaimer */}
            <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-800">
              <p className="font-medium text-slate-400 mb-2">Opinion & Commentary</p>
              <p>
                This publication constitutes protected opinion, commentary, and analysis on matters of public concern
                regarding public figures and their publicly disclosed financial activities. The characterizations,
                conclusions, and interpretations presented herein represent the author&apos;s opinions based on publicly
                available information. Readers are encouraged to review the cited sources and form their own conclusions.
              </p>
            </div>

            {/* Fair Comment on Public Figures */}
            <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-800">
              <p className="font-medium text-slate-400 mb-2">Fair Comment on Public Figures</p>
              <p>
                The individuals discussed in this report are public figures who have voluntarily entered public life.
                Commentary on the conduct of public officials and their families regarding matters of public interest
                is protected speech under the First Amendment. This analysis concerns publicly disclosed financial
                arrangements and congressional activities that are legitimate subjects of public scrutiny and debate.
              </p>
            </div>

            {/* Source Attribution */}
            <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-800">
              <p className="font-medium text-slate-400 mb-2">Source Attribution & Accuracy</p>
              <p>
                All factual claims are derived from publicly available sources including official congressional financial
                disclosures (House.gov), court filings, SEC records, news reports, and archived website content.
                Where allegations are reported, they are attributed to their original sources (e.g., lawsuits,
                congressional letters, news investigations). The inclusion of third-party allegations does not
                constitute an endorsement of their accuracy. We endeavor to present information accurately but
                cannot guarantee the completeness or current accuracy of all cited sources.
              </p>
            </div>

            {/* Allegations vs. Findings */}
            <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-800">
              <p className="font-medium text-slate-400 mb-2">Allegations vs. Adjudicated Findings</p>
              <p>
                References to lawsuits, investigations, or allegations describe claims made by third parties in
                legal proceedings or official inquiries. Such references do not constitute assertions of guilt
                or wrongdoing. All persons referenced are presumed innocent of any wrongdoing unless and until
                proven otherwise in a court of law. Pending litigation may be resolved in favor of any party,
                and the outcomes of referenced legal matters should be independently verified.
              </p>
            </div>

            {/* No Professional Advice */}
            <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-800">
              <p className="font-medium text-slate-400 mb-2">No Professional Advice</p>
              <p>
                This report is provided for informational and educational purposes only. Nothing herein constitutes
                legal, financial, investment, or professional advice. Readers should consult qualified professionals
                before making any decisions based on information presented here. The author and publisher disclaim
                any liability for actions taken based on this content.
              </p>
            </div>

            {/* Right of Response */}
            <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-800">
              <p className="font-medium text-slate-400 mb-2">Right of Response</p>
              <p>
                Any individual or entity mentioned in this report who believes any statement to be inaccurate
                is invited to provide documentation supporting a correction. Verified corrections will be
                promptly published. Contact the author via the linked social media profile above.
              </p>
            </div>
          </div>

          {/* Copyright & Final Notice */}
          <div className="mt-6 pt-6 border-t border-slate-800 text-center">
            <p className="text-slate-600 text-xs">
              &copy; {new Date().getFullYear()} Apple Lamps. All rights reserved.
              This work is protected by copyright and may not be reproduced without permission.
            </p>
            <p className="text-slate-600 text-xs mt-2">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
