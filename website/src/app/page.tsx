"use client";

import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("overview");

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <span className="font-display font-bold text-xl text-slate-900">Apple Lamps</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#overview" className="text-slate-600 hover:text-red-600 transition-colors text-sm font-medium">Overview</a>
              <a href="#findings" className="text-slate-600 hover:text-red-600 transition-colors text-sm font-medium">Key Findings</a>
              <a href="#timeline" className="text-slate-600 hover:text-red-600 transition-colors text-sm font-medium">Timeline</a>
              <a href="#details" className="text-slate-600 hover:text-red-600 transition-colors text-sm font-medium">Full Report</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="gradient-bg pt-32 pb-20 px-4 sm:px-6 lg:px-8">
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

      {/* Key Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50" id="overview">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="stat-card rounded-2xl p-6 text-center card-hover">
              <div className="text-3xl sm:text-4xl font-bold text-red-400 mb-2">3,500%</div>
              <div className="text-slate-400 text-sm">Asset Value Increase</div>
            </div>
            <div className="stat-card rounded-2xl p-6 text-center card-hover">
              <div className="text-3xl sm:text-4xl font-bold text-red-400 mb-2">$25M+</div>
              <div className="text-slate-400 text-sm">Reported Valuation</div>
            </div>
            <div className="stat-card rounded-2xl p-6 text-center card-hover">
              <div className="text-3xl sm:text-4xl font-bold text-red-400 mb-2">4+</div>
              <div className="text-slate-400 text-sm">Active Litigations</div>
            </div>
            <div className="stat-card rounded-2xl p-6 text-center card-hover">
              <div className="text-3xl sm:text-4xl font-bold text-red-400 mb-2">$60B</div>
              <div className="text-slate-400 text-sm">Claimed AUM</div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="findings">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
            Executive Intelligence Summary
          </h2>

          <div className="space-y-8">
            <div className="highlight-box rounded-xl p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-bold">1</span>
                Investigative Mandate
              </h3>
              <p className="text-slate-600 leading-relaxed">
                This investigation was initiated following the identification of significant statistical anomalies in congressional financial disclosures. The mandate is to deconstruct the corporate opacity surrounding Rose Lake Capital to reveal its true operational nature&mdash;a potential <strong>political arbitrage vehicle</strong> designed to monetize legislative influence and geopolitical access.
              </p>
            </div>

            <div className="highlight-box rounded-xl p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-bold">2</span>
                Core Finding: The Valuation Anomaly
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Rose Lake Capital experienced a <strong>3,500% increase in asset value</strong> over a single reporting cycle&mdash;from less than $1,000 in 2023 to $5-25 million in 2024. Crucially, the disclosure lists <strong>&quot;None&quot; under income</strong>. In forensic accounting terms, high asset value combined with zero income is the signature of <strong>unrealized capital gains</strong> in an illiquid asset.
              </p>
            </div>

            <div className="highlight-box rounded-xl p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-bold">3</span>
                The Political-Commercial Pipeline
              </h3>
              <p className="text-slate-600 leading-relaxed">
                The firm&apos;s leadership possesses negligible track records in institutional asset management. Instead, their expertise lies in <strong>campaign finance, political consulting, and network leverage</strong>. The firm&apos;s website explicitly listed <strong>&quot;structuring legislation&quot;</strong> as a service&mdash;a flagrant admission of influence peddling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Structure */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
            Corporate Entity Network
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 card-hover">
              <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Rose Lake Capital LLC</h3>
              <p className="text-slate-400 text-sm mb-3">Washington, D.C.</p>
              <span className="inline-block px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs">Primary Holding</span>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 card-hover">
              <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">eSt Ventures</h3>
              <p className="text-slate-400 text-sm mb-3">Delaware</p>
              <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs">Cannabis Sector</span>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 card-hover">
              <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">eStCru LLC</h3>
              <p className="text-slate-400 text-sm mb-3">California</p>
              <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs">Viticulture</span>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 card-hover">
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Badlands Fund</h3>
              <p className="text-slate-400 text-sm mb-3">Delaware</p>
              <span className="inline-block px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs">Under Litigation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Players */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
            Executive Leadership Profile
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 card-hover">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white font-bold text-xl">
                  TM
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Timothy Mynett</h3>
                  <p className="text-slate-500">Partner &amp; Co-Founder</p>
                </div>
              </div>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-slate-600">Former partner at E Street Group, receiving ~$2.9M in campaign disbursements during 2020 cycle</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <p className="text-slate-600">Personal net worth increased from &lt;$1,000 (2023) to $6-30 million (2025)</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <p className="text-slate-600">Wealth is entirely illiquid, tied to Rose Lake and eStCru valuations</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 card-hover">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white font-bold text-xl">
                  WH
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Will Hailer</h3>
                  <p className="text-slate-500">CEO &amp; Co-Founder</p>
                </div>
              </div>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-slate-600">Former Executive Director of Texas Democratic Party</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <p className="text-slate-600">Primary target of multiple fraud allegations across jurisdictions</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-slate-600">Allegedly used OFAC excuse to explain disappearance of investor funds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Ivanhoe Connection */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-red-950" id="timeline">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
            The Capital Nexus
          </h2>
          <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
            Ivanhoe Atlantic &amp; The Iron Ore Play
          </p>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 sm:p-10">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">The Asset: Kon Kweni</h3>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2"></span>
                    Ultra-high grade iron ore deposit in Guinea&apos;s Nimba Mountains
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2"></span>
                    Essential for &quot;green steel&quot; production (Direct Reduced Iron)
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2"></span>
                    Previously stranded for decades due to logistical complexity
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2"></span>
                    Requires cross-border rail access through Liberia
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">The Strategic Unlock</h3>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2"></span>
                    Concession &amp; Access Agreement with Government of Liberia (2024-2025)
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2"></span>
                    Broke ArcelorMittal&apos;s rail monopoly
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2"></span>
                    Dr. J. Peter Pham uniquely positioned to facilitate
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2"></span>
                    IPO targeting A$200-300M on Australian Securities Exchange
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">The China Risk</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                While Ivanhoe Atlantic markets itself as &quot;U.S.-aligned,&quot; the majority shareholder is <strong>I-Pulse Inc.</strong>, chaired by Robert Friedland. Friedland also chairs <strong>Ivanhoe Mines</strong>, of which ~33% is owned by Chinese state-linked entities including CITIC Group and Zijin Mining. This creates a potential vector for Chinese influence in U.S. critical minerals policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Litigation Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
            Active Litigation &amp; Legal Exposure
          </h2>

          <div className="space-y-6">
            <div className="bg-red-50 rounded-xl p-6 border border-red-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Mohd v. eStCru (California Superior Court)</h3>
                  <p className="text-slate-600 text-sm mb-3">
                    D.C. restaurateur invested $300,000 with a contractual guarantee of 200% return ($900,000 total) within 18 months. Firm repaid principal but failed to pay $600k profit.
                  </p>
                  <p className="text-red-700 text-sm font-medium">
                    Forensic Note: A guaranteed 200% return is a hallmark of financial distress or fraudulent inducement.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-xl p-6 border border-red-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Badlands Fund Litigation (Hennepin County, MN)</h3>
                  <p className="text-slate-600 text-sm mb-3">
                    Investors allege Hailer raised $3.5 million for South Dakota cannabis operations but failed to deploy or return funds.
                  </p>
                  <p className="text-red-700 text-sm font-medium">
                    The OFAC Excuse: Hailer allegedly claimed funds were frozen by OFAC&mdash;an implausible claim for a domestic cannabis fund.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-600 text-white flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Voizzit Bankruptcy Contempt (U.S. Bankruptcy Court, Delaware)</h3>
                  <p className="text-slate-600 text-sm mb-3">
                    Chapter 11 Trustee filed motion holding &quot;Voizzit Defendants&quot; in contempt, describing them as &quot;arrogantly defiant&quot; and accusing them of attempting to &quot;fleece the Estate.&quot;
                  </p>
                  <p className="text-amber-700 text-sm font-medium">
                    Both Hailer and Mynett are on the witness list, linking financial mismanagement across portfolios.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Political Conflicts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50" id="details">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
            The Political Economy
          </h2>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <div className="p-8 sm:p-10 border-b border-slate-100">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">The Commodification of Office</h3>
              <p className="text-slate-600 mb-6">
                The central ethical tension is the overlap between private equity interests and legislative powers. Archived versions of the Rose Lake website explicitly listed <strong>&quot;structuring legislation&quot;</strong> as a service offered to clients&mdash;a flagrant admission of influence peddling.
              </p>
              <div className="bg-slate-900 rounded-lg p-6">
                <p className="text-slate-300 text-sm italic">
                  &quot;In the context of a firm owned by a congressional spouse, this is a flagrant admission of influence peddling. It implies that the firm can write favorable laws&mdash;or block unfavorable ones&mdash;on behalf of its portfolio companies.&quot;
                </p>
              </div>
            </div>

            <div className="p-8 sm:p-10">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">The Africa Committee Conflict</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-slate-600 text-sm">Service on House Foreign Affairs Committee &amp; Subcommittee on Africa</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-slate-600 text-sm">Spouse&apos;s primary asset depends on U.S. diplomatic support in Guinea and Liberia</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-slate-600 text-sm">Formation of U.S.-Africa Policy Working Group following Rose Lake establishment</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-slate-600 text-sm">Any advocacy for &quot;Lobito Corridor&quot; initiatives directly benefits household net worth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Forensics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
            Financial Forensic Audit
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">Year</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Asset</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Value Range</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Income</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Analysis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="bg-white">
                  <td className="px-6 py-4 text-sm text-slate-600">2022</td>
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Rose Lake Capital</td>
                  <td className="px-6 py-4 text-sm text-slate-600">$1 - $1,000</td>
                  <td className="px-6 py-4 text-sm text-slate-600">None</td>
                  <td className="px-6 py-4 text-sm text-slate-500 italic">Dormant/Shell status</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-600">2023</td>
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Rose Lake Capital</td>
                  <td className="px-6 py-4 text-sm text-slate-600">$1 - $1,000</td>
                  <td className="px-6 py-4 text-sm text-slate-600">$15k - $50k</td>
                  <td className="px-6 py-4 text-sm text-slate-500 italic">Modest consulting fees</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="px-6 py-4 text-sm text-slate-600">2024</td>
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">Rose Lake Capital</td>
                  <td className="px-6 py-4 text-sm font-bold text-red-600">$5M - $25M</td>
                  <td className="px-6 py-4 text-sm text-slate-600">None</td>
                  <td className="px-6 py-4 text-sm font-semibold text-red-600">REVALUATION EVENT</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 text-sm text-slate-600">2023</td>
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">eStCru LLC</td>
                  <td className="px-6 py-4 text-sm text-slate-600">$15k - $50k</td>
                  <td className="px-6 py-4 text-sm text-slate-600">$201 - $1,000</td>
                  <td className="px-6 py-4 text-sm text-slate-500 italic">Struggling micro-business</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="px-6 py-4 text-sm text-slate-600">2024</td>
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium">eStCru LLC</td>
                  <td className="px-6 py-4 text-sm font-bold text-red-600">$1M - $5M</td>
                  <td className="px-6 py-4 text-sm text-slate-600">None</td>
                  <td className="px-6 py-4 text-sm font-semibold text-red-600">Suspicious markup</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-10 bg-amber-50 rounded-xl p-6 border border-amber-200">
            <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              The $60 Billion AUM Claim
            </h3>
            <p className="text-slate-700 text-sm">
              Rose Lake claims to have <strong>$60 billion</strong> in assets under management. This is a fabrication. There is no evidence of SEC registration as an investment adviser managing this volume. The firm likely aggregates the Total Project Value of infrastructure deals they touch. This is a deceptive marketing tactic designed to inflate the firm&apos;s gravity for unsophisticated investors.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
            Risk Assessment &amp; Conclusions
          </h2>

          <div className="space-y-6">
            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
              <h3 className="text-lg font-semibold text-red-400 mb-3">1. Valuation is Speculative</h3>
              <p className="text-slate-300 text-sm">
                The $25 million valuation is a &quot;paper tiger,&quot; dependent entirely on the successful IPO of Ivanhoe Atlantic. If that IPO fails or is blocked by regulators due to Chinese ownership concerns, the value of Rose Lake could revert to zero.
              </p>
            </div>

            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
              <h3 className="text-lg font-semibold text-red-400 mb-3">2. Litigation Risk is Existential</h3>
              <p className="text-slate-300 text-sm">
                The principals face active fraud allegations in multiple courts. The &quot;OFAC excuse&quot; used in the Badlands case suggests a willingness to deceive investors.
              </p>
            </div>

            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
              <h3 className="text-lg font-semibold text-red-400 mb-3">3. Ethical Conflicts are Systemic</h3>
              <p className="text-slate-300 text-sm">
                The firm&apos;s business model creates an intractable conflict of interest with committee roles on House Foreign Affairs. The firm is effectively monetizing U.S. foreign policy in West Africa.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white/5 rounded-xl p-8 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-6">Recommendations for Due Diligence</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</div>
                <div>
                  <p className="text-white font-medium">Enhanced Due Diligence (EDD)</p>
                  <p className="text-slate-400 text-sm">Required on all principals. Focus on status of Badlands and Mohd litigation.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</div>
                <div>
                  <p className="text-white font-medium">Verification of Assets</p>
                  <p className="text-slate-400 text-sm">Demand independent verification of the $60B AUM claim and Ivanhoe Atlantic equity valuation methodology.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</div>
                <div>
                  <p className="text-white font-medium">Political Exposure Review</p>
                  <p className="text-slate-400 text-sm">Analyze all legislative actions related to Guinea, Liberia, and critical minerals to identify potential quid pro quo patterns.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-800">
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
    </div>
  );
}
