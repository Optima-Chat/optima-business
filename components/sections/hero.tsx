"use client"

import Link from "next/link"
import Container from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Enhanced Background with animated gradient - 商务蓝色调 */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Animated gradient orbs - 蓝色系 with enhanced motion */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-200/60 rounded-full mix-blend-multiply filter blur-xl opacity-40"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-72 h-72 bg-cyan-200/60 rounded-full mix-blend-multiply filter blur-xl opacity-40"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-300/60 rounded-full mix-blend-multiply filter blur-xl opacity-40"
          animate={{
            scale: [1, 1.25, 1],
            x: [0, 20, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* 添加网格背景效果 */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] opacity-20" style={{
          backgroundImage: `linear-gradient(to right, rgb(203 213 225 / 0.3) 1px, transparent 1px),
                           linear-gradient(to bottom, rgb(203 213 225 / 0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Title with enhanced gradient animation */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="gradient-text">
              極致智能 Optima AI
            </span>
          </motion.h1>

          {/* Subtitle with fade-in */}
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            AI 驱动的全栈技术服务
          </motion.p>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground/80 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            从算法到产品，端到端交付
          </motion.p>

          {/* Tech Highlights with enhanced effects - 商务蓝色系 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12">
            {[
              {
                icon: "🤖",
                title: "Agentic AI",
                subtitle: "企业级 AI Agent",
                description: "智能决策、工具调用、多轮对话",
                gradient: "from-blue-600 to-blue-500",
                delay: 0.4
              },
              {
                icon: "🎬",
                title: "AI 创作",
                subtitle: "图像/视频生成",
                description: "工作流编排、自动化创作、风格迁移",
                gradient: "from-cyan-600 to-blue-600",
                delay: 0.5
              },
              {
                icon: "👁️",
                title: "判别模型",
                subtitle: "CV + BI 分析",
                description: "特征提取、相似度检索、数据洞察",
                gradient: "from-blue-700 to-cyan-600",
                delay: 0.6
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item.delay, ease: "easeOut" }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Card className="p-6 h-full bg-white/95 backdrop-blur-sm border-2 border-slate-200 shadow-lg hover:shadow-2xl hover:shadow-blue-100/50 hover:border-blue-300 transition-all duration-300 relative overflow-hidden group">
                  {/* 悬停光效 */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-2`}>
                      {item.icon} {item.title}
                    </div>
                    <div className="text-sm font-semibold text-foreground">{item.subtitle}</div>
                    <div className="text-xs text-muted-foreground mt-2">
                      {item.description}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA with enhanced buttons - 商务蓝 */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          >
            <Link href="/contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" className="text-base px-8 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all duration-300">
                  开始咨询
                </Button>
              </motion.div>
            </Link>
            <Link href="/cases">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" variant="outline" className="text-base px-8 border-2 border-slate-300 hover:border-blue-500 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-300">
                  查看案例
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
