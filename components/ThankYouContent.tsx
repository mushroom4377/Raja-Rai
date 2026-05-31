import Image from "next/image";
import VimeoThankYouPlayer from "@/components/VimeoThankYouPlayer";

export default function ThankYouContent() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#070707] px-5 py-12 text-[#f8f3e4]">
      <section className="w-full max-w-3xl rounded-[8px] border border-[var(--line)] bg-[var(--panel)] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.38)] sm:p-10">
        <div className="mx-auto mb-8 flex h-20 w-72 items-center justify-center overflow-hidden rounded-[8px] border border-[var(--line)] bg-[#151515] px-4 sm:w-96">
          <Image
            src="/main-logo-transparent.png"
            alt="Marketing Raja Digital Marketing logo"
            width={420}
            height={122}
            className="h-16 w-full object-contain"
            priority
          />
        </div>

        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
            Request received
          </p>
          <h1 className="text-3xl font-semibold leading-tight text-white sm:text-5xl">
            Wait... watch the video before you go
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Before your consultation, please watch this short video so you know
            what to do next.
          </p>
        </div>

        <VimeoThankYouPlayer />

        <div className="mt-8 grid gap-3 text-sm text-[#f4ead0] sm:grid-cols-3">
          <div className="rounded-[8px] border border-[var(--line)] bg-white/[0.04] p-4">
            <strong className="block text-white">Step 1</strong>
            <span className="mt-1 block text-[var(--muted)]">
              Watch the video
            </span>
          </div>
          <div className="rounded-[8px] border border-[var(--line)] bg-white/[0.04] p-4">
            <strong className="block text-white">Step 2</strong>
            <span className="mt-1 block text-[var(--muted)]">
              Check your next step
            </span>
          </div>
          <div className="rounded-[8px] border border-[var(--line)] bg-white/[0.04] p-4">
            <strong className="block text-white">Step 3</strong>
            <span className="mt-1 block text-[var(--muted)]">
              Chat on WhatsApp
            </span>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://wa.me/9779822530525"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-[8px] bg-[var(--brand)] px-6 text-sm font-bold text-[#080808] transition hover:bg-[var(--brand-strong)] focus:outline-none focus:ring-4 focus:ring-[var(--brand)]/25"
          >
            Chat with me on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
