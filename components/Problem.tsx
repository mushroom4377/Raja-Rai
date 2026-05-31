const problems = [
  "You post on Facebook and Instagram, but the inquiries are too low.",
  "You boost posts, spend money, and still do not see real sales.",
  "You get random leads, but very few people become serious customers.",
  "You depend on referrals or word of mouth and want a more stable system.",
];

export default function Problem() {
  return (
    <section className="bg-[#0c0c0b] px-5 py-18 text-[#f8f3e4] sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
            Why your marketing feels stuck
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
            If online marketing feels confusing, the problem is usually the
            plan.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
            Most business owners in Nepal are not short on effort. They are
            short on a simple strategy that connects ads, content, landing
            pages, and follow-up into one clear path.
          </p>
        </div>

        <div className="grid gap-4">
          {problems.map((problem) => (
            <div
              key={problem}
              className="rounded-[8px] border border-[var(--line)] bg-white/[0.04] p-5 shadow-[0_18px_45px_rgba(0,0,0,0.2)]"
            >
              <p className="text-base font-semibold leading-7 text-[#f4ead0]">
                {problem}
              </p>
            </div>
          ))}
          <div className="rounded-[8px] border border-[var(--brand)]/35 bg-[var(--brand-soft)] p-5">
            <p className="text-base leading-8 text-[#f6e9c8]">
              In the free consultation call, I will understand your business,
              identify what is not working, and give you a clear digital
              marketing plan you can start implementing immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
