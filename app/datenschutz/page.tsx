import type { Metadata } from "next";
import { ContactDetails } from "@/components/ContactDetails";
import { LegalPage, LegalSection, LegalTodo } from "@/components/LegalPage";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Datenschutz | OptiDuck IT",
  description: "Datenschutzhinweise von OptiDuck IT.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Rechtliche Hinweise"
      title="Datenschutzerklärung"
      intro="Diese Vorlage beschreibt die aktuell vorbereiteten Funktionen der Website. Lassen Sie sie vor der Veröffentlichung rechtlich prüfen."
    >
      <LegalSection title="1. Verantwortlicher">
        <ContactDetails />
        {siteConfig.address ? <p>{siteConfig.address}</p> : <LegalTodo>Vollständige ladungsfähige Anschrift</LegalTodo>}
      </LegalSection>

      <LegalSection title="2. Hosting und Server-Logfiles">
        <LegalTodo>
          Hosting-Anbieter, Serverstandort, verarbeitete Logdaten, Speicherdauer und Rechtsgrundlage entsprechend dem
          gewählten Hoster eintragen.
        </LegalTodo>
      </LegalSection>

      <LegalSection title="3. Kontaktformular">
        <p>
          Wenn Sie uns über das Kontaktformular schreiben, verarbeiten wir Ihre eingegebenen Angaben zur Bearbeitung
          Ihrer Anfrage. Dazu können Name, Unternehmen, E-Mail-Adresse, Telefonnummer, Branche und Ihre Nachricht
          gehören.
        </p>
        <p>
          Die Verarbeitung erfolgt zur Durchführung vorvertraglicher Maßnahmen oder zur Beantwortung Ihrer Anfrage.
          Die Angaben werden nur so lange gespeichert, wie dies für die Bearbeitung und gesetzliche
          Aufbewahrungspflichten erforderlich ist.
        </p>
        <p>
          Für den technischen Versand ist eine Anbindung an Resend vorbereitet. Vor Aktivierung ist ein
          Auftragsverarbeitungsvertrag zu prüfen und diese Erklärung bei Bedarf um Empfänger, Drittlandtransfer und
          Rechtsgrundlage zu ergänzen.
        </p>
        <LegalTodo>
          Rechtsgrundlage, konkrete Speicherdauer und Informationen zum tatsächlich aktivierten Versanddienst prüfen
        </LegalTodo>
      </LegalSection>

      <LegalSection title="4. Cookies und Tracking">
        <p>
          Diese Website setzt derzeit keine externen Tracking-Skripte und keine Marketing-Cookies ein. Falls später
          Analyse-, Karten-, Video- oder Terminbuchungsdienste ergänzt werden, muss dieser Abschnitt vor der
          Aktivierung angepasst werden.
        </p>
      </LegalSection>

      <LegalSection title="5. Ihre Rechte">
        <p>
          Sie haben im Rahmen der gesetzlichen Voraussetzungen insbesondere Rechte auf Auskunft, Berichtigung,
          Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Zudem besteht ein
          Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde.
        </p>
      </LegalSection>

      <LegalSection title="6. Stand und Prüfung">
        <p>Stand: Juni 2026</p>
        <p>
          Diese Datenschutzerklärung ist eine technische Arbeitsvorlage und keine Rechtsberatung. Prüfen Sie sie vor
          dem Livegang anhand des tatsächlichen Hostings und der aktivierten Dienste.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
