import Link from "next/link";
import Script from "next/script";
import { InstallPrompt } from "@/components/pwa/InstallPrompt";

export default function MarketingHomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI Business Passport",
    "operatingSystem": "Web, Android, iOS",
    "applicationCategory": "BusinessApplication",
    "description": "Nigeria's simple AI platform for CAC registration, FIRS tax compliance, document creation, and business verification.",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "NGN",
      "lowPrice": "0",
      "highPrice": "25000",
      "offerCount": "4"
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans antialiased">
      {/* Structured Data JSON-LD */}
      <Script
        id="structured-data-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top Banner Notice */}
      <div className="bg-emerald-800 text-white text-xs py-2 px-4 text-center font-medium">
        🇳🇬 Built specifically for Nigerian Business Owners, Artisans, Contractors &amp; Startups.
      </div>

      {/* Header Navigation */}
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center font-black text-white text-xl shadow-md shadow-emerald-600/20">
              P
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900 block">
                AI Business Passport
              </span>
              <span className="text-[11px] text-emerald-700 font-medium">Verified Nigerian Business Platform</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#how-it-works" className="hover:text-emerald-700 transition-colors">How It Works</a>
            <a href="#benefits" className="hover:text-emerald-700 transition-colors">What You Get</a>
            <a href="#who-its-for" className="hover:text-emerald-700 transition-colors">Who It&apos;s For</a>
            <a href="#pricing" className="hover:text-emerald-700 transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-emerald-700 transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="min-h-[44px] inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl transition-all shadow-md shadow-emerald-600/20 text-sm"
            >
              Open Dashboard
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white via-emerald-50/50 to-slate-50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-100 border border-emerald-200 rounded-full text-xs font-bold text-emerald-800">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse"></span>
            Simple &bull; Automated &bull; 100% Guaranteed
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Run Your Nigerian Business Without <span className="text-emerald-600 underline decoration-emerald-300 underline-offset-4">CAC, Tax, or Tender</span> Stress.
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Tell us about your business once. We help you stay updated with CAC &amp; FIRS taxes, generate official contracts and tender bids, and prove your business is 100% genuine.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/dashboard"
              className="w-full sm:w-auto min-h-[52px] px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl transition-all shadow-lg shadow-emerald-600/25 text-base flex items-center justify-center gap-2"
            >
              Start Free Business Passport
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            <a
              href="#how-it-works"
              className="w-full sm:w-auto min-h-[52px] px-8 py-3.5 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-bold rounded-xl transition-all text-base flex items-center justify-center shadow-sm"
            >
              See How It Works
            </a>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-500">
            <span className="flex items-center gap-1.5"><span className="text-emerald-600 font-bold">✓</span> No credit card required</span>
            <span className="flex items-center gap-1.5"><span className="text-emerald-600 font-bold">✓</span> Free forever plan</span>
            <span className="flex items-center gap-1.5"><span className="text-emerald-600 font-bold">✓</span> CAC &amp; FIRS automated alerts</span>
          </div>
        </div>
      </section>

      {/* 3-Step How It Works Section */}
      <section id="how-it-works" className="py-16 px-4 sm:px-6 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              How It Works in 3 Easy Steps
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              You don&apos;t need any technical or legal experience. Anyone can do it in minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-4 relative">
              <div className="w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center font-black text-lg">
                1
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Enter Your Business Details
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Provide your CAC RC/BN number, tax TIN, or simple company information once. We organize everything safely for you.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-4 relative">
              <div className="w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center font-black text-lg">
                2
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Get Automatic Compliance Reminders
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Never get penalized again. Get WhatsApp and SMS reminders 30 days before CAC annual returns, FIRS, or PenCom payments are due.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-4 relative">
              <div className="w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center font-black text-lg">
                3
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Generate Documents &amp; Win Contracts
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Create official contracts, invoices, and proposals in seconds, check bid readiness for government/corporate tenders, and print verified cards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features / Benefits */}
      <section id="benefits" className="py-16 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Everything Your Business Needs to Grow
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Built specifically for Nigerian business regulations (CAC, FIRS, LIRS, SCUML, PENCOM, NSITF, ITF).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
              <div className="text-3xl">🇳🇬</div>
              <h3 className="font-bold text-slate-900 text-base">CAC &amp; Tax Tracker</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Automatic deadline alerts for CAC annual returns, FIRS VAT/WHT, PenCom, and SCUML so you avoid heavy fine penalties.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
              <div className="text-3xl">📁</div>
              <h3 className="font-bold text-slate-900 text-base">Secure Document Vault</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Keep all your business certificates, receipts, tax clearances, and IDs safely stored and accessible anywhere.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
              <div className="text-3xl">🎴</div>
              <h3 className="font-bold text-slate-900 text-base">Verifiable Passport Card</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Show clients and partners a verified QR badge proving your business is legitimate and registered.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
              <div className="text-3xl">📄</div>
              <h3 className="font-bold text-slate-900 text-base">Document &amp; Tender Assistant</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Create contracts, service agreements, and proposal bids instantly. Audit tenders to see if you meet all qualification criteria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section id="who-its-for" className="py-16 px-4 sm:px-6 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Who Uses AI Business Passport?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Designed for every type of Nigerian entrepreneur and business owner.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-emerald-800 text-base">🛍️ Shops &amp; Boutiques</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Retail stores, restaurants, fashion brands, and logistics operators keeping their records and tax status clean.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-emerald-800 text-base">🏗️ Contractors &amp; Suppliers</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Construction, ICT, and procurement businesses preparing proposals, bids, and compliance docs for tenders.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-emerald-800 text-base">👨‍💼 Professional Services</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Lawyers, accountants, consultants, and agencies managing client contracts and verifiable identity cards.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-emerald-800 text-base">🚀 New Founders</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Early-stage startups getting guidance on CAC registration, business structure, and initial setup requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Simple, Affordable Pricing
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Start for free. Upgrade as your business grows. No hidden charges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl space-y-6 flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900">Free Plan</h3>
                <div className="text-3xl font-black text-slate-900">₦0 <span className="text-xs font-normal text-slate-500">/ forever</span></div>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> Basic Business Passport Profile</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> Compliance Deadline Tracker</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> Business Vault Document Storage</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> Business Idea Assistant</li>
                </ul>
              </div>
              <Link href="/dashboard" className="min-h-[44px] w-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold py-2.5 rounded-xl text-center block text-sm border border-slate-300">
                Get Started Free
              </Link>
            </div>

            {/* Plus */}
            <div className="bg-white border-2 border-emerald-600 p-6 rounded-2xl space-y-6 flex flex-col justify-between relative shadow-md">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white font-bold text-[10px] uppercase tracking-wider px-3 py-0.5 rounded-full">
                Most Popular
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-emerald-800">Plus Plan</h3>
                <div className="text-3xl font-black text-slate-900">₦5,000 <span className="text-xs font-normal text-slate-500">/ month</span></div>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> Everything in Free</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> Verified QR Badge &amp; Share Link</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> Automated WhatsApp &amp; SMS Reminders</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> Document Intelligence OCR Scanner</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> Printable Business Cards Generator</li>
                </ul>
              </div>
              <Link href="/dashboard" className="min-h-[44px] w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl text-center block text-sm shadow-md">
                Start Plus Plan
              </Link>
            </div>

            {/* Pro */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl space-y-6 flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900">Pro Plan</h3>
                <div className="text-3xl font-black text-slate-900">₦15,000 <span className="text-xs font-normal text-slate-500">/ month</span></div>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> Everything in Plus</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> Full Document Studio (Contracts &amp; Proposals)</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> Tender Readiness Checker &amp; Scoring</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> Industry Template Packs</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> NFC Business Card Integration</li>
                </ul>
              </div>
              <Link href="/dashboard" className="min-h-[44px] w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 rounded-xl text-center block text-sm">
                Start Pro Plan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Simple FAQ */}
      <section id="faq" className="py-16 px-4 sm:px-6 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-600 text-sm">Simple answers in plain Nigerian business language.</p>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-1.5">
              <h3 className="font-bold text-slate-900 text-base">What is a Business Passport?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                It is your official digital business profile. It shows your CAC registration, tax status, contact details, and a verified QR badge that proves your business is genuine and active.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-1.5">
              <h3 className="font-bold text-slate-900 text-base">How do I avoid CAC or FIRS tax penalties?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We track all your key deadlines automatically. Our system sends you friendly WhatsApp and email notifications 30 days before any annual returns or taxes are due.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-1.5">
              <h3 className="font-bold text-slate-900 text-base">Can I create contracts or proposals with this?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Yes! Choose a template (services contract, quotation, invoice, or tender proposal), fill in basic details, and download a ready-to-use document in PDF or Word format.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-1.5">
              <h3 className="font-bold text-slate-900 text-base">Is it really free to start?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Yes! You can create your basic Business Passport profile and compliance tracker for free without entering any card details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 sm:px-6 border-t border-slate-200 bg-slate-900 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-semibold text-slate-200">AI Business Passport &copy; 2026</p>
            <p className="mt-1 text-slate-400">Nigeria&apos;s AI-Powered Business Operating System.</p>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/trust" className="hover:text-emerald-400 transition-colors">Trust &amp; Compliance</Link>
            <Link href="/explainers" className="hover:text-emerald-400 transition-colors">Business Guides</Link>
          </div>
        </div>
      </footer>

      {/* PWA Install Prompt Banner */}
      <InstallPrompt />
    </div>
  );
}
