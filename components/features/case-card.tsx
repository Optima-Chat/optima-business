"use client"

import { useTranslations } from 'next-intl'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Case } from "@/types"
import { motion } from "framer-motion"
import { useState } from "react"
import { DollarSign, Clock, Code, GitBranch } from "lucide-react"

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
  const [isHovered, setIsHovered] = useState(false)
  const t = useTranslations('cases')

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="group h-full flex flex-col bg-gradient-to-br from-white via-white to-slate-50 border-2 border-slate-200 hover:border-blue-400 shadow-md hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-300 relative overflow-hidden">
        {/* 悬停渐变背景 */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0"
          animate={isHovered ? { opacity: [0, 0.05, 0.03] } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* 装饰性角标 */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <CardHeader className="relative">
          <div className="flex flex-wrap gap-2 mb-3">
            {caseData.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs bg-gradient-to-r from-blue-100 to-cyan-100 hover:from-blue-200 hover:to-cyan-200 border-blue-200 transition-colors duration-200"
              >
                {tagLabels[tag] || tag}
              </Badge>
            ))}
          </div>
          <CardTitle className="text-xl mb-2 group-hover:text-blue-600 transition-colors">
            {caseData.title}
          </CardTitle>
          <CardDescription className="text-sm">
            <span className="font-semibold">{t('industry')}：</span>{caseData.industry}
          </CardDescription>
        </CardHeader>

      <CardContent className="flex-1 flex flex-col relative">
        {/* 技术栈 */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2 flex items-center">
            <span className="w-1 h-4 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full mr-2" />
            {t('techStack')}
          </h4>
          <p className="text-sm text-muted-foreground pl-3">
            {caseData.techStack.join(" · ")}
          </p>
        </div>

        {/* 关键成果 */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2 flex items-center">
            <span className="w-1 h-4 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full mr-2" />
            {t('achievements')}
          </h4>
          <ul className="space-y-1.5 pl-3">
            {caseData.achievements.map((achievement, i) => (
              <li
                key={i}
                className="text-sm text-muted-foreground flex items-start group/item"
              >
                <span className="text-blue-500 mr-2">•</span>
                <span className="group-hover/item:text-foreground transition-colors">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 项目规模 */}
        <div className="mt-auto pt-4 border-t border-slate-200 group-hover:border-blue-200 transition-colors">
          <div className="grid grid-cols-2 gap-2 text-xs">
            {caseData.scale.budget && (
              <div className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md hover:bg-blue-50">
                <DollarSign className="w-4 h-4 shrink-0" />
                <span>{caseData.scale.budget}</span>
              </div>
            )}
            {caseData.scale.duration && (
              <div className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md hover:bg-blue-50">
                <Clock className="w-4 h-4 shrink-0" />
                <span>{caseData.scale.duration}</span>
              </div>
            )}
            {caseData.scale.codeLines && (
              <div className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md hover:bg-blue-50">
                <Code className="w-4 h-4 shrink-0" />
                <span>{caseData.scale.codeLines}</span>
              </div>
            )}
            {caseData.scale.repos && (
              <div className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md hover:bg-blue-50">
                <GitBranch className="w-4 h-4 shrink-0" />
                <span>{caseData.scale.repos}</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
    </motion.div>
  )
}
