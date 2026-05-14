const benefits = [
  "Know exactly why you’re not getting customers",
  "Get a simple ad strategy that fits your business",
  "Learn how to turn messages into real sales",
  "Stop wasting money on things that don’t work",
];

export default function Benefits() {
  return (
    <section className="bg-[#f8f7f2] px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b88a44]">
            How You Benefit From This Consultation
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#121212] sm:text-5xl">
            A simple, clear plan that actually brings customers.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="rounded-[8px] border border-[#ded8c9] bg-white p-5 shadow-sm"
            >
              <div className="mb-5 h-1.5 w-14 rounded-full bg-[#b88a44]" />
              <p className="text-lg font-semibold leading-7 text-[#22201d]">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
