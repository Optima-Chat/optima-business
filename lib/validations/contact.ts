import { z } from "zod"

export const contactFormSchema = z.object({
  name: z.string().min(2, "姓名至少2个字符").max(50, "姓名最多50个字符"),
  company: z.string().max(100, "公司名称最多100个字符").optional(),
  email: z.string().email("请输入有效的邮箱地址"),
  phone: z
    .string()
    .regex(/^1[3-9]\d{9}$/, "请输入有效的手机号")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, "项目描述至少10个字符")
    .max(1000, "项目描述最多1000个字符"),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
