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
  // 确保 locale 有效，使用默认语言作为回退
  const validLocale = locale && locales.includes(locale as Locale) ? locale : defaultLocale

  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default
  }
})
