import { Button } from "@/components/ui/button"
import { Shield, Radar, Lock } from "lucide-react"
import Link from "next/link"

const products = [
  {
    icon: Shield,
    name: "VoydaShield Pro",
    tagline: "Enterprise-Grade Protection",
    description:
      "Complete security suite for large organizations with advanced threat detection and response capabilities.",
    price: "Custom",
  },
  {
    icon: Radar,
    name: "ThreatRadar AI",
    tagline: "Intelligent Threat Detection",
    description: "AI-powered threat intelligence platform that predicts and prevents attacks before they happen.",
    price: "$999/mo",
  },
  {
    icon: Lock,
    name: "SecureVault",
    tagline: "Quantum Encryption",
    description: "Next-generation data encryption using quantum-resistant algorithms for maximum security.",
    price: "$499/mo",
  },
]

export function ProductsShowcase() {
  return (
    <section className="relative py-24 px-4 bg-background/50">
      <div className="container mx-auto z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Our Products
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Cutting-edge security products designed for the modern digital landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="p-8 border border-primary/30 rounded-lg bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all glow-border group hover:scale-105"
            >
              <div className="inline-block p-4 rounded-lg bg-secondary/20 border border-secondary/50 glow-border-purple mb-6">
                <product.icon className="h-12 w-12 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <p className="text-secondary text-sm mb-4 font-mono">{product.tagline}</p>
              <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">{product.price}</span>
                <Button
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary/10 glow-border-purple bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/products">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border text-lg px-8"
            >
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
