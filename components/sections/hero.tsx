import Link from "next/link"
import Container from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
              極致智能 Optima AI
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            AI 驱动的全栈技术服务
          </p>
          <p className="text-lg md:text-xl text-muted-foreground/80 mb-12">
            从算法到产品，端到端交付
          </p>

          {/* Tech Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12">
            <Card className="p-6 bg-white/80 backdrop-blur border hover:border-primary/50 transition-colors hover:shadow-md">
              <div className="text-3xl font-bold text-primary mb-2">🤖 Agentic AI</div>
              <div className="text-sm text-muted-foreground">企业级 AI Agent</div>
              <div className="text-xs text-muted-foreground/60 mt-1">
                智能决策、工具调用、多轮对话
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur border hover:border-primary/50 transition-colors hover:shadow-md">
              <div className="text-3xl font-bold text-primary mb-2">🎬 AI 创作</div>
              <div className="text-sm text-muted-foreground">图像/视频生成</div>
              <div className="text-xs text-muted-foreground/60 mt-1">
                工作流编排、自动化创作、风格迁移
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur border hover:border-primary/50 transition-colors hover:shadow-md">
              <div className="text-3xl font-bold text-primary mb-2">👁️ 判别模型</div>
              <div className="text-sm text-muted-foreground">CV + BI 分析</div>
              <div className="text-xs text-muted-foreground/60 mt-1">
                特征提取、相似度检索、数据洞察
              </div>
            </Card>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-base px-8">
                开始咨询
              </Button>
            </Link>
            <Link href="/cases">
              <Button size="lg" variant="outline" className="text-base px-8">
                查看案例
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
