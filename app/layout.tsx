import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Optima AI - AI 技术定制开发服务",
    template: "%s | Optima AI",
  },
  description: "AI 驱动的全栈技术服务，从算法到产品，端到端交付。计算机视觉、NLP、推荐系统专家。",
  keywords: ["AI开发", "AI定制", "计算机视觉", "NLP", "推荐系统", "深度学习"],
  authors: [{ name: "Optima AI Limited" }],
  openGraph: {
    title: "Optima AI - AI 技术定制开发服务",
    description: "AI 驱动的全栈技术服务，从算法到产品，端到端交付",
    url: "https://optima.business",
    siteName: "Optima AI",
    locale: "zh_CN",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
