import { BrandLogo } from "./BrandLogo";
import { ContactDetails } from "./ContactDetails";

export function SiteFooter() {
  return (
    <footer className="bg-[#10101a] py-9 text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <BrandLogo compact />
          <div className="mt-3">
            <ContactDetails compact light />
          </div>
        </div>
        <div className="flex gap-5 text-sm font-semibold">
          <a href="/impressum" className="transition hover:text-white">
            Impressum
          </a>
          <a href="/datenschutz" className="transition hover:text-white">
            Datenschutz
          </a>
        </div>
      </div>
    </footer>
  );
}
