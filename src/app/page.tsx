"use client";

import { useState, useEffect } from "react";
import TransferEvidence from "@/components/TransferEvidence";
import { sources } from "@/lib/investigation";
import { Navigation, BackToTop, Hero, StatCards, FinancialTable, Footer, ConnectionMap, DisclaimerBanner, UpdatesBanner } from "@/components";

export default function Home() {
  const [activeSection, setActiveSection] = useState("overview");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Track scroll progress and active section
  useEffect(() => {
    let ticking = false;
    let frameId = 0;

    const handleScroll = () => {
      if (!ticking) {
        frameId = window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
          setScrollProgress(progress);
          setShowBackToTop(window.scrollY > 500);

          const sections = [
            "overview",
            "players",
            "connection",
            "money",
            "transfers",
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

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection={activeSection} scrollProgress={scrollProgress} />
      <BackToTop show={showBackToTop} />
      <main id="main-content" tabIndex={-1}>
      <Hero />
      <UpdatesBanner />
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

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border-2 border-red-200 p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 xl:w-16 xl:h-16 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
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
                  <p className="text-slate-600">Serves on <strong>Education and the Workforce</strong> and <strong>Budget</strong>; see her current official committee list</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-slate-600">Former <strong>Foreign Affairs Committee</strong> member; removed in February 2023</p>
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
                  <p className="text-slate-600">Original business asset values of <strong>$6–30 million</strong> were amended to <strong>None</strong> on March 26, 2026</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border-2 border-slate-200 p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 xl:w-16 xl:h-16 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
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
                  <p className="text-slate-600">The March 2026 amendment lists both business asset values as <strong>None</strong> and Rose Lake partnership income at <strong>$100,001–$1,000,000</strong> for 2024</p>
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
                <div className="w-12 h-12 xl:w-16 xl:h-16 rounded-full bg-gradient-to-br from-slate-500 to-slate-700 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
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
              Names historically associated with the firm; listing does not establish an active advisory agreement or investment
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
                  <strong>Chairman of Ivanhoe Atlantic</strong> while associated with Rose Lake... a documented role at the mining company. Rose Lake ownership of Ivanhoe Atlantic has not been independently established in this review.
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
                <p className="text-slate-600 text-sm">High-level U.S.–China and Washington weight... useful for critical-minerals narratives and institutional credibility.</p>
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
                <p className="text-slate-600 text-sm">Deep <strong>USDA / farm-bill</strong> context... often tied to hemp and cannabis regulatory angles in the upper Midwest.</p>
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

              {/* ── CORRECTED ADVISORS (April 2026 update — names verified against public sources) ── */}
              <div className="bg-slate-50 rounded-xl p-5 border border-amber-300">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-violet-800 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    AH
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Alex Hoffman</h4>
                    {/* TODO: credential line pending verification */}
                    <p className="text-slate-500 text-sm">Former counsel &amp; campaign finance attorney, Perkins Coie; DNC-adjacent work</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm">
                  Founder, <strong>C-Street Strategies</strong>; DNC Chief of Staff to National Finance Chair during Tom Perez era.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-5 border border-amber-300">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-500 to-rose-800 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    KM
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Keith Mestrich</h4>
                    {/* TODO: credential line pending verification */}
                    <p className="text-slate-500 text-sm">Former President &amp; CEO, Amalgamated Bank (2014–2020)</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm">
                  Brings <strong>labor-aligned financial institution</strong> background and Democratic donor-network credibility to the advisory bench.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-5 border border-amber-300">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-sky-800 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    JP
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Justin Pratt</h4>
                    {/* TODO: credential line pending verification */}
                    <p className="text-slate-500 text-sm">Former Senate staff; founder, Pratt Policy</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm">
                  Senate legislative background adds <strong>upper-chamber access</strong> to the firm&apos;s advisory profile.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-5 border border-amber-300">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    SH
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Sheila Healy</h4>
                    {/* TODO: credential line pending verification */}
                    <p className="text-slate-500 text-sm">Former Chief of Staff to Rep. Nick Joe Rahall II (D-WV)</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm">
                  Deep <strong>House member-relations</strong> experience; former Rahall CoS during his long tenure on House Natural Resources and Transportation.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-5 border border-amber-300">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-800 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    WD
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">William &quot;Bill&quot; Derrough</h4>
                    {/* TODO: credential line pending verification */}
                    <p className="text-slate-500 text-sm">Former Treasurer, Democratic National Committee (2017–2021); Co-Head, Recapitalization &amp; Restructuring, Moelis &amp; Company</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm">
                  High-level <strong>DNC finance authority</strong> and restructuring expertise; ties to party leadership during the Perez chairmanship.
                </p>
              </div>
              {/* ── END CORRECTED ADVISORS ── */}
            </div>
          </div>

          {/* Related entities */}
          <div className="mt-14">
            <h3 className="text-xl font-semibold text-slate-900 mb-4 text-center">Related entities (public records &amp; litigation)</h3>
            <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto text-sm">
              Rose Lake sits at the center of a cluster of LLCs and funds named in civil cases and press coverage... not a single ticker, but a web of vehicles.
            </p>
            <div role="region" aria-label="Related entities table; scroll horizontally for more columns" tabIndex={0} className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full min-w-[640px] text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white text-left">
                    <th scope="col" className="px-4 py-3 font-semibold">Entity</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Jurisdiction / focus</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Notes</th>
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
                  <p className="text-slate-500 text-xs uppercase tracking-wide mb-1">2024 Original Disclosure</p>
                  <p className="text-red-600 font-bold text-xl">$5M - $25M</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">The International Transfer Lead</h3>
              <p className="text-slate-700">Hailer&apos;s declaration in the Epic! Creations bankruptcy describes $11.25 million in incoming wires to Rose Lake Inc. The exact recipient, dates, source and requested return route are set out below.</p>
              <a href="#transfers" className="inline-block mt-4 text-red-700 font-semibold underline">Examine the transfer record →</a>
            </div>
          </div>
        </div>
      </section>

      <TransferEvidence />

      <section className="py-20 px-4 sm:px-6 lg:px-8" id="papertiger">
        <div className="max-w-5xl mx-auto">
          <p className="text-red-700 text-sm font-semibold text-center uppercase mb-3">Disclosure analysis · Updated October 13, 2026</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-4 text-center">From Millions in Assets to “None”</h2>
          <p className="text-slate-600 mb-8 max-w-3xl mx-auto text-center">The amendment changes both the asset values and the income figures. Each filing must be read for its own reporting year.</p>
          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm text-slate-600 mb-2">2024 original · Filed May 14, 2025</p>
              <h3 className="text-xl font-bold mb-3">$6–30 million in business asset ranges</h3>
              <p className="text-sm text-slate-700">Rose Lake: $5,000,001–$25,000,000. eStCru: $1,000,001–$5,000,000. These were reported asset brackets, not an exact household net-worth calculation.</p>
              <a href={sources.original.href} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-red-700 underline text-sm">Original disclosure (PDF)</a>
            </div>
            <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-6">
              <p className="text-sm text-red-800 mb-2">2024 amendment · Filed March 26, 2026</p>
              <h3 className="text-xl font-bold mb-3">Both business asset values: None</h3>
              <p className="text-sm text-slate-700">Rose Lake partnership income: $100,001–$1,000,000. eStCru partnership income: $2,501–$5,000. The earlier Rose Lake entry reported no income.</p>
              <a href={sources.amendment.href} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-red-700 underline text-sm">Amended disclosure (PDF)</a>
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 p-6 space-y-3 text-slate-700">
            <h3 className="font-semibold text-lg">Latest annual filing: calendar year 2025</h3>
            <p>The May 13, 2026 filing again lists both business asset values as None. It reports no Rose Lake partnership income and $201–$1,000 from eStCru for 2025.</p>
            <p>Omar&apos;s office attributed the earlier valuations to an accounting error involving liabilities. The revised filing does not identify the payers behind the 2024 partnership income. It does not establish that the $11.25 million received by Rose Lake Inc. became Mynett&apos;s income.</p>
            <a href={sources.annual.href} target="_blank" rel="noopener noreferrer" className="inline-block text-red-700 underline">2025 annual disclosure (PDF)</a>
          </div>
          <p className="mt-6 text-sm text-slate-600">Reporting supported by a reproduced California filing says eStCru filed for termination on April 4, 2026, nine days after the disclosure amendment. <a href={sources.winery.href} target="_blank" rel="noopener noreferrer" className="text-red-700 underline">Read the filing coverage</a>.</p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white" id="conflict">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6 text-center">The Questions the Records Leave Open</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { title: "Source and destination of funds", text: "The transfer declaration identifies incoming wires and a requested return route. The actual outbound movements, retained fees and intercompany transfers require bank records." },
              { title: "Partnership income", text: "The amended filing adds $100,001–$1 million in Rose Lake income for 2024. The exact amount, payers and supporting accounts remain documentary questions." },
              { title: "Committee timeline", text: "Omar currently serves on Education and the Workforce and Budget. Her former Foreign Affairs role must be distinguished from her current assignments." },
              { title: "Ivanhoe ownership", text: "Earlier versions inferred Rose Lake ownership from advisor connections. This review has not established a Rose Lake stake in Ivanhoe Atlantic; a shareholder record or agreement is needed." },
            ].map(item => <div key={item.title} className="rounded-xl bg-white/5 border border-white/10 p-6"><h3 className="text-lg font-semibold mb-3">{item.title}</h3><p className="text-slate-300 text-sm leading-relaxed">{item.text}</p></div>)}
          </div>
          <a href={sources.committees.href} target="_blank" rel="noopener noreferrer" className="inline-block mt-6 text-red-300 underline">Current official committee assignments</a>
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
              Historical congressional correspondence raised concerns about Ivanhoe Atlantic and Chinese interests. This separate mining-policy issue does not establish Rose Lake ownership.
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
                  <span className="text-slate-300"><strong className="text-white">Ivanhoe Atlantic</strong> (Rose Lake ownership unverified) is majority owned by <strong className="text-white">I-Pulse Inc.</strong></span>
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
              Moolenaar&apos;s inquiry focuses on a <strong className="text-white">$1.8 billion rail and mining project</strong> in Guinea and Liberia, endorsed by the U.S. Embassy in Liberia, related to Guinea and Liberia’s mining and rail infrastructure.
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
                  <h3 className="font-semibold text-slate-900 mb-2">Wine investment ...  Mohd v. eStCru (allegations)</h3>
                  <p className="text-slate-600 text-sm mb-3">
                    California Superior Court case <strong>No. 23-CV010043</strong> (Naeem Mohd v. eStCru LLC et al.): plaintiff alleges a <strong>$300,000</strong> investment with a contract calling for a <strong>200% return within 18 months</strong>; principal was reportedly returned while profit remained disputed.
                  </p>
                  <p className="text-red-700 text-sm font-medium">A May 2026 follow-up reports that Mohd dropped the lawsuit in November 2024 after a settlement and payment. Settlement does not establish the truth of the original allegations.</p>
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
                  <h3 className="font-semibold text-slate-900 mb-2">Cannabis fund ...  Badlands / eSt (allegations)</h3>
                  <p className="text-slate-600 text-sm mb-3">
                    Investors filed in <strong>Hennepin County, Minnesota</strong>, alleging that roughly <strong>$3.5 million</strong> raised for South Dakota cannabis operations was not deployed or returned as promised. Complaints describe an <strong>OFAC freeze</strong> explanation that plaintiffs dispute.
                  </p>
                  <p className="text-red-700 text-sm font-medium">The cannabis dispute was settled in 2024, with a final $1.2 million payment reported by August 1. The alleged OFAC hold has not been independently confirmed.</p>
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
                  <p className="text-slate-600 text-sm mb-3">The February 2026 Oversight letter challenged a historical $60 billion assets-under-management website claim and requested regulatory filings and financial records.</p>
                  <p className="text-amber-700 text-sm font-medium">The reviewed public records do not reconcile that marketing figure with assets directly managed by the firm. The underlying calculation remains unverified.</p>
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
                  <h3 className="font-semibold text-slate-900 mb-2">Epic! Creations / Byju’s bankruptcy record</h3>
                  <p className="text-slate-600 text-sm mb-3">
                    The identified primary document is Hailer&apos;s November 20, 2024 declaration in <strong>Epic! Creations, case 24-11161-BLS, docket 314</strong>. It describes the Rose Lake Inc. transfers and his dealings with Byju Raveendran.
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

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-6">Federal and Congressional Status</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-xl bg-white/5 border border-white/10 p-6">
              <p className="text-red-300 text-sm mb-2">October 13, 2026 · Reported public statement</p>
              <h3 className="text-xl font-semibold mb-3">Pirro announces federal scrutiny</h3>
              <p className="text-slate-300 text-sm">U.S. Attorney Jeanine Pirro said her office is investigating Omar&apos;s financial disclosures. The public announcement establishes an investigation, not a finding of wrongdoing.</p>
              <a href={sources.federal.href} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-red-300 underline">Read the reporting</a>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-6">
              <p className="text-red-300 text-sm mb-2">September 9, 2026 · Watchdog recommendation reported</p>
              <h3 className="text-xl font-semibold mb-3">OCC recommends dismissal</h3>
              <p className="text-slate-300 text-sm">Reporting says the Office of Congressional Conduct voted 5–1 to recommend dismissal of the disclosure allegations. This recommendation is separate from the federal investigation. A final House Ethics disposition has not been established in this review.</p>
              <a href={sources.watchdog.href} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-red-300 underline">Read the watchdog reporting</a>
            </div>
          </div>
          <a href="/updates" className="inline-block mt-6 font-semibold text-red-300 underline">View the dated update history →</a>
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
                { label: "House Clerk ...  2024 financial disclosure (PDF)", href: "https://disclosures-clerk.house.gov/public_disc/financial-pdfs/2024/10068415.pdf" },
                { label: "House Clerk ...  2023 financial disclosure (PDF)", href: "https://disclosures-clerk.house.gov/public_disc/financial-pdfs/2023/10060937.pdf" },
                { label: "House Clerk ...  2022 financial disclosure (PDF)", href: "https://disclosures-clerk.house.gov/public_disc/financial-pdfs/2022/10053193.pdf" },
                { label: "Fox News ...  coverage of disclosure / net worth reporting", href: "https://www.foxnews.com/politics/omars-net-worth-jumps-much-30m-new-disclosure-claiming-not-millionaire" },
                { label: "Wine-Searcher ...  eStCru / investment dispute reporting", href: "https://www.wine-searcher.com/m/2024/06/congresswomans-husband-in-alleged-wine-fraud" },
                { label: "American Experiment ...  South Dakota cannabis litigation context", href: "https://www.americanexperiment.org/ilhan-omars-current-husband-linked-to-south-dakota-weed-lawsuit/" },
                { label: "Mining Weekly ...  U.S. lawmaker concerns re Ivanhoe Atlantic & China", href: "https://www.miningweekly.com/article/us-lawmaker-raises-concerns-about-miner-ivanhoe-atlantics-ties-with-china-2025-12-10" },
                { label: "Ivanhoe Atlantic ...  corporate overview", href: "https://ivanhoeatlantic.com/about-us/" },
                { label: "Mining Technology ...  ASX IPO coverage", href: "https://www.mining-technology.com/news/ivanhoe-atlantic-australian-ipo/" },
                { label: "Sharecafe ...  railway / access reporting", href: "https://www.sharecafe.com.au/2025/12/19/ivanhoe-atlantic-secures-key-railway-approval/" },
                { label: "Australian Mining Review ...  IPO timing coverage", href: "https://australianminingreview.com.au/news/ivanhoe-delays-asx-ipo/" },
                { label: "St. Louis American ...  political response citing Reformer reporting", href: "https://www.stlamerican.com/online-features/press-releases/don-samuels-responds-to-minnesota-reformer-article-detailing-self-dealing-missing-funds-and-lack-of-transparency-by-his-opponent-rep-ilhan-omar-and-her-husband-tim-mynett/" },
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

            <div className="mt-8 pt-6 border-t-2 border-amber-400">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">October 13, 2026 Update Sources</h3>
              <ul className="space-y-3 text-sm">
                {Object.values(sources).map(source => <li key={source.href}><a href={source.href} target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-red-700 underline underline-offset-2">{source.label}</a></li>)}
              </ul>
              <p className="text-xs text-slate-600 mt-4">Court filings contain witness statements and allegations. News reports and company statements are labeled in the source descriptions. Review date: October 13, 2026.</p>
            </div>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
}
