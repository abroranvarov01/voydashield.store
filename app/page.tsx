import { MatrixBackground } from "@/components/matrix-background"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { StatsSection } from "@/components/stats-section"
import { SolutionsPreview } from "@/components/solutions-preview"
import { ProductsShowcase } from "@/components/products-showcase"
import { TechnologyStack } from "@/components/technology-stack"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PartnersSection } from "@/components/partners-section"
import { CertificationsSection } from "@/components/certifications-section"
import { ResourcesPreview } from "@/components/resources-preview"
import { DemoSection } from "@/components/demo-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <MatrixBackground />
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <SolutionsPreview />
      <ProductsShowcase />
      <TechnologyStack />
      <TestimonialsSection />
      <PartnersSection />
      <CertificationsSection />
      <ResourcesPreview />
      <DemoSection />
      <CTASection />
      <Footer />
    </main>
  )
}
