import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
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

  const skills = t.raw('skills') as Array<{ name: string; input: string; output: string }>
  const dataSources = t.raw('dataSources') as Array<{ name: string; priority: string }>
  const pricingPlans = t.raw('pricingPlans') as Array<{ name: string; target: string; features: string[] }>

  return (
    <div className="py-20">
      <Container>
        {/* Page Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Architecture Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-2">{t('architectureTitle')}</h2>
          <p className="text-center text-muted-foreground mb-10">{t('architectureSubtitle')}</p>

          <div className="max-w-4xl mx-auto bg-slate-50 rounded-2xl border border-slate-200 p-8 font-mono text-sm leading-relaxed overflow-x-auto">
            <pre className="text-slate-700 whitespace-pre">{`┌─────────────────────────────────────────────────┐
│  对话层（用户界面）                                │
│  自然语言输入 → Agent 编排 → 结构化回答 + 建议     │
├─────────────────────────────────────────────────┤
│  Agent 层（编排与推理）                            │
│  理解意图 → 选择工具 → 调用数据 → 结合知识 → 回答  │
├──────────────────┬──────────────────────────────┤
│  Skills 层       │  CLI 工具层                    │
│  （领域知识）     │  （数据获取）                   │
│                  │                               │
│  · 库存管理策略   │  · 电商平台 API                │
│  · 定价建议逻辑   │  · 广告平台 API                │
│  · 退货原因分析   │  · ERP/财务系统                │
│  · 补货时机判断   │  · 物流追踪 API                │
│  · 广告ROI评估   │  · 数据库直连                  │
├──────────────────┴──────────────────────────────┤
│  数据源                                          │
│  Shopify | Amazon | Google Ads | Meta Ads        │
│  Stripe | QuickBooks | 物流API | 自有数据库        │
└─────────────────────────────────────────────────┘`}</pre>
          </div>
        </div>

        {/* First Vertical */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-2">{t('verticalTitle')}</h2>
          <p className="text-center text-muted-foreground mb-10">{t('verticalSubtitle')}</p>

          {/* Skills Table */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-center">{t('skillsTitle')}</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold">Skill</th>
                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold">Input</th>
                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold">Output</th>
                  </tr>
                </thead>
                <tbody>
                  {skills.map((skill) => (
                    <tr key={skill.name} className="hover:bg-slate-50 transition-colors">
                      <td className="border border-slate-200 px-4 py-3 text-sm font-medium">{skill.name}</td>
                      <td className="border border-slate-200 px-4 py-3 text-sm text-muted-foreground">{skill.input}</td>
                      <td className="border border-slate-200 px-4 py-3 text-sm text-muted-foreground">{skill.output}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Data Sources */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-center">{t('dataSourcesTitle')}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {dataSources.map((ds) => (
                <div key={ds.name} className="bg-white border border-slate-200 rounded-lg p-4 text-center hover:border-blue-300 hover:shadow-md transition-all">
                  <p className="text-sm font-medium">{ds.name}</p>
                  <span className={`text-xs mt-1 inline-block px-2 py-0.5 rounded-full ${
                    ds.priority === 'P0' ? 'bg-blue-100 text-blue-700' :
                    ds.priority === 'P1' ? 'bg-cyan-100 text-cyan-700' :
                    'bg-slate-100 text-slate-600'
                  }`}>
                    {ds.priority}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">{t('pricingTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`bg-white border rounded-2xl p-6 transition-all hover:shadow-lg ${
                  index === 1 ? 'border-blue-400 shadow-md ring-2 ring-blue-100' : 'border-slate-200'
                }`}
              >
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.target}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <span className="text-green-500 mt-0.5 flex-shrink-0">&#10003;</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
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
