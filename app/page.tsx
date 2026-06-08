import { ContactDetails } from "@/components/ContactDetails";
import { ContactForm } from "@/components/ContactForm";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  AssistantIcon,
  ButtonLink,
  CheckIcon,
  FlowIcon,
  IconBox,
  SectionHeading,
  SparkIcon,
} from "@/components/ui";

const services = [
  {
    title: "KI-Workflow-Check",
    text: "Wir analysieren wiederkehrende Prozesse und identifizieren konkrete Automationspotenziale — inklusive Einschätzung von Aufwand, Nutzen und sinnvollen nächsten Schritten.",
    icon: <SparkIcon />,
  },
  {
    title: "Automation-Sprint",
    text: "Wir setzen einen ausgewählten KI- oder Automationsworkflow praxistauglich um — klein, überschaubar und direkt nutzbar.",
    icon: <FlowIcon />,
  },
  {
    title: "KI-Assistenten für Unternehmen",
    text: "Interne Assistenten für Wissen, Dokumente, Support, Angebote oder wiederkehrende Fragen.",
    icon: <AssistantIcon />,
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

const steps = [
  {
    title: "Erstgespräch",
    text: "Wir klären, welche Prozesse aktuell besonders viel Zeit kosten und ob KI oder Automationen sinnvoll helfen können.",
  },
  {
    title: "Workflow-Check",
    text: "Wir analysieren konkrete Abläufe und identifizieren Automationspotenziale.",
  },
  {
    title: "Priorisierung",
    text: "Nicht alles muss automatisiert werden. Wir wählen die Prozesse aus, die schnell Nutzen bringen und realistisch umsetzbar sind.",
  },
  {
    title: "Umsetzung",
    text: "Ein ausgewählter Workflow wird technisch eingerichtet, getestet und an den Alltag angepasst.",
  },
  {
    title: "Übergabe & Dokumentation",
    text: "Sie erhalten eine verständliche Erklärung, wie der neue Workflow funktioniert und wie er genutzt wird.",
  },
];

const useCases = [
  {
    title: "Kundenkommunikation",
    items: [
      "Anfragen zusammenfassen",
      "Antwortentwürfe vorbereiten",
      "Follow-ups automatisieren",
      "Häufige Fragen schneller beantworten",
    ],
  },
  {
    title: "Büro & Verwaltung",
    items: [
      "Dokumente sortieren",
      "Informationen aus PDFs oder E-Mails strukturieren",
      "Aufgaben aus Notizen erzeugen",
      "Interne Abläufe dokumentieren",
    ],
  },
  {
    title: "Praxen",
    items: [
      "Telefonnotizen strukturieren",
      "Interne FAQs aufbauen",
      "Standardtexte vorbereiten",
      "Bewertungsanfragen organisieren",
    ],
  },
  {
    title: "Reise- und Serviceunternehmen",
    items: [
      "Reiseanfragen strukturieren",
      "Angebotsentwürfe vorbereiten",
      "Kundeninformationen zusammenfassen",
      "Wiederkehrende E-Mails automatisieren",
    ],
  },
];

const workflowCheckResults = [
  "3–5 konkrete Automationsideen",
  "Einschätzung nach Aufwand und Nutzen",
  "Passende Tool-Empfehlungen",
  "Klare nächste Schritte",
  "Priorisierung der sinnvollsten Prozesse",
];

function Hero() {
  return (
    <section id="start" className="relative overflow-hidden bg-ink-950 text-white">
      <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_top_right,rgba(239,141,34,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_30%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
        <div>
          <p className="mb-5 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-accent-500">
            KI-Beratung Nottuln, Münster & Umgebung
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.08]">
            KI-Workflows & Automationen für KMU in Nottuln & Münster
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
            OptiDuck IT hilft kleinen und mittleren Unternehmen, wiederkehrende Büro-, Kunden- und
            Verwaltungsprozesse mit KI und Automationen zu vereinfachen — verständlich, praxisnah und
            umsetzbar.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#kontakt">Kostenloses Erstgespräch anfragen</ButtonLink>
            <ButtonLink href="#leistungen" variant="secondary">
              Mehr erfahren
            </ButtonLink>
          </div>
          <p className="mt-8 flex max-w-2xl items-start gap-2.5 text-sm leading-6 text-slate-300">
            <CheckIcon className="mt-0.5 shrink-0 text-accent-500" />
            Kostenlos, unverbindlich und in 20 Minuten geklärt: Wo lohnt sich ein genauerer Blick?
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
          <div className="absolute -inset-5 rounded-[2rem] bg-accent-500/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.07] p-5 shadow-2xl backdrop-blur sm:p-7">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-500">Workflow-Check</p>
                <p className="mt-1 text-lg font-semibold">Vom Engpass zur Lösung</p>
              </div>
              <span className="rounded-full border border-accent-500/30 bg-accent-500/10 px-3 py-1 text-xs font-bold text-accent-500">
                praxisnah
              </span>
            </div>
            <ol className="mt-3 space-y-1">
              {["Prozesse verstehen", "Potenziale bewerten", "Lösung priorisieren", "Workflow umsetzen"].map(
                (item, index) => (
                  <li key={item} className="flex items-center gap-4 rounded-xl px-2 py-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-sm font-bold text-accent-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-medium text-slate-100">{item}</span>
                  </li>
                ),
              )}
            </ol>
            <div className="mt-5 rounded-xl border border-white/10 bg-ink-950/55 p-4 text-sm leading-6 text-slate-300">
              Ziel: weniger manuelle Arbeit, klarere Abläufe und mehr Zeit für Ihr Kerngeschäft.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent-700">Weniger Routine. Mehr Fokus.</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
            Viele Unternehmen verlieren täglich Zeit durch manuelle Aufgaben
          </h2>
        </div>
        <div className="space-y-5 text-lg leading-8 text-slate-600">
          <p>
            E-Mails sortieren, Kundenanfragen beantworten, Informationen übertragen, Termine koordinieren,
            Dokumente suchen, Angebote vorbereiten oder interne Rückfragen klären — viele dieser Aufgaben
            wiederholen sich täglich. Mit KI und Automationen lassen sich genau diese Abläufe vereinfachen.
          </p>
          <p>
            OptiDuck IT analysiert bestehende Prozesse, erkennt Automationspotenziale und entwickelt praktische
            Lösungen, die im Arbeitsalltag wirklich funktionieren.
          </p>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="leistungen" className="scroll-mt-20 bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Leistungen"
          title="Was OptiDuck IT macht"
          intro="OptiDuck IT unterstützt Unternehmen dabei, KI nicht nur zu verstehen, sondern sinnvoll in bestehende Arbeitsabläufe zu integrieren."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-card transition duration-200 hover:-translate-y-1 hover:border-accent-500/50 hover:shadow-lift"
            >
              <IconBox>{service.icon}</IconBox>
              <h3 className="mt-6 text-xl font-bold text-ink-950">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExampleSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:p-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-700">Konkretes Beispiel</p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink-950 sm:text-3xl">
              Aus einer E-Mail wird ein klarer nächster Schritt
            </h2>
          </div>
          <div className="space-y-4 text-base leading-7 text-slate-600">
            <p>
              Eine Reiseanfrage kommt per E-Mail. Ein sinnvoller Workflow kann die Angaben automatisch strukturieren,
              fehlende Informationen erkennen und einen passenden Antwortentwurf vorbereiten.
            </p>
            <p className="font-semibold text-ink-900">
              Das Team behält die Kontrolle, spart aber Zeit bei wiederkehrender Sortier- und Vorbereitungsarbeit.
            </p>
            <ButtonLink href="#kontakt" variant="light" size="sm">
              Ähnlichen Workflow prüfen lassen
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

const typicalResults = [
  "Weniger manuelle E-Mail-Arbeit",
  "Schnellere Bearbeitung von Kundenanfragen",
  "Bessere Übersicht über Aufgaben und Informationen",
  "Weniger doppelte Eingaben",
  "Klare Prozesse statt Tool-Chaos",
];

function ResultsSection() {
  return (
    <section className="bg-slate-50 py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-7 lg:grid-cols-[0.62fr_1.38fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-700">Typische Ergebnisse</p>
            <h2 className="mt-3 text-2xl font-bold text-ink-950 sm:text-3xl">
              Entlastung, die im Alltag spürbar wird
            </h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {typicalResults.map((result) => (
              <li
                key={result}
                className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold leading-6 text-ink-900 shadow-card"
              >
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-700" />
                {result}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function OfferSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="overflow-hidden rounded-3xl bg-ink-950 text-white shadow-2xl">
          <div className="grid lg:grid-cols-[1.12fr_0.88fr]">
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-500">Einfach einsteigen</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Der einfache Einstieg: KI-Workflow-Check</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Im KI-Workflow-Check analysieren wir gemeinsam Ihre wiederkehrenden Büro-, Kunden- und
                Verwaltungsprozesse. Ziel ist es, konkrete Möglichkeiten zu finden, wie KI oder Automationen Ihr
                Unternehmen im Alltag entlasten können.
              </p>
              <ButtonLink href="#kontakt" className="mt-8">
                Kostenloses Erstgespräch anfragen
              </ButtonLink>
            </div>
            <div className="border-t border-white/10 bg-white/[0.06] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-300">Ihr Ergebnis</p>
              <ul className="mt-5 space-y-4">
                {workflowCheckResults.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-100">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-500 text-ink-950">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  return (
    <section id="fuer-wen" className="scroll-mt-20 bg-accent-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Für wen"
          title="Für wen ist OptiDuck IT geeignet?"
          intro="OptiDuck IT richtet sich an kleine und mittlere Unternehmen in Nottuln, Münster und Umgebung, die KI praktisch nutzen möchten."
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => (
            <div
              key={audience}
              className="flex min-h-28 items-start gap-3 rounded-xl border border-accent-100 bg-white p-5 shadow-card transition hover:border-accent-500/50"
            >
              <CheckIcon className="mt-0.5 shrink-0 text-accent-700" />
              <p className="font-semibold leading-6 text-ink-900">{audience}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 border-l-4 border-accent-500 pl-5 text-lg font-semibold leading-8 text-ink-900">
          Wichtig ist nicht die Branche, sondern die Frage: Welche Aufgaben wiederholen sich regelmäßig und kosten
          unnötig Zeit?
        </p>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="ablauf" className="scroll-mt-20 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Zusammenarbeit" title="So läuft die Zusammenarbeit ab" align="center" />
        <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <li key={step.title} className="relative rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <span className="text-sm font-bold text-accent-700">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-lg font-bold text-ink-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function UseCasesSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Anwendungsfälle"
          title="Was mit KI-Workflows möglich ist"
          intro="Automationen für kleine und mittlere Unternehmen beginnen häufig bei ganz alltäglichen Aufgaben."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {useCases.map((useCase) => (
            <article key={useCase.title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-card">
              <h3 className="text-xl font-bold text-ink-950">{useCase.title}</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {useCase.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-6 text-slate-600">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-700" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="ueber" className="scroll-mt-20 bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
        <div className="rounded-2xl border border-slate-200 p-7 sm:p-10">
          <SectionHeading eyebrow="Über OptiDuck IT" title="Technisches Verständnis trifft praktische Umsetzung" />
          <div className="mt-6 space-y-4 leading-7 text-slate-600">
            <p>
              Hinter OptiDuck IT steht Andy Thoss. Mein Hintergrund liegt im IT-Consulting, technischen Kundensupport
              und in der Einführung digitaler Systeme. Ich verbinde analytisches Denken, technisches Verständnis und
              schnelle Auffassungsgabe mit modernen KI-Tools und Automationen.
            </p>
            <p>
              Mein Ziel ist nicht KI-Hype, sondern konkrete Entlastung im Arbeitsalltag. Unternehmen sollen KI nicht
              nur spannend finden, sondern im Alltag sinnvoll nutzen können.
            </p>
          </div>
          <ul className="mt-7 grid gap-3 text-sm font-semibold text-ink-900 sm:grid-cols-2">
            {[
              "Erfahrung im IT-Consulting",
              "Technischer Kundensupport",
              "Einführung digitaler Systeme",
              "Persönliche Betreuung durch Andy Thoss",
            ].map((item) => (
              <li key={item} className="flex gap-2.5">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-700" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <figure className="flex min-h-72 flex-col justify-between rounded-2xl bg-ink-950 p-7 text-white sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent-500">Leitsatz</p>
          <blockquote className="mt-8 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            „Erst verstehen. Dann vereinfachen. Dann automatisieren.“
          </blockquote>
          <figcaption className="mt-8 text-sm text-slate-400">Andy Thoss · OptiDuck IT</figcaption>
        </figure>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="bg-ink-900 py-14 text-white sm:py-16">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <SectionHeading eyebrow="Verantwortungsvoll einsetzen" title="Keine KI um der KI willen" light align="center" />
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Nicht jeder Prozess braucht KI. Nicht jede Automation lohnt sich. OptiDuck IT setzt dort an, wo ein echter
          Nutzen entsteht: weniger manuelle Arbeit, schnellere Abläufe, bessere Übersicht, weniger Fehler und mehr Zeit
          für Kunden und Kernaufgaben.
        </p>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="kontakt" className="scroll-mt-20 bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Kontakt"
            title="Lassen Sie uns herausfinden, wo KI in Ihrem Unternehmen sinnvoll helfen kann"
            intro="Sie möchten wissen, welche Prozesse in Ihrem Unternehmen automatisiert werden können? Dann starten wir mit einem kostenlosen und unverbindlichen Erstgespräch von etwa 20 Minuten — online oder vor Ort in Nottuln, Münster und Umgebung."
          />
          <div className="mt-8 space-y-3">
            <ContactDetails />
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ProblemSection />
        <ServicesSection />
        <ExampleSection />
        <ResultsSection />
        <OfferSection />
        <AudienceSection />
        <ProcessSection />
        <UseCasesSection />
        <AboutSection />
        <TrustSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
