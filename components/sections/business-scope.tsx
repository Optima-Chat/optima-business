import Container from "@/components/layout/container"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { businessScopes } from "@/lib/data/business-scope"

export default function BusinessScope() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            业务范围
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            全方位 AI 技术服务，覆盖计算机视觉、NLP、推荐系统、数据工程
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {businessScopes.map((scope) => (
            <Card
              key={scope.id}
              className="group hover:border-primary/50 transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="text-xl mb-2">
                  {scope.title}
                </CardTitle>
                <CardDescription className="text-base mb-4">
                  {scope.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {scope.keywords.map((keyword) => (
                    <Badge
                      key={keyword}
                      variant="secondary"
                      className="text-xs"
                    >
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
