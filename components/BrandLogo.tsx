import Image from "next/image";

type BrandLogoProps = {
  compact?: boolean;
};

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <a
      href="/#start"
      aria-label="OptiDuck IT Startseite"
      className="inline-flex items-center transition hover:opacity-90"
    >
      <Image
        src="/optiduck-logo-transparent.png"
        alt="OptiDuck IT"
        width={compact ? 196 : 234}
        height={compact ? 100 : 120}
        priority
        className={compact ? "h-14 w-auto object-contain" : "h-20 w-auto object-contain"}
      />
    </a>
  );
}
