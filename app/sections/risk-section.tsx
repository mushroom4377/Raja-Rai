import { Container } from "@/app/components/container";
import { SectionHeading } from "@/app/components/section-heading";

const items = [
  "Data-driven decisions instead of gut-feel changes",
  "Controlled testing so you learn before you scale",
  "Clear tracking to reduce wasted budget and false assumptions"
];

export function RiskSection() {
  return (
    <section className="section-shell">
      <Container>
        <div className="rounded-[2rem] border border-slate-200 bg-slate-950 px-6 py-10 text-white sm:px-10">
          <SectionHeading
            eyebrow="Risk Reversal"
            title="No guessing. No random changes. No vanity-metric confidence."
            description="The process is designed to lower risk by replacing assumptions with data, testing, and clearer decision-making."
            variant="inverse"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {items.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
