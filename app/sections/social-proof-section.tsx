import { Container } from "@/app/components/container";
import { SectionHeading } from "@/app/components/section-heading";

const metrics = [
  { stat: "120+", label: "Campaigns managed" },
  { stat: "10k+", label: "Leads generated" },
  { stat: "7 figures", label: "Revenue influenced" }
];

const testimonials = [
  {
    quote:
      "Before this, we were boosting posts and hoping. Now our lead flow is more consistent and our numbers finally make sense.",
    name: "Client Name Placeholder",
    role: "Education business"
  },
  {
    quote:
      "The biggest difference was the clarity. We stopped guessing, fixed the funnel, and started getting higher-quality leads.",
    name: "Client Name Placeholder",
    role: "Service business"
  }
];

export function SocialProofSection() {
  return (
    <section id="proof" className="section-shell">
      <Container>
        <SectionHeading
          eyebrow="Social Proof"
          title="Trust is built with evidence, not just claims."
          description="This section is designed to hold real case studies, result screenshots, and proof assets. Placeholder blocks are included so you can swap in live client data quickly."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-5">
            {metrics.map((metric) => (
              <div key={metric.label} className="card-soft rounded-3xl p-6">
                <p className="text-4xl font-semibold text-slate-950">{metric.stat}</p>
                <p className="mt-2 text-sm text-slate-600">{metric.label}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="card-soft min-h-52 rounded-3xl p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Case study placeholder
                </p>
                <p className="mt-6 text-lg font-semibold text-slate-950">
                  ROAS screenshot or lead dashboard
                </p>
                <p className="mt-3 text-sm text-slate-600">
                  Replace this with a cropped results image, brief context, and a
                  clear performance takeaway.
                </p>
              </div>
              <div className="card-soft min-h-52 rounded-3xl p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Results placeholder
                </p>
                <p className="mt-6 text-lg font-semibold text-slate-950">
                  Leads, revenue, or cost-per-result summary
                </p>
                <p className="mt-3 text-sm text-slate-600">
                  Swap in real numbers here to strengthen authority and reduce
                  buying resistance.
                </p>
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {testimonials.map((testimonial) => (
                <blockquote
                  key={testimonial.role}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <p className="text-base leading-7 text-slate-700">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <footer className="mt-5">
                    <p className="font-semibold text-slate-950">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
