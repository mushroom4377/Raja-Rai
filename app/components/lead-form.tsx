const formAction = "https://formsubmit.co/mushroom4377@gmail.com";

export function LeadForm() {
  return (
    <form
      action={formAction}
      method="POST"
      className="rounded-[1.75rem] border border-white/10 bg-white/8 p-5 backdrop-blur"
    >
      <input type="hidden" name="_subject" value="New Meta Ads lead from website" />
      <input type="hidden" name="_template" value="table" />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-4">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
            Your name
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-teal-300"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="business" className="mb-2 block text-sm font-medium text-slate-200">
            Business name
          </label>
          <input
            id="business"
            name="business"
            required
            className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-teal-300"
            placeholder="Your business or brand"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-teal-300"
            placeholder="Your email address"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-200">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            required
            className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-teal-300"
            placeholder="Your phone number"
          />
        </div>
        <div>
          <label htmlFor="goal" className="mb-2 block text-sm font-medium text-slate-200">
            What do you want help with?
          </label>
          <textarea
            id="goal"
            name="goal"
            required
            rows={4}
            className="w-full resize-none rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-teal-300"
            placeholder="Tell me your current ad problem or growth goal"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-900/10 transition hover:bg-[var(--color-brand-strong)]"
        >
          Submit Form
        </button>
        <p className="text-sm leading-6 text-slate-300">
          Your details will be emailed to <span className="font-medium text-white">mushroom4377@gmail.com</span>.
        </p>
      </div>
    </form>
  );
}
