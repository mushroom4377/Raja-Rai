import { Container } from "@/app/components/container";
import { SectionHeading } from "@/app/components/section-heading";

const services = [
  "Meta Ads Strategy",
  "Creative Direction",
  "Campaign Setup",
  "Targeting & Testing",
  "Funnel Guidance",
  "Tracking Setup",
  "Optimization"
];

export function ServicesSection() {
  return (
    <section className="section-shell">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="What's Included"
            title="Everything needed to make your Meta Ads work like a real growth channel."
            description="This offer is built around the parts that actually move performance, from the initial strategy to tracking and ongoing optimization."
          />
          <div className="card-soft rounded-[2rem] p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service}
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-700"
                >
                  <span className="mr-3 text-teal-600">✔</span>
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
