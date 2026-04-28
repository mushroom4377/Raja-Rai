import { Container } from "@/app/components/container";
import { SectionHeading } from "@/app/components/section-heading";

const faqs = [
  {
    question: "What if I lose money again?",
    answer:
      "That fear is valid. The process is built around strategy, tracking, and controlled testing so decisions are guided by data instead of blind spending."
  },
  {
    question: "I tried ads before. Why would this be different?",
    answer:
      "Most failed campaigns were never backed by a complete system. The difference here is the focus on audience, creative, funnel, and optimization together."
  },
  {
    question: "Is this expensive?",
    answer:
      "Wasted ad spend is usually more expensive than the right strategy. The goal is to improve efficiency, reduce leakage, and create clearer returns over time."
  },
  {
    question: "Can I do it myself?",
    answer:
      "You can, but most business owners get stuck because the feedback loop is fragmented. A specialist helps you avoid slow learning and expensive mistakes."
  },
  {
    question: "How do I trust you?",
    answer:
      "Trust should come from transparency, process, and proof. This page includes room for case studies, metrics, and testimonials so authority can be shown clearly."
  }
];

export function FaqSection() {
  return (
    <section id="faq" className="section-shell">
      <Container>
        <SectionHeading
          eyebrow="Objections"
          title="Questions people ask before they stop guessing and commit."
          description="Good buyers want clarity before they move. This FAQ answers the most common concerns in simple, conversational language."
        />
        <div className="mt-10 grid gap-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-slate-950">
                {faq.question}
                <span className="text-2xl text-slate-400 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
