import { Container } from "@/app/components/container";
import { SectionHeading } from "@/app/components/section-heading";

const bonuses = [
  {
    title: "Ad Copy Angles",
    text: "Fresh messaging angles designed to make your offer feel sharper and more compelling."
  },
  {
    title: "Mistake Audit",
    text: "A quick diagnosis of what is currently draining budget, weakening leads, or hurting trust."
  },
  {
    title: "Growth Plan",
    text: "A practical roadmap showing what to fix first, what to test next, and where to scale."
  }
];

export function BonusesSection() {
  return (
    <section className="section-shell">
      <Container>
        <SectionHeading
          eyebrow="Bonuses"
          title="Extra value that helps you move faster and avoid expensive mistakes."
          description="These bonuses are designed to increase clarity, remove blind spots, and give you stronger next steps even before scaling begins."
          align="center"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {bonuses.map((bonus) => (
            <article
              key={bonus.title}
              className="rounded-[2rem] border border-teal-100 bg-gradient-to-br from-white to-teal-50 p-6 shadow-sm"
            >
              <span className="inline-flex rounded-full bg-teal-600 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                Bonus
              </span>
              <h3 className="mt-5 text-xl font-semibold text-slate-950">
                {bonus.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{bonus.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
