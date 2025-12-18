import { BusinessScope } from "@/types"

export const businessScopes: BusinessScope[] = [
  {
    id: "computer-vision",
    title: "计算机视觉",
    description: "图像识别、视频分析、质量评估、目标检测",
    keywords: ["CLIP", "YOLO", "目标检测", "图像分类", "OCR", "人脸识别"],
  },
  {
    id: "nlp",
    title: "自然语言处理",
    description: "智能客服、文本分析、多语言支持、语义理解",
    keywords: ["对话系统", "情感分析", "文本分类", "命名实体识别", "机器翻译"],
  },
  {
    id: "recommendation",
    title: "推荐系统",
    description: "个性化推荐、用户画像、精准营销、协同过滤",
    keywords: ["协同过滤", "深度学习推荐", "实时推荐", "冷启动", "A/B测试"],
  },
  {
    id: "data-engineering",
    title: "数据工程",
    description: "高性能计算、分布式系统、实时处理、大数据分析",
    keywords: ["数据管道", "实时计算", "离线分析", "数据仓库", "BI平台"],
  },
]
