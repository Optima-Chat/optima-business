"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contact"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "提交失败")
      }

      setSubmitStatus("success")
      reset()

      // 3秒后重置状态
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } catch (error) {
      setSubmitStatus("error")
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* 左侧：联系方式 */}
      <div>
        <Card>
          <CardHeader>
            <CardTitle>联系方式</CardTitle>
            <CardDescription>
              我们会尽快回复您的咨询
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold mb-2">公司名称</h3>
              <p className="text-sm text-muted-foreground">
                極致智能科技有限公司
                <br />
                Optima AI Limited
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2">业务范围</h3>
              <p className="text-sm text-muted-foreground">
                人工智能软件开发<br />
                大数据技术应用与解决方案
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2">邮箱咨询</h3>
              <a
                href="mailto:business@optima.chat"
                className="text-primary hover:underline text-sm"
              >
                business@optima.chat
              </a>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2">香港办公室</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                香港尖沙咀加连威老道100号<br />
                港晶中心10楼1001(H)室
              </p>
              <p className="text-xs text-muted-foreground/70 mt-2">
                Room 1001(H), 10/F., Harbour Crystal Centre,<br />
                100 Granville Road, Tsim Sha Tsui, HK
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 右侧：表单 */}
      <Card>
        <CardHeader>
          <CardTitle>在线咨询</CardTitle>
          <CardDescription>
            填写表单，我们将尽快与您联系
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* 姓名 */}
            <div className="space-y-2">
              <Label htmlFor="name">
                姓名 <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                placeholder="请输入您的姓名"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name.message}</p>
              )}
            </div>

            {/* 公司 */}
            <div className="space-y-2">
              <Label htmlFor="company">公司</Label>
              <Input
                id="company"
                placeholder="请输入公司名称（可选）"
                {...register("company")}
              />
              {errors.company && (
                <p className="text-sm text-destructive">{errors.company.message}</p>
              )}
            </div>

            {/* 邮箱 */}
            <div className="space-y-2">
              <Label htmlFor="email">
                邮箱 <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>

            {/* 电话 */}
            <div className="space-y-2">
              <Label htmlFor="phone">电话</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="请输入手机号（可选）"
                {...register("phone")}
              />
              {errors.phone && (
                <p className="text-sm text-destructive">{errors.phone.message}</p>
              )}
            </div>

            {/* 项目描述 */}
            <div className="space-y-2">
              <Label htmlFor="message">
                项目描述 <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="message"
                placeholder="请简要描述您的项目需求..."
                rows={6}
                {...register("message")}
              />
              {errors.message && (
                <p className="text-sm text-destructive">{errors.message.message}</p>
              )}
            </div>

            {/* 提交状态 */}
            {submitStatus === "success" && (
              <div className="p-3 bg-accent/50 border border-accent rounded-md text-sm">
                ✓ 提交成功！我们会尽快与您联系。
              </div>
            )}
            {submitStatus === "error" && (
              <div className="p-3 bg-destructive/10 border border-destructive/50 rounded-md text-sm text-destructive">
                提交失败，请重试或直接发送邮件至 business@optima.chat
              </div>
            )}

            {/* 提交按钮 */}
            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "提交中..." : "提交咨询"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
