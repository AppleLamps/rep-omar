"use client";

import { useState, useEffect } from "react";
import { Navigation, BackToTop, Hero, StatCards, FinancialTable, Footer, ConnectionMap } from "@/components";

export default function Home() {
  const [activeSection, setActiveSection] = useState("overview");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Track scroll progress and active section
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
          setScrollProgress(progress);
          setShowBackToTop(window.scrollY > 500);

          const sections = ["overview", "connection", "money", "conflict", "china", "redflags", "sources"];
          const reversedSections = sections.slice().reverse();
          for (const section of reversedSections) {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              if (rect.top <= 150) {
                setActiveSection(section);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection={activeSection} scrollProgress={scrollProgress} />
      <BackToTop show={showBackToTop} />
      <Hero />
      <StatCards />

      {/* The Players */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="players">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-4 text-center">
            The Players
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Understanding the key figures and their roles in this financial arrangement
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl border-2 border-red-200 p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  IO
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Rep. Ilhan Omar</h3>
                  <p className="text-slate-500">U.S. Representative (D-MN)</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-slate-600">Member of <strong>House Foreign Affairs Committee</strong></p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-slate-600">Serves on <strong>Subcommittee on Africa</strong></p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-slate-600">Founded <strong>U.S.-Africa Policy Working Group</strong> after Rose Lake was established</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <p className="text-slate-600">Household net worth surged to <strong>$6-30 million</strong> per 2024 disclosure</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border-2 border-slate-200 p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  TM
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Tim Mynett</h3>
                  <p className="text-slate-500">Spouse &amp; Political Consultant</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-slate-600">Former partner at <strong>E Street Group</strong> (received $2.9M from Omar&apos;s campaign)</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-slate-600">Co-founder &amp; Partner at <strong>Rose Lake Capital LLC</strong></p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <p className="text-slate-600">Personal stake grew from <strong>&lt;$1,000 to $25M+</strong> in one year</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <p className="text-slate-600">Accompanied Rep. Omar on <strong>Africa trips</strong></p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border-2 border-slate-200 p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-500 to-slate-700 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  WH
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Will Hailer</h3>
                  <p className="text-slate-500">CEO &amp; Co-Founder, Rose Lake Capital</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-slate-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-slate-600">Former <strong>MN political operative</strong></p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <p className="text-slate-600"><strong>Named defendant</strong> in fraud lawsuits</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                  <p className="text-slate-600">Sued in <strong>Badlands</strong> and <strong>Mohd</strong> cases</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-slate-600">Allegedly raised <strong>$3.5M</strong> for cannabis fund</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Advisors */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-slate-900 mb-6 text-center">Key Advisors</h3>
            <p className="text-slate-600 text-center mb-8 max-w-xl mx-auto text-sm">
              High-profile political figures lending credibility to the firm
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    MB
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Max Baucus</h4>
                    <p className="text-slate-500 text-sm">Former U.S. Ambassador to China</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm">Legitimizes the firm to <strong>Chinese investors</strong> and provides diplomatic credibility for international deals.</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    CP
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Collin Peterson</h4>
                    <p className="text-slate-500 text-sm">Former Chair, House Ag Committee</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm">Linked to the <strong>cannabis/hemp strategy</strong> through his agricultural policy expertise and industry connections.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connection Map */}
      <ConnectionMap />

      {/* Money Trail */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50" id="money">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-4 text-center">
            The Money Trail
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Following the flow of campaign funds and investment returns
          </p>

          <div className="space-y-8">
            {/* Campaign to E Street */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-red-600 font-bold text-lg">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Campaign Funds to Husband&apos;s Firm</h3>
                  <p className="text-slate-500 text-sm">2020 Election Cycle</p>
                </div>
              </div>
              <div className="bg-red-50 rounded-xl p-5 border border-red-100">
                <p className="text-slate-700">
                  Rep. Omar&apos;s campaign paid approximately <strong className="text-red-600">$2.9 million</strong> to <strong>E Street Group</strong>, a political consultancy where Tim Mynett was a partner. This represented roughly <strong>80% of the firm&apos;s revenue</strong> during that period.
                </p>
              </div>
              <p className="text-slate-500 text-sm mt-4 italic">
                An FEC complaint was filed regarding these payments but was later dismissed.
              </p>
            </div>

            {/* Rose Lake Formation */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-600 font-bold text-lg">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Rose Lake Capital Established</h3>
                  <p className="text-slate-500 text-sm">Washington, D.C.</p>
                </div>
              </div>
              <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
                <p className="text-slate-700">
                  Mynett co-founded Rose Lake Capital LLC, which advertised <strong className="text-amber-700">&quot;structuring legislation&quot;</strong> as a service on its website. The phrase was removed after public scrutiny, but it revealed the firm&apos;s intent to monetize legislative access.
                </p>
              </div>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-lg p-4">
                  <p className="text-slate-500 text-xs uppercase tracking-wide mb-1">2023 Valuation</p>
                  <p className="text-slate-900 font-bold text-xl">$1 - $1,000</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <p className="text-slate-500 text-xs uppercase tracking-wide mb-1">2024 Valuation</p>
                  <p className="text-red-600 font-bold text-xl">$5M - $25M</p>
                </div>
              </div>
            </div>

            {/* Africa Investment */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold text-lg">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Investment in African Mining</h3>
                  <p className="text-slate-500 text-sm">Ivanhoe Atlantic - Guinea/Liberia</p>
                </div>
              </div>
              <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                <p className="text-slate-700">
                  Rose Lake acquired equity in <strong>Ivanhoe Atlantic</strong>, a mining company developing the <strong>Kon Kweni</strong> iron ore project (formerly Nimba) in <strong className="text-green-700">Guinea and Liberia</strong> - countries directly under Rep. Omar&apos;s Subcommittee on Africa jurisdiction.
                </p>
              </div>
              <div className="mt-4 p-4 bg-slate-900 rounded-lg">
                <p className="text-slate-300 text-sm">
                  <strong className="text-white">Key Connection:</strong> Dr. J. Peter Pham, former U.S. Special Envoy for the Sahel &amp; Great Lakes Regions, serves on Rose Lake&apos;s advisory board AND is Chairman of Ivanhoe Atlantic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Conflict of Interest */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-red-950" id="conflict">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
            The Conflict of Interest
          </h2>
          <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
            How her committee position directly benefits their investments
          </p>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-10">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Committee Jurisdiction</h3>
                  <p className="text-slate-300 text-sm">Rep. Omar serves on the <strong>House Foreign Affairs Committee</strong> and its <strong>Subcommittee on Africa</strong>. Her husband&apos;s primary investment (Ivanhoe Atlantic) operates in Guinea and Liberia - both within her committee&apos;s direct oversight.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Africa Policy Working Group</h3>
                  <p className="text-slate-300 text-sm">Following the establishment of Rose Lake, Rep. Omar formed a <strong>U.S.-Africa Policy Working Group</strong>. Mynett has accompanied her on trips to the region and attended events promoting investment in Africa.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Direct Financial Benefit</h3>
                  <p className="text-slate-300 text-sm">The Ivanhoe Atlantic project&apos;s value depends on U.S. diplomatic support and favorable relations with Guinea and Liberia. Any advocacy by Rep. Omar for African infrastructure initiatives <strong>directly benefits her household&apos;s net worth</strong>.</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">The &quot;Spousal Loophole&quot;</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Current House ethics rules are notoriously porous regarding spousal income. By structuring compensation as &quot;partnership equity&quot; rather than salary from a lobbying firm, Mynett avoids stricter reporting requirements. The &quot;unrealized&quot; nature of the wealth allows it to grow tax-deferred and largely hidden until disclosure events force it into the light.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* China Connection */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-red-950" id="china">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-red-500/20 text-red-300 text-sm font-medium mb-4">
              CONGRESSIONAL INVESTIGATION
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              The China Connection
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Rep. John Moolenaar, Chairman of the House Select Committee on China, has formally challenged the State Department over Ivanhoe Atlantic&apos;s ties to Chinese Communist Party interests
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                The Corporate Chain
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">&#8226;</span>
                  <span className="text-slate-300"><strong className="text-white">Ivanhoe Atlantic</strong> (Omar/Mynett investment) is majority owned by <strong className="text-white">I-Pulse Inc.</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">&#8226;</span>
                  <span className="text-slate-300">I-Pulse is chaired by <strong className="text-white">Robert Friedland</strong>, who also chairs <strong className="text-white">Ivanhoe Mines</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">&#8226;</span>
                  <span className="text-slate-300">Ivanhoe Mines is <strong className="text-white">~33% owned</strong> by Chinese state-linked entities</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                The Chinese Owners
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">&#8226;</span>
                  <span className="text-slate-300"><strong className="text-white">CITIC Group</strong> - FCC designated its telecom services a <strong className="text-red-400">national security threat</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">&#8226;</span>
                  <span className="text-slate-300"><strong className="text-white">Zijin Mining</strong> - Added to <strong className="text-red-400">Uyghur Forced Labor Prevention Act</strong> entity list (2025)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30 mb-8">
            <h3 className="text-lg font-semibold text-white mb-3">Beijing&apos;s &quot;Two Markets, Two Resources&quot; Strategy</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Rep. Moolenaar characterizes this arrangement as a manifestation of the CCP&apos;s strategy to secure control over critical minerals through <strong className="text-white">minority stakes in foreign firms</strong> rather than outright ownership. By describing Ivanhoe Mines and Ivanhoe Atlantic as &quot;sister companies,&quot; he suggests that operational and leadership overlap creates a conduit for Chinese influence that legal separation cannot fully mitigate.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-4">The $1.8 Billion Project Under Scrutiny</h3>
            <p className="text-slate-300 text-sm mb-4">
              Moolenaar&apos;s inquiry focuses on a <strong className="text-white">$1.8 billion rail and mining project</strong> in Guinea and Liberia, endorsed by the U.S. Embassy in Liberia, intended to connect the Simandou mining region to global markets.
            </p>
            <div className="bg-amber-500/10 rounded-lg p-4 border border-amber-500/30">
              <p className="text-amber-300 text-sm">
                <strong>Key Question:</strong> If the safeguards protecting American interests rely solely on corporate assurances of independence - despite shared leadership with entities heavily invested in by Beijing - does the U.S. critical mineral strategy remain compromised?
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-400 text-sm italic">
              Ivanhoe Atlantic has rejected these assertions, claiming the two entities are &quot;completely separate&quot; - but the overlapping leadership and ownership structure raises questions about the true independence of the firm.
            </p>
          </div>
        </div>
      </section>

      {/* Red Flags */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="redflags">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-4 text-center">
            Red Flags &amp; Litigation
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Additional concerns surrounding the financial dealings
          </p>

          <div className="space-y-6">
            <div className="bg-red-50 rounded-xl p-5 sm:p-6 border border-red-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-slate-900 mb-2">Wine Investment Fraud Allegations</h3>
                  <p className="text-slate-600 text-sm mb-3">D.C. restaurateur invested $300,000 in eStCru LLC with a contractual guarantee of 200% return within 18 months. The firm repaid principal but allegedly failed to pay the $600k profit.</p>
                  <p className="text-red-700 text-sm font-medium">A guaranteed 200% return is a hallmark of financial distress or fraudulent inducement.</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-xl p-5 sm:p-6 border border-red-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-slate-900 mb-2">Cannabis Fund Allegations</h3>
                  <p className="text-slate-600 text-sm mb-3">Investors allege Will Hailer (Rose Lake co-founder) raised $3.5 million for South Dakota cannabis operations but failed to deploy or return the funds.</p>
                  <p className="text-red-700 text-sm font-medium">When investors demanded their money, Hailer allegedly claimed the funds were frozen by OFAC - a highly implausible excuse for a domestic cannabis fund.</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-xl p-5 sm:p-6 border border-amber-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-600 text-white flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-slate-900 mb-2">$60 Billion AUM Claim</h3>
                  <p className="text-slate-600 text-sm mb-3">Rose Lake claims to have $60 billion in assets under management. There is no evidence of SEC registration as an investment adviser managing this volume.</p>
                  <p className="text-amber-700 text-sm font-medium">The firm likely aggregates the Total Project Value of infrastructure deals they touch - a deceptive marketing tactic.</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-xl p-5 sm:p-6 border border-red-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-slate-900 mb-2">Voizzit Information Technology - Bankruptcy Contempt</h3>
                  <p className="text-slate-600 text-sm mb-3">The Chapter 11 Trustee filed a motion holding the defendants in contempt of court for their conduct during bankruptcy proceedings.</p>
                  <p className="text-red-700 text-sm font-medium">The Trustee characterized the defendants as &quot;arrogantly defiant&quot; of court orders.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Disclosure Table */}
          <div className="mt-12">
            <h3 className="font-display text-2xl font-bold text-slate-900 mb-6 text-center">
              Congressional Financial Disclosures
            </h3>
            <FinancialTable />
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
            Key Takeaways
          </h2>

          <div className="space-y-6">
            <div className="bg-red-500/10 rounded-xl p-5 sm:p-6 border border-red-500/20">
              <h3 className="text-lg font-semibold text-red-400 mb-3">1. The Committee-Investment Connection</h3>
              <p className="text-slate-300 text-sm">Rep. Omar sits on the House Foreign Affairs Committee&apos;s Subcommittee on Africa. Her husband&apos;s firm invested in an African mining project whose value depends on U.S. diplomatic support for Guinea and Liberia.</p>
            </div>

            <div className="bg-red-500/10 rounded-xl p-5 sm:p-6 border border-red-500/20">
              <h3 className="text-lg font-semibold text-red-400 mb-3">2. The Money Flow</h3>
              <p className="text-slate-300 text-sm">$2.9 million in campaign funds went to her husband&apos;s consulting firm. He then co-founded Rose Lake Capital, which saw its valuation explode from under $1,000 to $25+ million in a single year - without generating any income.</p>
            </div>

            <div className="bg-red-500/10 rounded-xl p-5 sm:p-6 border border-red-500/20">
              <h3 className="text-lg font-semibold text-red-400 mb-3">3. The China Connection</h3>
              <p className="text-slate-300 text-sm">Ivanhoe Atlantic&apos;s parent company shares leadership with Ivanhoe Mines, which is ~33% owned by Chinese state-linked entities flagged for national security threats and forced labor. The House Select Committee on China has formally challenged State Department support for this project.</p>
            </div>

            <div className="bg-red-500/10 rounded-xl p-5 sm:p-6 border border-red-500/20">
              <h3 className="text-lg font-semibold text-red-400 mb-3">4. The &quot;Structuring Legislation&quot; Service</h3>
              <p className="text-slate-300 text-sm">Rose Lake Capital&apos;s website advertised &quot;structuring legislation&quot; as a service to clients. In the context of a firm owned by a congressional spouse, this is a direct admission of monetizing legislative influence.</p>
            </div>
          </div>

          <div className="mt-12 bg-white/5 rounded-xl p-6 sm:p-8 border border-white/10 text-center">
            <p className="text-slate-300 text-lg">
              &quot;Any advocacy by Rep. Omar for infrastructure initiatives in West Africa directly benefits her household&apos;s net worth - while potentially advancing Chinese state interests.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50" id="sources">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
            Sources &amp; Citations
          </h2>

          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              {[
                "House.gov - 2024 Financial Disclosure (Rep. Omar)",
                "House.gov - 2023 Financial Disclosure (Rep. Omar)",
                "House.gov - 2022 Financial Disclosure (Rep. Omar)",
                "Fox News - Ilhan Omar's net worth jumps to $30 million",
                "Wine-Searcher - Congresswoman's Husband in Alleged Wine Fraud",
                "American Experiment - Omar's husband linked to South Dakota lawsuit",
                "Rep. Moolenaar (House Select Committee on China) - Letter to State Dept",
                "Mining Weekly - US lawmaker raises concerns about Ivanhoe Atlantic's China ties",
                "Ivanhoe Atlantic - About Us / Official Website",
                "Mining Technology - Ivanhoe Atlantic IPO Coverage",
                "Sharecafe - Ivanhoe Atlantic Secures Key Railway Approval",
                "Verita Global - Voizzit Bankruptcy Filings & Witness List",
                "FEC Records - Campaign Disbursements to E Street Group",
                "FCC - CITIC National Security Designation",
                "Uyghur Forced Labor Prevention Act - Zijin Mining Entity List (2025)",
                "Rose Lake Capital Website (Archived)",
              ].map((source, idx) => (
                <div key={idx} className="flex items-start gap-3 p-2 rounded hover:bg-slate-50">
                  <span className="text-red-600 font-mono text-xs mt-0.5">[{idx + 1}]</span>
                  <span className="text-slate-600">{source}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
