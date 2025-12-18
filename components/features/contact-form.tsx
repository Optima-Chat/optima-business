"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations } from 'next-intl'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contact"

export default function ContactForm() {
  const t = useTranslations('contact')
  const tCommon = useTranslations('common')
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
        throw new Error(result.error || t('errorTitle'))
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
            <CardTitle>{t('infoTitle')}</CardTitle>
            <CardDescription>
              {t('infoSubtitle')}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold mb-2">{t('companyName')}</h3>
              <p className="text-sm text-muted-foreground">
                {tCommon('companyName')}
                <br />
                {tCommon('companyNameEn')}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2">{t('businessScope')}</h3>
              <p className="text-sm text-muted-foreground whitespace-pre-line">
                {t('businessScopeText')}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2">{t('emailConsulting')}</h3>
              <a
                href={`mailto:${tCommon('email')}`}
                className="text-primary hover:underline text-sm"
              >
                {tCommon('email')}
              </a>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2">{t('hongKongOffice')}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                {t('addressZh')}
              </p>
              <p className="text-xs text-muted-foreground/70 mt-2 whitespace-pre-line">
                {t('addressEn')}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 右侧：表单 */}
      <Card>
        <CardHeader>
          <CardTitle>{t('formTitle')}</CardTitle>
          <CardDescription>
            {t('formSubtitle')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* 姓名 */}
            <div className="space-y-2">
              <Label htmlFor="name">
                {t('name')} <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name.message}</p>
              )}
            </div>

            {/* 公司 */}
            <div className="space-y-2">
              <Label htmlFor="company">{t('company')}</Label>
              <Input
                id="company"
                {...register("company")}
              />
              {errors.company && (
                <p className="text-sm text-destructive">{errors.company.message}</p>
              )}
            </div>

            {/* 邮箱 */}
            <div className="space-y-2">
              <Label htmlFor="email">
                Email <span className="text-destructive">*</span>
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
              <Label htmlFor="phone">{t('phone')}</Label>
              <Input
                id="phone"
                type="tel"
                {...register("phone")}
              />
              {errors.phone && (
                <p className="text-sm text-destructive">{errors.phone.message}</p>
              )}
            </div>

            {/* 项目描述 */}
            <div className="space-y-2">
              <Label htmlFor="message">
                {t('message')} <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="message"
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
                ✓ {t('successMessage')}
              </div>
            )}
            {submitStatus === "error" && (
              <div className="p-3 bg-destructive/10 border border-destructive/50 rounded-md text-sm text-destructive">
                {t('errorMessage')}
              </div>
            )}

            {/* 提交按钮 */}
            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? t('submitting') : t('submit')}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
