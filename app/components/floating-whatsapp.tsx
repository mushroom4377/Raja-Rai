import Link from "next/link";

const whatsappHref =
  "https://wa.me/9779822530525";

export function FloatingWhatsApp() {
  return (
    <Link
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Message on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-emerald-900/20 transition hover:scale-105"
    >
      <span className="text-xl font-bold">WA</span>
    </Link>
  );
}
