"use client";

import { useState, type FormEvent } from "react";

type FormState = {
  status: "idle" | "sending" | "success" | "error";
  message: string;
};

const initialState: FormState = { status: "idle", message: "" };

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialState);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState({ status: "sending", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Ihre Anfrage konnte nicht gesendet werden.");
      }

      form.reset();
      setFormState({
        status: "success",
        message: result.message || "Vielen Dank. Ihre Anfrage wurde gesendet.",
      });
    } catch (error) {
      setFormState({
        status: "error",
        message: error instanceof Error ? error.message : "Ihre Anfrage konnte nicht gesendet werden.",
      });
    }
  }

  return (
    <form
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Name" name="name" placeholder="Ihr Name" required />
        <FormField label="Unternehmen" name="company" placeholder="Ihr Unternehmen" />
        <FormField label="E-Mail" name="email" type="email" placeholder="name@unternehmen.de" required />
        <FormField label="Telefonnummer" name="phone" type="tel" placeholder="Ihre Telefonnummer" />
        <FormField label="Branche" name="industry" placeholder="Zum Beispiel Praxis, Agentur oder Handwerk" />

        <label className="block text-sm font-semibold text-ink-900 sm:col-span-2">
          Was kostet aktuell besonders viel Zeit?
          <textarea
            name="timeConsumers"
            rows={3}
            placeholder="Beschreiben Sie kurz die wiederkehrenden Aufgaben."
            className="mt-2 w-full resize-y rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-sm font-normal text-ink-900 placeholder:text-slate-400 transition hover:border-slate-400"
          />
        </label>

        <label className="block text-sm font-semibold text-ink-900 sm:col-span-2">
          Nachricht
          <textarea
            name="message"
            rows={4}
            placeholder="Wobei dürfen wir Sie unterstützen?"
            className="mt-2 w-full resize-y rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-sm font-normal text-ink-900 placeholder:text-slate-400 transition hover:border-slate-400"
          />
        </label>

        <label className="hidden" aria-hidden="true">
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>

        <label className="flex items-start gap-3 text-xs leading-5 text-slate-600 sm:col-span-2">
          <input
            required
            name="privacyAccepted"
            type="checkbox"
            value="true"
            className="mt-1 h-4 w-4 rounded border-slate-300 text-accent-600"
          />
          <span>
            Ich stimme zu, dass meine Angaben zur Bearbeitung der Anfrage verwendet werden. Weitere Informationen
            stehen in der{" "}
            <a className="font-semibold text-ink-900 underline hover:text-accent-700" href="/datenschutz">
              Datenschutzerklärung
            </a>
            .
          </span>
        </label>
      </div>

      <button
        type="submit"
        disabled={formState.status === "sending"}
        className="mt-6 inline-flex items-center rounded-lg bg-accent-500 px-5 py-3.5 text-sm font-bold text-ink-950 transition hover:bg-accent-600 hover:text-white disabled:cursor-wait disabled:opacity-70"
      >
        {formState.status === "sending" ? "Anfrage wird gesendet ..." : "Kostenloses Erstgespräch anfragen"}
      </button>

      <p className="mt-4 text-xs leading-5 text-slate-500">
        Kostenlos und unverbindlich. In der Regel erhalten Sie innerhalb von zwei Werktagen eine Rückmeldung.
      </p>

      {formState.message ? (
        <p
          role="status"
          className={`mt-4 rounded-lg px-4 py-3 text-sm ${
            formState.status === "success"
              ? "bg-emerald-50 text-emerald-800"
              : "bg-red-50 text-red-800"
          }`}
        >
          {formState.message}
        </p>
      ) : null}
    </form>
  );
}

type FormFieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
};

function FormField({ label, name, type = "text", placeholder, required = false }: FormFieldProps) {
  return (
    <label className="block text-sm font-semibold text-ink-900">
      {label}
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-sm font-normal text-ink-900 placeholder:text-slate-400 transition hover:border-slate-400"
      />
    </label>
  );
}

