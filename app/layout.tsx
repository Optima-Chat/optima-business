import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { locales } from '@/i18n/request'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Optima Pulse - 企业决策 Agent",
    template: "%s | Optima Pulse",
  },
  description: "Optima Pulse — 实时感知企业脉搏，做出最优决策。通过自然语言对话查询企业数据、讨论决策、设置行动。",
  keywords: ["企业决策", "AI Agent", "数据查询", "电商运营", "库存管理", "广告优化", "决策助手", "自然语言"],
  authors: [{ name: "Optima AI Limited" }],
  openGraph: {
    title: "Optima Pulse - 企业决策 Agent",
    description: "实时感知企业脉搏，做出最优决策。自然语言对话查询数据、讨论决策、设置行动。",
    url: "https://optima-ai.biz",
    siteName: "Optima Pulse",
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
