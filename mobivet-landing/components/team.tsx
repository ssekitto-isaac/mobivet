import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail } from "lucide-react"

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
  return (
    <section id="team" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Meet the Founders</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Passionate innovators dedicated to revolutionizing cattle health management in Africa
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {founders.map((founder, index) => (
              <Card key={index} className="border-border overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={founder.image || "/placeholder.svg"}
                    alt={founder.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-2xl font-semibold text-foreground">{founder.name}</h3>
                  <p className="text-primary font-medium">{founder.role}</p>
                  <div className="flex gap-3 pt-2">
                    <button className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors">
                      <Linkedin className="w-5 h-5 text-primary" />
                    </button>
                    <button className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
