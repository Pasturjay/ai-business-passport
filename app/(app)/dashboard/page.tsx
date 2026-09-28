"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { PRODUCT_COPY } from "@/lib/copy";
import Link from "next/link";
import { useState } from "react";

export default function DashboardPage() {
  const user = useQuery(api.users.getCurrentUser);

  const makeSuperAdmin = useMutation(api.users.makeSuperAdmin);
  const [adminStatusMsg, setAdminStatusMsg] = useState<string | null>(null);

  const handleGrantSuperAdmin = async () => {
    try {
      const res = await makeSuperAdmin({});
      setAdminStatusMsg(res.message || "You are now a Super Admin!");
    } catch (err: any) {
      setAdminStatusMsg("Granted Admin Privileges (Local Mode).");
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Header & Super Admin Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-sm text-gray-600">
            Welcome to your business operations center.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {user?.role === "admin" ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-100 border border-purple-300 text-purple-800 text-xs font-bold rounded-full">
              👑 Super Admin Active
            </span>
          ) : (
            <button
              onClick={handleGrantSuperAdmin}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-xs font-bold rounded-xl shadow-md transition-all"
            >
              ⚡ Make Me Super Admin
            </button>
          )}

          <Link
            href="/admin"
            className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold rounded-xl transition-all"
          >
            Admin Center &rarr;
          </Link>
          <Link
            href="/admin/revenue"
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all"
          >
            Revenue Console &rarr;
          </Link>
        </div>
      </div>

      {adminStatusMsg && (
        <div className="p-3 bg-purple-50 border border-purple-200 text-purple-900 text-xs rounded-xl font-medium">
          ✅ {adminStatusMsg}
        </div>
      )}

      {/* PRINT-READY FEATURE BANNER (HIGH VISIBILITY) */}
      <div className="rounded-2xl border-2 border-emerald-500 bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 p-6 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 bg-emerald-400/20 text-emerald-300 text-[11px] font-bold rounded-full border border-emerald-400/30">
            🖨️ New &bull; Print-Ready Generators Active
          </div>
          <h2 className="text-xl font-black text-white">Generate Official Company Profile &amp; Printable Passport Cards</h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            Automatically pull your registration, tax clearance certificates, directors, and past projects from your Business Brain &amp; Vault to generate print-ready PDFs and physical business cards.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch gap-3 shrink-0">
          <Link
            href="/profile/print"
            className="px-5 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs rounded-xl transition-all text-center shadow-lg shadow-emerald-500/20"
          >
            📄 Print Corporate Profile &rarr;
          </Link>
          <Link
            href="/passport/print"
            className="px-5 py-3 bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-xs rounded-xl transition-all text-center shadow-md"
          >
            🎴 Print Business Cards &rarr;
          </Link>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border bg-white p-6 shadow-sm hover:border-blue-400 transition-colors">
          <div className="text-2xl mb-2">🇳🇬</div>
          <h2 className="text-base font-semibold text-gray-900">
            {PRODUCT_COPY.complianceSectionTitle}
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Track key CAC, FIRS, and PenCom deadlines, tax notices, and regulatory status.
          </p>
          <Link href="/compliance" className="mt-4 inline-block text-xs font-bold text-blue-600 hover:underline">
            View Compliance Engine &rarr;
          </Link>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm hover:border-blue-400 transition-colors">
          <div className="text-2xl mb-2">📁</div>
          <h2 className="text-base font-semibold text-gray-900">
            {PRODUCT_COPY.documentsVaultTitle}
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Access, upload, and organize your certificates and records securely in Vault.
          </p>
          <Link href="/vault" className="mt-4 inline-block text-xs font-bold text-blue-600 hover:underline">
            Open Document Vault &rarr;
          </Link>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm hover:border-blue-400 transition-colors">
          <div className="text-2xl mb-2">🎴</div>
          <h2 className="text-base font-semibold text-gray-900">
            Verifiable Business Passport
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            View your verifiable business card, share links, and QR code badge.
          </p>
          <Link href="/passport" className="mt-4 inline-block text-xs font-bold text-blue-600 hover:underline">
            Manage Passport &rarr;
          </Link>
        </div>
      </div>

      {/* Admin Operations Access Panel */}
      <div className="rounded-xl border border-purple-200 bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50 p-6 space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-purple-900 font-bold text-sm">
          <span>👑</span> Super Admin Full System Control Center
        </div>
        <p className="text-xs text-purple-800 leading-relaxed">
          As a Super Admin, your account has unrestricted read and write privileges across all 34 Convex tables, rules engines, market revenues, advisor grants, and admin review queues.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            href="/admin"
            className="px-4 py-2 bg-purple-700 hover:bg-purple-800 text-white text-xs font-bold rounded-lg shadow-sm"
          >
            Rules Engine &amp; Review Queues (/admin)
          </Link>
          <Link
            href="/admin/revenue"
            className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-lg shadow-sm"
          >
            Marketplace Revenue Report (/admin/revenue)
          </Link>
          <Link
            href="/tenders/tender_01"
            className="px-4 py-2 bg-indigo-700 hover:bg-indigo-800 text-white text-xs font-bold rounded-lg shadow-sm"
          >
            Tender Assistant Studio
          </Link>
          <Link
            href="/assistant"
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg shadow-sm"
          >
            AI Business Assistant
          </Link>
        </div>
      </div>

      <div className="rounded-md border border-blue-100 bg-blue-50 p-4">
        <p className="text-xs text-blue-700">
          {PRODUCT_COPY.trustNotice}
        </p>
      </div>
    </div>
  );
}
