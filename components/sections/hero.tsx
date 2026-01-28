"use client"

import Link from "next/link"
import Image from "next/image"
import { useTranslations, useLocale } from 'next-intl'
import Container from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  const t = useTranslations('hero')
  const locale = useLocale()
  return (
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40" />
      </div>

      <Container className="relative py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            {t('title')}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-3 drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            {t('subtitle')}
          </motion.p>
          <motion.p
            className="text-base md:text-lg text-white/60 mb-12 drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {t('description')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            <Link href={`/${locale}/contact`}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" className="text-base w-44 h-14 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg shadow-blue-900/30 hover:shadow-xl transition-all duration-300">
                  {t('bookDemo')}
                </Button>
              </motion.div>
            </Link>
            <Link href={`/${locale}/product`}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" variant="outline" className="text-base w-44 h-14 border-2 border-white/40 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/60 transition-all duration-300">
                  {t('learnProduct')}
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
