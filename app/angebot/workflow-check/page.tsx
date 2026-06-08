import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { CheckIcon } from "@/components/ui";
import { PrintOfferButton } from "@/components/PrintOfferButton";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Angebot: KI-Workflow-Check für KMU | OptiDuck IT",
  description:
    "Druckfreundliche Angebotsübersicht zum KI-Workflow-Check von OptiDuck IT für kleine und mittlere Unternehmen.",
};

const contactEmail = siteConfig.email || "info@optiduck-it.de";
const website = "www.optiduck-it.de";

const recurringTasks = [
  "Kundenanfragen beantworten",
  "E-Mails sortieren",
  "Informationen übertragen",
  "Dokumente suchen oder strukturieren",
  "Angebote vorbereiten",
  "Notizen in Aufgaben umwandeln",
  "Follow-ups organisieren",
  "Interne Rückfragen klären",
];

const checkResults = [
  "3–5 konkrete KI- oder Automationsideen",
  "Priorisierung nach Aufwand und Nutzen",
  "Einschätzung, welcher Prozess sich zuerst lohnt",
  "Empfehlungen für passende Tools",
  "Klare nächste Schritte",
  "Kurze schriftliche Zusammenfassung",
];

const steps = [
  {
    title: "Kurze Vorbereitung",
    text: "Vor dem Termin erhalten Sie einige Leitfragen. Dabei geht es zum Beispiel um wiederkehrende Aufgaben, genutzte Tools, manuelle Zwischenschritte, häufige Kundenanfragen, Dokumente und interne Abläufe.",
  },
  {
    title: "Gemeinsames Analysegespräch",
    text: "Im Termin betrachten wir Ihre wichtigsten Abläufe. Wir schauen gemeinsam, wo aktuell viel manuelle Arbeit entsteht, welche Aufgaben sich wiederholen und wo KI oder Automationen sinnvoll unterstützen könnten.",
  },
  {
    title: "Bewertung & Priorisierung",
    text: "Nicht jede Idee ist automatisch sinnvoll. Deshalb bewerten wir, was schnell Nutzen bringt, technisch realistisch ist und zuerst umgesetzt werden sollte.",
  },
  {
    title: "Ergebnis & nächste Schritte",
    text: "Nach dem Check erhalten Sie eine kompakte Übersicht mit konkreten Empfehlungen.",
  },
];

const audiences = [
  "Physiopraxen und gesundheitsnahe Dienstleister",
  "Reisebüros und Reiseunternehmen",
  "Lokale Dienstleister",
  "Agenturen",
  "Handwerksbetriebe",
  "Beratungsunternehmen",
  "Kleine Verwaltungsteams",
  "Unternehmen mit vielen Kundenanfragen",
];

const useCases = [
  {
    title: "Kundenkommunikation",
    items: [
      "Anfragen zusammenfassen",
      "Antwortentwürfe vorbereiten",
      "Follow-ups organisieren",
      "Häufige Fragen schneller beantworten",
    ],
  },
  {
    title: "Büro & Verwaltung",
    items: [
      "Informationen aus E-Mails strukturieren",
      "Dokumente sortieren",
      "Aufgaben aus Notizen erzeugen",
      "Interne Abläufe dokumentieren",
    ],
  },
  {
    title: "Praxen & Dienstleister",
    items: [
      "Telefonnotizen strukturieren",
      "Standardtexte vorbereiten",
      "Interne FAQs aufbauen",
      "Bewertungsanfragen organisieren",
    ],
  },
  {
    title: "Reise- & Serviceunternehmen",
    items: [
      "Reiseanfragen zusammenfassen",
      "Angebotsentwürfe vorbereiten",
      "Kundeninformationen strukturieren",
      "Wiederkehrende E-Mails vorbereiten",
    ],
  },
];

const excluded = [
  "Vollständige technische Umsetzung",
  "Programmierung individueller Software",
  "Einrichtung komplexer Systeme",
  "Langfristige Betreuung",
  "Juristische Datenschutzprüfung",
  "Schulung ganzer Teams",
  "Vollständige Prozessdokumentation",
];

const sprintExamples = [
  "Kundenanfragen automatisch strukturieren",
  "Antwortentwürfe vorbereiten",
  "Gesprächsnotizen in Aufgaben umwandeln",
  "Dokumente zusammenfassen",
  "Interne Wissensdatenbank aufbauen",
  "Angebotsvorbereitung vereinfachen",
];

