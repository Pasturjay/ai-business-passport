"use client";

import { useState } from "react";
import Link from "next/link";

interface LineItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
}

export default function LiveInvoiceQuotationStudioPage() {
  // Document Type Mode
  const [docType, setDocType] = useState<"invoice" | "proforma" | "quotation">("invoice");
  
  // Document Metadata State
  const [docNumber, setDocNumber] = useState("INV-2026-0918");
  const [docDate, setDocDate] = useState(new Date().toISOString().slice(0, 10));
  const [dueDate] = useState("2026-10-15");
  const [currencySymbol, setCurrencySymbol] = useState("₦");
  const [includeVat, setIncludeVat] = useState(true);
  const [vatRate] = useState(7.5);
  const [discountPercent] = useState(0);

  // Billed From (Service Provider) State
  const [providerName] = useState("Apex Zenith Logistics & Technology Solutions Ltd");
  const [providerTradingName] = useState("Apex Zenith Logistics");
  const [providerRcNumber] = useState("RC-1849201");
  const [providerTin] = useState("29481029-0001");
  const [providerAddress] = useState("Plot 14, Commercial Avenue, Victoria Island, Lagos, Nigeria");
  const [providerPhone] = useState("+234 803 123 4567");
  const [providerEmail] = useState("billing@apexzenithlogistics.ng");

  // Billed To (Client) State
  const [clientName, setClientName] = useState("Engr. Babatunde Adeyemi");
  const [clientCompany, setClientCompany] = useState("Lagos State Ministry of Works & Infrastructure");
  const [clientAddress, setClientAddress] = useState("Block 3, Secretariat Complex, Alausa, Ikeja, Lagos");

  // Payment Terms State
  const [bankName, setBankName] = useState("Access Bank Plc");
  const [accountNumber, setAccountNumber] = useState("0019283019");
  const [accountName] = useState("Apex Zenith Logistics Ltd");
  const [paymentTerms] = useState("50% upfront deposit upon order confirmation; 50% balance upon final inspection & delivery.");

  // Dynamic Line Items State
  const [items, setItems] = useState<LineItem[]>([
    {
      id: "item_1",
      description: "Smart Fleet Corridor GPS Asset Tracking Equipment & Installation",
      quantity: 10,
      unitPrice: 250000,
    },
    {
      id: "item_2",
      description: "Interstate Heavy Cargo Logistics & Transport Setup Fee",
      quantity: 1,
      unitPrice: 1500000,
    },
    {
      id: "item_3",
      description: "Annual Software License & Automated Proof-of-Delivery Portal",
      quantity: 1,
      unitPrice: 750000,
    },
  ]);

  // Calculations
  const subtotal = items.reduce((acc, item) => acc + item.quantity * item.unitPrice, 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const taxableAmount = subtotal - discountAmount;
  const vatAmount = includeVat ? (taxableAmount * vatRate) / 100 : 0;
  const totalDue = taxableAmount + vatAmount;

  // Add Line Item
  const handleAddItem = () => {
    const newItem: LineItem = {
      id: `item_${Date.now()}`,
      description: "New Service / Product Description",
      quantity: 1,
      unitPrice: 50000,
    };
    setItems((prev) => [...prev, newItem]);
  };

  // Remove Line Item
  const handleRemoveItem = (id: string) => {
    if (items.length <= 1) return;
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Update Line Item Field
  const handleItemChange = (id: string, field: keyof LineItem, value: any) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const handlePrint = () => {
    window.print();
  };

  const docTitleMap = {
    invoice: "TAX INVOICE",
    proforma: "PROFORMA INVOICE",
    quotation: "COMMERCIAL PRICE QUOTATION",
  };

  const docBadgeMap = {
    invoice: "Official FIRS Tax Invoice",
    proforma: "Advance Proforma Statement",
    quotation: "Official Price Quote",
  };

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-3 sm:px-6 py-6 font-sans">
      {/* Top Header Actions (Hidden when printing) */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b pb-6 print:hidden">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full border border-emerald-300">
              Live Realtime Invoice &amp; Quotation Studio
            </span>
            <span className="text-xs text-gray-500 font-mono">CAC RC: {providerRcNumber}</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mt-1">Live Invoice, Proforma &amp; Quotation Studio</h1>
          <p className="text-sm text-gray-600">
            Edit line items, VAT, client details, and payment terms in real time. Print directly or save clean PDF credentials.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-emerald-700 transition-all"
          >
            🖨️ Print Directly / Save PDF
          </button>
          <Link
            href="/dashboard"
            className="rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            &larr; Dashboard
          </Link>
        </div>
      </div>

      {/* DOCUMENT TYPE SELECTOR & QUICK TOGGLES (Hidden when printing) */}
      <div className="rounded-2xl border bg-white p-4 sm:p-6 shadow-sm space-y-4 print:hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold text-gray-700 block">Select Document Mode:</span>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setDocType("invoice");
                  setDocNumber("INV-2026-0918");
                }}
                className={`px-4 py-2 text-xs font-extrabold rounded-xl transition-all ${
                  docType === "invoice" ? "bg-slate-900 text-white shadow-sm" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                🧾 Tax Invoice
              </button>

              <button
                onClick={() => {
                  setDocType("proforma");
                  setDocNumber("PRO-2026-0412");
                }}
                className={`px-4 py-2 text-xs font-extrabold rounded-xl transition-all ${
                  docType === "proforma" ? "bg-slate-900 text-white shadow-sm" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                📋 Proforma Invoice
              </button>

              <button
                onClick={() => {
                  setDocType("quotation");
                  setDocNumber("QUO-2026-0012");
                }}
                className={`px-4 py-2 text-xs font-extrabold rounded-xl transition-all ${
                  docType === "quotation" ? "bg-slate-900 text-white shadow-sm" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                💬 Price Quotation
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-xl border">
              <label className="font-bold text-gray-700">Currency:</label>
              <select
                value={currencySymbol}
                onChange={(e) => setCurrencySymbol(e.target.value)}
                className="rounded border border-gray-300 p-1 font-mono font-bold"
              >
                <option value="₦">NGN (₦)</option>
                <option value="$">USD ($)</option>
                <option value="€">EUR (€)</option>
                <option value="£">GBP (£)</option>
              </select>
            </div>

            <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-xl border">
              <label className="font-bold text-gray-700">7.5% FIRS VAT:</label>
              <input
                type="checkbox"
                checked={includeVat}
                onChange={(e) => setIncludeVat(e.target.checked)}
                className="w-4 h-4 rounded text-blue-600"
              />
            </div>
          </div>
        </div>
      </div>

      {/* REALTIME WYSIWYG EDITOR GRID (2-Column Layout on Screen) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: REALTIME CONTROLS / FORM (Hidden when printing) */}
        <div className="lg:col-span-5 bg-white border border-gray-200 p-5 rounded-2xl space-y-5 shadow-sm print:hidden text-xs">
          <div className="font-extrabold text-sm text-gray-900 border-b pb-2 flex justify-between items-center">
            <span>✏️ Realtime Form Editor</span>
            <span className="text-emerald-700 text-xs font-semibold">Live Preview Updating &rarr;</span>
          </div>

          {/* Document Number & Dates */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-gray-700 block mb-1">Doc Number:</label>
              <input
                type="text"
                value={docNumber}
                onChange={(e) => setDocNumber(e.target.value)}
                className="w-full rounded-lg border border-gray-300 p-2 font-mono"
              />
            </div>
            <div>
              <label className="font-bold text-gray-700 block mb-1">Issue Date:</label>
              <input
                type="date"
                value={docDate}
                onChange={(e) => setDocDate(e.target.value)}
                className="w-full rounded-lg border border-gray-300 p-2 font-mono"
              />
            </div>
          </div>

          {/* Client Information */}
          <div className="space-y-2 border-t pt-3">
            <span className="font-extrabold text-xs text-blue-800 block">Billed To (Client Details):</span>
            <div>
              <label className="text-gray-600 block mb-0.5 font-medium">Contact Person Name:</label>
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full rounded-lg border border-gray-300 p-2"
              />
            </div>
            <div>
              <label className="text-gray-600 block mb-0.5 font-medium">Client Company Name:</label>
              <input
                type="text"
                value={clientCompany}
                onChange={(e) => setClientCompany(e.target.value)}
                className="w-full rounded-lg border border-gray-300 p-2"
              />
            </div>
            <div>
              <label className="text-gray-600 block mb-0.5 font-medium">Client Address:</label>
              <input
                type="text"
                value={clientAddress}
                onChange={(e) => setClientAddress(e.target.value)}
                className="w-full rounded-lg border border-gray-300 p-2"
              />
            </div>
          </div>

          {/* Dynamic Line Items Form */}
          <div className="space-y-3 border-t pt-3">
            <div className="flex justify-between items-center">
              <span className="font-extrabold text-xs text-blue-800">Line Items ({items.length}):</span>
              <button
                type="button"
                onClick={handleAddItem}
                className="px-2.5 py-1 bg-blue-600 hover:bg-blue-700 text-white font-bold text-[11px] rounded-lg shadow-xs"
              >
                + Add Line Item
              </button>
            </div>

            <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
              {items.map((item, index) => (
                <div key={item.id} className="p-3 bg-slate-50 border rounded-xl space-y-2 relative">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-[11px] text-gray-700">Item #{index + 1}</span>
                    {items.length > 1 && (
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-red-600 hover:text-red-800 text-xs font-bold"
                      >
                        ✕ Delete
                      </button>
                    )}
                  </div>
                  <input
                    type="text"
                    value={item.description}
                    onChange={(e) => handleItemChange(item.id, "description", e.target.value)}
                    placeholder="Description..."
                    className="w-full rounded border border-gray-300 p-1.5 font-medium text-xs"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] text-gray-500 font-medium">Qty:</label>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => handleItemChange(item.id, "quantity", Number(e.target.value))}
                        className="w-full rounded border border-gray-300 p-1.5 font-mono text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-gray-500 font-medium">Unit Price ({currencySymbol}):</label>
                      <input
                        type="number"
                        min="0"
                        value={item.unitPrice}
                        onChange={(e) => handleItemChange(item.id, "unitPrice", Number(e.target.value))}
                        className="w-full rounded border border-gray-300 p-1.5 font-mono text-xs"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Terms & Bank Info */}
          <div className="space-y-2 border-t pt-3">
            <span className="font-extrabold text-xs text-blue-800 block">Bank Account &amp; Terms:</span>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-gray-600 block mb-0.5 font-medium">Bank Name:</label>
                <input
                  type="text"
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 p-1.5"
                />
              </div>
              <div>
                <label className="text-gray-600 block mb-0.5 font-medium">Account Number:</label>
                <input
                  type="text"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 p-1.5 font-mono"
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: PRINT-READY / LIVE PREVIEW CANVAS */}
        <div className="lg:col-span-7 w-full bg-white border-2 border-slate-300 p-6 sm:p-10 shadow-2xl rounded-2xl space-y-8 text-gray-900">
          
          {/* INVOICE HEADER */}
          <div className="flex flex-col sm:flex-row justify-between items-start border-b-2 border-slate-900 pb-6 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 text-white font-black text-xl rounded-xl flex items-center justify-center shadow-md">
                  P
                </div>
                <div>
                  <h1 className="text-2xl font-black text-slate-900 tracking-tight">{docTitleMap[docType]}</h1>
                  <p className="text-xs text-emerald-700 font-bold">{docBadgeMap[docType]}</p>
                </div>
              </div>
              <div className="text-xs text-slate-600 leading-tight pt-1">
                <strong className="text-slate-900 block font-bold">{providerName}</strong>
                <span>{providerAddress}</span>
              </div>
            </div>

            <div className="text-left sm:text-right text-xs space-y-1 font-mono bg-slate-50 p-3 rounded-xl border border-slate-200">
              <div className="text-base font-black text-blue-600">{docNumber}</div>
              <div>Issue Date: <strong>{docDate}</strong></div>
              <div>Due Date: <strong>{dueDate}</strong></div>
              <div>CAC RC: <strong className="text-slate-900">{providerRcNumber}</strong></div>
              <div>FIRS TIN: <strong className="text-slate-900">{providerTin}</strong></div>
            </div>
          </div>

          {/* BILLED CLIENT BOX */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-slate-50 p-4 rounded-xl border">
            <div>
              <span className="text-slate-500 font-bold block uppercase text-[10px]">Service Provider (Billed From):</span>
              <strong className="text-slate-900 font-bold block text-sm">{providerTradingName}</strong>
              <span className="text-slate-600 block">{providerEmail}</span>
              <span className="text-slate-600 block">{providerPhone}</span>
            </div>

            <div>
              <span className="text-slate-500 font-bold block uppercase text-[10px]">Client / Customer (Billed To):</span>
              <strong className="text-slate-900 font-bold block text-sm">{clientCompany}</strong>
              <span className="text-slate-700 font-semibold block">{clientName}</span>
              <span className="text-slate-600 block">{clientAddress}</span>
            </div>
          </div>

          {/* LINE ITEMS TABLE */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-900 text-white font-bold uppercase text-[10px]">
                <tr>
                  <th className="p-3">#</th>
                  <th className="p-3">Description</th>
                  <th className="p-3 text-center">Qty</th>
                  <th className="p-3 text-right">Unit Rate ({currencySymbol})</th>
                  <th className="p-3 text-right">Amount ({currencySymbol})</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-800 text-[11px]">
                {items.map((item, idx) => (
                  <tr key={item.id} className="hover:bg-slate-50">
                    <td className="p-3 font-mono text-slate-400">{idx + 1}</td>
                    <td className="p-3 font-semibold text-slate-900">{item.description}</td>
                    <td className="p-3 text-center font-mono">{item.quantity}</td>
                    <td className="p-3 text-right font-mono">{currencySymbol}{item.unitPrice.toLocaleString()}</td>
                    <td className="p-3 text-right font-mono font-bold text-slate-900">
                      {currencySymbol}{(item.quantity * item.unitPrice).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* TOTALS CALCULATION BOX */}
          <div className="flex justify-end text-xs">
            <div className="w-64 space-y-2 bg-slate-50 p-4 rounded-xl border font-mono">
              <div className="flex justify-between text-slate-700">
                <span>Subtotal:</span>
                <span className="font-bold">{currencySymbol}{subtotal.toLocaleString()}</span>
              </div>

              {discountAmount > 0 && (
                <div className="flex justify-between text-amber-700">
                  <span>Discount ({discountPercent}%):</span>
                  <span>-{currencySymbol}{discountAmount.toLocaleString()}</span>
                </div>
              )}

              {includeVat && (
                <div className="flex justify-between text-slate-600">
                  <span>FIRS VAT ({vatRate}%):</span>
                  <span>+{currencySymbol}{vatAmount.toLocaleString()}</span>
                </div>
              )}

              <div className="flex justify-between text-sm font-black text-slate-900 border-t pt-2">
                <span>Total Due:</span>
                <span className="text-emerald-700">{currencySymbol}{totalDue.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* BANK DETAILS & PAYMENT TERMS */}
          <div className="border-t pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600">
            <div className="space-y-1">
              <span className="font-bold text-slate-900 block">Bank Account Details:</span>
              <div>Bank: <strong className="text-slate-900">{bankName}</strong></div>
              <div>Account Number: <strong className="text-slate-900 font-mono">{accountNumber}</strong></div>
              <div>Account Name: <strong className="text-slate-900">{accountName}</strong></div>
            </div>

            <div className="space-y-1">
              <span className="font-bold text-slate-900 block">Terms &amp; Verification:</span>
              <p className="text-[11px] leading-relaxed text-slate-500">{paymentTerms}</p>
              <div className="text-[10px] text-emerald-700 font-bold pt-1">✓ FIRS &amp; CAC Digital Credential Sealed</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
