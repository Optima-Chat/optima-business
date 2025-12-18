import Link from "next/link"
import Container from "@/components/layout/container"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* 纯色背景 */}
      <div className="absolute inset-0 bg-blue-50">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-100/40 rounded-full filter blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-100/40 rounded-full filter blur-3xl" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            准备开启您的 AI 项目？
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            我们的技术团队随时为您提供专业的 AI 解决方案
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-base px-8 bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all duration-300 hover:scale-105">
                立即咨询
              </Button>
            </Link>
            <Link href="mailto:business@optima.chat">
              <Button size="lg" variant="outline" className="text-base px-8 border-2 border-slate-300 bg-white hover:border-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105">
                发送邮件
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
