"use client"

import Link from "next/link"
import { useState } from "react"
import { useTranslations, useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import Container from "./container"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { localeNames } from '@/i18n/request'

// 简约科技感 Logo 组件
function Logo() {
  return (
    <div className="flex items-center gap-2">
      {/* Logo 图标 - 抽象的 AI 符号 */}
      <div className="relative w-8 h-8">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg"
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          {/* 内部装饰 - 代表 AI 神经网络 */}
          <div className="absolute inset-1 bg-white/20 rounded-md backdrop-blur-sm">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full" />
            <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white/60 rounded-full" />
            <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-white/60 rounded-full" />
            <div className="absolute bottom-1 left-1 w-1.5 h-1.5 bg-white/60 rounded-full" />
            <div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-white/60 rounded-full" />
          </div>
        </motion.div>
      </div>
      {/* 文字 */}
      <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
        Optima AI
      </span>
    </div>
  )
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [langMenuOpen, setLangMenuOpen] = useState(false)
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  // Extract current locale from pathname to ensure it's always up-to-date
  const currentLocale = pathname.split('/')[1] || locale

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/')
    segments[1] = newLocale
    router.push(segments.join('/'))
    setLangMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link
              href={`/${locale}`}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {t('home')}
            </Link>
            <Link
              href={`/${locale}/cases`}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {t('cases')}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {t('contact')}
            </Link>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                {localeNames[currentLocale as keyof typeof localeNames]}
              </button>
              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-border py-1">
                  {Object.entries(localeNames).map(([code, name]) => (
                    <button
                      key={code}
                      onClick={() => switchLocale(code)}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                        currentLocale === code ? 'text-blue-600 font-medium' : 'text-foreground/80'
                      }`}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link href={`/${locale}/contact`}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-md hover:shadow-lg transition-all duration-300">
                  {t('startConsulting')}
                </Button>
              </motion.div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href={`/${locale}`}
              className="block text-sm font-medium text-foreground/80 hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('home')}
            </Link>
            <Link
              href={`/${locale}/cases`}
              className="block text-sm font-medium text-foreground/80 hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('cases')}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="block text-sm font-medium text-foreground/80 hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('contact')}
            </Link>

            {/* Mobile Language Switcher */}
            <div className="border-t border-border pt-4 space-y-2">
              <p className="text-xs text-muted-foreground mb-2">Language / 语言</p>
              {Object.entries(localeNames).map(([code, name]) => (
                <button
                  key={code}
                  onClick={() => {
                    switchLocale(code)
                    setMobileMenuOpen(false)
                  }}
                  className={`block w-full text-left text-sm px-3 py-2 rounded-md hover:bg-gray-50 transition-colors ${
                    currentLocale === code ? 'text-blue-600 font-medium bg-blue-50' : 'text-foreground/80'
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>

            <Link href={`/${locale}/contact`} onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-md hover:shadow-lg transition-all duration-300">
                {t('startConsulting')}
              </Button>
            </Link>
          </div>
        )}
      </Container>
    </nav>
  )
}