const included = [
  "Vorab-Fragebogen",
  "Analysegespräch",
  "Identifikation von 3–5 Automationspotenzialen",
  "Priorisierung nach Aufwand und Nutzen",
  "Tool- und Umsetzungsempfehlungen",
  "Kurze schriftliche Ergebnisübersicht",
];

function OfferPage({
  page,
  children,
  dark = false,
}: {
  page: number;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <section className={`offer-page ${dark ? "offer-page-dark" : ""}`}>
      <header className="offer-page-header">
        <Image
          src="/optiduck-logo-transparent.png"
          alt="OptiDuck IT"
          width={300}
          height={154}
          priority={page === 1}
          className="offer-logo"
        />
        <div className="offer-header-contact">
          <span>{contactEmail}</span>
          <span>{website}</span>
        </div>
      </header>
      <div className="offer-page-content">{children}</div>
      <footer className="offer-page-footer">
        <span>OptiDuck IT · {website}</span>
        <span>Seite {page}</span>
      </footer>
    </section>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="offer-eyebrow">{children}</p>;
}

function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="offer-section-title">{children}</h2>;
}

function TickList({ items, columns = false }: { items: string[]; columns?: boolean }) {
  return (
    <ul className={`offer-tick-list ${columns ? "offer-list-columns" : ""}`}>
      {items.map((item) => (
        <li key={item}>
          <CheckIcon className="offer-tick-icon" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="offer-info-card">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

export default function WorkflowCheckOfferPage() {
  return (
    <main className="offer-document">
      <div className="offer-screen-toolbar">
        <div>
          <strong>Angebotsseite: KI-Workflow-Check</strong>
          <span>Optimiert für den Export über Drucken → Als PDF speichern</span>
        </div>
        <PrintOfferButton />
      </div>

      <OfferPage page={1} dark>
        <div className="offer-cover">
          <Eyebrow>OptiDuck IT · Angebot</Eyebrow>
          <h1>KI-Workflow-Check für KMU</h1>
          <p className="offer-cover-subtitle">Der einfache Einstieg in KI & Automationen</p>
          <p className="offer-cover-lead">
            Für Unternehmen, die wissen möchten, wo KI im Arbeitsalltag wirklich sinnvoll helfen kann.
          </p>
          <p className="offer-cover-copy">
            OptiDuck IT unterstützt kleine und mittlere Unternehmen dabei, wiederkehrende Büro-, Kunden- und
            Verwaltungsprozesse zu analysieren und konkrete Automationspotenziale sichtbar zu machen.
          </p>

          <div className="offer-info-grid">
            <InfoCard label="Dauer" value="90–120 Minuten" />
            <InfoCard label="Format" value="Online oder vor Ort" />
            <InfoCard label="Region" value="Nottuln, Münster & Umgebung" />
            <InfoCard label="Preis" value="390 € netto" />
          </div>

          <div className="offer-provider-card">
            <span>Anbieter</span>
            <strong>OptiDuck IT · Andy Thoss</strong>
          </div>
        </div>

        <div className="offer-section-block offer-section-on-dark">
          <Eyebrow>01 · Ausgangslage</Eyebrow>
          <SectionTitle>Warum ein KI-Workflow-Check?</SectionTitle>
          <p>
            Viele Unternehmen wissen, dass KI Potenzial hat — aber nicht, wo sie konkret anfangen sollen. Oft gibt es
            im Alltag viele wiederkehrende Aufgaben:
          </p>
          <TickList items={recurringTasks} columns />
          <div className="offer-note">
            <strong>Wichtig:</strong> Nicht jeder Prozess braucht KI. Entscheidend ist, wo wiederkehrende Arbeit
            unnötig Zeit kostet.
          </div>
        </div>
      </OfferPage>

      <OfferPage page={2}>
        <div className="offer-section-block">
          <Eyebrow>02 · Ergebnis</Eyebrow>
          <SectionTitle>Was Sie erhalten</SectionTitle>
          <p>
            Nach dem KI-Workflow-Check erhalten Sie eine klare Einschätzung, welche Prozesse sich für KI oder
            Automationen eignen.
          </p>
          <h3>Ergebnis des Checks</h3>
          <TickList items={checkResults} columns />
          <div className="offer-goal">
            <span>Ziel</span>
            <strong>Wo kann KI in Ihrem Unternehmen sinnvoll helfen — und womit sollten Sie starten?</strong>
          </div>
        </div>

        <div className="offer-section-block offer-spaced">
          <Eyebrow>03 · Zusammenarbeit</Eyebrow>
          <SectionTitle>So läuft der KI-Workflow-Check ab</SectionTitle>
          <ol className="offer-step-list">
            {steps.map((step, index) => (
              <li key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </OfferPage>

      <OfferPage page={3}>
        <div className="offer-section-block">
          <Eyebrow>04 · Zielgruppe</Eyebrow>
          <SectionTitle>Für wen ist der Check geeignet?</SectionTitle>
          <p>
            Der KI-Workflow-Check eignet sich besonders für kleine und mittlere Unternehmen, Praxen und Dienstleister,
            die wiederkehrende Aufgaben reduzieren möchten.
          </p>
          <h3>Typische Zielgruppen</h3>
          <TickList items={audiences} columns />
        </div>

        <div className="offer-section-block offer-spaced">
          <Eyebrow>05 · Beispiele</Eyebrow>
          <SectionTitle>Typische Anwendungsfälle</SectionTitle>
          <div className="offer-usecase-grid">
            {useCases.map((useCase) => (
              <article key={useCase.title}>
                <h3>{useCase.title}</h3>
                <TickList items={useCase.items} />
              </article>
            ))}
          </div>
        </div>
      </OfferPage>

      <OfferPage page={4}>
        <div className="offer-section-block">
          <Eyebrow>06 · Abgrenzung</Eyebrow>
          <SectionTitle>Was nicht enthalten ist</SectionTitle>
          <p>Der KI-Workflow-Check dient der Analyse, Bewertung und Priorisierung.</p>
          <h3>Nicht enthalten sind</h3>
          <TickList items={excluded} columns />
          <div className="offer-note">
            <strong>Hinweis:</strong> Die technische Umsetzung eines konkreten Workflows kann anschließend separat im
            Rahmen eines Automation-Sprints erfolgen.
          </div>
        </div>

        <div className="offer-section-block offer-spaced">
          <Eyebrow>07 · Nächster Schritt</Eyebrow>
          <SectionTitle>Automation-Sprint</SectionTitle>
          <p>
            Wenn im KI-Workflow-Check ein geeigneter Prozess identifiziert wurde, kann dieser anschließend umgesetzt
            werden.
          </p>
          <p>
            Im Automation-Sprint wird ein konkreter KI- oder Automationsworkflow geplant, eingerichtet, getestet und
            dokumentiert.
          </p>
          <h3>Beispiele</h3>
          <TickList items={sprintExamples} columns />
          <div className="offer-goal">
            <span>Ziel</span>
            <strong>Eine kleine, funktionierende Lösung, die direkt im Alltag genutzt werden kann.</strong>
          </div>
          <p className="offer-price-note">
            <span>Preisrahmen zum Start</span>
            <strong>1.500–3.000 € netto</strong>
            <small>Je nach Umfang</small>
          </p>
        </div>
      </OfferPage>

      <OfferPage page={5} dark>
        <div className="offer-final">
          <Eyebrow>08 · Preis & Buchung</Eyebrow>
          <h2>KI-Workflow-Check</h2>
          <p className="offer-final-intro">
            Ein klarer, überschaubarer Einstieg für Unternehmen, die KI sinnvoll und praxisnah nutzen möchten.
          </p>

          <div className="offer-final-price">
            <span>Preis</span>
            <strong>390 € netto</strong>
          </div>

          <div className="offer-final-facts">
            <InfoCard label="Dauer" value="90–120 Minuten" />
            <InfoCard label="Format" value="Online oder vor Ort in Nottuln, Münster & Umgebung" />
          </div>

          <div className="offer-final-included">
            <h3>Enthalten</h3>
            <TickList items={included} columns />
          </div>

          <div className="offer-booking">
            <Eyebrow>Kontakt</Eyebrow>
            <h3>Unverbindlich Termin vereinbaren</h3>
            <p>
              Zur Terminvereinbarung genügt eine kurze Rückmeldung per E-Mail oder über das Kontaktformular auf der
              Website.
            </p>
            <div className="offer-contact-card">
              <strong>OptiDuck IT</strong>
              <span>Andy Thoss</span>
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
              <a href="https://www.optiduck-it.de">{website}</a>
            </div>
          </div>
        </div>
      </OfferPage>
    </main>
  );
}
