import { Container } from "@/app/components/container";
import { SectionHeading } from "@/app/components/section-heading";

const systemSteps = [
  "Audience clarity",
  "Offer-message fit",
  "Tracked funnel",
  "Testing loop",
  "Scale with data"
];

const benefits = ["Consistent leads", "Better conversions", "Scalable growth"];

export function SolutionSection() {
  return (
    <section className="section-shell">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="The System"
            title="A Predictable Meta Ads Growth System"
            description="This is not random campaign management. It is a repeatable system built to attract the right prospects, guide them through a stronger buying journey, and improve performance with real data."
          />
          <div className="card-soft rounded-[2rem] p-6 sm:p-8">
            <div className="grid gap-4">
              <div className="flex flex-wrap gap-3">
                {benefits.map((benefit) => (
                  <span
                    key={benefit}
                    className="rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700"
                  >
                    {benefit}
                  </span>
                ))}
              </div>
              <div className="grid gap-3 rounded-[1.75rem] border border-slate-200 bg-white p-5 sm:grid-cols-2 lg:grid-cols-5">
                {systemSteps.map((step, index) => (
                  <div
                    key={step}
                    className="relative min-h-32 rounded-2xl bg-slate-50 px-4 py-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                      Step {index + 1}
                    </p>
                    <p className="mt-3 text-sm font-semibold leading-7 text-slate-950 sm:text-base">
                      {step}
                    </p>
                    {index < systemSteps.length - 1 ? (
                      <span className="absolute -right-1 top-1/2 hidden h-0.5 w-3 -translate-y-1/2 bg-teal-300 lg:block" />
                    ) : null}
                  </div>
                ))}
              </div>
              <p className="text-base leading-8 text-slate-700">
                The goal is simple: remove guesswork, improve conversion quality, and
                create an ad engine you can actually trust.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
