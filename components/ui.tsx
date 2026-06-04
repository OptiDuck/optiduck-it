import type { ReactNode } from "react";

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "light";
  size?: "sm" | "md";
  className?: string;
};

export function ButtonLink({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
}: ButtonLinkProps) {
  const variants = {
    primary: "bg-accent-500 text-ink-950 hover:bg-accent-600 hover:text-white",
    secondary: "border border-white/25 bg-white/5 text-white hover:border-white/45 hover:bg-white/10",
    light: "border border-slate-300 bg-white text-ink-900 hover:border-accent-500 hover:text-accent-700",
  };
  const sizes = {
    sm: "px-4 py-2.5 text-sm",
    md: "px-5 py-3.5 text-sm sm:text-base",
  };

  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 rounded-lg font-bold transition duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      <ArrowRightIcon />
    </a>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent-600">{eyebrow}</p>
      ) : null}
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-ink-950"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p className={`mt-5 text-lg leading-8 ${light ? "text-slate-300" : "text-slate-600"}`}>{intro}</p>
      ) : null}
    </div>
  );
}

export function IconBox({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-700 ring-1 ring-accent-100">
      {children}
    </div>
  );
}

export function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={`h-5 w-5 ${className}`} aria-hidden="true">
      <path d="m5 12.5 4.2 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <path d="M5 12h13m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path d="M12 3 9.9 9.9 3 12l6.9 2.1L12 21l2.1-6.9L21 12l-6.9-2.1L12 3Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

export function FlowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <rect x="3" y="4" width="6" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.7" />
      <rect x="15" y="15" width="6" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M9 6.5h3a4 4 0 0 1 4 4V15m0 0-2.5-2.5M16 15l2.5-2.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AssistantIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path d="M7 19.5v-2.8A4.7 4.7 0 0 1 11.7 12h.6a4.7 4.7 0 0 1 4.7 4.7v2.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="12" cy="7" r="3" stroke="currentColor" strokeWidth="1.7" />
      <path d="M4 19.5h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

