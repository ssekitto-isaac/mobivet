import { Card, CardContent } from "@/components/ui/card"
import { Camera, Zap, Shield, TrendingUp, Bell, Database } from "lucide-react"

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
  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Powerful Features for Modern Farmers
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            MOBIVET combines cutting-edge AI technology with practical farming needs to deliver a comprehensive cattle
            health management solution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
