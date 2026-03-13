"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-primary-foreground fill-primary-foreground" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground text-balance">
            Ready to find your perfect match?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 leading-relaxed">
            Join thousands already on the waitlist. Be among the first to experience algorithm-powered dating when we launch.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
            />
            <Button size="lg" variant="secondary" className="shrink-0">
              Join Waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <p className="mt-4 text-sm text-primary-foreground/60">
            Launching in Orlando, Florida • Coming to more cities soon
          </p>
        </motion.div>
      </div>
    </section>
  )
}
