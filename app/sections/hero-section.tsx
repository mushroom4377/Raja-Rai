import { Button } from "@/app/components/button";
import { Container } from "@/app/components/container";

const proofPoints = [
  "4.9/5 client feedback",
  "Performance-led strategy",
  "Built for scalable growth"
];

const stats = [
  { value: "120+", label: "Campaigns managed" },
  { value: "10k+", label: "Qualified leads generated" },
  { value: "3x", label: "Average funnel clarity improvement" }
];

export function HeroSection() {
  return (
    <section id="top" className="section-shell relative overflow-hidden pt-10 sm:pt-14">
      <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(2,132,199,0.14),transparent_35%),radial-gradient(circle_at_right,rgba(15,118,110,0.14),transparent_30%)]" />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex rounded-full border border-teal-100 bg-white/85 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
              Trusted by growth-focused businesses that want predictable results
            </div>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Get Consistent Sales From Ads Without Wasting Money Again
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Finally turn your ads into a predictable system that brings you daily
              leads and customers even if you&apos;ve tried and failed before.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="tel:+9779822530525">Book Free Strategy Call</Button>
              <Button
                href="https://wa.me/9779822530525"
                variant="secondary"
              >
                Message on WhatsApp
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-500">
              {proofPoints.map((point) => (
                <span
                  key={point}
                  className="rounded-full border border-slate-200 bg-white px-3 py-2"
                >
                  {point}
                </span>
              ))}
            </div>
          </div>
          <div className="card-soft rounded-[2rem] p-6 sm:p-8">
            <div className="rounded-[1.5rem] border border-white/70 bg-slate-950 p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
                Predictable growth dashboard
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <p className="text-3xl font-semibold">{stat.value}</p>
                    <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-gradient-to-r from-teal-500/15 to-sky-400/15 p-5">
                <p className="text-sm text-slate-200">
                  No random boosting. No blind scaling. Just a system designed to
                  turn ad spend into measurable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
