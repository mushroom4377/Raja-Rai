export default function Hero() {
  return <section className="gold-grid relative overflow-hidden bg-[#0B1716] px-5 pb-28 pt-20 text-center text-[#F5FFFD] sm:px-8 sm:pt-28">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(85,199,186,.22),transparent_30%),radial-gradient(circle_at_88%_18%,rgba(38,156,145,.18),transparent_30%),linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,.3))]" />
    <div className="relative mx-auto max-w-5xl">
      <p className="mb-7 inline-flex rounded-full border border-[#55C7BA]/40 bg-[#55C7BA]/10 px-4 py-2 text-xs font-bold text-[#A6F3E9] shadow-[0_10px_25px_rgba(0,0,0,.18)]">Free consultation for dental clinic owners</p>
      <h1 className="text-4xl font-semibold leading-[1.04] tracking-[-.045em] text-white sm:text-6xl lg:text-7xl">Stop Guessing Your Marketing.<br /><span className="gold-shine">Start Getting More Dental Patients.</span></h1>
      <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-[#D3EEEA] sm:text-lg">Get a free one-to-one AI marketing consultation designed to help dental clinic owners identify what&apos;s limiting patient growth and discover practical strategies to attract more qualified patients.</p>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#8AB7B1]">This consultation is for dental clinic owners who want more consistent patient appointments but feel their current marketing isn&apos;t delivering results.</p>
      <a href="#consultation-form" className="mt-9 inline-flex min-h-14 items-center justify-center rounded-full bg-[#55C7BA] px-8 font-bold text-[#0B1716] shadow-[0_15px_40px_rgba(85,199,186,.3)] transition hover:-translate-y-0.5 hover:bg-[#8AE6DB] focus:outline-none focus:ring-4 focus:ring-[#55C7BA]/40">Book Free Consultation <span className="ml-3 text-xl">→</span></a>
    </div>
  </section>;
}
