import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
};

export function LegalPage({ eyebrow, title, intro, children }: LegalPageProps) {
  return (
    <>
      <SiteHeader />
      <main className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-700">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink-950 sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{intro}</p>
          <div className="mt-10 space-y-8 rounded-2xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-700 shadow-card sm:p-10">
            {children}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-bold text-ink-950">{title}</h2>
      <div className="mt-3 space-y-2">{children}</div>
    </section>
  );
}
