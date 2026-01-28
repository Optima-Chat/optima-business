"use client"

import Image from "next/image"
import { useTranslations } from 'next-intl'
import Container from "@/components/layout/container"
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

        <div className="space-y-20">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-5">
                  {item.description}
                </p>

                <div className="space-y-3 mb-5">
                  {item.cases.map((caseItem) => (
                    <div
                      key={caseItem.industry}
                      className="flex items-start gap-3"
                    >
                      <span className="font-semibold text-sm text-blue-600 whitespace-nowrap shrink-0">
                        {caseItem.industry}
                      </span>
                      <span className="text-sm text-slate-600 leading-relaxed">
                        {caseItem.result}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.keywords.map((keyword) => (
                    <Badge
                      key={keyword}
                      variant="secondary"
                      className="text-xs"
                    >
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
