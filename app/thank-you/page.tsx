import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Thank You | Free Digital Marketing Consultation",
  description: "Your free consultation request has been received.",
};

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f8f7f2] px-5 py-12 text-[#121212]">
      <section className="w-full max-w-2xl rounded-[8px] border border-[#ded8c9] bg-white p-6 shadow-[0_24px_70px_rgba(18,18,18,0.08)] sm:p-10">
        <div className="mb-8 flex h-16 w-60 items-center justify-center overflow-hidden rounded-[8px] bg-[#171b1d] px-3">
          <Image
            src="/main-logo-final-cropped.png"
            alt="Marketing Raja Digital Marketing logo"
            width={360}
            height={104}
            className="h-14 w-full object-contain"
            priority
          />
        </div>

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#b88a44]">
          Request received
        </p>
        <h1 className="text-3xl font-semibold leading-tight sm:text-5xl">
          Thank you for booking your free consultation.
        </h1>
        <p className="mt-5 text-lg leading-8 text-[#5d5b55]">
          Your details have been received. The next step is to check your email
          and WhatsApp so we can confirm your 1:1 consultation and prepare your
          customized strategy for your business.
        </p>

        <div className="mt-8 grid gap-3 text-sm text-[#2b2b2b] sm:grid-cols-3">
          <div className="rounded-[8px] border border-[#ded8c9] bg-[#fbfaf6] p-4">
            <strong className="block">Step 1</strong>
            <span className="mt-1 block text-[#5d5b55]">
              Check your email
            </span>
          </div>
          <div className="rounded-[8px] border border-[#ded8c9] bg-[#fbfaf6] p-4">
            <strong className="block">Step 2</strong>
            <span className="mt-1 block text-[#5d5b55]">
              Watch WhatsApp
            </span>
          </div>
          <div className="rounded-[8px] border border-[#ded8c9] bg-[#fbfaf6] p-4">
            <strong className="block">Step 3</strong>
            <span className="mt-1 block text-[#5d5b55]">
              Get your plan
            </span>
          </div>
        </div>

        <Link
          href="/"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-[8px] bg-[#0b0b0b] px-6 text-sm font-bold text-white transition hover:bg-[#242424] focus:outline-none focus:ring-4 focus:ring-[#b88a44]/25"
        >
          Back to Landing Page
        </Link>
      </section>
    </main>
  );
}
