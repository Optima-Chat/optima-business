# Optima AI 商业定制开发官网 - 技术方案

**文档版本**: v1.0
**创建日期**: 2025-12-18
**技术负责人**: Optima AI 技术团队

---

## 1. 技术架构

### 1.1 整体架构图

```
┌─────────────────────────────────────────────────────────────┐
│                        用户访问层                             │
│                   (Browser / Mobile)                         │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                      CDN 边缘节点                             │
│                  (Vercel Edge Network)                       │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                     Next.js 应用层                            │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │  SSG Pages   │  │  RSC Pages   │  │  API Routes  │      │
│  │  (静态生成)   │  │  (服务端组件) │  │  (表单提交)   │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                      数据存储层                               │
│  ┌──────────────┐  ┌──────────────┐                         │
│  │  Static Data │  │  Form Submit │                         │
│  │  (TS 常量)    │  │  (邮件通知)   │                         │
│  └──────────────┘  └──────────────┘                         │
└─────────────────────────────────────────────────────────────┘
```

### 1.2 架构设计原则

1. **静态优先**: 优先使用 SSG (Static Site Generation)，提升性能和 SEO
2. **边缘计算**: 利用 Vercel Edge Network，全球低延迟访问
3. **组件化**: 高度组件化，易于维护和扩展
4. **类型安全**: TypeScript 全覆盖，减少运行时错误
5. **性能优先**: 代码分割、图片优化、预加载等性能优化手段

---

## 2. 技术栈选型

### 2.1 核心技术栈

| 技术 | 版本 | 选型理由 |
|-----|------|---------|
| **Next.js** | 14.x | • 行业标准 React 框架<br>• App Router 提供更好的性能和 DX<br>• 内置图片/字体优化<br>• Vercel 深度集成 |
| **TypeScript** | 5.x | • 类型安全，减少 bug<br>• 更好的 IDE 支持<br>• 团队协作友好 |
| **Tailwind CSS** | 3.x | • 原子化 CSS，开发效率高<br>• 设计系统友好<br>• 打包体积小（PurgeCSS）<br>• 响应式设计简单 |
| **shadcn/ui** | Latest | • 无依赖，代码可控<br>• 基于 Radix UI，可访问性好<br>• 设计现代，符合需求<br>• 易于自定义 |
| **Framer Motion** | 11.x | • React 动画库标准<br>• 声明式 API，易用<br>• 性能优秀 |
| **React Hook Form** | 7.x | • 性能优秀（非受控组件）<br>• TypeScript 友好<br>• 集成 Zod 验证 |
| **Zod** | 3.x | • TypeScript-first 验证库<br>• 类型推断强大<br>• 错误提示友好 |

### 2.2 开发工具

| 工具 | 用途 |
|-----|------|
| **pnpm** | 包管理器（性能优于 npm/yarn） |
| **ESLint** | 代码质量检查 |
| **Prettier** | 代码格式化 |
| **Husky** | Git Hooks（提交前检查） |
| **lint-staged** | 暂存区代码检查 |

### 2.3 部署与监控

| 服务 | 用途 |
|-----|------|
| **Vercel** | 托管平台（CI/CD、边缘网络、分析） |
| **Vercel Analytics** | 性能监控（Core Web Vitals） |
| **Resend** | 邮件服务（表单提交通知） |

---

## 3. 项目结构设计

### 3.1 目录结构

