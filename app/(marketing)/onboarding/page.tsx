"use client";

import Link from "next/link";
import { useState } from "react";

export default function ModusOnboardingHubPage() {
  const [selectedExtension, setSelectedExtension] = useState<"app" | "partner" | "admin">("app");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950 flex flex-col justify-between">
      {/* Top Navbar */}
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur-md sticky top-0 z-50 px-4 sm:px-8 py-4">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center font-black text-slate-950 text-xl shadow-lg shadow-emerald-500/20">
              M
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-white">MODUS</span>
                <span className="text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Onboarding Hub
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">modus.ng ecosystem</p>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-xs font-semibold text-slate-400 hover:text-white transition-colors"
            >
              &larr; Back to Main Site
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-5xl px-4 py-12 sm:py-16 w-full space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
            ⚡ Select Your Ecosystem Portal
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Welcome to Modus
          </h1>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Choose your onboarding path below to set up your dedicated workspace on the Modus network.
          </p>
        </div>

        {/* Portal Extension Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* App Extension Card */}
          <div
            onClick={() => setSelectedExtension("app")}
            className={`cursor-pointer rounded-2xl border p-6 space-y-6 transition-all relative overflow-hidden flex flex-col justify-between ${
              selectedExtension === "app"
                ? "border-emerald-500 bg-slate-900 ring-2 ring-emerald-500/50 shadow-2xl shadow-emerald-500/10"
                : "border-slate-800 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-900/80"
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-emerald-400 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
                  app.modus.ng
                </span>
                <span className="text-xl">🏢</span>
              </div>
              <h2 className="text-xl font-bold text-white">Business Owner &amp; Founders</h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Register a new CAC company, stay 100% compliant, store corporate files in your Vault, and generate your 3D Modus Business Passport card.
              </p>

              <ul className="space-y-2 text-xs text-slate-300 font-medium">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span> Auto-populated CAC &amp; FIRS Vault
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span> Driver&apos;s License Style 3D ID Card
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span> Live Invoices &amp; Print Peripherals
                </li>
              </ul>
            </div>

            <Link
              href="/onboarding/user"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-xs font-bold text-white shadow-lg shadow-emerald-600/30 hover:bg-emerald-500 transition-all text-center"
            >
              Start Founder Onboarding &rarr;
            </Link>
          </div>

          {/* Partner Extension Card */}
          <div
            onClick={() => setSelectedExtension("partner")}
            className={`cursor-pointer rounded-2xl border p-6 space-y-6 transition-all relative overflow-hidden flex flex-col justify-between ${
              selectedExtension === "partner"
                ? "border-emerald-500 bg-slate-900 ring-2 ring-emerald-500/50 shadow-2xl shadow-emerald-500/10"
                : "border-slate-800 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-900/80"
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-blue-400 px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20">
                  partners.modus.ng
                </span>
                <span className="text-xl">⚖️</span>
              </div>
              <h2 className="text-xl font-bold text-white">Accredited Professionals</h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                For CAC Agents, NBA Lawyers, ICAN Accountants, and Tax Practitioners looking to offer services, take sublet tasks, and earn revenue.
              </p>

              <ul className="space-y-2 text-xs text-slate-300 font-medium">
                <li className="flex items-center gap-2">
                  <span className="text-blue-400 font-bold">✓</span> Direct Client Lead Allocation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400 font-bold">✓</span> Automated Task Escrow &amp; Payouts
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400 font-bold">✓</span> Accreditation Verification Badge
                </li>
              </ul>
            </div>

            <Link
              href="/onboarding/partner"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-xs font-bold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition-all text-center"
            >
              Start Partner Onboarding &rarr;
            </Link>
          </div>

          {/* Admin Extension Card */}
          <div
            onClick={() => setSelectedExtension("admin")}
            className={`cursor-pointer rounded-2xl border p-6 space-y-6 transition-all relative overflow-hidden flex flex-col justify-between ${
              selectedExtension === "admin"
                ? "border-emerald-500 bg-slate-900 ring-2 ring-emerald-500/50 shadow-2xl shadow-emerald-500/10"
                : "border-slate-800 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-900/80"
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-amber-400 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/20">
                  admin.modus.ng
                </span>
                <span className="text-xl">🛡️</span>
              </div>
              <h2 className="text-xl font-bold text-white">Platform Admin &amp; Staff</h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Super admin control panel for system metrics, take-rate analytics, compliance oversight, and platform revenue monitoring.
              </p>

              <ul className="space-y-2 text-xs text-slate-300 font-medium">
                <li className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">✓</span> Real-Time Financial Analytics
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">✓</span> Sublet Task Escrow Controls
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">✓</span> Multi-Factor Staff Auth
                </li>
              </ul>
            </div>

            <Link
              href="/admin/onboarding"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 px-4 py-3 text-xs font-bold text-slate-950 shadow-lg shadow-amber-600/30 hover:bg-amber-500 transition-all text-center"
            >
              Access Admin Setup &rarr;
            </Link>
          </div>
        </div>

        {/* Security & Speed Guarantee Footer Badge */}
        <div className="border border-slate-800 bg-slate-900/60 rounded-2xl p-6 text-center space-y-2 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 text-xs text-slate-400 font-mono">
            <span>🔒 256-Bit SSL Encrypted</span>
            <span>•</span>
            <span>⚡ Fast Edge Infrastructure</span>
            <span>•</span>
            <span>🇳🇬 Built for Nigeria</span>
          </div>
          <p className="text-xs text-slate-500">
            Modus Business Operating System (modus.ng) &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </main>

      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        Modus OS — app.modus.ng | partners.modus.ng | admin.modus.ng
      </footer>
    </div>
  );
}
