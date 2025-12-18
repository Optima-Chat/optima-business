import Link from "next/link"
import Container from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Enhanced Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Title with enhanced gradient animation */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in">
            <span className="gradient-text">
              極致智能 Optima AI
            </span>
          </h1>

          {/* Subtitle with fade-in */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            AI 驱动的全栈技术服务
          </p>
          <p className="text-lg md:text-xl text-muted-foreground/80 mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            从算法到产品，端到端交付
          </p>

          {/* Tech Highlights with enhanced effects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12">
            <Card className="p-6 bg-white/90 backdrop-blur-sm shine-effect card-hover border-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mb-2">🤖 Agentic AI</div>
              <div className="text-sm font-semibold text-foreground">企业级 AI Agent</div>
              <div className="text-xs text-muted-foreground mt-2">
                智能决策、工具调用、多轮对话
              </div>
            </Card>

            <Card className="p-6 bg-white/90 backdrop-blur-sm shine-effect card-hover border-2 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent mb-2">🎬 AI 创作</div>
              <div className="text-sm font-semibold text-foreground">图像/视频生成</div>
              <div className="text-xs text-muted-foreground mt-2">
                工作流编排、自动化创作、风格迁移
              </div>
            </Card>

            <Card className="p-6 bg-white/90 backdrop-blur-sm shine-effect card-hover border-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent mb-2">👁️ 判别模型</div>
              <div className="text-sm font-semibold text-foreground">CV + BI 分析</div>
              <div className="text-xs text-muted-foreground mt-2">
                特征提取、相似度检索、数据洞察
              </div>
            </Card>
          </div>

          {/* CTA with enhanced buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <Link href="/contact">
              <Button size="lg" className="text-base px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                开始咨询
              </Button>
            </Link>
            <Link href="/cases">
              <Button size="lg" variant="outline" className="text-base px-8 border-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 hover:scale-105">
                查看案例
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
