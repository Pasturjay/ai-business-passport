export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center space-x-3">
            <span className="h-8 w-8 rounded-lg bg-emerald-600 text-center font-black text-white leading-8 text-base shadow">
              M
            </span>
            <div>
              <span className="font-extrabold text-base tracking-tight text-white block">
                MODUS
              </span>
              <span className="text-[10px] text-emerald-400 font-mono tracking-wider uppercase block">
                Official Credential Verification &bull; modus.ng
              </span>
            </div>
          </div>
          <span className="text-xs text-emerald-400 font-mono font-bold px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
            Verified Passport 🟢
          </span>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">{children}</main>
    </div>
  );
}
