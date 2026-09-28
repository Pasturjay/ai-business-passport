import { CrispChat } from "@/components/support/crisp-chat";
import { ConvexClientProvider } from "@/components/providers/ConvexClientProvider";
import Link from "next/link";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConvexClientProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
        {/* Crisp chat is loaded, but GA4 is STRICTLY NOT included in (app) */}
        <CrispChat />
        
        {/* Navigation Bar */}
        <header className="border-b border-gray-200 bg-white sticky top-0 z-30 shadow-xs print:hidden">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <Link href="/dashboard" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-black text-white text-lg">
                  P
                </div>
                <span className="text-lg font-bold text-gray-900 tracking-tight">AI Business Passport</span>
              </Link>
            </div>

            <nav className="flex items-center space-x-4 text-xs sm:text-sm font-medium text-gray-600">
              <Link href="/dashboard" className="hover:text-blue-600 transition-colors">Dashboard</Link>
              <Link href="/services" className="hover:text-blue-600 transition-colors font-semibold text-emerald-700">Services &amp; Filings</Link>
              <Link href="/professionals" className="hover:text-blue-600 transition-colors font-semibold text-purple-700">Partners</Link>
              <Link href="/invoice" className="hover:text-blue-600 transition-colors font-semibold text-blue-700">Invoices</Link>
              <Link href="/passport" className="hover:text-blue-600 transition-colors">Passport</Link>
              <Link href="/profile/print" className="hover:text-blue-600 transition-colors">Print Profile</Link>
              <Link href="/compliance" className="hover:text-blue-600 transition-colors">Compliance</Link>
              <Link href="/vault" className="hover:text-blue-600 transition-colors">Vault</Link>
              <Link href="/admin" className="px-2.5 py-1 bg-purple-100 text-purple-800 rounded-md text-xs font-bold hover:bg-purple-200 transition-colors">Admin</Link>
            </nav>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="mx-auto max-w-7xl w-full px-4 py-8 sm:px-6 lg:px-8 flex-1">
          {children}
        </main>
      </div>
    </ConvexClientProvider>
  );
}
