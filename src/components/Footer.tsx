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
              <p className="text-slate-500 text-xs">Political Accountability Project</p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-slate-500 text-sm">Based on public records and congressional disclosures</p>
            <p className="text-slate-600 text-xs mt-1">Sources: House.gov, Court Records, SEC Filings</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-600 text-xs">
            This report is provided for informational purposes only and does not constitute legal or financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
