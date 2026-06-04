import type { Metadata } from "next";
import { ContactDetails } from "@/components/ContactDetails";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Impressum | OptiDuck IT",
  description: "Impressum von OptiDuck IT.",
};

export default function ImprintPage() {
  return (
    <LegalPage
      eyebrow="Rechtliche Hinweise"
      title="Impressum"
      intro="Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)."
    >
      <LegalSection title="Anbieter">
        <ContactDetails />
      </LegalSection>

      <LegalSection title="Kontakt">
        <p>
          E-Mail:{" "}
          <a className="font-semibold text-ink-900 underline hover:text-accent-700" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
        </p>
        <p>
          Telefon:{" "}
          <a className="font-semibold text-ink-900 underline hover:text-accent-700" href="tel:+352661411699">
            {siteConfig.phone}
          </a>
        </p>
      </LegalSection>

      <LegalSection title="Inhaltlich verantwortlich">
        <p>{siteConfig.owner}</p>
        {siteConfig.address ? <p>{siteConfig.address}</p> : null}
      </LegalSection>

      <LegalSection title="Verbraucherstreitbeilegung">
        <p>
          Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </LegalSection>

      <LegalSection title="Haftung für Inhalte">
        <p>
          Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
          verantwortlich. Für fremde Inhalte, auf die wir gegebenenfalls verlinken, ist der jeweilige Anbieter oder
          Betreiber der verlinkten Seite verantwortlich.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
