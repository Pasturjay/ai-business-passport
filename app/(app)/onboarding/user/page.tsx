"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ModusFounderOnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form State
  const [companyName, setCompanyName] = useState("Apex Zenith Logistics & Technology Solutions Ltd");
  const [rcNumber, setRcNumber] = useState("RC-1849201");
  const [tin, setTin] = useState("29481029-0001");
  const [isRegistered, setIsRegistered] = useState(true);
  const [industry, setIndustry] = useState("Supply Chain, Logistics & Tech");
  const [operatingState, setOperatingState] = useState("Lagos State");
  const [employeeCount, setEmployeeCount] = useState("10–50 Employees");
  
  // Holder Details for 3D Business Card
  const [holderName, setHolderName] = useState("Amina Lawal");
  const [holderRole] = useState("Managing Director / CEO");
  const [holderPhone] = useState("+234 803 123 4567");

  // Vault Files Uploaded Mock State
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([
    "CAC_Certificate_RC1849201.pdf",
    "FIRS_TIN_Slip_29481029.pdf",
  ]);

  const [cardFlipped, setCardFlipped] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNextStep = () => {
    if (step < 4) {
      setStep((prev) => (prev + 1) as any);
    } else {
      setIsSubmitting(true);
      setTimeout(() => {
        router.push("/dashboard");
      }, 1200);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep((prev) => (prev - 1) as any);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-200 selection:text-emerald-900 py-8 px-3 sm:px-6">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b pb-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-emerald-600 flex items-center justify-center font-black text-white text-xl shadow-md">
              M
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-slate-900">app.modus.ng</span>
                <span className="text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300">
                  Founder Onboarding
                </span>
              </div>
              <p className="text-xs text-slate-500">Modus Business Operating System</p>
            </div>
          </div>

          <Link
            href="/onboarding"
            className="text-xs font-semibold text-slate-600 hover:text-slate-900"
          >
            &larr; Switch Portal
          </Link>
        </div>

        {/* Step Progress Bar */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex items-center justify-between gap-2">
          {[
            { id: 1, label: "Business Identity" },
            { id: 2, label: "Operational Profile" },
            { id: 3, label: "Vault Documents" },
            { id: 4, label: "3D Passport Card" },
          ].map((s) => (
            <div
              key={s.id}
              className={`flex-1 text-center py-2 px-1 rounded-xl text-xs font-bold transition-all ${
                step === s.id
                  ? "bg-emerald-600 text-white shadow-md"
                  : step > s.id
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                  : "bg-slate-100 text-slate-400"
              }`}
            >
              Step {s.id}: {s.label}
            </div>
          ))}
        </div>

        {/* STEP 1: BUSINESS IDENTITY */}
        {step === 1 && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
            <div>
              <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full border border-emerald-300">
                Step 1 of 4
              </span>
              <h1 className="text-2xl font-bold text-slate-900 mt-2">What is your company name?</h1>
              <p className="text-xs text-slate-500">
                Modus will auto-verify your CAC status and link your regulatory records.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Company Registered Name</label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm font-semibold focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none"
                  placeholder="e.g. Apex Zenith Logistics Ltd"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">CAC Registration Status</label>
                  <select
                    value={isRegistered ? "registered" : "unregistered"}
                    onChange={(e) => setIsRegistered(e.target.value === "registered")}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-xs font-semibold focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none bg-white"
                  >
                    <option value="registered">Already Registered with CAC (RC / BN Number)</option>
                    <option value="unregistered">New Business (Needs CAC Registration)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">CAC RC / BN Number</label>
                  <input
                    type="text"
                    value={rcNumber}
                    onChange={(e) => setRcNumber(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm font-mono focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none"
                    placeholder="e.g. RC-1849201"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">FIRS Tax Identification Number (TIN)</label>
                <input
                  type="text"
                  value={tin}
                  onChange={(e) => setTin(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm font-mono focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none"
                  placeholder="e.g. 29481029-0001"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: OPERATIONAL PROFILE */}
        {step === 2 && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
            <div>
              <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full border border-emerald-300">
                Step 2 of 4
              </span>
              <h1 className="text-2xl font-bold text-slate-900 mt-2">Operational Focus &amp; Location</h1>
              <p className="text-xs text-slate-500">
                This configures your state tax compliance calendars and industry regulations.
              </p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Primary Industry Sector</label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-xs font-semibold focus:border-emerald-500 outline-none bg-white"
                  >
                    <option value="Supply Chain, Logistics & Tech">Supply Chain, Logistics &amp; Freight</option>
                    <option value="Financial Technology & Services">Fintech &amp; Financial Services</option>
                    <option value="Agriculture & Food Processing">Agriculture &amp; Food Processing</option>
                    <option value="Real Estate & Construction">Real Estate &amp; Construction</option>
                    <option value="Healthcare & Pharmaceuticals">Healthcare &amp; Medical Supplies</option>
                    <option value="General Merchandising & Trade">General Merchandising &amp; Trade</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Primary Operating State</label>
                  <select
                    value={operatingState}
                    onChange={(e) => setOperatingState(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-xs font-semibold focus:border-emerald-500 outline-none bg-white"
                  >
                    <option value="Lagos State">Lagos State (LIRS Tax Jurisdiction)</option>
                    <option value="FCT Abuja">FCT Abuja (FIRS &amp; FCT-IRS Jurisdiction)</option>
                    <option value="Rivers State">Rivers State (RIRS Tax Jurisdiction)</option>
                    <option value="Kano State">Kano State (KIRS Tax Jurisdiction)</option>
                    <option value="Ogun State">Ogun State (OGIRS Tax Jurisdiction)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Team Size</label>
                  <select
                    value={employeeCount}
                    onChange={(e) => setEmployeeCount(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-xs font-semibold focus:border-emerald-500 outline-none bg-white"
                  >
                    <option value="1–9 Employees">1–9 Employees (Micro Enterprise)</option>
                    <option value="10–50 Employees">10–50 Employees (Small Business)</option>
                    <option value="50+ Employees">50+ Employees (Medium/Large Enterprise)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Cardholder Full Name</label>
                  <input
                    type="text"
                    value={holderName}
                    onChange={(e) => setHolderName(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm font-semibold focus:border-emerald-500 outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: VAULT DOCUMENTS */}
        {step === 3 && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
            <div>
              <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full border border-emerald-300">
                Step 3 of 4
              </span>
              <h1 className="text-2xl font-bold text-slate-900 mt-2">Initialize Your Modus Vault</h1>
              <p className="text-xs text-slate-500">
                Upload your CAC status report, tax clearance, or MEMART. Modus automatically indexes them for tender preparation.
              </p>
            </div>

            <div className="border-2 border-dashed border-emerald-300 bg-emerald-50/50 rounded-2xl p-6 text-center space-y-3">
              <div className="text-3xl">📁</div>
              <h3 className="text-sm font-bold text-slate-900">Drag &amp; drop compliance files here</h3>
              <p className="text-xs text-slate-500">Supports PDF, PNG, JPG (CAC Certificate, Tax Clearance, SCUML, PenCom)</p>
              <button
                type="button"
                onClick={() => setUploadedFiles((prev) => [...prev, `Doc_Upload_${Date.now().toString().slice(-4)}.pdf`])}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-emerald-700"
              >
                + Add Sample Document
              </button>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Indexed Vault Files</h4>
              <div className="space-y-2">
                {uploadedFiles.map((file, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <span className="font-mono font-semibold text-slate-800">📄 {file}</span>
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded text-[10px]">
                      Verified by Modus AI
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: 3D PASSPORT CARD PREVIEW */}
        {step === 4 && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
            <div>
              <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full border border-emerald-300">
                Step 4 of 4
              </span>
              <h1 className="text-2xl font-bold text-slate-900 mt-2">Your 3D Modus Business Passport</h1>
              <p className="text-xs text-slate-500">
                Click card to flip between Front (Company Credentials) and Back (Holder Contact &amp; Security Stripe).
              </p>
            </div>

            {/* Interactive 3D Driver License Flip Card */}
            <div className="flex flex-col items-center justify-center space-y-4">
              <div
                onClick={() => setCardFlipped(!cardFlipped)}
                className="cursor-pointer transition-all duration-500 hover:scale-[1.02] w-full max-w-md aspect-[1.586/1] rounded-2xl p-6 shadow-2xl relative border border-emerald-600/40 text-white overflow-hidden bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 flex flex-col justify-between"
              >
                {!cardFlipped ? (
                  // FRONT OF CARD
                  <div className="h-full flex flex-col justify-between">
                    <div className="flex items-start justify-between border-b border-emerald-500/30 pb-3">
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
                          MODUS VERIFIED BUSINESS CARD
                        </div>
                        <div className="text-base font-black text-white tracking-tight mt-0.5 line-clamp-1">
                          {companyName}
                        </div>
                      </div>
                      <div className="h-8 w-8 rounded-lg bg-emerald-500 flex items-center justify-center font-black text-slate-950 text-sm shadow">
                        M
                      </div>
                    </div>

                    <div className="flex items-center gap-4 my-2">
                      <div className="h-16 w-14 rounded-xl bg-slate-800 border border-emerald-500/40 flex items-center justify-center text-xl font-bold text-emerald-400">
                        👤
                      </div>
                      <div className="space-y-1 text-xs">
                        <div>
                          <span className="text-[9px] text-slate-400 uppercase font-mono block">CARD HOLDER</span>
                          <span className="font-bold text-white text-sm">{holderName}</span>
                        </div>
                        <div>
                          <span className="text-[9px] text-slate-400 uppercase font-mono block">DESIGNATION</span>
                          <span className="font-semibold text-emerald-300">{holderRole}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-emerald-500/30 text-[10px] font-mono">
                      <div>
                        <span className="text-slate-400">RC:</span> <span className="text-emerald-400 font-bold">{rcNumber}</span>
                      </div>
                      <div>
                        <span className="text-slate-400">TIN:</span> <span className="text-emerald-400 font-bold">{tin}</span>
                      </div>
                      <div className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded font-bold border border-emerald-500/30">
                        VERIFIED 🟢
                      </div>
                    </div>
                  </div>
                ) : (
                  // BACK OF CARD
                  <div className="h-full flex flex-col justify-between bg-slate-950/80 p-2 rounded-xl">
                    <div className="h-8 w-full bg-slate-800 rounded flex items-center px-4 font-mono text-[9px] text-slate-400 tracking-widest">
                      ||||| ||||||| |||| |||||| ||||||| |||||
                    </div>
                    <div className="space-y-1 text-xs my-2">
                      <div className="flex justify-between text-[10px]">
                        <span className="text-slate-400 font-mono">DIRECT PHONE:</span>
                        <span className="font-bold text-white">{holderPhone}</span>
                      </div>
                      <div className="flex justify-between text-[10px]">
                        <span className="text-slate-400 font-mono">SECURITY CODE:</span>
                        <span className="font-mono text-emerald-400 font-bold">MDS-88192-NG</span>
                      </div>
                    </div>
                    <div className="text-center text-[9px] text-slate-400 font-mono border-t border-slate-800 pt-2">
                      Issued by Modus Operating System (app.modus.ng)
                    </div>
                  </div>
                )}
              </div>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                🔄 Click card above to flip between Front and Back
              </span>
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
                ? "border-slate-200 text-slate-300 cursor-not-allowed"
                : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
            }`}
          >
            &larr; Previous Step
          </button>

          <button
            type="button"
            onClick={handleNextStep}
            disabled={isSubmitting}
            className="rounded-xl bg-emerald-600 px-6 py-3 text-xs font-bold text-white shadow-md hover:bg-emerald-700 transition-all flex items-center gap-2"
          >
            {isSubmitting ? (
              <span>Activating Workspace...</span>
            ) : step === 4 ? (
              <span>Complete Onboarding &amp; Launch Dashboard &rarr;</span>
            ) : (
              <span>Save &amp; Continue &rarr;</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
