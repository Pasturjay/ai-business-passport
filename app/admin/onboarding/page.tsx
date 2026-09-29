"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ModusAdminOnboardingPage() {
  const router = useRouter();
  const [authCode, setAuthCode] = useState("MODUS-ADMIN-2026");
  const [staffName, setStaffName] = useState("Super Admin");
  const [staffRole, setStaffRole] = useState("Platform Super Admin & Revenue Lead");
  const [isAuthValid, setIsAuthValid] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleVerifyAndLaunch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authCode.trim()) {
      setIsAuthValid(false);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      router.push("/admin/revenue");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 flex flex-col justify-between py-8 px-4">
      <div className="mx-auto max-w-lg w-full space-y-8 my-auto">
        {/* Top Branding Header */}
        <div className="text-center space-y-3">
          <div className="mx-auto h-12 w-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-400 flex items-center justify-center font-black text-slate-950 text-2xl shadow-xl shadow-amber-500/20">
            M
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="font-extrabold text-2xl tracking-tight text-white">admin.modus.ng</span>
            <span className="text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
              Operations Control
            </span>
          </div>
          <p className="text-xs text-slate-400">
            Secure Administrator &amp; Staff Authorization Portal
          </p>
        </div>

        {/* Security Form Card */}
        <form onSubmit={handleVerifyAndLaunch} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
          <div>
            <h2 className="text-lg font-bold text-white">Super Admin Verification</h2>
            <p className="text-xs text-slate-400 mt-1">
              Enter your Modus Operations security key to unlock platform financials, take-rate logs, and sublet escrow queues.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Master Authorization Security Key</label>
              <input
                type="password"
                value={authCode}
                onChange={(e) => setAuthCode(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm font-mono text-amber-400 tracking-wider focus:border-amber-500 outline-none"
                placeholder="Enter security key..."
              />
              {!isAuthValid && (
                <span className="text-[11px] font-bold text-red-400 mt-1 block">
                  Invalid authorization security key.
                </span>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Staff Member Name</label>
              <input
                type="text"
                value={staffName}
                onChange={(e) => setStaffName(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm font-semibold text-white focus:border-amber-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Assigned Administrative Role</label>
              <select
                value={staffRole}
                onChange={(e) => setStaffRole(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-xs font-semibold text-white focus:border-amber-500 outline-none"
              >
                <option value="Platform Super Admin & Revenue Lead">Platform Super Admin &amp; Revenue Lead</option>
                <option value="Compliance Review Specialist">Compliance Review Specialist</option>
                <option value="Partner Network Escrow Manager">Partner Network Escrow Manager</option>
                <option value="Support & Concierge Lead">Support &amp; Concierge Lead</option>
              </select>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 space-y-1">
            <div className="font-bold flex items-center gap-1.5">
              <span>🔒 256-Bit Authenticated Console</span>
            </div>
            <p className="text-[11px] text-amber-200/80">
              Actions performed in `admin.modus.ng` are cryptographically audited and recorded in Modus System Logs.
            </p>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl bg-amber-500 py-3.5 text-xs font-bold text-slate-950 shadow-lg shadow-amber-500/20 hover:bg-amber-400 transition-all flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <span>Authenticating Session...</span>
            ) : (
              <span>Unlock Admin Console &amp; Launch Revenue Dashboard &rarr;</span>
            )}
          </button>
        </form>

        <div className="text-center text-xs">
          <Link href="/onboarding" className="text-slate-500 hover:text-slate-300">
            &larr; Switch Onboarding Hub
          </Link>
        </div>
      </div>
    </div>
  );
}
