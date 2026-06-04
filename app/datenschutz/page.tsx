import type { Metadata } from "next";
import { ContactDetails } from "@/components/ContactDetails";
import { LegalPage, LegalSection } from "@/components/LegalPage";
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
      intro="Diese Datenschutzerklärung informiert darüber, welche personenbezogenen Daten beim Besuch dieser Website und bei der Kontaktaufnahme verarbeitet werden."
    >
      <LegalSection title="1. Verantwortlicher">
        <ContactDetails />
      </LegalSection>

      <LegalSection title="2. Hosting">
        <p>
          Diese Website wird bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA, gehostet. Beim Aufruf der
          Website werden technisch erforderliche Daten verarbeitet, damit die Website ausgeliefert und sicher betrieben
          werden kann.
        </p>
        <p>
          Zu diesen Daten können insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seiten,
          übertragene Datenmenge, Browser- und Geräteinformationen sowie Referrer-Informationen gehören. Die
          Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt im
          sicheren, stabilen und effizienten Betrieb der Website.
        </p>
      </LegalSection>

      <LegalSection title="3. Kontaktaufnahme und Kontaktformular">
        <p>
          Wenn Sie uns per E-Mail, Telefon oder über das Kontaktformular kontaktieren, verarbeiten wir die von Ihnen
          angegebenen Daten zur Bearbeitung Ihrer Anfrage. Dazu können Name, Unternehmen, E-Mail-Adresse,
          Telefonnummer, Branche, Angaben zu zeitaufwendigen Prozessen sowie Ihre Nachricht gehören.
        </p>
        <p>
          Die Verarbeitung erfolgt je nach Inhalt der Anfrage auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO zur
          Durchführung vorvertraglicher Maßnahmen oder auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO zur Beantwortung
          allgemeiner Anfragen. Die Daten werden gelöscht, sobald sie für die Bearbeitung nicht mehr erforderlich sind
          und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
        </p>
        <p>
          Für den technischen Versand von Kontaktformular-Anfragen kann ein E-Mail-Versanddienst eingesetzt werden. Bei
          Aktivierung eines solchen Dienstes werden die dafür erforderlichen Angaben ausschließlich zum Versand und zur
          Bearbeitung der Anfrage verwendet.
        </p>
      </LegalSection>

      <LegalSection title="4. Cookies und Tracking">
        <p>
          Diese Website setzt derzeit keine externen Tracking-Skripte und keine Marketing-Cookies ein. Es werden keine
          externen Analyse-, Karten-, Video- oder Terminbuchungsdienste eingebunden.
        </p>
      </LegalSection>

      <LegalSection title="5. Ihre Rechte">
        <p>
          Sie haben im Rahmen der gesetzlichen Voraussetzungen Rechte auf Auskunft, Berichtigung, Löschung,
          Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch gegen bestimmte Verarbeitungen.
        </p>
        <p>
          Außerdem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht
          sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen Datenschutzrecht verstößt.
        </p>
      </LegalSection>

      <LegalSection title="6. Stand">
        <p>Stand: Juni 2026</p>
      </LegalSection>
    </LegalPage>
  );
}
