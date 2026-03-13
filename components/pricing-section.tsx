"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with basic algorithm matching",
    features: [
      "Connect 1 social account",
      "See matches in your area",
      "Basic interest matching",
      "Limited daily swipes",
      "Ad-supported experience",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Premium",
    price: "$14.99",
    period: "per month",
    description: "Unlock the full power of Algo",
    features: [
      "Connect unlimited accounts",
      "Full Interest Tree access",
      "Regional & international discovery",
      "Unlimited swipes",
      "Ad-free experience",
      "See who liked you",
      "Priority matching",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Premium+",
    price: "$24.99",
    period: "per month",
    description: "For serious connection seekers",
    features: [
      "Everything in Premium",
      "Profile boost (3x/month)",
      "Advanced compatibility insights",
      "Video chat feature",
      "Dedicated support",
      "Early access to new features",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Pricing</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Start for free. Upgrade when you{"'"}re ready to unlock more connections.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-card rounded-2xl p-6 border ${
                plan.popular ? "border-primary ring-2 ring-primary/20" : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">/{plan.period}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
