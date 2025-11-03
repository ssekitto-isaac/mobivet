"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Camera, Zap, Shield, TrendingUp, Bell, Database } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const features = [
  {
    icon: Camera,
    title: "Image Recognition",
    description: "Simply take a photo of your cattle to instantly detect potential diseases and health issues.",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "Get accurate disease detection results in seconds, enabling quick decision-making.",
  },
  {
    icon: Shield,
    title: "Early Detection",
    description: "Identify diseases in their early stages to prevent spread and reduce treatment costs.",
  },
  {
    icon: TrendingUp,
    title: "Health Tracking",
    description: "Monitor your herd's health over time with comprehensive tracking and analytics.",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description: "Receive notifications about potential health risks and recommended actions.",
  },
  {
    icon: Database,
    title: "Disease Database",
    description: "Access detailed information about 15+ common cattle diseases and treatments.",
  },
]

export function Features() {
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section ref={sectionRef} id="features" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Powerful Features for{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Modern Farmers
            </span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            MOBIVET combines cutting-edge AI technology with practical farming needs to deliver a comprehensive cattle
            health management solution.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Card className="border-border hover:border-primary/50 transition-all h-full group hover:shadow-xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardContent className="p-6 md:p-8 space-y-4 relative z-10">
                    <motion.div
                      className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                    </motion.div>
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
