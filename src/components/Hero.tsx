export default function Hero() {
  return (
    <header className="gradient-bg pt-36 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <div className="animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-red-500/20 text-red-300 text-sm font-medium mb-6">
            CONFIDENTIAL INVESTIGATIVE REPORT
          </span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-delay-1">
          Rose Lake Capital LLC
        </h1>
        <p className="text-xl sm:text-2xl text-slate-300 mb-8 animate-fade-in-delay-2 max-w-3xl mx-auto">
          A comprehensive forensic due diligence investigation into political arbitrage, valuation anomalies, and corporate governance
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400 animate-fade-in-delay-3">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            December 27, 2025
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Enhanced Scrutiny Classification
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Deep Research Unit
          </span>
        </div>
      </div>
    </header>
  );
}
