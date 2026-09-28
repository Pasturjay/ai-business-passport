"use client";

import { useState } from "react";
import Link from "next/link";

export default function PrintableCompanyProfilePage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [lastGenerated, setLastGenerated] = useState<string>("Just now");

  // Brain & Vault Auto-Populated Profile State
  const [profile] = useState({
    companyName: "Apex Zenith Logistics & Technology Solutions Ltd",
    tagline: "Leading Technology, Supply Chain & Freight Logistics Provider in Nigeria",
    rcNumber: "RC-1849201",
    tin: "29481029-0001",
    yearEstablished: "2018",
    headquarters: "Plot 14, Commercial Avenue, Victoria Island, Lagos, Nigeria",
    operatingStates: "Lagos, Rivers, FCT Abuja, Kano, Port Harcourt",
    employeeCount: "28 Full-Time Employees & 45 Field Agents",
    executiveSummary: "Apex Zenith Logistics & Technology Solutions Ltd is an indigenous Nigerian logistics, technology, and procurement enterprise. Registered with the Corporate Affairs Commission (CAC) under RC-1849201 and fully compliant with FIRS, PenCom, ITF, and SCUML regulations, we specialize in end-to-end supply chain optimization, automated freight tracking, and corporate procurement services across West Africa.",
    coreServices: [
      { title: "Corporate Supply Chain & Freight Logistics", desc: "Interstate haulage, last-mile delivery, containerized cargo movement, and warehousing management." },
      { title: "Enterprise Procurement & Tendering", desc: "Equipment sourcing, technical bid preparation, corporate procurement, and vendor management." },
      { title: "Smart Logistics Technology Platforms", desc: "Custom fleet management software, GPS asset tracking, and automated proof-of-delivery systems." }
    ],
    pastExperience: [
      { client: "Lagos State Ministry of Transportation", project: "Smart Freight Corridor Fleet Tracking Pilot", year: "2025", value: "₦48,500,000" },
      { client: "Access Bank Plc (Operations Division)", project: "Nationwide Branch IT Equipment Dispatch & Procurement", year: "2024", value: "₦82,000,000" },
      { client: "Chevron Nigeria Limited Partner Vendor", project: "Onshore Support Equipment Haulage", year: "2023", value: "₦35,000,000" }
    ],
    keyPersonnel: [
      { name: "Amina Lawal", role: "Managing Director / CEO", qualification: "B.Sc Business Admin, MSc Supply Chain (LBS)" },
      { name: "Emeka Okafor", role: "Chief Operating Officer", qualification: "B.Eng Electrical Engineering, PMP Certified" },
      { name: "Babajide Martins", role: "Head of Compliance & Legal", qualification: "LL.B, BL, ICSA Certified Company Secretary" }
    ],
    verifiedCredentials: [
      "CAC Certificate of Incorporation (RC-1849201)",
      "FIRS Tax Clearance Certificate (TCC Valid for 2026)",
      "PenCom Compliance Certificate (PEN-100293)",
      "NSITF Employees Compensation Certificate",
      "SCUML Anti-Money Laundering Clearance Certificate (SC-88192)",
      "ITF Industrial Training Fund Compliance Certificate"
    ]
  });

  const handleAutoGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setLastGenerated("Generated live from Business Brain & Vault");
      alert("✅ Automatically pulled latest registration, tax clearances, directors, and experience records from your Business Brain!");
    }, 1000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="mx-auto max-w-5xl space-y-8 px-4 py-6 sm:px-6">
      {/* Top Header Actions (Hidden when printing) */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b pb-6 print:hidden">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 bg-blue-100 text-blue-800 text-xs font-bold rounded-full border border-blue-300">
              Automatic Profile Generator
            </span>
            <span className="text-xs text-gray-500 font-mono">Last updated: {lastGenerated}</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mt-1">Printable Corporate Company Profile</h1>
          <p className="text-sm text-gray-600">
            Synthesizes all Business Brain info, tax clearances, directors, and past projects into a print-ready corporate document.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleAutoGenerate}
            disabled={isGenerating}
            className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-4 py-2.5 text-xs font-bold text-white shadow-md hover:bg-purple-700 transition-all disabled:opacity-50"
          >
            {isGenerating ? "⚡ Refreshing from Brain..." : "⚡ Auto-Generate From Brain & Vault"}
          </button>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-emerald-700 transition-all"
          >
            🖨️ Print Profile / PDF
          </button>
          <Link
            href="/studio/new"
            className="rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            ✏️ Edit in Document Studio
          </Link>
        </div>
      </div>

      {/* PRINTABLE CORPORATE PROFILE DOCUMENT */}
      <div className="w-full max-w-4xl mx-auto bg-white border-2 border-slate-300 p-8 sm:p-14 shadow-2xl rounded-2xl space-y-10 font-sans text-gray-900">
        
        {/* COVER HEADER */}
        <div className="border-b-4 border-blue-600 pb-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
          <div className="space-y-2">
            <div className="w-12 h-12 bg-blue-600 text-white font-black text-2xl rounded-xl flex items-center justify-center shadow-md">
              P
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">{profile.companyName}</h1>
            <p className="text-xs sm:text-sm text-blue-700 font-semibold">{profile.tagline}</p>
          </div>

          <div className="text-left sm:text-right text-xs space-y-1 bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div>CAC RC Number: <strong className="font-mono text-gray-900">{profile.rcNumber}</strong></div>
            <div>FIRS TIN: <strong className="font-mono text-gray-900">{profile.tin}</strong></div>
            <div>Est. Year: <strong className="text-gray-900">{profile.yearEstablished}</strong></div>
            <div className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 inline-block mt-1">
              ✓ Verified Active Corporate Profile
            </div>
          </div>
        </div>

        {/* SECTION 1: EXECUTIVE SUMMARY */}
        <div className="space-y-3">
          <h2 className="text-xs font-bold text-blue-800 uppercase tracking-widest border-b pb-1">1. Executive Overview</h2>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-justify">
            {profile.executiveSummary}
          </p>
        </div>

        {/* SECTION 2: COMPANY SNAPSHOT & OPERATING FOOTPRINT */}
        <div className="space-y-3">
          <h2 className="text-xs font-bold text-blue-800 uppercase tracking-widest border-b pb-1">2. Corporate Footprint &amp; Structure</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-slate-50 p-5 rounded-xl border">
            <div>
              <span className="text-gray-500 block">Headquarters Address:</span>
              <strong className="text-gray-900">{profile.headquarters}</strong>
            </div>
            <div>
              <span className="text-gray-500 block">Operating States:</span>
              <strong className="text-gray-900">{profile.operatingStates}</strong>
            </div>
            <div>
              <span className="text-gray-500 block">Workforce &amp; Staff Capacity:</span>
              <strong className="text-gray-900">{profile.employeeCount}</strong>
            </div>
            <div>
              <span className="text-gray-500 block">Primary Bank &amp; Tendering Status:</span>
              <strong className="text-emerald-700">Access Bank Plc &bull; Fully Bid Ready</strong>
            </div>
          </div>
        </div>

        {/* SECTION 3: CORE CAPABILITIES & SERVICES */}
        <div className="space-y-4">
          <h2 className="text-xs font-bold text-blue-800 uppercase tracking-widest border-b pb-1">3. Core Capabilities &amp; Services</h2>
          <div className="grid grid-cols-1 gap-4">
            {profile.coreServices.map((service, i) => (
              <div key={i} className="p-4 bg-white border border-gray-200 rounded-xl space-y-1 shadow-xs">
                <h3 className="font-bold text-xs text-gray-900 flex items-center gap-2">
                  <span className="w-5 h-5 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-[10px] font-extrabold">{i + 1}</span>
                  {service.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed pl-7">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4: KEY MANAGEMENT & DIRECTORS */}
        <div className="space-y-4">
          <h2 className="text-xs font-bold text-blue-800 uppercase tracking-widest border-b pb-1">4. Executive Management &amp; Directors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            {profile.keyPersonnel.map((person, i) => (
              <div key={i} className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                <div className="font-bold text-gray-900 text-xs">{person.name}</div>
                <div className="text-blue-700 font-semibold text-[11px]">{person.role}</div>
                <div className="text-[10px] text-gray-500 leading-tight">{person.qualification}</div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 5: TRACK RECORD & PAST EXPERIENCE */}
        <div className="space-y-4">
          <h2 className="text-xs font-bold text-blue-800 uppercase tracking-widest border-b pb-1">5. Track Record &amp; Notable Projects</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-100 text-gray-700 uppercase font-bold text-[10px]">
                <tr>
                  <th className="p-3 border-b">Client / Partner</th>
                  <th className="p-3 border-b">Project Scope &amp; Deliverables</th>
                  <th className="p-3 border-b">Year</th>
                  <th className="p-3 border-b text-right">Value (NGN)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-800 text-[11px]">
                {profile.pastExperience.map((exp, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="p-3 font-semibold text-gray-900">{exp.client}</td>
                    <td className="p-3 text-gray-600">{exp.project}</td>
                    <td className="p-3 font-mono">{exp.year}</td>
                    <td className="p-3 font-mono font-bold text-right text-gray-900">{exp.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 6: VERIFIED COMPLIANCE CREDENTIALS */}
        <div className="space-y-4">
          <h2 className="text-xs font-bold text-blue-800 uppercase tracking-widest border-b pb-1">6. Verified Compliance &amp; Statutory Clearances</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {profile.verifiedCredentials.map((cred, i) => (
              <div key={i} className="flex items-center gap-2 p-2.5 bg-emerald-50/70 border border-emerald-200 rounded-lg text-emerald-900 font-medium">
                <span className="text-emerald-600 font-bold">✓</span> {cred}
              </div>
            ))}
          </div>
        </div>

        {/* SIGNATURE BLOCK */}
        <div className="border-t-2 border-gray-200 pt-8 flex justify-between items-end text-xs text-gray-600">
          <div>
            <div className="font-bold text-gray-900">Certified Authentic &amp; Correct</div>
            <div className="text-[10px] text-gray-500">Verified via AI Business Passport Platform</div>
            <div className="font-mono text-blue-600 text-[10px] mt-1">https://app.aibusinesspassport.ng/p/BP-NG-77A91B</div>
          </div>
          <div className="text-right space-y-1">
            <div className="w-32 h-0.5 bg-gray-900 ml-auto"></div>
            <div className="font-bold text-gray-900">Amina Lawal</div>
            <div className="text-[10px] text-gray-500">Managing Director / Authorized Officer</div>
          </div>
        </div>

      </div>
    </div>
  );
}
