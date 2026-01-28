import Hero from "@/components/sections/hero"
import ProductArchitecture from "@/components/sections/product-architecture"
import UseCases from "@/components/sections/use-cases"
import ConversationDemo from "@/components/sections/conversation-demo"
import Differentiation from "@/components/sections/differentiation"
import CTASection from "@/components/sections/cta-section"
import { locales } from '@/i18n/request'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  // 等待 params 确保 locale 正确传递
  await params

  return (
    <>
      <Hero />
      <ProductArchitecture />
      <UseCases />
      <ConversationDemo />
      <Differentiation />
      <CTASection />
    </>
  )
}
