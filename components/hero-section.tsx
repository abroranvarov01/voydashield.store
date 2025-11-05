import { Button } from "@/components/ui/button"
import { Shield, Lock, Eye } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto text-center z-10">
        <div className="inline-block mb-6 px-4 py-2 border border-primary/50 rounded-full bg-primary/10 backdrop-blur-sm">
          <span className="text-sm text-primary font-mono">Cyber Futurism Technology</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance">
          <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-pulse">
            Smart Protection
          </span>
          <br />
          <span className="text-foreground">For Your Data</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          Advanced AI-powered cybersecurity technologies to protect your digital world
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border text-lg px-8 py-6"
          >
            Get Demo
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-secondary text-secondary hover:bg-secondary/10 glow-border-purple text-lg px-8 py-6 bg-transparent"
          >
            Learn More
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Shield, label: "AI Protection", value: "99.9%" },
            { icon: Lock, label: "Encryption", value: "256-bit" },
            { icon: Eye, label: "Monitoring", value: "24/7" },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 border border-primary/30 rounded-lg bg-card/50 backdrop-blur-sm glow-border hover:scale-105 transition-transform"
            >
              <stat.icon className="h-8 w-8 text-secondary mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
