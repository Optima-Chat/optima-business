import { Metadata } from "next"
import Container from "@/components/layout/container"
import CaseCard from "@/components/features/case-card"
import { cases } from "@/lib/data/cases"

export const metadata: Metadata = {
  title: "项目案例",
  description: "Optima AI 技术服务案例展示 - 计算机视觉、NLP、推荐系统等实际项目",
}

export default function CasesPage() {
  return (
    <div className="py-20">
      <Container>
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            项目案例
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            深度 AI 技术，端到端交付，实际业务验证
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((caseItem) => (
            <CaseCard key={caseItem.id} case={caseItem} />
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            想了解更多案例详情？
          </p>
          <a
            href="/contact"
            className="text-primary hover:underline"
          >
            联系我们咨询 →
          </a>
        </div>
      </Container>
    </div>
  )
}
