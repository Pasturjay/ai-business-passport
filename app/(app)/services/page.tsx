"use client";

import { useState } from "react";
import Link from "next/link";

interface BusinessServiceItem {
  id: string;
  category: "cac" | "tax" | "compliance" | "custom";
  title: string;
  priceNaira: number;
  formattedPrice: string;
  turnaroundDays: string;
  description: string;
  deliverables: string[];
  popular?: boolean;
}

export default function BusinessServicesCataloguePage() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "cac" | "tax" | "compliance">("all");
  const [activeOrderingService, setActiveOrderingService] = useState<BusinessServiceItem | null>(null);
  const [orderSubmitted, setOrderSubmitted] = useState<string | null>(null);

  // Form State
  const [businessNameInput, setBusinessNameInput] = useState("Apex Zenith Logistics Ltd");
  const [phoneInput, setPhoneInput] = useState("+234 803 123 4567");
  const [noteInput, setNoteInput] = useState("");

  const services: BusinessServiceItem[] = [
    {
      id: "srv_cac_bn",
      category: "cac",
      title: "CAC Business Name Registration",
      priceNaira: 18500,
      formattedPrice: "₦18,500",
      turnaroundDays: "3–5 Working Days",
      description: "Register a Business Name with the Corporate Affairs Commission (CAC) for sole proprietorships and partnerships.",
      deliverables: ["CAC Business Name Certificate", "Status Report / Form BN 1", "Official CAC Stamp"],
      popular: true,
    },
    {
      id: "srv_cac_llc",
      category: "cac",
      title: "CAC Limited Liability Company (LLC) Incorporation",
      priceNaira: 45000,
      formattedPrice: "₦45,000",
      turnaroundDays: "5–7 Working Days",
      description: "Full incorporation of a private limited liability company with up to ₦10M share capital.",
      deliverables: ["CAC Incorporation Certificate", "Memorandum & Articles of Association (MemArt)", "Status Report / Form CAC 1.1", "TIN Auto-Assignment"],
      popular: true,
    },
    {
      id: "srv_cac_annual",
      category: "cac",
      title: "CAC Annual Returns Filing",
      priceNaira: 15000,
      formattedPrice: "₦15,000 / year",
      turnaroundDays: "2–3 Working Days",
      description: "File annual returns for CAC compliance and prevent post-incorporation fine penalties.",
      deliverables: ["CAC Official Filing Receipt", "Status Report Update", "Compliance Clearance Badge"],
      popular: true,
    },
    {
      id: "srv_cac_changes",
      category: "cac",
      title: "Change of Directors / Address / Business Name",
      priceNaira: 25000,
      formattedPrice: "₦25,000",
      turnaroundDays: "4–6 Working Days",
      description: "Official CAC company updates to alter company structure, add directors, or update registered address.",
      deliverables: ["Updated Status Report", "CAC Resolution Filing Approval"],
    },
    {
      id: "srv_firs_tin",
      category: "tax",
      title: "FIRS Tax Identification Number (TIN) Processing",
      priceNaira: 5000,
      formattedPrice: "₦5,000 (Express 24h)",
      turnaroundDays: "24 Hours",
      description: "Express processing of official Federal Inland Revenue Service (FIRS) Tax Identification Number.",
      deliverables: ["Official FIRS TIN Slip", "FIRS Portal Linkage"],
    },
    {
      id: "srv_firs_tcc",
      category: "tax",
      title: "FIRS Tax Clearance Certificate (TCC) Processing",
      priceNaira: 35000,
      formattedPrice: "₦35,000",
      turnaroundDays: "7–10 Working Days",
      description: "Complete FIRS audit assistance, returns filing, and issuance of 3-year Tax Clearance Certificate.",
      deliverables: ["Official FIRS Tax Clearance Certificate (TCC)", "FIRS Tax Clearance Verification Link"],
      popular: true,
    },
    {
      id: "srv_scuml",
      category: "compliance",
      title: "SCUML Anti-Money Laundering Certificate",
      priceNaira: 30000,
      formattedPrice: "₦30,000",
      turnaroundDays: "5–7 Working Days",
      description: "Special Control Unit Against Money Laundering (SCUML) registration for real estate, car dealers, consultants, and legal firms.",
      deliverables: ["Official SCUML Compliance Certificate", "SCUML Portal Listing"],
    },
    {
      id: "srv_pencom",
      category: "compliance",
      title: "PenCom Compliance Certificate",
      priceNaira: 25000,
      formattedPrice: "₦25,000",
      turnaroundDays: "4–5 Working Days",
      description: "National Pension Commission (PenCom) clearance certificate required for government tenders & corporate contracts.",
      deliverables: ["Official PenCom Compliance Certificate", "Employer Pension Code"],
    },
    {
      id: "srv_itf_nsitf",
      category: "compliance",
      title: "ITF & NSITF Compliance Registration",
      priceNaira: 20000,
      formattedPrice: "₦20,000",
      turnaroundDays: "3–4 Working Days",
      description: "Industrial Training Fund (ITF) and Nigeria Social Insurance Trust Fund (NSITF) employee compensation clearance.",
      deliverables: ["Official ITF Certificate", "NSITF Clearance Letter"],
    },
  ];

  const filteredServices = selectedCategory === "all"
    ? services
    : services.filter((s) => s.category === selectedCategory);

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeOrderingService) return;

    const orderId = `ORD-DFM-${Math.floor(10000 + Math.random() * 90000)}`;
    setOrderSubmitted(orderId);
    setTimeout(() => {
      setActiveOrderingService(null);
    }, 500);
  };

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-6 sm:px-6">
      {/* Top Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold rounded-full mb-2">
            🇳🇬 One-Off Business Filings &amp; Registration Marketplace
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900">Business Services &amp; Filing Services</h1>
          <p className="text-sm text-gray-600">
            Order one-off business registrations, CAC annual returns, FIRS tax clearances, and SCUML certificates with guaranteed turnaround.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/professionals"
            className="px-5 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-extrabold text-xs rounded-xl shadow-md transition-all"
          >
            👨‍💼 Hire a Professional Partner &rarr;
          </Link>
          <Link
            href="/dashboard"
            className="px-4 py-2.5 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-bold text-xs rounded-xl transition-all"
          >
            Dashboard
          </Link>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b pb-3">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
            selectedCategory === "all" ? "bg-slate-900 text-white shadow-sm" : "bg-white text-gray-600 border hover:bg-gray-50"
          }`}
        >
          All Services (9)
        </button>
        <button
          onClick={() => setSelectedCategory("cac")}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
            selectedCategory === "cac" ? "bg-slate-900 text-white shadow-sm" : "bg-white text-gray-600 border hover:bg-gray-50"
          }`}
        >
          🏢 CAC Registration &amp; Filings
        </button>
        <button
          onClick={() => setSelectedCategory("tax")}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
            selectedCategory === "tax" ? "bg-slate-900 text-white shadow-sm" : "bg-white text-gray-600 border hover:bg-gray-50"
          }`}
        >
          📜 FIRS Tax &amp; TCC
        </button>
        <button
          onClick={() => setSelectedCategory("compliance")}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
            selectedCategory === "compliance" ? "bg-slate-900 text-white shadow-sm" : "bg-white text-gray-600 border hover:bg-gray-50"
          }`}
        >
          🛡️ SCUML, PenCom &amp; ITF
        </button>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((srv) => (
          <div
            key={srv.id}
            className={`bg-white rounded-2xl border p-6 flex flex-col justify-between space-y-5 relative shadow-sm hover:shadow-md transition-all ${
              srv.popular ? "border-2 border-emerald-500" : "border-gray-200"
            }`}
          >
            {srv.popular && (
              <span className="absolute -top-3 left-6 bg-emerald-600 text-white text-[10px] uppercase tracking-wider font-extrabold px-3 py-0.5 rounded-full shadow-xs">
                Popular Service
              </span>
            )}

            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <h3 className="font-extrabold text-gray-900 text-base leading-snug">{srv.title}</h3>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-slate-900">{srv.formattedPrice}</span>
                <span className="text-xs text-gray-500 font-medium">({srv.turnaroundDays})</span>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed">{srv.description}</p>

              <div className="space-y-1.5 pt-2">
                <span className="text-[11px] font-bold text-gray-700 block">Deliverables Included:</span>
                <ul className="space-y-1 text-xs text-gray-600">
                  {srv.deliverables.map((item, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="text-emerald-600 font-bold text-xs">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              onClick={() => setActiveOrderingService(srv)}
              className="w-full min-h-[44px] bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              Order Service &amp; File Now &rarr;
            </button>
          </div>
        ))}
      </div>

      {/* SUCCESS MODAL / NOTIFICATION */}
      {orderSubmitted && (
        <div className="p-6 bg-emerald-50 border-2 border-emerald-300 rounded-2xl space-y-2 text-emerald-900">
          <div className="font-black text-base">🎉 Order Submitted Successfully! Order ID: {orderSubmitted}</div>
          <p className="text-xs text-emerald-800">
            Your filing request has been assigned to our Done-for-Me Concierge Team. An accredited lawyer/agent will contact you within 2 hours to confirm your documents.
          </p>
          <button
            onClick={() => setOrderSubmitted(null)}
            className="px-4 py-2 bg-emerald-700 text-white text-xs font-bold rounded-lg"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* ORDER MODAL */}
      {activeOrderingService && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-6 shadow-2xl border border-gray-200">
            <div className="flex justify-between items-start border-b pb-4">
              <div>
                <span className="text-[10px] font-extrabold uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Filing Order Checkout
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-1">{activeOrderingService.title}</h3>
                <div className="text-sm font-black text-emerald-600">{activeOrderingService.formattedPrice} &bull; {activeOrderingService.turnaroundDays}</div>
              </div>
              <button
                onClick={() => setActiveOrderingService(null)}
                className="text-gray-400 hover:text-gray-600 text-xl font-bold"
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleOrderSubmit} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-gray-700 block mb-1">Company / Business Name:</label>
                <input
                  type="text"
                  required
                  value={businessNameInput}
                  onChange={(e) => setBusinessNameInput(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 p-2.5 font-medium"
                />
              </div>

              <div>
                <label className="font-bold text-gray-700 block mb-1">WhatsApp / Contact Phone:</label>
                <input
                  type="text"
                  required
                  value={phoneInput}
                  onChange={(e) => setPhoneInput(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 p-2.5 font-medium"
                />
              </div>

              <div>
                <label className="font-bold text-gray-700 block mb-1">Filing Notes / Special Instructions (Optional):</label>
                <textarea
                  rows={3}
                  value={noteInput}
                  onChange={(e) => setNoteInput(e.target.value)}
                  placeholder="e.g. Please update director names and send filing status report via WhatsApp."
                  className="w-full rounded-lg border border-gray-300 p-2.5 font-medium"
                />
              </div>

              <div className="p-3 bg-slate-50 border rounded-xl space-y-1">
                <div className="font-bold text-gray-800">Secure Payment via Paystack:</div>
                <div className="text-[11px] text-gray-500">Pay securely with Debit Card, USSD, or Bank Transfer. Includes Money-Back Guarantee.</div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl shadow-md text-xs"
                >
                  Pay {activeOrderingService.formattedPrice} &amp; Submit Filing
                </button>
                <button
                  type="button"
                  onClick={() => setActiveOrderingService(null)}
                  className="px-4 py-3 border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold rounded-xl text-xs"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
