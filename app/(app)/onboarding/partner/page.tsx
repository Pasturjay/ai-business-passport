"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ModusPartnerOnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Partner State
  const [profession, setProfession] = useState<"cac" | "legal" | "accounting" | "tax">("cac");
  const [fullName, setFullName] = useState("Barr. Chukwuma Eze");
  const [firmName, setFirmName] = useState("Aethelgard & Co Legal Practitioners");
  const [accreditationCode, setAccreditationCode] = useState("CAC/ACC/88192");
  const [portalUsername, setPortalUsername] = useState("c_eze_cac");
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Business Name Registration",
    "Post-Incorporation Resolutions",
    "SCUML Anti-Money Laundering Processing",
  ]);
  const [bankName, setBankName] = useState("Zenith Bank Plc");
  const [accountNumber, setAccountNumber] = useState("1019284019");
  const [accountName, setAccountName] = useState("Aethelgard & Co Legal");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleService = (srv: string) => {
    setSelectedServices((prev) =>
      prev.includes(srv) ? prev.filter((s) => s !== srv) : [...prev, srv]
    );
  };

  const handleNextStep = () => {
    if (step < 4) {
      setStep((prev) => (prev + 1) as any);
    } else {
      setIsSubmitting(true);
      setTimeout(() => {
        router.push("/professionals");
      }, 1200);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep((prev) => (prev - 1) as any);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-blue-500 selection:text-white py-8 px-3 sm:px-6">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center font-black text-white text-xl shadow-md">
              M
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-white">partners.modus.ng</span>
                <span className="text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  Partner Network
                </span>
              </div>
              <p className="text-xs text-slate-400">Modus Accredited Professionals Portal</p>
            </div>
          </div>

          <Link
            href="/onboarding"
            className="text-xs font-semibold text-slate-400 hover:text-white"
          >
            &larr; Switch Portal
          </Link>
        </div>

        {/* Step Progress Bar */}
        <div className="bg-slate-800/60 rounded-2xl p-4 border border-slate-700 flex items-center justify-between gap-2">
          {[
            { id: 1, label: "Professional Role" },
            { id: 2, label: "Accreditation" },
            { id: 3, label: "Services & Rates" },
            { id: 4, label: "Payout Account" },
          ].map((s) => (
            <div
              key={s.id}
              className={`flex-1 text-center py-2 px-1 rounded-xl text-xs font-bold transition-all ${
                step === s.id
                  ? "bg-blue-600 text-white shadow-md"
                  : step > s.id
                  ? "bg-blue-500/10 text-blue-400 border border-blue-500/30"
                  : "bg-slate-800 text-slate-500"
              }`}
            >
              Step {s.id}: {s.label}
            </div>
          ))}
        </div>

        {/* STEP 1: PROFESSIONAL ROLE */}
        {step === 1 && (
          <div className="bg-slate-800/80 rounded-2xl p-6 sm:p-8 border border-slate-700 space-y-6">
            <div>
              <span className="px-2.5 py-0.5 bg-blue-500/20 text-blue-400 text-xs font-bold rounded-full border border-blue-500/30">
                Step 1 of 4
              </span>
              <h1 className="text-2xl font-bold text-white mt-2">Select Your Professional Track</h1>
              <p className="text-xs text-slate-400">
                Join our network of accredited Nigerian lawyers, accountants, and CAC registration agents.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { id: "cac", title: "CAC Accredited Agent", desc: "Perform CAC filings, status changes, and company incorporations." },
                { id: "legal", title: "NBA Accredited Lawyer", desc: "Review MEMART, legal contracts, SLAs, and commercial agreements." },
                { id: "accounting", title: "ICAN / ANAN Accountant", desc: "Prepare audited accounts, balance sheets, and PenCom schedules." },
                { id: "tax", title: "CITN Tax Consultant", desc: "FIRS Tax Clearance Certificates, VAT filings, and SCUML clearance." },
              ].map((item) => (
                <div
                  key={item.id}
                  onClick={() => setProfession(item.id as any)}
                  className={`cursor-pointer p-5 rounded-xl border transition-all ${
                    profession === item.id
                      ? "border-blue-500 bg-blue-500/10 ring-2 ring-blue-500/40"
                      : "border-slate-700 bg-slate-900/40 hover:border-slate-600"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-white">{item.title}</h3>
                    {profession === item.id && <span className="text-blue-400 font-bold">✓</span>}
                  </div>
                  <p className="text-xs text-slate-400 mt-2">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Full Name / Lead Practitioner</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-semibold text-white focus:border-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Firm Name (Optional)</label>
                <input
                  type="text"
                  value={firmName}
                  onChange={(e) => setFirmName(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-semibold text-white focus:border-blue-500 outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: ACCREDITATION */}
        {step === 2 && (
          <div className="bg-slate-800/80 rounded-2xl p-6 sm:p-8 border border-slate-700 space-y-6">
            <div>
              <span className="px-2.5 py-0.5 bg-blue-500/20 text-blue-400 text-xs font-bold rounded-full border border-blue-500/30">
                Step 2 of 4
              </span>
              <h1 className="text-2xl font-bold text-white mt-2">Accreditation &amp; License Details</h1>
              <p className="text-xs text-slate-400">
                Modus verifies credentials against CAC portal databases &amp; professional body registers.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Accreditation ID / License Number</label>
                <input
                  type="text"
                  value={accreditationCode}
                  onChange={(e) => setAccreditationCode(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-mono text-white focus:border-blue-500 outline-none"
                  placeholder="e.g. CAC/ACC/88192 or SCN-10291"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">CAC Portal Username (For Direct Subletting)</label>
                <input
                  type="text"
                  value={portalUsername}
                  onChange={(e) => setPortalUsername(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-mono text-white focus:border-blue-500 outline-none"
                  placeholder="e.g. chukwuma_cac"
                />
              </div>

              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300 flex items-center gap-3">
                <span className="text-xl">🛡️</span>
                <span>Your accreditation grants you direct access to high-value client tasks on Modus Escrow.</span>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: SERVICES & RATES */}
        {step === 3 && (
          <div className="bg-slate-800/80 rounded-2xl p-6 sm:p-8 border border-slate-700 space-y-6">
            <div>
              <span className="px-2.5 py-0.5 bg-blue-500/20 text-blue-400 text-xs font-bold rounded-full border border-blue-500/30">
                Step 3 of 4
              </span>
              <h1 className="text-2xl font-bold text-white mt-2">Services You Can Accept</h1>
              <p className="text-xs text-slate-400">
                Select the tasks Modus can route to your portal. Standard 15% platform fee applies to sublet orders.
              </p>
            </div>

            <div className="space-y-3">
              {[
                "Business Name Registration",
                "Private Limited Company Incorporation",
                "Post-Incorporation Resolutions & Share Changes",
                "SCUML Anti-Money Laundering Processing",
                "FIRS Tax Identification Number & Tax Clearance",
                "PenCom & ITF Compliance Certificates",
              ].map((srv) => (
                <div
                  key={srv}
                  onClick={() => toggleService(srv)}
                  className={`cursor-pointer p-4 rounded-xl border flex items-center justify-between text-xs font-semibold transition-all ${
                    selectedServices.includes(srv)
                      ? "border-blue-500 bg-blue-500/10 text-white"
                      : "border-slate-700 bg-slate-900/40 text-slate-400 hover:border-slate-600"
                  }`}
                >
                  <span>{srv}</span>
                  {selectedServices.includes(srv) ? (
                    <span className="px-2 py-0.5 bg-blue-500 text-white rounded font-bold text-[10px]">Active</span>
                  ) : (
                    <span className="text-slate-600 text-[10px]">Click to Enable</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 4: PAYOUT ACCOUNT */}
        {step === 4 && (
          <div className="bg-slate-800/80 rounded-2xl p-6 sm:p-8 border border-slate-700 space-y-6">
            <div>
              <span className="px-2.5 py-0.5 bg-blue-500/20 text-blue-400 text-xs font-bold rounded-full border border-blue-500/30">
                Step 4 of 4
              </span>
              <h1 className="text-2xl font-bold text-white mt-2">Bank Payout Details</h1>
              <p className="text-xs text-slate-400">
                Earnings from completed sublet tasks and referral leads are remitted directly to this account via Paystack.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Bank Name</label>
                <select
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-xs font-semibold text-white focus:border-blue-500 outline-none"
                >
                  <option value="Zenith Bank Plc">Zenith Bank Plc</option>
                  <option value="Access Bank Plc">Access Bank Plc</option>
                  <option value="Guaranty Trust Bank (GTBank)">Guaranty Trust Bank (GTBank)</option>
                  <option value="First Bank of Nigeria">First Bank of Nigeria</option>
                  <option value="United Bank for Africa (UBA)">United Bank for Africa (UBA)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Account Number</label>
                  <input
                    type="text"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-mono text-white focus:border-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Account Name</label>
                  <input
                    type="text"
                    value={accountName}
                    onChange={(e) => setAccountName(e.target.value)}
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-semibold text-white focus:border-blue-500 outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Action Controls Footer */}
        <div className="flex items-center justify-between pt-4">
          <button
            type="button"
            onClick={handlePrevStep}
            disabled={step === 1}
            className={`rounded-xl px-5 py-3 text-xs font-bold border ${
              step === 1
                ? "border-slate-800 text-slate-600 cursor-not-allowed"
                : "border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            &larr; Previous Step
          </button>

          <button
            type="button"
            onClick={handleNextStep}
            disabled={isSubmitting}
            className="rounded-xl bg-blue-600 px-6 py-3 text-xs font-bold text-white shadow-md hover:bg-blue-500 transition-all flex items-center gap-2"
          >
            {isSubmitting ? (
              <span>Activating Partner Workspace...</span>
            ) : step === 4 ? (
              <span>Complete Onboarding &amp; Launch Partner Portal &rarr;</span>
            ) : (
              <span>Save &amp; Continue &rarr;</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
