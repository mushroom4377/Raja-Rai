import Image from "next/image";

export default function Header() {
  return (
    <header className="relative z-10 bg-[#0B1716] px-5 pt-5 text-white sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 border-b border-white/10 pb-5">
        <Image
          src="/ai-marketing-raja-teal.png"
          alt="AI Marketing Raja"
          width={180}
          height={180}
          priority
          className="h-20 w-20 object-contain sm:h-24 sm:w-24"
        />
        <p className="hidden text-xs font-bold uppercase tracking-[.24em] text-[#C9F2EC] md:block">
          AI Marketing Expert
        </p>
        <a
          href="#consultation-form"
          className="inline-flex min-h-11 items-center rounded-xl bg-[#55C7BA] px-4 text-xs font-bold text-[#0B1716] transition hover:bg-[#8AE6DB] sm:px-5 sm:text-sm"
        >
          Book Free Consultation
        </a>
      </div>
    </header>
  );
}
