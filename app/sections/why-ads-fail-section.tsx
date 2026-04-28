import { Container } from "@/app/components/container";
import { SectionHeading } from "@/app/components/section-heading";

const reasons = [
  {
    title: "No strategy",
    copy: "Campaigns launch before the offer, audience, and message are aligned."
  },
  {
    title: "Poor targeting",
    copy: "The wrong people click, inflate costs, and never become real buyers."
  },
  {
    title: "Weak creatives",
    copy: "Ads look fine but fail to stop attention or build enough desire to act."
  },
  {
    title: "No funnel",
    copy: "Traffic lands in a weak journey that leaks trust and kills conversions."
  },
  {
    title: "No tracking",
    copy: "Without clean data, decisions become guesses and wasted spend compounds."
  }
];

export function WhyAdsFailSection() {
  return (
    <section id="why-ads-fail" className="section-shell">
      <Container>
        <SectionHeading
          eyebrow="Why Ads Fail"
          title="The ad is rarely the only problem."
          description="Bad results usually come from a broken growth system, not just a bad campaign. Fixing the whole path is what makes performance sustainable."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {reasons.map((reason, index) => (
            <article key={reason.title} className="card-soft rounded-3xl p-6">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
                0{index + 1}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-950">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{reason.copy}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
