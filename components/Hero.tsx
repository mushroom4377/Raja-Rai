import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-[#f8f7f2] px-5 pb-16 pt-5 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <header className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-16 w-60 items-center justify-center overflow-hidden rounded-[8px] bg-[#171b1d] px-3 sm:h-[74px] sm:w-72">
              <Image
                src="/main-logo-final-cropped.png"
                alt="Marketing Raja Digital Marketing logo"
                width={360}
                height={104}
                className="h-14 w-full object-contain sm:h-16"
                priority
              />
            </div>
            <span className="hidden text-sm font-semibold uppercase tracking-[0.18em] text-[#121212] lg:inline">
              Digital Marketing Expert
            </span>
          </div>
          <a
            href="#consultation-form"
            className="hidden h-11 items-center justify-center rounded-[8px] border border-[#0b0b0b] bg-[#0b0b0b] px-5 text-sm font-bold text-white transition hover:bg-[#242424] sm:inline-flex"
          >
            Book Free Consultation
          </a>
        </header>

        <div className="grid items-center gap-12 pt-14 lg:grid-cols-[1.04fr_0.96fr] lg:pt-20">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-[#ded8c9] bg-white px-4 py-2 text-sm font-semibold text-[#5d5b55] shadow-sm">
              Free 1:1 consultation for business owners
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-normal text-[#121212] sm:text-5xl lg:text-6xl">
              Get 20-50 Customers Every Week Using Facebook & Instagram Ads
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-[#4c4a45]">
              Stop wasting money on boosting posts. Get a simple, clear plan
              that actually brings customers.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#5d5b55]">
              This is a free 1:1 consultation for business owners struggling to
              get customers. You’ll get a customized marketing strategy for your
              business.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#consultation-form"
                className="inline-flex h-14 items-center justify-center rounded-[8px] bg-[#0b0b0b] px-7 text-base font-bold text-white shadow-[0_18px_40px_rgba(18,18,18,0.18)] transition hover:-translate-y-0.5 hover:bg-[#242424] focus:outline-none focus:ring-4 focus:ring-[#b88a44]/25"
              >
                Book Free Consultation
              </a>
              <span className="inline-flex h-14 items-center text-sm font-medium text-[#5d5b55]">
                Customized Strategy for Your Business
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-10 hidden h-28 w-28 rounded-full border border-[#b88a44]/30 lg:block" />
            <div className="relative rounded-[8px] border border-[#ded8c9] bg-white p-5 shadow-[0_30px_90px_rgba(18,18,18,0.10)]">
              <div className="rounded-[8px] bg-[#0b0b0b] p-6 text-white">
                <div className="flex items-center justify-between gap-4">
                  <Image
                    src="/main-logo-final-cropped.png"
                    alt="Marketing Raja Digital Marketing logo"
                    width={420}
                    height={122}
                    className="h-20 w-80 object-contain"
                  />
                  <span className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
                    1:1 Call
                  </span>
                </div>
                <h2 className="mt-10 text-3xl font-semibold leading-tight">
                  Your Customer Growth Plan
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/72">
                  A clear strategy for ads, messages, and real sales.
                </p>
              </div>
              <div className="grid gap-3 pt-5">
                {[
                  "Business and current problem",
                  "What’s not working",
                  "Customized strategy to get customers",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-[8px] border border-[#ded8c9] bg-[#fbfaf6] p-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#b88a44] text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="text-sm font-semibold text-[#2b2b2b]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
