export default function Hero() {
  return (
    <header className="gradient-bg pt-36 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <div className="animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-red-500/20 text-red-300 text-sm font-medium mb-6">
            FOLLOW THE MONEY
          </span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-delay-1">
          Rep. Ilhan Omar &amp; Tim Mynett
        </h1>
        <p className="text-xl sm:text-2xl text-slate-300 mb-8 animate-fade-in-delay-2 max-w-3xl mx-auto">
          How a congresswoman&apos;s Foreign Affairs Committee seat became a pipeline to millions for her husband&apos;s investment firm
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400 animate-fade-in-delay-3">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            $30M+ Net Worth Surge
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Foreign Affairs Committee
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            African Mining Investments
          </span>
        </div>
      </div>
    </header>
  );
}
