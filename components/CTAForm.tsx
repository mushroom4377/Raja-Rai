"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type Errors = Record<string, string>;
const fields = [
  ["name", "Full Name", "Your full name", "text", true],
  ["email", "Active Email", "you@clinic.com", "email", true],
  ["whatsapp", "WhatsApp Number", "Your WhatsApp number", "tel", true],
  ["business", "Business Name", "Your dental clinic name", "text", true],
  ["url", "Website or Facebook URL", "https://", "url", false],
] as const;

export default function CTAForm() {
  const router = useRouter(); const [errors, setErrors] = useState<Errors>({}); const [loading, setLoading] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); const data = new FormData(event.currentTarget); const next: Errors = {};
    fields.forEach(([key,label,,,required]) => { const value=String(data.get(key) ?? "").trim(); if(required && !value) next[key]=`${label} is required.`; });
    const email=String(data.get("email") ?? ""); if(email && !/^\S+@\S+\.\S+$/.test(email)) next.email="Enter a valid email address.";
    setErrors(next); if(Object.keys(next).length) return; setLoading(true); setTimeout(()=>router.push("/thank-you"), 450);
  }
  return <section id="consultation-form" className="bg-white px-5 py-20 text-[#142523] sm:px-8"><div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#25857B]">Book the call</p><h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">One-to-One<br />Consultation</h2><p className="mt-6 text-lg leading-8 text-[#48615d]">A focused consultation created specifically for your dental clinic.</p><div className="mt-7 border-l border-[#39A89D] pl-5"><p className="font-semibold">Customized Strategy for Your Business</p><p className="mt-2 leading-7 text-[#627774]">Get recommendations based on your clinic&apos;s goals, current marketing, and growth opportunities.</p></div></div><form noValidate onSubmit={submit} className="rounded-3xl border border-[#c9e4df] bg-[#F3FBFA] p-6 text-[#142523] shadow-[0_25px_60px_rgba(20,37,35,.08)] sm:p-8"><div className="grid gap-5 sm:grid-cols-2">{fields.map(([key,label,placeholder,type,required])=><label key={key} className={key==="url"?"sm:col-span-2":""}><span className="mb-2 block text-sm font-bold">{label}{required && <span className="ml-1 text-[#25857B]">*</span>}</span><input name={key} type={type} placeholder={placeholder} aria-invalid={Boolean(errors[key])} className="min-h-14 w-full rounded-xl border border-[#c9e4df] bg-white px-4 outline-none transition placeholder:text-[#829490] focus:border-[#39A89D] focus:ring-4 focus:ring-[#39A89D]/15" />{errors[key] && <span className="mt-2 block text-sm text-[#b23020]">{errors[key]}</span>}</label>)}</div><label className="mt-5 block"><span className="mb-2 block text-sm font-bold">Anything You Want to Say</span><textarea name="message" placeholder="Tell us a little about your clinic or goals" rows={4} className="w-full rounded-xl border border-[#c9e4df] bg-white p-4 outline-none transition placeholder:text-[#829490] focus:border-[#39A89D] focus:ring-4 focus:ring-[#39A89D]/15" /></label><button disabled={loading} className="mt-6 min-h-14 w-full rounded-full bg-[#39A89D] px-6 font-bold text-[#0B1716] transition hover:bg-[#62C9BF] disabled:opacity-60">{loading ? "Booking your consultation..." : "Book My Free Consultation"} <span className="ml-2 text-lg">→</span></button><p className="mt-4 text-center text-sm text-[#627774]">We respect your privacy. No spam.</p></form></div></section>;
}
