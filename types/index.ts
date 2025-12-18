export type TechTag =
  | "agentic-ai"
  | "mcp"
  | "multi-modal"
  | "ecommerce"
  | "automation"
  | "video-generation"
  | "image-generation"
  | "comfyui"
  | "computer-vision"
  | "nlp"
  | "recommendation"
  | "deep-learning"
  | "data-engineering"
  | "bi-analytics"
  | "high-performance"
  | "mlops"
  | "distributed-system"
  | "knowledge-graph"
  | "marketing-automation"

export interface Case {
  id: string
  title: string
  industry: string
  description: string
  techStack: string[]
  achievements: string[]
  highlights: string[]
  scale: {
    budget?: string
    duration?: string
    codeLines?: string
    repos?: string
  }
  tags: TechTag[]
  image?: string
  order: number
}

export interface Capability {
  id: string
  icon: string
  title: string
  description: string
  details?: string[]
}

export interface BusinessScope {
  id: string
  title: string
  description: string
  keywords: string[]
  icon?: string
}

export interface ContactFormData {
  name: string
  company?: string
  email: string
  phone?: string
  message: string
}
