export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-800 print:hidden">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <span className="font-display font-bold text-lg text-white">Apple Lamps</span>
              <p className="text-slate-500 text-xs">Deep Research Investigative Unit</p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-slate-500 text-sm">Report Date: December 27, 2025</p>
            <p className="text-slate-600 text-xs mt-1">Classification: Forensic Due Diligence / Enhanced Scrutiny</p>
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
