"use client"

import Image from "next/image"
import { useTranslations } from 'next-intl'
import Container from "@/components/layout/container"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface Category {
  id: string
  title: string
  competitor: string
  items: Array<{ label: string }>
}

interface Credential {
  id: string
  icon: string
  title: string
  description: string
  stats: Array<{ value: string; label: string }>
}

export default function Differentiation() {
  const t = useTranslations('differentiation')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const categories = t.raw('categories') as Category[]
  const credentials = t.raw('credentials') as Credential[]

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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Comparison cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <Card className="h-full group hover:border-blue-400 bg-white border-slate-200 shadow-md hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-300 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-300" />

                <CardHeader className="relative">
                  <CardTitle className="text-lg font-bold text-blue-600 mb-1">
                    {cat.title}
                  </CardTitle>
                  <p className="text-xs text-muted-foreground mb-4">
                    {cat.competitor}
                  </p>

                  <ul className="space-y-3">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-500 mt-0.5 flex-shrink-0">&#10003;</span>
                        <span className="text-sm text-foreground/80 leading-relaxed">
                          {item.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Credentials */}
        <div className="space-y-16 mt-16">
          {credentials.map((cred, index) => (
            <motion.div
              key={cred.id}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.45 + index * 0.2 }}
            >
              <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={cred.icon}
                  alt={cred.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold mb-3">
                  {cred.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  {cred.description}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {cred.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-2xl font-bold text-blue-600">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {stat.label}
                      </div>
                    </div>
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
