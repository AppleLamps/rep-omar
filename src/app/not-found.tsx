import Link from "next/link";

export default function NotFound() {
  return <main id="main-content" tabIndex={-1} className="page-container min-h-[65vh] pb-16 pt-32 xl:pt-44"><p className="eyebrow text-red-800">404 · Page not found</p><h1 className="section-title mt-4">Return to the money trail</h1><p className="mt-5 max-w-xl text-slate-600">That page is unavailable. The investigation, source records and update history are below.</p><div className="mt-7 flex flex-wrap gap-4"><Link href="/" className="primary-button">Read the investigation</Link><Link href="/updates" className="source-link flex min-h-11 items-center text-red-800">Latest updates</Link></div></main>;
}
