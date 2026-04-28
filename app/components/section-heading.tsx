type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  variant?: "default" | "inverse";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  variant = "default"
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "";
  const eyebrowColor =
    variant === "inverse" ? "text-teal-300" : "text-[var(--color-brand)]";
  const titleColor = variant === "inverse" ? "text-white" : "text-slate-950";
  const bodyColor = variant === "inverse" ? "text-slate-300" : "text-[var(--color-muted)]";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.22em] ${eyebrowColor}`}>
        {eyebrow}
      </p>
      <h2 className={`text-balance text-3xl font-semibold tracking-tight sm:text-4xl ${titleColor}`}>
        {title}
      </h2>
      <p className={`mt-4 text-base leading-7 sm:text-lg ${bodyColor}`}>
        {description}
      </p>
    </div>
  );
}
