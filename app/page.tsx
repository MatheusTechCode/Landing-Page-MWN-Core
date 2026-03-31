import { Navigation } from "@/components/landing/navigation"
import { HeroSection } from "@/components/landing/hero-section"
import { ProblemSection } from "@/components/landing/problem-section"
import { SolutionSection } from "@/components/landing/solution-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { KitchenSection } from "@/components/landing/kitchen-section"
import { TimelineSection } from "@/components/landing/timeline-section"
import { BenefitsSection } from "@/components/landing/benefits-section"
import { AboutSection } from "@/components/landing/about-section"
import { PricingSection } from "@/components/landing/pricing-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0A0E17]">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <KitchenSection />
      <TimelineSection />
      <BenefitsSection />
      <AboutSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
