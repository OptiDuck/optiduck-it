import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { PrintOfferButton } from "@/components/PrintOfferButton";
import { businessPlanConfig } from "@/lib/businessplan-config";

export const metadata: Metadata = {
  title: "Businessplan | OptiDuck IT",
  description: "Druckfreundlicher Businessplan für die geplante Gründung von OptiDuck IT.",
  robots: {
    index: false,
    follow: false,
  },
};

const config = businessPlanConfig;

const businessIdeaTasks = [
  "E-Mails sortieren",
  "Kundenanfragen beantworten",
  "Informationen übertragen",
  "Dokumente suchen oder strukturieren",
  "Angebote vorbereiten",
  "Follow-ups organisieren",
  "Interne Rückfragen klären",
  "Aufgaben aus Notizen ableiten",
  "Standardtexte erstellen",
];

const workflowCheckIncluded = [
  "Vorab-Fragebogen",
  "Analysegespräch",
  "Identifikation von 3–5 Automationspotenzialen",
  "Priorisierung nach Aufwand und Nutzen",
  "Tool- und Umsetzungsempfehlungen",
  "Kurze schriftliche Ergebnisübersicht",
];

const sprintExamples = [
  "Kundenanfragen automatisch strukturieren",
  "Antwortentwürfe vorbereiten",
  "Gesprächsnotizen in Aufgaben umwandeln",
  "Dokumente zusammenfassen",
  "Interne Wissensdatenbank aufbauen",
  "Angebotsvorbereitung vereinfachen",
  "Follow-up-Prozesse organisieren",
];

const careServices = [
  "Anpassung bestehender Workflows",
  "Optimierung von Prompts und Automationen",
  "Unterstützung bei Rückfragen",
  "Monatlicher Review",
  "Priorisierung neuer Ideen",
  "Kleinere Erweiterungen",
  "Technische Pflege im vereinbarten Umfang",
];

const audiences = [
  "Physiopraxen und gesundheitsnahe Dienstleister",
  "Reisebüros und Reiseunternehmen",
  "Lokale Dienstleister",
  "Agenturen",
  "Handwerksbetriebe mit Büroorganisation",
  "Beratungsunternehmen",
  "Kleine Verwaltungsteams",
  "Unternehmen mit vielen Kundenanfragen",
];

const marketDrivers = [
  "Steigende Bekanntheit von KI-Tools",
  "Wachsender Effizienzdruck in KMU",
  "Fachkräftemangel und Zeitmangel in kleinen Teams",
  "Viele manuelle Büro- und Verwaltungsprozesse",
  "Unsicherheit bei Tool-Auswahl und Umsetzung",
  "Bedarf an verständlicher, lokaler Beratung",
];

const competitors = [
  "Klassische IT-Dienstleister",
  "Digitalagenturen",
  "Unternehmensberater",
  "KI-Coaches",
  "Softwareanbieter",
  "Größere Beratungen",
];

const founderResponsibilities = [
  "Beratung",
  "Analyse",
  "Technische Umsetzung",
  "Kundenkommunikation",
  "Projektmanagement",
  "Dokumentation",
  "Vertrieb",
  "Administrative Aufgaben",
];

const organisationBasics = [
  "Geschäftliche E-Mail-Adresse",
  "Website",
  "Deutsche Telefonnummer",
  "Geschäftskonto",
  "Buchhaltungstool oder Steuerberater",
  "Berufshaftpflicht / Vermögensschadenhaftpflicht",
  "Klare Angebots- und Vertragsvorlagen",
  "DSGVO-konforme Arbeitsweise",
];

const opportunities = [
  "Hohe Nachfrage nach Effizienzsteigerung",
  "Viele wiederkehrende Prozesse in KMU",
  "Geringe Einstiegshürden für kleine Automationen",
  "Skalierung über Betreuungspakete",
  "Ausbau auf deutschlandweite Remote-Kunden möglich",
];

