import { Case } from "@/types"

export const cases: Case[] = [
  {
    id: "ai-photo-selection",
    title: "AI照片智能选片系统",
    industry: "影视制作",
    description: "基于 CLIP + FAISS + MUSIQ 的智能照片筛选系统",
    techStack: ["CLIP", "FAISS", "MUSIQ", "TypeScript", "Python", "RabbitMQ"],
    achievements: [
      "1000张照片 4.4分钟处理",
      "性能提升80倍（6小时 → 4.4分钟）",
      "自动相似度聚类 + 质量评分",
    ],
    highlights: [
      "流式处理架构",
      "GPU优化加速",
      "分布式任务队列",
      "实时监控告警",
    ],
    scale: {
      budget: "20万元",
      duration: "2个月",
    },
    tags: ["computer-vision", "deep-learning", "high-performance"],
    order: 1,
  },
  {
    id: "intelligent-customer-service",
    title: "企业智能客服平台",
    industry: "母婴电商",
    description: "基于 NLP 的多轮对话智能客服系统",
    techStack: ["NLP", "知识图谱", "多轮对话", "Node.js", "PostgreSQL"],
    achievements: [
      "5个软件著作权申请",
      "7x24小时自动响应",
      "多渠道消息整合",
    ],
    highlights: [
      "意图识别引擎",
      "知识库检索",
      "对话状态管理",
      "智能推荐系统",
    ],
    scale: {
      duration: "企业级项目",
    },
    tags: ["nlp", "knowledge-graph"],
    order: 2,
  },
  {
    id: "user-profiling-system",
    title: "用户画像分析系统",
    industry: "电商零售",
    description: "基于机器学习的用户分群与精准营销系统",
    techStack: ["机器学习", "数据挖掘", "实时计算", "Spark", "Redis"],
    achievements: [
      "精准用户分群",
      "营销转化率显著提升",
      "百万级用户实时分析",
    ],
    highlights: [
      "特征工程自动化",
      "多维聚类算法",
      "实时标签更新",
      "A/B测试平台",
    ],
    scale: {
      duration: "持续迭代",
    },
    tags: ["recommendation", "data-engineering"],
    order: 3,
  },
  {
    id: "marketing-analytics",
    title: "营销数据分析平台",
    industry: "电商零售",
    description: "全链路营销数据追踪与分析系统",
    techStack: ["数据可视化", "BI分析", "自动报表", "React", "Python"],
    achievements: [
      "全链路数据追踪",
      "自动化报表生成",
      "实时投放优化建议",
    ],
    highlights: [
      "数据管道设计",
      "指标体系搭建",
      "可视化看板",
      "异常检测告警",
    ],
    scale: {
      duration: "3个月",
    },
    tags: ["data-engineering"],
    order: 4,
  },
  {
    id: "smart-reminder-system",
    title: "智能催拍催付系统",
    industry: "电商零售",
    description: "基于用户行为的自动化营销触达系统",
    techStack: ["规则引擎", "行为分析", "消息推送", "Go", "Kafka"],
    achievements: [
      "自动化营销触达",
      "转化率显著提升",
      "多渠道消息推送",
    ],
    highlights: [
      "用户行为预测",
      "触达时机优化",
      "渠道智能选择",
      "效果实时反馈",
    ],
    scale: {
      duration: "2个月",
    },
    tags: ["recommendation", "marketing-automation"],
    order: 5,
  },
  {
    id: "ai-training-platform",
    title: "AI训练与优化系统",
    industry: "AI应用",
    description: "自动化模型训练与优化平台",
    techStack: ["MLOps", "模型训练", "评估优化", "Kubernetes", "PyTorch"],
    achievements: [
      "自动化训练流程",
      "持续优化模型效果",
      "完整 MLOps 平台",
    ],
    highlights: [
      "训练管道自动化",
      "模型评估体系",
      "A/B测试框架",
      "模型版本管理",
    ],
    scale: {
      duration: "4个月",
    },
    tags: ["mlops", "deep-learning"],
    order: 6,
  },
]
