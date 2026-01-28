"use client"

import Image from "next/image"
import { useTranslations } from 'next-intl'
import Container from "@/components/layout/container"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function ProductArchitecture() {
  const t = useTranslations('architecture')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const items = t.raw('items') as Array<{
    id: string
    icon: string
    title: string
    label: string
    description: string
    details: string[]
  }>

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <Card className="relative h-full group hover:border-blue-400 bg-gradient-to-br from-white via-white to-slate-50 border-slate-200 shadow-md hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-300" />

                <div className="relative w-full aspect-[2/1] overflow-hidden">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <Badge variant="secondary" className="text-xs bg-blue-50/90 text-blue-700 border-blue-200 backdrop-blur-sm">
                      {item.label}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="relative pt-3">
                  <CardTitle className="text-xl mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed mb-4">
                    {item.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {item.details.map((detail) => (
                      <Badge
                        key={detail}
                        variant="outline"
                        className="text-xs text-muted-foreground border-slate-200 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors cursor-default"
                      >
                        {detail}
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
