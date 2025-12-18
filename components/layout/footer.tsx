"use client"

import Link from "next/link"
import Container from "./container"
import { motion } from "framer-motion"

// Logo 组件（复用 Navbar 的设计）
function FooterLogo() {
  return (
    <div className="flex items-center gap-2 mb-3">
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg">
          <div className="absolute inset-1 bg-white/20 rounded-md backdrop-blur-sm">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full" />
            <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white/60 rounded-full" />
            <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-white/60 rounded-full" />
            <div className="absolute bottom-1 left-1 w-1.5 h-1.5 bg-white/60 rounded-full" />
            <div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-white/60 rounded-full" />
          </div>
        </div>
      </div>
      <span className="text-lg font-semibold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
        Optima AI
      </span>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-gradient-to-b from-gray-50 to-slate-100 relative overflow-hidden">
      {/* 装饰性背景 */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-200/20 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <Container className="relative">
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* 公司信息 */}
            <div>
              <FooterLogo />
              <p className="text-sm text-muted-foreground mb-2">
                極致智能科技有限公司
              </p>
              <p className="text-sm text-muted-foreground">
                AI 驱动的全栈技术服务
              </p>
            </div>

            {/* 导航链接 */}
            <div>
              <h3 className="text-sm font-semibold mb-3 flex items-center">
                <span className="w-1 h-4 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full mr-2" />
                导航
              </h3>
              <ul className="space-y-2">
                {[
                  { href: "/", label: "首页" },
                  { href: "/cases", label: "案例" },
                  { href: "/contact", label: "联系我们" }
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <motion.span
                        className="text-sm text-muted-foreground hover:text-blue-600 transition-colors inline-block"
                        whileHover={{ x: 3 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        → {link.label}
                      </motion.span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 联系方式 */}
            <div>
              <h3 className="text-sm font-semibold mb-3 flex items-center">
                <span className="w-1 h-4 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full mr-2" />
                联系方式
              </h3>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground">
                  <motion.a
                    href="mailto:business@optima.chat"
                    className="hover:text-blue-600 transition-colors inline-flex items-center gap-2 group"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-base">📧</span>
                    <span className="group-hover:underline">business@optima.chat</span>
                  </motion.a>
                </li>
              </ul>
            </div>
          </div>

          {/* 版权信息 */}
          <motion.div
            className="mt-12 pt-8 border-t border-border"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} Optima AI Limited. All rights reserved.
            </p>
          </motion.div>
        </div>
      </Container>
    </footer>
  )
}
