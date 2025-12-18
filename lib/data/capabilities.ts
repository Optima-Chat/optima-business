import { Capability } from "@/types"

export const capabilities: Capability[] = [
  {
    id: "deep-ai",
    icon: "🤖",
    title: "深度AI能力",
    description:
      "CLIP、FAISS、MUSIQ 等前沿模型，计算机视觉、NLP、推荐系统全覆盖。GPU集群优化，性能提升数十倍。",
    details: [
      "计算机视觉：图像识别、视频分析、质量评估",
      "自然语言处理：智能客服、文本分析、多语言支持",
      "推荐系统：个性化推荐、用户画像、精准营销",
    ],
  },
  {
    id: "full-stack",
    icon: "🚀",
    title: "全栈交付",
    description:
      "从前端 React/Next.js 到后端 Python/Node.js，数据库到消息队列，完整架构设计。Docker/K8s 部署，监控告警一站式。",
    details: [
      "前端：React、Next.js、TypeScript、Tailwind CSS",
      "后端：Python、Node.js、Go、微服务架构",
      "数据：PostgreSQL、Redis、MongoDB、Kafka、RabbitMQ",
      "部署：Docker、Kubernetes、CI/CD、监控告警",
    ],
  },
  {
    id: "fast-iteration",
    icon: "⚡",
    title: "快速迭代",
    description:
      "2个月交付企业级系统。顶级团队，腾讯/阿里/港科大背景。敏捷开发，持续交付，快速响应需求变化。",
    details: [
      "顶级团队：腾讯/阿里总监 + 港科大博士",
      "技术实力：60万+行生产代码，18个独立仓库",
      "敏捷开发：2周迭代周期，持续交付",
      "质量保障：代码审查、自动化测试、性能优化",
    ],
  },
]
