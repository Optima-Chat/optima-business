import { NextResponse } from "next/server"
import { Resend } from "resend"
import { contactFormSchema } from "@/lib/validations/contact"

// 延迟初始化 Resend，避免构建时报错
let resend: Resend | null = null

function getResendClient() {
  if (!resend) {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      throw new Error("缺少 RESEND_API_KEY 环境变量")
    }
    resend = new Resend(apiKey)
  }
  return resend
}

// 简单的内存速率限制
const rateLimit = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const limit = rateLimit.get(ip)

  if (!limit || now > limit.resetTime) {
    // 重置或初始化：每分钟最多 3 次请求
    rateLimit.set(ip, { count: 1, resetTime: now + 60000 })
    return true
  }

  if (limit.count >= 3) {
    return false
  }

  limit.count++
  return true
}

export async function POST(request: Request) {
  try {
    // 获取客户端 IP
    const forwarded = request.headers.get("x-forwarded-for")
    const ip = forwarded ? forwarded.split(",")[0] : "unknown"

    // 速率限制检查
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: "请求过于频繁，请稍后再试" },
        { status: 429 }
      )
    }

    // 验证请求来源
    const origin = request.headers.get("origin")
    const allowedOrigins = [
      "http://localhost:3000",
      "https://optima-ai.biz",
      "https://optima-business.vercel.app",
      process.env.NEXT_PUBLIC_SITE_URL,
    ].filter(Boolean)

    if (origin && !allowedOrigins.includes(origin)) {
      return NextResponse.json(
        { success: false, error: "禁止访问" },
        { status: 403 }
      )
    }

    // 解析并验证表单数据
    const body = await request.json()
    const validatedData = contactFormSchema.parse(body)

    // 发送邮件通知
    const resendClient = getResendClient()
    const emailResult = await resendClient.emails.send({
      from: "Optima Pulse 官网 <noreply@optima.sh>",
      to: "business@optima.chat",
      subject: `[官网咨询] ${validatedData.name}${validatedData.company ? ` - ${validatedData.company}` : ""}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%);
                color: white;
                padding: 20px;
                border-radius: 8px;
                margin-bottom: 20px;
              }
              .content {
                background: #f9fafb;
                padding: 20px;
                border-radius: 8px;
                border: 1px solid #e5e7eb;
              }
              .field {
                margin-bottom: 15px;
              }
              .label {
                font-weight: 600;
                color: #374151;
                display: block;
                margin-bottom: 5px;
              }
              .value {
                color: #1f2937;
                background: white;
                padding: 10px;
                border-radius: 4px;
                border: 1px solid #e5e7eb;
              }
              .message {
                white-space: pre-wrap;
              }
              .footer {
                margin-top: 20px;
                padding-top: 20px;
                border-top: 1px solid #e5e7eb;
                color: #6b7280;
                font-size: 14px;
                text-align: center;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h2 style="margin: 0;">🔔 新的咨询表单</h2>
              <p style="margin: 5px 0 0 0; opacity: 0.9;">来自 Optima Pulse 官网</p>
            </div>

            <div class="content">
              <div class="field">
                <span class="label">👤 姓名</span>
                <div class="value">${validatedData.name}</div>
              </div>

              ${
                validatedData.company
                  ? `
              <div class="field">
                <span class="label">🏢 公司</span>
                <div class="value">${validatedData.company}</div>
              </div>
              `
                  : ""
              }

              <div class="field">
                <span class="label">📧 邮箱</span>
                <div class="value"><a href="mailto:${validatedData.email}">${validatedData.email}</a></div>
              </div>

              ${
                validatedData.phone
                  ? `
              <div class="field">
                <span class="label">📱 电话</span>
                <div class="value"><a href="tel:${validatedData.phone}">${validatedData.phone}</a></div>
              </div>
              `
                  : ""
              }

              <div class="field">
                <span class="label">📝 项目描述</span>
                <div class="value message">${validatedData.message}</div>
              </div>

              <div class="field">
                <span class="label">⏰ 提交时间</span>
                <div class="value">${new Date().toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" })}</div>
              </div>
            </div>

            <div class="footer">
              <p>此邮件由 Optima Pulse 官网自动发送</p>
              <p>请及时回复客户咨询</p>
            </div>
          </body>
        </html>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)

    // Zod 验证错误
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { success: false, error: "表单数据验证失败" },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { success: false, error: "提交失败，请重试" },
      { status: 500 }
    )
  }
}
