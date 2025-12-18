import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import Container from "@/components/layout/container"
import CaseCard from "@/components/features/case-card"
import { cases } from "@/lib/data/cases"
import { locales } from '@/i18n/request'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'cases' })

  return {
    title: `${t('pageTitle')} | Optima AI`,
    description: t('pageSubtitle'),
  }
}

export default async function CasesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'cases' })

  return (
    <div className="py-20">
      <Container>
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('pageTitle')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('pageSubtitle')}
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((caseItem) => (
            <CaseCard key={caseItem.id} case={caseItem} />
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            {t('contactCTA')}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="text-primary hover:underline"
          >
            {t('contactLink')}
          </Link>
        </div>
      </Container>
    </div>
  )
}
