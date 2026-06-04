import { NextResponse, type NextRequest } from "next/server";

type ContactPayload = {
  name?: unknown;
  company?: unknown;
  email?: unknown;
  phone?: unknown;
  industry?: unknown;
  timeConsumers?: unknown;
  message?: unknown;
  website?: unknown;
  privacyAccepted?: unknown;
};

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const requests = new Map<string, RateLimitEntry>();
const rateLimitWindow = 60 * 60 * 1000;
const rateLimitMax = 5;

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { message: "Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt per E-Mail." },
      { status: 429 },
    );
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: "Die Anfrage konnte nicht verarbeitet werden." }, { status: 400 });
  }

  if (stringValue(payload.website)) {
    return NextResponse.json({ message: "Vielen Dank. Ihre Anfrage wurde gesendet." });
  }

  const name = stringValue(payload.name);
  const company = stringValue(payload.company);
  const email = stringValue(payload.email);
  const phone = stringValue(payload.phone);
  const industry = stringValue(payload.industry);
  const timeConsumers = stringValue(payload.timeConsumers);
  const message = stringValue(payload.message);

  if (!name || !email || payload.privacyAccepted !== "true") {
    return NextResponse.json(
      { message: "Bitte füllen Sie die Pflichtfelder aus und bestätigen Sie die Datenschutzhinweise." },
      { status: 400 },
    );
  }

  if (!isEmail(email)) {
    return NextResponse.json({ message: "Bitte geben Sie eine gültige E-Mail-Adresse ein." }, { status: 400 });
  }

  if ([name, company, email, phone, industry].some((value) => value.length > 200)) {
    return NextResponse.json({ message: "Bitte kürzen Sie Ihre Angaben etwas." }, { status: 400 });
  }

  if (timeConsumers.length > 2500 || message.length > 5000) {
    return NextResponse.json({ message: "Bitte kürzen Sie Ihre Nachricht etwas." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL;
  const sender = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !recipient || !sender) {
    return NextResponse.json(
      {
        message:
          "Das Formular wird gerade freigeschaltet. Bitte kontaktieren Sie OptiDuck IT vorerst direkt per E-Mail.",
      },
      { status: 503 },
    );
  }

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: email,
        subject: `Neue Website-Anfrage von ${name}${company ? ` (${company})` : ""}`,
        text: [
          `Name: ${name}`,
          `Unternehmen: ${company || "-"}`,
          `E-Mail: ${email}`,
          `Telefon: ${phone || "-"}`,
          `Branche: ${industry || "-"}`,
          "",
          "Was kostet aktuell besonders viel Zeit?",
          timeConsumers || "-",
          "",
          "Nachricht:",
          message || "-",
        ].join("\n"),
      }),
    });

    if (resendResponse.ok) {
      return NextResponse.json({
        message: "Vielen Dank. Ihre Anfrage wurde gesendet. Wir melden uns in der Regel innerhalb von zwei Werktagen.",
      });
    }
  } catch {
    // Fall through to the user-facing error below.
  }

  return NextResponse.json(
    { message: "Ihre Anfrage konnte gerade nicht gesendet werden. Bitte versuchen Sie es später erneut." },
    { status: 502 },
  );
}

function stringValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = requests.get(ip);

  if (!current || current.resetAt < now) {
    requests.set(ip, { count: 1, resetAt: now + rateLimitWindow });
    return false;
  }

  current.count += 1;
  requests.set(ip, current);
  return current.count > rateLimitMax;
}
