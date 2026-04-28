import { Container } from "@/app/components/container";

export function UrgencySection() {
  return (
    <section className="section-shell">
      <Container>
        <div className="rounded-[2rem] border border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 px-6 py-8 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">
            Limited availability
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            We only work with a limited number of businesses.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            That means more focus, better communication, and a stronger chance of
            meaningful results. If you want serious help, it makes sense to start
            the conversation before the next intake fills up.
          </p>
        </div>
      </Container>
    </section>
  );
}
