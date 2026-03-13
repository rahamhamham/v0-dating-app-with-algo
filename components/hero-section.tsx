"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Heart, Sparkles, Users } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Algorithm-Powered Matching</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Find love through your{" "}
              <span className="text-primary">shared passions</span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Stop swiping through endless profiles. Algo analyzes your YouTube and social media interests to connect you with people who truly get you.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-base px-8">
                Join the Waitlist
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-secondary border-2 border-background flex items-center justify-center"
                    >
                      <Users className="w-4 h-4 text-muted-foreground" />
                    </div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">10k+</span> on waitlist
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary fill-primary" />
                <span className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">94%</span> match rate
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-sm">
              {/* Phone mockup */}
              <div className="relative bg-card rounded-[3rem] p-3 shadow-2xl border border-border">
                <div className="bg-foreground/5 rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                  <div className="h-full flex flex-col">
                    {/* App header */}
                    <div className="bg-primary p-4 text-primary-foreground">
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-bold text-lg">Algo</span>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-primary-foreground/20" />
                        </div>
                      </div>
                    </div>

                    {/* Profile card */}
                    <div className="flex-1 p-4 flex flex-col">
                      <div className="flex-1 bg-secondary rounded-2xl p-4 flex flex-col">
                        <div className="flex-1 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-20 h-20 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                              <Heart className="w-10 h-10 text-primary" />
                            </div>
                            <h3 className="font-semibold text-foreground">Sarah, 26</h3>
                            <p className="text-sm text-muted-foreground mt-1">Tech enthusiast</p>
                          </div>
                        </div>
                        
                        {/* Interest tags */}
                        <div className="flex flex-wrap gap-2 mt-4 justify-center">
                          {["Travel", "Cooking", "Tech", "Music"].map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Match percentage */}
                        <div className="mt-4 bg-accent/30 rounded-xl p-3 text-center">
                          <span className="text-2xl font-bold text-primary">89%</span>
                          <p className="text-xs text-muted-foreground">Interest Match</p>
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex justify-center gap-4 mt-4">
                        <button className="w-14 h-14 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-secondary/80 transition-colors">
                          <span className="text-xl">✕</span>
                        </button>
                        <button className="w-14 h-14 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors">
                          <Heart className="w-6 h-6 text-primary-foreground" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-card p-3 rounded-xl shadow-lg border border-border"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">New Match!</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-card p-3 rounded-xl shadow-lg border border-border"
              >
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary fill-primary" />
                  <span className="text-sm font-medium">Shared interests: 12</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
