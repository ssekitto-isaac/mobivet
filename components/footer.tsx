"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        const offset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }
  }

  return (
    <footer className="py-12 md:py-16 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                className="w-9 h-9 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-primary-foreground font-bold text-lg">M</span>
              </motion.div>
              <span className="text-xl font-bold text-foreground">MOBIVET</span>
            </Link>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              AI-powered cattle disease detection for modern farmers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-2.5">
              {[
                { href: "#features", label: "Features" },
                { href: "#how-it-works", label: "How It Works" },
                { href: "#", label: "Pricing" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors inline-block hover:translate-x-1 transition-transform"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2.5">
              {[
                { href: "#team", label: "Team" },
                { href: "#", label: "About" },
                { href: "#", label: "Contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors inline-block hover:translate-x-1 transition-transform"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2.5">
              {[
                { href: "#", label: "Privacy" },
                { href: "#", label: "Terms" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors inline-block hover:translate-x-1 transition-transform"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="pt-8 border-t border-border text-center text-sm md:text-base text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>
            © 2025 MOBIVET. All rights reserved.{" "}
            <span className="inline-block">
              Built with <span className="text-red-500 animate-pulse">❤️</span> for farmers.
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
