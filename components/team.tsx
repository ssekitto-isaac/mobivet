"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const founders = [
  {
    name: "Ssekitto Isaac",
    role: "Co-Founder",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ssekitto%20isaac.JPG-lSl9XLaG5aCJ3E901GLuxYCpswHiR6.jpeg",
  },
  {
    name: "Oyoka Daniel",
    role: "Co-Founder",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oyoka%20daniel.JPG-bHVcJY9Q1LZedOFAaGP7fryRn0p9m7.jpeg",
  },
]

export function Team() {
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section ref={sectionRef} id="team" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Meet the{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Founders
            </span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Passionate innovators dedicated to revolutionizing cattle health management in Africa
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid sm:grid-cols-2 gap-8 md:gap-10">
            {founders.map((founder, index) => (
              <motion.div key={index} variants={cardVariants}>
                <motion.div
                  whileHover={{ y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <Card className="border-border overflow-hidden group hover:shadow-2xl transition-all h-full relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative aspect-[3/4] overflow-hidden">
                      <motion.div
                        className="w-full h-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Image
                          src={founder.image || "/placeholder.svg"}
                          alt={founder.name}
                          fill
                          className="object-cover object-center"
                        />
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                      {/* Decorative corner accent */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <CardContent className="p-6 md:p-8 space-y-3 md:space-y-4 relative">
                      <motion.h3
                        className="text-2xl md:text-3xl font-semibold text-foreground group-hover:text-primary transition-colors"
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                      >
                        {founder.name}
                      </motion.h3>
                      <motion.p
                        className="text-primary font-medium text-lg"
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                      >
                        {founder.role}
                      </motion.p>

                      <motion.div
                        className="flex gap-3 pt-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      >
                        <motion.button
                          className="w-11 h-11 bg-primary/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors group/btn"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Linkedin className="w-5 h-5 text-primary group-hover/btn:text-white transition-colors" />
                        </motion.button>
                        <motion.button
                          className="w-11 h-11 bg-primary/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors group/btn"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Mail className="w-5 h-5 text-primary group-hover/btn:text-white transition-colors" />
                        </motion.button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
