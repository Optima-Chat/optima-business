import Link from "next/link"
import Container from "@/components/layout/container"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            准备开启您的 AI 项目？
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            我们的技术团队随时为您提供专业的 AI 解决方案
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-base px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                立即咨询
              </Button>
            </Link>
            <Link href="mailto:business@optima.chat">
              <Button size="lg" variant="outline" className="text-base px-8 border-2 bg-white/80 backdrop-blur-sm hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 hover:scale-105">
                发送邮件
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
