export interface CaseItem {
  id: string
  title: string
  industry: string
  description: string
  techStack: string[]
  achievements: string[]
}

export interface ContactFormData {
  name: string
  company?: string
  email: string
  phone?: string
  message: string
}
