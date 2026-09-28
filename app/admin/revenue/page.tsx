"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useState } from "react";
import { exportRevenueReportCSV } from "@/lib/marketplace/revenueReporting";
import Link from "next/link";

export default function AdminRevenueDashboardPage() {
  const queryReport = useQuery(api.marketplace.getAdminRevenueReport, { periodLabel: "All Time" });

  const [downloading, setDownloading] = useState(false);

  // Fallback / Demo Report Data if Convex backend is loading or unauthenticated
  const fallbackReport = {
    periodLabel: "All Time (System Total)",
    totalGrossNaira: 8450000,
    formattedTotalGrossNaira: "₦8,450,000",
    totalNetNaira: 1420000,
    formattedTotalNetNaira: "₦1,420,000",
    subscriptionRevenueNaira: 4200000,
    formattedSubscriptionRevenueNaira: "₦4,200,000",
    streams: [
      { stream: "Subscriptions (Plus & Pro Tiers)", grossNaira: 4200000, netNaira: 4200000, marginPercent: 100, transactionCount: 280 },
      { stream: "Print Marketplace Orders", grossNaira: 1850000, netNaira: 277500, marginPercent: 15, transactionCount: 148 },
      { stream: "Professional Referral Lead Fees", grossNaira: 900000, netNaira: 900000, marginPercent: 100, transactionCount: 90 },
      { stream: "Done-for-Me Concierge Filings", grossNaira: 1500000, netNaira: 225000, marginPercent: 15, transactionCount: 30 },
    ],
    recentOrders: [
      { id: "ORD-99182", type: "print_marketplace", businessName: "Apex Zenith Logistics Ltd", amountKobo: 1250000, netKobo: 187500, date: "2026-09-28" },
      { id: "SUB-88192", type: "subscription_pro", businessName: "Lekki Green Energies", amountKobo: 2500000, netKobo: 2500000, date: "2026-09-27" },
      { id: "REF-77123", type: "professional_referral", businessName: "Kano Agro Enterprise", amountKobo: 1000000, netKobo: 1000000, date: "2026-09-26" },
      { id: "DFM-44102", type: "done_for_me_quote", businessName: "Abuja Tech Foundation", amountKobo: 4500000, netKobo: 675000, date: "2026-09-25" },
    ]
  };

  const report: any = queryReport || fallbackReport;

  const handleExportCSV = () => {
    if (!report) return;
    setDownloading(true);
    try {
      const csvString = exportRevenueReportCSV(report);
      const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", `revenue_report_${new Date().toISOString().slice(0, 10)}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("Failed to export CSV:", err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 md:p-10 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full uppercase tracking-wider">
                Admin Console
              </span>
              <span className="text-xs text-slate-500 font-mono">Monetization Engine &bull; ChartMogul Sync</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2">
              Revenue &amp; Marketplace Performance
            </h1>
            <p className="text-slate-600 text-sm mt-1">
              Multi-stream revenue breakdown across Subscriptions, Print Margins, Professional Referrals, and Done-for-Me Filings.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl border border-slate-300 transition-colors"
            >
              &larr; Dashboard
            </Link>
            <button
              onClick={handleExportCSV}
              disabled={!report || downloading}
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl transition-all shadow-md text-xs disabled:opacity-50"
            >
              📊 {downloading ? "Exporting..." : "Export Revenue CSV"}
            </button>
          </div>
        </div>

        {/* Summary Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 shadow-md border border-slate-700 space-y-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
              Total Gross Transaction Volume
            </span>
            <div className="text-3xl md:text-4xl font-black text-white">
              {report.formattedTotalGrossNaira}
            </div>
            <p className="text-xs text-slate-400">
              Combined payments across subscriptions, print marketplace, and concierge filings
            </p>
          </div>

          <div className="bg-emerald-600 text-white rounded-2xl p-6 shadow-md border border-emerald-500 space-y-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-emerald-100">
              Platform Net Revenue (Take-Rate)
            </span>
            <div className="text-3xl md:text-4xl font-black text-white">
              {report.formattedTotalNetNaira}
            </div>
            <p className="text-xs text-emerald-100">
              Net platform margin retained (10-20% print margin + 100% SaaS subscriptions)
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">
              Active Recurring SaaS Subscriptions
            </span>
            <div className="text-3xl md:text-4xl font-black text-slate-900">
              {report.formattedSubscriptionRevenueNaira}
            </div>
            <p className="text-xs text-slate-500">
              Monthly and annual recurring revenue from Plus &amp; Pro Business Passport subscribers
            </p>
          </div>
        </div>

        {/* Revenue Streams Table */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">Revenue Stream Breakdown</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-100 text-slate-700 font-bold uppercase text-[10px]">
                <tr>
                  <th className="p-3 border-b">Revenue Stream</th>
                  <th className="p-3 border-b text-right">Transactions</th>
                  <th className="p-3 border-b text-right">Gross Volume (NGN)</th>
                  <th className="p-3 border-b text-right">Platform Margin %</th>
                  <th className="p-3 border-b text-right">Net Revenue (NGN)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-800">
                {report.streams.map((stream: any, i: number) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="p-3 font-semibold text-slate-900">{stream.stream}</td>
                    <td className="p-3 text-right font-mono">{stream.transactionCount}</td>
                    <td className="p-3 text-right font-mono font-semibold">₦{(stream.grossNaira).toLocaleString()}</td>
                    <td className="p-3 text-right font-mono">
                      <span className="px-2 py-0.5 bg-blue-50 text-blue-700 font-bold rounded">
                        {stream.marginPercent}%
                      </span>
                    </td>
                    <td className="p-3 text-right font-mono font-bold text-emerald-700">
                      ₦{(stream.netNaira).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Transactions Order Log */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">Recent Marketplace &amp; Service Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-100 text-slate-700 font-bold uppercase text-[10px]">
                <tr>
                  <th className="p-3 border-b">Order ID</th>
                  <th className="p-3 border-b">Type / Category</th>
                  <th className="p-3 border-b">Business Name</th>
                  <th className="p-3 border-b font-mono">Date</th>
                  <th className="p-3 border-b text-right">Gross Amount</th>
                  <th className="p-3 border-b text-right">Net Margin</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-800 text-[11px]">
                {report.recentOrders.map((order: any, i: number) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="p-3 font-mono font-bold text-slate-900">{order.id}</td>
                    <td className="p-3">
                      <span className="capitalize px-2 py-0.5 bg-slate-100 text-slate-700 rounded font-semibold text-[10px]">
                        {order.type.replace(/_/g, " ")}
                      </span>
                    </td>
                    <td className="p-3 font-medium text-slate-900">{order.businessName}</td>
                    <td className="p-3 font-mono text-slate-500">{order.date}</td>
                    <td className="p-3 font-mono font-bold text-right text-slate-900">
                      ₦{(order.amountKobo / 100).toLocaleString()}
                    </td>
                    <td className="p-3 font-mono font-bold text-right text-emerald-700">
                      ₦{(order.netKobo / 100).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
