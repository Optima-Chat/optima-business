import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Inter } from "next/font/google"
import { locales } from '@/i18n/request'
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  // 获取翻译消息
  // 注意：locale 验证已在 i18n/request.ts 和 middleware.ts 中处理
  // 这里不需要再次验证，避免静态生成时出错
  const messages = await getMessages({ locale })

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
