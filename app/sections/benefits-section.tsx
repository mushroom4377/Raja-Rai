import { Container } from "@/app/components/container";
import { SectionHeading } from "@/app/components/section-heading";

const benefits = [
  {
    title: "Consistent leads",
    text: "Create a more stable pipeline instead of waiting on random spikes."
  },
  {
    title: "Better customers",
    text: "Attract people who actually fit your offer and are more likely to buy."
  },
  {
    title: "ROI-focused ads",
    text: "Spend is managed with outcomes in mind, not vanity metrics."
  },
  {
    title: "Less stress",
    text: "You get a clearer system, better reporting, and fewer gut-feeling decisions."
  }
];

export function BenefitsSection() {
  return (
    <section className="section-shell">
      <Container>
        <SectionHeading
          eyebrow="Outcomes"
          title="What better advertising should actually feel like."
          description="The biggest win is not just cheaper clicks. It is having a growth system that brings better leads, better visibility, and much less stress."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                +
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-950">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{benefit.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
