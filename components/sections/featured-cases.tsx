"use client"

import Link from "next/link"
import { useTranslations, useLocale } from 'next-intl'
import Container from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import CaseCard from "@/components/features/case-card"
import { Case } from "@/types"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function FeaturedCases() {
  const t = useTranslations('cases')
  const locale = useLocale()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // 从翻译文件读取 cases 数据，显示前3个案例
  const allCases = t.raw('items') as Case[]
  const featuredCases = allCases.slice(0, 3)

  return (
    <section className="py-20 md:py-32 border-t border-border" ref={ref}>
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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredCases.map((caseItem, index) => (
            <motion.div
              key={caseItem.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <CaseCard case={caseItem} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link href={`/${locale}/cases`}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button variant="outline" size="lg" className="border-2 border-slate-300 hover:border-blue-600 hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-sm hover:shadow-md">
                {t('viewAll')}
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}
