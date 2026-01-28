"use client"

import { useTranslations } from 'next-intl'
import Container from "@/components/layout/container"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function ConversationDemo() {
  const t = useTranslations('conversation')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const messages = t.raw('messages') as Array<{
    role: 'user' | 'assistant'
    content: string
  }>

  return (
    <section className="py-20 md:py-32 border-t border-border" ref={ref}>
      <Container>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Chat Window Frame */}
          <motion.div
            className="bg-white rounded-2xl border-2 border-slate-200 shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Window Title Bar */}
            <div className="bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200 px-6 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <span className="text-sm font-medium text-slate-500 ml-3">Optima Pulse</span>
            </div>

            {/* Chat Messages */}
            <div className="p-6 space-y-4">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.15 }}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-br-md'
                        : 'bg-slate-100 text-slate-800 rounded-bl-md border border-slate-200'
                    }`}
                  >
                    {msg.role === 'assistant' && (
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                          <span className="text-[10px] text-white font-bold">P</span>
                        </div>
                        <span className="text-xs font-semibold text-blue-600">Pulse</span>
                      </div>
                    )}
                    <p className="text-sm leading-relaxed whitespace-pre-line">
                      {msg.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
