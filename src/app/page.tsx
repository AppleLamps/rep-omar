"use client";

import { useState, useEffect } from "react";
import { Navigation, BackToTop, Hero, StatCards, FinancialTable, Footer, ConnectionMap, DisclaimerBanner } from "@/components";

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

          const sections = [
            "overview",
            "players",
            "connection",
            "money",
            "papertiger",
            "conflict",
            "china",
            "redflags",
            "sources",
          ];
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
      <DisclaimerBanner />
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
                  <p className="text-slate-600">Disclosures show Rose Lake/eStCru stakes moving from <strong>nominal to multi-million-dollar ranges</strong> as valuations were updated—wealth is largely <strong>illiquid</strong> until a sale or IPO</p>
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
                  <p className="text-slate-600">Former <strong>Executive Director, Texas Democratic Party</strong>; campaign work for <strong>Keith Ellison</strong> and <strong>Al Franken</strong> (Minnesota)</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-slate-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-slate-600">Court filings have listed him as a <strong>Nebraska</strong> resident in some matters</p>
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-800 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    JP
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Dr. J. Peter Pham</h4>
                    <p className="text-slate-500 text-sm">Former U.S. Special Envoy, Sahel &amp; Great Lakes (Africa)</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm">
                  <strong>Chairman of Ivanhoe Atlantic</strong> while associated with Rose Lake—bridging the D.C. advisory bench to the Guinea/Liberia iron-ore story and regional diplomacy.
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    MB
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Max Baucus</h4>
                    <p className="text-slate-500 text-sm">Former U.S. Senator (MT); former Ambassador to China</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm">High-level U.S.–China and Washington weight—useful for critical-minerals narratives and institutional credibility.</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    CP
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Collin Peterson</h4>
                    <p className="text-slate-500 text-sm">Former U.S. Representative (MN); former Chair, House Agriculture</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm">Deep <strong>USDA / farm-bill</strong> context—often tied to hemp and cannabis regulatory angles in the upper Midwest.</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    KK
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Kate Knuth</h4>
                    <p className="text-slate-500 text-sm">Former MN state representative; Minneapolis mayoral candidate</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm">Reinforces local <strong>Minnesota</strong> networks and progressive &quot;green&quot; positioning for the firm&apos;s brand.</p>
              </div>
            </div>
          </div>

          {/* Related entities */}
          <div className="mt-14">
            <h3 className="text-xl font-semibold text-slate-900 mb-4 text-center">Related entities (public records &amp; litigation)</h3>
            <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto text-sm">
              Rose Lake sits at the center of a cluster of LLCs and funds named in civil cases and press coverage—not a single ticker, but a web of vehicles.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white text-left">
                    <th className="px-4 py-3 font-semibold">Entity</th>
                    <th className="px-4 py-3 font-semibold">Jurisdiction / focus</th>
                    <th className="px-4 py-3 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-900">Rose Lake Capital LLC</td>
                    <td className="px-4 py-3 text-slate-600">Washington, D.C.</td>
                    <td className="px-4 py-3 text-slate-600">Holding company on House financial disclosures; described as venture/advisory.</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-900">eSt Ventures</td>
                    <td className="px-4 py-3 text-slate-600">Delaware; cannabis VC</td>
                    <td className="px-4 py-3 text-slate-600">Named in investor litigation tied to South Dakota cannabis (Badlands).</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-900">eStCru LLC</td>
                    <td className="px-4 py-3 text-slate-600">California (Santa Rosa); wine brand</td>
                    <td className="px-4 py-3 text-slate-600">Co-founded by Mynett/Hailer; Mohd v. eStCru et al. in CA state court.</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-900">Badlands Fund / Badlands Ventures</td>
                    <td className="px-4 py-3 text-slate-600">Delaware; South Dakota ops</td>
                    <td className="px-4 py-3 text-slate-600">Channel for cannabis capital; alleged in MN complaints.</td>
                  </tr>
                </tbody>
              </table>
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
                <p className="text-slate-700 mb-4">
                  Rose Lake acquired equity in <strong>Ivanhoe Atlantic</strong>, focused on the <strong>Kon Kweni</strong> high-grade iron ore asset (Nimba region) in <strong className="text-green-700">Guinea</strong>, with export logistics hinging on <strong>Liberian rail and port</strong> access—precisely the kind of cross-border deal that turns on diplomacy and infrastructure.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 text-sm">
                  <li>
                    <strong>Rail &quot;unlock&quot;:</strong> Press and company reporting describe a <strong>concession / access agreement</strong> in Liberia that allows use of existing rail to the coast—reducing the &quot;stranded asset&quot; problem that held back prior owners.
                  </li>
                  <li>
                    <strong>Commodity story:</strong> Ultra-high-grade ore is marketed in part for <strong>green steel</strong> / DRI (direct reduced iron) as steelmakers decarbonize—supporting a bullish pre-IPO narrative.
                  </li>
                  <li>
                    <strong>Liquidity path:</strong> Ivanhoe Atlantic has targeted an <strong>ASX</strong> listing; press has cited raise sizes on the order of <strong>A$200–300 million</strong> (timing subject to market conditions and regulatory process).
                  </li>
                </ul>
              </div>
              <div className="mt-4 p-4 bg-slate-900 rounded-lg">
                <p className="text-slate-300 text-sm">
                  <strong className="text-white">Key Connection:</strong> Dr. J. Peter Pham, former U.S. Special Envoy for the Sahel &amp; Great Lakes Regions, has been described as <strong>Chairman of Ivanhoe Atlantic</strong> while linked to Rose Lake&apos;s advisory circle—connecting African diplomacy to the firm&apos;s largest reported bet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Paper Tiger */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="papertiger">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-4">
              VALUATION ANALYSIS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              The &quot;Paper Tiger&quot;
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              The $25 million headline valuation rests on a single pre-IPO bet that hasn&apos;t paid out yet&mdash;and may never
            </p>
          </div>

          {/* What Drove the Markup */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 mb-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              What Drove the Markup
            </h3>
            <p className="text-slate-700 mb-4">
              The valuation explosion is attributed almost entirely to Rose Lake&apos;s equity stake in <strong>Ivanhoe Atlantic</strong>, a U.S.-domiciled critical-minerals company developing the <strong>Kon Kweni iron ore project</strong> in Guinea.
            </p>
            <div className="bg-amber-50 rounded-xl p-5 border border-amber-100 mb-4">
              <p className="text-slate-700 text-sm">
                <strong className="text-amber-800">The &quot;unlock&quot;:</strong> A <strong>Concession and Access Agreement</strong> with Liberia in late 2024/early 2025 granted Ivanhoe Atlantic rail access to the coast&mdash;breaking <strong>ArcelorMittal&apos;s monopoly</strong> on rail infrastructure and converting Kon Kweni from a stranded asset into a commercially viable mine. Without that rail deal, the ore has no route to market.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <p className="text-slate-700 text-sm">
                <strong>The diplomatic lever:</strong> Dr. J. Peter Pham&mdash;former <strong>U.S. Special Envoy for the Sahel &amp; Great Lakes</strong>&mdash;serves as Chairman of Ivanhoe Atlantic and is linked to Rose Lake&apos;s advisory circle. His background in African diplomacy is flagged as the likely channel through which the cross-border concession was brokered.
              </p>
            </div>
          </div>

          {/* The IPO Math */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 mb-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              The IPO Math
            </h3>
            <p className="text-slate-700 mb-4">
              Ivanhoe Atlantic is targeting an <strong>ASX listing</strong> with a raise of <strong>A$200M&ndash;A$300M</strong> (~US$130M&ndash;$190M). If Rose Lake holds founder stock or early advisory shares, a <strong>pre-IPO mark-to-market</strong> of those shares would explain the jump to $25 million on paper.
            </p>
            <div className="bg-red-50 rounded-xl p-5 border border-red-200">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <p className="text-red-800 text-sm font-medium">
                  The IPO has been <strong>delayed to late 2025/2026</strong>. Until shares actually trade on a public exchange, the wealth is entirely theoretical&mdash;there is no market, no liquidity, and no buyer at the marked price.
                </p>
              </div>
            </div>
          </div>

          {/* eStCru: Same Pattern, Smaller Scale */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 mb-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              eStCru: Same Pattern, Smaller Scale
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <p className="text-slate-500 text-xs uppercase tracking-wide mb-1">2023 Valuation</p>
                <p className="text-slate-900 font-bold text-xl">$15k &ndash; $50k</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <p className="text-slate-500 text-xs uppercase tracking-wide mb-1">2024 Valuation</p>
                <p className="text-red-600 font-bold text-xl">$1M &ndash; $5M</p>
              </div>
            </div>
            <p className="text-slate-700 text-sm">
              The wine venture (eStCru LLC) follows the same playbook: a dramatic valuation markup year-over-year, with <strong>no reported income</strong> to support the new figure&mdash;and <strong>active litigation</strong> (Mohd v. eStCru) alleging the firm cannot pay its debts. A company allegedly unable to meet its obligations is simultaneously marked at $1M&ndash;$5M on congressional disclosures.
            </p>
          </div>

          {/* The Bottom Line */}
          <div className="bg-slate-900 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-red-400">The Bottom Line</span>
            </h3>
            <p className="text-slate-300 leading-relaxed">
              The $25 million valuation is a <strong className="text-white">&quot;paper tiger.&quot;</strong> It rests on mark-to-model equity in a pre-IPO mining company that has never traded publicly. If the Ivanhoe Atlantic IPO fails, gets further delayed, or is blocked over <strong className="text-white">Chinese ownership concerns</strong> raised by the House Select Committee on China, Rose Lake&apos;s reported value could <strong className="text-red-400">revert to zero</strong>&mdash;taking the household&apos;s headline net worth with it.
            </p>
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

          {/* Congressional Inquiry Notice */}
          <div className="mt-8 bg-white/5 border border-white/20 rounded-xl p-4">
            <p className="text-slate-400 text-xs">
              <strong className="text-slate-300">Note:</strong> The concerns described above are drawn from official
              congressional correspondence by Rep. John Moolenaar (R-MI), Chairman of the House Select Committee on
              the Chinese Communist Party. The referenced letter represents the views of that congressional office
              and does not constitute findings of fact. Ivanhoe Atlantic and related entities dispute these characterizations
              and maintain that proper corporate separations exist.
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
          <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto">
            Additional concerns surrounding the financial dealings
          </p>

          {/* Allegations Disclaimer */}
          <div className="bg-slate-100 border border-slate-300 rounded-xl p-4 mb-8">
            <p className="text-slate-700 text-sm">
              <strong>Important:</strong> The items below describe <em>allegations</em> made in lawsuits and other
              legal proceedings. These are claims made by third parties and have not been adjudicated. All individuals
              referenced are presumed innocent unless proven otherwise in a court of law. The inclusion of these
              allegations is for informational purposes and does not constitute an assertion of their accuracy.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-red-50 rounded-xl p-5 sm:p-6 border border-red-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-slate-900 mb-2">Wine investment — Mohd v. eStCru (allegations)</h3>
                  <p className="text-slate-600 text-sm mb-3">
                    California Superior Court case <strong>No. 23-CV010043</strong> (Naeem Mohd v. eStCru LLC et al.): plaintiff alleges a <strong>$300,000</strong> investment with a contract calling for a <strong>200% return within 18 months</strong>; principal was reportedly returned while profit remained disputed.
                  </p>
                  <p className="text-red-700 text-sm font-medium">Courts have not finally resolved the claims; the structure of the promised return is what drew press and analyst attention.</p>
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
                  <h3 className="font-semibold text-slate-900 mb-2">Cannabis fund — Badlands / eSt (allegations)</h3>
                  <p className="text-slate-600 text-sm mb-3">
                    Investors filed in <strong>Hennepin County, Minnesota</strong>, alleging that roughly <strong>$3.5 million</strong> raised for South Dakota cannabis operations was not deployed or returned as promised. Complaints describe an <strong>OFAC freeze</strong> explanation that plaintiffs dispute.
                  </p>
                  <p className="text-red-700 text-sm font-medium">These are unproven allegations in civil pleadings; outcomes may change as cases progress.</p>
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
                  <h3 className="font-semibold text-slate-900 mb-2">Voizzit — Delaware bankruptcy (allegations)</h3>
                  <p className="text-slate-600 text-sm mb-3">
                    Chapter 11 proceedings in <strong>U.S. Bankruptcy Court (D. Del.)</strong> generated contempt motions and sharp trustee language about compliance with court orders. Filings in that docket have tied other Hailer/Mynett-related entities into a broader paper trail.
                  </p>
                  <p className="text-red-700 text-sm font-medium">Read the docket for exact quotes and current status; bankruptcy litigation moves quickly.</p>
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

            <div className="bg-red-500/10 rounded-xl p-5 sm:p-6 border border-red-500/20">
              <h3 className="text-lg font-semibold text-red-400 mb-3">5. Paper wealth vs. cash and IPO risk</h3>
              <p className="text-slate-300 text-sm">
                Disclosure jumps align with <strong>mark-to-model equity</strong> in private companies (especially pre-IPO mining stock), not with steady partnership distributions. If listing plans slip or China/geopolitics scuttle the story, headline net worth figures can move sharply—while civil cases still turn on cash and credibility.
              </p>
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

          {/* Source Attribution Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
            <p className="text-blue-800 text-sm">
              <strong>Attribution Notice:</strong> The information presented in this report is derived from the publicly
              available sources listed below. The author has made reasonable efforts to accurately represent these sources
              but cannot guarantee their completeness or current accuracy. Readers are encouraged to consult the original
              sources directly. The listing of a source does not imply endorsement by that source of the conclusions
              drawn in this report.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8">
            <ul className="space-y-3 text-sm">
              {[
                { label: "House Clerk — 2024 financial disclosure (PDF)", href: "https://disclosures-clerk.house.gov/public_disc/financial-pdfs/2024/10068415.pdf" },
                { label: "House Clerk — 2023 financial disclosure (PDF)", href: "https://disclosures-clerk.house.gov/public_disc/financial-pdfs/2023/10060937.pdf" },
                { label: "House Clerk — 2022 financial disclosure (PDF)", href: "https://disclosures-clerk.house.gov/public_disc/financial-pdfs/2022/10053193.pdf" },
                { label: "Fox News — coverage of disclosure / net worth reporting", href: "https://www.foxnews.com/politics/omars-net-worth-jumps-much-30m-new-disclosure-claiming-not-millionaire" },
                { label: "Wine-Searcher — eStCru / investment dispute reporting", href: "https://www.wine-searcher.com/m/2024/06/congresswomans-husband-in-alleged-wine-fraud" },
                { label: "American Experiment — South Dakota cannabis litigation context", href: "https://www.americanexperiment.org/ilhan-omars-current-husband-linked-to-south-dakota-weed-lawsuit/" },
                { label: "Mining Weekly — U.S. lawmaker concerns re Ivanhoe Atlantic & China", href: "https://www.miningweekly.com/article/us-lawmaker-raises-concerns-about-miner-ivanhoe-atlantics-ties-with-china-2025-12-10" },
                { label: "Ivanhoe Atlantic — corporate overview", href: "https://ivanhoeatlantic.com/about-us/" },
                { label: "Mining Technology — ASX IPO coverage", href: "https://www.mining-technology.com/news/ivanhoe-atlantic-australian-ipo/" },
                { label: "Sharecafe — railway / access reporting", href: "https://www.sharecafe.com.au/2025/12/19/ivanhoe-atlantic-secures-key-railway-approval/" },
                { label: "Australian Mining Review — IPO timing coverage", href: "https://australianminingreview.com.au/news/ivanhoe-delays-asx-ipo/" },
                { label: "St. Louis American — political response citing Reformer reporting", href: "https://www.stlamerican.com/online-features/press-releases/don-samuels-responds-to-minnesota-reformer-article-detailing-self-dealing-missing-funds-and-lack-of-transparency-by-his-opponent-rep-ilhan-omar-and-her-husband-tim-mynett/" },
              ].map((source) => (
                <li key={source.href} className="flex items-start gap-2">
                  <span className="text-red-600 mt-1" aria-hidden>
                    &#8226;
                  </span>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-red-600 underline underline-offset-2 break-all"
                  >
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-slate-500 text-xs mt-6">
              Additional primary materials (FEC exports, full bankruptcy dockets, archived Rose Lake pages) can be bookmarked as you verify claims; this list mirrors commonly cited public entry points.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
