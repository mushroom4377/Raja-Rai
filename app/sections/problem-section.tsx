import { Container } from "@/app/components/container";
import { SectionHeading } from "@/app/components/section-heading";

const pains = [
  "Ads ma paisa dubyo.",
  "Leads aauxa but convert hudaina.",
  "Boost gareko matra ho, result aayena."
];

const bullets = [
  "Your sales feel random, so planning growth becomes stressful.",
  "You keep spending money, but cannot explain where the return went.",
  "You are stuck between confusing advice, weak leads, and constant frustration."
];

export function ProblemSection() {
  return (
    <section className="section-shell">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionHeading
            eyebrow="The Pain"
            title="When ads feel unpredictable, every rupee starts to feel risky."
            description="Most businesses do not fail because Meta Ads never work. They fail because the setup behind the ads is broken, inconsistent, or impossible to trust."
          />
          <div className="space-y-5">
            {pains.map((pain) => (
              <div
                key={pain}
                className="card-soft rounded-3xl border border-rose-100 p-5 text-lg font-medium text-slate-900"
              >
                {pain}
              </div>
            ))}
            <ul className="grid gap-4">
              {bullets.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-3xl border border-slate-200 bg-white p-5 text-slate-600"
                >
                  <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-100 text-sm text-rose-600">
                    !
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
