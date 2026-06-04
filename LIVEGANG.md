# OptiDuck IT - Livegang mit Strato und Vercel

Diese Checkliste ist fuer den aktuellen Stand der Website vorbereitet: Domain bei Strato, Hosting ueber Vercel, Kontaktformular per Resend.

## 1. Empfohlene Struktur

- Domain: Strato
- Website-Hosting: Vercel, fuer den Livebetrieb als Unternehmenswebsite sinnvollerweise Vercel Pro
- E-Mail-Postfach: Strato, z. B. `info@optiduck-it.de`
- Formularversand: Resend API
- Produktionsdomain: `https://www.optiduck-it.de`
- Weiterleitung: `optiduck-it.de` soll auf `www.optiduck-it.de` zeigen

Hinweis: Der kostenlose Vercel-Hobby-Plan ist laut Vercel fuer persoenliche, nicht-kommerzielle Nutzung gedacht. Fuer eine Unternehmenswebsite sollte deshalb ein kommerziell nutzbarer Plan eingeplant werden.

## 2. Projekt zu GitHub bringen

1. GitHub-Konto oeffnen oder nutzen.
2. Neues privates oder oeffentliches Repository erstellen, z. B. `optiduck-it`.
3. Projektordner `C:\Users\Espor\Documents\OptiDuck IT` zu GitHub pushen.
4. Wichtig: `.env.local` nicht hochladen. Die Datei ist lokal und enthaelt spaeter geheime Werte.

## 3. Vercel-Projekt erstellen

1. Bei Vercel anmelden.
2. Fuer den echten Livebetrieb den passenden Plan waehlen. Fuer OptiDuck IT ist Vercel Pro die realistische Standardoption.
3. GitHub verbinden.
4. Repository `optiduck-it` importieren.
5. Framework Preset: Next.js.
6. Build Command: `npm run build`.
7. Install Command: `npm install`.
8. Output Directory leer lassen, Vercel erkennt Next.js automatisch.

## 4. Umgebungsvariablen in Vercel setzen

In Vercel unter `Project Settings -> Environment Variables` diese Werte fuer Production eintragen:

```env
NEXT_PUBLIC_SITE_URL=https://www.optiduck-it.de
NEXT_PUBLIC_CONTACT_EMAIL=info@optiduck-it.de
NEXT_PUBLIC_CONTACT_PHONE=+352 661 411 699
NEXT_PUBLIC_BUSINESS_ADDRESS=Flurstraße 51, 48301 Nottuln

CONTACT_RECIPIENT_EMAIL=info@optiduck-it.de
CONTACT_FROM_EMAIL=OptiDuck IT <website@optiduck-it.de>
RESEND_API_KEY=re_...
```

Nach Aenderungen an Environment Variables immer neu deployen. Vercel uebernimmt neue Werte erst fuer neue Deployments.

## 5. Domain in Vercel hinzufuegen

In Vercel unter `Project Settings -> Domains` hinzufuegen:

- `optiduck-it.de`
- `www.optiduck-it.de`

Danach zeigt Vercel die benoetigten DNS-Eintraege an. Diese Werte sind massgeblich.

## 6. DNS bei Strato setzen

Strato Kundenlogin:

`Domains -> Domainverwaltung -> optiduck-it.de -> Zahnrad -> DNS`

Typische Eintraege fuer Vercel:

| Zweck | Typ | Name / Host | Wert |
| --- | --- | --- | --- |
| Hauptdomain | A | `@` oder leer | `76.76.21.21` |
| www | CNAME | `www` | Vercel-Wert, z. B. `cname.vercel-dns.com` oder projektbezogener Wert |

Bei Strato kann es bis zu 24 Stunden dauern, bis DNS-Aenderungen vollstaendig aktiv sind. Oft geht es schneller.

## 7. E-Mail bei Strato einrichten

1. Postfach oder Weiterleitung `info@optiduck-it.de` anlegen.
2. Testmail senden und empfangen.
3. Wenn eine Weiterleitung genutzt wird, pruefen, ob Antworten sauber ueber die richtige Adresse laufen.

## 8. Resend fuer das Kontaktformular einrichten

1. Resend-Konto erstellen.
2. Domain `optiduck-it.de` oder besser Subdomain `mail.optiduck-it.de` / `send.optiduck-it.de` in Resend hinzufuegen.
3. Die von Resend angezeigten DNS-Records bei Strato setzen.
4. In Resend `Verify DNS Records` ausfuehren.
5. API-Key erzeugen und in Vercel als `RESEND_API_KEY` setzen.
6. `CONTACT_FROM_EMAIL` erst produktiv nutzen, wenn die Versanddomain verifiziert ist.

Hinweis: Strato bleibt fuer das normale Empfangen von E-Mails zustaendig. Resend wird nur fuer den Versand der Kontaktformular-Mail genutzt.

## 9. Rechtliches vor Livegang

Vor der Veroeffentlichung final pruefen:

- Impressum mit vollstaendiger Anbieterkennzeichnung
- Datenschutzerklaerung mit Hosting bei Vercel
- Datenschutzerklaerung mit Kontaktformular und Resend, falls Formular aktiv
- Telefonnummer und E-Mail-Adresse
- Falls vorhanden: Umsatzsteuer-ID oder Hinweis, falls noch nicht vorhanden

Die vorbereiteten Texte sind Arbeitsvorlagen und keine Rechtsberatung.

## 10. Finale Tests

Nach dem Deployment pruefen:

- `https://www.optiduck-it.de`
- `https://optiduck-it.de`
- Weiterleitung auf die bevorzugte Domain
- HTTPS-Zertifikat aktiv
- Navigation und Ankerlinks
- Kontaktformular mit echter Anfrage
- Pflichtfeld-Fehler im Formular
- Impressum und Datenschutz
- Smartphone-Ansicht
- WhatsApp/LinkedIn-Vorschau mit Logo und Beschreibung
- `https://www.optiduck-it.de/robots.txt`
- `https://www.optiduck-it.de/sitemap.xml`

## 11. Interne Dokumente

Die Businessplan-Seite unter `/dokumente/businessplan` ist als internes Dokument gedacht. Sie ist nicht in der Sitemap enthalten und in `robots.txt` fuer Suchmaschinen gesperrt.

## 12. Quellen fuer DNS und Deployment

- Vercel Custom Domains: https://vercel.com/docs/domains/set-up-custom-domain
- Vercel Environment Variables: https://vercel.com/docs/projects/environment-variables
- Vercel Hobby Plan: https://vercel.com/docs/accounts/plans/hobby
- Strato DNS-Verwaltung: https://www.strato.de/faq/domains/wie-kann-ich-bei-strato-meine-dns-eintraege-verwalten/
- Resend Domains: https://resend.com/docs/dashboard/domains/introduction
