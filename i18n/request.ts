import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

// 支持的语言列表
export const locales = ['zh-CN', 'zh-HK', 'en'] as const
export type Locale = (typeof locales)[number]

// 默认语言
export const defaultLocale: Locale = 'zh-CN'

// 语言名称映射
export const localeNames: Record<Locale, string> = {
  'zh-CN': '简体中文',
  'zh-HK': '繁體中文',
  'en': 'English'
}

export default getRequestConfig(async ({ locale }) => {
  // 验证语言是否支持
  if (!locale || !locales.includes(locale as Locale)) {
    notFound()
  }

  return {
    locale: locale as string,
    messages: (await import(`../messages/${locale}.json`)).default
  }
})
