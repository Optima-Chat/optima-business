import createMiddleware from 'next-intl/middleware'
import { locales, defaultLocale } from './i18n/request'

export default createMiddleware({
  // 支持的语言列表
  locales,

  // 默认语言
  defaultLocale,

  // 语言检测策略
  localeDetection: true,

  // URL 前缀策略：始终显示语言前缀
  localePrefix: 'always'
})

export const config = {
  // 匹配所有路径，除了 API 路由和静态文件
  matcher: [
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
}
