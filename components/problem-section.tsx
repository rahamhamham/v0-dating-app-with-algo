"use client"

import { motion } from "framer-motion"
import { TrendingDown, Clock, Frown, Zap } from "lucide-react"

const stats = [
  {
    icon: TrendingDown,
    stat: "78%",
    description: "of Gen Z users experience dating app fatigue",
  },
  {
    icon: Clock,
    stat: "40%",
    description: "feel burned out from failing to find connections",
  },
  {
    icon: Frown,
    stat: "5",
    description: "photos aren't enough to truly know someone",
  },
  {
    icon: Zap,
    stat: "∞",
    description: "swipes wasted on incompatible matches",
  },
]

export function ProblemSection() {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Online dating burnout is real
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Swiping through endless profiles only to end up on awkward first dates with people who tick boxes on paper but have nothing in common with you.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 text-center border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-4xl font-bold text-foreground mb-2">{item.stat}</p>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-card rounded-3xl p-8 md:p-12 border border-border"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                A personal story of connection
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {'"'}I met my partner on a dating app, but I almost swiped left. It wasn{"'"}t until I noticed we shared the same interests and passions that I gave them a chance. Later, I discovered we had the same YouTube and Instagram algorithms.{'"'}
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We had so much in common! That{"'"}s when I thought: there has to be a better way to find people like this faster. <span className="text-primary font-medium">Why not match based on our social media algorithms?</span>
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="w-48 h-48 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-primary/40 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-3xl">💡</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
