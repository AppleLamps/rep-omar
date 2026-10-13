import { sources } from "@/lib/investigation";

export default function TransferEvidence() {
  return (
    <section id="transfers" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-red-300 text-sm font-semibold uppercase tracking-wide mb-3">Court-record lead · Reviewed October 13, 2026</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">The $11.25 Million Transfer</h2>
        <p className="text-slate-300 mb-8 max-w-3xl">Hailer&apos;s November 20, 2024 declaration describes two incoming wires to Rose Lake Inc. in connection with an attempted acquisition of Byju&apos;s Term Loan B.</p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {[{ date: "June 21, 2024", amount: "$10,000,000" }, { date: "July 25, 2024", amount: "$1,250,000" }].map(wire => (
            <div key={wire.date} className="rounded-2xl bg-white/5 border border-white/15 p-6">
              <p className="text-slate-300 text-sm mb-2">{wire.date}</p>
              <p className="text-3xl font-bold text-red-300">{wire.amount}</p>
              <p className="text-slate-300 text-sm mt-2">Incoming wire described by Hailer</p>
            </div>
          ))}
        </div>
        <div className="space-y-4 text-slate-300 leading-relaxed">
          <p>He identifies the sender as <strong className="text-white">OCI Limited through Barclays in the UK</strong>. The funds were documented as a loan, represented to him as a fee, and later demanded back. He says Byju Raveendran instructed him to route the return through his wife Divya Gokulnath&apos;s account.</p>
          <p>These are Hailer&apos;s sworn statements. The declaration does not establish that the requested outbound transfer occurred or that Mynett personally received these funds. Rose Lake Inc. and the disclosed Rose Lake Capital LLC are separate named entities; their intercompany transactions require documentation.</p>
        </div>
        <a href={sources.declaration.href} target="_blank" rel="noopener noreferrer" className="inline-block mt-6 text-red-300 underline underline-offset-4">Read docket 314, pages 4–6 and 13–14 (PDF)</a>
        <p className="mt-5 text-sm text-slate-300">By August 1, 2024, reporting documented a final $1.2 million cannabis settlement payment by Hailer. Its timing follows the wires, but the reviewed documents do not connect the settlement to those funds. <a href={sources.settlements.href} target="_blank" rel="noopener noreferrer" className="text-red-300 underline">Settlement reporting</a>.</p>
        <div className="mt-8 rounded-xl border border-amber-400/30 bg-amber-400/10 p-5 text-sm text-amber-100">
          <strong>Next documentary questions:</strong> Where did the money go? Was it returned, retained or moved between entities? What was the source of Mynett&apos;s separately disclosed 2024 partnership income? Bank statements and transaction records are needed to answer these questions.
        </div>
      </div>
    </section>
  );
}
