"use client"

import Link from "next/link"
import { useTranslations, useLocale } from 'next-intl'
import Container from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function Hero() {
  const t = useTranslations('hero')
  const tNav = useTranslations('nav')
  const locale = useLocale()
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Enhanced Background with animated gradient - 商务蓝色调 */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Static gradient orbs - 使用 CSS 动画替代 JS 动画以提升性能 */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/60 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-200/60 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float-delayed" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-300/60 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float-slow" />

        {/* 添加网格背景效果 */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] opacity-20" style={{
          backgroundImage: `linear-gradient(to right, rgb(203 213 225 / 0.3) 1px, transparent 1px),
                           linear-gradient(to bottom, rgb(203 213 225 / 0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Title with enhanced gradient animation */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="gradient-text">
              {t('title')}
            </span>
          </motion.h1>

          {/* Subtitle with fade-in */}
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {t('subtitle')}
          </motion.p>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground/80 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            {t('description')}
          </motion.p>

          {/* Tech Highlights with enhanced effects - 商务蓝色系 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12">
            {[
              {
                icon: "🤖",
                title: t('agenticAI'),
                subtitle: t('agenticAISubtitle'),
                description: t('agenticAIDesc'),
                gradient: "from-blue-600 to-blue-500",
                delay: 0.4
              },
              {
                icon: "🎬",
                title: t('aiCreation'),
                subtitle: t('aiCreationSubtitle'),
                description: t('aiCreationDesc'),
                gradient: "from-cyan-600 to-blue-600",
                delay: 0.5
              },
              {
                icon: "👁️",
                title: t('discriminativeModel'),
                subtitle: t('discriminativeModelSubtitle'),
                description: t('discriminativeModelDesc'),
                gradient: "from-blue-700 to-cyan-600",
                delay: 0.6
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item.delay, ease: "easeOut" }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Card className="p-6 h-full bg-white/95 backdrop-blur-sm border-2 border-slate-200 shadow-lg hover:shadow-2xl hover:shadow-blue-100/50 hover:border-blue-300 transition-all duration-300 relative overflow-hidden group">
                  {/* 悬停光效 */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative flex flex-col h-full">
                    {/* Icon - fixed height */}
                    <div className="text-4xl mb-3 h-12 flex items-center">
                      {item.icon}
                    </div>
                    {/* Title - fixed height for alignment */}
                    <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-2 break-words leading-tight h-16 md:h-20 flex items-start`}>
                      {item.title}
                    </div>
                    {/* Subtitle - fixed height */}
                    <div className="text-sm font-semibold text-foreground h-10 flex items-start">{item.subtitle}</div>
                    {/* Description - flexible height */}
                    <div className="text-xs text-muted-foreground mt-2 flex-1">
                      {item.description}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA with enhanced buttons - 商务蓝 */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          >
            <Link href={`/${locale}/contact`}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" className="text-base px-8 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all duration-300">
                  {tNav('startConsulting')}
                </Button>
              </motion.div>
            </Link>
            <Link href={`/${locale}/cases`}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" variant="outline" className="text-base px-8 border-2 border-slate-300 hover:border-blue-600 hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-sm hover:shadow-md">
                  {t('viewCases')}
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
