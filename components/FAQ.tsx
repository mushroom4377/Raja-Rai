"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is the consultation really free?",
    answer:
      "Yes. The consultation is free. The goal is to understand your business and give you clear direction before you spend more money on marketing.",
  },
  {
    question: "Who is this consultation for?",
    answer:
      "It is for Nepal-based business owners who want more leads, customers, and sales from Facebook, Instagram, ads, or online marketing.",
  },
  {
    question: "What will I get inside the consultation call?",
    answer:
      "You will get clarity on what is not working, what needs to improve, and a simple digital marketing plan made around your business.",
  },
  {
    question: "How long will the consultation call be?",
    answer:
      "The call is planned for around 1 hour so there is enough time to understand your business and discuss the next steps properly.",
  },
  {
    question: "Do I need to have a website before booking the call?",
    answer:
      "No. If you do not have a website, we can still look at your Facebook page, Instagram page, current offers, and customer journey.",
  },
  {
    question: "What happens after I fill up the form?",
    answer:
      "You will be redirected to the thank-you page, then you can follow the next steps and chat on WhatsApp if you need help.",
  },
  {
    question: "Will you help me create a marketing plan for my business?",
    answer:
      "Yes. The purpose of the call is to give you a simple plan you can start using to attract better leads and customers.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#0c0c0b] px-5 py-18 text-[#f8f3e4] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
            Common questions
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
            Everything you need to know before booking.
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="rounded-[8px] border border-[var(--line)] bg-[var(--panel)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-[#f8f3e4]"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--line)] text-[var(--brand)]">
                    {isOpen ? "-" : "+"}
                  </span>
                </button>
                {isOpen ? (
                  <p className="border-t border-[var(--line)] px-5 py-4 text-sm leading-7 text-[var(--muted)]">
                    {faq.answer}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
