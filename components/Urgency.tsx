export default function Urgency() {
  return (
    <section className="bg-[#0c0c0b] px-5 py-16 text-[#f8f3e4] sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-[8px] border border-[var(--line)] bg-[linear-gradient(135deg,rgba(215,167,61,0.16),rgba(255,255,255,0.04))] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.28)] sm:p-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
            Ready for clarity?
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Stop guessing what to post, boost, or run as ads.
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--muted)]">
            Fill up the form and get a simple direction for getting more leads,
            customers, and sales online.
          </p>
        </div>
        <a
          href="#consultation-form"
          className="inline-flex h-14 shrink-0 items-center justify-center rounded-[8px] bg-[var(--brand)] px-7 text-base font-bold text-[#080808] transition hover:bg-[var(--brand-strong)] focus:outline-none focus:ring-4 focus:ring-[var(--brand)]/25"
        >
          Book your FREE call now
        </a>
      </div>
    </section>
  );
}
