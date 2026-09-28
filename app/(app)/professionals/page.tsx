"use client";

import { useState } from "react";
import Link from "next/link";

interface ServiceProviderItem {
  id: string;
  name: string;
  firmName: string;
  profession: "lawyer" | "accountant" | "cac_agent" | "tax_consultant";
  professionLabel: string;
  licenseNumber: string;
  state: string;
  rating: number;
  completedJobs: number;
  servicesOffered: string[];
  verified: boolean;
  avatar: string;
}

export default function ProfessionalPartnersPage() {
  const [selectedProfession, setSelectedProfession] = useState<string>("all");
  const [selectedState, setSelectedState] = useState<string>("all");
  const [showPartnerModal, setShowPartnerModal] = useState(false);
  const [partnerRegistered, setPartnerRegistered] = useState(false);

  // Partner Onboarding Form State
  const [partnerName, setPartnerName] = useState("");
  const [firmName, setFirmName] = useState("");
  const [professionInput, setProfessionInput] = useState<"lawyer" | "accountant" | "cac_agent" | "tax_consultant">("lawyer");
  const [licenseInput, setLicenseInput] = useState("");
  const [stateInput, setStateInput] = useState("Lagos");
  const [phoneInput, setPhoneInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [leadPlan, setLeadPlan] = useState<"commission" | "subscription">("commission");

  const partners: ServiceProviderItem[] = [
    {
      id: "prov_1",
      name: "Barr. Babajide Martins",
      firmName: "Martins & Legal Associates",
      profession: "lawyer",
      professionLabel: "Legal Practitioner & CAC Accredited Agent",
      licenseNumber: "NBA/SC/109281 & CAC/ACC/8812",
      state: "Lagos",
      rating: 4.9,
      completedJobs: 142,
      servicesOffered: ["CAC Incorporation", "Contracts & Services Agreements", "SCUML Registration", "Company Secretarial"],
      verified: true,
      avatar: "⚖️",
    },
    {
      id: "prov_2",
      name: "Nkechi Amadi, FCA",
      firmName: "Amadi Tax & Audit Advisory",
      profession: "accountant",
      professionLabel: "Chartered Accountant (ICAN & CITN)",
      licenseNumber: "ICAN/FCA/09281",
      state: "FCT Abuja",
      rating: 4.8,
      completedJobs: 98,
      servicesOffered: ["FIRS Tax Clearance (TCC)", "Audited Financial Statements", "VAT/WHT Tax Filings", "PenCom Clearance"],
      verified: true,
      avatar: "📊",
    },
    {
      id: "prov_3",
      name: "Alhaji Ibrahim Danjuma",
      firmName: "Northern CAC Consultants",
      profession: "cac_agent",
      professionLabel: "Senior CAC Accredited Registration Agent",
      licenseNumber: "CAC/ACC/00192",
      state: "Kano",
      rating: 4.9,
      completedJobs: 210,
      servicesOffered: ["Business Name Registration", "CAC Annual Returns Filing", "Change of Directors", "Share Capital Increase"],
      verified: true,
      avatar: "🏢",
    },
    {
      id: "prov_4",
      name: "Tunde Bakare, FCTI",
      firmName: "Bakare Tax & Compliance Partners",
      profession: "tax_consultant",
      professionLabel: "Certified Tax Consultant (CITN)",
      licenseNumber: "CITN/FCTI/4412",
      state: "Rivers",
      rating: 4.7,
      completedJobs: 76,
      servicesOffered: ["LIRS & FIRS Audit Representation", "Transfer Pricing", "Tax Exemption Advisory", "Industrial Training Fund (ITF)"],
      verified: true,
      avatar: "📜",
    },
  ];

  const filteredPartners = partners.filter((p) => {
    const matchProf = selectedProfession === "all" || p.profession === selectedProfession;
    const matchState = selectedState === "all" || p.state === selectedState;
    return matchProf && matchState;
  });

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPartnerRegistered(true);
    setTimeout(() => {
      setShowPartnerModal(false);
      setPartnerRegistered(false);
      alert("🎉 Partner Onboarding Submitted! Our partner verification team will review your license and activate your portal access within 24 hours.");
    }, 1000);
  };

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-6 sm:px-6">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 border border-purple-300 text-purple-800 text-xs font-bold rounded-full mb-2">
            👨‍💼 Verified Professional Partners &amp; Sublet Task Portal
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900">Professional Partners Directory</h1>
          <p className="text-sm text-gray-600">
            Connect with verified Lawyers, Chartered Accountants, and CAC Accredited Agents, or onboard your firm to receive sublet tasks.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowPartnerModal(true)}
            className="px-5 py-2.5 bg-purple-700 hover:bg-purple-800 text-white font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center gap-2"
          >
            ⚡ Onboard as a Professional Partner
          </button>
          <Link
            href="/services"
            className="px-4 py-2.5 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-bold text-xs rounded-xl transition-all"
          >
            Filing Marketplace &rarr;
          </Link>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
        <div className="flex flex-wrap items-center gap-3">
          <div className="space-y-1">
            <label className="font-bold text-gray-700 block">Filter by Profession:</label>
            <select
              value={selectedProfession}
              onChange={(e) => setSelectedProfession(e.target.value)}
              className="rounded-lg border border-gray-300 p-2 font-medium bg-gray-50"
            >
              <option value="all">All Professions (Lawyers, Accountants, Agents)</option>
              <option value="lawyer">Lawyers &amp; Legal Practitioners</option>
              <option value="accountant">Chartered Accountants (ICAN/ANAN)</option>
              <option value="cac_agent">CAC Accredited Registration Agents</option>
              <option value="tax_consultant">Tax Consultants (CITN)</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="font-bold text-gray-700 block">Filter by Location State:</label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="rounded-lg border border-gray-300 p-2 font-medium bg-gray-50"
            >
              <option value="all">All Nigeria States</option>
              <option value="Lagos">Lagos</option>
              <option value="FCT Abuja">FCT Abuja</option>
              <option value="Kano">Kano</option>
              <option value="Rivers">Rivers</option>
            </select>
          </div>
        </div>

        <div className="text-gray-500 font-semibold">
          Showing <strong className="text-gray-900">{filteredPartners.length}</strong> Verified Partners
        </div>
      </div>

      {/* Partners Directory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPartners.map((p) => (
          <div key={p.id} className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4 shadow-sm hover:border-purple-300 transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-900 border border-purple-200 flex items-center justify-center text-2xl shadow-xs">
                  {p.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-gray-900 text-base">{p.name}</h3>
                    {p.verified && (
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-extrabold border border-emerald-300">
                        ✓ Verified
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-purple-700 font-semibold">{p.professionLabel}</div>
                  <div className="text-[11px] text-gray-500">{p.firmName} &bull; {p.state}, Nigeria</div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-sm font-black text-amber-500">★ {p.rating}</div>
                <div className="text-[10px] text-gray-400 font-mono">{p.completedJobs} Jobs Done</div>
              </div>
            </div>

            <div className="p-3 bg-gray-50 rounded-xl border text-xs space-y-1">
              <div className="text-gray-500 font-semibold text-[11px]">Professional License &amp; Accreditation:</div>
              <div className="font-mono font-bold text-gray-800 text-xs">{p.licenseNumber}</div>
            </div>

            <div className="space-y-1.5">
              <span className="text-xs font-bold text-gray-700 block">Core Services &amp; Specialties:</span>
              <div className="flex flex-wrap gap-1.5">
                {p.servicesOffered.map((srv, i) => (
                  <span key={i} className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg text-[11px] font-medium border border-slate-200">
                    {srv}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between border-t text-xs">
              <span className="text-gray-500 text-[11px]">Privacy Protected (Advisor Grant Required)</span>
              <button
                onClick={() => alert(`Requesting consultation with ${p.name}. You can grant temporary access to specific documents in your Vault.`)}
                className="px-4 py-2 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-xl shadow-xs transition-all"
              >
                Request Expert Assistance &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* PARTNER ONBOARDING MODAL */}
      {showPartnerModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-6 shadow-2xl border border-gray-200">
            <div className="flex justify-between items-start border-b pb-4">
              <div>
                <span className="text-[10px] font-extrabold uppercase text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                  Professional Partner Onboarding
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-1">Join the Verified Partner Network</h3>
                <p className="text-xs text-gray-500">Receive sublet Done-for-Me filing tasks or list your firm for client leads.</p>
              </div>
              <button
                onClick={() => setShowPartnerModal(false)}
                className="text-gray-400 hover:text-gray-600 text-xl font-bold"
              >
                &times;
              </button>
            </div>

            <form onSubmit={handlePartnerSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-gray-700 block mb-1">Full Name:</label>
                  <input
                    type="text"
                    required
                    value={partnerName}
                    onChange={(e) => setPartnerName(e.target.value)}
                    placeholder="e.g. Barr. Nneka Eze"
                    className="w-full rounded-lg border border-gray-300 p-2 font-medium"
                  />
                </div>
                <div>
                  <label className="font-bold text-gray-700 block mb-1">Firm / Practice Name:</label>
                  <input
                    type="text"
                    required
                    value={firmName}
                    onChange={(e) => setFirmName(e.target.value)}
                    placeholder="e.g. Eze &amp; Co. Legal"
                    className="w-full rounded-lg border border-gray-300 p-2 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-gray-700 block mb-1">Profession Type:</label>
                  <select
                    value={professionInput}
                    onChange={(e: any) => setProfessionInput(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 p-2 font-medium"
                  >
                    <option value="lawyer">Lawyer / Legal Practitioner</option>
                    <option value="accountant">Chartered Accountant (ICAN/ANAN)</option>
                    <option value="cac_agent">CAC Accredited Agent</option>
                    <option value="tax_consultant">Tax Consultant (CITN)</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-gray-700 block mb-1">Primary State:</label>
                  <select
                    value={stateInput}
                    onChange={(e) => setStateInput(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 p-2 font-medium"
                  >
                    <option value="Lagos">Lagos</option>
                    <option value="FCT Abuja">FCT Abuja</option>
                    <option value="Rivers">Rivers</option>
                    <option value="Kano">Kano</option>
                    <option value="Oyo">Oyo</option>
                    <option value="Enugu">Enugu</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-bold text-gray-700 block mb-1">License / Accreditation Number:</label>
                <input
                  type="text"
                  required
                  value={licenseInput}
                  onChange={(e) => setLicenseInput(e.target.value)}
                  placeholder="e.g. NBA/SC/99102 or CAC/ACC/4412"
                  className="w-full rounded-lg border border-gray-300 p-2 font-medium"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-gray-700 block mb-1">Phone Number:</label>
                  <input
                    type="text"
                    required
                    value={phoneInput}
                    onChange={(e) => setPhoneInput(e.target.value)}
                    placeholder="+234 800 000 0000"
                    className="w-full rounded-lg border border-gray-300 p-2 font-medium"
                  />
                </div>
                <div>
                  <label className="font-bold text-gray-700 block mb-1">Email Address:</label>
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="partner@firm.ng"
                    className="w-full rounded-lg border border-gray-300 p-2 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-gray-700 block mb-1">Select Partner Model:</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setLeadPlan("commission")}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      leadPlan === "commission" ? "border-purple-600 bg-purple-50 text-purple-900 font-bold" : "border-gray-200 text-gray-600"
                    }`}
                  >
                    <div>10% Sublet Commission</div>
                    <div className="text-[10px] text-gray-500 font-normal">Receive paid tasks assigned by platform ops</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setLeadPlan("subscription")}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      leadPlan === "subscription" ? "border-purple-600 bg-purple-50 text-purple-900 font-bold" : "border-gray-200 text-gray-600"
                    }`}
                  >
                    <div>₦10,000 / mo Partner Plan</div>
                    <div className="text-[10px] text-gray-500 font-normal">Direct client leads &amp; directory listing</div>
                  </button>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  disabled={partnerRegistered}
                  className="flex-1 py-3 bg-purple-700 hover:bg-purple-800 text-white font-extrabold rounded-xl shadow-md text-xs disabled:opacity-50"
                >
                  {partnerRegistered ? "Registering..." : "Submit Partner Onboarding"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowPartnerModal(false)}
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