const oneTimeCosts = [
  "Gewerbeanmeldung: ca. 30–60 €",
  "Domain und Hosting: ca. 100–300 €",
  "Website / technische Einrichtung: überwiegend Eigenleistung",
  "Logo und Flyer: bereits vorbereitet",
  "Flyerdruck: ca. 100–300 €",
  "Geschäftsausstattung / Technik: nach Bedarf",
  "Rechtliche Prüfung / Datenschutz / Impressum: ca. 150–500 €",
  "Buchhaltung / Steuerberatung Einrichtung: ca. 100–400 €",
  "Marketingstartbudget: ca. 200–500 €",
];

const monthlyCosts = [
  "Hosting / Domain / E-Mail: ca. 10–30 €",
  "Software-Tools: ca. 50–200 €",
  "Telefon / Internet anteilig: ca. 20–60 €",
  "Buchhaltung: ca. 20–80 €",
  "Versicherungen: ca. 30–100 €",
  "Marketing / Werbung: ca. 100–300 €",
  "Fahrtkosten / lokale Termine: ca. 50–150 €",
  "Krankenversicherung: noch zu klären",
  "Steuerliche Rücklagen: abhängig vom Umsatz",
];

const viabilityReasons = [
  {
    title: "Klarer Marktbedarf",
    text: "KMU haben zunehmend Interesse an KI, benötigen aber praktische Unterstützung bei Auswahl, Bewertung und Umsetzung.",
  },
  {
    title: "Niedrigschwelliger Einstieg",
    text: "Der KI-Workflow-Check bietet Unternehmen einen klaren, überschaubaren Einstieg ohne großes Risiko.",
  },
  {
    title: "Umsetzungsorientiertes Angebot",
    text: "OptiDuck IT bietet nicht nur Beratung, sondern auch technische Umsetzung in Form von Automation-Sprints.",
  },
  {
    title: "Wiederkehrende Umsätze möglich",
    text: "Durch OptiDuck Care können langfristige Betreuungsverträge aufgebaut werden.",
  },
  {
    title: "Fachliche Eignung des Gründers",
    text: "Andy Thoss bringt Erfahrung in IT-Consulting, technischem Kundensupport, Systembewertung, Implementierung und Kundenkommunikation mit.",
  },
  {
    title: "Bereits vorhandene Vorbereitung",
    text: "Name, Logo, Website, Flyer, Angebotsstruktur und Vertriebsprozess sind bereits vorbereitet.",
  },
  {
    title: "Skalierbarkeit",
    text: "Nach lokalem Start kann das Angebot deutschlandweit remote erbracht werden.",
  },
];

