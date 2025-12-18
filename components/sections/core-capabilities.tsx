import Container from "@/components/layout/container"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { capabilities } from "@/lib/data/capabilities"

export default function CoreCapabilities() {
  return (
    <section className="py-20 md:py-32 border-t border-border">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            核心能力
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            深度 AI 技术 × 全栈工程能力 × 快速交付
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((capability) => (
            <Card
              key={capability.id}
              className="relative group hover:border-primary/50 transition-all duration-300"
            >
              <CardHeader>
                <div className="text-5xl mb-4">{capability.icon}</div>
                <CardTitle className="text-xl mb-3">
                  {capability.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {capability.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
