"use client";

import Script from "next/script";

export default function CTAForm() {
  return (
    <section
      id="consultation-form"
      className="bg-[#070707] px-5 py-20 text-[#f8f3e4] sm:px-8 lg:px-10"
    >
      <link
        rel="preload"
        href="https://assets.flodesk.com/flodesk-sans.css"
        as="style"
      />
      <link rel="stylesheet" href="https://assets.flodesk.com/flodesk-sans.css" />

      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
            Book Your Free Call
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-5xl">
            1:1 Consultation
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
            Customized Strategy for Your Business
          </p>
          <div className="mt-8 rounded-[8px] border border-[var(--line)] bg-[var(--panel)] p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--brand)]">
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

        <div className="rounded-[8px] border border-[var(--line)] bg-[var(--panel-soft)] p-5 shadow-[0_28px_80px_rgba(0,0,0,0.35)] sm:p-7">
          <div
            className="ff-6a1948234432f64a5ebc660a"
            data-ff-el="root"
            data-ff-version="3"
            data-ff-type="inline"
            data-ff-name="inlineNoImage"
            data-ff-stage="default"
          >
            <div
              data-ff-el="config"
              data-ff-config="eyJ0cmlnZ2VyIjp7Im1vZGUiOiJpbW1lZGlhdGVseSIsInZhbHVlIjowfSwib25TdWNjZXNzIjp7Im1vZGUiOiJyZWRpcmVjdCIsIm1lc3NhZ2UiOiI8ZGl2IGRhdGEtcGFyYWdyYXBoPVwidHJ1ZVwiPkdvdCBpdCEgQ2hlY2sgeW91ciBpbmJveCBmb3IgYW4gZW1haWwgdG8gY29uZmlybSB5b3VyIHN1YnNjcmlwdGlvbi48L2Rpdj4iLCJyZWRpcmVjdFVybCI6Imh0dHBzOi8vZGlnaXRhbC5tYXJrZXRpbmd3aXRocmFqYS5jb20vdGhhbmtzIn0sImNvaSI6ZmFsc2UsInNob3dGb3JSZXR1cm5WaXNpdG9ycyI6dHJ1ZSwibm90aWZpY2F0aW9uIjpmYWxzZSwiZ2RwciI6eyJhY2NlcHRzTWFya2V0aW5nIjpmYWxzZSwicHJpdmFjeVBvbGljeSI6eyJlbmFibGVkIjpmYWxzZSwibWFuZGF0b3J5IjpmYWxzZX19LCJ0cmFja2luZ0NvbmZpZyI6eyJtZXRhUGl4ZWxJZCI6IiIsImNvb2tpZUJhbm5lckVuYWJsZWQiOmZhbHNlLCJnb29nbGVBbmFseXRpY3NJZCI6IiJ9fQ=="
              style={{ display: "none" }}
            />
            <div className="ff-6a1948234432f64a5ebc660a__container">
              <div className="ff-6a1948234432f64a5ebc660a__wrapper">
                <form
                  className="ff-6a1948234432f64a5ebc660a__form"
                  action="https://form.flodesk.com/forms/6a1948234432f64a5ebc660a/submit"
                  method="post"
                  data-ff-el="form"
                >
                  <div className="ff-6a1948234432f64a5ebc660a__title">
                    <div style={{ wordBreak: "break-word" }}>
                      <div data-paragraph="true">
                        Free 1:1 Consultations Call
                      </div>
                    </div>
                  </div>
                  <div className="ff-6a1948234432f64a5ebc660a__subtitle">
                    <div style={{ wordBreak: "break-word" }}>
                      <div data-paragraph="true">
                        Book a free Digital Marketing Consultation Call with me
                        and get a &nbsp; customized digital marketing strategy
                        plan for your Business!
                      </div>
                    </div>
                  </div>
                  <div
                    className="ff-6a1948234432f64a5ebc660a__content fd-form-content"
                    data-ff-el="content"
                  >
                    <div
                      className="ff-6a1948234432f64a5ebc660a__fields"
                      data-ff-el="fields"
                    >
                      <FlodeskField
                        id="ff-6a1948234432f64a5ebc660a-firstName"
                        name="firstName"
                        placeholder="Enter your full name"
                        dataTab="firstName:email:fields.whatsapp"
                        label="Full Name"
                        required
                      />
                      <FlodeskField
                        id="ff-6a1948234432f64a5ebc660a-email"
                        name="email"
                        placeholder="Enter your active email"
                        dataTab="email::firstName"
                        label="Active Email"
                        required
                      />
                      <FlodeskField
                        id="ff-6a1948234432f64a5ebc660a-rUivC8QMzV"
                        name="fields.whatsapp"
                        placeholder="Enter your WhatsApp number"
                        dataTab="fields.whatsapp:firstName:fields.businessName"
                        label="WhatsApp Number"
                        required
                      />
                      <FlodeskField
                        id="ff-6a1948234432f64a5ebc660a-ubGsv8taKH"
                        name="fields.businessName"
                        placeholder="Enter your business name"
                        dataTab="fields.businessName:fields.whatsapp:fields.websiteFacebookLink"
                        label="Business Name"
                        required
                      />
                      <FlodeskField
                        id="ff-6a1948234432f64a5ebc660a-9GQt5Mj9rR"
                        name="fields.websiteFacebookLink"
                        placeholder="Paste your website or Facebook URL"
                        dataTab="fields.websiteFacebookLink:fields.businessName:submit"
                        label="Website / Facebook URL"
                        required
                      />
                      <input
                        type="text"
                        maxLength={255}
                        name="confirm_email_address"
                        style={{ display: "none" }}
                      />
                    </div>

                    <div
                      className="ff-6a1948234432f64a5ebc660a__footer"
                      data-ff-el="footer"
                    >
                      <button
                        type="submit"
                        className="ff-6a1948234432f64a5ebc660a__button fd-btn"
                        data-ff-el="submit"
                        data-ff-tab="submit"
                      >
                        <div>
                          <span data-draw-element="editable">
                            Book Free Consultation
                          </span>
                        </div>
                      </button>
                      <p className="mt-4 text-sm font-medium text-[var(--muted)]">
                        We respect your privacy. No spam.
                      </p>
                    </div>
                  </div>
                  <div
                    className="ff-6a1948234432f64a5ebc660a__success fd-form-success"
                    data-ff-el="success"
                  >
                    <div className="ff-6a1948234432f64a5ebc660a__success-message">
                      <div>
                        <div>
                          <div data-paragraph="true">
                            Got it! Check your inbox for an email to confirm
                            your subscription.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="ff-6a1948234432f64a5ebc660a__error fd-form-error"
                    data-ff-el="error"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Script id="flodesk-universal" strategy="afterInteractive">
        {`(function(w, d, t, h, s, n) {
    w.FlodeskObject = n;
    var fn = function() {
      (w[n].q = w[n].q || []).push(arguments);
    };
    w[n] = w[n] || fn;
    var f = d.getElementsByTagName(t)[0];
    var v = '?v=' + Math.floor(new Date().getTime() / (120 * 1000)) * 60;
    var sm = d.createElement(t);
    sm.async = true;
    sm.type = 'module';
    sm.src = h + s + '.mjs' + v;
    f.parentNode.insertBefore(sm, f);
    var sn = d.createElement(t);
    sn.async = true;
    sn.noModule = true;
    sn.src = h + s + '.js' + v;
    f.parentNode.insertBefore(sn, f);
  })(window, document, 'script', 'https://assets.flodesk.com', '/universal', 'fd');`}
      </Script>
      <Script id="flodesk-form-handle" strategy="afterInteractive">
        {`window.fd('form:handle', {
    formId: '6a1948234432f64a5ebc660a',
    rootEl: '.ff-6a1948234432f64a5ebc660a',
  });`}
      </Script>
    </section>
  );
}

function ProcessStep({ step, text }: { step: string; text: string }) {
  return (
    <div className="flex gap-4">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--brand)] text-xs font-bold text-[#070707]">
        {step.replace("Step ", "")}
      </span>
      <div>
        <strong className="block text-sm text-white">{step}</strong>
        <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{text}</p>
      </div>
    </div>
  );
}

function FlodeskField({
  id,
  name,
  placeholder,
  dataTab,
  label,
  required = false,
}: {
  id: string;
  name: string;
  placeholder: string;
  dataTab: string;
  label: string;
  required?: boolean;
}) {
  return (
    <div className="ff-6a1948234432f64a5ebc660a__field fd-form-group">
      <input
        id={id}
        className="ff-6a1948234432f64a5ebc660a__control fd-form-control"
        type="text"
        maxLength={255}
        name={name}
        placeholder={placeholder}
        data-ff-tab={dataTab}
        required={required}
      />
      <label
        htmlFor={id}
        className="ff-6a1948234432f64a5ebc660a__label fd-form-label"
      >
        <div>
          <div>{label}</div>
        </div>
      </label>
    </div>
  );
}
