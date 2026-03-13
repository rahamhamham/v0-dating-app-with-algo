"use client"

import { motion } from "framer-motion"
import { Link2, Brain, Heart, MessageCircle } from "lucide-react"

const steps = [
  {
    icon: Link2,
    step: "01",
    title: "Connect Your Accounts",
    description: "Sync your YouTube, Instagram, or other social media accounts to let Algo understand your true interests.",
  },
  {
    icon: Brain,
    step: "02",
    title: "Algorithm Analysis",
    description: "Our smart algorithm analyzes the content you enjoy to build a comprehensive interest profile.",
  },
  {
    icon: Heart,
    step: "03",
    title: "Curated Matches",
    description: "Receive a selection of potential matches who share your passions and values, not just surface-level traits.",
  },
  {
    icon: MessageCircle,
    step: "04",
    title: "Spark Real Connections",
    description: "Start conversations with people you already have things in common with. No more awkward small talk.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            From algorithms to love stories
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            You can tell a lot about someone from the content they consume. Algo uses this insight to find your perfect match.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
              <div className="bg-card rounded-2xl p-6 border border-border h-full relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-4xl font-bold text-border">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
