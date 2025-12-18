import Link from "next/link"
import Container from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import CaseCard from "@/components/features/case-card"
import { cases } from "@/lib/data/cases"

export default function FeaturedCases() {
  // 显示前3个案例
  const featuredCases = cases.slice(0, 3)

  return (
    <section className="py-20 md:py-32 border-t border-border">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            精选案例
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            深度 AI 技术，端到端交付，实际业务验证
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredCases.map((caseItem) => (
            <CaseCard key={caseItem.id} case={caseItem} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/cases">
            <Button variant="outline" size="lg">
              查看全部案例
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  )
}
