import { Metadata } from "next"
import Container from "@/components/layout/container"
import ContactForm from "@/components/features/contact-form"

export const metadata: Metadata = {
  title: "联系我们",
  description: "联系 Optima AI 获取专业的 AI 技术服务咨询",
}

export default function ContactPage() {
  return (
    <div className="py-20">
      <Container>
        {/* Page Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            开始您的 AI 项目
          </h1>
          <p className="text-lg text-muted-foreground">
            填写表单或发送邮件，我们的技术团队将尽快与您联系
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-5xl mx-auto">
          <ContactForm />
        </div>
      </Container>
    </div>
  )
}
