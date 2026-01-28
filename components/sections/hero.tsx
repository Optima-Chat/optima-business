"use client"

import Link from "next/link"
import Image from "next/image"
import { useTranslations, useLocale } from 'next-intl'
import Container from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function Hero() {
  const t = useTranslations('hero')
  const locale = useLocale()
  return (
    <>
      {/* Hero — Full-screen background image with dark overlay */}
      <section className="relative min-h-screen flex items-center overflow-hidden -mt-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-office.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/60 to-black/30" />
        </div>

        <Container className="relative py-20 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white drop-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {t('title')}
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-4 drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              {t('subtitle')}
            </motion.p>
            <motion.p
              className="text-lg md:text-xl text-white/70 mb-10 drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              {t('description')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <Link href={`/${locale}/contact`}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" className="text-base px-8 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg shadow-blue-900/30 hover:shadow-xl transition-all duration-300">
                    {t('bookDemo')}
                  </Button>
                </motion.div>
              </Link>
              <Link href={`/${locale}/product`}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" variant="outline" className="text-base px-8 border-2 border-white/60 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/80 transition-all duration-300">
                    {t('learnProduct')}
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Product Capability Cards — below hero */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: "/icons/cli-tools.png",
                title: t('card1Title'),
                subtitle: t('card1Subtitle'),
                description: t('card1Desc'),
                gradient: "from-blue-600 to-blue-500",
                delay: 0.1
              },
              {
                icon: "/icons/skills-brain.png",
                title: t('card2Title'),
                subtitle: t('card2Subtitle'),
                description: t('card2Desc'),
                gradient: "from-cyan-600 to-blue-600",
                delay: 0.2
              },
              {
                icon: "/icons/agent-chat.png",
                title: t('card3Title'),
                subtitle: t('card3Subtitle'),
                description: t('card3Desc'),
                gradient: "from-blue-700 to-cyan-600",
                delay: 0.3
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: item.delay, ease: "easeOut" }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Card className="h-full bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 relative overflow-hidden group">
                  <div className="relative w-full aspect-[2/1] overflow-hidden rounded-t-lg">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                  </div>

                  <div className="relative p-6 pt-2">
                    <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-2 break-words leading-tight`}>
                      {item.title}
                    </div>
                    <div className="text-sm font-semibold text-foreground">{item.subtitle}</div>
                    <div className="text-xs text-muted-foreground mt-2">
                      {item.description}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
