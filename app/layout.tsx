import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { locales } from '@/i18n/request'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Optima AI - AI 技术定制开发服务",
    template: "%s | Optima AI",
  },
  description: "極致智能科技有限公司（Optima AI Limited）- 专注人工智能软件开发、大数据技术应用与解决方案。从算法到产品，端到端交付。",
  keywords: ["AI开发", "AI定制", "人工智能软件开发", "大数据技术", "计算机视觉", "NLP", "推荐系统", "深度学习"],
  authors: [{ name: "Optima AI Limited" }],
  openGraph: {
    title: "Optima AI - AI 技术定制开发服务",
    description: "人工智能软件开发、大数据技术应用与解决方案。从算法到产品，端到端交付。",
    url: "https://optima-ai.biz",
    siteName: "Optima AI",
    locale: "zh_CN",
    type: "website",
  },
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
