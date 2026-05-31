const steps = [
  "Fill up the form",
  "Receive an email with the appointment link",
  "Fill the appointment form",
  "Join the 1:1 consultation call",
  "Get your customized digital marketing plan for FREE",
];

export default function Benefits() {
  return (
    <section className="bg-[#070707] px-5 py-18 text-[#f8f3e4] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
            How The Free Consultation Works
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
            A simple path from confusion to a clear growth plan.
          </h2>
          <p className="mt-5 text-base leading-8 text-[var(--muted)]">
            You do not need to figure everything out alone. This call is built
            to help you see exactly what to fix next.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-5">
          {steps.map((step, index) => (
            <article
              key={step}
              className="rounded-[8px] border border-[var(--line)] bg-[var(--panel)] p-5 shadow-[0_18px_45px_rgba(0,0,0,0.18)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand)] text-sm font-bold text-[#090909]">
                {index + 1}
              </div>
              <p className="mt-5 text-base font-semibold leading-7 text-[#f6e9c8]">
                {step}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
