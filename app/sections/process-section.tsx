import { Container } from "@/app/components/container";
import { SectionHeading } from "@/app/components/section-heading";

const steps = [
  "Strategy",
  "High-Converting Ads",
  "Funnel Setup",
  "Testing & Optimization",
  "Scaling"
];

const copy = [
  "We identify the offer, audience, and growth bottlenecks before spending harder.",
  "Your creatives and messaging are built to stop the scroll and create buying intent.",
  "Landing pages, forms, and follow-up paths are aligned to increase conversion quality.",
  "Decisions are made from data, not emotion, with structured testing and iteration.",
  "What works gets scaled carefully so growth stays profitable and controlled."
];

export function ProcessSection() {
  return (
    <section id="process" className="section-shell">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="A simple five-step process built for clarity and momentum."
          description="You do not need more complexity. You need a clean process that turns ideas, creatives, and data into better decisions every week."
          align="center"
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-5">
          {steps.map((step, index) => (
            <article key={step} className="card-soft rounded-3xl p-6 text-center">
              <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
                {index + 1}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-950">{step}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{copy[index]}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
