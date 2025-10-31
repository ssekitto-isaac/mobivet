import { Button } from "@/components/ui/button"
import { ArrowRight, Smartphone } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
              <Smartphone className="w-4 h-4" />
              AI-Powered Cattle Health
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Detect Cattle Diseases <span className="text-primary">Instantly</span> with AI
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              MOBIVET uses advanced artificial intelligence to help farmers identify cattle diseases early, ensuring
              healthier livestock and better farm productivity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base">
                Download App
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent">
                Learn More
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-3xl font-bold text-foreground">15+</div>
                <div className="text-sm text-muted-foreground">Diseases Detected</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-3xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LONG-HORNED-ANKOLE-COW-BLOG-4csPxniTZQxytYgTQnxmpUKwl059M6.png"
                alt="Healthy Ankole cattle in field"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
