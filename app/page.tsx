import { FloatingWhatsApp } from "@/app/components/floating-whatsapp";
import { StickyHeader } from "@/app/components/sticky-header";
import { BenefitsSection } from "@/app/sections/benefits-section";
import { BonusesSection } from "@/app/sections/bonuses-section";
import { FaqSection } from "@/app/sections/faq-section";
import { FinalCtaSection } from "@/app/sections/final-cta-section";
import { HeroSection } from "@/app/sections/hero-section";
import { ProblemSection } from "@/app/sections/problem-section";
import { ProcessSection } from "@/app/sections/process-section";
import { RiskSection } from "@/app/sections/risk-section";
import { ServicesSection } from "@/app/sections/services-section";
import { SocialProofSection } from "@/app/sections/social-proof-section";
import { SolutionSection } from "@/app/sections/solution-section";
import { UrgencySection } from "@/app/sections/urgency-section";
import { WhyAdsFailSection } from "@/app/sections/why-ads-fail-section";

export default function HomePage() {
  return (
    <>
      <StickyHeader />
      <main className="relative overflow-x-clip bg-[var(--color-page)] text-[var(--color-ink)]">
        <HeroSection />
        <ProblemSection />
        <WhyAdsFailSection />
        <SolutionSection />
        <ProcessSection />
        <BenefitsSection />
        <ServicesSection />
        <BonusesSection />
        <SocialProofSection />
        <FaqSection />
        <RiskSection />
        <UrgencySection />
        <FinalCtaSection />
      </main>
      <FloatingWhatsApp />
    </>
  );
}
