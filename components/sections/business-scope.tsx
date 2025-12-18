"use client"

import Container from "@/components/layout/container"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { businessScopes } from "@/lib/data/business-scope"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function BusinessScope() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 md:py-32 bg-gray-50" ref={ref}>
      <Container>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            业务范围
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            全方位 AI 技术服务，覆盖计算机视觉、NLP、推荐系统、数据工程
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {businessScopes.map((scope, index) => (
            <motion.div
              key={scope.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <Card className="h-full group hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 bg-white relative overflow-hidden">
                {/* 悬停渐变背景 */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-300" />

                <CardHeader className="relative">
                  <CardTitle className="text-xl mb-2 group-hover:text-blue-600 transition-colors">
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
                        className="text-xs hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-default"
                      >
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
