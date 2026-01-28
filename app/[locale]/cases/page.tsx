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
  const t = await getTranslations({ locale, namespace: 'cases' })

  return {
    title: `${t('pageTitle')} | Optima Pulse`,
    description: t('pageSubtitle'),
  }
}

interface CaseItem {
  id: string
  title: string
  industry: string
  description: string
  techStack: string[]
  achievements: string[]
}

export default async function CasesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'cases' })

  const cases = t.raw('items') as CaseItem[]

  return (
    <div className="py-20">
      <Container>
        {/* Page Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('pageTitle')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('pageSubtitle')}
          </p>
        </div>

        {/* Cases List — Alternating Layout */}
        <div className="space-y-24">
          {cases.map((caseItem, index) => (
            <div
              key={caseItem.id}
              className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className="flex-1 w-full">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={`/images/cases/${caseItem.id}.png`}
                    alt={caseItem.title}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 w-full">
                <span className="text-sm font-medium text-blue-600 mb-2 block">
                  {caseItem.industry}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  {caseItem.title}
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {caseItem.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {caseItem.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-muted-foreground border border-slate-200 rounded-full px-3 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Achievements */}
                <ul className="space-y-2">
                  {caseItem.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5 flex-shrink-0">&#10003;</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-24 text-center">
          <p className="text-muted-foreground mb-4">
            {t('contactCTA')}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 shadow-lg shadow-blue-200 transition-all duration-300"
          >
            {t('contactLink')}
          </Link>
        </div>
      </Container>
    </div>
  )
}
