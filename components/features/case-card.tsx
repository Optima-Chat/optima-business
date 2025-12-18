import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Case } from "@/types"

interface CaseCardProps {
  case: Case
}

const tagLabels: Record<string, string> = {
  "agentic-ai": "Agentic AI",
  "mcp": "标准协议",
  "multi-modal": "多模态 AI",
  "ecommerce": "电商",
  "automation": "自动化",
  "video-generation": "视频生成",
  "image-generation": "图像生成",
  "computer-vision": "计算机视觉",
  "nlp": "NLP",
  "recommendation": "推荐系统",
  "deep-learning": "深度学习",
  "data-engineering": "数据工程",
  "bi-analytics": "BI 分析",
  "high-performance": "高性能计算",
  "mlops": "MLOps",
  "distributed-system": "分布式系统",
  "knowledge-graph": "知识图谱",
  "marketing-automation": "营销自动化",
}

export default function CaseCard({ case: caseData }: CaseCardProps) {
  return (
    <Card className="group hover:border-primary/50 transition-all duration-300 h-full flex flex-col card-hover shine-effect bg-gradient-to-br from-white to-blue-50/30">
      <CardHeader>
        <div className="flex flex-wrap gap-2 mb-3">
          {caseData.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs bg-gradient-to-r from-blue-100 to-purple-100 hover:from-blue-200 hover:to-purple-200 transition-colors">
              {tagLabels[tag] || tag}
            </Badge>
          ))}
        </div>
        <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
          {caseData.title}
        </CardTitle>
        <CardDescription className="text-sm">
          <span className="font-semibold">行业：</span>{caseData.industry}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col">
        {/* 技术栈 */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2">技术栈</h4>
          <p className="text-sm text-muted-foreground">
            {caseData.techStack.join(" · ")}
          </p>
        </div>

        {/* 关键成果 */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2">关键成果</h4>
          <ul className="space-y-1">
            {caseData.achievements.map((achievement, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 项目规模 */}
        <div className="mt-auto pt-4 border-t border-border">
          <div className="flex flex-col gap-1 text-xs text-muted-foreground">
            {caseData.scale.budget && (
              <span>💰 规模：{caseData.scale.budget}</span>
            )}
            {caseData.scale.duration && (
              <span>⏱️ 工期：{caseData.scale.duration}</span>
            )}
            {caseData.scale.codeLines && (
              <span>📦 代码：{caseData.scale.codeLines}</span>
            )}
            {caseData.scale.repos && (
              <span>🔗 仓库：{caseData.scale.repos}</span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
