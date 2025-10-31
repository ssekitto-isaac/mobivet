import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

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
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">How MOBIVET Works</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Three simple steps to protect your cattle and improve farm productivity
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border-border overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
              </div>
              <CardContent className="p-6 space-y-3">
                <div className="text-4xl font-bold text-primary/30">{step.number}</div>
                <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
