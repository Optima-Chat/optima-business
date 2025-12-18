import Link from "next/link"
import Container from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* 纯色背景 - 商务蓝色调 */}
      <div className="absolute inset-0 bg-slate-50">
        {/* 淡化光球效果 */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/40 rounded-full filter blur-3xl" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-100/40 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-100/40 rounded-full filter blur-3xl" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Title - 纯色 */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in text-slate-900">
            極致智能 Optima AI
          </h1>

          {/* Subtitle with fade-in */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            AI 驱动的全栈技术服务
          </p>
          <p className="text-lg md:text-xl text-muted-foreground/80 mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            从算法到产品，端到端交付
          </p>

          {/* Tech Highlights - 纯色 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12">
            <Card className="p-6 bg-white shine-effect card-hover border-2 border-slate-200 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl font-bold text-blue-600 mb-2">🤖 Agentic AI</div>
              <div className="text-sm font-semibold text-foreground">企业级 AI Agent</div>
              <div className="text-xs text-muted-foreground mt-2">
                智能决策、工具调用、多轮对话
              </div>
            </Card>

            <Card className="p-6 bg-white shine-effect card-hover border-2 border-slate-200 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="text-3xl font-bold text-blue-600 mb-2">🎬 AI 创作</div>
              <div className="text-sm font-semibold text-foreground">图像/视频生成</div>
              <div className="text-xs text-muted-foreground mt-2">
                工作流编排、自动化创作、风格迁移
              </div>
            </Card>

            <Card className="p-6 bg-white shine-effect card-hover border-2 border-slate-200 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-3xl font-bold text-blue-600 mb-2">👁️ 判别模型</div>
              <div className="text-sm font-semibold text-foreground">CV + BI 分析</div>
              <div className="text-xs text-muted-foreground mt-2">
                特征提取、相似度检索、数据洞察
              </div>
            </Card>
          </div>

          {/* CTA 按钮 - 纯色 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <Link href="/contact">
              <Button size="lg" className="text-base px-8 bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all duration-300 hover:scale-105">
                开始咨询
              </Button>
            </Link>
            <Link href="/cases">
              <Button size="lg" variant="outline" className="text-base px-8 border-2 border-slate-300 hover:border-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105">
                查看案例
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