function BusinessPlanPage({
  page,
  children,
  dark = false,
}: {
  page: number;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <section className={`businessplan-page ${dark ? "businessplan-page-dark" : ""}`}>
      <header className="businessplan-page-header">
        <Image
          src="/optiduck-logo-transparent.png"
          alt="OptiDuck IT"
          width={300}
          height={154}
          priority={page === 1}
          className="businessplan-logo"
        />
        <div className="businessplan-header-meta">
          <span>Businessplan</span>
          <span>Stand: {config.documentDate}</span>
        </div>
      </header>
      <div className="businessplan-page-content">{children}</div>
      <footer className="businessplan-page-footer">
        <span>OptiDuck IT · {config.website}</span>
        <span>Seite {page}</span>
      </footer>
    </section>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="businessplan-eyebrow">{children}</p>;
}

function SectionTitle({
  number,
  children,
}: {
  number: string;
  children: ReactNode;
}) {
  return (
    <>
      <Eyebrow>Abschnitt {number}</Eyebrow>
      <h2 className="businessplan-section-title">{children}</h2>
    </>
  );
}

function SubsectionTitle({ children }: { children: ReactNode }) {
  return <h3 className="businessplan-subsection-title">{children}</h3>;
}

function BulletList({
  items,
  columns = false,
}: {
  items: string[];
  columns?: boolean;
}) {
  return (
    <ul className={`businessplan-list ${columns ? "businessplan-list-columns" : ""}`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function KeyValue({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="businessplan-key-value">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function OfferCard({
  title,
  price,
  children,
}: {
  title: string;
  price: string;
  children: ReactNode;
}) {
  return (
    <article className="businessplan-offer-card">
      <div className="businessplan-offer-card-heading">
        <h3>{title}</h3>
        <strong>{price}</strong>
      </div>
      {children}
    </article>
  );
}

function RiskCard({
  title,
  text,
  response,
}: {
  title: string;
  text: string;
  response: string;
}) {
  return (
    <article className="businessplan-risk-card">
      <h3>{title}</h3>
      <p>{text}</p>
      <div>
        <strong>Gegenmaßnahme</strong>
        <p>{response}</p>
      </div>
    </article>
  );
}

export default function BusinessPlanDocumentPage() {
  return (
    <main className="businessplan-document">
      <div className="businessplan-screen-toolbar">
        <div>
          <strong>Businessplan: OptiDuck IT</strong>
          <span>Optimiert für den Export über Drucken → Als PDF speichern</span>
        </div>
        <PrintOfferButton label="Als PDF drucken" />
      </div>

      <BusinessPlanPage page={1} dark>
        <div className="businessplan-cover">
          <Eyebrow>Gründungsvorhaben · Stand {config.documentDate}</Eyebrow>
          <h1>Businessplan</h1>
          <h2>OptiDuck IT</h2>
          <p className="businessplan-cover-subtitle">
            KI-Workflows & Automationen für KMU in Nottuln, Münster und Umgebung
          </p>

          <div className="businessplan-cover-data">
            <KeyValue label="Gründer" value="Andy Thoss" />
            <KeyValue label="Rechtsform" value={config.legalForm} />
            <KeyValue label="Standort" value={config.location} />
            <KeyValue label="Geplanter Start" value={config.plannedStart} />
            <KeyValue label="Website" value={config.website} />
            <KeyValue label="E-Mail" value={config.email} />
          </div>

          <p className="businessplan-cover-note">
            Dieser Businessplan dient der Vorbereitung der Gründung und Beantragung des Gründungszuschusses.
          </p>
        </div>
      </BusinessPlanPage>

      <BusinessPlanPage page={2}>
        <SectionTitle number="01">Executive Summary</SectionTitle>
        <p>
          OptiDuck IT ist ein geplantes Einzelunternehmen von Andy Thoss mit Fokus auf KI-Workflows und
          Automationen für kleine und mittlere Unternehmen in Nottuln, Münster und Umgebung.
        </p>
        <p>
          Das Unternehmen unterstützt KMU, Praxen, Dienstleister, Reise- und Serviceunternehmen dabei,
          wiederkehrende Büro-, Kunden- und Verwaltungsprozesse zu analysieren, zu vereinfachen und mit
          geeigneten KI-Tools oder Automationen praxistauglich umzusetzen.
        </p>
        <p>
          Der Schwerpunkt liegt nicht auf abstrakter KI-Beratung, sondern auf konkreter Entlastung im
          Arbeitsalltag. Typische Anwendungsfälle sind Kundenanfragen, E-Mails, Dokumentenorganisation,
          interne Abläufe, Angebotsvorbereitung, Follow-ups und wiederkehrende Standardprozesse.
        </p>
        <div className="businessplan-highlight">
          <strong>Klare Angebotsstruktur</strong>
          <BulletList
            items={[
              "Kostenloses 20-Minuten-Erstgespräch",
              `KI-Workflow-Check für ${config.prices.workflowCheck}`,
              `Automation-Sprint ${config.prices.automationSprint}`,
              `Laufende Betreuung ${config.prices.care}`,
            ]}
          />
        </div>
        <p>
          Die Gründung erfolgt zunächst lokal mit Fokus auf Nottuln, Münster und Umgebung. Nach Aufbau erster
          Referenzen und wiederkehrender Kundenbeziehungen ist eine Ausweitung auf überregionale, remote
          betreute Kunden geplant.
        </p>
        <p>
          Ziel ist der Aufbau einer tragfähigen hauptberuflichen Selbstständigkeit, die mittelfristig den
          Lebensunterhalt des Gründers sichert und langfristig skalierbare Beratungs-, Umsetzungs- und
          Betreuungsleistungen im Bereich KI-Automation anbietet.
        </p>
      </BusinessPlanPage>

      <BusinessPlanPage page={3}>
        <SectionTitle number="02">Gründerprofil</SectionTitle>
        <p>
          Andy Thoss verfügt über praktische Erfahrung im IT-Consulting, technischen Kundensupport, in der
          Betreuung von Firmenkunden sowie in der Einführung und Bewertung digitaler Systeme.
        </p>
        <p>
          In seiner bisherigen Tätigkeit war er unter anderem für die telefonische und schriftliche
          Betreuung von Firmenkunden, 1st- und 2nd-Level-Support, Anwenderschulungen, Analyse von
          Kundenanforderungen, Fehleranalyse, Dokumentation und Schulungsunterlagen verantwortlich. Später
          wechselte er intern in den IT-Bereich und übernahm Aufgaben wie Marktanalysen, Prüfung und
          Bewertung neuer Software- und Hardwarelösungen, Implementierung neuer Systeme, technische
          Einrichtung, Integration, Administration und Beratung bei der Einführung neuer Lösungen.
        </p>
        <div className="businessplan-highlight">
          <strong>Relevante Stärken</strong>
          <p>
            Technisches Verständnis, analytisches Denkvermögen, schnelle Einarbeitung in neue Themen sowie
            eine strukturierte und lösungsorientierte Arbeitsweise.
          </p>
        </div>
        <p>
          Die Kombination aus technischer Kompetenz, Prozessverständnis, Kundenerfahrung und praxisnaher
          Umsetzung ist für das geplante Geschäftsmodell besonders relevant. KMU benötigen häufig keinen
          rein theoretischen KI-Berater, sondern jemanden, der Geschäftsprozesse versteht, technische
          Möglichkeiten realistisch einschätzt und konkrete Lösungen umsetzen kann.
        </p>
      </BusinessPlanPage>

      <BusinessPlanPage page={4}>
        <SectionTitle number="03">Geschäftsidee</SectionTitle>
        <p>
          OptiDuck IT hilft kleinen und mittleren Unternehmen dabei, wiederkehrende Arbeitsabläufe mit KI
          und Automationen zu vereinfachen.
        </p>
        <p>Viele Unternehmen verlieren täglich Zeit durch manuelle Tätigkeiten wie:</p>
        <BulletList items={businessIdeaTasks} columns />
        <p>
          OptiDuck IT analysiert diese Abläufe, identifiziert sinnvolle Automationspotenziale und setzt
          ausgewählte Lösungen technisch um.
        </p>
        <blockquote className="businessplan-quote">
          Erst verstehen. Dann vereinfachen. Dann automatisieren.
        </blockquote>
        <p>
          Dabei wird bewusst darauf geachtet, nicht jeden Prozess unüberlegt mit KI zu lösen. Ziel ist
          immer eine realistische, verständliche und praxistaugliche Verbesserung.
        </p>
      </BusinessPlanPage>

      <BusinessPlanPage page={5}>
        <SectionTitle number="04">Leistungen und Angebote</SectionTitle>
        <OfferCard title="Kostenloses Erstgespräch" price="Kostenlos">
          <p>Das kostenlose Erstgespräch dauert ca. 20 Minuten und dient der ersten Einschätzung.</p>
          <strong>Ziele</strong>
          <BulletList
            items={[
              "Bedarf des Unternehmens verstehen",
              "Mögliche Zeitfresser identifizieren",
              "Prüfen, ob KI oder Automationen sinnvoll helfen könnten",
              "Nächsten Schritt empfehlen",
            ]}
          />
          <p>
            Das Erstgespräch ist kein vollständiger Beratungsworkshop, sondern dient als Einstieg in den
            KI-Workflow-Check.
          </p>
        </OfferCard>
        <OfferCard title="KI-Workflow-Check" price={config.prices.workflowCheck}>
          <div className="businessplan-meta-row">
            <span>Dauer: 90–120 Minuten</span>
            <span>Format: Online oder vor Ort in Nottuln, Münster und Umgebung</span>
          </div>
          <p>
            Im KI-Workflow-Check werden wiederkehrende Büro-, Kunden- und Verwaltungsprozesse analysiert.
            Der Kunde erhält eine konkrete Einschätzung, welche Prozesse sich für KI oder Automationen
            eignen.
          </p>
          <strong>Enthalten</strong>
          <BulletList items={workflowCheckIncluded} columns />
        </OfferCard>
      </BusinessPlanPage>

      <BusinessPlanPage page={6}>
        <SectionTitle number="04">Leistungen und Angebote</SectionTitle>
        <OfferCard title="Automation-Sprint" price={config.prices.automationSprint}>
          <div className="businessplan-meta-row">
            <span>Dauer: ca. 1–2 Wochen, abhängig vom Umfang</span>
          </div>
          <p>
            Im Automation-Sprint wird ein klar abgegrenzter KI- oder Automationsworkflow geplant,
            eingerichtet, getestet und dokumentiert.
          </p>
          <strong>Beispiele</strong>
          <BulletList items={sprintExamples} columns />
        </OfferCard>
        <OfferCard title="OptiDuck Care" price={config.prices.care}>
          <p>OptiDuck Care ist das laufende Betreuungsangebot nach der Umsetzung.</p>
          <strong>Mögliche Inhalte</strong>
          <BulletList items={careServices} columns />
        </OfferCard>
      </BusinessPlanPage>

      <BusinessPlanPage page={7}>
        <SectionTitle number="05">Zielgruppe</SectionTitle>
        <p>Die primäre Zielgruppe sind kleine und mittlere Unternehmen in Nottuln, Münster und Umgebung.</p>
        <p>Besonders relevant sind:</p>
        <BulletList items={audiences} columns />
        <p>
          Der regionale Start ist bewusst gewählt. Lokale Nähe schafft Vertrauen und erleichtert
          persönliche Gespräche, Vor-Ort-Termine und Netzwerkaufbau. Langfristig kann das Angebot auch
          deutschlandweit remote erbracht werden.
        </p>

        <div className="businessplan-section-divider" />

        <SectionTitle number="06">Markt und Bedarf</SectionTitle>
        <p>
          KI und Automationen gewinnen für kleine und mittlere Unternehmen zunehmend an Bedeutung. Viele
          Unternehmen sehen zwar das Potenzial von KI, wissen jedoch nicht, wo sie konkret anfangen sollen.
        </p>
        <p>
          Gerade KMU haben häufig keine eigene IT- oder Digitalisierungsabteilung. Gleichzeitig gibt es
          viele wiederkehrende manuelle Aufgaben, die Zeit kosten und Mitarbeitende belasten. Hier entsteht
          ein konkreter Bedarf an praxisnaher Unterstützung.
        </p>
      </BusinessPlanPage>

      <BusinessPlanPage page={8}>
        <SectionTitle number="06">Markt und Bedarf</SectionTitle>
        <p>
          OptiDuck IT positioniert sich bewusst nicht als große Strategieberatung, sondern als
          umsetzungsnaher Partner für kleine und mittlere Unternehmen.
        </p>
        <p>Der Marktbedarf ergibt sich aus mehreren Entwicklungen:</p>
        <BulletList items={marketDrivers} />
        <div className="businessplan-highlight">
          <strong>Marktchance</strong>
          <p>
            KI verständlich und nutzbar machen – nicht als theoretisches Zukunftsthema, sondern als
            praktisches Werkzeug im Arbeitsalltag.
          </p>
        </div>

        <div className="businessplan-section-divider" />

        <SectionTitle number="07">Wettbewerb und Abgrenzung</SectionTitle>
        <p>Im Markt gibt es verschiedene Anbieter:</p>
        <BulletList items={competitors} columns />
      </BusinessPlanPage>

      <BusinessPlanPage page={9}>
        <SectionTitle number="07">Wettbewerb und Abgrenzung</SectionTitle>
        <div className="businessplan-detail-grid">
          <article>
            <h3>Lokaler Fokus</h3>
            <p>
              Der Start erfolgt bewusst in Nottuln, Münster und Umgebung. Dadurch entsteht Nähe zu KMU, Praxen und
              Dienstleistern.
            </p>
          </article>
          <article>
            <h3>Praxisnahe Umsetzung</h3>
            <p>
              OptiDuck IT verkauft nicht nur Beratung, sondern kann konkrete Workflows und Automationen
              auch technisch umsetzen.
            </p>
          </article>
          <article>
            <h3>Klare Einstiegsangebote</h3>
            <p>
              Mit dem kostenlosen Erstgespräch und dem KI-Workflow-Check gibt es einen niedrigschwelligen
              Einstieg.
            </p>
          </article>
          <article>
            <h3>Verständliche Kommunikation</h3>
            <p>
              Der Fokus liegt nicht auf Buzzwords, sondern auf konkreter Entlastung: weniger manuelle
              Arbeit, schnellere Abläufe, bessere Übersicht.
            </p>
          </article>
          <article className="businessplan-detail-wide">
            <h3>Kombination aus IT-Consulting und KI</h3>
            <p>
              Der Gründer bringt praktische Erfahrung aus IT-Consulting, Support, Systembewertung und
              Implementierung mit. Dadurch kann er technische und organisatorische Anforderungen
              realistisch einschätzen.
            </p>
          </article>
        </div>
      </BusinessPlanPage>

      <BusinessPlanPage page={10}>
        <SectionTitle number="08">Marketing und Vertrieb</SectionTitle>
        <p>Der Vertrieb erfolgt zunächst lokal und direkt.</p>
        <div className="businessplan-detail-grid businessplan-detail-grid-compact">
          <article>
            <h3>Website</h3>
            <p>
              Die Website {config.website} dient als zentrale Informations- und Kontaktplattform. Sie
              erklärt Angebot, Zielgruppe, Nutzen und Ablauf.
            </p>
          </article>
          <article>
            <h3>Flyer</h3>
            <p>
              Ein professioneller A5-Flyer wird für lokale Ansprache, Netzwerke, Praxen und Unternehmen
              genutzt. Der Flyer verweist auf Website und kostenloses Erstgespräch.
            </p>
          </article>
          <article>
            <h3>Direkte Ansprache</h3>
            <p>
              Lokale Unternehmen werden gezielt angesprochen, insbesondere Praxen, Reiseunternehmen,
              Dienstleister und KMU mit erkennbaren Büro- oder Kundenprozessen.
            </p>
          </article>
          <article>
            <h3>Netzwerk</h3>
            <p>
              Bestehende persönliche Kontakte, ehemalige berufliche Kontakte und lokale Netzwerke werden
              genutzt, um erste Gespräche und Referenzen aufzubauen.
            </p>
          </article>
          <article>
            <h3>Content und LinkedIn</h3>
            <p>
              LinkedIn wird nach Fertigstellung der grundlegenden Angebotsstruktur aufgebaut. Ziel ist es,
              durch konkrete Beispiele und kurze Beiträge Vertrauen aufzubauen.
            </p>
          </article>
          <article>
            <h3>Empfehlungsmarketing</h3>
            <p>Nach ersten Projekten sollen Kundenzitate, Fallbeispiele und Empfehlungen genutzt werden.</p>
          </article>
        </div>
      </BusinessPlanPage>

      <BusinessPlanPage page={11}>
        <SectionTitle number="09">Organisation und Rechtsform</SectionTitle>
        <p>Die Gründung ist als Einzelunternehmen geplant.</p>
        <p>Der Gründer arbeitet zunächst allein und übernimmt:</p>
        <BulletList items={founderResponsibilities} columns />
        <p>
          Der Unternehmenssitz liegt in Nottuln mit Fokus auf Nottuln, Münster und Umgebung. Leistungen können
          sowohl vor Ort als auch remote erbracht werden.
        </p>
        <SubsectionTitle>Geplante organisatorische Grundlagen</SubsectionTitle>
        <BulletList items={organisationBasics} columns />

        <div className="businessplan-section-divider" />

        <SectionTitle number="10">Chancen und Risiken</SectionTitle>
        <p>
          Der Bedarf an KI- und Automationslösungen steigt. Viele KMU möchten KI nutzen, wissen aber nicht,
          wie sie sinnvoll starten sollen.
        </p>
        <BulletList items={opportunities} columns />
      </BusinessPlanPage>

      <BusinessPlanPage page={12}>
        <SectionTitle number="10">Chancen und Risiken</SectionTitle>
        <div className="businessplan-risk-grid">
          <RiskCard
            title="Risiko 1: Noch keine eigenen Kundenreferenzen"
            text="Zum Marktstart bestehen noch keine eigenen Kundenreferenzen für OptiDuck IT."
            response="Professionelle Website, Flyer, klar definierte Angebote, Demo-Workflows, erste Workflow-Checks und systematischer Aufbau von Referenzen."
          />
          <RiskCard
            title="Risiko 2: Unsicherheit bei KMU gegenüber KI"
            text="Unternehmen können Nutzen, Aufwand und Risiken neuer KI-Werkzeuge noch schwer einschätzen."
            response="Verständliche Sprache, klare Anwendungsfälle, kostenloses Erstgespräch, KI-Workflow-Check als risikoarmer Einstieg."
          />
          <RiskCard
            title="Risiko 3: Datenschutz und sensible Daten"
            text="Bei einzelnen Prozessen können sensible oder personenbezogene Daten betroffen sein."
            response="Datenschutzbewusste Beratung, keine unüberlegte Verarbeitung sensibler Daten, klare Grenzen und bei Bedarf Einbindung fachlicher Datenschutzberatung."
          />
          <RiskCard
            title="Risiko 4: Schwankende Projektumsätze"
            text="Projektgeschäft kann insbesondere in der Anfangsphase zu schwankenden Einnahmen führen."
            response="Aufbau von monatlichen Betreuungspaketen, wiederkehrende Umsätze und kontinuierliche Akquise."
          />
          <RiskCard
            title="Risiko 5: Schnelle technische Entwicklung"
            text="Der KI-Markt entwickelt sich technisch und wirtschaftlich sehr schnell."
            response="Kontinuierliche Weiterbildung und Nutzung moderner KI-gestützter Entwicklungs- und Recherchetools."
          />
        </div>
      </BusinessPlanPage>

      <BusinessPlanPage page={13}>
        <SectionTitle number="11">Finanzplanung – textliche Grundlage</SectionTitle>
        <p>
          Die Finanzplanung wird separat als Tabelle erstellt. Für den Businessplan wird zunächst mit
          konservativen Annahmen gearbeitet.
        </p>
        <div className="businessplan-detail-grid businessplan-detail-grid-compact">
          <article>
            <h3>Private Mindestkosten</h3>
            <p>{config.finance.privateMinimum}</p>
          </article>
          <article>
            <h3>Vorläufig angenommene ALG-I-Höhe</h3>
            <p>{config.finance.estimatedAlgOne}</p>
          </article>
          <article className="businessplan-detail-wide">
            <h3>Berechnungsgrundlage</h3>
            <p>
              Bisheriges Bruttogehalt: {config.finance.previousGrossSalary}, Steuerklasse 1 und keine
              Kinder. Der genaue ALG-I-Betrag wird nach Vorliegen des offiziellen Bescheids ersetzt.
            </p>
          </article>
        </div>
        <p>Für die Startphase wird der Gründungszuschuss eingeplant.</p>
        <SubsectionTitle>Umsatzannahmen</SubsectionTitle>
        <p>Die Umsatzplanung basiert auf folgenden Angeboten:</p>
        <BulletList
          items={[
            `KI-Workflow-Check: ${config.prices.workflowCheck}`,
            `Automation-Sprint: ${config.prices.automationSprint}`,
            `OptiDuck Care: ${config.prices.care}`,
          ]}
        />
        <p>
          Konservatives Ziel ist es, in den ersten Monaten erste Workflow-Checks zu verkaufen, daraus
          Automation-Sprints zu gewinnen und anschließend laufende Betreuungspakete aufzubauen.
        </p>
      </BusinessPlanPage>

      <BusinessPlanPage page={14}>
        <SectionTitle number="11">Finanzplanung – textliche Grundlage</SectionTitle>
        <SubsectionTitle>Beispielhafte Umsatzentwicklung</SubsectionTitle>
        <div className="businessplan-timeline">
          <article>
            <strong>Monat 1</strong>
            <p>Aufbau, Vorbereitung, erste Gespräche, geringe Umsätze</p>
          </article>
          <article>
            <strong>Monat 2</strong>
            <p>Erste KI-Workflow-Checks</p>
          </article>
          <article>
            <strong>Monat 3</strong>
            <p>Mehrere Checks und erster kleiner Automation-Sprint</p>
          </article>
          <article>
            <strong>Monat 4–6</strong>
            <p>Regelmäßige Checks, erste Sprints und erste Betreuungskunden</p>
          </article>
          <article>
            <strong>Monat 7–12</strong>
            <p>Stabilere Projektumsätze und wachsende monatliche Betreuung</p>
          </article>
        </div>

        <div className="businessplan-section-divider" />

        <SectionTitle number="12">Kapitalbedarf und Finanzierung</SectionTitle>
        <p>
          Der Kapitalbedarf ist im Vergleich zu vielen anderen Gründungen überschaubar, da keine
          Ladenfläche, kein Warenlager und keine größeren Maschinen benötigt werden.
        </p>
        <SubsectionTitle>Einmalige Startkosten, vorläufig</SubsectionTitle>
        <BulletList items={oneTimeCosts} columns />
      </BusinessPlanPage>

      <BusinessPlanPage page={15}>
        <SectionTitle number="12">Kapitalbedarf und Finanzierung</SectionTitle>
        <SubsectionTitle>Monatliche Kosten, vorläufig</SubsectionTitle>
        <BulletList items={monthlyCosts} columns />
        <div className="businessplan-highlight">
          <strong>Hinweis zur Finanzierung</strong>
          <p>
            Da keine Rücklagen vorhanden sind, ist der Gründungszuschuss für die Anfangsphase besonders
            wichtig. Er soll die private Grundsicherung ermöglichen, während die ersten Kundenkontakte,
            Projekte und laufenden Betreuungsumsätze aufgebaut werden.
          </p>
        </div>
      </BusinessPlanPage>

      <BusinessPlanPage page={16}>
        <SectionTitle number="13">Tragfähigkeit des Vorhabens</SectionTitle>
        <p>Das Gründungsvorhaben ist aus folgenden Gründen tragfähig:</p>
        <div className="businessplan-numbered-list">
          {viabilityReasons.map((reason, index) => (
            <article key={reason.title}>
              <span>{index + 1}</span>
              <div>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </div>
            </article>
          ))}
        </div>
      </BusinessPlanPage>

      <BusinessPlanPage page={17} dark>
        <div className="businessplan-final">
          <SectionTitle number="14">Kurzfazit</SectionTitle>
          <p>
            OptiDuck IT ist ein praxisnahes Gründungsvorhaben im Bereich KI-Workflows und Automationen für
            KMU. Das Unternehmen adressiert einen aktuellen und wachsenden Bedarf: kleine und mittlere
            Unternehmen möchten KI nutzen, wissen aber häufig nicht, wo sie sinnvoll starten sollen.
          </p>
          <p>
            Durch die klare Angebotsstruktur aus Erstgespräch, KI-Workflow-Check, Automation-Sprint und
            laufender Betreuung entsteht ein nachvollziehbarer Vertriebs- und Umsatzpfad.
          </p>
          <p>
            Die fachliche Eignung des Gründers wird durch seine bisherige Tätigkeit im IT-Consulting,
            Kundensupport, in der Analyse technischer Anforderungen und Implementierung digitaler Systeme
            gestützt.
          </p>
          <p>
            Mit Unterstützung des Gründungszuschusses soll die Anfangsphase finanziell überbrückt werden,
            bis ausreichend eigene Umsätze aufgebaut sind.
          </p>

          <div className="businessplan-final-contact">
            <Eyebrow>Kontakt</Eyebrow>
            <h3>OptiDuck IT</h3>
            <span>Andy Thoss</span>
            <span>{config.location}</span>
            <a href={`mailto:${config.email}`}>{config.email}</a>
            <a href={`https://${config.website}`}>{config.website}</a>
          </div>
        </div>
      </BusinessPlanPage>
    </main>
  );
}
