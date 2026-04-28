import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/components/button";
import { Container } from "@/app/components/container";

const navItems = [
  { label: "Why Ads Fail", href: "#why-ads-fail" },
  { label: "Process", href: "#process" },
  { label: "Proof", href: "#proof" },
  { label: "FAQ", href: "#faq" }
];

export function StickyHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/70 bg-white/88 backdrop-blur-xl">
      <Container className="flex min-h-18 items-center justify-between gap-4">
        <Link href="#top" className="flex items-center">
          <Image
            src="/Main logo 1.png"
            alt="Meta Ads Expert logo"
            width={250}
            height={72}
            priority
            className="h-14 w-auto object-contain sm:h-16"
          />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button href="tel:+9779822530525" className="px-5 py-2.5 text-sm">
          Book Free Call
        </Button>
      </Container>
    </header>
  );
}
