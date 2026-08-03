import Image from "next/image";
import Link from "next/link";
import VimeoThankYouPlayer from "@/components/VimeoThankYouPlayer";

export default function ThankYouContent() {
  return (
    <main className="gold-grid relative min-h-screen overflow-hidden bg-[#0B1716] px-5 py-6 text-[#F5FFFD] sm:px-8 sm:py-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(85,199,186,.22),transparent_30%),radial-gradient(circle_at_85%_12%,rgba(38,156,145,.18),transparent_28%),linear-gradient(180deg,rgba(0,0,0,.02),rgba(0,0,0,.35))]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-6xl flex-col">
        <header className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div className="flex items-center gap-4">
            <Image
              src="/ai-marketing-raja-teal.png"
              alt="AI Marketing Raja"
              width={160}
              height={160}
              priority
              className="h-12 w-12 object-contain sm:h-14 sm:w-14"
            />
            <div className="hidden sm:block">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.32em] text-[#A6F3E9]">
                Request received
              </p>
              <p className="mt-1 text-sm text-[#D3EEEA]">
                We&apos;ll review your consultation details next.
              </p>
            </div>
          </div>

          <Link
            href="/"
            className="inline-flex min-h-11 items-center rounded-full border border-[#55C7BA]/30 bg-white/5 px-4 text-sm font-bold text-[#F5FFFD] transition hover:border-[#8AE6DB] hover:bg-white/10"
          >
            Back to home
          </Link>
        </header>

        <section className="relative flex flex-1 items-center py-10 sm:py-14">
          <div className="grid w-full gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="max-w-3xl">
              <p className="inline-flex rounded-full border border-[#55C7BA]/35 bg-[#55C7BA]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#A6F3E9]">
                Free consultation confirmed
              </p>

              <h1 className="mt-6 text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                Thank you for booking your{" "}
                <span className="gold-shine">free consultation.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#D3EEEA] sm:text-xl">
                Your consultation request is in. We&apos;ll review the details you
                shared and follow up with you soon.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#C9F2EC]">
                  Personalized review
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#C9F2EC]">
                  Clear next steps
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#C9F2EC]">
                  Practical strategy
                </span>
              </div>

              <div className="mt-10 grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.26)] backdrop-blur md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-[#0F2321]/70 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A6F3E9]">
                    Step 1
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#E3F6F2]">
                    Keep an eye on your email for the consultation confirmation.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#0F2321]/70 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A6F3E9]">
                    Step 2
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#E3F6F2]">
                    Review the details you shared so we can tailor the discussion.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#0F2321]/70 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A6F3E9]">
                    Step 3
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#E3F6F2]">
                    Join the call and leave with a clear action plan for your clinic.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-[2.25rem] bg-[radial-gradient(circle_at_top,rgba(85,199,186,.22),transparent_40%),linear-gradient(180deg,rgba(85,199,186,.14),rgba(6,21,20,.96))] blur-2xl" />

              <div className="rounded-[2rem] border border-[#55C7BA]/20 bg-[#081312]/95 p-5 shadow-[0_24px_90px_rgba(0,0,0,0.45)] sm:p-6">
                <div className="rounded-[1.5rem] border border-white/10 bg-[#0C1A19] p-4 sm:p-5">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#A6F3E9]">
                        What happens next
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[#CDEBE6]">
                        We&apos;ll review your details and prepare your next-step
                        recommendations.
                      </p>
                    </div>
                    <div className="hidden h-12 w-12 rounded-full border border-[#55C7BA]/25 bg-[#55C7BA]/10 sm:flex items-center justify-center text-[#A6F3E9]">
                      ✓
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-black/20">
                    <VimeoThankYouPlayer />
                  </div>
                </div>

                <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A6F3E9]">
                    Quick note
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#D3EEEA]">
                    If you need to update your booking details, reply to the
                    confirmation email and we&apos;ll take care of it.
                  </p>
                </div>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://wa.me/9779822530525"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-[#55C7BA] px-5 text-sm font-bold text-[#081312] transition hover:bg-[#8AE6DB]"
                  >
                    Chat on WhatsApp
                  </a>
                  <Link
                    href="/"
                    className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full border border-white/12 bg-white/5 px-5 text-sm font-bold text-[#F5FFFD] transition hover:bg-white/10"
                  >
                    Explore the landing page
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
