"use client"

import { motion } from "framer-motion"
import { TreeDeciduous, Globe, Shield, Sparkles, Users, Zap } from "lucide-react"

const features = [
  {
    icon: TreeDeciduous,
    title: "Interest Tree",
    description: "Visualize connections between hobbies and interests across all users. Discover new passions through your matches.",
    highlight: true,
  },
  {
    icon: Globe,
    title: "Regional Discovery",
    description: "Expand your search beyond your local area. Find matches in different cities or even countries.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data is encrypted and never shared. You control what information is visible on your profile.",
  },
  {
    icon: Sparkles,
    title: "Smart Algorithm",
    description: "Our AI analyzes watch time and engagement patterns, not just surface-level tags.",
  },
  {
    icon: Users,
    title: "Verified Profiles",
    description: "Connect with confidence. All profiles are verified to ensure authentic connections.",
  },
  {
    icon: Zap,
    title: "Instant Chemistry",
    description: "Get conversation starters based on your shared interests. Never run out of things to talk about.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Features</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Everything you need to find real connection
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Algo removes the noise of online dating and gets you to meet genuine people faster.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-card rounded-2xl p-6 border border-border ${
                feature.highlight ? "md:col-span-2 lg:col-span-1 ring-2 ring-primary/20" : ""
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                feature.highlight ? "bg-primary" : "bg-primary/10"
              }`}>
                <feature.icon className={`w-6 h-6 ${
                  feature.highlight ? "text-primary-foreground" : "text-primary"
                }`} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              {feature.highlight && (
                <div className="mt-4 inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                  Premium Feature
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
