"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Capture Image",
    description: "Take a clear photo of your cattle showing any visible symptoms or areas of concern.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/clinical-sign-foot-mouth-disease-mTX2jRs2biftX4YRlOmlEYaU5RK8Je.jpg",
  },
  {
    number: "02",
    title: "AI Analysis",
    description: "Our advanced AI analyzes the image to detect signs of diseases and health issues.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/foot%20disease-KWnXkbjKL6GZD8BmFHOmXb490P4Fag.jpg",
  },
  {
    number: "03",
    title: "Get Results",
    description: "Receive detailed diagnosis, treatment recommendations, and preventive measures.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pouring-fresh-raw-milk-in-glass-uL7SgbItFly9ypqHFbSNRqGsYFBgvD.jpg",
  },
]

export function HowItWorks() {
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
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
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
    <section ref={sectionRef} id="how-it-works" className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            How{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              MOBIVET
            </span>{" "}
            Works
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Three simple steps to protect your cattle and improve farm productivity
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={cardVariants}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card className="border-border overflow-hidden group h-full hover:shadow-2xl transition-all relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative aspect-[4/3] overflow-hidden">
                    <motion.div
                      className="w-full h-full"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Image
                        src={step.image || "/placeholder.svg"}
                        alt={step.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Step number overlay */}
                    <motion.div
                      className="absolute top-4 right-4 w-12 h-12 md:w-14 md:h-14 bg-primary rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-white font-bold text-lg md:text-xl">{step.number}</span>
                    </motion.div>
                  </div>

                  <CardContent className="p-6 md:p-8 space-y-3 md:space-y-4 relative">
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>

                    {/* Arrow indicator for flow */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                        <motion.div
                          animate={{ x: [0, 10, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <ArrowRight className="w-8 h-8 text-primary opacity-50" />
                        </motion.div>
                      </div>
                    )}
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
