import { BrandLogo } from "./BrandLogo";
import { ButtonLink } from "./ui";

const navigation = [
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Für wen", href: "/#fuer-wen" },
  { label: "Ablauf", href: "/#ablauf" },
  { label: "Über OptiDuck IT", href: "/#ueber" },
  { label: "Kontakt", href: "/#kontakt" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#10101a]/95 text-white shadow-lg shadow-black/10 backdrop-blur">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <BrandLogo />

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-200 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/#kontakt" size="sm">
            Kostenloses Erstgespräch anfragen
          </ButtonLink>
        </div>

        <details className="group relative lg:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-lg border border-white/15 text-slate-100 transition hover:border-white/30 hover:bg-white/10">
            <span className="sr-only">Navigation öffnen</span>
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </summary>
          <nav
            aria-label="Mobile Navigation"
            className="absolute right-0 top-14 w-72 rounded-xl border border-slate-200 bg-white p-3 text-ink-900 shadow-xl"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-2.5 text-sm font-semibold transition hover:bg-slate-100"
              >
                {item.label}
              </a>
            ))}
            <ButtonLink href="/#kontakt" size="sm" className="mt-2 w-full justify-center">
              Kostenloses Erstgespräch anfragen
            </ButtonLink>
          </nav>
        </details>
      </div>
    </header>
  );
}