```
optima-business/
├── app/                          # Next.js App Router 目录
│   ├── layout.tsx                # 全局布局
│   ├── page.tsx                  # 首页
│   ├── globals.css               # 全局样式
│   ├── cases/                    # 案例页
│   │   └── page.tsx
│   ├── contact/                  # 联系页
│   │   └── page.tsx
│   └── api/                      # API 路由
│       └── contact/
│           └── route.ts          # 表单提交处理
│
├── components/                   # 组件目录
│   ├── ui/                       # shadcn/ui 基础组件
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── ...
│   ├── layout/                   # 布局组件
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   └── container.tsx
│   ├── sections/                 # 页面区块组件
│   │   ├── hero.tsx
│   │   ├── core-capabilities.tsx
│   │   ├── business-scope.tsx
│   │   └── cta-section.tsx
│   └── features/                 # 功能组件
│       ├── case-card.tsx
│       ├── contact-form.tsx
│       └── tech-tag.tsx
│
├── lib/                          # 工具函数
│   ├── utils.ts                  # 通用工具（cn 等）
│   ├── data/                     # 数据文件
│   │   ├── cases.ts              # 案例数据
│   │   ├── capabilities.ts       # 核心能力数据
│   │   └── tech-stacks.ts        # 技术栈数据
│   └── validations/              # 表单验证
│       └── contact.ts            # 联系表单验证
│
├── public/                       # 静态资源
│   ├── images/                   # 图片
│   │   ├── hero/
│   │   ├── cases/
│   │   └── icons/
│   └── fonts/                    # 字体（如需自定义）
│
├── config/                       # 配置文件
│   ├── site.ts                   # 网站配置（元数据、导航等）
│   └── constants.ts              # 常量定义
│
├── types/                        # TypeScript 类型定义
│   └── index.ts                  # 全局类型
│
├── hooks/                        # 自定义 Hooks
│   └── use-scroll-progress.ts   # 示例：滚动进度
│
├── .env.local                    # 环境变量（本地）
├── .env.example                  # 环境变量示例
├── next.config.js                # Next.js 配置
├── tailwind.config.ts            # Tailwind 配置
├── tsconfig.json                 # TypeScript 配置
├── .eslintrc.json                # ESLint 配置
├── .prettierrc                   # Prettier 配置
├── package.json                  # 依赖管理
├── pnpm-lock.yaml                # 锁定文件
├── PRD.md                        # 产品需求文档
├── TECH_SPEC.md                  # 技术方案文档（本文档）
└── README.md                     # 项目说明
```

### 3.2 关键目录说明

#### `app/` - 路由和页面
- 使用 Next.js 14 App Router
- 每个路由一个文件夹（`page.tsx`）
- `layout.tsx` 定义布局
- `loading.tsx` 定义加载状态（可选）
- `error.tsx` 定义错误边界（可选）

