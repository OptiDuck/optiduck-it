"use client";

export function PrintOfferButton({ label = "Drucken oder als PDF speichern" }: { label?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-lg bg-accent-500 px-4 py-2.5 text-sm font-bold text-ink-950 transition hover:bg-accent-600 hover:text-white"
    >
      {label}
    </button>
  );
}
