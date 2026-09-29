import Link from "next/link";
import Script from "next/script";
import { InstallPrompt } from "@/components/pwa/InstallPrompt";

export default function MarketingHomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Modus Business Operating System",
    operatingSystem: "Web, Mobile",
    applicationCategory: "BusinessApplication",
    url: "https://modus.ng",
    description: "Nigeria's intelligent business operating system for CAC compliance, 3D Business Passport credentials, realtime invoices, and legal/accounting partner subletting.",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "NGN",
      lowPrice: "0",
      highPrice: "35000",
      offerCount: "5"
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans antialiased selection:bg-emerald-500 selection:text-slate-950">
      {/* Structured Data JSON-LD */}
      <Script
        id="structured-data-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top Banner Notice */}
      <div className="bg-emerald-900/80 text-emerald-200 border-b border-emerald-800/60 text-xs py-2 px-4 text-center font-semibold">
        🇳🇬 MODUS — Nigeria&apos;s Intelligent Business Operating System &bull; <span className="underline">app.modus.ng</span> | <span className="underline">partners.modus.ng</span> | <span className="underline">admin.modus.ng</span>
      </div>

      {/* Header Navigation */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-emerald-600 to-teal-400 rounded-xl flex items-center justify-center font-black text-slate-950 text-xl shadow-lg shadow-emerald-500/20">
              M
            </div>
            <div>
              <span className="font-extrabold text-2xl tracking-tight text-white block">
                MODUS
              </span>
              <span className="text-[10px] text-emerald-400 font-mono tracking-wider uppercase block">
                Intelligent Business OS &bull; modus.ng
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-300">
            <a href="#portals" className="hover:text-emerald-400 transition-colors">Portals &amp; Extensions</a>
            <a href="#how-it-works" className="hover:text-emerald-400 transition-colors">How It Works</a>
            <a href="#benefits" className="hover:text-emerald-400 transition-colors">Modus Features</a>
            <Link href="/services" className="hover:text-emerald-400 transition-colors">Filings Marketplace</Link>
            <Link href="/professionals" className="hover:text-emerald-400 transition-colors">Partner Directory</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/onboarding"
              className="min-h-[44px] inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-emerald-600/30 text-xs"
            >
              Start Onboarding &rarr;
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs font-bold text-emerald-400">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Modus OS v2.5 &bull; Next-Gen Nigerian Business Infrastructure
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-tight">
            Run Your Nigerian Business on <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">Modus.</span>
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-xl text-slate-300 leading-relaxed font-normal">
            Modus is the complete business operating system. Automate CAC &amp; FIRS compliance, manage your document Vault, generate live 3D Passport Cards &amp; Invoices, and connect with accredited legal &amp; accounting partners.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/onboarding"
              className="w-full sm:w-auto min-h-[54px] px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold rounded-2xl transition-all shadow-xl shadow-emerald-600/30 text-sm flex items-center justify-center gap-2"
            >
              Launch Modus Ecosystem Onboarding
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            <Link
              href="/dashboard"
              className="w-full sm:w-auto min-h-[54px] px-8 py-4 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold rounded-2xl transition-all text-sm flex items-center justify-center shadow-sm"
            >
              Open Direct Workspace &rarr;
            </Link>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-400 font-mono">
            <span className="flex items-center gap-1.5"><span className="text-emerald-400 font-bold">✓</span> app.modus.ng (Founders)</span>
            <span className="flex items-center gap-1.5"><span className="text-emerald-400 font-bold">✓</span> partners.modus.ng (Accredited Network)</span>
            <span className="flex items-center gap-1.5"><span className="text-emerald-400 font-bold">✓</span> admin.modus.ng (Operations)</span>
          </div>
        </div>
      </section>

      {/* Domain Extensions Grid Section */}
      <section id="portals" className="py-16 px-4 sm:px-6 bg-slate-900 border-b border-slate-800">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              The Modus Domain Extensions
            </h2>
            <p className="text-slate-400 text-sm">
              Purpose-built portals designed for every stakeholder in the Nigerian business ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: app.modus.ng */}
            <div className="bg-slate-950 border border-slate-800 p-6 rounded-3xl space-y-6 flex flex-col justify-between hover:border-emerald-500/50 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-emerald-400 px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                    app.modus.ng
                  </span>
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-white">Business Owner App</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Automate CAC filings, store corporate documents in your Vault, generate live invoices &amp; proformas, and print Driver&apos;s License style 3D Business Cards.
                </p>
              </div>

              <Link
                href="/onboarding/user"
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl text-center transition-all shadow-md"
              >
                Onboard as Founder &rarr;
              </Link>
            </div>

            {/* Card 2: partners.modus.ng */}
            <div className="bg-slate-950 border border-slate-800 p-6 rounded-3xl space-y-6 flex flex-col justify-between hover:border-blue-500/50 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-blue-400 px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
                    partners.modus.ng
                  </span>
                  <span className="text-2xl">⚖️</span>
                </div>
                <h3 className="text-xl font-bold text-white">Accredited Partner Portal</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  For CAC Agents, NBA Lawyers, ICAN Accountants, and Tax Practitioners. Receive sublet compliance tasks, manage client requests, and receive automated payouts.
                </p>
              </div>

              <Link
                href="/onboarding/partner"
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl text-center transition-all shadow-md"
              >
                Onboard as Partner &rarr;
              </Link>
            </div>

            {/* Card 3: admin.modus.ng */}
            <div className="bg-slate-950 border border-slate-800 p-6 rounded-3xl space-y-6 flex flex-col justify-between hover:border-amber-500/50 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-amber-400 px-3 py-1 bg-amber-500/10 rounded-full border border-amber-500/20">
                    admin.modus.ng
                  </span>
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-white">Operations Control</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Super admin panel for real-time financial tracking, take-rate analytics, partner escrow monitoring, and platform compliance oversight.
                </p>
              </div>

              <Link
                href="/admin/onboarding"
                className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl text-center transition-all shadow-md"
              >
                Admin Authorization &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step How It Works Section */}
      <section id="how-it-works" className="py-16 px-4 sm:px-6 bg-slate-950 border-b border-slate-800">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              How Modus Operates in 3 Steps
            </h2>
            <p className="text-slate-400 text-sm">
              Simple, transparent, and built for rapid growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-4 relative">
              <div className="w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center font-black text-lg">
                1
              </div>
              <h3 className="text-lg font-bold text-white">
                Enter Your Business Info
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Provide your CAC RC/BN number, tax TIN, or simple company information once. Modus indexes your profile safely.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-4 relative">
              <div className="w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center font-black text-lg">
                2
              </div>
              <h3 className="text-lg font-bold text-white">
                Automated Reminders &amp; Vault
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Never miss CAC annual returns or tax filings. Get WhatsApp &amp; SMS alerts and keep your corporate files encrypted in your Vault.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-4 relative">
              <div className="w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center font-black text-lg">
                3
              </div>
              <h3 className="text-lg font-bold text-white">
                Generate 3D Cards &amp; Invoices
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Issue Driver&apos;s License style 3D Business Cards, live tax invoices, proformas, letterheads, and order one-off filings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PWA Install Prompt component */}
      <InstallPrompt />

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4 sm:px-6 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="w-6 h-6 bg-emerald-600 rounded-lg flex items-center justify-center font-black text-white text-xs">
                M
              </div>
              <span className="font-extrabold text-white text-base">MODUS</span>
            </div>
            <p className="text-slate-500 max-w-sm">
              Modus Business Operating System (modus.ng) &copy; {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 font-mono text-slate-400">
            <Link href="/onboarding/user" className="hover:text-emerald-400">app.modus.ng</Link>
            <Link href="/onboarding/partner" className="hover:text-emerald-400">partners.modus.ng</Link>
            <Link href="/admin/onboarding" className="hover:text-emerald-400">admin.modus.ng</Link>
            <Link href="/services" className="hover:text-emerald-400">Services</Link>
            <Link href="/professionals" className="hover:text-emerald-400">Professionals</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
