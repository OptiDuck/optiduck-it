import { contactEmailLabel, contactPhoneLabel, siteConfig } from "@/lib/site-config";

type ContactDetailsProps = {
  compact?: boolean;
  light?: boolean;
};

export function ContactDetails({ compact = false, light = false }: ContactDetailsProps) {
  const muted = light ? "text-slate-300" : "text-slate-600";
  const link = light ? "hover:text-white" : "hover:text-accent-700";

  return (
    <div className={`${compact ? "text-sm leading-6" : "text-sm"} ${muted}`}>
      <p className={`font-bold ${light ? "text-white" : "text-ink-900"}`}>{siteConfig.name}</p>
      <p>{siteConfig.owner}</p>
      <p>{siteConfig.location}</p>
      {siteConfig.address ? <p>{siteConfig.address}</p> : null}
      <p>
        E-Mail:{" "}
        {siteConfig.email ? (
          <a className={`transition ${link}`} href={`mailto:${siteConfig.email}`}>
            {contactEmailLabel}
          </a>
        ) : (
          contactEmailLabel
        )}
      </p>
      <p>
        Telefon:{" "}
        {siteConfig.phone ? (
          <a className={`transition ${link}`} href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
            {contactPhoneLabel}
          </a>
        ) : (
          contactPhoneLabel
        )}
      </p>
    </div>
  );
}
