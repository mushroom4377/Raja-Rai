export default function Urgency() {
  return (
    <section className="bg-[#0b0b0b] px-5 py-14 text-white sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d8b173]">
            Limited consultation slots
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
            Book your free call while consultation slots are available.
          </h2>
          <p className="mt-4 text-base leading-7 text-white/70">
            Each call includes a customized strategy for your business, so
            availability is limited.
          </p>
        </div>
        <a
          href="#consultation-form"
          className="inline-flex h-14 shrink-0 items-center justify-center rounded-[8px] bg-white px-7 text-base font-bold text-[#0b0b0b] transition hover:bg-[#ece7d8] focus:outline-none focus:ring-4 focus:ring-white/20"
        >
          Book Free Consultation
        </a>
      </div>
    </section>
  );
}
