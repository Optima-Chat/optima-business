import Link from "next/link"
import Container from "@/components/layout/container"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-purple-50">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            准备开启您的 AI 项目？
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            我们的技术团队随时为您提供专业的 AI 解决方案
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-base px-8">
                立即咨询
              </Button>
            </Link>
            <Link href="mailto:business@optima.chat">
              <Button size="lg" variant="outline" className="text-base px-8">
                发送邮件
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
