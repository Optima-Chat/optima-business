import Hero from "@/components/sections/hero"
import CoreCapabilities from "@/components/sections/core-capabilities"
import BusinessScope from "@/components/sections/business-scope"
import FeaturedCases from "@/components/sections/featured-cases"
import CTASection from "@/components/sections/cta-section"
import { locales } from '@/i18n/request'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

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
