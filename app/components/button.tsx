import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = ""
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-[var(--color-brand)] text-white shadow-lg shadow-teal-900/10 hover:bg-[var(--color-brand-strong)]"
      : "border border-[var(--color-line)] bg-white text-[var(--color-ink)] hover:border-sky-200 hover:bg-sky-50";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-200 ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}
