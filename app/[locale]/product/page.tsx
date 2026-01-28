import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import Image from 'next/image'
import Container from "@/components/layout/container"
import { locales } from '@/i18n/request'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'product' })

  return {
    title: `${t('title')} | Optima Pulse`,
    description: t('subtitle'),
  }
}

export default async function ProductPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'product' })

  const architectureItems = t.raw('architectureItems') as Array<{
    id: string
    icon: string
    title: string
    label: string
    description: string
    details: string[]
  }>

  const capabilities = t.raw('capabilities') as Array<{
    title: string
    description: string
  }>

  const workflowSteps = t.raw('workflowSteps') as Array<{
    step: string
    title: string
    description: string
  }>

  const industries = t.raw('industries') as Array<{
    name: string
    description: string
  }>

  return (
    <div className="py-20">
      <Container>
        {/* Page Header */}
        <div className="text-center mb-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Architecture Section */}
        <div className="mb-28">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-3">{t('architectureTitle')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t('architectureSubtitle')}</p>
          </div>

          <div className="space-y-20">
            {architectureItems.map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 w-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {item.label}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.details.map((detail) => (
                      <span
                        key={detail}
                        className="text-sm text-muted-foreground border border-slate-200 rounded-full px-3 py-1"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={600}
                      height={450}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Capabilities Section */}
        <div className="mb-28">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-3">{t('capabilitiesTitle')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t('capabilitiesSubtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {capabilities.map((cap, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-2">{cap.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Workflow Section */}
        <div className="mb-28">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-3">{t('workflowTitle')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t('workflowSubtitle')}</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-12">
            {workflowSteps.map((step) => (
              <div key={step.step} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white font-bold text-lg">
                  {step.step}
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industries Section */}
        <div className="mb-28">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-3">{t('industriesTitle')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t('industriesSubtitle')}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {industries.map((industry) => (
              <div key={industry.name}>
                <h3 className="text-lg font-semibold mb-1">{industry.name}</h3>
                <p className="text-sm text-muted-foreground">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">{t('ctaTitle')}</h2>
          <p className="text-muted-foreground mb-6">{t('ctaSubtitle')}</p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 shadow-lg shadow-blue-200 transition-all duration-300"
          >
            {t('ctaButton')}
          </Link>
        </div>
      </Container>
    </div>
  )
}
