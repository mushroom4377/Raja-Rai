"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type FormValues = {
  fullName: string;
  email: string;
  whatsapp: string;
  businessName: string;
  website: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  fullName: "",
  email: "",
  whatsapp: "",
  businessName: "",
  website: "",
  message: "",
};

function validate(values: FormValues) {
  const errors: FormErrors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!values.fullName.trim()) {
    errors.fullName = "Full Name is required.";
  }

  if (!values.email.trim()) {
    errors.email = "Active Email is required.";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.whatsapp.trim()) {
    errors.whatsapp = "WhatsApp Number is required.";
  }

  if (!values.businessName.trim()) {
    errors.businessName = "Business Name is required.";
  }

  return errors;
}

export default function CTAForm() {
  const router = useRouter();
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateValue(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    window.setTimeout(() => {
      router.push("/thank-you");
    }, 500);
  }

  return (
    <section
      id="consultation-form"
      className="bg-white px-5 py-16 sm:px-8 lg:px-10"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b88a44]">
            Book Your Free Call
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#121212] sm:text-5xl">
            1:1 Consultation
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#5d5b55]">
            Customized Strategy for Your Business
          </p>
          <div className="mt-8 rounded-[8px] border border-[#ded8c9] bg-[#fbfaf6] p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#b88a44]">
              Process of This Consultation
            </p>
            <div className="mt-5 space-y-4">
              <ProcessStep
                step="Step 1"
                text="You share your business and current problem"
              />
              <ProcessStep step="Step 2" text="I analyze what’s not working" />
              <ProcessStep
                step="Step 3"
                text="You get a clear, customized strategy to get customers"
              />
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-[8px] border border-[#ded8c9] bg-[#f8f7f2] p-5 shadow-[0_24px_70px_rgba(18,18,18,0.08)] sm:p-7"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              id="fullName"
              label="Full Name"
              placeholder="Enter your full name"
              value={values.fullName}
              error={errors.fullName}
              required
              onChange={(value) => updateValue("fullName", value)}
            />
            <Field
              id="email"
              label="Active Email"
              placeholder="Enter your active email"
              inputMode="email"
              value={values.email}
              error={errors.email}
              required
              onChange={(value) => updateValue("email", value)}
            />
            <Field
              id="whatsapp"
              label="WhatsApp Number"
              placeholder="Enter your WhatsApp number"
              type="tel"
              value={values.whatsapp}
              error={errors.whatsapp}
              required
              onChange={(value) => updateValue("whatsapp", value)}
            />
            <Field
              id="businessName"
              label="Business Name"
              placeholder="Enter your business name"
              value={values.businessName}
              error={errors.businessName}
              required
              onChange={(value) => updateValue("businessName", value)}
            />
          </div>

          <div className="mt-5 space-y-5">
            <Field
              id="website"
              label="Website / Facebook URL"
              placeholder="Paste your website or Facebook URL"
              value={values.website}
              error={errors.website}
              onChange={(value) => updateValue("website", value)}
            />

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-bold text-[#22201d]"
              >
                Anything you want to say
              </label>
              <textarea
                id="message"
                value={values.message}
                onChange={(event) => updateValue("message", event.target.value)}
                placeholder="Tell me anything important about your business"
                rows={5}
                className="w-full resize-none rounded-[8px] border border-[#d4cdbd] bg-white px-4 py-3 text-base text-[#121212] outline-none transition placeholder:text-[#8b877d] focus:border-[#b88a44] focus:ring-4 focus:ring-[#b88a44]/15"
              />
            </div>
          </div>

          <p className="mt-5 text-sm font-medium text-[#5d5b55]">
            We respect your privacy. No spam.
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-5 inline-flex h-14 w-full items-center justify-center rounded-[8px] bg-[#0b0b0b] px-7 text-base font-bold text-white shadow-[0_18px_40px_rgba(18,18,18,0.18)] transition hover:-translate-y-0.5 hover:bg-[#242424] focus:outline-none focus:ring-4 focus:ring-[#b88a44]/25 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Booking..." : "Book Free Consultation"}
          </button>
        </form>
      </div>
    </section>
  );
}

function ProcessStep({ step, text }: { step: string; text: string }) {
  return (
    <div className="flex gap-4">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0b0b0b] text-xs font-bold text-white">
        {step.replace("Step ", "")}
      </span>
      <div>
        <strong className="block text-sm text-[#121212]">{step}</strong>
        <p className="mt-1 text-sm leading-6 text-[#5d5b55]">{text}</p>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  placeholder,
  value,
  error,
  onChange,
  type = "text",
  inputMode,
  required = false,
}: {
  id: keyof FormValues;
  label: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
  inputMode?: "email" | "tel" | "text" | "url";
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-bold text-[#22201d]">
        {label}
        {required ? <span className="text-[#b88a44]"> *</span> : null}
      </label>
      <input
        id={id}
        type={type}
        inputMode={inputMode}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="h-12 w-full rounded-[8px] border border-[#d4cdbd] bg-white px-4 text-base text-[#121212] outline-none transition placeholder:text-[#8b877d] focus:border-[#b88a44] focus:ring-4 focus:ring-[#b88a44]/15"
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm font-medium text-[#9f2d20]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
