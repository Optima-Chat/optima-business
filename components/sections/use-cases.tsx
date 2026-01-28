"use client"

import { useTranslations } from 'next-intl'
import Container from "@/components/layout/container"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface CaseItem {
  industry: string
  result: string
}

interface UseCaseItem {
  id: string
  icon: string
  title: string
  description: string
  cases: CaseItem[]
  keywords: string[]
}

export default function UseCases() {
  const t = useTranslations('useCases')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const items = t.raw('items') as UseCaseItem[]

  return (
    <section className="py-20 md:py-32 bg-gray-50" ref={ref}>
      <Container>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
            >
              <Card className="h-full group hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-300" />

                <CardHeader className="relative">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <CardTitle className="text-xl mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-base mb-4">
                    {item.description}
                  </CardDescription>

                  {/* Real enterprise cases */}
                  <div className="space-y-2.5 mb-4">
                    {item.cases.map((caseItem) => (
                      <div
                        key={caseItem.industry}
                        className="bg-slate-50 border border-slate-200 rounded-lg p-3 hover:bg-blue-50/50 hover:border-blue-200 transition-colors"
                      >
                        <div className="flex items-start gap-2">
                          <span className="font-semibold text-sm text-slate-800 whitespace-nowrap shrink-0">
                            {caseItem.industry}
                          </span>
                          <span className="text-sm text-slate-600 leading-relaxed">
                            {caseItem.result}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.keywords.map((keyword) => (
                      <Badge
                        key={keyword}
                        variant="secondary"
                        className="text-xs hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-default"
                      >
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
