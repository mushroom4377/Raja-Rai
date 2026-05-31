import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#070707] px-5 pb-20 pt-6 text-[#f8f3e4] sm:px-8 lg:px-10">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(215,167,61,0.14),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_42%)]" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.03)_0,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_90px)] opacity-25" />

      <div className="relative mx-auto max-w-6xl">
        <header className="flex items-center justify-between gap-4 py-3">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-60 items-center justify-center overflow-hidden sm:h-[74px] sm:w-72">
              <Image
                src="/main-logo-transparent.png"
                alt="Marketing Raja Digital Marketing logo"
                width={360}
                height={104}
                className="h-14 w-full object-contain drop-shadow-[0_18px_32px_rgba(0,0,0,0.45)] sm:h-16"
                priority
              />
            </div>
            <span className="hidden text-sm font-semibold uppercase tracking-[0.18em] text-[#f8f3e4] lg:inline">
              Digital Marketing Expert
            </span>
          </div>
          <a
            href="#consultation-form"
            className="hidden h-11 items-center justify-center rounded-[8px] bg-[var(--brand)] px-5 text-sm font-bold text-[#080808] transition hover:bg-[var(--brand-strong)] sm:inline-flex"
          >
            Book Free Consultation
          </a>
        </header>

        <div className="mx-auto flex max-w-5xl flex-col items-center pt-20 text-center lg:pt-28">
          <p className="mb-5 inline-flex rounded-full border border-[var(--line)] bg-white/5 px-4 py-2 text-sm font-semibold text-[var(--brand-strong)] shadow-[0_14px_35px_rgba(0,0,0,0.25)]">
            Free consultation for Nepal-based business owners
          </p>
          <h1 className="max-w-5xl text-4xl font-semibold leading-[1.04] tracking-normal text-white sm:text-5xl lg:text-7xl">
            Get a Free 1:1 Digital Marketing Consultation Call
          </h1>
          <p className="mt-6 max-w-4xl text-xl font-medium leading-8 text-[#e8ddbf]">
            Discover what&apos;s stopping your business from getting consistent
            customers online - and get a simple growth plan made for your
            business.
          </p>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            Are you struggling to get customers from Facebook, Instagram, or
            online marketing? Book a free 1:1 consultation call and get a clear
            plan to improve your ads, attract more leads, and grow your
            business online.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#consultation-form"
              className="inline-flex h-14 items-center justify-center rounded-[8px] bg-[var(--brand)] px-8 text-base font-bold text-[#080808] shadow-[0_18px_44px_rgba(215,167,61,0.28)] transition hover:-translate-y-0.5 hover:bg-[var(--brand-strong)] focus:outline-none focus:ring-4 focus:ring-[var(--brand)]/25"
            >
              Book your FREE call now
            </a>
            <span className="text-sm font-medium text-[var(--muted)]">
              1-hour call. Clear next steps. No confusion.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