#### `components/` - 组件分层
- **ui/**: shadcn/ui 基础组件（无业务逻辑）
- **layout/**: 布局组件（导航栏、页脚等）
- **sections/**: 页面区块（Hero、CTA 等）
- **features/**: 功能组件（卡片、表单等）

#### `lib/` - 业务逻辑和数据
- **data/**: 静态数据（案例、能力等）
- **validations/**: 表单验证逻辑
- **utils.ts**: 工具函数

---

## 4. 数据模型设计

### 4.1 案例数据模型

```typescript
// types/index.ts

export interface Case {
  id: string                    // 唯一标识
  title: string                 // 项目名称（匿名化）
  industry: string              // 行业
  description: string           // 简短描述
  techStack: string[]           // 技术栈
  achievements: string[]        // 关键成果（数组）
  highlights: string[]          // 技术亮点
  scale: {                      // 项目规模
    budget?: string             // 预算（可选）
    duration: string            // 工期
  }
  tags: TechTag[]               // 技术标签
  image?: string                // 封面图（可选）
  order: number                 // 排序权重
}

export type TechTag =
  | 'computer-vision'           // 计算机视觉
  | 'nlp'                       // 自然语言处理
  | 'recommendation'            // 推荐系统
  | 'deep-learning'             // 深度学习
  | 'data-engineering'          // 数据工程
  | 'high-performance'          // 高性能计算
  | 'mlops'                     // MLOps
  | 'distributed-system'        // 分布式系统
```

### 4.2 核心能力数据模型

```typescript
export interface Capability {
  id: string
  icon: React.ReactNode | string  // 图标
  title: string                   // 标题
  description: string             // 描述
  details?: string[]              // 详细说明（可选）
}
```

### 4.3 业务范围数据模型

```typescript
export interface BusinessScope {
  id: string
  title: string                   // 标题
  description: string             // 描述
  keywords: string[]              // 关键词/技术点
  icon?: React.ReactNode | string // 图标（可选）
}
```

### 4.4 联系表单数据模型

```typescript
export interface ContactFormData {
  name: string                    // 姓名（必填）
  company?: string                // 公司（可选）
  email: string                   // 邮箱（必填）
  phone?: string                  // 电话（可选）
  message: string                 // 项目描述（必填）
}
```

---

## 5. 核心组件设计

### 5.1 页面组件

#### 首页 (app/page.tsx)
```tsx
import Hero from '@/components/sections/hero'
import CoreCapabilities from '@/components/sections/core-capabilities'
import BusinessScope from '@/components/sections/business-scope'
import FeaturedCases from '@/components/sections/featured-cases'
import CTASection from '@/components/sections/cta-section'

export default function HomePage() {
  return (
    <>
      <Hero />
      <CoreCapabilities />
      <BusinessScope />
      <FeaturedCases />
      <CTASection />
    </>
  )
}
```

#### 案例页 (app/cases/page.tsx)
```tsx
import CaseCard from '@/components/features/case-card'
import { cases } from '@/lib/data/cases'

export default function CasesPage() {
  return (
    <Container>
      <PageHeader
        title="项目案例"
        description="深度 AI 技术，端到端交付"
      />
      <CaseGrid>
        {cases.map(case => (
          <CaseCard key={case.id} case={case} />
        ))}
      </CaseGrid>
    </Container>
  )
}
```

#### 联系页 (app/contact/page.tsx)
```tsx
import ContactForm from '@/components/features/contact-form'

export default function ContactPage() {
  return (
    <Container>
      <PageHeader
        title="开始您的 AI 项目"
        description="填写表单，我们将尽快与您联系"
      />
      <ContactForm />
    </Container>
  )
}
```

### 5.2 关键功能组件

#### 案例卡片 (components/features/case-card.tsx)
```tsx
'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Case } from '@/types'

interface CaseCardProps {
  case: Case
}

export default function CaseCard({ case: caseData }: CaseCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all">
      {/* 封面图 */}
      {caseData.image && (
        <div className="aspect-video overflow-hidden">
          <Image
            src={caseData.image}
            alt={caseData.title}
            className="group-hover:scale-105 transition-transform"
          />
        </div>
      )}

      {/* 内容 */}
      <CardContent>
        <h3>{caseData.title}</h3>
        <p className="text-muted-foreground">{caseData.industry}</p>

        {/* 技术标签 */}
        <div className="flex gap-2 flex-wrap">
          {caseData.tags.map(tag => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        {/* 关键成果 */}
        <ul>
          {caseData.achievements.map((achievement, i) => (
            <li key={i}>{achievement}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
```

#### 联系表单 (components/features/contact-form.tsx)
```tsx
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema } from '@/lib/validations/contact'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function ContactForm() {
  const form = useForm({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        // 显示成功提示
        toast.success('提交成功！我们会尽快与您联系。')
        form.reset()
      } else {
        throw new Error('提交失败')
      }
    } catch (error) {
      toast.error('提交失败，请重试或直接发送邮件至 dev@optima.chat')
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField name="name" label="姓名" required />
        <FormField name="company" label="公司" />
        <FormField name="email" label="邮箱" type="email" required />
        <FormField name="phone" label="电话" type="tel" />
        <FormField
          name="message"
          label="项目描述"
          component={Textarea}
          required
        />
        <Button type="submit">提交咨询</Button>
      </form>
    </Form>
  )
}
```

---

## 6. API 设计

### 6.1 联系表单提交 API

**路径**: `/api/contact`
**方法**: `POST`

#### 请求体
```json
{
  "name": "张三",
  "company": "某某公司",
  "email": "zhangsan@example.com",
  "phone": "13800138000",
  "message": "我们需要开发一个AI图像识别系统..."
}
```

#### 响应
```json
// 成功
{
  "success": true,
  "message": "提交成功"
}

// 失败
{
  "success": false,
  "error": "验证失败",
  "details": { ... }
}
```

#### 实现 (app/api/contact/route.ts)
```typescript
import { NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validations/contact'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // 验证数据
    const validatedData = contactFormSchema.parse(body)

    // 发送邮件通知
    await resend.emails.send({
      from: 'noreply@optima.business',
      to: 'business@optima.chat',
      subject: `[官网咨询] ${validatedData.name} - ${validatedData.company}`,
      html: `
        <h2>新的咨询表单</h2>
        <p><strong>姓名:</strong> ${validatedData.name}</p>
        <p><strong>公司:</strong> ${validatedData.company || '未提供'}</p>
        <p><strong>邮箱:</strong> ${validatedData.email}</p>
        <p><strong>电话:</strong> ${validatedData.phone || '未提供'}</p>
        <p><strong>项目描述:</strong></p>
        <p>${validatedData.message}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal error' },
      { status: 500 }
    )
  }
}
```

---

## 7. 性能优化方案

### 7.1 静态生成 (SSG)

**策略**: 所有页面使用 SSG，构建时生成静态 HTML

```typescript
// app/page.tsx
export const dynamic = 'force-static'
export const revalidate = false // 不自动重新验证
```

**优势**:
- 极速加载（直接返回 HTML）
- SEO 友好
- CDN 缓存友好

### 7.2 图片优化

**使用 Next.js Image 组件**:
```tsx
import Image from 'next/image'

<Image
  src="/images/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
  priority // 首屏图片优先加载
  quality={90}
  placeholder="blur" // 模糊占位符
/>
```

**优势**:
- 自动 WebP/AVIF 格式转换
- 响应式图片（srcset）
- 懒加载（非首屏）
- 防止布局偏移（CLS）

### 7.3 字体优化

```typescript
// app/layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // 字体交换策略
  preload: true,
})

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN" className={inter.className}>
      {children}
    </html>
  )
}
```

**优势**:
- 自托管字体（减少外部请求）
- 字体子集（仅加载需要的字符）
- 预加载关键字体

### 7.4 代码分割

```tsx
// 动态导入非关键组件
import dynamic from 'next/dynamic'

const ContactForm = dynamic(() => import('@/components/features/contact-form'), {
  loading: () => <FormSkeleton />,
  ssr: false, // 仅客户端渲染（如果不需要 SEO）
})
```

### 7.5 预加载关键资源

```tsx
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://api.optima.business" />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### 7.6 性能指标目标

| 指标 | 目标 |
|-----|------|
| **LCP** (Largest Contentful Paint) | < 2.5s |
| **FID** (First Input Delay) | < 100ms |
| **CLS** (Cumulative Layout Shift) | < 0.1 |
| **TTFB** (Time to First Byte) | < 600ms |
| **First Paint** | < 1.5s |

---

## 8. SEO 优化方案

### 8.1 元数据配置

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: {
    default: 'Optima AI - AI 技术定制开发服务',
    template: '%s | Optima AI',
  },
  description: 'AI 驱动的全栈技术服务，从算法到产品，端到端交付。计算机视觉、NLP、推荐系统专家。',
  keywords: ['AI开发', 'AI定制', '计算机视觉', 'NLP', '推荐系统', '深度学习'],
  authors: [{ name: 'Optima AI Limited' }],
  openGraph: {
    title: 'Optima AI - AI 技术定制开发服务',
    description: 'AI 驱动的全栈技术服务，从算法到产品，端到端交付',
    url: 'https://optima.business',
    siteName: 'Optima AI',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Optima AI - AI 技术定制开发服务',
    description: 'AI 驱动的全栈技术服务，从算法到产品，端到端交付',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}
```

### 8.2 结构化数据 (JSON-LD)

```tsx
// app/layout.tsx
export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Optima AI Limited',
    description: 'AI 驱动的全栈技术服务',
    url: 'https://optima.business',
    logo: 'https://optima.business/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'dev@optima.chat',
      contactType: 'Customer Service',
    },
  }

  return (
    <html>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### 8.3 Sitemap 生成

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://optima.business',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://optima.business/cases',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://optima.business/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}
```

### 8.4 Robots.txt

```typescript
// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://optima.business/sitemap.xml',
  }
}
```

---

## 9. 部署方案

### 9.1 Vercel 部署配置

```json
// vercel.json
{
  "framework": "nextjs",
  "buildCommand": "pnpm build",
  "installCommand": "pnpm install",
  "regions": ["hkg1", "sfo1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### 9.2 环境变量

```bash
# .env.example
# Resend 邮件服务
RESEND_API_KEY=re_xxxxxxxxxxxx

# 网站配置
NEXT_PUBLIC_SITE_URL=https://optima.business
NEXT_PUBLIC_CONTACT_EMAIL=business@optima.chat
```

### 9.3 CI/CD 流程

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'pnpm'
      - run: pnpm install
      - run: pnpm lint
      - run: pnpm typecheck

  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'pnpm'
      - run: pnpm install
      - run: pnpm build
```

### 9.4 域名配置

- **主域名**: `optima.business` 或 `business.optima.shop`
- **SSL**: 自动配置（Vercel 提供）
- **CDN**: Vercel Edge Network（全球 70+ 节点）

---

## 10. 安全方案

### 10.1 表单安全

```typescript
// 速率限制
import rateLimit from '@/lib/rate-limit'

const limiter = rateLimit({
  interval: 60 * 1000, // 1 分钟
  uniqueTokenPerInterval: 500,
})

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown'

  try {
    await limiter.check(ip, 3) // 每分钟最多 3 次请求
  } catch {
    return new Response('Too Many Requests', { status: 429 })
  }

  // 处理表单...
}
```

### 10.2 CSRF 保护

```typescript
// 验证 Origin
export async function POST(request: Request) {
  const origin = request.headers.get('origin')
  const allowedOrigins = ['https://optima.business']

  if (!origin || !allowedOrigins.includes(origin)) {
    return new Response('Forbidden', { status: 403 })
  }

  // 处理请求...
}
```

### 10.3 输入验证

```typescript
// lib/validations/contact.ts
import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, '姓名至少2个字符').max(50),
  company: z.string().max(100).optional(),
  email: z.string().email('请输入有效的邮箱地址'),
  phone: z.string().regex(/^1[3-9]\d{9}$/, '请输入有效的手机号').optional(),
  message: z.string().min(10, '项目描述至少10个字符').max(1000),
})
```

---

## 11. 监控与分析

### 11.1 性能监控

**Vercel Analytics**:
- 自动收集 Core Web Vitals
- 实时性能报告
- 按地区/设备分析

**集成**:
```tsx
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### 11.2 错误监控（可选）

**Sentry 集成**:
```typescript
// sentry.client.config.ts
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
})
```

### 11.3 用户行为分析（可选）

**Google Analytics 4**:
```tsx
// app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  )
}
```

---

## 12. 开发规范

### 12.1 代码规范

#### TypeScript 规范
- 优先使用 `type` 而非 `interface`（除非需要扩展）
- 严格模式（`strict: true`）
- 避免 `any`，使用 `unknown` 或具体类型
- 为所有导出函数添加类型注解

#### React 规范
- 优先使用函数组件
- 使用 `'use client'` 标记客户端组件
- Props 使用 TypeScript interface 定义
- 避免内联函数（使用 `useCallback`）

#### CSS 规范
- 优先使用 Tailwind 工具类
- 自定义样式使用 CSS Modules
- 遵循移动优先原则（`sm:`, `md:`, `lg:`）

### 12.2 命名规范

| 类型 | 规范 | 示例 |
|-----|------|------|
| 组件 | PascalCase | `CaseCard.tsx` |
| 函数 | camelCase | `getCases()` |
| 常量 | UPPER_SNAKE_CASE | `MAX_CASES` |
| 类型/接口 | PascalCase | `Case`, `CaseProps` |
| 文件夹 | kebab-case | `case-card/` |

### 12.3 Git 规范

**Commit 格式**:
```
<type>(<scope>): <subject>

<body>

<footer>
```

**类型**:
- `feat`: 新功能
- `fix`: 修复 bug
- `docs`: 文档更新
- `style`: 代码格式（不影响功能）
- `refactor`: 重构
- `perf`: 性能优化
- `test`: 测试
- `chore`: 构建/工具链

**示例**:
```
feat(contact): 添加表单验证

- 使用 Zod 验证表单数据
- 添加错误提示
- 集成速率限制
```

### 12.4 代码审查清单

- [ ] 类型安全（无 `any`）
- [ ] 无 console.log（使用 logger）
- [ ] 响应式设计（移动端适配）
- [ ] 可访问性（a11y）
- [ ] 性能优化（图片、代码分割）
- [ ] SEO 优化（元数据、结构化数据）
- [ ] 错误处理
- [ ] 测试覆盖（如有）

---

## 13. 技术债务与未来优化

### 13.1 Phase 1 技术债务

- [ ] 缺少自动化测试（E2E、单元测试）
- [ ] 缺少 Storybook（组件文档）
- [ ] 缺少国际化（i18n）
- [ ] 表单数据未持久化（仅邮件通知）

### 13.2 Phase 2 优化计划

- **测试**:
  - 集成 Playwright（E2E 测试）
  - 集成 Vitest（单元测试）
  - 测试覆盖率 > 80%

- **国际化**:
  - 集成 next-intl
  - 支持中英文切换

- **CMS**:
  - 集成 Sanity 或 Contentful
  - 非技术人员可更新案例

- **分析增强**:
  - 热力图（Hotjar）
  - A/B 测试（Vercel Edge Config）

---

## 14. 附录

### 14.1 核心依赖清单

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "typescript": "^5.0.0",
    "@radix-ui/react-*": "latest",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0",
    "tailwindcss": "^3.0.0",
    "framer-motion": "^11.0.0",
    "react-hook-form": "^7.0.0",
    "@hookform/resolvers": "^3.0.0",
    "zod": "^3.0.0",
    "resend": "^2.0.0",
    "lucide-react": "latest"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.0.0",
    "prettier": "^3.0.0",
    "prettier-plugin-tailwindcss": "^0.5.0"
  }
}
```

### 14.2 参考资源

- **Next.js 文档**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com
- **shadcn/ui**: https://ui.shadcn.com
- **Radix UI**: https://www.radix-ui.com
- **Vercel**: https://vercel.com/docs

---

**文档状态**: ✅ 已完成
**审核**: 待审核
**下一步**: 开始项目初始化和开发
