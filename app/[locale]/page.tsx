import Hero from "@/components/sections/hero"
import CoreCapabilities from "@/components/sections/core-capabilities"
import BusinessScope from "@/components/sections/business-scope"
import FeaturedCases from "@/components/sections/featured-cases"
import CTASection from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <>
      <Hero />
      <CoreCapabilities />
      <BusinessScope />
      <FeaturedCases />
      <CTASection />
    </>
  )
}
