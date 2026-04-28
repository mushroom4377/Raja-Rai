import { Button } from "@/app/components/button";
import { Container } from "@/app/components/container";
import { LeadForm } from "@/app/components/lead-form";

const bullets = [
  "Clear strategy before scaling",
  "Stronger lead quality and conversion flow",
  "Less wasted spend and less daily stress"
];

export function FinalCtaSection() {
  return (
    <section id="final-cta" className="section-shell pt-8">
      <Container>
        <div className="rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-teal-900 px-6 py-10 text-white shadow-2xl shadow-slate-900/15 sm:px-10 sm:py-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-300">
                Final CTA
              </p>
              <h2 className="text-balance mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Stop guessing. Start growing.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                If you want a cleaner system, better leads, and more confidence in your
                Meta Ads decisions, this is the next step.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="tel:+9779822530525">
                  Book Free Strategy Call
                </Button>
                <Button
                  href="https://wa.me/9779822530525"
                  variant="secondary"
                  className="border-white/20 bg-white/10 text-white hover:bg-white/15"
                >
                  WhatsApp Now
                </Button>
              </div>
              <ul className="mt-8 flex flex-wrap gap-3 text-sm text-slate-200">
                {bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-teal-300">
                Quick Form
              </p>
              <LeadForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
