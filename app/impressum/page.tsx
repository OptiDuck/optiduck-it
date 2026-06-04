import type { Metadata } from "next";
import { ContactDetails } from "@/components/ContactDetails";
import { LegalPage, LegalSection, LegalTodo } from "@/components/LegalPage";
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
      intro="Angaben gemäß § 5 DDG. Bitte ergänzen und prüfen Sie die markierten Stellen vor der Veröffentlichung."
    >
      <LegalSection title="Anbieter">
        <ContactDetails />
        {siteConfig.address ? <p>{siteConfig.address}</p> : <LegalTodo>Vollständige ladungsfähige Anschrift</LegalTodo>}
        <LegalTodo>Rechtsform und vertretungsberechtigte Person prüfen und bei Bedarf ergänzen</LegalTodo>
      </LegalSection>

      <LegalSection title="Kontakt">
        <ContactDetails />
      </LegalSection>

      <LegalSection title="Umsatzsteuer-ID">
        <LegalTodo>Falls vorhanden: Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG</LegalTodo>
      </LegalSection>

      <LegalSection title="Register und Aufsicht">
        <LegalTodo>
          Falls zutreffend: Register, Registernummer, zuständige Aufsichtsbehörde sowie berufsrechtliche Angaben
          ergänzen
        </LegalTodo>
      </LegalSection>

      <LegalSection title="Inhaltlich verantwortlich">
        <p>{siteConfig.owner}</p>
        {siteConfig.address ? <p>{siteConfig.address}</p> : <LegalTodo>Vollständige Anschrift</LegalTodo>}
      </LegalSection>

      <LegalSection title="Hinweis">
        <p>
          Diese Seite ist als technisch vorbereitete Vorlage angelegt. Lassen Sie die Pflichtangaben vor dem Livegang
          rechtlich prüfen und entfernen Sie nicht benötigte Abschnitte.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
