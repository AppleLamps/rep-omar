export default function ConnectionMap() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900" id="connection">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
          The Connection Map
        </h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          How political power translates to private wealth through a network of connected entities
        </p>

        <div className="relative">
          {/* Connection Lines - Hidden on mobile, shown on larger screens */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M400 80 L400 140" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M400 200 L400 260" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M400 320 L250 380" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M400 320 L550 380" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M250 440 L250 480" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M550 440 L550 480" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
          </div>

          {/* The Players */}
          <div className="grid gap-6 relative z-10">
            {/* Top: Rep. Omar */}
            <div className="flex justify-center">
              <div className="bg-red-600 rounded-2xl p-6 max-w-md w-full text-center shadow-xl shadow-red-900/30">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Rep. Ilhan Omar</h3>
                <p className="text-red-100 text-sm mb-3">U.S. House of Representatives (D-MN)</p>
                <div className="bg-white/10 rounded-lg p-3">
                  <p className="text-white text-xs font-medium">House Foreign Affairs Committee</p>
                  <p className="text-red-200 text-xs">Subcommittee on Africa</p>
                </div>
              </div>
            </div>

            {/* Arrow indicator for mobile */}
            <div className="flex justify-center lg:hidden">
              <div className="flex flex-col items-center text-red-400">
                <span className="text-xs mb-1">Married to</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>

            {/* Tim Mynett */}
            <div className="flex justify-center">
              <div className="bg-slate-800 border-2 border-red-500 rounded-2xl p-6 max-w-md w-full text-center">
                <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Tim Mynett</h3>
                <p className="text-slate-400 text-sm mb-3">Spouse &amp; Political Consultant</p>
                <div className="bg-slate-700 rounded-lg p-3">
                  <p className="text-slate-300 text-xs">Previously received <span className="text-red-400 font-bold">$2.9M</span> from Omar&apos;s campaign via E Street Group</p>
                </div>
              </div>
            </div>

            {/* Arrow indicator for mobile */}
            <div className="flex justify-center lg:hidden">
              <div className="flex flex-col items-center text-red-400">
                <span className="text-xs mb-1">Partner at</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>

            {/* Rose Lake Capital */}
            <div className="flex justify-center">
              <div className="bg-slate-800 rounded-2xl p-6 max-w-md w-full text-center border border-slate-700">
                <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Rose Lake Capital LLC</h3>
                <p className="text-slate-400 text-sm mb-3">Washington, D.C. Investment Firm</p>
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3">
                  <p className="text-amber-300 text-xs font-medium">Offered &quot;Structuring Legislation&quot; as a service</p>
                  <p className="text-slate-400 text-xs mt-1">Value jumped from &lt;$1K to $25M+ in one year</p>
                </div>
              </div>
            </div>

            {/* Arrow indicator for mobile */}
            <div className="flex justify-center lg:hidden">
              <div className="flex flex-col items-center text-red-400">
                <span className="text-xs mb-1">Invested in</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>

            {/* Bottom: Investment Targets */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Ivanhoe Atlantic</h4>
                    <p className="text-slate-500 text-xs">African Mining Company</p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm">Iron ore project in <span className="text-green-400">Guinea/Liberia</span> - countries under Rep. Omar&apos;s Africa Subcommittee jurisdiction</p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">U.S. Foreign Policy</h4>
                    <p className="text-slate-500 text-xs">Diplomatic Support</p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm">Mining project value depends on <span className="text-purple-400">U.S. diplomatic relations</span> with Guinea and Liberia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="mt-12 bg-red-500/10 border border-red-500/30 rounded-xl p-6 text-center">
          <p className="text-red-300 text-lg font-medium">
            &quot;Any advocacy by Rep. Omar for infrastructure initiatives in West Africa directly benefits her household&apos;s net worth by de-risking the Ivanhoe Atlantic logistics chain.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
