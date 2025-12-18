"use client"

import Link from "next/link"
import { useState } from "react"
import Container from "./container"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

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

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="/"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              首页
            </Link>
            <Link
              href="/cases"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              案例
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              联系我们
            </Link>
            <Link href="/contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-md hover:shadow-lg transition-all duration-300">
                  开始咨询
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
              href="/"
              className="block text-sm font-medium text-foreground/80 hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              首页
            </Link>
            <Link
              href="/cases"
              className="block text-sm font-medium text-foreground/80 hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              案例
            </Link>
            <Link
              href="/contact"
              className="block text-sm font-medium text-foreground/80 hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              联系我们
            </Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-md hover:shadow-lg transition-all duration-300">
                开始咨询
              </Button>
            </Link>
          </div>
        )}
      </Container>
    </nav>
  )
}
