"use client";

import { useState } from "react";
import Link from "next/link";
import { PASSPORT_THEMES, PassportStyleTheme } from "@/lib/passport/themes";

export default function PrintablePassportPage() {
  const [selectedTheme, setSelectedTheme] = useState<PassportStyleTheme>("professional");
  const [printFormat, setPrintFormat] = useState<"cards" | "envelope" | "tshirt" | "letterhead" | "invoice" | "plaque" | "certificate">("cards");
  const [isFlipped, setIsFlipped] = useState(false);

  // Editable Company Logo Symbol
  const [logoSymbol, setLogoSymbol] = useState("P");
  const [logoColor, setLogoColor] = useState("bg-blue-600");

  // Editable Cardholder State (Driver's License Style)
  const [holderName, setHolderName] = useState("Amina Lawal");
  const [holderRole, setHolderRole] = useState("Managing Director / CEO");
  const [holderPhone, setHolderPhone] = useState("+234 803 123 4567");
  const [holderEmail, setHolderEmail] = useState("a.lawal@apexzenithlogistics.ng");
  const [holderId] = useState("EMP-2026-0091");
  const [issueDate] = useState("04/2026");
  const [expiryDate] = useState("04/2028");

  // Editable Letterhead Body
  const [letterSubject, setLetterSubject] = useState("LETTER OF INTRODUCTION & BUSINESS CAPABILITY STATEMENT");
  const [letterRecipient, setLetterRecipient] = useState("To Whom It May Concern / Tendering Evaluation Board");
  const [letterBody, setLetterBody] = useState(
    "We write to formally introduce Apex Zenith Logistics & Technology Solutions Ltd (RC-1849201, TIN: 29481029-0001). Fully compliant with FIRS, CAC, PenCom, SCUML, and ITF regulations, our enterprise specializes in corporate freight, supply chain management, and technology deployment across Nigeria. Kindly inspect our verified credentials via the QR code below."
  );

  // Editable Envelope State
  const [envelopeRecipientName, setEnvelopeRecipientName] = useState("The Managing Director");
  const [envelopeRecipientCompany, setEnvelopeRecipientCompany] = useState("Access Bank Plc (Corporate Banking Division)");
  const [envelopeRecipientAddress, setEnvelopeRecipientAddress] = useState("Plot 999, Victoria Island, Lagos, Nigeria");

  // Editable T-Shirt State
  const [tshirtColor, setTshirtColor] = useState<"dark" | "white" | "navy">("dark");

  // Company Brain Snapshot
  const business = {
    legalName: "Apex Zenith Logistics & Technology Solutions Ltd",
    tradingName: "Apex Zenith Logistics",
    rcNumber: "RC-1849201",
    tin: "29481029-0001",
    businessType: "Limited Liability Company (Private)",
    address: "Plot 14, Commercial Avenue, Victoria Island, Lagos, Nigeria",
    phone: "+234 803 123 4567",
    email: "info@apexzenithlogistics.ng",
    website: "https://apexzenithlogistics.ng",
    passportId: "BP-NG-77A91B",
    qrUrl: "https://app.aibusinesspassport.ng/p/BP-NG-77A91B",
    verifiedAgencies: [
      { name: "CAC (Corporate Affairs Commission)", status: "Active & Filed", badge: "CAC Verified" },
      { name: "FIRS (Federal Inland Revenue Service)", status: "TIN Active / Tax Clearance Valid", badge: "TIN Verified" },
      { name: "SCUML (Anti-Money Laundering)", status: "Registered & Certificate Active", badge: "SCUML Verified" },
      { name: "PenCom (National Pension Commission)", status: "Compliance Certificate Current", badge: "PenCom Compliant" },
    ]
  };

  const theme = PASSPORT_THEMES[selectedTheme];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="mx-auto max-w-5xl space-y-8 px-3 sm:px-6 py-6 font-sans">
      {/* Top Header Actions (Hidden when printing) */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b pb-6 print:hidden">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full border border-emerald-300">
              Complete Business Peripherals &amp; Branding Studio
            </span>
            <span className="text-xs text-gray-500 font-mono">ID: {business.passportId}</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mt-1">Printable Business Peripherals Studio</h1>
          <p className="text-sm text-gray-600">
            Automatically design Verified Business Cards, Envelopes, Staff T-Shirts, Corporate Letterheads, Invoices, Desk Plaques, and Certificates.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-emerald-700 transition-all"
          >
            🖨️ Print / Save PDF
          </button>
          <Link
            href="/passport"
            className="rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            &larr; Back to Passport
          </Link>
        </div>
      </div>

      {/* PERIPHERAL FORMAT SELECTOR & CONTROLS (Hidden when printing) */}
      <div className="rounded-2xl border bg-white p-4 sm:p-6 shadow-sm space-y-6 print:hidden">
        <div className="space-y-3">
          <h2 className="text-base font-bold text-gray-900">Select Business Peripheral to Customize</h2>
          
          {/* Format Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2 bg-slate-100 p-1.5 rounded-xl text-xs font-bold">
            <button
              onClick={() => setPrintFormat("cards")}
              className={`py-2 px-2.5 rounded-lg transition-all text-center ${
                printFormat === "cards" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              🎴 ID Card
            </button>

            <button
              onClick={() => setPrintFormat("envelope")}
              className={`py-2 px-2.5 rounded-lg transition-all text-center ${
                printFormat === "envelope" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              ✉️ Envelope
            </button>

            <button
              onClick={() => setPrintFormat("tshirt")}
              className={`py-2 px-2.5 rounded-lg transition-all text-center ${
                printFormat === "tshirt" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              👕 T-Shirt
            </button>

            <button
              onClick={() => setPrintFormat("letterhead")}
              className={`py-2 px-2.5 rounded-lg transition-all text-center ${
                printFormat === "letterhead" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              📄 Letterhead
            </button>

            <button
              onClick={() => setPrintFormat("invoice")}
              className={`py-2 px-2.5 rounded-lg transition-all text-center ${
                printFormat === "invoice" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              🧾 Invoice
            </button>

            <button
              onClick={() => setPrintFormat("plaque")}
              className={`py-2 px-2.5 rounded-lg transition-all text-center ${
                printFormat === "plaque" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              🖼️ Desk Plaque
            </button>

            <button
              onClick={() => setPrintFormat("certificate")}
              className={`py-2 px-2.5 rounded-lg transition-all text-center col-span-2 sm:col-span-1 ${
                printFormat === "certificate" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              📜 Certificate
            </button>
          </div>
        </div>

        {/* LOGO & BRANDING CUSTOMIZER (Applies across all peripherals) */}
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 text-xs">
          <div className="font-bold text-gray-800 flex items-center justify-between">
            <span>🎨 Editable Logo &amp; Brand Accent Settings:</span>
            <span className="text-gray-500 font-normal">Applies automatically to all printables</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <label className="font-semibold text-gray-700">Logo Symbol / Initials:</label>
              <div className="flex gap-1.5">
                {["P", "⚡", "🏢", "🦅", "📦", "⚖️", "📊", "🛡️", "AZ"].map((sym) => (
                  <button
                    key={sym}
                    onClick={() => setLogoSymbol(sym)}
                    className={`w-7 h-7 rounded-lg border text-xs font-bold transition-all ${
                      logoSymbol === sym ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-800 hover:bg-gray-100"
                    }`}
                  >
                    {sym}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <label className="font-semibold text-gray-700">Logo Background Color:</label>
              <div className="flex gap-1.5">
                {[
                  { name: "Blue", class: "bg-blue-600" },
                  { name: "Emerald", class: "bg-emerald-600" },
                  { name: "Purple", class: "bg-purple-600" },
                  { name: "Slate", class: "bg-slate-900" },
                  { name: "Amber", class: "bg-amber-600" },
                ].map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setLogoColor(c.class)}
                    className={`w-6 h-6 rounded-full border ${c.class} ${
                      logoColor === c.class ? "ring-2 ring-blue-500 ring-offset-2" : ""
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Editable Inputs for Cards */}
        {printFormat === "cards" && (
          <div className="space-y-4 border-t pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <div>
                <label className="font-bold text-gray-700 block mb-1">Cardholder Name:</label>
                <input
                  type="text"
                  value={holderName}
                  onChange={(e) => setHolderName(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 p-2 text-xs font-medium"
                />
              </div>

              <div>
                <label className="font-bold text-gray-700 block mb-1">Position / Role:</label>
                <select
                  value={holderRole}
                  onChange={(e) => setHolderRole(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 p-2 text-xs font-medium"
                >
                  <option value="Managing Director / CEO">Managing Director / CEO</option>
                  <option value="Executive Director">Executive Director</option>
                  <option value="Chief Technology Officer">Chief Technology Officer</option>
                  <option value="Senior Operations Manager">Senior Operations Manager</option>
                  <option value="Legal Counsel / Secretary">Legal Counsel / Secretary</option>
                  <option value="Authorized Staff Officer">Authorized Staff Officer</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-gray-700 block mb-1">Direct Phone:</label>
                <input
                  type="text"
                  value={holderPhone}
                  onChange={(e) => setHolderPhone(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 p-2 text-xs font-medium"
                />
              </div>

              <div>
                <label className="font-bold text-gray-700 block mb-1">Direct Email:</label>
                <input
                  type="text"
                  value={holderEmail}
                  onChange={(e) => setHolderEmail(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 p-2 text-xs font-medium"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-3 text-xs">
                <span className="font-bold text-gray-700">Card Theme Style:</span>
                <div className="flex flex-wrap gap-1.5">
                  {(Object.keys(PASSPORT_THEMES) as PassportStyleTheme[]).map((key) => (
                    <button
                      key={key}
                      onClick={() => setSelectedTheme(key)}
                      className={`px-3 py-1 rounded-lg border text-xs capitalize transition-all ${
                        selectedTheme === key
                          ? "border-blue-600 bg-blue-600 text-white font-bold shadow-xs"
                          : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      {key}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setIsFlipped(!isFlipped)}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs rounded-xl shadow-md flex items-center gap-2 transition-all"
              >
                🔄 Flip Card ({isFlipped ? "Showing Back" : "Showing Front"})
              </button>
            </div>
          </div>
        )}

        {/* Editable Inputs for Envelope */}
        {printFormat === "envelope" && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 border-t pt-4 text-xs">
            <div>
              <label className="font-bold text-gray-700 block mb-1">Recipient Name / Title:</label>
              <input
                type="text"
                value={envelopeRecipientName}
                onChange={(e) => setEnvelopeRecipientName(e.target.value)}
                className="w-full rounded-lg border border-gray-300 p-2 font-medium"
              />
            </div>
            <div>
              <label className="font-bold text-gray-700 block mb-1">Recipient Company:</label>
              <input
                type="text"
                value={envelopeRecipientCompany}
                onChange={(e) => setEnvelopeRecipientCompany(e.target.value)}
                className="w-full rounded-lg border border-gray-300 p-2 font-medium"
              />
            </div>
            <div>
              <label className="font-bold text-gray-700 block mb-1">Recipient Address:</label>
              <input
                type="text"
                value={envelopeRecipientAddress}
                onChange={(e) => setEnvelopeRecipientAddress(e.target.value)}
                className="w-full rounded-lg border border-gray-300 p-2 font-medium"
              />
            </div>
          </div>
        )}

        {/* Editable Inputs for T-Shirt */}
        {printFormat === "tshirt" && (
          <div className="flex items-center gap-4 border-t pt-4 text-xs">
            <span className="font-bold text-gray-700">T-Shirt Color Theme:</span>
            <div className="flex gap-2">
              <button
                onClick={() => setTshirtColor("dark")}
                className={`px-3 py-1.5 rounded-lg border text-xs font-bold ${
                  tshirtColor === "dark" ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-800 border-gray-300"
                }`}
              >
                ⬛ Black / Dark Slate
              </button>
              <button
                onClick={() => setTshirtColor("navy")}
                className={`px-3 py-1.5 rounded-lg border text-xs font-bold ${
                  tshirtColor === "navy" ? "bg-blue-900 text-white border-blue-900" : "bg-white text-slate-800 border-gray-300"
                }`}
              >
                🟦 Corporate Navy
              </button>
              <button
                onClick={() => setTshirtColor("white")}
                className={`px-3 py-1.5 rounded-lg border text-xs font-bold ${
                  tshirtColor === "white" ? "bg-gray-100 text-slate-900 border-gray-400" : "bg-white text-slate-800 border-gray-300"
                }`}
              >
                ⬜ Crisp White
              </button>
            </div>
          </div>
        )}

        {/* Editable Inputs for Letterhead */}
        {printFormat === "letterhead" && (
          <div className="space-y-3 border-t pt-4 text-xs">
            <div>
              <label className="font-bold text-gray-700 block mb-1">Letter Subject:</label>
              <input
                type="text"
                value={letterSubject}
                onChange={(e) => setLetterSubject(e.target.value)}
                className="w-full rounded-lg border border-gray-300 p-2 font-medium"
              />
            </div>
            <div>
              <label className="font-bold text-gray-700 block mb-1">Recipient Salutation:</label>
              <input
                type="text"
                value={letterRecipient}
                onChange={(e) => setLetterRecipient(e.target.value)}
                className="w-full rounded-lg border border-gray-300 p-2 font-medium"
              />
            </div>
            <div>
              <label className="font-bold text-gray-700 block mb-1">Letter Body Content:</label>
              <textarea
                rows={3}
                value={letterBody}
                onChange={(e) => setLetterBody(e.target.value)}
                className="w-full rounded-lg border border-gray-300 p-2 font-medium"
              />
            </div>
          </div>
        )}
      </div>

      {/* DISPLAY & PRINT CONTENT AREA */}
      <div>
        {/* FORMAT 1: RESPONSIVE 3D FLIP BUSINESS CARD (UPDATED HEADER TO COMPANY NAME & REMOVED PASSPORT) */}
        {printFormat === "cards" && (
          <div className="space-y-8">
            <div className="print:hidden space-y-4 flex flex-col items-center">
              <div className="text-xs font-bold text-gray-500 flex items-center gap-2">
                <span>Driver&apos;s License Style Responsive Card Preview</span>
                <span className="text-blue-600 font-normal">(Tap card or button to flip)</span>
              </div>

              {/* Responsive 3D Card Wrapper (Fluid Width max 420px) */}
              <div
                onClick={() => setIsFlipped(!isFlipped)}
                className="w-full max-w-[420px] aspect-[1.65/1] min-h-[230px] cursor-pointer select-none group"
                style={{ perspective: "1000px" }}
              >
                <div
                  className={`w-full h-full duration-700 transform-style-3d relative transition-transform ${
                    isFlipped ? "rotate-y-180" : ""
                  }`}
                  style={{
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* FRONT SIDE */}
                  <div
                    className={`absolute inset-0 w-full h-full rounded-2xl p-4 sm:p-5 shadow-2xl border-2 transition-all flex flex-col justify-between overflow-hidden ${theme.containerClass}`}
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    {/* Header Banner - COMPANY NAME HERE & VERIFIED BUSINESS CARD ALONE */}
                    <div className="flex justify-between items-center border-b border-gray-200/80 pb-1.5">
                      <div className="flex items-center gap-2">
                        <div className={`w-7 h-7 ${logoColor} text-white rounded-md flex items-center justify-center font-black text-xs shrink-0 shadow-xs`}>
                          {logoSymbol}
                        </div>
                        <div>
                          <div className="text-[10px] sm:text-[11px] font-black uppercase tracking-tight text-gray-900 truncate max-w-[200px]">
                            {business.legalName}
                          </div>
                          <div className="text-[8px] sm:text-[9px] font-bold text-gray-500 tracking-wider uppercase">
                            VERIFIED BUSINESS CARD
                          </div>
                        </div>
                      </div>
                      <span className={`text-[8px] sm:text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${theme.badgeClass}`}>
                        CAC VERIFIED
                      </span>
                    </div>

                    {/* Card Body */}
                    <div className="flex items-center gap-3 sm:gap-4 py-1">
                      <div className="w-16 h-20 sm:w-20 sm:h-24 bg-slate-100 border-2 border-slate-300 rounded-xl flex flex-col items-center justify-center shrink-0 relative overflow-hidden shadow-inner">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-300 flex items-center justify-center font-bold text-slate-600 text-xs sm:text-base mb-1">
                          👤
                        </div>
                        <span className="text-[7px] sm:text-[8px] font-bold text-slate-500 uppercase">{holderId}</span>
                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400/20 via-transparent to-purple-400/20 pointer-events-none"></div>
                      </div>

                      <div className="space-y-1 flex-1 min-w-0">
                        <div>
                          <span className="text-[7px] sm:text-[8px] text-gray-500 uppercase font-bold block">Cardholder Name</span>
                          <h3 className="text-xs sm:text-sm font-black text-gray-900 tracking-tight leading-tight uppercase truncate">
                            {holderName}
                          </h3>
                        </div>

                        <div>
                          <span className="text-[7px] sm:text-[8px] text-gray-500 uppercase font-bold block">Position / Role</span>
                          <p className="text-[11px] sm:text-xs font-extrabold text-blue-700 leading-tight truncate">
                            {holderRole}
                          </p>
                        </div>

                        <div>
                          <span className="text-[7px] sm:text-[8px] text-gray-500 uppercase font-bold block">Company / Business</span>
                          <p className="text-[10px] sm:text-[11px] font-bold text-gray-800 truncate">
                            {business.tradingName}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Footer Details */}
                    <div className="flex justify-between items-end border-t border-gray-200/80 pt-1 text-[8px] sm:text-[9px] text-gray-600 font-mono">
                      <div>
                        <div>RC: <strong className="text-gray-900">{business.rcNumber}</strong> | TIN: <strong className="text-gray-900">{business.tin}</strong></div>
                        <div>ISS: <strong>{issueDate}</strong> | EXP: <strong className="text-emerald-700">{expiryDate}</strong></div>
                      </div>
                      <span className="text-[8px] font-bold text-blue-600 underline">Tap to Flip 🔄</span>
                    </div>
                  </div>

                  {/* BACK SIDE */}
                  <div
                    className="absolute inset-0 w-full h-full rounded-2xl p-4 sm:p-5 shadow-2xl border-2 border-slate-700 bg-slate-900 text-white flex flex-col justify-between overflow-hidden"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <div className="w-[calc(100%+2.5rem)] -mx-5 -mt-5 h-7 bg-slate-950 flex items-center justify-between px-5 text-[8px] text-slate-400 font-mono">
                      <span>MAGNETIC ENCODED DATA</span>
                      <span>NDPA 2023 SECURE</span>
                    </div>

                    <div className="flex items-center justify-between gap-3 my-auto">
                      <div className="space-y-1.5 text-[9px] sm:text-[10px] text-slate-300 min-w-0">
                        <div>
                          <span className="text-slate-400 text-[7px] block uppercase font-bold">Direct Phone Number</span>
                          <strong className="text-white text-xs font-mono">{holderPhone}</strong>
                        </div>

                        <div>
                          <span className="text-slate-400 text-[7px] block uppercase font-bold">Direct Email Address</span>
                          <strong className="text-sky-400 text-xs font-mono truncate block">{holderEmail}</strong>
                        </div>

                        <div>
                          <span className="text-slate-400 text-[7px] block uppercase font-bold">Office Address</span>
                          <span className="text-slate-300 text-[8px] leading-tight block truncate">{business.address}</span>
                        </div>
                      </div>

                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white p-1 rounded-xl shadow-lg shrink-0 flex flex-col items-center justify-between">
                        <div className="w-full h-full bg-slate-900 rounded flex flex-col justify-between p-1">
                          <div className="flex justify-between">
                            <div className="w-2.5 h-2.5 bg-white"></div>
                            <div className="w-2.5 h-2.5 bg-white"></div>
                          </div>
                          <div className="text-[5px] sm:text-[6px] text-center text-white font-mono font-bold">SCAN ME</div>
                          <div className="flex justify-between">
                            <div className="w-2.5 h-2.5 bg-white"></div>
                            <div className="w-1.5 h-1.5 bg-white"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-slate-800 pt-1 text-[7px] sm:text-[8px] text-slate-400 leading-tight">
                      Issued under NDPA 2023. Property of {business.tradingName}. If found return to company address or call +234 800 000 7000.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PRINT DUAL SIDE VIEW */}
            <div className="hidden print:grid grid-cols-2 gap-6 justify-items-center">
              <div className="w-[3.5in] h-[2.125in] border border-gray-400 rounded-xl p-4 bg-white text-gray-900 flex flex-col justify-between font-sans">
                <div className="flex justify-between items-center border-b pb-1">
                  <span className="text-[8pt] font-black uppercase text-gray-900">{business.legalName}</span>
                  <span className="text-[7pt] font-bold bg-emerald-100 px-1 text-emerald-900">VERIFIED BUSINESS CARD</span>
                </div>
                <div className="flex items-center gap-3 py-1">
                  <div className="w-12 h-14 bg-gray-200 border border-gray-400 rounded flex items-center justify-center text-xs font-bold shrink-0">PHOTO</div>
                  <div className="text-[8pt] leading-tight">
                    <div className="font-black text-[9pt] uppercase">{holderName}</div>
                    <div className="font-bold text-blue-700">{holderRole}</div>
                    <div className="font-semibold text-gray-800">{business.tradingName}</div>
                  </div>
                </div>
                <div className="border-t pt-1 text-[7pt] font-mono flex justify-between">
                  <span>RC: {business.rcNumber} | TIN: {business.tin}</span>
                  <span>EXP: {expiryDate}</span>
                </div>
              </div>

              <div className="w-[3.5in] h-[2.125in] border border-slate-700 rounded-xl p-4 bg-slate-900 text-white flex flex-col justify-between font-sans">
                <div className="text-[7pt] font-mono text-sky-300 border-b border-slate-700 pb-1">VERIFICATION &amp; CONTACT DETAILS</div>
                <div className="flex items-center justify-between gap-2 text-[7.5pt]">
                  <div className="space-y-0.5">
                    <div>Phone: <strong className="text-white">{holderPhone}</strong></div>
                    <div>Email: <strong className="text-sky-300">{holderEmail}</strong></div>
                    <div className="text-[6.5pt] text-slate-300">{business.address}</div>
                  </div>
                  <div className="w-12 h-12 bg-white text-slate-900 text-[6pt] font-mono font-bold flex items-center justify-center p-1 text-center border">QR CODE</div>
                </div>
                <div className="text-[6pt] text-slate-400 border-t border-slate-800 pt-1">
                  Property of {business.tradingName}. Issued under NDPA 2023.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FORMAT 2: CORPORATE ENVELOPE DESIGN (DL Envelope Size 220mm x 110mm) */}
        {printFormat === "envelope" && (
          <div className="w-full max-w-3xl mx-auto bg-white border-2 border-slate-300 p-8 sm:p-12 shadow-2xl rounded-2xl space-y-12 font-sans text-gray-900">
            <div className="flex justify-between items-start border-b pb-6">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 ${logoColor} text-white font-black text-2xl rounded-xl flex items-center justify-center shadow-md`}>
                  {logoSymbol}
                </div>
                <div>
                  <h2 className="font-extrabold text-base text-gray-900">{business.legalName}</h2>
                  <p className="text-xs text-gray-500 font-mono">RC: {business.rcNumber} &bull; FIRS TIN: {business.tin}</p>
                  <p className="text-[11px] text-gray-600">{business.address}</p>
                </div>
              </div>

              {/* Envelope Stamp / Postage Box */}
              <div className="w-20 h-24 border-2 border-dashed border-gray-400 rounded-lg flex flex-col items-center justify-center text-center p-2 bg-slate-50">
                <span className="text-[9px] font-bold text-gray-400 uppercase">Affix Postage Stamp</span>
              </div>
            </div>

            {/* Recipient Address Box */}
            <div className="max-w-md mx-auto bg-slate-50 border border-slate-300 p-6 rounded-2xl space-y-1 shadow-sm">
              <span className="text-[10px] text-gray-400 uppercase font-bold block mb-1">RECIPIENT ADDRESS:</span>
              <div className="font-bold text-sm text-gray-900">{envelopeRecipientName}</div>
              <div className="font-semibold text-xs text-blue-700">{envelopeRecipientCompany}</div>
              <div className="text-xs text-gray-600">{envelopeRecipientAddress}</div>
            </div>

            <div className="border-t pt-4 flex justify-between items-center text-[10px] text-gray-400 font-mono">
              <span>DL Envelope Format (220mm &times; 110mm)</span>
              <span>Official Business Credentials Sealed</span>
            </div>
          </div>
        )}

        {/* FORMAT 3: BRANDED STAFF T-SHIRT MOCKUP & DESIGN */}
        {printFormat === "tshirt" && (
          <div className="w-full max-w-3xl mx-auto space-y-6">
            <div className="text-center text-xs font-bold text-gray-500">
              Branded Corporate Staff T-Shirt Mockup &amp; Uniform Design
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
              {/* T-SHIRT FRONT */}
              <div className={`w-full max-w-[340px] aspect-[1/1.1] rounded-3xl p-8 shadow-2xl border-4 flex flex-col justify-between items-center text-center relative ${
                tshirtColor === "dark" ? "bg-slate-900 text-white border-slate-700" : tshirtColor === "navy" ? "bg-blue-950 text-white border-blue-800" : "bg-white text-slate-900 border-gray-300"
              }`}>
                <div className="w-24 h-6 bg-gray-700/40 rounded-b-full mx-auto border-b border-gray-600"></div>

                <div className="space-y-3 my-auto">
                  <div className={`w-16 h-16 ${logoColor} text-white font-black text-3xl rounded-2xl mx-auto flex items-center justify-center shadow-lg`}>
                    {logoSymbol}
                  </div>
                  <h3 className="font-black text-base uppercase tracking-wider">{business.tradingName}</h3>
                  <p className="text-[11px] font-semibold opacity-80 max-w-[220px] mx-auto">Supply Chain &amp; Tech Solutions</p>
                </div>

                <div className="text-[9px] opacity-60 font-mono uppercase">Staff Front Uniform Print</div>
              </div>

              {/* T-SHIRT BACK */}
              <div className={`w-full max-w-[340px] aspect-[1/1.1] rounded-3xl p-8 shadow-2xl border-4 flex flex-col justify-between items-center text-center relative ${
                tshirtColor === "dark" ? "bg-slate-900 text-white border-slate-700" : tshirtColor === "navy" ? "bg-blue-950 text-white border-blue-800" : "bg-white text-slate-900 border-gray-300"
              }`}>
                <div className="w-24 h-6 bg-gray-700/40 rounded-b-full mx-auto border-b border-gray-600"></div>

                <div className="space-y-4 my-auto">
                  <div className="w-20 h-20 bg-white p-1.5 rounded-2xl mx-auto shadow-lg flex flex-col justify-between">
                    <div className="w-full h-full bg-slate-900 rounded-xl flex flex-col justify-between p-1">
                      <div className="flex justify-between"><div className="w-3 h-3 bg-white"></div><div className="w-3 h-3 bg-white"></div></div>
                      <div className="text-[6px] text-center text-white font-mono font-bold">SCAN ME</div>
                      <div className="flex justify-between"><div className="w-3 h-3 bg-white"></div><div className="w-1.5 h-1.5 bg-white"></div></div>
                    </div>
                  </div>
                  <h4 className="font-extrabold text-xs tracking-widest uppercase">SCAN TO VERIFY CREDENTIALS</h4>
                  <p className="text-[10px] opacity-80 font-mono">app.aibusinesspassport.ng/p/BP-NG-77A91B</p>
                </div>

                <div className="text-[9px] opacity-60 font-mono uppercase">Staff Back Uniform Print</div>
              </div>
            </div>
          </div>
        )}

        {/* FORMAT 4: CORPORATE LETTERHEAD DESIGN */}
        {printFormat === "letterhead" && (
          <div className="w-full max-w-4xl mx-auto bg-white border-2 border-slate-300 p-8 sm:p-14 shadow-2xl rounded-2xl space-y-8 font-sans text-gray-900">
            <div className="border-b-4 border-emerald-600 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 ${logoColor} text-white font-black text-3xl rounded-2xl flex items-center justify-center shadow-md`}>
                  {logoSymbol}
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">{business.legalName}</h1>
                  <div className="text-xs text-emerald-700 font-bold">{business.tradingName} &bull; Corporate Letterhead</div>
                </div>
              </div>

              <div className="text-left sm:text-right text-xs space-y-1 font-mono text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-200">
                <div>RC: <strong className="text-slate-900">{business.rcNumber}</strong></div>
                <div>FIRS TIN: <strong className="text-slate-900">{business.tin}</strong></div>
                <div>Passport ID: <strong className="text-blue-700">{business.passportId}</strong></div>
              </div>
            </div>

            <div className="flex justify-between items-center text-xs text-slate-600 border-b pb-4 font-mono">
              <div>Date: <strong>{new Date().toLocaleDateString()}</strong></div>
              <div>Ref: <strong>AZL/OFF/2026/0912</strong></div>
            </div>

            <div className="space-y-4">
              <div className="text-xs font-bold text-slate-800">{letterRecipient}</div>
              <div className="p-3 bg-slate-50 border-l-4 border-emerald-600 rounded-r-xl font-bold text-sm text-slate-900 uppercase tracking-tight">
                SUBJECT: {letterSubject}
              </div>
            </div>

            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4 text-justify min-h-[250px]">
              <p>{letterBody}</p>
              <p>Thank you for your consideration.</p>
            </div>

            <div className="border-t-2 border-slate-200 pt-6 flex justify-between items-end text-xs text-slate-600">
              <div className="space-y-1">
                <div className="font-bold text-slate-900">Head Office Address:</div>
                <div className="text-[11px]">{business.address}</div>
                <div className="text-[11px] text-slate-500 font-mono">Tel: {business.phone} &bull; Email: {business.email}</div>
              </div>

              <div className="text-right space-y-1">
                <div className="w-32 h-0.5 bg-slate-900 ml-auto"></div>
                <div className="font-bold text-slate-900">Authorized Signature</div>
                <div className="text-[10px] text-emerald-700 font-bold">✓ AI Business Passport Sealed</div>
              </div>
            </div>
          </div>
        )}

        {/* FORMAT 5: OFFICIAL INVOICE & QUOTATION */}
        {printFormat === "invoice" && (
          <div className="w-full max-w-4xl mx-auto bg-white border-2 border-slate-300 p-8 sm:p-14 shadow-2xl rounded-2xl space-y-8 font-sans text-gray-900">
            <div className="flex justify-between items-start border-b-2 border-slate-900 pb-6">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 ${logoColor} text-white font-black text-2xl rounded-xl flex items-center justify-center shadow-md`}>
                  {logoSymbol}
                </div>
                <div>
                  <h1 className="text-2xl font-black text-slate-900 tracking-tight">TAX INVOICE</h1>
                  <p className="text-xs text-emerald-700 font-bold mt-0.5">FIRS Compliant Billing Credential</p>
                </div>
              </div>

              <div className="text-right text-xs space-y-1 font-mono">
                <div className="text-base font-black text-blue-600">INV-2026-0918</div>
                <div>Date: {new Date().toLocaleDateString()}</div>
                <div>CAC RC: {business.rcNumber}</div>
                <div>FIRS TIN: {business.tin}</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 text-xs bg-slate-50 p-4 rounded-xl border">
              <div>
                <span className="text-slate-500 font-bold block uppercase text-[10px]">Billed From (Service Provider):</span>
                <strong className="text-slate-900 font-bold block text-sm">{business.legalName}</strong>
                <span className="text-slate-600">{business.address}</span>
              </div>

              <div>
                <span className="text-slate-500 font-bold block uppercase text-[10px]">Billed To (Client):</span>
                <strong className="text-slate-900 font-bold block text-sm">Lagos State Procurement Agency</strong>
                <span className="text-slate-600">Block 3, Secretariat Complex, Alausa, Ikeja, Lagos</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
                <thead className="bg-slate-900 text-white font-bold uppercase text-[10px]">
                  <tr>
                    <th className="p-3">Item / Service Description</th>
                    <th className="p-3 text-center">Qty</th>
                    <th className="p-3 text-right">Unit Rate (NGN)</th>
                    <th className="p-3 text-right">Total Amount (NGN)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-800 text-[11px]">
                  <tr>
                    <td className="p-3 font-semibold">Smart Fleet Corridor GPS Tracking Equipment &amp; Deployment</td>
                    <td className="p-3 text-center">10</td>
                    <td className="p-3 text-right font-mono">₦2,500,000</td>
                    <td className="p-3 text-right font-mono font-bold">₦25,000,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex justify-end text-xs">
              <div className="w-64 space-y-2 bg-slate-50 p-4 rounded-xl border font-mono">
                <div className="flex justify-between"><span>Subtotal:</span><span className="font-bold">₦25,000,000</span></div>
                <div className="flex justify-between text-slate-600"><span>VAT (7.5%):</span><span>₦1,875,000</span></div>
                <div className="flex justify-between text-sm font-black text-slate-900 border-t pt-2"><span>Total Due:</span><span className="text-emerald-700">₦26,875,000</span></div>
              </div>
            </div>
          </div>
        )}

        {/* FORMAT 6: OFFICE DESK PLAQUE / WINDOW DISPLAY PLAQUE */}
        {printFormat === "plaque" && (
          <div className="w-full max-w-2xl mx-auto bg-slate-900 text-white border-4 border-amber-500 p-8 sm:p-12 shadow-2xl rounded-3xl text-center space-y-6">
            <div className={`w-16 h-16 ${logoColor} text-white font-black text-3xl rounded-2xl mx-auto flex items-center justify-center shadow-lg`}>
              {logoSymbol}
            </div>
            <div>
              <span className="px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold rounded-full border border-amber-500/40">
                OFFICIAL VERIFIED DESK PLAQUE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-2">{business.legalName}</h2>
              <p className="text-xs text-slate-400 font-mono mt-1">CAC RC: {business.rcNumber} &bull; FIRS TIN: {business.tin}</p>
            </div>

            <div className="w-40 h-40 bg-white p-3 rounded-2xl mx-auto shadow-2xl flex flex-col items-center justify-between">
              <div className="w-full h-full bg-slate-900 rounded-xl flex flex-col justify-between p-2">
                <div className="flex justify-between"><div className="w-6 h-6 bg-white"></div><div className="w-6 h-6 bg-white"></div></div>
                <div className="text-[9px] text-center text-white font-mono font-bold">SCAN TO VERIFY</div>
                <div className="flex justify-between"><div className="w-6 h-6 bg-white"></div><div className="w-3 h-3 bg-white"></div></div>
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-xs font-bold text-emerald-400">✓ CAC, FIRS, PenCom &amp; SCUML Verified Active</div>
              <div className="text-[11px] text-slate-400 font-mono">Scan QR Code to view real-time compliance status &amp; credentials.</div>
            </div>
          </div>
        )}

        {/* FORMAT 7: A4 CERTIFICATE OF VERIFICATION */}
        {printFormat === "certificate" && (
          <div className="w-full max-w-3xl mx-auto bg-white border-2 border-slate-300 p-8 md:p-12 shadow-2xl rounded-2xl space-y-8 relative">
            <div className="absolute top-6 right-6 text-right">
              <span className="px-3 py-1 bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold rounded-full">
                ✓ Official Verification Status: ACTIVE
              </span>
            </div>

            <div className="text-center space-y-2 border-b pb-6">
              <div className={`w-12 h-12 ${logoColor} text-white rounded-xl mx-auto flex items-center justify-center font-black text-2xl shadow-md`}>
                {logoSymbol}
              </div>
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-wide">Certificate of Business Verification</h2>
              <p className="text-xs text-gray-500 font-mono">Issued by AI Business Passport Nigeria &bull; Credential Record #{business.passportId}</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Registered Entity &amp; Cardholder</h3>
              <div className="grid grid-cols-2 gap-4 text-xs bg-gray-50 p-4 rounded-xl border">
                <div>
                  <span className="text-gray-500 block">Cardholder Name &amp; Title:</span>
                  <strong className="text-gray-900 text-sm block">{holderName} ({holderRole})</strong>
                </div>
                <div>
                  <span className="text-gray-500 block">Legal Business Name:</span>
                  <strong className="text-gray-900 text-sm block">{business.legalName}</strong>
                </div>
              </div>
            </div>

            <div className="border-t pt-6 flex items-center justify-between">
              <div className="text-xs space-y-1">
                <div className="font-bold text-gray-900">Verification URL &amp; Public Record:</div>
                <div className="font-mono text-blue-600 text-[11px]">{business.qrUrl}</div>
              </div>
              <div className="w-16 h-16 bg-gray-900 rounded-lg text-white font-mono text-[9px] flex items-center justify-center p-1 text-center font-bold">
                QR SEAL
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Print Marketplace Prompt */}
      <div className="rounded-xl border border-blue-200 bg-blue-50 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden">
        <div>
          <h3 className="font-bold text-blue-900 text-sm">Order Physical PVC Cards, Envelopes, or T-Shirts Delivered</h3>
          <p className="text-xs text-blue-700 mt-1">
            Order printed PVC driver&apos;s license style business cards, corporate letterheads, and branded T-shirts delivered anywhere in Nigeria via our verified Print Marketplace.
          </p>
        </div>
        <button
          onClick={() => alert("Redirecting to Print Marketplace catalogue. You can order 100x PVC NFC cards for ₦12,500 or 10x Staff T-Shirts for ₦45,000.")}
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-sm shrink-0"
        >
          📦 Order Printed Stationery &amp; T-Shirts
        </button>
      </div>
    </div>
  );
}
